build_department_overview_sankey(department_abs, department_readable, department_folder)
{	
	global
	
	; MANUALLY CHANGE THESE!
	; CROSSWALK - MUST BE SAME NUMBER AS REFERENCE COLUMN, REFERENCE IS COLUMN WITH VALUES BEING LOOKED UP.
	node_color_index := []
	node_color_index[department_column] 	:= department_column	; 
	node_color_index[rdu_column] 			:= rdu_column			; 
	node_color_index[component_column] 		:= rdu_column 			; 
	node_color_index[fund_column] 			:= group_column			; 
	node_color_index[group_column] 			:= group_column			; 
	
	
	format_mode := "dollars" 	
	show_values_in_labels := true
	
	the_department_name := department_readable
	abs_department_name := department_abs
	
	include_filters := "no-filters"
	exclude_filters := "no-filters" ; {(fund_column): non_fund_labels}
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	build_nodes_from_columns(department_column, rdu_column, fund_column, line_column, group_column)

	this_plot_name := "plot-overview"
	this_plot_title := the_department_name " (Fund / Fund Group / Expenditure)"
	this_title := this_scenario_name . " <br /> " this_plot_title " (" csv_find_and_sum_revenue(abs_department_name, department_column) ")"
	this_width := "1200"
	this_height := "600"
	this_small_height := "400"
	
	this_output_file := build_directory "\" department_folder "\" this_plot_name ".html"
	menu_html .= "<div><a href=""" department_folder "/" this_plot_name ".html"">Department Overview</a></div>" rn
	
	parent_levels := 1
		
	include_filters := {(line_column): "Revenue"}
	exclude_filters := "no-filters" ; {(fund_column): non_fund_labels}
	
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_links(fund_column, group_column, fund_column, value_column, group_column, 1, false, false)
	build_links(group_column, department_column, group_column, value_column, group_column, 1, false, false)
	
	include_filters := {(line_column): "Expenditure"}
	exclude_filters := "no-filters" 
	load_and_apply_filter_to_csv(include_filters, exclude_filters)
	
	build_links(department_column, fund_column, line_column, value_column, line_column, 1, false, false)
	
	build_json()
	build_javascript()
	build_html()
	
	
}
