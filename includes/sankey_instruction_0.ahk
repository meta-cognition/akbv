
; CROSSWALK - MUST BE SAME NUMBER AS REFERENCE COLUMN, REFERENCE IS COLUMN WITH VALUES BEING LOOKED UP.
node_color_index := []
node_color_index[department_column] 	:= department_column	; 
node_color_index[rdu_column] 			:= rdu_column			; 
node_color_index[component_column] 		:= rdu_column 			; 
node_color_index[fund_column] 			:= fund_column			; 
node_color_index[group_column] 			:= group_column			; 

show_values_in_labels := true

format_mode := "dollars"
this_plot_name := "plot"
this_plot_title := "Statewide (including duplicative fund sources, inter-agency spend)"
this_title := this_scenario_name . " <br /> " this_plot_title " (" csv_find_and_sum_revenue("Revenue", line_column) ")"
this_width := "1000"
this_height := "1150"
this_small_height := "800"

this_output_file := build_directory . "\" this_plot_name ".html"
statewide_output_file := this_output_file

include_filters := {(line_column): "Revenue"}
exclude_filters := "no-filters" ;{(fund_column): non_fund_labels}

filter_csv_file := cleaned_csv_file 
load_and_apply_filter_to_csv(include_filters, exclude_filters)

build_nodes_from_columns(department_column, fund_column, group_column)
build_links(group_column, department_column, group_column, value_column, group_column, 1, false, true, true)
build_json()
build_javascript()
build_html()

menu_html .= "<div style=""margin:auto; width:600px; text-align: center;"">" rn
menu_html .= "<div><h2>" this_scenario_name "</h2></div>" rn
menu_html .= "<div><h3><a href=""" this_plot_name ".html"">Statewide Fund Group Overview</a></h3></div>" rn
menu_html .= "<div class=""accordion"" id=""accordionDepartments"">" rn

for key, department_list_object in department_list
{	
		menu_html .= "<div class=""card"">"
		menu_html .= "<div class=""card-header"" id=""heading_" key """>"
		menu_html .= "<h2 class=""mb-0"">"
		menu_html .= "<button class=""btn btn-link collapsed"" type=""button"" data-toggle=""collapse"" data-target=""#collapse_" key """ aria-expanded=""true"" aria-controls=""collapse_" key """>"
		menu_html .= department_list_object.readable_name
		menu_html .= "</button>"
		menu_html .= "</h2>"
		menu_html .= "</div>"

		menu_html .= "<div id=""collapse_" key """ class=""collapse"" aria-labelledby=""heading_" key """ data-parent=""#accordionDepartments"">"
		menu_html .= "<div class=""card-body"">"
		
		FileRead, statewide_html_file, % statewide_output_file
		
		; Line below works because we neable links in  parameter in the build_links() function call above....this replaces node name with a folder name, link targe assumes same base file name.
		StringReplace, statewide_html_file, statewide_html_file, % "@@@" department_list_object.abs_name "@@@", % department_list_object.folder_name , All
		
		FileDelete, % statewide_output_file
		FileAppend, % statewide_html_file,  % statewide_output_file
		
		filter_csv_file := cleaned_csv_file 
		
		include_filters := {(department_column): department_list_object.abs_name } ; DEFAULT
		exclude_filters := "no-filters" 
		load_and_apply_filter_to_csv(include_filters, exclude_filters)
		
		IfExist, % csv_directory "\source\cleaned_department_" A_Now ".txt"
			Sleep, 1000
		
		department_csv_file := csv_directory "\source\cleaned_department_" A_Now ".txt"
		
		FileAppend, % sankey_csv_ramfile, % department_csv_file
		
		filter_csv_file := department_csv_file
		
		build_department_sankey( department_list_object.abs_name, department_list_object.readable_name, department_list_object.folder_name  )					; sankey_instruction_1.ahk, sankey_instruction_2.ahk
		build_department_pcn_sankey( department_list_object.abs_name, department_list_object.readable_name, department_list_object.folder_name )				; sankey_instruction_3.ahk
		build_department_overview_sankey( department_list_object.abs_name, department_list_object.readable_name, department_list_object.folder_name )			; sankey_instruction_4.ahk
		
		menu_html .= "</div>"
		menu_html .= "</div>"
		menu_html .= "</div>"
		
}
menu_html .= "</div>" rn "</div>" rn
this_output_file := build_directory . "\index.html"
build_html_menu()