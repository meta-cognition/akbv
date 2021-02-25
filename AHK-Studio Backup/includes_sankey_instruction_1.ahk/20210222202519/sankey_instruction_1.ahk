build_department_sankey(department_abs, department_readable, department_folder)
{
	global 
	
	; MANUALLY CHANGE THESE!
	; CROSSWALK - MUST BE SAME NUMBER AS REFERENCE COLUMN, REFERENCE IS COLUMN WITH VALUES BEING LOOKED UP.
	node_color_index 						:= []
	node_color_index[department_column] 		:= department_column	; 
	node_color_index[rdu_column] 				:= rdu_column			; 
	node_color_index[component_column] 		:= rdu_column 			; 
	node_color_index[fund_column] 			:= group_column		; 
	node_color_index[group_column] 			:= group_column		; 
	
	format_mode := "dollars"
	this_plot_name := "plot"
	
	the_department_name := department_readable
	abs_department_name := department_abs
	
	this_plot_title 	:= the_department_name " (Fund / Results Delivery Unit / Component)" ; DEFAULT
	;this_plot_title 	:= the_department_name " (Fuel Tax Revenue Only)" ; FOR FUEL TAXES ONLY
	this_title 		:= this_scenario_name . " <br /> " this_plot_title " (" csv_find_and_sum_revenue( department_abs, department_column) ")"
	this_width 		:= "1200"
	this_height		:= "1150"
	this_small_height 	:= "800"
	
	FileCreateDir, % build_directory "\" department_folder
	this_output_file := build_directory "\" department_folder "\" this_plot_name ".html"
	
	menu_html .= "<div><a href=""" department_folder "/" this_plot_name ".html"">Operating Budget</a></div>" rn
	
	parent_levels := 1
	
	department_output_file := this_output_file
	
	include_filters := {(line_column): "Revenue"} ; DEFAULT
	;include_filters := {(fund_column): "1249 Motor Fuel Tax Receipts | 1239 Aviation Fuel Tax Revenue"} ; FOR FUEL TAXES ONLY
	exclude_filters := {(fund_column): non_fund_labels}
	
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_nodes_from_columns(rdu_column, component_column, fund_column)
	
	build_links(fund_column, rdu_column, fund_column, value_column, group_column, 1, true, true, false)
	build_links(rdu_column, component_column, fund_column, value_column, group_column, 1, false, true, true)
	
	build_json()
	build_javascript()
	build_html()
	
	rdu_level_nodes := sankey_object.nodes.columns[rdu_column].rows
	
	for key, this_node in rdu_level_nodes
	{	
		; sankey_instruction_2.ahk
		build_rdu_sankey(this_node.node_name, department_folder "\" this_node.node_id, this_node.node_id )
	}
}
	