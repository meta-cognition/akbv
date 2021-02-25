parent_levels := 0

format_mode := "dollars"
show_values_in_labels := true
this_plot_name := "plot-capital"

include_filters := "no-filters"
exclude_filters := "no-filters" ;{(fund_column): non_fund_labels}

FileRead, filter_csv_ramfile, % cleaned_csv_file
filter_csv_ramfile := StrReplace(filter_csv_ramfile, rn, "¥")
;filter_csv_file := cleaned_csv_file 

load_and_apply_filter_to_csv(include_filters, exclude_filters)

build_nodes_from_columns(department_column, group_column)

;FileAppend, % Obj2Str(sankey_object.nodes), % A_Now "_object.txt"
;ExitApp

format_mode 		:= "dollars"
this_plot_title 	:= "Statewide (including duplicative fund sources, inter-agency spend)"
this_title 		:= this_scenario_name . " <br /> " this_plot_title " (" csv_find_and_sum_revenue("Revenue", line_column) ")"
this_width 		:= "1000"
this_height 		:= "1150"
this_small_height 	:= "800"
this_output_file 	:= build_directory . "\" this_plot_name ".html"

statewide_capital_output_file := this_output_file

build_links(group_column, department_column, group_column, value_column, group_column, 1, false, true, true)

build_json()
build_javascript()
build_html()

