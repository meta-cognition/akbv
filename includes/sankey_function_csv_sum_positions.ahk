csv_find_and_sum_positions(string_find, search_column)
{
	global sankey_csv_total_rows, line_column, value_column
	current_csv_row = 1
	sum = 0
	Loop, %  CSV_TotalRows("sankey_csv_identifier") 
	{	
		current_cell := CSV_ReadCell("sankey_csv_identifier", current_csv_row , search_column) 
		line_type := CSV_ReadCell("sankey_csv_identifier", current_csv_row , line_column) 
		cell_value := CSV_ReadCell("sankey_csv_identifier", current_csv_row , value_column) 
		;msgbox % "current: " current_cell " type: " line_type " value: " cell_value
		
		if (instr(current_cell, string_find , true) )
		{
			if (line_type = "Position Count")
			{
				sum += cell_value                             
			}
		}
		
		current_csv_row++
	}
	return format_to_readable(sum)
}