build_department_pcn_sankey(department_abs, department_readable, department_folder)
{
	global 
	
	
	; MANUALLY CHANGE THESE!
	; CROSSWALK - MUST BE SAME NUMBER AS REFERENCE COLUMN, REFERENCE IS COLUMN WITH VALUES BEING LOOKED UP.
	node_color_index 						:= []
	node_color_index[department_column] 		:= department_column	; 
	node_color_index[rdu_column] 				:= rdu_column			; 
	node_color_index[component_column] 		:= rdu_column 			; 
	node_color_index[fund_column] 			:= fund_column			; 
	node_color_index[group_column] 			:= group_column			; 
	
	format_mode 			:= "positions"
	show_values_in_labels 	:= true
	
	the_department_name 	:= department_readable
	abs_department_name 	:= department_abs
	
	include_filters 		:= {(line_column): "Position Count"}
	exclude_filters 		:= "no-filters" 
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(rdu_column, fund_column)
	
	format_mode 		:= "positions"
	this_plot_name 	:= "plot-pcn"
	this_plot_title 	:= the_department_name " Positions"
	this_title 		:= this_scenario_name . " <br /> " this_plot_title " (" csv_find_and_sum_positions("Position Count", line_column) " positions)"
	this_width 		:= "1000"
	this_height 		:= "500"
	this_small_height 	:= "500"
	
	this_output_file := build_directory "\" department_folder "\" this_plot_name ".html"
	menu_html .= "<div><a href=""" department_folder "/" this_plot_name ".html"">Budgeted Positions</a></div>" rn
	
	parent_levels := 1
	
	department_output_file := this_output_file
	
	json_value_format := "valueformat: "",f"","
	
	build_links(fund_column, rdu_column, fund_column, value_column, fund_column, 1, false, true)
	
	build_json()
	build_javascript()
	build_html()
	
	second_level_nodes := sankey_object.nodes.columns[rdu_column].rows
	
	for key, this_node in second_level_nodes
	{	
		build_pcn_rdu_sankey(this_node.node_name,  department_folder "\" this_node.node_id)
	}
}

build_pcn_rdu_sankey(sub_rdu_name, sub_folder)
{
	
	global
	format_mode := "positions"
	show_values_in_labels := true
	
	include_filters := {(rdu_column): sub_rdu_name, (line_column): "Position Count"}
	exclude_filters := "no-filters"
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(component_column, fund_column)
	
	this_plot_name := this_plot_name
	format_mode := "positions"
	this_title := this_scenario_name . " <br /> " sub_rdu_name " (" csv_find_and_sum_positions(sub_rdu_name, rdu_column) " positions)"
	this_width := "1000"
	this_small_height := "500"
	this_output_file := % build_directory "\" sub_folder "\" this_plot_name ".html"
	
	FileCreateDir, % build_directory "\" sub_folder
	parent_levels := 2

	build_links( fund_column, component_column, fund_column, value_column, fund_column, 1, false, true )

	build_json()
	build_javascript()
	build_html()
	
	third_level_nodes := sankey_object.nodes.columns[component_column].rows
	
	for key, this_node in third_level_nodes
	{	
		build_pcn_component_sankey(this_node.node_name, sub_folder "\" this_node.node_id)
	}
	
}

build_pcn_component_sankey(sub_component_name, sub_folder)
{
	
	global
	format_mode := "positions"
	show_values_in_labels := true
	
	include_filters := {(component_column): sub_component_name, (line_column): "Position Count"}
	exclude_filters := "no-filters"
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(component_column, fund_column)
	
	this_plot_name := this_plot_name
	format_mode := "positions"
	this_title := this_scenario_name . " <br /> " sub_component_name " (" csv_find_and_sum_positions(sub_rdu_name, rdu_column) " positions)"
	this_width := "1000"
	this_height := "500"
	this_output_file := % build_directory "\" sub_folder "\" this_plot_name ".html"
	
	FileCreateDir, % build_directory "\" sub_folder
	parent_levels := 3

	build_links( fund_column, component_column, fund_column, value_column, fund_column, 1, false, false )

	build_json()
	build_javascript()
	build_html()
	
}