load_and_apply_filter_to_csv(csv_include_filters = "no-filters", csv_exclude_filters = "no-filters")
{
	global
	progress_title := "function: load_and_apply_filter_to_csv()"
	progress_subtext := "Loading CSV data file..." . "`r`n"
	Progress, , % progress_subtext, , % progress_title
	
	CSV_Load(sankey_csv_ramfile,"sankey_csv_identifier")
	sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
	sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 

	subtext .= "Loading DONE!" 
	Progress, , % progress_subtext, , % progress_title

	csv_blank_row := ""
	loop % sankey_csv_total_columns - 1
	{
		csv_blank_row .= ","
	}
		
	deleted_rows = 0
	current_filtering_row = 2
	loop % sankey_csv_total_rows 
	{
		progress_subtext := "Filtering CSV data by row..." . "`r`n"
		progress_subtext .= "Rows: " . current_filtering_row  . "`r`n"
		progress_subtext .= "Filtered: " . deleted_rows  . "`r`n"
		Progress, , % progress_subtext, , % progress_title
		
		if ( ( ( csv_include_filters != "no-filters" ) && ( isobject( csv_include_filters ) ) ) )
		{		
			meets_filter_criteria := true
			for filter_column, filter_string in csv_include_filters
			{	
				;msgbox % filter_column " / " filter_string
				current_cell := CSV_ReadCell("sankey_csv_identifier", current_filtering_row, filter_column)
				IfNotInString, filter_string, % current_cell
				{
					meets_filter_criteria := false
					break
				}	
			}
			If ( meets_filter_criteria = false)
			{	
				CSV_ModifyRow("sankey_csv_identifier", csv_blank_row, current_filtering_row)  
				current_filtering_row++
				deleted_rows++
				continue
			}
		}
		if ( ( ( csv_exclude_filters != "no-filters" ) && ( isobject( csv_exclude_filters ) ) ) )
		{
			meets_filter_criteria := true
			for filter_column, filter_string in csv_exclude_filters
			{
				current_cell := CSV_ReadCell("sankey_csv_identifier", current_filtering_row, filter_column)
				IfInString, filter_string, % current_cell
				{
					meets_filter_criteria := false
					break
				}		
			}
			if ( meets_filter_criteria = false)
			{
				CSV_ModifyRow("sankey_csv_identifier", csv_blank_row, current_filtering_row) 
				current_filtering_row++
				deleted_rows++
				continue
			}
		}
		current_filtering_row++
	}
	if (save_csv_files = true)
	{
		progress_subtext := "*** SAVING ***" . "`r`n"
		progress_subtext .= "Rows: " . current_filtering_row  . "`r`n"
		progress_subtext .= "Filtered: " . deleted_rows  . "`r`n"
		Progress, , % progress_subtext, , % progress_title
		
		CSV_Save(csv_directory "\" A_Now ".csv", "sankey_csv_identifier", true) 
		
	}
}