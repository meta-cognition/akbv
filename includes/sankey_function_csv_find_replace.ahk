csv_find_replace(string_find, string_replace)
{
	global
	
	column_replace := CSV_SearchRow("sankey_csv_identifier", string_find, current_csv_row)
	if ( column_replace != "0" ) 
	{
		CSV_ModifyCell("sankey_csv_identifier", string_replace, current_csv_row, column_replace)                             
	}

}

csv_find_replace_column(string_find, string_replace, column)
{
	global
	
	csv_cell_replace := CSV_ReadCell("sankey_csv_identifier", current_csv_row, column)
	if ( InStr( csv_cell_replace, string_find, true )  ) 
	{
		CSV_ModifyCell("sankey_csv_identifier", string_replace, current_csv_row, column)                             
	}

}