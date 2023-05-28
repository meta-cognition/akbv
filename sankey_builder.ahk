; The Sankey Builder (aka Alaska Budget Visualizer)
;   by Dom Pannone, THBP, 2020-2021
;=======================================================================|
;OPTIMIZATIONS START
#NoEnv
#MaxHotkeysPerInterval 99000000
#HotkeyInterval 99000000
#KeyHistory 0
ListLines Off
Process, Priority, , A
SetBatchLines, -1
SetKeyDelay, -1, -1
SetMouseDelay, -1
SetDefaultMouseSpeed, 0
SetWinDelay, -1
SetControlDelay, -1
SendMode Input
;OPTIMIZATIONS END
;=======================================================================|
SetWorkingDir %A_ScriptDir%                                             ; Ensures a consistent starting directory.
;=======================================================================|
#Include includes\csv.ahk                                               ; see file, add byref to csv load to load file once
#Include includes\obj2str.ahk                                           ; Obj2Str(obj), use https://beautifier.io/ to format output.
;=======================================================================|
#Include includes\sankey_function_select_files.ahk                      ; select_new_files(), use_files_from_last_time()	
;=======================================================================|
#Include includes\sankey_function_csv_sum_revenue.ahk                   ; csv_find_and_sum_revenue(string_find, search_column)
#Include includes\sankey_function_csv_sum_expenditure.ahk               ; csv_find_and_sum_expenditure(string_find, search_column)
#Include includes\sankey_function_csv_sum_appropriation.ahk             ; csv_find_and_sum_appropriation(string_find, search_column)
#Include includes\sankey_function_csv_sum_positions.ahk                 ; csv_find_and_sum_positions(string_find, search_column)
#Include includes\sankey_function_csv_find_replace.ahk                  ; csv_find_replace(string_find, string_replace)    
;=======================================================================|
#Include includes\sankey_function_build_nodes.ahk                       ; build_nodes_from_columns(columns*) **NOTE: columns must be added from left to right.**
#Include includes\sankey_function_build_links.ahk                       ; see file
#Include includes\sankey_function_build_json.ahk                        ; build_json()
#Include includes\sankey_function_build_javascript.ahk                  ; build_javascript()
#Include includes\sankey_function_build_html.ahk                        ; build_html()
#Include includes\sankey_function_build_html_menu.ahk                   ; build_html_menu()
;=======================================================================|
#Include includes\sankey_function_fund_type.ahk					  ; build_html_menu()
;=======================================================================|
#Include includes\sankey_function_initialize_colors.ahk                 ; InitializeColors()
#Include includes\sankey_function_initialize_departments.ahk            ; InitializeDepartments()
;=======================================================================|
;#Include includes\sankey_function_load_and_apply_filter_to_csv.ahk     ; (deprecated) load_and_apply_filter_to_csv(csv_include_filters = "no-filters", csv_exclude_filters = "no-filters")
#Include includes\sankey_function_load_and_apply_filter_to_csv_v2.ahk   ; load_and_apply_filter_to_csv(csv_include_filters = "no-filters", csv_exclude_filters = "no-filters")
#Include includes\sankey_function_cleanup_data.ahk                      ; cleanup_data()
#Include includes\sankey_function_format_number.ahk                     ; format_to_readable(value)
;=======================================================================|
#Include includes\sankey_function_array_searches.ahk                    ; HasNodeId(), HasHyperLinkVal(), NodeRowNumber(), 
                                                                        ;       NodeID(), LinkColor(), NodeColor() 
;=======================================================================|
#Include includes\sankey_reference.ahk                                  ; human readable reference file for object structures

; STATIC COLUMNS FOR OPERATING BUDGET SOURCE DATA
department_column	:= 4     ; e.g. Transportation
rdu_column		:= 7     ; e.g. Marine Highway System
component_column	:= 10    ; e.g. Vessel Operations
fund_column		:= 11    ; e.g. 1004 GF
line_column		:= 12    ; e.g. Expenditure/Revenue
group_column 		:= 14    ; e.g. UGF/DFG/FED/OTHER
value_column 		:= 16    ; e.g. (value)
scenario_column	:= 11    ;
scenario_row		:= 2     ;
web_column		:= 17	

