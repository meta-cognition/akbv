menu_html := ""
menu_html .= "<div style=""margin:auto; width:600px; text-align: center;"">" rn
menu_html .= "<div class=""abs-scenario""><h2>" this_scenario_name "</h2></div>" rn
menu_html .= "<div class=""accordion"" id=""accordionDepartments"">" rn

/*
menu_html .= "<div><h3><a href=""" this_plot_name ".html"">Statewide Fund Group Overview</a></h3></div>" rn
*/

menu_html .= "<div class=""card"">" rn
menu_html .= "<div class=""card-header"" id=""heading_" ("1") """>" rn
menu_html .= "<h2 class=""mb-0"">" rn
menu_html .= "<button class=""btn btn-link collapsed"" type=""button"" data-toggle=""collapse"" data-target=""#collapse_" ("1") """ aria-expanded=""true"" aria-controls=""collapse_" ("1") """>" rn
menu_html .= "Statewide Fund Group Overview" rn
menu_html .= "</button>" rn
menu_html .= "</h2>" rn
menu_html .= "</div>" rn
menu_html .= "<div id=""collapse_" ("1") """ class=""collapse"" aria-labelledby=""heading_" ("1") """ data-parent=""#accordionDepartments"">" rn
menu_html .= "<div class=""card-body"">" rn
menu_html .= "<div><a href=""" this_plot_name ".html"">Statewide Capital Budget</a></div>" rn
menu_html .= "</div>" rn
menu_html .= "</div>" rn
menu_html .= "</div>" rn


for key, department_list_object in department_list
{	
	
	FileRead, statewide_capital_html_file, % statewide_capital_output_file
	
	; Line below works because we neable links in  parameter in the build_links() function call above....this replaces node name with a folder name, link targe assumes same base file name.
	StringReplace, statewide_capital_html_file, statewide_capital_html_file, % "@@@" department_list_object.abs_name "@@@", % department_list_object.folder_name , All
	
	FileDelete, % statewide_capital_output_file
	FileAppend, % statewide_capital_html_file,  % statewide_capital_output_file
	
	FileRead, filter_csv_ramfile, % cleaned_csv_file
	filter_csv_ramfile := StrReplace(filter_csv_ramfile, rn, "§")
	;filter_csv_file := cleaned_csv_file 
	
	include_filters := {(department_column): department_list_object.abs_name } ; DEFAULT
	exclude_filters := "no-filters" 
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	IfExist, % csv_directory "\source\cleaned_department_capital" A_Now ".txt"
		Sleep, 1000
	
	department_csv_file := csv_directory "\source\cleaned_department_capital" A_Now ".txt"
	
	FileAppend, % sankey_csv_ramfile, % department_csv_file
	
	FileRead, filter_csv_ramfile, % department_csv_file
	filter_csv_ramfile := StrReplace(filter_csv_ramfile, rn, "¥")
	;filter_csv_file := department_csv_file
	
	;departmental 
	format_mode 			:= "dollars"
	show_values_in_labels 	:= true
	sum_appropriation_values := true
	this_plot_name 		:= "plot-capital"
	
	include_filters := "no-filters"
	exclude_filters := "no-filters" ;{(fund_column): non_fund_labels}
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(rdu_column, component_column, fund_column)
	
	if (csv_find_and_sum_appropriation(department_list_object.abs_name, department_column) = "$0.0")
		continue
	
	menu_html .= "<div class=""card"">" rn
	menu_html .= "<div class=""card-header"" id=""heading_" (key + 1) """>" rn
	menu_html .= "<h2 class=""mb-0"">" rn
	menu_html .= "<button class=""btn btn-link collapsed"" type=""button"" data-toggle=""collapse"" data-target=""#collapse_" (key + 1) """ aria-expanded=""true"" aria-controls=""collapse_" (key + 1) """>" rn
	menu_html .= department_list_object.readable_name rn
	menu_html .= "</button>" rn
	menu_html .= "</h2>" rn
	menu_html .= "</div>" rn
	
	menu_html .= "<div id=""collapse_" (key + 1) """ class=""collapse"" aria-labelledby=""heading_" (key + 1) """ data-parent=""#accordionDepartments"">" rn
	menu_html .= "<div class=""card-body"">" rn
	menu_html .= "<a href=""" department_list_object.folder_name "/" this_plot_name ".html"">Capital Budget</a>" rn
	menu_html .= "</div>" rn
	menu_html .= "</div>" rn
	menu_html .= "</div>" rn
	
	format_mode 		:= "dollars"
	this_plot_name 	:= "plot-capital"
	this_plot_title 	:= department_list_object.readable_name " (Fund / Appropriation / Allocation)"
	this_title 		:= this_scenario_name . " <br /> " this_plot_title " (" csv_find_and_sum_appropriation(department_list_object.abs_name, department_column) ")"
	this_width 		:= "1200"
	this_height 		:= "800"
	this_small_height 	:= "600"
	
	parent_levels := 1
	
	IfNotExist, % build_directory "\" department_list_object.folder_name
		FileCreateDir, % build_directory "\" department_list_object.folder_name
	this_output_file := build_directory "\" department_list_object.folder_name "\" this_plot_name ".html"
	
	include_filters := "no-filters"
	exclude_filters := {(line_column): "AL"}
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_links(fund_column, rdu_column, fund_column, value_column, group_column, 1, true, false)
	
	include_filters := "no-filters"
	exclude_filters := {(line_column): "AP"}
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_links(rdu_column, component_column, fund_column, value_column, group_column, 1, false, false)
	
	build_json()
	build_javascript()
	build_html()
}
parent_levels := 0
menu_html .= "</div>" rn "</div>" rn
this_output_file := build_directory . "\index-capital.html"
build_html_menu() 