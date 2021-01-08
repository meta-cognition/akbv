; The Sankey Builder (aka Alaska Budget Visualizer)
;   by Dom Pannone, The Half Blood Prince,  2020


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

SetWorkingDir %A_ScriptDir%  	; Ensures a consistent starting directory.

#SingleInstance, Force			; Single instance only
Menu, Tray, Icon, resources\ico\icon.ico
menu, tray, NoStandard
Menu, Tray, Add, Quit, DoQuit 

;=======================================================================|
#Include includes\csv.ahk												; see file, add byref to csv load to load file once
#Include includes\obj2str.ahk											; Obj2Str(obj), use https://beautifier.io/ to format output.
;=======================================================================|
#Include includes\sankey_function_csv_sum_revenue.ahk					; csv_find_and_sum_revenue(string_find, search_column)
#Include includes\sankey_function_csv_sum_expenditure.ahk				; csv_find_and_sum_expenditure(string_find, search_column)
#Include includes\sankey_function_csv_sum_appropriation.ahk				; csv_find_and_sum_appropriation(string_find, search_column)
#Include includes\sankey_function_csv_sum_positions.ahk					; csv_find_and_sum_positions(string_find, search_column)
#Include includes\sankey_function_csv_find_replace.ahk					; csv_find_replace(string_find, string_replace)	
;=======================================================================|
#Include includes\sankey_function_build_nodes.ahk						; build_nodes_from_columns(columns*) **NOTE: columns must be added from left to right.**
#Include includes\sankey_function_build_links.ahk						; see file
#Include includes\sankey_function_build_json.ahk						; build_json()
#Include includes\sankey_function_build_javascript.ahk					; build_javascript()
#Include includes\sankey_function_build_html.ahk						; build_html()
#Include includes\sankey_function_build_html_menu.ahk					; build_html_menu()
;=======================================================================|
#Include includes\sankey_function_initialize_colors.ahk					; InitializeColors()
#Include includes\sankey_function_initialize_departments.ahk			; InitializeDepartments()
;=======================================================================|
;#Include includes\sankey_function_load_and_apply_filter_to_csv.ahk		; load_and_apply_filter_to_csv(csv_include_filters = "no-filters", csv_exclude_filters = "no-filters")
#Include includes\sankey_function_load_and_apply_filter_to_csv_v2.ahk	; load_and_apply_filter_to_csv(csv_include_filters = "no-filters", csv_exclude_filters = "no-filters")
#Include includes\sankey_function_cleanup_data.ahk						; cleanup_data()
#Include includes\sankey_function_format_number.ahk						; format_to_readable(value)
;=======================================================================|
#Include includes\sankey_function_array_searches.ahk					; HasNodeId(), HasHyperLinkVal(), NodeRowNumber(), 
																		; 	NodeID(), LinkColor(), NodeColor() 
;=======================================================================|
#Include includes\sankey_reference.ahk									; human readable reference file for object structures

; Static column variables for operating budget source data.
department_column	:= 4	; e.g. Transportation
rdu_column 			:= 7 	; e.g. Marine Highway System
component_column	:= 10	; e.g. Vessel Operations
fund_column 		:= 11	; e.g. 1004 GF
line_column			:= 12	; e.g. Expenditure/Revenue
group_column		:= 14	; e.g. UGF/DFG/FED/OTHER
value_column		:= 16	; e.g. (value)
scenario_column		:= 11	;
scenario_row		:= 2	;

position_labels		:= "Permanent Part-Time|Permanent Full-Time|Non-Permanent"
expenditure_labels	:= "Personal Services|Travel|Contractual Services|Commodities|Capital Outlay|Line 76000|Grants, Benefits|Miscellaneous"
non_fund_labels		:= expenditure_labels . "|" . position_labels

json_value_format 	:= "valueformat: ""$,.1f"","
;json_value_format 	:= "valueformat: ""-$,.1f"","

format_mode := "dollars" 			; "dollars" or "positions"
show_values_in_labels := true		; show values next to node labels
sum_appropriation_values := false	; set to true for values in a capital budget

parent_levels := 0					; DO NOT CHANGE - how many '../' to find plotly.js, starts at 0

this_build_uid			:= A_Now	; a unique timestamp for each build, embeded/fingerprinted in the html file as well.

menu_html  := ""

rn := "`r`n"

; MANUALLY CHANGE THESE!
save_csv_files 			:= false	; set to true for troubleshooting, set to false for speed.

FileSelectFile, sankey_csv_source,, % A_ScriptDir "\abs exports\", Please Select an Operating File`, From ABS "Export Component Detail (1512)",*.txt