; FOR FILTERS
position_labels             := "Permanent Part-Time|Permanent Full-Time|Non-Permanent"
expenditure_labels          := "Personal Services|Travel|Contractual Services|Commodities|Capital Outlay|Line 76000|Grants, Benefits|Miscellaneous"
non_fund_labels             := expenditure_labels . "|" . position_labels

; MISC VARIABLES
json_value_format           := "valueformat: ""$,.1f"","        ; json_value_format     := "valueformat: ""-$,.1f"","
format_mode                 := "dollars"                        ; "dollars" or "positions"
show_values_in_labels       := true                             ; show values next to node labels
sum_appropriation_values    := false                            ; set to true for values in a capital budget
menu_html                   := ""
rn                          := "`r`n"

MsgBox, 4, Use same source data from last run?, Click YES to attempt to use same source data you used last time`, click NO to select new budget scenario files.
IfMsgBox, No
{
	select_new_files()	
}
IfMsgBox, Yes
{
	use_files_from_last_time()
}

; SO DOM COBB CAN KNOW IF HE'S IN SANKEY WITHIN A SANKEY... WITHIN A SANKEY.
parent_levels := 0          ; DO NOT CHANGE - how many '../' to find plotly.js, starts at 0

; FOR TRACKING
this_build_uid := A_Now     ; a unique timestamp for each build, embeded/fingerprinted in the html file as well.

; MANUALLY CHANGE THIS
save_csv_files := false     ; set to true for troubleshooting, set to false for speed.

; SET UP DIRECTORY FOR THIS BUILD
build_directory := A_ScriptDir "\builds\" this_build_uid 
csv_directory := build_directory "\csv_files"

FileCreateDir, % build_directory

; SHOW CUPCAKE, SING HAPPY BIRTHDAY
DoGui()

; Progress, A M T ZH0 Y0 FS10 W800 H80 C00,
Run, explore %build_directory%
WinWait, % this_build_uid, , 60
WinMove, % this_build_uid, , % A_ScreenWidth/2 - 500*(A_ScreenDPI/96), 150*(A_ScreenDPI/96), 1000*(A_ScreenDPI/96), 600*(A_ScreenDPI/96)

FileCreateDir, % csv_directory
FileCreateDir, % csv_directory "\source"

plotly_source := "plotly-latest.min.js"
FileCopy, % A_ScriptDir "\resources\js\plotly\plotly-latest.min.js", % build_directory "\plotly-latest.min.js"

InitializeColors()
InitializeDepartments()

; MORE VARIABLES
sankey_object 				:= {}
sankey_object.links 		:= []
sankey_object.hyperlink_ids 	:= []
javascript_links 			:= ""
javascript_hovers 			:= ""

; GO TIME
;=========================================================================
StartTime := A_TickCount
if ( sankey_csv_source != "" )
{
	FileCopy, % sankey_csv_source, % csv_directory                  ; copy/bakcup input data within build for refenence, troubleshooting/analysis, auditing
	FileRead, sankey_csv_ramfile, % sankey_csv_source               ; stores source data in memory
	cleanup_data()
	#Include includes\sankey_instruction_0.ahk        ; Statewide All Dept
	#Include includes\sankey_instruction_1.ahk        ; Fund RDU Component
	#Include includes\sankey_instruction_2.ahk        ; RDU only and Component only
	#Include includes\sankey_instruction_3.ahk        ; PCN Main
	#Include includes\sankey_instruction_4.ahk        ; Department Overview
}
FileAppend, % "Operating Build Time: " FormatSeconds((A_TickCount-StartTime)/1000) rn, % build_directory "\build-time.txt"
;=========================================================================
StartTime := A_TickCount
if ( input_file_1 != "" )
{
	output_file_1 := csv_directory "\capital_fund_category_conditioned_" A_Now ".txt"
	cmd := "interpreter\autohotkey .\capital_etl_statewide_fund_category.ahk """ input_file_1 """ """ output_file_1 """"
	runwait, % cmd
	sankey_csv_source_capital_category := output_file_1
	FileRead, sankey_csv_ramfile, % sankey_csv_source_capital_category                ; stores source data in memory
	cleanup_data(true)
	#Include includes\sankey_instruction_5.ahk        ; Statewide All Dept Capital fund category
}
FileAppend, % "Capital Category Build Time: " FormatSeconds((A_TickCount-StartTime)/1000) rn, % build_directory "\build-time.txt"
;=========================================================================
StartTime := A_TickCount
if ( input_file_2 != "" )
{
	project_links := {}
	output_file_2 := csv_directory "\capital_statewide_conditioned_" A_Now ".txt"
	output_file_3 := csv_directory "\links_" A_Now ".txt"
	cmd := "interpreter\autohotkey .\capital_etl_by_department.ahk """ input_file_2 """ """ output_file_2 """ """ output_file_3 """"
	runwait, % cmd
	loop, read, % output_file_3
	{
		link_content := StrSplit(A_LoopReadLine, "^")
		link_project_name := link_content[1]
		link_project_link := link_content[2]
		project_links[link_project_name] := link_project_link 
	}
	sankey_csv_source_capital_statewide := output_file_2
	FileRead, sankey_csv_ramfile, % sankey_csv_source_capital_statewide                ; stores source data in memory
	cleanup_data(true)
	#Include includes\sankey_instruction_6.ahk        ; Capital Budget
}
FileAppend, % "Capital Statewide Build Time: " FormatSeconds((A_TickCount-StartTime)/1000) rn, % build_directory "\build-time.txt"

;all 3 required for capital for DOT&PF's budget
find_replace_in_file( "width: 1200," 	, "width: 1600," 	, build_directory "\transportation\plot-capital.html")
find_replace_in_file( "height: 800," 	, "height: 4000," 	, build_directory "\transportation\plot-capital.html")
find_replace_in_file( "width:1200px;" 	, "width:1600px;" 	, build_directory "\transportation\plot-capital.html")


;Run, % build_directory "\build-time.txt"
FileRead, goodbye_msg, % build_directory "\build-time.txt"
Gui, Hide
msgbox, 0x40000, Goodbye., % goodbye_msg
ExitApp
;=========================================================================


;=========================================================================
;=========================================================================
; MISC FUNCTIONS - Not worthy of a seperate INCLUDE
FormatSeconds(v_seconds)  ; Convert the specified number of seconds to hh:mm:ss format.
{
	fminutes := floor(v_seconds/60) ; calculate minutes
	fseconds := round(v_seconds)-(fminutes*60) ; calculate (formatted) seconds
	if (strLen(fseconds) < 2 ) ; 0-pad seconds
		fseconds := "0" . fseconds
	return fminutes . ":" . fseconds
}

DoQuit() {
	ExitApp
	Return
}

DoGui()
{
	Menu, Tray, Icon, resources\ico\icon.ico
	menu, tray, NoStandard
	Menu, Tray, Add, Quit, DoQuit 
	Gui, Add, Picture, x52 y10 w120 h120 , % A_ScriptDir "\resources\png\cupcake.png"
	Gui, Font, S14 CDefault, Verdana
	Gui, Add, Text, x40 y155 w180 h30 , akbv is running
	Gui, Add, Button, x62 y199 w100 h30 gDoQuit, abort
	Gui, Show, w225 h250, akbv
	Winset, Alwaysontop, , akbv
}


find_replace_in_file(find, replace, file)
{
	FileRead, file_contents, % file
	FileDelete, % file
	FileAppend, % StrReplace(file_contents, find, replace, , 1), % file
}

GuiClose:
Gui, Show
return