;=======================================================================|
; The Sankey Builder v2! w/ sqlite! (aka Alaska Budget Visualizer)
;   by Dom Pannone, 2020-2023
;	
;	V2 introduces sqlite backend, SQL based computations,
;	and updated interpreter to AHKv2.
;=======================================================================|
;=======================================================================|
#Requires AutoHotkey v2.0
;=======================================================================|
#Warn All, OutputDebug
;=======================================================================|
rn  := "`r`n"
us  := "_"
qt  := '"'
dqt := '"'
sqt := "'"
cma := ','
sc  := ";"
uid := A_Now
;=======================================================================|
;=======================================================================|
	#Include includes\sankey_reference_v2.ahk
;=======================================================================|
	#Include includes\select_files.ahk
;=======================================================================|
	#Include includes\Class_SQLiteDB.ahk
;=======================================================================|
	#Include includes\InitializeDepartments.ahk
;=======================================================================|
	#Include includes\InitializeColors.ahk
;=======================================================================|
	#Include includes\array_searches.ahk
;=======================================================================|
;=======================================================================|
InitializeDB()
select_new_files()
select_scenario()
;=======================================================================|
start()
{
	global
	set_misc_variables()
	DirCreate(build_directory)
	Run('explore "' build_directory '"')
	FileCopy(A_ScriptDir "\resources\js\plotly\plotly-latest.min.js", build_directory "\plotly-latest.min.js")
	DirCreate(csv_directory)
	DirCreate(csv_directory "\source")
	WinWait(this_build_uid, , 60)
	WinMove(A_ScreenWidth/2 - 500*(A_ScreenDPI/96), 150*(A_ScreenDPI/96), 1000*(A_ScreenDPI/96), 600*(A_ScreenDPI/96), this_build_uid)
	InitializeColors()
	InitializeDepartments()
	Initialize_Categories()
	initialize_fund_translation()
	do_operating()
	do_capital()
}
do_operating()
{
	global

	StartTime := A_TickCount

	sql_table 				:= operating_table
	this_scenario_name		:= operating_scenario_name
	this_plot_name 			:= "plot-statewide"
	this_output_file 		:= build_directory . "\" this_plot_name ".html"

	statewide_output_file 	:= this_output_file

	this_plot_title 		:= "Statewide (including duplicative fund sources, inter-agency spend)"
	this_title 				:= this_scenario_name . " <br /> " this_plot_title " (" format_to_readable(sum_sql("SCEN1_AMOUNT","LINE_TYPE='Revenue'")) ")"

	show_values_in_labels 	:= true
	format_mode 			:= "dollars"
	this_width 				:= "1000"
	this_height 			:= "1150"
	this_small_height 		:= "800"
	back_link				:= "index.html"

	sql_filter := "LINE_TYPE='Revenue'"
	build_nodes_from_columns("DEPT_NAME", "FUND_GROUP")
	build_links("FUND_GROUP", "DEPT_NAME", "FUND_GROUP", "SCEN1_AMOUNT", "FUND_GROUP", 1, false, true, true)

	build_json(), build_javascript(), build_html(), menu_html_1()

	for key, department_list_object in department_list
	{	
		menu_html .= '<div class="card">' rn 
		menu_html .= '<div class="card-header" id="heading_' (key + 1) '">' rn
		menu_html .= '<h2 class="mb-0">' rn
		menu_html .= '<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse_' (key + 1) '" aria-expanded="true" aria-controls="collapse_' (key + 1) '">' rn
		menu_html .= department_list_object.readable_name rn
		menu_html .= '</button>' rn
		menu_html .= '</h2>' rn
		menu_html .= '</div>' rn
		menu_html .= '<div id="collapse_' (key + 1) '" class="collapse" aria-labelledby="heading_' (key + 1) '" data-parent="#accordionDepartments">' rn
		menu_html .= '<div class="card-body">' rn

		statewide_html_file := FileRead(statewide_output_file)
		statewide_html_file := StrReplace(statewide_html_file, "@@@" department_list_object.abs_name "@@@", department_list_object.folder_name)

		FileDelete(statewide_output_file)
		FileAppend(statewide_html_file,  statewide_output_file)

		build_department_sankey(department_list_object.abs_name, department_list_object.readable_name, department_list_object.folder_name )	
		build_department_overview_sankey(department_list_object.abs_name, department_list_object.readable_name, department_list_object.folder_name )
		build_department_pcn_sankey(department_list_object.abs_name, department_list_object.readable_name, department_list_object.folder_name )

		loop 3
			menu_html .= "</div>" rn	
	}
	loop 2
		menu_html .= "</div>" rn
	this_output_file := build_directory . "\index.html"
	build_html_menu()

	;SoundBeep()
	;=======================================================================|
}
do_capital()
{
	global
	department_column				:= 6	; dept_name
	entry_type_column 				:= 10 	; apal
	reference_number_column			:= 4	; refnum
	parent_reference_number_column	:= 22 	; ap_refnum
	project_title_column			:= 11	; proj_title
	web_column						:= 7
	link_date						:= ""

	SQL := 'DELETE FROM "' operating_table '" WHERE LINE_TYPE=`'Capital`';'
	;dump_sql()
	DB.Exec(SQL)

	SQL := "SELECT * FROM `"" capital_table "`";"
	Result := ""
	If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

	fund_column_min					:= 46					; CHECK THE ABS EXPORT, THESE CHANGE
	fund_column_max					:= Result.ColumnCount	; CHECK THE ABS EXPORT, THESE CHANGE

	If Result.ColumnNames[fund_column_min] != "1002 Fed Rcpts"
		MsgBox(A_ThisFunc ': Unexpected column name, "' Result.ColumnNames[fund_column_min] '", for variable, "fund_column_min".'), ExitApp

	If (Result.HasRows)
	{	
		Loop Result.Rows.Length
		{
			this_row_department 				:= Result.Rows[A_Index][department_column]
			this_row_entry_type					:= Trim(Result.Rows[A_Index][entry_type_column])
			link_data 							.= Result.Rows[A_Index][project_title_column] "^" Result.Rows[A_Index][entry_type_column] rn
			if ( this_row_entry_type = "AP*" )
			{
				continue
			}
			else if ( this_row_entry_type = "AP" )
			{
				this_row_appropriation_name			:= Result.Rows[A_Index][project_title_column]
				this_row_allocation_name			:= ""
				this_row_rdu_reference_number		:= Result.Rows[A_Index][reference_number_column]
				this_row_comp_reference_number		:= ""
			} 
			else
			{
				SQL := "SELECT * FROM `"" capital_table "`" WHERE refnum='" Result.Rows[A_Index][parent_reference_number_column] "';"
				Result2 := ""
				;dump_sql()
				If !DB.GetTable(SQL, &Result2)
		  			MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
				
				this_row_appropriation_name			:= Result2.Rows[1][project_title_column]
				this_row_allocation_name			:= Result.Rows[A_Index][project_title_column]
				this_row_rdu_reference_number		:= Result2.Rows[1][reference_number_column]
				this_row_comp_reference_number		:= Result.Rows[A_Index][reference_number_column]
			}
			this_fund_column := fund_column_min
			current_row := A_Index
			loop
			{ 
				this_value 	:= Result.Rows[current_row][this_fund_column]
			
				if ( this_value AND this_value > 0 )
				{
					this_value := this_value / 1000
					this_fund 	:= translate_fund_to_operating(Result.ColumnNames[this_fund_column])

					sql_update_columns := "("
					sql_update_columns .= qt "DEPT_NAME" 		qt cma
					sql_update_columns .= qt "RDU_NAME"			qt cma
					sql_update_columns .= qt "RDU_NUM"			qt cma
					sql_update_columns .= qt "COMP_NAME"		qt cma
					sql_update_columns .= qt "COMP_NUM"			qt cma
					sql_update_columns .= qt "REPORT_LINE"		qt cma
					sql_update_columns .= qt "LINE_TYPE"		qt cma		
					sql_update_columns .= qt "FUND_GROUP" 		qt cma
					sql_update_columns .= qt "SCEN1_AMOUNT"		qt  
					sql_update_columns .= ")"

					sql_update_values := "("
					sql_update_values .= sqt cln(	this_row_department 			)	sqt cma
					sql_update_values .= sqt cln(	this_row_appropriation_name 	)	sqt cma
					sql_update_values .= sqt cln(	this_row_rdu_reference_number	)	sqt cma
					sql_update_values .= sqt cln(	this_row_allocation_name		)	sqt cma
					sql_update_values .= sqt cln(	this_row_comp_reference_number	)	sqt cma
					sql_update_values .= sqt cln(	this_fund 						)	sqt cma
					sql_update_values .= sqt cln(	"Capital"			 			)	sqt cma		
					sql_update_values .= sqt cln(	fund_type(this_fund) 			)	sqt cma
					sql_update_values .= sqt cln(	this_value						)	sqt 
					sql_update_values .= ")"	

					SQL := 'INSERT INTO "' operating_table '" ' sql_update_columns ' VALUES ' sql_update_values ';'
					;dump_sql()
					DB.Exec(SQL)
				}
				if (this_fund_column = Result.ColumnCount)
					break
				this_fund_column++
			}
		}
	}
	build_capital_overview()
	build_capital_department()
	SQL := 'DELETE FROM "' operating_table '" WHERE LINE_TYPE=`'Capital`';'
	;dump_sql()
	DB.Exec(SQL)
}
build_capital_overview()
{
	global
	parent_levels 		:= 0
	sql_table 			:= operating_table
	this_scenario_name	:= capital_scenario_name
	format_mode 		:= "dollars"
	this_plot_name 		:= "plot-capital"
	this_plot_title 	:= "Statewide (including duplicative fund sources, inter-agency spend)"
	sum_filter			:= "LINE_TYPE='Capital'"
	plot_total			:= format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_title 			:= this_scenario_name . " <br /> " this_plot_title " (" plot_total ")"
	this_width 			:= "1000"
	this_height 		:= "1150"
	this_small_height 	:= "800"
	back_link			:= "index-capital.html"
	this_output_file 	:= build_directory . "\" this_plot_name ".html"
	
	statewide_capital_output_file := this_output_file

	sql_filter	:= "LINE_TYPE='Capital'"
	build_nodes_from_columns("DEPT_NAME", "FUND_GROUP")
	build_links("FUND_GROUP", "DEPT_NAME", "FUND_GROUP", "SCEN1_AMOUNT", "FUND_GROUP", 1, false, true, true)

	build_json(), build_javascript(), build_html(), menu_html_2()

}
build_capital_department()
{
	global
	for key, department_list_object in department_list
	{	
		statewide_capital_html_file := FileRead(statewide_capital_output_file)
		statewide_capital_html_file := StrReplace(statewide_capital_html_file, "@@@" department_list_object.abs_name "@@@", department_list_object.folder_name)

		FileDelete(statewide_capital_output_file)
		FileAppend(statewide_capital_html_file, statewide_capital_output_file)

		sql_filter := "LINE_TYPE='Capital' AND DEPT_NAME=" sqt department_list_object.abs_name sqt 
		sum_filter := sql_filter
		if !(sum_sql("SCEN1_AMOUNT", sum_filter) > 0)
			continue
		
		menu_html_3()
		
		parent_levels 		:= 1
		this_plot_name 		:= "plot-capital"
		;;; add_project_links	:= true
		this_plot_title 	:= department_list_object.readable_name " (Fund / Appropriation / Allocation)"
		plot_total			:= format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
		this_title 			:= this_scenario_name . " <br /> " this_plot_title " (" plot_total ")"
		this_width 			:= "1200"
		this_height 		:= "800"
		this_small_height 	:= "600"
		back_link			:= "../plot-capital.html"

		If !DirExist(build_directory "\" department_list_object.folder_name)
			DirCreate(build_directory "\" department_list_object.folder_name)
		
		this_output_file := build_directory "\" department_list_object.folder_name "\" this_plot_name ".html"

		build_nodes_from_columns("RDU_NAME", "COMP_NAME", "REPORT_LINE")
		build_links("REPORT_LINE", "RDU_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, true, true)
		sql_filter := sql_filter " AND COMP_NAME !=''"
		build_links("RDU_NAME", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, false, true)

		build_json(), build_javascript(), build_html()
	}

	parent_levels := 0
	menu_html .= "</div>" rn "</div>" rn
	this_output_file := build_directory . "\index-capital.html"

	build_html_menu() 
}
set_misc_variables()
{
	global
	; MISC VARIABLES
	json_value_format           := 'valueformat: "$,.1f",'        ; json_value_format     := "valueformat: ""-$,.1f"","
	format_mode                 := "dollars"                        ; "dollars" or "positions"
	show_values_in_labels       := true                             ; show values next to node labels
	sum_appropriation_values    := false                            ; set to true for values in a capital budget
	menu_html                   := ""
	; SO DOM COBB CAN KNOW IF HE'S IN SANKEY WITHIN A SANKEY... WITHIN A SANKEY.
	parent_levels 				:= 0 								; DO NOT CHANGE - how many '../' to find plotly.js, starts at 0
	; FOR TRACKING
	this_build_uid 				:= uid    							; a unique timestamp for each build, embeded/fingerprinted in the html file as well.
	; MANUALLY CHANGE THIS
	save_csv_files 				:= false     						; set to true for troubleshooting, set to false for speed.
	; SET UP DIRECTORY FOR THIS BUILD
	build_directory 			:= A_ScriptDir "\builds\" this_build_uid 
	csv_directory 				:= build_directory "\csv_files"
	; MISC
	add_project_links 			:= false
	; MORE VARIABLES
	sankey_object 				:= {}
	sankey_object.links 		:= []
	sankey_object.hyperlink_ids := []
	javascript_links 			:= ""
	javascript_hovers 			:= ""
	plotly_source 				:= "plotly-latest.min.js"
	; ;;; debugger bugging me about this one.
	abs_department_name			:= ""
	position_labels             := "Permanent Part-Time|Permanent Full-Time|Non-Permanent"
	expenditure_labels          := "Personal Services|Travel|Contractual Services|Commodities|Capital Outlay|Line 76000|Grants, Benefits|Miscellaneous"
	non_fund_labels             := expenditure_labels . "|" . position_labels
	html_color_legend := "
(
<div class='plot-legend'>
	<!-- div class='legend-title'>Fund Types</div> -->
		<div class='legend-scale'>
			<ul class='legend-labels'>
				<li><span style='background:@@@UGFCOLOR@@@;'></span>Unrestricted General Funds (UGF)</li>
				<li><span style='background:@@@DGFCOLOR@@@;'></span>Designated General Funds (DGF)</li>
				<li><span style='background:@@@OTHERCOLOR@@@;'></span>Other (O)</li>
				<li><span style='background:@@@FEDCOLOR@@@;'></span>Federal (Fed)</li>
			</ul>
			<div style='width: 75%; border:1px solid black; text-align:center; box-shadow:none; margin:15px auto 15px auto; font-size: 80%; line-height: 18px; padding:0px;'>$ in Thousands (1,000)</div>
		</div>
<!-- <div class='legend-source'>Source: <a href="#link to source">Office of Management & Budget</a></div> -->
</div>`r`n
)"
}
get_scenario_numbers() 
{
	global
	FileReadLine(&scenario_1512, file_1512_path, 2)
	
	scenario_1512 := StrSplit(scenario_1512,"(")
	scenario_1512 := StrSplit(scenario_1512[2],")")
	scenario_1512 := scenario_1512[1]

	FileReadLine(&scenario_1328, file_1328_path, 2)
	
	scenario_1328 := StrSplit(scenario_1328,"`t")
	scenario_1328 := scenario_1328[1]

	FileReadLine(&scenario_272, file_272_path, 2)
	
	scenario_272 := StrSplit(scenario_272,"`t")
	scenario_272 := scenario_272[1] 
}
FileReadLine(&output_var, file_to_read, line_number)
{
	file_object := FileOpen(file_to_read, "r")
	loop line_number
	{
		output_var := file_object.ReadLine() 
	}
	file_object.Close
}
import_files_to_database()
{
	global
	import_buffer	:= FileRead("sqlite\import.base")
	import_buffer   := StrReplace(import_buffer, "%date_created%", 				uid, 				false)
	import_buffer   := StrReplace(import_buffer, "%budget_fiscal_year%", 		budget_fiscal_year, false)
	import_buffer   := StrReplace(import_buffer, "%budget_name%", 				budget_name, 		false)
	import_buffer   := StrReplace(import_buffer, "%operating_scenario_1512%", 	scenario_1512, 		false)
	import_buffer   := StrReplace(import_buffer, "%1512_file%", 				file_1512_path, 	false)
	import_buffer   := StrReplace(import_buffer, "%capital_scenario_272%", 		scenario_272, 		false)
	import_buffer   := StrReplace(import_buffer, "%272_file%", 					file_272_path, 		false)

	FileAppend(import_buffer, "sqlite\" uid ".base")

	cmd := A_ComSpec ' /c ""sqlite3.exe" "budget.db" <"' uid '.base""'
	RunWait(cmd, A_WorkingDir "\sqlite")
}
translate_color_column(column)
{
	switch column {
		case "DEPT_NAME":
			return "DEPT_NAME"
		case "RDU_NAME":
			return "RDU_NAME"
		case "COMP_NAME":
			return "RDU_NAME"
		case "FUND_GROUP":
			return "FUND_GROUP"
		case "REPORT_LINE":
			return "FUND_GROUP"
		default:
			MsgBox('Color conversion error: translate_color_column("' column '")')
			
	}
}
InitializeDB()
{
	global
	DBFileName := A_ScriptDir . "\sqlite\budget.db"
	DB := SQLiteDB()
	If !DB.OpenDB(DBFileName) {
		MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
   		ExitApp
	}
}
menu_html_1()
{
	global
	menu_html .= '<div style="margin:auto; width:600px; text-align: center;">' rn
	menu_html .= '<div class="abs-scenario"><h2>' this_scenario_name '</h2></div>' rn
	menu_html .= '<div class="accordion" id="accordionDepartments">' rn
	; menu_html .= "<div><h3><a href=""" this_plot_name ".html"">Statewide Fund Group Overview</a></h3></div>" rn
	menu_html .= '<div class="card">' rn
	menu_html .= '<div class="card-header" id="heading_' ('1') '">' rn
	menu_html .= '<h2 class="mb-0">' rn
	menu_html .= '<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse_' ('1') '" aria-expanded="true" aria-controls="collapse_' ('1') '">' rn
	menu_html .= 'Statewide Fund Group Overview' rn
	menu_html .= '</button>' rn
	menu_html .= '</h2>' rn
	menu_html .= '</div>' rn
	menu_html .= '<div id="collapse_' ('1') '" class="collapse" aria-labelledby="heading_' ('1') '" data-parent="#accordionDepartments">' rn
	menu_html .= '<div class="card-body">' rn
	menu_html .= '<div><a href="' this_plot_name '.html">Statewide Operating Budget</a></div>' rn
	menu_html .= '</div>' rn
	menu_html .= '</div>' rn
	menu_html .= '</div>' rn
}
menu_html_2()
{
	global
	menu_html := ""
	menu_html .= "<div style=`"margin:auto; width:600px; text-align: center;`">" rn
	menu_html .= "<div class=`"abs-scenario`"><h2>" this_scenario_name "</h2></div>" rn
	menu_html .= "<div class=`"accordion`" id=`"accordionDepartments`">" rn
	/* menu_html .= "<div><h3><a href=""" this_plot_name ".html"">Statewide Fund Group Overview</a></h3></div>" rn */
	menu_html .= "<div class=`"card`">" rn
	menu_html .= "<div class=`"card-header`" id=`"heading_" ("1") "`">" rn
	menu_html .= "<h2 class=`"mb-0`">" rn
	menu_html .= "<button class=`"btn btn-link collapsed`" type=`"button`" data-toggle=`"collapse`" data-target=`"#collapse_" ("1") "`" aria-expanded=`"true`" aria-controls=`"collapse_" ("1") "`">" rn
	menu_html .= "Statewide Fund Group Overview" rn
	menu_html .= "</button>" rn
	menu_html .= "</h2>" rn
	menu_html .= "</div>" rn
	menu_html .= "<div id=`"collapse_" ("1") "`" class=`"collapse`" aria-labelledby=`"heading_" ("1") "`" data-parent=`"#accordionDepartments`">" rn
	menu_html .= "<div class=`"card-body`">" rn
	menu_html .= "<div><a href=`"" this_plot_name ".html`">Statewide Capital Budget</a></div>" rn
	menu_html .= "</div>" rn
	menu_html .= "</div>" rn
	menu_html .= "</div>" rn
}
menu_html_3()
{
	global
	menu_html .= "<div class=`"card`">" rn
	menu_html .= "<div class=`"card-header`" id=`"heading_" (key + 1) "`">" rn
	menu_html .= "<h2 class=`"mb-0`">" rn
	menu_html .= "<button class=`"btn btn-link collapsed`" type=`"button`" data-toggle=`"collapse`" data-target=`"#collapse_" (key + 1) "`" aria-expanded=`"true`" aria-controls=`"collapse_" (key + 1) "`">" rn
	menu_html .= department_list_object.readable_name rn
	menu_html .= "</button>" rn
	menu_html .= "</h2>" rn
	menu_html .= "</div>" rn

	menu_html .= "<div id=`"collapse_" (key + 1) "`" class=`"collapse`" aria-labelledby=`"heading_" (key + 1) "`" data-parent=`"#accordionDepartments`">" rn
	menu_html .= "<div class=`"card-body`">" rn
	menu_html .= "<a href=`"" department_list_object.folder_name "/" this_plot_name ".html`">Capital Budget</a>" rn
	menu_html .= "</div>" rn
	menu_html .= "</div>" rn
	menu_html .= "</div>" rn
}
tabs(n)
{
	tabs := ""
	loop n
	{
		tabs .= A_Tab
	}
	return tabs
}
format_to_readable(value)
{
	global
	i := 0
	readable_value := ""
	if (format_mode = "dollars")
	{
		loop StrLen( round(value, 1) )
		{
			next_character_in_value := substr( round( value, 1), ( StrLen( round( value, 1 ) ) - i ), 1 )
			if ( i = 5 && next_character_in_value != "-" )
				readable_value := "," . readable_value
			if ( i = 8 && next_character_in_value != "-" )
				readable_value := "," . readable_value
			if ( i = 11 && next_character_in_value != "-" )
				readable_value := "," . readable_value
			if ( i = 14 && next_character_in_value != "-" )
				readable_value := "," . readable_value
					
			readable_value := substr( round( value, 1), ( StrLen( round( value, 1 ) ) - i ), 1 ) . readable_value
				
			i++
		}
		return "$" . readable_value
	}
	else if (format_mode = "positions")
	{
		loop StrLen(round(value))
		{
			if i = 3
				readable_value := "," . readable_value
			if i = 6
				readable_value := "," . readable_value
			if i = 9
				readable_value := "," . readable_value
			if i = 13
				readable_value := "," . readable_value
					
			readable_value := substr( round( value ), ( StrLen( round( value ) ) - i ), 1 ) . readable_value
				
			i++
		}
		return readable_value
	}
	else
	{
		msgbox("Error in format_to_readable(value), format_mode not recognized: " format_mode)
	}
}
fund_type_short(fund_code_to_check)
{
	global
	
	fund_code_to_check := "|" SubStr(fund_code_to_check, 1, 4) "|"
	
	if InStr(ugf_fund_codes, fund_code_to_check)
		return "(UGF)"
	if InStr(dgf_fund_codes, fund_code_to_check)
		return "(DGF)"
	if InStr(other_fund_codes, fund_code_to_check)
		return "(O)"
	if InStr(federal_fund_codes, fund_code_to_check)
		return "(Fed)"
	Msgbox(A_ThisFunc ": unable to determine fund type for: " fund_code_to_check)
	return "(e:Unknown)"
}
fund_type(fund_code_to_check)
{
	global
	
	fund_code_to_check := "|" SubStr(fund_code_to_check, 1, 4) "|"
	
	if InStr(ugf_fund_codes, fund_code_to_check)
		return "Unrestricted General Funds"
	if InStr(dgf_fund_codes, fund_code_to_check)
		return "Designated General Funds"
	if InStr(other_fund_codes, fund_code_to_check)
		return "Other Funds"
	if InStr(federal_fund_codes, fund_code_to_check)
		return "Federal Funds"
	Msgbox(A_ThisFunc ": unable to determine fund type for: " fund_code_to_check)
	return "UNKNOWN"
}
Initialize_Categories()
{
global
dgf_fund_codes := "
(
|1238|
|1237|
|1249|
|1254|
|1255|
|1261|
|1262|
|1252|
|1264|
|1268|
|1246|
|1247|
|1248|
|1000|
|1005|
|1010|
|1015|
|1021|
|1031|
|1036|
|1195|
|1038|
|1039|
|1040|
|1048|
|1057|
|1058|
|1059|
|9003|
|1067|
|1068|
|1069|
|1070|
|1071|
|1072|
|1074|
|1076|
|1078|
|1082|
|1086|
|1088|
|1089|
|1090|
|1098|
|1099|
|1110|
|1115|
|1122|
|1123|
|1125|
|1049|
|1132|
|1035|
|1064|
|1073|
|1118|
|1224|
|1135|
|1141|
|1109|
|1184|
|1218|
|1146|
|1156|
|1153|
|1157|
|1154|
|1028|
|1025|
|1124|
|1197|
|1203|
|1127|
|1128|
|1131|
|1151|
|1162|
|1161|
|1051|
|1164|
|1193|
|1194|
|1170|
|1032|
|1169|
|1225|
|1191|
|1054|
|1062|
|1065|
|1056|
|1079|
|1083|
|1085|
|1087|
|1052|
|1168|
|1172|
|1176|
|1020|
|1175|
|1030|
|1189|
|1200|
|1201|
|1202|
|1155|
|1208|
|1209|
|1210|
|1216|
|1221|
|1223|
|1080|
|1226|
|1227|
|1111|
|1134|
|1180|
|1234|
)"
federal_fund_codes := "
(
|1265|
|1267|
|1269|
|1270|
|1002|
|1013|
|1014|
|1016|
|1063|
|1130|
|1160|
|1033|
|1043|
|1149|
|1188|
|1187|
|1190|
|1212|
|1133|
|9001|
|1047|
)"
other_fund_codes := "
(
|1230|
|1231|
|1232|
|1233|
|1235|
|1236|
|1253|
|1256|
|1257|
|1251|
|1007|
|1019|
|1024|
|1026|
|1027|
|1034|
|1192|
|1042|
|1044|
|1046|
|1050|
|1060|
|1061|
|1081|
|1091|
|1094|
|1097|
|1100|
|1103|
|-1|
|1102|
|1104|
|1105|
|1107|
|1108|
|1092|
|9999|
|1114|
|1121|
|1174|
|1017|
|1045|
|1055|
|1084|
|1095|
|1113|
|1137|
|1229|
|1138|
|1142|
|1143|
|1144|
|1145|
|1023|
|-2|
|1186|
|2000|
|2001|
|1147|
|1152|
|1158|
|1159|
|1136|
|1106|
|1205|
|1999|
|1006|
|1222|
|1165|
|1167|
|1148|
|1093|
|1179|
|1126|
|1185|
|1022|
|1077|
|1163|
|1177|
|1181|
|1196|
|1182|
|1183|
|1029|
|1166|
|1112|
|1198|
|1075|
|1101|
|1117|
|1011|
|1018|
|1199|
|1219|
|1116|
|1066|
|1207|
|1206|
|9002|
|1171|
|1215|
|1214|
|1217|
|1009|
|1220|
|1008|
|1244|
|1245|
|1239|
|1275|
)"
ugf_fund_codes := "
(
|1241|
|1243|
|1250|
|1266|
|1271|
|1003|
|1004|
|1012|
|1037|
|1119|
|1129|
|1096|
|1150|
|1053|
|1139|
|1173|
|1178|
|1041|
|1140|
|9000|
|1211|
|1258|
|1001|
|1120|
|1213|
|1228|
)"
}
ObjectToString(obj, indent:="", lvl:=1)
{
	if IsObject(obj) {
        If !(obj is Array || obj is Map || obj is String || obj is Number || obj is Object)
			throw Error("Object type not supported.", -1, Format("<Object at 0x{:p}>", ObjPtr(obj)))

		if IsInteger(indent)
		{
			if (indent < 0)
				throw Error("Indent parameter must be a postive integer.", -1, indent)
			spaces := indent, indent := ""

			Loop spaces ; ===> changed
				indent .= " "
		}
		indt := ""

		Loop indent ? lvl : 0
			indt .= indent

        is_array := (obj is Array)

		lvl += 1, out := "" ; Make #Warn happy

		if (type(obj) = "Map"){
			for k, v in obj {
				out .= '"' k '",' ObjectToString(v, indent, lvl) . ( indent ? ",`n" . indt : "," )

			}
		} else if (type(obj) = "Array"){
			for k, v in obj {
				if IsObject(k) || (k == "")
					throw Error("Invalid object key.", -1, k ? Format("<Object at 0x{:p}>", ObjPtr(obj)) : "<blank>")

				out .= ObjectToString(v, indent, lvl) ; value
					.  ( indent ? ",`n" . indt : "," ) ; token + indent
			}
		}  else if (type(obj) = "Object"){
			for k, v in obj.OwnProps() {
				if IsObject(k) || (k == "")
					throw Error("Invalid object key.", -1, k ? Format("<Object at 0x{:p}>", ObjPtr(obj)) : "<blank>")
				out .= k ":" ObjectToString(v, indent, lvl) . ( indent ? ",`n" . indt : "," )
			}
		}


		if (out != "") {
			out := Trim(out, ",`n" . indent)
			if (indent != "")
				out := "`n" . indt . out . "`n" . SubStr(indt, StrLen(indent)+1)
		}
		if (type(obj) = "Map"){
			return "Map(" out ")"
		} else if (type(obj) = "Array"){
			return "[" out "]"
		} else {
			return "{" . out . "}"
		}
		return out
    } Else If (obj is Number)
        return obj

    Else ; String
        return escape_str(obj)

    escape_str(obj) {
        obj := StrReplace(obj,"\","\\")
        obj := StrReplace(obj,"`t","\t")
        obj := StrReplace(obj,"`r","\r")
        obj := StrReplace(obj,"`n","\n")
        obj := StrReplace(obj,"`b","\b")
        obj := StrReplace(obj,"`f","\f")
        obj := StrReplace(obj,"/","\/")
        obj := StrReplace(obj,'"','\"')

        return '"' obj '"'
    }
}
cln(sql_str_literal)
{
	return StrReplace(sql_str_literal, "'","''")
}
sum_sql(sum_column, filter)
{
	SQL := "SELECT SUM(" sum_column ") AS Total FROM `"" sql_table "`" WHERE " filter ";"
	Result := ""
	If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
	Else
	{	
		Loop Result.Rows.Length
		{
			if Result.Rows[A_Index][1] = ""
				Return "0"
			Return Result.Rows[A_Index][1]
		}
	}
}
build_html_menu()
{
    global
	menu_html_ramfile 		:= FileRead(A_ScriptDir '/resources/html_templates/menu-template.html')
    menu_html_file 			:= menu_html_ramfile
    menu_html_file 			:= StrReplace(menu_html_file, '@@@UID@@@', this_build_uid)
    parent_levels_string 	:= ""

    loop parent_levels 
        parent_levels_string .= "../"

    menu_html_file := StrReplace(menu_html_file, "@@@PLOTLYSOURCE@@@", 	parent_levels_string . plotly_source )
    menu_html_file := StrReplace(menu_html_file, "@@@HTMLTITLE@@@", 	StrReplace(this_title, " <br />") )
    menu_html_file := StrReplace(menu_html_file, "@@@MENU-HTML@@@",  	menu_html )

	if FileExist(this_output_file)
		FileDelete(this_output_file)
    FileAppend(menu_html_file,  this_output_file)

    sankey_object.links := []
}
select_scenario()
{
	global

	SQL := "SELECT DATECREATED, ALIAS, FISCALYEAR FROM `"BUDGETS`" GROUP BY DATECREATED ORDER BY DATECREATED DESC;"
	Result := ""
	If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

	; Create the window:
	MyGui := Gui()
	
	; Create the ListView with two columns, Name and Size:
	LV := MyGui.Add("ListView", "r20 w700", ["DATE CREATED","SCENARIO", "FY"])
	
	; Notify the script whenever the user double clicks a row:
	LV.OnEvent("DoubleClick", LV_DoubleClick)
	
	; Gather a list of file names from a folder and put them into the ListView:
	Loop Result.Rows.Length
	{
		LV.Add(,Result.Rows[A_Index][1], Result.Rows[A_Index][2], Result.Rows[A_Index][3])
	}
	
	LV.ModifyCol  ; Auto-size each column to fit its contents.
	LV.ModifyCol(1, "Integer")  ; For sorting purposes, indicate that column 2 is an integer.
	
	; Display the window:
	MyGui.Show
	
}
LV_DoubleClick(LV, RowNumber)
{
	global
	fetch_id := LV.GetText(RowNumber, 1)
	SQL := "SELECT * FROM `"BUDGETS`" WHERE DATECREATED='" fetch_id "';"
	Result := ""
	If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
	
	scenario_alias			:= Result.Rows[1][2] 
	
	scenario_number 		:= Result.Rows[1][5] 
	operating_table 		:= fetch_id us scenario_number us "1512"
	operating_scenario_name := scenario_alias " (" scenario_number ")"

	capital_scenario_number := Result.Rows[3][5] 
	capital_table 			:= fetch_id us capital_scenario_number us "272"
	capital_scenario_name 	:= scenario_alias " (" capital_scenario_number ")"

	MyGui.Destroy
	start()
}
dump_sql(the_sql:=SQL)
{
	A_Clipboard := the_sql
	MsgBox(the_sql)
}
build_nodes_from_columns(columns*)
{
	global
	node_id := 0
	sankey_object.nodes := {columns: [], all: []}

	for index, current_column in columns
	{
		sankey_object.nodes.columns.push({column_name: current_column, rows: []})

		SQL := "SELECT DISTINCT `"" current_column "`", SUM(SCEN1_AMOUNT) AS Total FROM `"" sql_table "`" where " sql_filter " group by `"" current_column "`";"
		Result := ""
		If !DB.GetTable(SQL, &Result)
   			MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

		If (Result.HasRows) 
		{	
			Loop Result.Rows.Length
			{
				this_node_name			:= Result.Rows[A_Index][1]
				this_node_total 		:= current_column = "DEPT_NAME" ? sum_sql("SCEN1_AMOUNT", "LINE_TYPE='" (this_plot_name = "plot-capital" ? "Capital" : "Revenue") "' AND DEPT_NAME='" this_node_name "'") : Result.Rows[A_Index][2]
				this_node_meta			:= ""
				this_node_project_link 	:= ""

				SQL := "SELECT " translate_color_column(current_column) " FROM `"" sql_table "`" WHERE " sql_filter " AND " current_column "=`"" this_node_name "`" LIMIT 1;"
				Result_Color := ""
				If !DB.GetTable(SQL, &Result_Color)
					   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
				
				current_color := NodeColor(Result_Color.Rows[1][1], node_color_list[1])
					
				this_node_object := {node_name: this_node_name, node_rgb_color: current_color, node_id: node_id, node_total: this_node_total, node_meta: this_node_meta, node_project_link: this_node_project_link}
				sankey_object.nodes.columns[index].rows.push(this_node_object)
				sankey_object.nodes.all.push(this_node_object)

				current_color := ""
				node_id++
			}
		}
	}
}
build_links( source_column, target_column, grouping_column, value_column, color_column, color_list, add_source_node_links := false, add_target_node_links := false, is_child := false)
{
	global
	SQL := "SELECT `"" source_column "`", `"" target_column "`", `"" grouping_column "`", SUM(" value_column ") AS Total, " color_column " AS ColorLookup FROM `"" sql_table "`" where " sql_filter " GROUP BY `"" source_column "`", `"" target_column "`", `"" grouping_column "`";"
	Result := ""
	If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

	If (Result.HasRows) 
	{
		Loop Result.Rows.Length
		{
			this_link_object 	:= {}

			current_source_node	:= Result.Rows[A_Index][1]
			current_target_node	:= Result.Rows[A_Index][2]
			current_group_name	:= Result.Rows[A_Index][3]
			this_link_value		:= Result.Rows[A_Index][4]
			current_color_cell	:= Result.Rows[A_Index][5]

			if (this_link_value > 0)
			{
				this_link_object.link_source := sankey_object_node_id(source_column, Result.Rows[A_Index][1])
				this_link_object.link_target := sankey_object_node_id(target_column, Result.Rows[A_Index][2])
				this_link_object.link_value := this_link_value
				If (InStr(position_labels, current_group_name))
				{
					format_mode := "positions"
					this_link_object.link_label := format_to_readable(this_link_value) . " in " .  current_target_node . "<br />Type: " . current_group_name
				}
				else if ( current_group_name = "Expenditure" )
				{
					format_mode := "dollars"
					this_link_object.link_label := format_to_readable(this_link_value) . " in " .  current_target_node . "<br />Expenditure: " . current_target_node
				}
				else 
				{
					format_mode := "dollars"
					this_link_object.link_label := format_to_readable(this_link_value) . " to " .  current_target_node . "<br />Fund Source: " . current_group_name
					if (grouping_column = "REPORT_LINE")
					{
						this_link_object.link_label .= " " fund_type_short(current_group_name)
					}
				}
				this_link_object.link_color := LinkColor(current_color_cell, link_color_list[(color_list)]) ; LinkColor(sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name, link_color_list[(color_list)]) ; this_link_object.link_color := LinkColor(this_link_object.link_label, link_color_list[(color_list)])
				sankey_object.links.push(this_link_object)
			}
		}
	}

	if (add_target_node_links = true)
	{
		SQL := "SELECT DISTINCT `"" target_column "`" FROM `"" sql_table "`" WHERE " sql_filter ";"
		Result := ""
		If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

		If (Result.HasRows) 
		{
			Loop Result.Rows.Length
			{
				hyperlink_id := sankey_object_node_id(target_column, Result.Rows[A_Index][1])
				this_identifier_text := hyperlink_id
				if ( add_project_links = true )
				{
					this_identifier_text := "https://omb.alaska.gov/ombfiles/" sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_project_link
					;this_identifier_text := "javascript:alert(\'OMB project file not available.\')"
				}
				if ( is_child = true )
				{
					this_identifier_text := "@@@" . Result.Rows[A_Index][1] . "@@@" 
				}	
				if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
				{
					sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
				}
			}
		}
	}

	if (add_source_node_links = true)
	{
		SQL := "SELECT DISTINCT `"" source_column "`" FROM `"" sql_table "`" WHERE " sql_filter ";"
		Result := ""
		If !DB.GetTable(SQL, &Result)
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

		If (Result.HasRows) 
		{
			Loop Result.Rows.Length
			{
				hyperlink_id := sankey_object_node_id(source_column, Result.Rows[A_Index][1])
				this_identifier_text := hyperlink_id
				if (source_column = "REPORT_LINE")
				{
					this_fund_code := SubStr(Result.Rows[A_Index][1],1,4)
					
					if (IsInteger(this_fund_code))
					{
						this_identifier_text := "https://www.legfin.akleg.gov/ReportsPHP/SelectReport.php?&ReportAbbrev=FUNDSOURCE&LimitFundCodes=" this_fund_code
						if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
						{
							sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
						}
					}
				}
				else if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
				{
					;;; I'm not sure what this does... or if this "else" block is even needed....
					sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
				}
			}
		}
	}
}
build_department_sankey(department_abs, department_readable, department_folder)
{
	global 
	parent_levels 		:= 1
	this_plot_name 		:= "plot"
	the_department_name := department_readable
	abs_department_name := department_abs
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND LINE_TYPE='Expenditure'"
	plot_total			:= 	format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_plot_title 	:= the_department_name " (Fund > Results Delivery Unit > Component)" ; DEFAULT
	this_title 			:= this_scenario_name " <br /> " this_plot_title " (" plot_total ")"
	this_width 			:= "1200"
	this_height			:= "1150"
	this_small_height 	:= "800"
	back_link			:= "plot-overview.html"
	
	DirCreate(build_directory "\" department_folder)
	this_output_file := build_directory "\" department_folder "\" this_plot_name ".html"
	menu_html .= '<div><a href="' department_folder '/' this_plot_name '.html">Operating Budget</a></div>' rn
	
	department_output_file := this_output_file
	
	sql_filter	:= "LINE_TYPE='Revenue' AND DEPT_NAME='" abs_department_name "'"
	build_nodes_from_columns("RDU_NAME", "COMP_NAME", "REPORT_LINE")
	build_links("REPORT_LINE", "RDU_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, true, true, false)
	build_links("RDU_NAME", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, false, true, true)

	build_json(), build_javascript(), build_html()
	
	rdu_level_nodes := sankey_object_column_rows("RDU_NAME")

	for key, this_node in rdu_level_nodes
	{	
		build_rdu_sankey(this_node.node_name, department_folder "\" this_node.node_id, this_node.node_id )
	}
}
build_rdu_sankey(sub_rdu_name, sub_folder, parent_folder)
{
	global
	parent_levels 		:= 2
	abs_rdu_name		:= sub_rdu_name
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND LINE_TYPE='Expenditure'"
	plot_total			:= 	format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_width 			:= "1000"
	this_height 		:= "800"
	this_small_height 	:= "600"
	back_link			:= "../" this_plot_name ".html"
	this_output_file 	:= build_directory "\" sub_folder "\" this_plot_name ".html"
	this_title 			:= this_scenario_name " <br /> " sub_rdu_name " (Fund > Component > Expenditure Line) (" plot_total ")"
	
	DirCreate( build_directory "\" sub_folder )

	sql_filter	:= "(LINE_TYPE='Revenue' OR LINE_TYPE='Expenditure') AND DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(sub_rdu_name) "'"
	build_nodes_from_columns("COMP_NAME", "REPORT_LINE")
	sql_filter	:= "(LINE_TYPE='Revenue') AND DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(sub_rdu_name) "'"
	build_links( "REPORT_LINE", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, true, false, false )
	sql_filter	:= "(LINE_TYPE='Expenditure') AND DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(sub_rdu_name) "'"
	build_links("COMP_NAME", "REPORT_LINE", "LINE_TYPE", "SCEN1_AMOUNT", "LINE_TYPE", 1, true, false)
	
	build_json(), build_javascript(), build_html()
	
	component_level_nodes := sankey_object_column_rows("COMP_NAME")
	
	for key, this_node in component_level_nodes
	{	
		department_html_file := FileRead(department_output_file)
		department_html_file := StrReplace(department_html_file, "@@@" this_node.node_name "@@@", parent_folder "/" this_node.node_id)
		FileDelete(department_output_file)
		FileAppend(department_html_file, department_output_file)

		build_component_sankey(this_node.node_name, sub_folder "\" this_node.node_id)
	}
}
build_component_sankey(sub_component_name, sub_folder)
{
	global
	parent_levels 		:= 3
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND COMP_NAME='" cln(sub_component_name) "' AND LINE_TYPE='Expenditure'"
	plot_total			:= 	format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_width 			:= "1000"
	this_height 		:= "400"
	this_small_height 	:= "400"
	back_link			:= "../"  this_plot_name ".html"
	this_output_file 	:= build_directory "\" sub_folder "\" this_plot_name ".html"
	this_title 			:= this_scenario_name " <br /> " sub_component_name " (Fund > Component > Expenditure Line) (" plot_total ")"

	if !DirExist(build_directory "\" sub_folder)
		DirCreate(build_directory "\" sub_folder)
	
	sql_filter	:= "(LINE_TYPE='Revenue' OR LINE_TYPE='Expenditure') AND DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND COMP_NAME='" cln(sub_component_name) "'"
	build_nodes_from_columns("COMP_NAME", "REPORT_LINE")
	sql_filter	:= "(LINE_TYPE='Revenue') AND DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND COMP_NAME='" cln(sub_component_name) "'"
	build_links( "REPORT_LINE", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, true, false )
	sql_filter	:= "(LINE_TYPE='Expenditure') AND DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND COMP_NAME='" cln(sub_component_name) "'"
	build_links( "COMP_NAME", "REPORT_LINE", "LINE_TYPE", "SCEN1_AMOUNT", "LINE_TYPE", 1, false, false)

	build_json(), build_javascript(), build_html()
}
build_department_overview_sankey(department_abs, department_readable, department_folder)
{	
	global
	parent_levels 		:= 1
	this_plot_name 		:= "plot-overview"
	the_department_name := department_readable
	abs_department_name := department_abs
	this_width 			:= "1200"
	this_height 		:= "600"
	this_small_height 	:= "400"
	back_link			:= "../plot-statewide.html"
	this_plot_title 	:= the_department_name " (Fund > Fund Group > Department > Expenditure Line)"
	this_title 			:= this_scenario_name . " <br /> " this_plot_title " (" format_to_readable(sum_sql("SCEN1_AMOUNT","DEPT_NAME='" abs_department_name "' AND LINE_TYPE='Expenditure'")) ")"
	
	this_output_file 	:= build_directory "\" department_folder "\" this_plot_name ".html"
	
	sql_filter := "(LINE_TYPE='Revenue' OR LINE_TYPE='Expenditure') AND DEPT_NAME='" abs_department_name "'"
	build_nodes_from_columns("DEPT_NAME", "RDU_NAME", "REPORT_LINE", "FUND_GROUP")
		
	sql_filter := "(LINE_TYPE='Revenue') AND DEPT_NAME='" abs_department_name "'"
	build_links("REPORT_LINE", "FUND_GROUP", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, true, false)
	build_links("FUND_GROUP", "DEPT_NAME", "FUND_GROUP", "SCEN1_AMOUNT", "FUND_GROUP", 1, false, true, true)

	sql_filter := "(LINE_TYPE='Expenditure') AND DEPT_NAME='" abs_department_name "'"
	build_links("DEPT_NAME", "REPORT_LINE", "LINE_TYPE", "SCEN1_AMOUNT", "LINE_TYPE", 1, false, false)
	
	build_json()
	build_javascript()
	build_html()

	menu_html .= "<div><a href=`"" department_folder "/" this_plot_name ".html`">Department Overview</a></div>" rn
}
build_department_pcn_sankey(department_abs, department_readable, department_folder)
{
	global 
	parent_levels := 1
	format_mode 			:= "positions"
	json_value_format 		:= 'valueformat: ",f",'
	show_values_in_labels 	:= true
	
	the_department_name 	:= department_readable
	abs_department_name 	:= department_abs
	
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND LINE_TYPE='Position Count'"
	plot_total			:= 	format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))

	this_plot_name 		:= "plot-pcn"
	this_plot_title 	:= the_department_name " Positions"
	this_title 			:= this_scenario_name . " <br /> " this_plot_title " (" plot_total " positions)"
	this_width 			:= "1000"
	this_height 		:= "500"
	this_small_height 	:= "500"
	back_link			:= "../index.html"
	
	this_output_file 	:= build_directory "\" department_folder "\" this_plot_name ".html"

	menu_html 			.= '<div><a href="' department_folder '/' this_plot_name '.html">Budgeted Positions</a></div>' rn
	
	department_output_file := this_output_file
	
	sql_filter := sum_filter
	build_nodes_from_columns("RDU_NAME", "REPORT_LINE")
	build_links("REPORT_LINE", "RDU_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "REPORT_LINE", 1, false, true)
	
	build_json(), build_javascript(), build_html()
	
	second_level_nodes := sankey_object_column_rows("RDU_NAME")
	
	for key, this_node in second_level_nodes
	{	
		build_pcn_rdu_sankey(this_node.node_name,  department_folder "\" this_node.node_id)
	}
}
build_pcn_rdu_sankey(sub_rdu_name, sub_folder)
{
	global
	parent_levels 		:= 2
	abs_rdu_name		:= sub_rdu_name
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND LINE_TYPE='Position Count'"
	plot_total			:= format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_title 			:= this_scenario_name . " <br /> " sub_rdu_name " (" plot_total " positions)"
	this_width 			:= "1000"
	this_height 		:= "500"
	this_small_height 	:= "500"
	this_output_file 	:= build_directory "\" sub_folder "\" this_plot_name ".html"
	back_link			:= "../"  this_plot_name ".html"
	
	sql_filter := sum_filter
	build_nodes_from_columns("COMP_NAME", "REPORT_LINE")
	build_links( "REPORT_LINE", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "REPORT_LINE", 1, false, true )
	
	build_json(), build_javascript(), build_html()
	
	third_level_nodes := sankey_object_column_rows("COMP_NAME")
	
	for key, this_node in third_level_nodes
	{	
		build_pcn_component_sankey(this_node.node_name, sub_folder "\" this_node.node_id)
	}
	
}
build_pcn_component_sankey(sub_component_name, sub_folder)
{
	
	global	
	parent_levels 		:= 3
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND COMP_NAME='" cln(sub_component_name) "' AND LINE_TYPE='Position Count'"
	plot_total			:= 	format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_plot_name 		:= this_plot_name
	this_title 			:= this_scenario_name . " <br /> " sub_component_name " (" plot_total " positions)"
	this_width 			:= "1000"
	this_height 		:= "500"
	this_small_height	:= "500"
	this_output_file 	:= build_directory "\" sub_folder "\" this_plot_name ".html"
	
	sql_filter := sum_filter
	build_nodes_from_columns("COMP_NAME", "REPORT_LINE")
	build_links( "REPORT_LINE", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "REPORT_LINE", 1, false, true )
	if !DirExist(build_directory "\" sub_folder)
		DirCreate(build_directory "\" sub_folder)
	build_json(), build_javascript(), build_html()
}
build_json()
{
	global

	json_node_label 		:= "label : ["
	json_node_color 		:= "color : ["
	json_node_meta			:= "meta  : ["
	json_node_x				:= "x  : ["
	json_node_y				:= "y  : ["
	
	for index, node in sankey_object.nodes.all
	{
		if (show_values_in_labels = true)
				json_node_label .= '"' . sankey_object.nodes.all[index].node_name . ", " . format_to_readable(sankey_object.nodes.all[index].node_total) . '", ' 
		else 	json_node_label .= '"' . sankey_object.nodes.all[index].node_name . '", ' 
		
		json_node_color 	.= '"'	. sankey_object.nodes.all[index].node_rgb_color . '", ' 
		json_node_meta 		.= '"'	. sankey_object.nodes.all[index].node_id 		. '", ' 
		json_node_x 		.= "/*"	. sankey_object.nodes.all[index].node_name 		. '*/, '  
		json_node_y 		.= "/*"	. sankey_object.nodes.all[index].node_name 		. '*/, '  
	}
	
	json_node_label		.= "],"
	json_node_color 	.= "],"
	json_node_meta 		.= "],"
	json_node_x 		.= "],"
	json_node_y 		.= "],"

	json_link_source	:= "source : ["
	json_link_target	:= "target : ["
	json_link_value		:= "value : ["
	json_link_label		:= "label : ["
	json_link_color		:= "color : ["


	for index, value in sankey_object.links
	{
		json_link_source	.= '"' . sankey_object.links[index].link_source . '", ' 
		json_link_target	.= '"' . sankey_object.links[index].link_target . '", ' 
		json_link_value		.= '"' . sankey_object.links[index].link_value	. '", ' 
		json_link_label		.= '"' . sankey_object.links[index].link_label	. '", ' 
		json_link_color		.= '"' . sankey_object.links[index].link_color	. '", ' 
	}

	json_link_source 	.= "]," 
	json_link_target 	.= "],"
	json_link_value 	.= "],"
	json_link_label 	.= "]," 
	json_link_color 	.= "],"
	
}
build_javascript()
{
	global
	
	javascript_links := ""
	javascript_hovers := ""
	directory_specifier := "../"

	for key, linkable_node in sankey_object.hyperlink_ids
	{
		javascript_links .= "case " linkable_node.id ":" rn

		if (linkable_node.link_identifier_text = "https://omb.alaska.gov/ombfiles/")
			javascript_links .= tabs(5) . "alert('OMB project file not available.'); `r`n"
		else if InStr(linkable_node.link_identifier_text, "https://")
			javascript_links .= tabs(5) . "window.open('" linkable_node.link_identifier_text "'); `r`n"
		else if (this_plot_name = "plot-overview")
			javascript_links .= tabs(5) . "window.location.href = 'plot.html'; `r`n"
		else if InStr(this_plot_name, "plot-statewide")
			javascript_links .= tabs(5) . "window.location.href = '" . linkable_node.link_identifier_text . "/plot-overview.html';" . "`r`n"
		else
			javascript_links .= tabs(5) . "window.location.href = '" . linkable_node.link_identifier_text . "/" . this_plot_name . ".html';" . "`r`n"
		javascript_links .= tabs(5) . "break;" . "`r`n"
		javascript_links .= tabs(4) 
		
		javascript_hovers .= "case " . linkable_node.id . ":" . "`r`n"
		javascript_hovers .= tabs(5) . "data.event.srcElement.style.cursor = 'pointer';" . "`r`n"
		javascript_hovers .= tabs(5) . "break;" . "`r`n"
		javascript_hovers .= tabs(4) 
	}
	
	sankey_object.hyperlink_ids := ""
	sankey_object.hyperlink_ids := []
}
build_html()
{
	global
	html_ramfile := FileRead(A_ScriptDir "/resources/html_templates/template.html")
	html_file := html_ramfile
	html_file := StrReplace(html_file, "@@@UID@@@", this_build_uid)
	parent_levels_string := ""
	loop parent_levels 
	{
		parent_levels_string .= "../"
	}
	html_file := StrReplace(html_file, "@@@PLOTLYSOURCE@@@" , parent_levels_string . plotly_source	)
	html_file := StrReplace(html_file, "@@@HTMLTITLE@@@"    , StrReplace(this_title, " <br />")     )
	html_file := StrReplace(html_file, "@@@TITLE@@@"        , this_title                            )
	html_file := StrReplace(html_file, "@@@WIDTH@@@"        , this_width                            )
	html_file := StrReplace(html_file, "@@@HEIGHT@@@"       , this_height                           )
	html_file := StrReplace(html_file, "@@@SMALLHEIGHT@@@"  , this_small_height                     )
	html_file := StrReplace(html_file, "@@@BACKLINK@@@"     , back_link								)
	html_file := StrReplace(html_file, "@@@NODELABEL@@@"    , json_node_label						)
	html_file := StrReplace(html_file, "@@@NODECOLOR@@@"    , json_node_color						)
	html_file := StrReplace(html_file, "@@@NODEMETA@@@"     , json_node_meta						)
	html_file := StrReplace(html_file, "@@@NODEX@@@"        , json_node_x							)
	html_file := StrReplace(html_file, "@@@NODEY@@@"        , json_node_y							)
	html_file := StrReplace(html_file, "@@@LINKSOURCE@@@"   , json_link_source						)
	html_file := StrReplace(html_file, "@@@LINKTARGET@@@"   , json_link_target						)
	html_file := StrReplace(html_file, "@@@LINKVALUE@@@"    , json_link_value						)
	html_file := StrReplace(html_file, "@@@LINKLABEL@@@"    , json_link_label						)
	html_file := StrReplace(html_file, "@@@LINKCOLOR@@@"    , json_link_color						)
	html_file := StrReplace(html_file, "@@@NODEJSCURSOR@@@" , javascript_hovers						)
	html_file := StrReplace(html_file, "@@@NODEJSLINK@@@"   , javascript_links						)
	html_file := StrReplace(html_file, "@@@VALUEFORMAT@@@"  , json_value_format						)
	if (show_values_in_labels = true )
	{
		javascript_node_hover_template := 'hovertemplate: "%{label}<extra></extra>",'
		html_file := StrReplace(html_file, "@@@NODEHOVERTEMPLATE@@@", javascript_node_hover_template)
	}
	else {
		javascript_node_hover_template := 'hovertemplate: "%{label}, %{value}<extra></extra>",'
		html_file := StrReplace(html_file, "@@@NODEHOVERTEMPLATE@@@", javascript_node_hover_template)
	}
	if !InStr(this_output_file, "plot-pcn.html")
	{
		html_file := StrReplace(html_file, "@@@LEGENDHTML@@@" 	,  html_color_legend 												)
		html_file := StrReplace(html_file, "@@@UGFCOLOR@@@"		,  NodeColor("Unrestricted General Funds", node_color_list[1])		)
		html_file := StrReplace(html_file, "@@@DGFCOLOR@@@"		,  NodeColor("Designated General Funds", node_color_list[1])		)
		html_file := StrReplace(html_file, "@@@OTHERCOLOR@@@"	,  NodeColor("Other Funds", node_color_list[1])						)
		html_file := StrReplace(html_file, "@@@FEDCOLOR@@@"		,  NodeColor("Federal Funds", node_color_list[1])					)
	}
	else
	{
		html_file := StrReplace(html_file, "@@@LEGENDHTML@@@", "")
	}
	if(FileExist(this_output_file))
		FileDelete(this_output_file)
	FileAppend(html_file, this_output_file)
	sankey_object.links := []
}
initialize_fund_translation()
{
	global
	fund_translate := []
	fund_translate.push({capital:"1230 AKCW Ad Fu", operating: "1230 Alaska Clean Water Administrative Fund"})
	fund_translate.push({capital:"1231 AKDW Ad Fu", operating: "1231 Alaska Drinking Water Administrative Fund"})
	fund_translate.push({capital:"1232 ISPF-I/A", operating: "1232 In-state Pipeline Fund Interagency"})
	fund_translate.push({capital:"1233 Muni Bonds", operating: "1233 Municipal Bond Bank Bonds"})
	fund_translate.push({capital:"1235 AGDC-LNG", operating: "1235 Alaska Liquefied Natural Gas Project Fund (AGDC-LNG)"})
	fund_translate.push({capital:"1236 AK LNG I/A", operating: "1236 Alaska Liquefied Natural Gas Project Fund I/A (AK LNG I/A)"})
	fund_translate.push({capital:"1238 VaccAssess", operating: "1238 Vaccine Assessment Account"})
	fund_translate.push({capital:"1237 VocSmBus", operating: "1237 Vocational Rehabilitation Small Bus. Enterprise Revolving Fd"})
	fund_translate.push({capital:"1241 GF/LNG", operating: "1241 General Fund/Liquefied Natural Gas"})
	fund_translate.push({capital:"1243 SBR", operating: "1243 Statutory Budget Reserve Fund"})
	fund_translate.push({capital:"1249 Motor Fuel", operating: "1249 Motor Fuel Tax Receipts"})
	fund_translate.push({capital:"1250 Maint Cap", operating: "1250 Maintenance and Capital Fund"})
	fund_translate.push({capital:"1253 STA Bonds", operating: "1253 Subject to Appropriation Bonds"})
	fund_translate.push({capital:"1254 MET Fund", operating: "1254 Marijuana Education and Treatment Fund"})
	fund_translate.push({capital:"1255 Invest", operating: "1255 Securities Investor Education and Training Fund"})
	fund_translate.push({capital:"1255 Reapprops", operating: "1255 Reappropriations"})
	fund_translate.push({capital:"1256 Ed Endow", operating: "1256 Education Endowment Fund"})
	fund_translate.push({capital:"1257 Div Raffle", operating: "1257 Dividend Raffle Fund"})
	fund_translate.push({capital:"1261 Shared Tax", operating: "1261 Shared Taxes"})
	fund_translate.push({capital:"1262 StatPFRoy", operating: "1262 Non-mandatory Royalty Deposits to the Permanent Fund"})
	fund_translate.push({capital:"1251 Non-UGF", operating: "1251 Non-UGF (Leg Fiscal Note System Only)"})
	fund_translate.push({capital:"1252 DGF Temp", operating: "1252 DGF Temp (Leg Fiscal Note System)"})
	fund_translate.push({capital:"1264 MET Alt", operating: "1264 MET Alt"})
	fund_translate.push({capital:"1265 COVID Fed", operating: "1265 Non-specific COVID Fed"})
	fund_translate.push({capital:"1268 MH Tr Res", operating: "1268 Mental Health Trust Reserve"})
	fund_translate.push({capital:"1267 FTA CRRSAA", operating: "1267 FTA CRRSAA Grant Funding"})
	fund_translate.push({capital:"1269 CSLFRF", operating: "1269 CSLFRF (Fed) Flexible ARP Funding"})
	fund_translate.push({capital:"1266 COVID UGF", operating: "1266 COVID UGF"})
	fund_translate.push({capital:"1270 FHWA CRRSA", operating: "1270 FHWA CRRSAA Fed"})
	fund_translate.push({capital:"1271 ARPA Rev R", operating: "1271 ARPA Revenue Replacement UGF"})
	fund_translate.push({capital:"1246 Recid Redu", operating: "1246 Recidivism Reduction Fund"})
	fund_translate.push({capital:"1247 Med Recov", operating: "1247 Medicaid Monetary Recoveries"})
	fund_translate.push({capital:"1248 ACHI Fund", operating: "1248 Alaska Comprehensive Health Insurance Fund"})
	fund_translate.push({capital:"1000 Restrtd GF", operating: "1000 Restricted General Fund"})
	fund_translate.push({capital:"1002 Fed Rcpts", operating: "1002 Federal Receipts"})
	fund_translate.push({capital:"1003 G/F Match", operating: "1003 General Fund Match"})
	fund_translate.push({capital:"1004 Gen Fund", operating: "1004 General Fund Receipts"})
	fund_translate.push({capital:"1005 GF/Prgm", operating: "1005 General Fund/Program Receipts"})
	fund_translate.push({capital:"1007 I/A Rcpts", operating: "1007 Interagency Receipts"})
	fund_translate.push({capital:"1010 UA/INT INC", operating: "1010 University of Alaska Interest Income"})
	fund_translate.push({capital:"1012 Rail Enrgy", operating: "1012 Railbelt Energy Fund"})
	fund_translate.push({capital:"1013 Alchl/Drug", operating: "1013 Alcoholism & Drug Abuse Revolving Loan"})
	fund_translate.push({capital:"1014 Donat Comm", operating: "1014 Donated Commodity/Handling Fee Account"})
	fund_translate.push({capital:"1015 UA/DFA SVC", operating: "1015 U/A Dormitory/Food/Auxiliary Service"})
	fund_translate.push({capital:"1016 Fed Incent", operating: "1016 CSSD Federal Incentive Payments"})
	fund_translate.push({capital:"1019 Reforest", operating: "1019 Reforestation Fund"})
	fund_translate.push({capital:"1021 Agric Loan", operating: "1021 Agricultural Loan Fund"})
	fund_translate.push({capital:"1024 Fish/Game", operating: "1024 Fish and Game Fund"})
	fund_translate.push({capital:"1026 Hwy Capitl", operating: "1026 Highways/Equipment Working Capital Fund"})
	fund_translate.push({capital:"1027 Int Airprt", operating: "1027 International Airport Revenue Fund"})
	fund_translate.push({capital:"1031 Sec Injury", operating: "1031 Second Injury Fund Reserve Account"})
	fund_translate.push({capital:"1034 Teach Ret", operating: "1034 Teachers Retirement System Fund"})
	fund_translate.push({capital:"1036 Cm Fish Ln", operating: "1036 Commercial Fishing Loan Fund"})
	fund_translate.push({capital:"1195 SnoMachReg", operating: "1195 Snow Machine Registration Receipts"})
	fund_translate.push({capital:"1037 GF/MH", operating: "1037 General Fund / Mental Health"})
	fund_translate.push({capital:"1038 UA/STF SVC", operating: "1038 U/A Student Tuition/Fees/Services"})
	fund_translate.push({capital:"1039 UA/ICR", operating: "1039 U/A Indirect Cost Recovery"})
	fund_translate.push({capital:"1040 Surety Fnd", operating: "1040 Real Estate Surety Fund"})
	fund_translate.push({capital:"1192 Mine Trust", operating: "1192 Mine Reclamation Trust Fund"})
	fund_translate.push({capital:"1042 Jud Retire", operating: "1042 Judicial Retirement System"})
	fund_translate.push({capital:"1044 Debt Ret", operating: "1044 AK Debt Retirement Fund"})
	fund_translate.push({capital:"1046 Stdnt Loan", operating: "1046 Student Revolving Loan Fund"})
	fund_translate.push({capital:"1048 Univ Rcpt", operating: "1048 University Restricted Receipts"})
	fund_translate.push({capital:"1050 PFD Fund", operating: "1050 Permanent Fund Dividend Fund"})
	fund_translate.push({capital:"1057 Small Bus", operating: "1057 Small Business Loan Fund"})
	fund_translate.push({capital:"1058 Trsm Loan", operating: "1058 Tourism Revolving Loan Fund"})
	fund_translate.push({capital:"1059 Corr. Ind.", operating: "1059 Correctional Industries Fund"})
	fund_translate.push({capital:"1060 OF(Pre'84)", operating: "1060 Other Funds (Pre-FY '84 Only)"})
	fund_translate.push({capital:"1061 CIP Rcpts", operating: "1061 Capital Improvement Project Receipts"})
	fund_translate.push({capital:"1063 NPR Fund", operating: "1063 National Petroleum Reserve Fund"})
	fund_translate.push({capital:"9003 Unkn DGF", operating: "9003 Unknown DGF Fund Source"})
	fund_translate.push({capital:"1067 Mining RLF", operating: "1067 Mining Revolving Loan Fund"})
	fund_translate.push({capital:"1068 Child Care", operating: "1068 Child Care Revolving Loan Fund"})
	fund_translate.push({capital:"1069 Hist Dist", operating: "1069 Historical District Revolving Loan Fund"})
	fund_translate.push({capital:"1070 Fish En Ln", operating: "1070 Fisheries Enhancement Revolving Loan Fund"})
	fund_translate.push({capital:"1071 Alt Energy", operating: "1071 Alternative Energy Revolving Loan Fund"})
	fund_translate.push({capital:"1072 Res Energy", operating: "1072 Residential Energy Conservation Loan Fund"})
	fund_translate.push({capital:"1074 Bulk Fuel", operating: "1074 Bulk Fuel Revolving Loan Fund"})
	fund_translate.push({capital:"1076 Marine Hwy", operating: "1076 Marine Highway System Fund"})
	fund_translate.push({capital:"1078 Sr Housing", operating: "1078 Senior Housing Loan Fund"})
	fund_translate.push({capital:"1081 Info Svc", operating: "1081 Information Services Fund"})
	fund_translate.push({capital:"1082 Vessel Rep", operating: "1082 Vessel Replacement Fund"})
	fund_translate.push({capital:"1086 SE Energy", operating: "1086 Southeast Energy Fund"})
	fund_translate.push({capital:"1088 UnInc Mtch", operating: "1088 Unincorporated Matching Grant Fund"})
	fund_translate.push({capital:"1089 Power Cost", operating: "1089 Power Cost Equalization Fund"})
	fund_translate.push({capital:"1090 4 Dam Pool", operating: "1090 Four Dam Pool Transfer Fund"})
	fund_translate.push({capital:"1091 GF/Desig", operating: "1091 General Funds - Designated"})
	fund_translate.push({capital:"1094 MHT Admin", operating: "1094 Mental Health Trust Administration"})
	fund_translate.push({capital:"1097 AETNA Res", operating: "1097 Group Health and Life Benefits Fund (AS 39.30.095)"})
	fund_translate.push({capital:"1098 ChildTrErn", operating: "1098 Children's Trust Earnings"})
	fund_translate.push({capital:"1099 ChildTrPrn", operating: "1099 Children's Trust Principal"})
	fund_translate.push({capital:"1100 ADWF", operating: "1100 Alaska Drinking Water Fund"})
	fund_translate.push({capital:"1103 AHFC Rcpts", operating: "1103 Alaska Housing Finance Corporation Receipts"})
	fund_translate.push({capital:"-1 Unknown GF", operating: "-1 Unknown GF"})
	fund_translate.push({capital:"1102 AIDEA Rcpt", operating: "1102 Alaska Industrial Development & Export Authority Receipts"})
	fund_translate.push({capital:"1104 MBB Rcpts", operating: "1104 Alaska Municipal Bond Bank Receipts"})
	fund_translate.push({capital:"1105 PFund Rcpt", operating: "1105 Alaska Permanent Fund Corporation Receipts"})
	fund_translate.push({capital:"1107 AEA Rcpts", operating: "1107 Alaska Energy Authority Corporate Receipts"})
	fund_translate.push({capital:"1108 Stat Desig", operating: "1108 Statutory Designated Program Receipts"})
	fund_translate.push({capital:"1110 APUC Rcpts", operating: "1110 Alaska Public Utility Commission"})
	fund_translate.push({capital:"1092 MHTAAR", operating: "1092 Mental Health Trust Authority Authorized Receipts"})
	fund_translate.push({capital:"9999 No specif.", operating: "9999 No specific fund source"})
	fund_translate.push({capital:"1114 EVOS Rest", operating: "1114 Exxon Valdez Oil Spill Restoration Fund"})
	fund_translate.push({capital:"1115 InT/BuEnIn", operating: "1115 International Trade and Business Endowment Income"})
	fund_translate.push({capital:"1119 Tobac Setl", operating: "1119 Tobacco Settlement"})
	fund_translate.push({capital:"1121 MultiFunds", operating: "1121 Multiple Funds pre FY94"})
	fund_translate.push({capital:"1122 LIC/PER/CT", operating: "1122 License/Permits/Certification Pre 89"})
	fund_translate.push({capital:"1123 Care/Trmnt", operating: "1123 Care and Treatment - FY88"})
	fund_translate.push({capital:"1125 APA Plant", operating: "1125 APA Plant Maintenance & Operation - FY88"})
	fund_translate.push({capital:"1129 Legal Recp", operating: "1129 Legal Settlement Receipts - FY88"})
	fund_translate.push({capital:"1130 Handcap Fn", operating: "1130 Handicapped Vendor Facility Fund - FY88"})
	fund_translate.push({capital:"1049 Trng Bldg", operating: "1049 Training and Building Fund"})
	fund_translate.push({capital:"1174 UA I/A", operating: "1174 UA Intra-Agency Transfers"})
	fund_translate.push({capital:"1132 Publ/Other", operating: "1132 Publications and Other Services - FY88"})
	fund_translate.push({capital:"1096 ILT Fund", operating: "1096 Investment Loss Trust Fund (DO NOT USE)"})
	fund_translate.push({capital:"1017 Ben Sys", operating: "1017 Benefits Systems Receipts"})
	fund_translate.push({capital:"1035 Vet Loan", operating: "1035 Veterans Revolving Loan Fund"})
	fund_translate.push({capital:"1045 Nat Guard", operating: "1045 National Guard & Naval Militia Retirement System"})
	fund_translate.push({capital:"1055 IA/OIL HAZ", operating: "1055 Interagency/Oil & Hazardous Waste"})
	fund_translate.push({capital:"1064 House Loan", operating: "1064 Housing Assistance Loan Fund"})
	fund_translate.push({capital:"1073 Pwr Dv RLF", operating: "1073 Power Development Revolving Loan Fund"})
	fund_translate.push({capital:"1084 Alyeska", operating: "1084 Alyeska Settlement Fund"})
	fund_translate.push({capital:"1095 Med Facil", operating: "1095 Medical Facilities Authority Fund"})
	fund_translate.push({capital:"1113 AHFC Bonds", operating: "1113 Alaska Housing Finance Corporation Bonds"})
	fund_translate.push({capital:"1118 Pioneers' ", operating: "1118 Pioneers' Homes Receipts"})
	fund_translate.push({capital:"1224 MariculRLF", operating: "1224 Mariculture Revolving Loan Fund"})
	fund_translate.push({capital:"1135 AMHS Dup", operating: "1135 Marine Highway Duplicated Expenditures"})
	fund_translate.push({capital:"1137 DComp IA", operating: "1137 Inactive-Deferred Compensation Inter Agency Receipts"})
	fund_translate.push({capital:"1229 AGDC-ISP", operating: "1229 AK Gasline Development Corporation In-state Pipeline Fund"})
	fund_translate.push({capital:"1138 Hlth I/A", operating: "1138 Inactive-Health Inter-Agency Receipts"})
	fund_translate.push({capital:"1141 RCA Rcpts", operating: "1141 RCA Receipts"})
	fund_translate.push({capital:"1142 RHIF/MM   ", operating: "1142 Retiree Health Ins Fund/Major Medical"})
	fund_translate.push({capital:"1143 RHIF/LTC", operating: "1143 Retiree Health Ins Fund/Long-Term Care Fund"})
	fund_translate.push({capital:"1144 CWF Bond", operating: "1144 Clean Water Fund Bond Receipts"})
	fund_translate.push({capital:"1145 AIPP Fund", operating: "1145 Art in Public Places Fund"})
	fund_translate.push({capital:"1023 FICA Acct", operating: "1023 FICA Administration Fund Account"})
	fund_translate.push({capital:"1109 Test Fish", operating: "1109 Test Fisheries Receipts"})
	fund_translate.push({capital:"-2 UnknwnOthr", operating: "-2 Unknown Other"})
	fund_translate.push({capital:"1150 ASLC Div", operating: "1150 ASLC Dividend"})
	fund_translate.push({capital:"1184 GOB DSFund", operating: "1184 General Obligation Bond Debt Service Fund"})
	fund_translate.push({capital:"1186 ASLC Bonds", operating: "1186 Alaska Student Loan Corporation Bond Proceeds"})
	fund_translate.push({capital:"2000 Bond Funds", operating: "2000 Bond Proceeds"})
	fund_translate.push({capital:"2001 Bonds MH", operating: "2001 Bond Proceeds Mental Health"})
	fund_translate.push({capital:"1218 146(c)code", operating: "1218 146(c)code"})
	fund_translate.push({capital:"1146 Fee Supp ", operating: "1146 Inactive-Fee Supported Increase"})
	fund_translate.push({capital:"1147 PublicBldg", operating: "1147 Public Building Fund"})
	fund_translate.push({capital:"1053 Invst Loss", operating: "1053 Investment Loss Trust Fund"})
	fund_translate.push({capital:"1139 AHFC Div", operating: "1139 AHFC Dividend"})
	fund_translate.push({capital:"1156 Rcpt Svcs", operating: "1156 Receipt Supported Services"})
	fund_translate.push({capital:"1152 AFSC Rcpts", operating: "1152 AK Fire Standards Council Receipts"})
	fund_translate.push({capital:"1153 State Land", operating: "1153 State Land Disposal Income Fund"})
	fund_translate.push({capital:"1157 Wrkrs Safe", operating: "1157 Workers Safety and Compensation Administration Account"})
	fund_translate.push({capital:"1158 Emp Pay", operating: "1158 Inactive Don't Use Employee Pay"})
	fund_translate.push({capital:"1154 Shore Fish", operating: "1154 Shore Fisheries Development Lease Program"})
	fund_translate.push({capital:"1159 DWF Bond", operating: "1159 Drinking Water Fund Bond Receipts"})
	fund_translate.push({capital:"1136 SBS IA", operating: "1136 Inactive-SBS Inter Agency Receipts"})
	fund_translate.push({capital:"1028 Pre90 PRGM", operating: "1028 Pre-FY90 Program Receipts"})
	fund_translate.push({capital:"1106 ASLC Rcpts", operating: "1106 Alaska Student Loan Corporation Receipts"})
	fund_translate.push({capital:"1025 Sci/Tech", operating: "1025 Science & Technology Endowment Income"})
	fund_translate.push({capital:"1205 Ocn Rngr", operating: "1205 Berth Fees for the Ocean Ranger Program"})
	fund_translate.push({capital:"1124 Res Receip", operating: "1124 Resource Assessment Receipts - FY88"})
	fund_translate.push({capital:"1197 AK Cap Inc", operating: "1197 Alaska Capital Income Fund"})
	fund_translate.push({capital:"1203 WCBG Fund", operating: "1203 Workers' Compensation Benefits Guaranty Fund"})
	fund_translate.push({capital:"1127 User Fees", operating: "1127 User Fees - FY88"})
	fund_translate.push({capital:"1128 Child Sup", operating: "1128 Child Support Enforcement - FY88"})
	fund_translate.push({capital:"1999 No ID Fund", operating: "1999 Other Fund Source"})
	fund_translate.push({capital:"1131 RR Fund", operating: "1131 Alaska Railroad Revenue Fund - FY85, FY86, FY87"})
	fund_translate.push({capital:"1006 GF/MHTIA", operating: "1006 General Fund/Mental Health Trust"})
	fund_translate.push({capital:"1151 VoTech Ed", operating: "1151 Technical Vocational Education Program Account"})
	fund_translate.push({capital:"1160 M/C Protec", operating: "1160 Marine/Coastal Protection-Inactive"})
	fund_translate.push({capital:"1162 AOGCC Rcpt", operating: "1162 Alaska Oil & Gas Conservation Commission Rcpts"})
	fund_translate.push({capital:"1161 RRD Fund", operating: "1161 Renewable Resources Development Fund-Inactive"})
	fund_translate.push({capital:"1051 RuralEcDev", operating: "1051 Rural Economic Development Initiative Fund"})
	fund_translate.push({capital:"1222 REAA Fund", operating: "1222 Regional Educational Attendance Area School Fund"})
	fund_translate.push({capital:"1033 Surpl Prop", operating: "1033 Surplus Property Revolving Fund"})
	fund_translate.push({capital:"1164 RDIF", operating: "1164 Rural Development Initiative Fund"})
	fund_translate.push({capital:"1165 CBR/MH", operating: "1165 CBR/Mental Health"})
	fund_translate.push({capital:"1167 NTSC Bond", operating: "1167 Northern Tobacco Securitization Corporation Bonds"})
	fund_translate.push({capital:"1148 AATP Fund ", operating: "1148 Accelerated Alaska Transportation Projects Fund"})
	fund_translate.push({capital:"1043 Impact Aid", operating: "1043 Impact Aid for K-12 Schools"})
	fund_translate.push({capital:"1193 MaintGrant", operating: "1193 Major Maintenance Grant Fund"})
	fund_translate.push({capital:"1093 Clean Air", operating: "1093 Clean Air Protection Fund"})
	fund_translate.push({capital:"1194 F&G Nonded", operating: "1194 Fish and Game Nondedicated Receipts"})
	fund_translate.push({capital:"1170 SmBusEDRLF", operating: "1170 Small Business Economic Development Revolving Loan Fund"})
	fund_translate.push({capital:"1179 PFC ", operating: "1179 Passenger Facility Charges"})
	fund_translate.push({capital:"1126 Cont Reimb", operating: "1126 Contract Services Reimbursement - FY88"})
	fund_translate.push({capital:"1185 ElectionFd", operating: "1185 Election Fund (HAVA)"})
	fund_translate.push({capital:"1022 Corp Rcpts", operating: "1022 State Corporation Receipts"})
	fund_translate.push({capital:"1077 Gifts/Grnt", operating: "1077 Gifts/Grants/Bequests"})
	fund_translate.push({capital:"1149 TAPL Fund", operating: "1149 Trans-Alaska Pipeline Liability Fund"})
	fund_translate.push({capital:"1163 COPs", operating: "1163 Certificates of Participation"})
	fund_translate.push({capital:"1032 Fish Fund", operating: "1032 Fishermen's Fund"})
	fund_translate.push({capital:"1177 ITB Endow", operating: "1177 International Trade and Business Endowment"})
	fund_translate.push({capital:"1181 Vets Endow", operating: "1181 Alaska Veterans' Memorial Endowment Fund"})
	fund_translate.push({capital:"1196 Master LOC", operating: "1196 Master Lease Line of Credit"})
	fund_translate.push({capital:"1182 Ed Cn/Mnt", operating: "1182 Educational and Museum Facility Design/Const/MajorMaint Fund"})
	fund_translate.push({capital:"1183 Trans Proj", operating: "1183 Transportation Project Fund"})
	fund_translate.push({capital:"1029 P/E Retire", operating: "1029 Public Employees Retirement System Fund"})
	fund_translate.push({capital:"1166 Vessel Com", operating: "1166 Commercial Passenger Vessel Environmental Compliance Fund"})
	fund_translate.push({capital:"1169 PCE Endow", operating: "1169 PCE Endowment Fund"})
	fund_translate.push({capital:"1173 Misc Earn", operating: "1173 Miscellaneous Earnings"})
	fund_translate.push({capital:"1225 CQuota RLF", operating: "1225 Community Quota Entity Revolving Loan Fund"})
	fund_translate.push({capital:"1178 tracking", operating: "1178 tracking code"})
	fund_translate.push({capital:"1112 IntAptCons", operating: "1112 International Airports Construction Fund"})
	fund_translate.push({capital:"1188 Fed Unrstr", operating: "1188 Federal Unrestricted Receipts"})
	fund_translate.push({capital:"1187 Fed MH", operating: "1187 Federal Mental Health"})
	fund_translate.push({capital:"1190 Adak Ops", operating: "1190 Adak Airport Operations "})
	fund_translate.push({capital:"1191 DEED CIP", operating: "1191 DEED CIP Fund Equity Account"})
	fund_translate.push({capital:"1041 PF Earn Rs", operating: "1041 Permanent Fund Earnings Reserve Account"})
	fund_translate.push({capital:"1054 Empl Trng", operating: "1054 State Employment & Training Program"})
	fund_translate.push({capital:"1198 F&GRevBond", operating: "1198 Alaska Fish and Game Revenue Bond Redemption Fund"})
	fund_translate.push({capital:"1062 Power Proj", operating: "1062 Power Project Loan Fund"})
	fund_translate.push({capital:"1065 Rural Elec", operating: "1065 Rural Electrification Revolving Loan Fund"})
	fund_translate.push({capital:"1056 Elect Svc", operating: "1056 Electrical Service Extension Fund"})
	fund_translate.push({capital:"1075 Clean Wtr", operating: "1075 Alaska Clean Water Loan Fund"})
	fund_translate.push({capital:"1079 Storg Tank", operating: "1079 Underground Storage Tank Revolving Loan Fund"})
	fund_translate.push({capital:"1083 Educ Facil", operating: "1083 Education Facilities Maint & Construction"})
	fund_translate.push({capital:"1085 Rail InTie", operating: "1085 Railbelt Intertie Reserve Fund"})
	fund_translate.push({capital:"1087 Muni Match", operating: "1087 Municipal Matching Grant Fund"})
	fund_translate.push({capital:"1101 AERO Rcpts", operating: "1101 Alaska Aerospace Development Corporation Receipts"})
	fund_translate.push({capital:"1212 Fed ARRA", operating: "1212 Federal Stimulus: ARRA 2009"})
	fund_translate.push({capital:"1052 Oil/Haz Fd", operating: "1052 Oil/Hazardous Prevention/Response Fund"})
	fund_translate.push({capital:"1117 VocRandSh", operating: "1117 Randolph Sheppard Small Business Fund"})
	fund_translate.push({capital:"1168 Tob Ed/Ces", operating: "1168 Tobacco Use Education and Cessation Fund"})
	fund_translate.push({capital:"1172 Bldg Safe", operating: "1172 Building Safety Account"})
	fund_translate.push({capital:"1176 Sci/T End", operating: "1176 Science and Technology Endowment Fund"})
	fund_translate.push({capital:"1011 Educ Trust", operating: "1011 Alaska Advance College Tuition Payment Fund"})
	fund_translate.push({capital:"1018 EVOSS", operating: "1018 Exxon Valdez Oil Spill Settlement"})
	fund_translate.push({capital:"1020 Grain Fund", operating: "1020 Grain Reserve Loan Fund"})
	fund_translate.push({capital:"1133 CSSD Reimb", operating: "1133 CSSD Administrative Cost Reimbursement"})
	fund_translate.push({capital:"1175 BLic&Corp", operating: "1175 Business License and Corporation Filing Fees and Taxes"})
	fund_translate.push({capital:"1199 SFEntAcct", operating: "1199 Alaska Sport Fishing Enterprise Account"})
	fund_translate.push({capital:"1219 Emrng Tech", operating: "1219 Emerging Energy Technology Fund"})
	fund_translate.push({capital:"1116 DisRlFd", operating: "1116 Disaster Relief Fund"})
	fund_translate.push({capital:"1140 AIDEA Div", operating: "1140 AIDEA Dividend"})
	fund_translate.push({capital:"1066 Pub School", operating: "1066 Public School Trust Fund"})
	fund_translate.push({capital:"1030 School Fnd", operating: "1030 School Fund (Cigarette Tax)"})
	fund_translate.push({capital:"1189 Sr Care", operating: "1189 Senior Care Fund"})
	fund_translate.push({capital:"1200 VehRntlTax", operating: "1200 Vehicle Rental Tax Receipts"})
	fund_translate.push({capital:"1201 CFEC Rcpts", operating: "1201 Commercial Fisheries Entry Commission Receipts"})
	fund_translate.push({capital:"1202 Anatomical", operating: "1202 Anatomical Gift Awareness Fund"})
	fund_translate.push({capital:"1155 Timber Rcp", operating: "1155 Timber Sale Receipts"})
	fund_translate.push({capital:"1207 Cr Shp Imp", operating: "1207 Regional Cruise Ship Impact Fund"})
	fund_translate.push({capital:"1208 BF Brdg LF", operating: "1208 Bulk Fuel Bridge Loan Fund"})
	fund_translate.push({capital:"1209 Capstone", operating: "1209 Alaska Capstone Avionics Revolving Loan Fund"})
	fund_translate.push({capital:"1210 Renew Ener", operating: "1210 Renewable Energy Grant Fund"})
	fund_translate.push({capital:"1206 CPV Tax", operating: "1206 Commercial Passenger Vessel Tax"})
	fund_translate.push({capital:"9000 Unkn UGF", operating: "9000 Unknown UGF Fund Source"})
	fund_translate.push({capital:"9001 Unknwn Fed", operating: "9001 Unknown Federal Fund Source"})
	fund_translate.push({capital:"9002 Unknwn Oth", operating: "9002 Unknown Other Fund Source"})
	fund_translate.push({capital:"1211 CSG Tax", operating: "1211 Cruise Ship Gambling Tax"})
	fund_translate.push({capital:"1171 PFD Crim", operating: "1171 Restorative Justice"})
	fund_translate.push({capital:"1216 Boat Rcpts", operating: "1216 Boat Registration Fees"})
	fund_translate.push({capital:"1215 UCR Rcpts", operating: "1215 Uniform Commercial Registration fees"})
	fund_translate.push({capital:"1214 WhitTunnel", operating: "1214 Whittier Tunnel Toll Receipts"})
	fund_translate.push({capital:"1217 NGF Earn", operating: "1217 NGF Earnings"})
	fund_translate.push({capital:"1009 Rev Bonds", operating: "1009 Revenue Bonds"})
	fund_translate.push({capital:"1220 Crime VCF", operating: "1220 Crime Victim Compensation Fund"})
	fund_translate.push({capital:"1258 CIF UGF", operating: "1258 UGF Deposits to the CIF"})
	fund_translate.push({capital:"1008 G/O Bonds", operating: "1008 General Obligation Bonds"})
	fund_translate.push({capital:"1221 Civil Legl", operating: "1221 Civil Legal Services Fund"})
	fund_translate.push({capital:"1001 CBR Fund", operating: "1001 Constitutional Budget Reserve Fund"})
	fund_translate.push({capital:"1223 CharterRLF", operating: "1223 Commercial Charter Fisheries RLF"})
	fund_translate.push({capital:"1080 Schl Const", operating: "1080 School Construction Fund"})
	fund_translate.push({capital:"1047 Title 20", operating: "1047 Title XX"})
	fund_translate.push({capital:"1120 MotorFuel ", operating: "1120 Motor Fuel Tax Increase"})
	fund_translate.push({capital:"1226 High Ed", operating: "1226 Alaska Higher Education Investment Fund"})
	fund_translate.push({capital:"1227 MicroRLF", operating: "1227 Alaska Microloan Revolving Loan Fund"})
	fund_translate.push({capital:"1111 FishFndInc", operating: "1111 Fishermans Fund Income"})
	fund_translate.push({capital:"1134 F&G CFP", operating: "1134 Fish and Game Criminal Fines and Penalties"})
	fund_translate.push({capital:"1213 AHCC Rcpts", operating: "1213 Alaska Housing Capital Corporation Receipts"})
	fund_translate.push({capital:"1180 Alcohol Fd", operating: "1180 Alcohol & Other Drug Abuse Treatment & Prevention Fund"})
	fund_translate.push({capital:"1228 UGFSequest", operating: "1228 UGF Associated with Sequestration"})
	fund_translate.push({capital:"1234 LicPlates", operating: "1234 License Plates"})
	fund_translate.push({capital:"1244 Rural Air", operating: "1244 Rural Airport Receipts"})
	fund_translate.push({capital:"1245 R Apt I/A", operating: "1245 Rural Airport Receipts I/A"})
	fund_translate.push({capital:"1239 AvFuel Tax", operating: "1239 Aviation Fuel Tax Revenue"})
	fund_translate.push({capital:"1275 Reapprop", operating: "1275 Reappropriation - Temporary to Match Leg Fin"})
}