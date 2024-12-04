;=======================================================================|
; The Sankey Builder v2! w/ sqlite! (aka Alaska Budget Visualizer)
;   by Dom Pannone, 2020-2025
;	
;	V2 introduces sqlite backend, SQL based computations,
;	and updated interpreter to AHKv2.
;=======================================================================|
/*

Sankey Object Stucture for v2:

sankey_object
		.links[i] ; array
		|	.link_source
		|	.link_target
		|	.link_value 
		|	.link_label 
		|	.link_color 
		.nodes{} ; object
		|	.columns[i] ; array
			|	.column_name
			|	.rows[i] ; array
				|	.node_name
				|	.node_rbg_color
				|	.node_id
				|	.node_total
				|	.node_meta
		|	.all[i] ; array
			|	.node_name
			|	.node_rbg_color
			|	.node_id
		.hyperlink_ids[i] ;
		|	.id
		|	.link_identifier_text

To Do: 

[] add view names.
[] links for project files. 
[] automatic color iteration with pallette.
[] document fund exports from abs.
[] make select new files a button on gui, not automatic ask.
[] make node_color function aware of fund_group color mismatch with line_type of expenditure, position.
[] add dump_sql to all db error traps.

[x] verify amounts. 2023.07.08
[x] remove sum_appropriations logic from build nodes 2023.07.08
[x] remove 1328 export 2023.07.08

https://www.sqlitetutorial.net/sqlite-group-by/

*/ 
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
#Include includes\Class_SQLiteDB.ahk
;=======================================================================|
InitializeDB()
select_scenario()
;=======================================================================|
start()
{
	global
	set_misc_variables()
	DirCreate(build_directory)
	
	FileCopy(A_ScriptDir "\resources\js\plotly\plotly-latest.min.js", build_directory "\plotly-latest.min.js")
	DirCreate(csv_directory)
	DirCreate(legfin_directory)
	DirCreate(omb_directory)

	InitializeDepartments()
	Initialize_Categories()
	initialize_fund_translation()
	do_operating()
	do_capital()
	/*
	if MsgBox("Do you want to select a directory to copy OMB files?", "Question", 4) = "Yes"
		{
			SourceDir := ""
			FileSelect("D", A_ScriptDir, "Select the directory containing OMB files:")
			if SourceDir
			{
				; Ensure the destination directory exists
				if !FileExist(DestDir)
					FileCreateDir(DestDir)
		
				for File in FileGetFiles(SourceDir "\*.OMB")
				{
					FileCopy(File, omb_directory "\" File, true) ; Overwrite if exists
				}
		
				MsgBox("All OMB files have been copied to: " . DestDir, "Info")
			}
			else
			{
				MsgBox("No directory selected. Operation canceled.", "Warning")
			}
		}
		else
		{
			MsgBox("Operation canceled.", "Info")
		}
	*/
	Run('explore "' build_directory '"')
	WinWait(this_build_uid, , 60)
	WinMove(A_ScreenWidth/2 - 500*(A_ScreenDPI/96), 150*(A_ScreenDPI/96), 1000*(A_ScreenDPI/96), 600*(A_ScreenDPI/96), this_build_uid)
}
;=======================================================================|
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
	this_xl_height 			:= "2000"
	back_link				:= "index.html"

	SQL := 'DELETE FROM "' operating_table '" WHERE LINE_TYPE=`'Capital`';'
	;dump_sql()
	DB.Exec(SQL)

	InitializeColors()
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

		; Replace links in parent
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

}
;=======================================================================|
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

	this_scenario_name := capital_scenario_name 

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
;=======================================================================|
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
;=======================================================================|
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
		add_project_links	:= true ; this triggers omb links on target nodes, which is true for both link builds in capital.
		this_plot_title 	:= department_list_object.readable_name " (Fund / Appropriation / Allocation)"
		plot_total			:= format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
		this_title 			:= this_scenario_name . " <br /> " this_plot_title " (" plot_total ")"
		this_width 			:= "1200"
		this_height 		:= "800"
		this_small_height 	:= "600"
		this_xl_height 		:= "1600"
		back_link			:= "../plot-capital.html"

		If !DirExist(build_directory "\" department_list_object.folder_name)
			DirCreate(build_directory "\" department_list_object.folder_name)
		
		this_output_file := build_directory "\" department_list_object.folder_name "\" this_plot_name ".html"

		build_nodes_from_columns("RDU_NAME", "COMP_NAME", "REPORT_LINE")
		build_links("REPORT_LINE", "RDU_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, true, true)
		sql_filter := sql_filter " AND COMP_NAME !=''"
		build_links("RDU_NAME", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "FUND_GROUP", 1, false, true)
		try
		{
			if (sankey_object.nodes.columns[2].rows.length > 25 )
			{
				this_height 	:= sankey_object.nodes.columns[2].rows.length * 20
				this_xl_height 	:= this_height * 2
			}
			else if (sankey_object.nodes.columns[1].rows.length > 25 )
			{
					this_height 	:= sankey_object.nodes.columns[1].rows.length * 20
					this_xl_height 	:= this_height * 2
			}
		}

		build_json(), build_javascript(), build_html()
	}

	parent_levels := 0
	menu_html .= "</div>" rn "</div>" rn
	this_output_file := build_directory . "\index-capital.html"

	build_html_menu() 
}
;=======================================================================|
set_misc_variables()
{
	global
	; MISC VARIABLES
	json_value_format           := 'valueformat: "$,.1f",'       	 ; json_value_format     := "valueformat: ""-$,.1f"","
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
	legfin_directory			:= build_directory "\legfin_files"
	omb_directory				:= build_directory "\omb_files"
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
;=======================================================================|
get_scenario_numbers() 
{
	global

	FileReadLine(&scenario_1512, file_1512_path, 2)
	scenario_1512 := StrSplit(scenario_1512,"(")
	scenario_1512 := StrSplit(scenario_1512[2],")")
	scenario_1512 := scenario_1512[1]

	FileReadLine(&scenario_272, file_272_path, 2)
	scenario_272 := StrSplit(scenario_272,"`t")
	scenario_272 := scenario_272[1] 
}
;=======================================================================|
FileReadLine(&output_var, file_to_read, line_number)
{
	file_object := FileOpen(file_to_read, "r")
	loop line_number
	{
		output_var := file_object.ReadLine() 
	}
	file_object.Close
}
;=======================================================================|
import_files_to_database()
{
	global

	; note: 
	; import.base is an initial sql script the ETLs from the TSV files so if you see weird name changes
	; check this file too for weird things in the data.

	import_buffer	:= FileRead("sqlite\import.base")
	import_buffer   := StrReplace(import_buffer, "%date_created%", 				uid, 				false)
	import_buffer   := StrReplace(import_buffer, "%budget_fiscal_year%", 		budget_fiscal_year, false)

	import_buffer   := StrReplace(import_buffer, "%op_budget_name%", 			op_budget_name.value,	false)
	import_buffer   := StrReplace(import_buffer, "%cap_budget_name%", 			cap_budget_name.value,	false)

	import_buffer   := StrReplace(import_buffer, "%operating_scenario_1512%", 	scenario_1512, 		false)
	import_buffer   := StrReplace(import_buffer, "%1512_file%", 				file_1512_path, 	false)

	import_buffer   := StrReplace(import_buffer, "%capital_scenario_272%", 		scenario_272, 		false)
	import_buffer   := StrReplace(import_buffer, "%272_file%", 					file_272_path, 		false)

	FileAppend(import_buffer, "sqlite\" uid ".base")

	cmd := A_ComSpec ' /c ""sqlite3.exe" "budget.db" <"' uid '.base""'
	RunWait(cmd, A_WorkingDir "\sqlite")
	
	select_scenario()
}
;=======================================================================|
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
;=======================================================================|
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
;=======================================================================|
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
;=======================================================================|
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
;=======================================================================|
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
;=======================================================================|
tabs(n)
{
	tabs := ""
	loop n
	{
		tabs .= A_Tab
	}
	return tabs
}
;=======================================================================|
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
;=======================================================================|
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
;=======================================================================|

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
	;"clean"
	return StrReplace(sql_str_literal, "'","''")
}
sum_sql(sum_column, filter)
{
	SQL := "SELECT SUM(" sum_column ") AS Total FROM `"" sql_table "`" WHERE " filter ";"
	Result := ""
	If !DB.GetTable(SQL, &Result)
	{
		   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
		   dump_sql(SQL)
	}
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
	LV := MyGui.Add("ListView", "r20 w700 Section", ["DATE CREATED","SCENARIO", "FY"])
	
	; Notify the script whenever the user double clicks a row:
	LV.OnEvent("DoubleClick", LV_DoubleClick)
	
	; Gather a list of file names from a folder and put them into the ListView:
	Loop Result.Rows.Length
	{
		local result_index := A_Index
		local LVc1 := Result.Rows[result_Index][1]
		local LVc2 := ""
		local LVc3 := ""

		SQL := "SELECT ALIAS, SCENARIO, FISCALYEAR FROM `"BUDGETS`" WHERE DATECREATED=`"" Result.Rows[result_index][1] "`";"
		Result_Alias := ""
		If !DB.GetTable(SQL, &Result_Alias)
			   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
		local i := 1
		loop Result_Alias.Rows.Length
		{
			LVc2 .= Result_Alias.Rows[A_Index][1] " (" Result_Alias.Rows[A_Index][2] ")"
			if i < Result_Alias.Rows.Length
			{
				LVc2 .= ", "
			}
			i++
		}
		LVc3 := Result_Alias.Rows[1][3] 

		LV.Add(,LVc1,LVc2,LVc3)
		
	}
	
	LV.ModifyCol  ; Auto-size each column to fit its contents.
	LV.ModifyCol(1, "Integer Left")  ; For sorting purposes, indicate that column 2 is an integer.
	LV.ModifyCol(1, 150)
	LV.ModifyCol(2, 450)
	LV.ModifyCol(3, 100)
	new_files_button := mygui.Add("Button","w90 Y+M X610","Import ABS Files")
	new_files_button.OnEvent("Click", select_new_files)
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
	
	operating_scenario_alias	:= Result.Rows[1][2] 
	
	operating_scenario_number 	:= Result.Rows[1][5] 
	operating_table 			:= fetch_id us operating_scenario_number us "1512"
	operating_scenario_name 	:= operating_scenario_alias " (" operating_scenario_number ")"

	capital_scenario_alias		:= Result.Rows[2][2] 

	capital_scenario_number 	:= Result.Rows[2][5] 
	capital_table 				:= fetch_id us capital_scenario_number us "272"
	capital_scenario_name 		:= capital_scenario_alias " (" capital_scenario_number ")"

	MyGui.Destroy
	start()
}
;=======================================================================|
select_new_files(dummy_1, dummy_2)
{
	global

	MyGui.Destroy

	new_files := MsgBox("Do you want to import new ABS Scenario Files into the database?", "Import New Scenario Files?", "YesNo")

	If (new_files = "Yes")
	{
		new_starting_directory := A_ScriptDir "\abs exports\"
		file_1512_path  := FileSelect( , new_starting_directory, "Please Select an Operating File, From ABS Export Component Detail (1512)",'*.txt')
		if (file_1512_path  = "")
			select_scenario()

		SplitPath(file_1512_path,,&new_starting_directory)
		file_272_path := FileSelect( , new_starting_directory, "From ABS Export Project Information (Appropriations with Allocations) (272)",'*.txt')       ;*[sankey_builder]
		if (file_272_path = "")
			select_scenario()	

		op_sceanrio := ""
		cap_scenario := ""

		FileReadLine(&op_scenario, file_1512_path, 2)
		op_scenario := StrSplit(op_scenario, tabs(1))
		op_scenario := op_scenario[11]
		op_scenario := StrSplit(op_scenario, "=")
		op_scenario := op_scenario[2]
		op_scenario := trim(RegExReplace(op_scenario, "\(\d+\)", ""))

		FileReadLine(&cap_scenario, file_272_path, 2)
		cap_scenario := StrSplit(cap_scenario,"`t")
		cap_scenario := Trim(cap_scenario[2])

		loop
		{
			op_budget_name				:= InputBox("Name This Operating Budget", "Name This Operating Budget",, op_scenario)
			if (op_budget_name.result = "Cancel")
				select_scenario()

			cap_budget_name				:= InputBox("Name This Capital Budget", "Name This Capital Budget",, cap_scenario)
			if (cap_budget_name.result = "Cancel")
				select_scenario()

			budget_fiscal_year		:= InputBox("Fiscal Year...", "Enter numbers only for fiscal year:")
			if (budget_fiscal_year.result = "Cancel")
				select_scenario()
			
			budget_name 			:= op_budget_name.value " / " cap_budget_name.value
			budget_fiscal_year		:= Trim(StrReplace(budget_fiscal_year.value, "fy", ""))

			msg_results 			:= "Correct? YES to continue, No to re-enter, CANCEL to quit." rn rn "Name: " budget_name rn "FY: " budget_fiscal_year

			confirm_loop := msgbox(msg_results,"Confirm:", 0x3)
			if (confirm_loop = "Cancel")
				ExitApp
			if (confirm_loop = "Yes")
				break
		}
		get_scenario_numbers()
		import_files_to_database()
	}

}
;=======================================================================|
dump_sql(the_sql:=SQL)
{
	A_Clipboard := the_sql
	MsgBox(the_sql)
}
;=======================================================================|
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
		{
   			MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
			dump_sql()
		}

		If (Result.HasRows) 
		{	
			Loop Result.Rows.Length
			{
				this_node_name			:= Result.Rows[A_Index][1]
				this_node_total 		:= ( format_mode = "dollars" ) AND ( current_column = "DEPT_NAME" || current_column = "RDU_NAME" || current_column = "COMP_NAME" ) ? ( sum_sql("SCEN1_AMOUNT", "LINE_TYPE='" ( this_plot_name = "plot-capital" ? "Capital" : "Revenue" ) "' AND " current_column "='" cln(this_node_name) "'") ) : ( Result.Rows[A_Index][2] )
				this_node_meta			:= ""
				this_node_project_link 	:= ""
				if (add_project_links = true && ( current_column = "RDU_NAME" || current_column = "COMP_NAME" ))
				{
					c := current_column
					SQL := "SELECT " (c="RDU_NAME"?"RDU":"COMP") "_NUM FROM `"" sql_table "`" WHERE " sql_filter " AND " current_column "=`"" this_node_name "`" LIMIT 1;"
					Result_RefNum := ""
					If !DB.GetTable(SQL, &Result_RefNum)
						   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
					
					this_node_project_link := Result_RefNum.Rows[1][1]
				}

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
;=======================================================================|
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
				;.link_label
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
					;this_identifier_text := "https://omb.alaska.gov/ombfiles/" sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_project_link
					;this_identifier_text := "javascript:alert(\'OMB project file not available at this time.\')"
					local col_index_1 := sankey_object_column_number(target_column)
					local row_index_1 := NodeRowNumber(Result.Rows[A_Index][1], sankey_object.nodes.columns[col_index_1].rows)
					this_identifier_text := "@@@OMBSOURCE@@@/" sankey_object.nodes.columns[col_index_1].rows[row_index_1].node_project_link ".pdf"
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
		; source node links get handled by javascript later on.
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
						;this_identifier_text := "https://www.legfin.akleg.gov/ReportsPHP/SelectReport.php?&ReportAbbrev=FUNDSOURCE&LimitFundCodes=" this_fund_code
						this_identifier_text := "@@@LEGFINSOURCE@@@/" this_fund_code ".pdf"
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
;=======================================================================|
build_department_sankey(department_abs, department_readable, department_folder)
{
	global 
	parent_levels 		:= 1
	this_plot_name 		:= "plot"
	format_mode			:= "dollars"
	the_department_name := department_readable
	abs_department_name := department_abs
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND LINE_TYPE='Expenditure'"
	plot_total			:= format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_plot_title 	:= the_department_name " (Fund > Results Delivery Unit > Component)" ; DEFAULT
	this_title 			:= this_scenario_name " <br /> " this_plot_title " (" plot_total ")"
	this_width 			:= "1200"
	this_height			:= "1150"
	this_small_height 	:= "800"
	this_xl_height 		:= "2000"
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
;=======================================================================|
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
	this_xl_height 		:= "1600"
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
;=======================================================================|
build_component_sankey(sub_component_name, sub_folder)
{
	global
	parent_levels 		:= 3
	sum_filter			:= "DEPT_NAME='" abs_department_name "' AND RDU_NAME='" cln(abs_rdu_name) "' AND COMP_NAME='" cln(sub_component_name) "' AND LINE_TYPE='Expenditure'"
	plot_total			:= 	format_to_readable(sum_sql("SCEN1_AMOUNT", sum_filter))
	this_width 			:= "1000"
	this_height 		:= "400"
	this_small_height 	:= "400"
	this_xl_height 		:= "800"
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
;=======================================================================|
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
	this_xl_height 		:= "800"
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
;=======================================================================|
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
	this_xl_height 		:= "1000"
	
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
;=======================================================================|
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
	this_xl_height 		:= "1000"
	this_output_file 	:= build_directory "\" sub_folder "\" this_plot_name ".html"
	back_link			:= "../"  this_plot_name ".html"
	
	sql_filter := sum_filter
	build_nodes_from_columns("COMP_NAME", "REPORT_LINE")
	build_links( "REPORT_LINE", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "REPORT_LINE", 1, false, true)
	
	build_json(), build_javascript(), build_html()
	
	third_level_nodes := sankey_object_column_rows("COMP_NAME")
	
	for key, this_node in third_level_nodes
	{	
		build_pcn_component_sankey(this_node.node_name, sub_folder "\" this_node.node_id)
	}
	
}
;=======================================================================|
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
	this_xl_height 		:= "1000"
	this_output_file 	:= build_directory "\" sub_folder "\" this_plot_name ".html"
	
	sql_filter := sum_filter
	build_nodes_from_columns("COMP_NAME", "REPORT_LINE")
	build_links( "REPORT_LINE", "COMP_NAME", "REPORT_LINE", "SCEN1_AMOUNT", "REPORT_LINE", 1, false, true )
	if !DirExist(build_directory "\" sub_folder)
		DirCreate(build_directory "\" sub_folder)
	build_json(), build_javascript(), build_html()
}
;=======================================================================|
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
;=======================================================================|
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
		else if InStr(linkable_node.link_identifier_text, "@@@OMBSOURCE@@@")
			javascript_links .= tabs(5) . "window.open('" linkable_node.link_identifier_text "'); `r`n"
		else if InStr(linkable_node.link_identifier_text, "@@@LEGFINSOURCE@@@")
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
;=======================================================================|
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
	html_file := StrReplace(html_file, "@@@XLHEIGHT@@@"  	, this_xl_height     	                )
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

	; these three are order dependent, do not rearrange
	html_file := StrReplace(html_file, "@@@NODEJSLINK@@@"   , javascript_links						)
	html_file := StrReplace(html_file, "@@@LEGFINSOURCE@@@"	, parent_levels_string . "legfin_files"	)
	html_file := StrReplace(html_file, "@@@OMBSOURCE@@@"	, parent_levels_string . "omb_files"	)

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

sankey_object_column_number(column_name)
{
    global sankey_object
    for index, value in sankey_object.nodes.columns
	{
		if (value.column_name = column_name)
			return index
	}
}

sankey_object_node_id(column_name, node_name)
{
    global sankey_object
    for index, value in sankey_object.nodes.columns[sankey_object_column_number(column_name)].rows
    {
        if (value.node_name = node_name)
            return value.node_id
    }
    MsgBox('sankey_object_node_id: unable to provide a node id for "' node_name '" in "' column_name '"')
	FileAppend(ObjectToString(sankey_object, "`t"), "Error_" a_now ".txt",)
}
sankey_object_column_rows(column_name)
{
    global sankey_object
    for index, value in sankey_object.nodes.columns
	{
		if (value.column_name = column_name)
			return value.rows
	}
}
translate_fund_to_operating(cap_fund_search)
{
	cap_fund_search := SubStr(cap_fund_search, 1, 4)
    global fund_translate
	if cap_fund_search = ""
		msgbox(A_ThisFunc 'search param cannot be blank')
    for index, value in fund_translate
	{
		if (value.capital = cap_fund_search)
			return value.operating
	}
	msgbox(A_ThisFunc ': could not translate fund, "' cap_fund_search '".')
	return cap_fund_search
}
HasNodeId(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value = needle)
			return true
	return false
}
HasVal(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value = needle)
			return true
	return false
}
HasHyperLinkVal(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.id = needle)
			return true
	return false
}
NodeRowNumber(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.node_name = needle)
			return index
	return false
}
NodeID(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.node_name = needle)
			return value.node_id
	return false
}
LinkColor(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.link_label = needle)
			return value.link_color
	msgbox(A_ThisFunc ': no needle found: "' needle '"')
	return "rgba(0,0,96,0.2)"
}
NodeColor(needle, haystack) {
	global abs_department_name, this_plot_name
	
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	
	if (instr(this_plot_name, "overview"))
	{
		for index, value in haystack
		{
			if (value.node_label = needle)
				return value.node_color
		}
	}
	
	for index, value in haystack
	{
		if (HasProp(value, "node_department"))
        {
            if (value.node_label = needle AND value.node_department = abs_department_name)
			    return value.node_color
        }
	}
		
	for index, value in haystack
	{
		if (value.node_label = needle)
			return value.node_color
	}
		
	if (instr(this_plot_name, "capital"))
		return "rgb(160,0,0)"
	
	if needle != ""
		msgbox(A_ThisFunc ': no needle found: "' needle '"')
	
	return "rgb(120,120,120)"
}
;=======================================================================|
InitializeDepartments()
{
	;This is the order they will appear in the index.
	global
	department_list := []
	department_list.push({abs_name: "Governor"						, readable_name:  "Office of the Governor"                                      })
	department_list.push({abs_name: "Administration"				, readable_name:  "Department of Administration"                                })
	department_list.push({abs_name: "Law"							, readable_name:  "Department of Law"                                           })
	department_list.push({abs_name: "Revenue"						, readable_name:  "Department of Revenue"                                       })
	department_list.push({abs_name: "Educ & Early Devel"			, readable_name:  "Department of Education & Early Development"  				})
	department_list.push({abs_name: "Health & Social Services"		, readable_name:  "Department of Health & Social Services"                      })
	department_list.push({abs_name: "Health"          				, readable_name:  "Department of Health"										})
	department_list.push({abs_name: "Family & Community Services"  	, readable_name:  "Department of Family & Community Services"					})
	department_list.push({abs_name: "Labor & Workforce"				, readable_name:  "Department of Labor & Workforce Development"                 })
	department_list.push({abs_name: "Commerce"						, readable_name:  "Department of Commerce, Community, and Economic Development" })
	department_list.push({abs_name: "Military & Veterans Affairs"	, readable_name:  "Department of Military & Veterans Affairs"                   })
	department_list.push({abs_name: "Natural Resources"				, readable_name:  "Department of Natural Resources"                             })
	department_list.push({abs_name: "Fish & Game"					, readable_name:  "Department of Fish & Game"                                   })
	department_list.push({abs_name: "Public Safety"					, readable_name:  "Department of Public Safety"                                 })
	department_list.push({abs_name: "Environ Conservation"			, readable_name:  "Department of Environmental Conservation"                    })
	department_list.push({abs_name: "Corrections"					, readable_name:  "Department of Corrections"                                   })
	department_list.push({abs_name: "Transportation"				, readable_name:  "Department of Transportation & Public Facilities"            })
	department_list.push({abs_name: "Branch-wide Appropriations"	, readable_name:  "Branch-wide Appropriations"           						})
	department_list.push({abs_name: "Legislature"					, readable_name:  "Legislature"                                                 })
	department_list.push({abs_name: "Debt Service"					, readable_name:  "Debt Service"                                                })
	department_list.push({abs_name: "Judiciary"						, readable_name:  "Judiciary"                                                   })
	department_list.push({abs_name: "University of Alaska"			, readable_name:  "University of Alaska"                                        })
	department_list.push({abs_name: "Fund Capitalization"			, readable_name:  "Fund Capitalization"                                         })
	department_list.push({abs_name: "State Retirement Payments"		, readable_name:  "State Retirement Payments"                                   })
	department_list.push({abs_name: "Special Appropriations"		, readable_name:  "Special Appropriations"                                      })
	department_list.push({abs_name: "Fund Transfers"				, readable_name:  "Fund Transfers"                                              })
	department_list.push({abs_name: "Permanent Fund"				, readable_name:  "Permanent Fund Dividend"                                     })
	
	; Capital cleanup converts those names to these abs_names.... above
	
	for key, department_list_object in department_list
	{
		department_list_object.folder_name := StrReplace( StrReplace( Format( "{:L}", department_list_object.abs_name ), A_Space, "-"), "&", "and" )
	}
}
InitializeColors()
{
	; sankey_function_initialize_colors.ahk
	; https://stackoverflow.com/questions/9563711/r-color-palettes-for-many-data-classes
	global
	; Choose a palette
	palette_number := 2


	color_palettes := []

	; 1.) pals - alphabet
	color_palettes.Push([])
	color_palettes[1].push("rgb(240, 163, 255)")
	color_palettes[1].push("rgb(0, 117, 220)")
	color_palettes[1].push("rgb(153, 63, 0)")
	color_palettes[1].push("rgb(76, 0, 92)")
	; color_palettes[1].push("rgb(25, 25, 25)")
	color_palettes[1].push("rgb(0, 92, 49)")
	color_palettes[1].push("rgb(43, 206, 72)")
	color_palettes[1].push("rgb(255, 204, 153)")
	color_palettes[1].push("rgb(128, 128, 128)")
	color_palettes[1].push("rgb(148, 255, 181)")
	color_palettes[1].push("rgb(143, 124, 0)")
	color_palettes[1].push("rgb(157, 204, 0)")
	color_palettes[1].push("rgb(194, 0, 136)")
	color_palettes[1].push("rgb(0, 51, 128)")
	color_palettes[1].push("rgb(255, 164, 5)")
	color_palettes[1].push("rgb(255, 168, 187)")
	color_palettes[1].push("rgb(66, 102, 0)")
	color_palettes[1].push("rgb(255, 0, 16)")
	color_palettes[1].push("rgb(94, 241, 242)")
	color_palettes[1].push("rgb(0, 153, 143)")
	color_palettes[1].push("rgb(224, 255, 102)")
	color_palettes[1].push("rgb(116, 10, 255)")
	color_palettes[1].push("rgb(153, 0, 0)")
	color_palettes[1].push("rgb(255, 255, 128)")
	color_palettes[1].push("rgb(255, 255, 0)")
	color_palettes[1].push("rgb(255, 80, 5)") 

	; 2.) pals - glasbey
	color_palettes.Push([])
	color_palettes[2].push("rgb(73,0,146")
	color_palettes[2].push("rgb(0,128,255")
	color_palettes[2].push("rgb(255,0,0")
	; color_palettes[2].push("rgb(255,128,0")
	color_palettes[2].push("rgb(0,255,0")
	color_palettes[2].push("rgb(0,73,146")
	color_palettes[2].push("rgb(182,73,0")
	color_palettes[2].push("rgb(255,255,0")
	color_palettes[2].push("rgb(146,0,255")
	color_palettes[2].push("rgb(0,182,182")
	color_palettes[2].push("rgb(255,73,182")
	color_palettes[2].push("rgb(146,73,0")
	color_palettes[2].push("rgb(73,182,255")
	color_palettes[2].push("rgb(182,0,73")
	color_palettes[2].push("rgb(182,146,255")
	color_palettes[2].push("rgb(255,182,73")
	color_palettes[2].push("rgb(182,182,182")
	; color_palettes[2].push("rgb(255,146,182")
	color_palettes[2].push("rgb(73,255,146")
	color_palettes[2].push("rgb(146,182,73")
	color_palettes[2].push("rgb(255,182,255")
	color_palettes[2].push("rgb(146,146,73")
	color_palettes[2].push("rgb(73,182,146")
	color_palettes[2].push("rgb(0,255,182")
	color_palettes[2].push("rgb(255,255,146")
	color_palettes[2].push("rgb(255,73,73")
	color_palettes[2].push("rgb(73,73,255")
	color_palettes[2].push("rgb(182,255,255")
	color_palettes[2].push("rgb(182,182,0")
	color_palettes[2].push("rgb(0,255,73")
	color_palettes[2].push("rgb(146,146,255")
	/*
		department_column	:= 4	; e.g. Transportation
		rdu_column 			:= 7 	; e.g. Marine Highway System
		component_column	:= 10	; e.g. Vessel Operations
		fund_column 		:= 11	; e.g. 1004 GF
		line_column			:= 12	; e.g. Expenditure/Reveneu
		group_column		:= 14	; e.g. UGF/DFG/FED/OTHER
		value_column		:= 16	; e.g. (value)
	*/
	
	; =CONCATENATE( "node_color_list[i].push({node_label: """, A2, """, node_color: ""rgb(120,120,120)""  	}) ;" )
	; =CONCATENATE( "node_color_list[i].push({node_label: """, A2, """, node_color: ""rgb(", RANDBETWEEN(-1,256), ",", RANDBETWEEN(-1,256), ",", RANDBETWEEN(-1,256), ")""  	}) ; )" )
	; =CONCATENATE( "link_color_list[i].push({node_label: """, A2, """, node_color: ""rgba(0,0,96,0.2)""  	}) ;" )
	
	;NODE COLORS
	node_color_list := []
	
	i := 1

	node_color_list.Push([])
	
	; SAME FOR ALL 
	node_color_list[i].push({node_label: "Expenditure"					, node_color: "rgb(120,120,120)"  	}) ;
	node_color_list[i].push({node_label: "Permanent Part-Time"			, node_color: "rgb(120,120,120)"  	}) ;
	node_color_list[i].push({node_label: "Permanent Full-Time"			, node_color: "rgb(120,120,120)"  	}) ;
	node_color_list[i].push({node_label: "Non-Permanent"				, node_color: "rgb(120,120,120)"  	}) ;
	node_color_list[i].push({node_label: "Personal Services"			, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Travel"						, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Contractual Services"			, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Commodities"					, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Capital Outlay"				, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Line 7600"					, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Grants, Benefits"				, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Miscellaneous"				, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Expenditure"					, node_color: "rgb(120,120,120)"    }) ;
	node_color_list[i].push({node_label: "Position Count"				, node_color: "rgb(120,120,120)"    }) ;
	
	; OMB COLORS FROM FY22 BUDGET PRESENTATIONS
	node_color_list[i].push({node_label: "Designated General Funds"		, node_color: "rgb(255,192,0)"    		}) ;
	node_color_list[i].push({node_label: "Federal Funds"				, node_color: "rgb(63,120,167)"    		}) ;
	node_color_list[i].push({node_label: "Other Funds"					, node_color: "rgb(165,165,165)"    	}) ;
	node_color_list[i].push({node_label: "Unrestricted General Funds"	, node_color: "rgb(0,32,96)"    		}) ;

	; DOM'S PREFERRED COLORS -DEPRECATED
	;node_color_list[i].push({node_label: "Designated General Funds"		, node_color: "rgb(243,240,114)"    	}) ;
	;node_color_list[i].push({node_label: "Federal Funds"					, node_color: "rgb(34,144,216)"    		}) ;
	;node_color_list[i].push({node_label: "Other Funds"						, node_color: "rgb(149,79,255)"    		}) ;
	;node_color_list[i].push({node_label: "Unrestricted General Funds"		, node_color: "rgb(231,0,0)"    		}) ;
	
	; OMB COLORS FROM FY21 BUDGET PRESENTATIONS
	;node_color_list[i].push({node_label: "Designated General Funds"		, node_color: "rgb(237,125,49)"    		}) ;
	;node_color_list[i].push({node_label: "Federal Funds"					, node_color: "rgb(255,192,0)"    		}) ;
	;node_color_list[i].push({node_label: "Other Funds"						, node_color: "rgb(166,166,166)"    	}) ;
	;node_color_list[i].push({node_label: "Unrestricted General Funds"		, node_color: "rgb(68,114,196)"    		}) ;
	
	

	SQL := "SELECT DISTINCT `"DEPT_NAME`" FROM `"" sql_table "`";"
	
	Dept_Result := ""
	If !DB.GetTable(SQL, &Dept_Result)
	{
   		MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
		dump_sql()
	}

	If (Dept_Result.HasRows) 
	{	
		Loop Dept_Result.Rows.Length
		{
			node_color_list[i].push({node_label: Dept_Result.Rows[A_Index][1], node_color: "rgb(0,128,128)"})
		}
		Loop Dept_Result.Rows.Length
		{
			dept_index := A_Index
			SQL := "SELECT DISTINCT `"RDU_NAME`" FROM `"" sql_table "`" WHERE DEPT_NAME=`"" Dept_Result.Rows[A_Index][1] "`";"
	
			RDU_Result := ""
			If !DB.GetTable(SQL, &RDU_Result)
			{
				MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
				dump_sql()
			}
			If (RDU_Result.HasRows) 
			{	
				j := 1
				Loop RDU_Result.Rows.Length
				{
					rdu_index := A_Index
					node_color_list[i].push({node_department: Dept_Result.Rows[dept_index][1], node_label: RDU_Result.Rows[rdu_index][1], node_color: color_palettes[palette_number][j] }) 
					
					;COMP QUERY
					SQL := "SELECT DISTINCT `"COMP_NAME`" FROM `"" sql_table "`" WHERE RDU_NAME=`"" RDU_Result.Rows[rdu_index][1] "`";"
	
					Comp_Result := ""
					If !DB.GetTable(SQL, &Comp_Result)
					{
						MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
						dump_sql()
					}
					Loop Comp_Result.Rows.Length
					{
						node_color_list[i].push({node_department: Dept_Result.Rows[dept_index][1], node_label: Comp_Result.Rows[A_Index][1], node_color: color_palettes[palette_number][j] }) 
					}
					j++
				}
			}
		}
	}
	; LINK COLORS
	link_color_list := []
	
	i := 1
	link_color_list.Push([])
	
	; SAME FOR ALL
	link_color_list[i].push({link_label: "Expenditure"					, link_color: "rgba(160,0,0,0.2)"  			}) ;

	link_color_list[i].push({link_label: "Permanent Part-Time"			, link_color: "rgba(0,0,96,0.2)"  			}) ;
	link_color_list[i].push({link_label: "Permanent Full-Time"			, link_color: "rgba(0,0,96,0.2)"  			}) ;
	link_color_list[i].push({link_label: "Non-Permanent"				, link_color: "rgba(0,0,96,0.2)"  			}) ;
	
	; OMB Colors 21 Holland
	;link_color_list[i].push({link_label: "Designated General Funds"	, link_color: "rgba(237,125,49,0.2)"    	}) ;
	;link_color_list[i].push({link_label: "Federal Funds"				, link_color: "rgba(255,192,0,0.2)"    		}) ;
	;link_color_list[i].push({link_label: "Other Funds"					, link_color: "rgba(166,166,166,0.2)"    	}) ;
	;link_color_list[i].push({link_label: "Unrestricted General Funds"	, link_color: "rgba(68,114,196,0.2)"    	}) ;
	
	; OMB Colors 22 Steinenger
	;link_color_list[i].push({link_label: "Designated General Funds"	, link_color: "rgba(255,192,0,0.2)"    		}) ;
	link_color_list[i].push({link_label: "Designated General Funds"		, link_color: "rgba(255,147,0,0.2)"    		}) ;
	link_color_list[i].push({link_label: "Federal Funds"				, link_color: "rgba(63,120,167,0.2)"    	}) ;
	;link_color_list[i].push({link_label: "Other Funds"					, link_color: "rgba(165,165,165,0.2)"    	}) ;
	link_color_list[i].push({link_label: "Other Funds"					, link_color: "rgba(100,100,100,0.2)"    	}) ;
	link_color_list[i].push({link_label: "Unrestricted General Funds"	, link_color: "rgba(0,32,96,0.2)"    		}) ;
	
}
;=======================================================================|
initialize_fund_translation()
{
	; ideally funds are all recuced to codes in the data bast and labels are inferred seperately, for future...
	global
	fund_translate := []

	; omb cleanup 2024.06.18, this must be first. This is from excel file in /resources/omb fund codes/
	fund_translate.push({capital:"1000", operating: "1000 Restricted General Fund"})
	fund_translate.push({capital:"1001", operating: "1001 Constitutional Budget Reserve Fund"})
	fund_translate.push({capital:"1002", operating: "1002 Federal Receipts"})
	fund_translate.push({capital:"1003", operating: "1003 General Fund Match"})
	fund_translate.push({capital:"1004", operating: "1004 Unrestricted General Fund Receipts"})
	fund_translate.push({capital:"1005", operating: "1005 General Fund/Program Receipts"})
	fund_translate.push({capital:"1006", operating: "1006 General Fund/Mental Health Trust"})
	fund_translate.push({capital:"1007", operating: "1007 Interagency Receipts"})
	fund_translate.push({capital:"1008", operating: "1008 General Obligation Bonds"})
	fund_translate.push({capital:"1009", operating: "1009 Revenue Bonds"})
	fund_translate.push({capital:"1010", operating: "1010 University of Alaska Interest Income"})
	fund_translate.push({capital:"1011", operating: "1011 Alaska Advance College Tuition Payment Fund"})
	fund_translate.push({capital:"1012", operating: "1012 Railbelt Energy Fund"})
	fund_translate.push({capital:"1013", operating: "1013 Alcoholism and Drug Abuse Revolving Loan Fund"})
	fund_translate.push({capital:"1014", operating: "1014 Donated Commodity/Handling Fee Account"})
	fund_translate.push({capital:"1015", operating: "1015 U/A Dormitory/Food/Auxiliary Service"})
	fund_translate.push({capital:"1016", operating: "1016 CSSD Federal Incentive Payments"})
	fund_translate.push({capital:"1017", operating: "1017 Group Health and Life Benefits Fund"})
	fund_translate.push({capital:"1018", operating: "1018 Exxon Valdez Oil Spill Trust--Civil"})
	fund_translate.push({capital:"1019", operating: "1019 Reforestation Fund"})
	fund_translate.push({capital:"1020", operating: "1020 Grain Reserve Loan Fund"})
	fund_translate.push({capital:"1021", operating: "1021 Agricultural Revolving Loan Fund"})
	fund_translate.push({capital:"1022", operating: "1022 State Corporation Receipts"})
	fund_translate.push({capital:"1023", operating: "1023 FICA Administration Fund Account"})
	fund_translate.push({capital:"1024", operating: "1024 Fish and Game Fund"})
	fund_translate.push({capital:"1025", operating: "1025 Science & Technology Endowment Income"})
	fund_translate.push({capital:"1026", operating: "1026 Highways Equipment Working Capital Fund"})
	fund_translate.push({capital:"1027", operating: "1027 International Airports Revenue Fund"})
	fund_translate.push({capital:"1028", operating: "1028 Pre-FY90 Program Receipts"})
	fund_translate.push({capital:"1029", operating: "1029 Public Employees Retirement Trust Fund"})
	fund_translate.push({capital:"1030", operating: "1030 School Fund"})
	fund_translate.push({capital:"1031", operating: "1031 Second Injury Fund Reserve Account"})
	fund_translate.push({capital:"1032", operating: "1032 Fishermen's Fund"})
	fund_translate.push({capital:"1033", operating: "1033 Surplus Federal Property Revolving Fund"})
	fund_translate.push({capital:"1034", operating: "1034 Teachers Retirement Trust Fund"})
	fund_translate.push({capital:"1035", operating: "1035 Veterans Revolving Loan Fund"})
	fund_translate.push({capital:"1036", operating: "1036 Commercial Fishing Loan Fund"})
	fund_translate.push({capital:"1037", operating: "1037 General Fund / Mental Health"})
	fund_translate.push({capital:"1038", operating: "1038 U/A Student Tuition/Fees/Services"})
	fund_translate.push({capital:"1039", operating: "1039 Unallocated Indirect Cost Recovery"})
	fund_translate.push({capital:"1040", operating: "1040 Real Estate Recovery Fund"})
	fund_translate.push({capital:"1041", operating: "1041 Permanent Fund Earnings Reserve Account"})
	fund_translate.push({capital:"1042", operating: "1042 Judicial Retirement System"})
	fund_translate.push({capital:"1043", operating: "1043 Federal Impact Aid for K-12 Schools"})
	fund_translate.push({capital:"1044", operating: "1044 Alaska Debt Retirement Fund"})
	fund_translate.push({capital:"1045", operating: "1045 National Guard & Naval Militia Retirement System"})
	fund_translate.push({capital:"1046", operating: "1046 Student Revolving Loan Fund"})
	fund_translate.push({capital:"1047", operating: "1047 Title XX"})
	fund_translate.push({capital:"1048", operating: "1048 University of Alaska Restricted Receipts"})
	fund_translate.push({capital:"1049", operating: "1049 Training and Building Fund"})
	fund_translate.push({capital:"1050", operating: "1050 Permanent Fund Dividend Fund"})
	fund_translate.push({capital:"1051", operating: "1051 Rural Economic Development Initiative Fund"})
	fund_translate.push({capital:"1052", operating: "1052 Oil/Hazardous Release Prevention & Response Fund"})
	fund_translate.push({capital:"1053", operating: "1053 Investment Loss Trust Fund"})
	fund_translate.push({capital:"1054", operating: "1054 Employment Assistance and Training Program Account"})
	fund_translate.push({capital:"1055", operating: "1055 Interagency/Oil & Hazardous Waste"})
	fund_translate.push({capital:"1056", operating: "1056 Electrical Service Extension Fund"})
	fund_translate.push({capital:"1057", operating: "1057 Small Business Loan Fund"})
	fund_translate.push({capital:"1058", operating: "1058 Tourism Revolving Loan Fund"})
	fund_translate.push({capital:"1059", operating: "1059 Correctional Industries Fund"})
	fund_translate.push({capital:"1060", operating: "1060 Other Funds (Pre-FY '84 Only)"})
	fund_translate.push({capital:"1061", operating: "1061 Capital Improvement Project Receipts"})
	fund_translate.push({capital:"1062", operating: "1062 Power Project Loan Fund"})
	fund_translate.push({capital:"1063", operating: "1063 National Petroleum Reserve-Alaska Special Revenue Fund"})
	fund_translate.push({capital:"1064", operating: "1064 Housing Assistance Loan Fund"})
	fund_translate.push({capital:"1065", operating: "1065 Rural Electrification Revolving Loan Fund"})
	fund_translate.push({capital:"1066", operating: "1066 Public School Trust Fund"})
	fund_translate.push({capital:"1067", operating: "1067 Mining Revolving Loan Fund"})
	fund_translate.push({capital:"1068", operating: "1068 Child Care Revolving Loan Fund"})
	fund_translate.push({capital:"1069", operating: "1069 Historical District Revolving Loan Fund"})
	fund_translate.push({capital:"1070", operating: "1070 Fisheries Enhancement Revolving Loan Fund"})
	fund_translate.push({capital:"1071", operating: "1071 Alternative Energy Revolving Loan Fund"})
	fund_translate.push({capital:"1072", operating: "1072 Residential Energy Conservation Loan Fund"})
	fund_translate.push({capital:"1073", operating: "1073 Power Development Revolving Loan Fund"})
	fund_translate.push({capital:"1074", operating: "1074 Bulk Fuel Revolving Loan Fund"})
	fund_translate.push({capital:"1075", operating: "1075 Alaska Clean Water Fund"})
	fund_translate.push({capital:"1076", operating: "1076 Alaska Marine Highway System Fund"})
	fund_translate.push({capital:"1077", operating: "1077 Gifts/Grants/Bequests"})
	fund_translate.push({capital:"1078", operating: "1078 Senior Housing Loan Fund"})
	fund_translate.push({capital:"1079", operating: "1079 Underground Storage Tank Revolving Loan Fund"})
	fund_translate.push({capital:"1080", operating: "1080 School Construction Fund"})
	fund_translate.push({capital:"1081", operating: "1081 Information Services Fund"})
	fund_translate.push({capital:"1082", operating: "1082 AMHS Vessel Replacement Fund"})
	fund_translate.push({capital:"1083", operating: "1083 Education Facilities Maint & Construction"})
	fund_translate.push({capital:"1084", operating: "1084 Alyeska Settlement Fund"})
	fund_translate.push({capital:"1085", operating: "1085 Railbelt Intertie Reserve Fund"})
	fund_translate.push({capital:"1086", operating: "1086 Southeast Energy Fund"})
	fund_translate.push({capital:"1087", operating: "1087 Municipal Matching Grant Fund"})
	fund_translate.push({capital:"1088", operating: "1088 Unincorporated Matching Grant Fund"})
	fund_translate.push({capital:"1089", operating: "1089 Power Cost Equalization Fund"})
	fund_translate.push({capital:"1090", operating: "1090 Four Dam Pool Transfer Fund"})
	fund_translate.push({capital:"1091", operating: "1091 General Funds - Designated"})
	fund_translate.push({capital:"1092", operating: "1092 Mental Health Trust Authority Authorized Receipts"})
	fund_translate.push({capital:"1093", operating: "1093 Clean Air Protection Fund"})
	fund_translate.push({capital:"1094", operating: "1094 Mental Health Trust Administration"})
	fund_translate.push({capital:"1095", operating: "1095 Medical Facilities Authority Fund"})
	fund_translate.push({capital:"1096", operating: "1096 Investment Loss Trust Fund (DO NOT USE)"})
	fund_translate.push({capital:"1097", operating: "1097 Group Health and Life Benefits Fund (AS 39.30.095)"})
	fund_translate.push({capital:"1098", operating: "1098 Children's Trust Earnings"})
	fund_translate.push({capital:"1099", operating: "1099 Children's Trust Principal"})
	fund_translate.push({capital:"1100", operating: "1100 Alaska Drinking Water Fund"})
	fund_translate.push({capital:"1101", operating: "1101 Alaska Aerospace Corporation Fund"})
	fund_translate.push({capital:"1102", operating: "1102 Alaska Industrial Development & Export Authority Receipts"})
	fund_translate.push({capital:"1103", operating: "1103 Alaska Housing Finance Corporation Receipts"})
	fund_translate.push({capital:"1104", operating: "1104 Alaska Municipal Bond Bank Receipts"})
	fund_translate.push({capital:"1105", operating: "1105 Permanent Fund Corporation Gross Receipts"})
	fund_translate.push({capital:"1106", operating: "1106 Alaska Student Loan Corporation Receipts"})
	fund_translate.push({capital:"1107", operating: "1107 Alaska Energy Authority Corporate Receipts"})
	fund_translate.push({capital:"1108", operating: "1108 Statutory Designated Program Receipts"})
	fund_translate.push({capital:"1109", operating: "1109 Test Fisheries Receipts"})
	fund_translate.push({capital:"1110", operating: "1110 Alaska Public Utility Commission"})
	fund_translate.push({capital:"1111", operating: "1111 Fishermans Fund Income"})
	fund_translate.push({capital:"1112", operating: "1112 International Airports Construction Fund"})
	fund_translate.push({capital:"1113", operating: "1113 Alaska Housing Finance Corporation Statewide Bonds"})
	fund_translate.push({capital:"1114", operating: "1114 Exxon Valdez Oil Spill Restoration Fund"})
	fund_translate.push({capital:"1115", operating: "1115 International Trade and Business Endowment Income"})
	fund_translate.push({capital:"1116", operating: "1116 Disaster Relief Fund"})
	fund_translate.push({capital:"1117", operating: "1117 Randolph Sheppard Small Business Fund"})
	fund_translate.push({capital:"1118", operating: "1118 Pioneers' Homes Receipts"})
	fund_translate.push({capital:"1119", operating: "1119 Tobacco Settlement"})
	fund_translate.push({capital:"1120", operating: "1120 Motor Fuel Tax Increase"})
	fund_translate.push({capital:"1121", operating: "1121 Multiple Funds pre FY94"})
	fund_translate.push({capital:"1122", operating: "1122 License/Permits/Certification Pre 89"})
	fund_translate.push({capital:"1123", operating: "1123 Care and Treatment - FY88"})
	fund_translate.push({capital:"1124", operating: "1124 Resource Assessment Receipts - FY88"})
	fund_translate.push({capital:"1125", operating: "1125 APA Plant Maintenance & Operation - FY88"})
	fund_translate.push({capital:"1126", operating: "1126 Contract Services Reimbursement - FY88"})
	fund_translate.push({capital:"1127", operating: "1127 User Fees - FY88"})
	fund_translate.push({capital:"1128", operating: "1128 Child Support Enforcement - FY88"})
	fund_translate.push({capital:"1129", operating: "1129 Legal Settlement Receipts - FY88"})
	fund_translate.push({capital:"1130", operating: "1130 Handicapped Vendor Facility Fund - FY88"})
	fund_translate.push({capital:"1131", operating: "1131 Alaska Railroad Revenue Fund - FY85, FY86, FY87"})
	fund_translate.push({capital:"1132", operating: "1132 Publications and Other Services - FY88"})
	fund_translate.push({capital:"1133", operating: "1133 CSSD Administrative Cost Reimbursement"})
	fund_translate.push({capital:"1134", operating: "1134 Fish and Game Criminal Fines and Penalties"})
	fund_translate.push({capital:"1135", operating: "1135 Marine Highway Duplicated Expenditures"})
	fund_translate.push({capital:"1136", operating: "1136 Inactive-SBS Inter Agency Receipts"})
	fund_translate.push({capital:"1137", operating: "1137 Inactive-Deferred Compensation Inter Agency Receipts"})
	fund_translate.push({capital:"1138", operating: "1138 Inactive-Health Inter-Agency Receipts"})
	fund_translate.push({capital:"1139", operating: "1139 Alaska Housing Finance Corporation Dividend"})
	fund_translate.push({capital:"1140", operating: "1140 Alaska Industrial Development and Export Authority Dividend"})
	fund_translate.push({capital:"1141", operating: "1141 Regulatory Commission of Alaska Receipts"})
	fund_translate.push({capital:"1142", operating: "1142 Retiree Health Ins Fund/Major Medical"})
	fund_translate.push({capital:"1143", operating: "1143 Retiree Health Ins Fund/Long-Term Care Fund"})
	fund_translate.push({capital:"1144", operating: "1144 Clean Water Fund Bond Receipts"})
	fund_translate.push({capital:"1145", operating: "1145 Art in Public Places Fund"})
	fund_translate.push({capital:"1146", operating: "1146 Inactive-Fee Supported Increase"})
	fund_translate.push({capital:"1147", operating: "1147 Public Building Fund"})
	fund_translate.push({capital:"1148", operating: "1148 Accelerated Alaska Transportation Projects Fund"})
	fund_translate.push({capital:"1149", operating: "1149 Trans-Alaska Pipeline Liability Fund"})
	fund_translate.push({capital:"1150", operating: "1150 Alaska Student Loan Corporatin Dividend"})
	fund_translate.push({capital:"1151", operating: "1151 Technical Vocational Education Program Account"})
	fund_translate.push({capital:"1152", operating: "1152 AK Fire Standards Council Receipts"})
	fund_translate.push({capital:"1153", operating: "1153 State Land Disposal Income Fund"})
	fund_translate.push({capital:"1154", operating: "1154 Shore Fisheries Development Lease Program"})
	fund_translate.push({capital:"1155", operating: "1155 Timber Sale Receipts"})
	fund_translate.push({capital:"1156", operating: "1156 Receipt Supported Services"})
	fund_translate.push({capital:"1157", operating: "1157 Workers Safety and Compensation Administration Account"})
	fund_translate.push({capital:"1158", operating: "1158 Inactive Don't Use Employee Pay"})
	fund_translate.push({capital:"1159", operating: "1159 Drinking Water Fund Bond Receipts"})
	fund_translate.push({capital:"1160", operating: "1160 Marine/Coastal Protection-Inactive"})
	fund_translate.push({capital:"1161", operating: "1161 Renewable Resources Development Fund-Inactive"})
	fund_translate.push({capital:"1162", operating: "1162 Alaska Oil & Gas Conservation Commission Receipts"})
	fund_translate.push({capital:"1163", operating: "1163 Certificates of Participation"})
	fund_translate.push({capital:"1164", operating: "1164 Rural Development Initiative Fund"})
	fund_translate.push({capital:"1165", operating: "1165 CBR/Mental Health"})
	fund_translate.push({capital:"1166", operating: "1166 Commercial Passenger Vessel Environmental Compliance Fund"})
	fund_translate.push({capital:"1167", operating: "1167 Northern Tobacco Securitization Corporation Bonds"})
	fund_translate.push({capital:"1168", operating: "1168 Tobacco Use Education and Cessation Fund"})
	fund_translate.push({capital:"1169", operating: "1169 Power Cost Equalization Endowment Fund"})
	fund_translate.push({capital:"1170", operating: "1170 Small Business Economic Development Revolving Loan Fund"})
	fund_translate.push({capital:"1171", operating: "1171 Restorative Justice Account"})
	fund_translate.push({capital:"1172", operating: "1172 Building Safety Account"})
	fund_translate.push({capital:"1173", operating: "1173 GF Miscellaneous Earnings"})
	fund_translate.push({capital:"1174", operating: "1174 University of Alaska Intra-Agency Transfers"})
	fund_translate.push({capital:"1175", operating: "1175 Business License and Corporation Filing Fees and Taxes"})
	fund_translate.push({capital:"1176", operating: "1176 Science and Technology Endowment Fund"})
	fund_translate.push({capital:"1177", operating: "1177 International Trade and Business Endowment"})
	fund_translate.push({capital:"1178", operating: "1178 temporary code"})
	fund_translate.push({capital:"1179", operating: "1179 Passenger Facility Charges"})
	fund_translate.push({capital:"1180", operating: "1180 Alcohol and Other Drug Abuse Treatment & Prevention Fund"})
	fund_translate.push({capital:"1181", operating: "1181 Alaska Veterans' Memorial Endowment Fund"})
	fund_translate.push({capital:"1182", operating: "1182 Educational and Museum Facility Design/Const/MajorMaint Fund"})
	fund_translate.push({capital:"1183", operating: "1183 Transportation Project Fund"})
	fund_translate.push({capital:"1184", operating: "1184 General Obligation Bond Debt Service Fund"})
	fund_translate.push({capital:"1185", operating: "1185 Election Fund (HAVA)"})
	fund_translate.push({capital:"1186", operating: "1186 Alaska Student Loan Corporation Bond Proceeds"})
	fund_translate.push({capital:"1187", operating: "1187 Federal Mental Health"})
	fund_translate.push({capital:"1188", operating: "1188 Federal Unrestricted Receipts"})
	fund_translate.push({capital:"1189", operating: "1189 Senior Care Fund"})
	fund_translate.push({capital:"1190", operating: "1190 Adak Airport Operations"})
	fund_translate.push({capital:"1191", operating: "1191 DEED CIP Fund Equity Account"})
	fund_translate.push({capital:"1192", operating: "1192 Mine Reclamation Trust Fund"})
	fund_translate.push({capital:"1193", operating: "1193 Major Maintenance Grant Fund"})
	fund_translate.push({capital:"1194", operating: "1194 Fish and Game Nondedicated Receipts"})
	fund_translate.push({capital:"1195", operating: "1195 Snow Machine Registration Receipts"})
	fund_translate.push({capital:"1196", operating: "1196 Master Lease Line of Credit"})
	fund_translate.push({capital:"1197", operating: "1197 Alaska Capital Income Fund"})
	fund_translate.push({capital:"1198", operating: "1198 Alaska Fish and Game Revenue Bond Redemption Fund"})
	fund_translate.push({capital:"1199", operating: "1199 Alaska Sport Fishing Enterprise Account"})
	fund_translate.push({capital:"1200", operating: "1200 Vehicle Rental Tax Receipts"})
	fund_translate.push({capital:"1201", operating: "1201 Commercial Fisheries Entry Commission Receipts"})
	fund_translate.push({capital:"1202", operating: "1202 Anatomical Gift Awareness Fund"})
	fund_translate.push({capital:"1203", operating: "1203 Workers' Compensation Benefits Guarantee Fund"})
	fund_translate.push({capital:"1205", operating: "1205 Berth Fees for the Ocean Ranger Program"})
	fund_translate.push({capital:"1206", operating: "1206 Commercial Vessel Passenger Excise Tax"})
	fund_translate.push({capital:"1207", operating: "1207 Regional Cruise Ship Impact Fund"})
	fund_translate.push({capital:"1208", operating: "1208 Bulk Fuel Bridge Loan Fund"})
	fund_translate.push({capital:"1209", operating: "1209 Alaska Capstone Avionics Revolving Loan Fund"})
	fund_translate.push({capital:"1210", operating: "1210 Renewable Energy Grant Fund"})
	fund_translate.push({capital:"1211", operating: "1211 Cruise Ship Gambling Tax"})
	fund_translate.push({capital:"1212", operating: "1212 Federal Stimulus: ARRA 2009"})
	fund_translate.push({capital:"1213", operating: "1213 Alaska Housing Capital Corporation Receipts"})
	fund_translate.push({capital:"1214", operating: "1214 Whittier Tunnel Toll Receipts"})
	fund_translate.push({capital:"1215", operating: "1215 Unified Carrier Registration Receipts"})
	fund_translate.push({capital:"1216", operating: "1216 Boat Registration Fees"})
	fund_translate.push({capital:"1217", operating: "1217 Non-GF Miscellaneous Earnings"})
	fund_translate.push({capital:"1218", operating: "1218 AS 37.05.146(c) codes that are not GFPR"})
	fund_translate.push({capital:"1219", operating: "1219 Emerging Energy Technology Fund"})
	fund_translate.push({capital:"1220", operating: "1220 Crime Victim Compensation Fund"})
	fund_translate.push({capital:"1221", operating: "1221 Civil Legal Services Fund"})
	fund_translate.push({capital:"1222", operating: "1222 REAA and Small Municipal School District School Fund"})
	fund_translate.push({capital:"1223", operating: "1223 Commercial Charter Fisheries RLF"})
	fund_translate.push({capital:"1224", operating: "1224 Mariculture Revolving Loan Fund"})
	fund_translate.push({capital:"1225", operating: "1225 Community Quota Entity Revolving Loan Fund"})
	fund_translate.push({capital:"1226", operating: "1226 Alaska Higher Education Investment Fund"})
	fund_translate.push({capital:"1227", operating: "1227 Alaska Microloan Revolving Loan Fund"})
	fund_translate.push({capital:"1228", operating: "1228 UGF Associated with Sequestration"})
	fund_translate.push({capital:"1229", operating: "1229 In-State Natural Gas Pipeline Fund"})
	fund_translate.push({capital:"1230", operating: "1230 Alaska Clean Water Administrative Fund"})
	fund_translate.push({capital:"1231", operating: "1231 Alaska Drinking Water Administrative Fund"})
	fund_translate.push({capital:"1232", operating: "1232 In-State Natural Gas Pipeline Fund--Interagency"})
	fund_translate.push({capital:"1233", operating: "1233 Municipal Bond Bank Bonds"})
	fund_translate.push({capital:"1234", operating: "1234 Special License Plates Receipts"})
	fund_translate.push({capital:"1235", operating: "1235 Alaska Liquefied Natural Gas Project Fund"})
	fund_translate.push({capital:"1236", operating: "1236 Alaska Liquefied Natural Gas Project Fund I/A"})
	fund_translate.push({capital:"1237", operating: "1237 Voc Rehab Small Business Enterprise Revolving Fund"})
	fund_translate.push({capital:"1238", operating: "1238 Vaccine Assessment Account"})
	fund_translate.push({capital:"1239", operating: "1239 Aviation Fuel Tax Account"})
	fund_translate.push({capital:"1241", operating: "1241 General Fund / Liquified Natural Gas"})
	fund_translate.push({capital:"1243", operating: "1243 Statutory Budget Reserve Fund"})
	fund_translate.push({capital:"1244", operating: "1244 Rural Airport Receipts"})
	fund_translate.push({capital:"1245", operating: "1245 Rural Airport Receipts I/A"})
	fund_translate.push({capital:"1246", operating: "1246 Recidivism Reduction Fund"})
	fund_translate.push({capital:"1247", operating: "1247 Medicaid Monetary Recoveries"})
	fund_translate.push({capital:"1248", operating: "1248 Alaska Comprehensive Health Insurance Fund"})
	fund_translate.push({capital:"1249", operating: "1249 Motor Fuel Tax Receipts"})
	fund_translate.push({capital:"1250", operating: "1250 Maintenance and Capital Fund"})
	fund_translate.push({capital:"1251", operating: "1251 Non-UGF (Fiscal Notes)"})
	fund_translate.push({capital:"1252", operating: "1252 Designated General Fund Temp Code"})
	fund_translate.push({capital:"1253", operating: "1253 Bonds subject to appropriation"})
	fund_translate.push({capital:"1254", operating: "1254 Marijuana Education and Treatment Fund"})
	fund_translate.push({capital:"1255", operating: "1255 Reappropriations"})
	fund_translate.push({capital:"1256", operating: "1256 Education Endowment Fund"})
	fund_translate.push({capital:"1257", operating: "1257 Dividend Raffle Fund"})
	fund_translate.push({capital:"1258", operating: "1258 UGF Deposits to the CIF"})
	fund_translate.push({capital:"1261", operating: "1261 Shared Taxes"})
	fund_translate.push({capital:"1262", operating: "1262 Non-mandatory Royalty Deposits to the Permanent Fund"})
	fund_translate.push({capital:"1264", operating: "1264 MET Alt"})
	fund_translate.push({capital:"1265", operating: "1265 COVID-19 Federal"})
	fund_translate.push({capital:"1266", operating: "1266 COVID UGF"})
	fund_translate.push({capital:"1267", operating: "1267 FTA Coronavirus Response and Relief Appropriations Act"})
	fund_translate.push({capital:"1268", operating: "1268 Mental Health Trust Reserve"})
	fund_translate.push({capital:"1269", operating: "1269 Coronavirus State and Local Fiscal Recovery Fund"})
	fund_translate.push({capital:"1270", operating: "1270 Federal Highway Administration CRRSAA Funding"})
	fund_translate.push({capital:"1271", operating: "1271 ARPA Revenue Replacement"})
	fund_translate.push({capital:"1272", operating: "1272 Revenue Designated for Fund Transfers"})
	fund_translate.push({capital:"1273", operating: "1273 Abandoned Motor Vehicle Fund"})
	fund_translate.push({capital:"1274", operating: "1274 Other Temp"})
	fund_translate.push({capital:"1275", operating: "1275 Reappropriation - Temporary to Match Leg Fin"})
	fund_translate.push({capital:"1999", operating: "1999 Other Fund Source"})
	fund_translate.push({capital:"2000", operating: "2000 Bond Proceeds"})
	fund_translate.push({capital:"2001", operating: "2001 Bond Proceeds Mental Health"})
	fund_translate.push({capital:"9000", operating: "9000 Unknown UGF Fund Source"})
	fund_translate.push({capital:"9001", operating: "9001 Unknown Federal Fund Source"})
	fund_translate.push({capital:"9002", operating: "9002 Unknown Other Fund Source"})
	fund_translate.push({capital:"9003", operating: "9003 Unknown DGF Fund Source"})
	fund_translate.push({capital:"9999", operating: "9999 No specific fund source"})

}
;=======================================================================|
Initialize_Categories()
{
	global
	dgf_fund_codes := "
	(
		|1000|
		|1005|
		|1010|
		|1015|
		|1020|
		|1021|
		|1025|
		|1028|
		|1030|
		|1031|
		|1032|
		|1035|
		|1036|
		|1038|
		|1039|
		|1040|
		|1048|
		|1049|
		|1051|
		|1052|
		|1054|
		|1056|
		|1057|
		|1058|
		|1059|
		|1062|
		|1064|
		|1065|
		|1067|
		|1068|
		|1069|
		|1070|
		|1071|
		|1072|
		|1073|
		|1074|
		|1076|
		|1078|
		|1079|
		|1080|
		|1082|
		|1083|
		|1085|
		|1086|
		|1087|
		|1088|
		|1089|
		|1090|
		|1098|
		|1099|
		|1109|
		|1110|
		|1111|
		|1115|
		|1118|
		|1122|
		|1123|
		|1124|
		|1125|
		|1127|
		|1128|
		|1131|
		|1132|
		|1134|
		|1135|
		|1141|
		|1146|
		|1151|
		|1153|
		|1154|
		|1155|
		|1156|
		|1157|
		|1161|
		|1162|
		|1164|
		|1168|
		|1169|
		|1170|
		|1172|
		|1175|
		|1176|
		|1180|
		|1184|
		|1189|
		|1191|
		|1193|
		|1194|
		|1195|
		|1197|
		|1200|
		|1201|
		|1202|
		|1203|
		|1208|
		|1209|
		|1210|
		|1216|
		|1218|
		|1221|
		|1223|
		|1224|
		|1225|
		|1226|
		|1227|
		|1234|
		|1237|
		|1246|
		|1247|
		|1248|
		|1249|
		|1252|
		|1254|
		|1261|
		|1262|
		|1264|
		|1268|
		|1272|
		|1273|
		|9003|
	)"
	federal_fund_codes := "
	(
		|1002|
		|1013|
		|1014|
		|1016|
		|1033|
		|1043|
		|1047|
		|1063|
		|1130|
		|1133|
		|1149|
		|1160|
		|1187|
		|1188|
		|1190|
		|1212|
		|1265|
		|1267|
		|1269|
		|1270|
		|9001|
	)"
	other_fund_codes := "
	(
		|-1|
		|-2|
		|1006|
		|1007|
		|1008|
		|1009|
		|1011|
		|1017|
		|1018|
		|1019|
		|1022|
		|1023|
		|1024|
		|1026|
		|1027|
		|1029|
		|1034|
		|1042|
		|1044|
		|1045|
		|1046|
		|1050|
		|1055|
		|1060|
		|1061|
		|1066|
		|1075|
		|1077|
		|1081|
		|1084|
		|1091|
		|1092|
		|1093|
		|1094|
		|1095|
		|1097|
		|1100|
		|1101|
		|1102|
		|1103|
		|1104|
		|1105|
		|1106|
		|1107|
		|1108|
		|1112|
		|1113|
		|1114|
		|1116|
		|1117|
		|1121|
		|1126|
		|1136|
		|1137|
		|1138|
		|1142|
		|1143|
		|1144|
		|1145|
		|1147|
		|1148|
		|1152|
		|1158|
		|1159|
		|1163|
		|1165|
		|1166|
		|1167|
		|1171|
		|1174|
		|1177|
		|1179|
		|1181|
		|1182|
		|1183|
		|1185|
		|1186|
		|1192|
		|1196|
		|1198|
		|1199|
		|1205|
		|1206|
		|1207|
		|1214|
		|1215|
		|1217|
		|1219|
		|1220|
		|1222|
		|1229|
		|1230|
		|1231|
		|1232|
		|1233|
		|1235|
		|1236|
		|1238|
		|1239|
		|1244|
		|1245|
		|1251|
		|1253|
		|1255|
		|1256|
		|1257|
		|1274|
		|1275|
		|1999|
		|2000|
		|2001|
		|9002|
		|9999|
	)"
	ugf_fund_codes := "
	(
		|1001|
		|1003|
		|1004|
		|1012|
		|1037|
		|1041|
		|1053|
		|1096|
		|1119|
		|1120|
		|1129|
		|1139|
		|1140|
		|1150|
		|1173|
		|1178|
		|1211|
		|1213|
		|1228|
		|1241|
		|1243|
		|1250|
		|1258|
		|1266|
		|1271|
		|9000|
	)"
}