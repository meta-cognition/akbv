build_links( source_column, target_column, grouping_column, value_column, color_column, color_list, add_source_node_links = false, add_target_node_links = false, is_child = false)
{
	global
	

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
			
			if ((source_column = rdu_column) AND (target_column = component_column))
			{
				rdu_component_check_row := CSV_MatchCellColumn("sankey_csv_identifier", current_target_node, component_column)
				
				if ( current_source_node != CSV_ReadCell("sankey_csv_identifier", rdu_component_check_row, rdu_column) )
				{
					current_target_node_row++
					continue
				}
				
			}
			
			; for each target node, we will loop through groupings (grouping_column.rows)
			current_grouping_row = 1
			loop, % sankey_object.nodes.columns[grouping_column].rows.length()
			{
				current_group_name := sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name 
				; mod shortcut fund top: start
				;if ((source_column = fund_column) AND (grouping_column = fund_column))
				if ( source_column = grouping_column )
				{
					current_group_name := current_source_node	
				}
				; mod shortcut fund top: end
				/* disabling for performance
					subtext := "Source Node (" . current_source_node_row . "/" . sankey_object.nodes.columns[source_column].rows.length() . ") " . current_source_node . "`r`n"
					subtext .= "Target Node (" . current_target_node_row . "/" . sankey_object.nodes.columns[target_column].rows.length() . ") " . current_target_node . "`r`n"
					subtext .= "Grouping ("    . current_grouping_row . "/" . sankey_object.nodes.columns[grouping_column].rows.length() . ") " . current_group_name . "`r`n"
				;subtext .= "Row (" . current_csv_row . "/" sankey_csv_total_rows . ") "
				*/
				;Progress, , % subtext, , % this_title
				
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
					IfInString, position_labels, % current_group_name
					{
						format_mode := "positions"
						this_link_object.link_label := format_to_readable(this_link_value) . " in " .  current_target_node . "<br />Type: " . current_group_name
					}
					else if ( current_group_name = "Expenditure" )
					{
						format_mode := "dollars"
						this_link_object.link_label := format_to_readable(this_link_value) . " in " .  current_target_node . "<br />Expenditure: " . current_target_node
					}
					else 
					{
						format_mode := "dollars"
						this_link_object.link_label := format_to_readable(this_link_value) . " to " .  current_target_node . "<br />Fund Source: " . current_group_name
						if (grouping_column = fund_column)
						{
							;this_link_object.link_label .= " " fund_type_short(sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name)
							this_link_object.link_label .= " " fund_type_short(current_group_name)
						}
					}
					this_link_object.link_color := LinkColor(current_color_cell, link_color_list[(color_list)]) ; LinkColor(sankey_object.nodes.columns[grouping_column].rows[current_grouping_row].node_name, link_color_list[(color_list)]) ; this_link_object.link_color := LinkColor(this_link_object.link_label, link_color_list[(color_list)])
					sankey_object.links.push(this_link_object)
				}
				current_grouping_row++
				; mod shortcut fund bottom: start
				;if ((source_column = fund_column) AND (grouping_column = fund_column))
				if ( source_column = grouping_column )
				{
					break
				}	
				; mod shortcut fund bottom: end
			}
			if (add_target_node_links = true)
			{
				hyperlink_id := Round(sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_id)
				this_identifier_text := hyperlink_id
				if ( add_project_links = true )
				{
					this_identifier_text := "https://omb.alaska.gov/ombfiles/" sankey_object.nodes.columns[target_column].rows[current_target_node_row].node_project_link
					;this_identifier_text := "javascript:alert(\'OMB project file not available.\')"
				}
				if ( is_child = true )
				{
					this_identifier_text := "@@@" . current_target_node . "@@@" 
				}	
				
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
			
			if (source_column = fund_column)
			{
				this_fund_code := SubStr(current_source_node,1,4)
				;msgbox % this_fund_code
				if this_fund_code is Integer
				{
					this_identifier_text := "https://www.legfin.akleg.gov/ReportsPHP/SelectReport.php?&ReportAbbrev=FUNDSOURCE&LimitFundCodes=" this_fund_code
					
					if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
					{
						sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
					}
					
				}
			}
			else if ( !HasHyperLinkVal(hyperlink_id, sankey_object.hyperlink_ids) )
			{
				sankey_object.hyperlink_ids.push( {id: hyperlink_id, link_identifier_text: this_identifier_text } )
			}
		}
		current_source_node_row++
	}
}