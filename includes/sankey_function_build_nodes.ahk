build_nodes_from_columns(columns*)
{
	global
	
	sankey_object.nodes := {}
	sankey_object.nodes.columns := []
	
	; initialize node ids, used in html/json output
	node_id=0
	
	; loop through requested columns
	for index, current_column in columns
	{
		progress_title := "function: build_nodes_from_columns()"
		progress_subtext := "Building nodes... "  node_id " nodes created..."
		Progress, , % progress_subtext, , % progress_title
		
		; initialize variables for this column
		current_column_list := "|"
		current_column_list_count = 0
		
		; for every column, create a rows array
		sankey_object.nodes.columns[current_column] := { rows: [] }
		
		; skip headers of input file
		current_row = 2 
		
		; loop through data from ABS
		Loop, % CSV_TotalRows("sankey_csv_identifier")  - 1
		{
			current_cell := CSV_ReadCell("sankey_csv_identifier", current_row, current_column)
			
			; check if we have already found this item
			if ( inStr( current_column_list, "|" current_cell "|", true) )
			{
				; if we have already found this item increment row count and continue loop
				current_row++
				continue
			}
						
			;msgbox % "current_cell: " current_cell " label_value: " label_value
			; add what we've found to the list
			current_column_list .= current_cell 
			
			current_column_list .= "|"
			
			; increment the list item count
			current_column_list_count++
			
			; increment the row for next iteration
			current_row++
		}
		
		; sort the list alphabetically using pipe as (D)elimiter
		sort, current_column_list, D|
		
		; loop throught the list created above
		Loop, Parse, current_column_list, |
		{
			if (A_LoopField = "")
			{
				continue
			}
			this_node_name := ""
			this_node_total := 0
			
			if (show_values_in_labels = true)
			{
				this_node_name := A_LoopField
				
				if ( format_mode = "positions" )
				{
					this_node_total := csv_find_and_sum_positions(this_node_name, current_column)
				}
				else if ( format_mode = "dollars" )
				{					
					
					if ( sum_appropriation_values = true )
					{
						this_node_total := csv_find_and_sum_appropriation(this_node_name, current_column)
					}
					else If (InStr(expenditure_labels, this_node_name ) )
					{
						this_node_total := csv_find_and_sum_expenditure(this_node_name, current_column)
					}
					else 
					{
						this_node_total := csv_find_and_sum_revenue(this_node_name, current_column)
					}
				}
			}
			else
			{
				this_node_name := A_LoopField
			}
			; assign name to node
			this_node_object := {node_name: this_node_name, node_rgb_color: "", node_id: node_id, node_total: this_node_total}
		
			; add this row object to columns array
			sankey_object.nodes.columns[current_column].rows.push(this_node_object)
			
			; store the current row for color assignment
			this_row := sankey_object.nodes.columns[current_column].rows.length()
			
			; find first occurence of this item in the data
			current_row := CSV_MatchCellColumn("sankey_csv_identifier", this_node_name, current_column) 
			
			; use node_color_index to get column to use to lookup color
			current_cell := CSV_ReadCell("sankey_csv_identifier", current_row, node_color_index[current_column])
			
			/*
			msgbox current column: %current_column%
			msgbox % "index: " . node_color_index[current_column]
			msgbox % "index: " . node_color_index[1]
			msgbox % "noderownumber : " . NodeRowNumber(current_cell, sankey_object.nodes.columns[(node_color_index[current_column])].rows)
			*/
			; lookup color 
			current_color := NodeColor(current_cell, node_color_list[1])

			;  msgbox % current_color
			
			; store color in this rows object
			sankey_object.nodes.columns[current_column].rows[this_row].node_rgb_color := current_color
			
			; clear the variable for use in next iteration
			current_color := ""
			
			; increment node id
			node_id++
		}
	
	}
	
	; initialize .all array
	sankey_object.nodes.all := []

	progress_subtext := "Assembling node array..."
	Progress, , % progress_subtext, , % progress_title
	
	; start on column 1
	
	; this for-loop is why columns must be added from smallest to biggest value, in other words left to right.
	; loop through the columns and grab all the rows, assemble them in .all array
	for current_column, row_object in sankey_object.nodes.columns
	{
		current_row = 1
		; index is the current_column
		Loop, % sankey_object.nodes.columns[current_column].rows.Length()
		{
			sankey_object.nodes.all.push(sankey_object.nodes.columns[current_column].rows[current_row])
			current_row++
		}
	}
	
	progress_subtext := "Building node json data..."
	Progress, , % progress_subtext, , % progress_title
	
	; build the json data
	json_node_label 		:= "label : ["
	json_node_color 		:= "color : ["
	json_node_meta			:= "meta  : ["
	
	for index, node in sankey_object.nodes.all
	{
		if (show_values_in_labels = true)
		{
			json_node_label .= """" . sankey_object.nodes.all[index].node_name . ", " . sankey_object.nodes.all[index].node_total . """, " 
		}
		else
		{
			json_node_label .= """" . sankey_object.nodes.all[index].node_name . """, " 
		}
		json_node_color .= """" . sankey_object.nodes.all[index].node_rgb_color . """, " 
		json_node_meta .= """" . sankey_object.nodes.all[index].node_id . """, " 
	}
	
	json_node_label .= "],"
	json_node_color .= "],"
	json_node_meta .= "],"
	
	progress_subtext := "Building nodes: COMPLETE!"
	Progress, , % progress_subtext, , % progress_title
}