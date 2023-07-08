		current_column_list := "|a|b|c|"
		
		sort, current_column_list, D|
		
		Loop, Parse, current_column_list, |
		{
			msgbox % "Item " A_Index ": "A_LoopField
		}
		
		loop 0
		{
			MsgBox % "iterarion " A_Index
		}
		loop -1
		{
			MsgBox % "iterarion " A_Index
		}
		loop 1
		{
			MsgBox % "iterarion " A_Index
		}