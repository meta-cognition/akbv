build_links( source_column, target_column, grouping_column, value_column, color_column, color_list, add_source_node_links = false, add_target_node_links = false, is_child = false)
{
	global
	
	;msg := sankey_object.nodes.columns[source_column].rows.length() * sankey_object.nodes.columns[target_column].rows.length() * sankey_object.nodes.columns[grouping_column].rows.length() * sankey_csv_total_rows
	;msg .= " rows"
	;msgbox % msg
	
	; set row to one for source_column.row, for looping through possible source nodes (source_column.rows)
	current_source_node_row = 1
	loop, % sankey_object.nodes.columns[source_column].rows.length()
	{	
		current_source_node := sankey_object.nodes.columns[source_column].rows[current_source_node_row].node_name 
		; for each source node (soure_column.row), we will loop through target nodes (target_column.rows) 
		current_target_node_row = 1
		loop, % sankey_object.nodes.columns[target_column].rows.length()
		{
			current_target_node := sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name 
			; for each target node, we will loop through groupings (grouping_column.rows)
			current_grouping_row = 1
			loop, % sankey_object.nodes.columns[grouping_column].rows.length()
			{
				current_group_name := sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name 
				
				subtext := "Source Node (" . current_source_node_row . "/" . sankey_object.nodes.columns[source_column].rows.length() . ") " . current_source_node . "`r`n"
				subtext .= "Target Node (" . current_target_node_row . "/" . sankey_object.nodes.columns[target_column].rows.length() . ") " . current_target_node . "`r`n"
				subtext .= "Grouping ("    . current_grouping_row . "/" . sankey_object.nodes.columns[grouping_column].rows.length() . ") " . current_group_name . "`r`n"
				;subtext .= "Row (" . current_csv_row . "/" sankey_csv_total_rows . ") "
				Progress, , % subtext, , % this_title
				
				; build a link object
				this_link_object := {}
				this_link_value = 0
				
				; loop through and sum all values with filtering, expected source, expected target, and expected group
				; start at top of csv data (row 2) . row is titles.
				current_csv_row = 2
				Loop, %  CSV_TotalRows("sankey_csv_identifier") - 1 
				{		
					current_source_cell := CSV_ReadCell("sankey_csv_identifier", current_csv_row, source_column)
					if (current_source_cell = current_source_node )
					{			
						current_target_cell := CSV_ReadCell("sankey_csv_identifier", current_csv_row, target_column)
						if (current_target_cell = current_target_node)
						{
							current_group_cell := CSV_ReadCell("sankey_csv_identifier", current_csv_row, grouping_column)
							if (current_group_cell = current_group_name)
							{
								current_color_cell := CSV_ReadCell("sankey_csv_identifier", current_csv_row, color_column)
								current_cell := CSV_ReadCell("sankey_csv_identifier", current_csv_row, value_column)
								this_link_value += current_cell
							}
						}
					}
					current_csv_row++
				}
				if (this_link_value > 0)
				{
					this_link_object.link_source := sankey_object.nodes.columns[source_column].rows[current_source_node_row].node_id
					this_link_object.link_target := sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_id
					this_link_object.link_value := this_link_value
					IfInString, position_labels, % sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name
					{
						format_mode := "positions"
						this_link_object.link_label := format_to_readable(this_link_value) . " in " .  sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name . "<br />Type: " . sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name
					}
					else if ( sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name = "Expenditure" )
					{
						format_mode := "dollars"
						this_link_object.link_label := format_to_readable(this_link_value) . " in " .  sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name . "<br />Expenditure: " . sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name
					}
					else 
					{
						format_mode := "dollars"
						this_link_object.link_label := format_to_readable(this_link_value) . " to " .  sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name . "<br />Fund Source: " . sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name
					}						
					this_link_object.link_color := LinkColor(current_color_cell, link_color_list[(color_list)]) ; LinkColor(sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name, link_color_list[(color_list)]) ; this_link_object.link_color := LinkColor(this_link_object.link_label, link_color_list[(color_list)])
					sankey_object.links.push(this_link_object)
				}
				current_grouping_row++
			}
			if (add_target_node_links = true)
			{
				hyperlink_id := Round(sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_id)
				this_identifier_text := hyperlink_id
				
				if ( is_child = true )
				{
					this_identifier_text := "@@@" . sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name . "@@@" 
				}	
				
				this_fund_code := SubStr(sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_name,1,4)
				if this_fund_code is Integer
					this_identifier_text := "https://www.legfin.akleg.gov/ReportsPHP/SelectReport.php?&ReportAbbrev=FUNDSOURCE&LimitFundCodes=" this_fund_code
				
				if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
				{
					sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
				}
				
			}
			current_target_node_row++
		}
		if (add_source_node_links = true)
		{
			hyperlink_id := Round(sankey_object.nodes.columns[source_column].rows[current_source_node_row].node_id)
			this_identifier_text := hyperlink_id
			if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
			{
				sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
			}
		}
		current_source_node_row++
	}
}