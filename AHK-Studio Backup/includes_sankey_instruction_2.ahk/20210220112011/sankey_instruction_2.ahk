build_rdu_sankey(sub_rdu_name, sub_folder, parent_folder)
{
	global
	
	show_values_in_labels := true

	format_mode := "dollars"
	this_width := "1000"
	this_height := "800"
	this_small_height := "600"
	this_output_file := % build_directory "\" sub_folder "\" this_plot_name ".html"
	
	FileCreateDir, % build_directory "\" sub_folder
	parent_levels := 2
	
	; MANUALLY CHANGE THESE!
	
	
	;include_filters := {(rdu_column): sub_rdu_name, (component_column): "Northern Highways & Aviation, Central Highways and Aviation, Southcoast Highways & Aviation" } ; H&A ONLY
	include_filters := {(rdu_column): sub_rdu_name } ; DEFAULT
	exclude_filters := "no-filters"
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(component_column, fund_column, line_column)
	this_title := this_scenario_name . " <br /> " sub_rdu_name " (" csv_find_and_sum_revenue( sub_rdu_name, rdu_column ) ")"
	
	; MANUALLY CHANGE THESE!
	;include_filters := {(line_column): "Revenue", (component_column): "Northern Highways & Aviation, Central Highways and Aviation, Southcoast Highways & Aviation"} ; FOR H&A ONLY
	include_filters := {(rdu_column): sub_rdu_name, (line_column): "Revenue" } ; DEFAULT
	exclude_filters := {(fund_column): non_fund_labels}
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_links( fund_column, component_column, fund_column, value_column, fund_column, 1, true, false, false )

	; MANUALLY CHANGE THESE!
	include_filters := {(rdu_column): sub_rdu_name, (line_column): "Expenditure" } ; DEFAULT
	;include_filters := {(rdu_column): sub_rdu_name,  (component_column): "Northern Highways & Aviation, Central Highways and Aviation, Southcoast Highways & Aviation", (line_column): "Expenditure" } ; FOR H&A ONLY
	exclude_filters := "no-filters"
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_links(component_column, fund_column, line_column, value_column, line_column, 1, true, false)

	build_json()
	build_javascript()
	build_html()
	
	component_level_nodes := sankey_object.nodes.columns[component_column].rows
	
	for key, this_node in component_level_nodes
	{	
		FileRead, department_html_file, % department_output_file
		StringReplace, department_html_file, department_html_file, % "@@@" this_node.node_name "@@@", % parent_folder "/" this_node.node_id, All
		FileDelete, % department_output_file
		FileAppend, % department_html_file,  % department_output_file
		
		build_component_sankey(this_node.node_name, sub_folder "\" this_node.node_id)
	}
}


build_component_sankey(sub_component_name, sub_folder)
{
	global
	
	format_mode := "dollars"
	show_values_in_labels := true
	
	this_width := "1000"
	this_height := "400"
	this_small_height := "400"
	this_output_file := % build_directory "\" sub_folder "\" this_plot_name ".html"
	
	FileCreateDir, % build_directory "\" sub_folder
	parent_levels := 3
	
	include_filters := {(component_column): sub_component_name }
	exclude_filters := "no-filters"
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(component_column, fund_column, line_column)
	this_title := this_scenario_name . " <br /> " sub_component_name " (" csv_find_and_sum_revenue(sub_component_name, component_column) ")"

	include_filters := {(component_column): sub_component_name, (line_column): "Revenue" }
	exclude_filters := {(fund_column): non_fund_labels }
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_links( fund_column, component_column, fund_column, value_column, fund_column, 1, false, false )

	include_filters := {(component_column): sub_component_name, (line_column): "Expenditure" }
	exclude_filters := "no-filters"
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_links( component_column, fund_column, line_column, value_column, line_column, 1, false, false)

	build_json()
	build_javascript()
	build_html()
	
}