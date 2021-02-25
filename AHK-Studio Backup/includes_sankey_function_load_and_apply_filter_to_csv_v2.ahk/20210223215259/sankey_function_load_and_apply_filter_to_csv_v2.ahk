load_and_apply_filter_to_csv(csv_include_filters = "no-filters", csv_exclude_filters = "no-filters")
{
	global
	
	sankey_csv_ramfile 		:= ""	
	progress_title 		:= "function: load_and_apply_filter_to_csv()"
	deleted_rows 			= 0
	current_filtering_row 	= 2
	
	Loop, Parse, filter_csv_ramfile, � 
	{
		if (A_Index = 1)
		{
			sankey_csv_ramfile := A_LoopField rn
			continue
		}
		
		current_row_data := StrSplit( A_LoopField, A_Tab )
		
		progress_subtext := "Filtering CSV data by row..." . "`r`n"
		progress_subtext .= "Rows: " . current_filtering_row   . "`r`n"
		progress_subtext .= "Filtered: " . deleted_rows  . "`r`n"
		Progress, , % progress_subtext, , % progress_title
		; INCLUDE
		if ( ( ( csv_include_filters != "no-filters" ) && ( isobject( csv_include_filters ) ) ) )
		{		
			meets_filter_criteria := true
			for filter_column, filter_string in csv_include_filters
			{	
				;msgbox % filter_column " / " filter_string
				current_cell := current_row_data[(filter_column)]
				If !InStr("|" filter_string "|", "|" current_cell "|", true)
				{
					meets_filter_criteria := false
					break
				}	
			}
			If ( meets_filter_criteria = false)
			{	
				current_filtering_row++
				deleted_rows++
				continue
			}
		}
		; EXCLUDE
		if ( ( ( csv_exclude_filters != "no-filters" ) && ( isobject( csv_exclude_filters ) ) ) )
		{
			meets_filter_criteria := true
			for filter_column, filter_string in csv_exclude_filters
			{
				current_cell := current_row_data[(filter_column)]
				IfInString, filter_string, % current_cell
				{
					meets_filter_criteria := false
					break
				}		
			}
			if ( meets_filter_criteria = false)
			{
				current_filtering_row++
				deleted_rows++
				continue
			}
		}
		sankey_csv_ramfile .= A_LoopField rn
		current_filtering_row++
	}
	
	sankey_csv_ramfile := StrReplace( sankey_csv_ramfile, """", "")
	
	if (save_csv_files = true)
	{
		progress_subtext := "*** SAVING ***" . "`r`n"
		progress_subtext .= "Rows: " . current_filtering_row   . "`r`n"
		progress_subtext .= "Filtered: " . deleted_rows  . "`r`n"
		Progress, , % progress_subtext, , % progress_title
		IfExist, % csv_directory "\" A_Now ".txt"
		Sleep, 1000
		FileAppend, % sankey_csv_ramfile, % csv_directory "\" A_Now ".txt"
	}
	CSV_Load(sankey_csv_ramfile, "sankey_csv_identifier", A_Tab)
}