FileSelectFile, sankey_csv_source,, % A_ScriptDir "\abs exports\", From ABS "Export Project Summary (UGF/DGF/Other/Fed) (1328)",*.txt
;FileSelectFile, sankey_csv_source_capital_category,, % A_ScriptDir "\abs exports\", Please Select a Conditioned Fund Category Capital File,*.txt
;start interpreter\autohotkey .\sankey_builder.ahk

FileSelectFile, sankey_csv_source,, % A_ScriptDir "\abs exports\",From ABS "Export Project Information (Appropriations with Allocations) (272)",*.txt
;FileSelectFile, sankey_csv_source_capital_statewide,, % A_ScriptDir "\abs exports\", Please Select a Conditioned Statewide Capital File,*.txt
;start interpreter\autohotkey .\sankey_builder.ahk

StartTime := A_TickCount

plotly_source	:= "plotly-latest.min.js"
build_directory := A_ScriptDir "\builds\" this_build_uid 
csv_directory := build_directory "\csv_files"

FileCreateDir, % build_directory
FileCreateDir, % csv_directory
FileCreateDir, % csv_directory "\source"

FileCopy, % A_ScriptDir "\resources\js\plotly\plotly-latest.min.js", % build_directory "\plotly-latest.min.js"

Gui +OwnDialogs
Gui -DPIScale

Progress, A M T ZH0 Y0 FS10 W800 H80 C00,
Run, explore %build_directory%
WinWait, % this_build_uid, , 60
WinMove, % this_build_uid, , % A_ScreenWidth/2 - 500*(A_ScreenDPI/96), 150*(A_ScreenDPI/96), 1000*(A_ScreenDPI/96), 600*(A_ScreenDPI/96)

InitializeColors()
InitializeDepartments()

sankey_object := {}
sankey_object.links := []
sankey_object.hyperlink_ids := []
javascript_links =
javascript_hovers =

if (sankey_csv_source != "" )
{
    FileCopy, % sankey_csv_source, % csv_directory "\source\"		; copy/bakcup input data within build for refenence, troubleshooting/analysis, auditing
    FileRead, sankey_csv_ramfile, % sankey_csv_source				; stores source data in memory
    
    cleanup_data()
    
    #Include sankey_instruction_0.ahk		; Statewide All Dept
    #Include sankey_instruction_1.ahk		; Fund RDU Component
    #Include sankey_instruction_2.ahk		; RDU only and Component only
    #Include sankey_instruction_3.ahk		; PCN Main
    #Include sankey_instruction_4.ahk		; Department Overview
}

FileAppend, % "Operating Build Time: " FormatSeconds((A_TickCount-StartTime)/1000) rn, % build_directory "\build-time.txt"
;=========================================================================

StartTime := A_TickCount

if (sankey_csv_source_capital_category != "" )
{
    FileCopy, % sankey_csv_source_capital_category, % csv_directory "\source\"		; copy/bakcup input data within build for refenence, troubleshooting/analysis, auditing
    FileRead, sankey_csv_ramfile, % sankey_csv_source_capital_category				; stores source data in memory
    
    cleanup_data(true)
    
    #Include sankey_instruction_5.ahk		; Statewide All Dept Capital fund category
}
FileAppend, % "Capital Category Build Time: " FormatSeconds((A_TickCount-StartTime)/1000) rn, % build_directory "\build-time.txt"

;=========================================================================

StartTime := A_TickCount

if (sankey_csv_source_capital_category != "" )
{
    FileCopy, % sankey_csv_source_capital_statewide, % csv_directory "\source\"		; copy/bakcup input data within build for refenence, troubleshooting/analysis, auditing
    FileRead, sankey_csv_ramfile, % sankey_csv_source_capital_statewide				; stores source data in memory

    cleanup_data(true)

    #Include sankey_instruction_6.ahk		; Capital Budget
}

FileAppend, % "Capital Category Build Time: " FormatSeconds((A_TickCount-StartTime)/1000) rn, % build_directory "\build-time.txt"
;=========================================================================

ExitApp

FormatSeconds(NumberOfSeconds)  ; Convert the specified number of seconds to hh:mm:ss format.
{
    time = 19990101  ; *Midnight* of an arbitrary date.
    time += %NumberOfSeconds%, seconds
    FormatTime, mmss, %time%, mm:ss
    SetFormat, float, 2.0
    return NumberOfSeconds//3600 ":" mmss  ; This method is used to support more than 24 hours worth of sections.
}

DoQuit() {
	ExitApp
Return
}