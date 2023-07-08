
select_new_files()
{
	global

	new_files := MsgBox("Do you want to import new ABS Scenario Files into the database?", "Import New Scenario Files?", "YesNo")

	If (new_files = "Yes")
	{
		new_starting_directory := A_ScriptDir "\abs exports\"
		file_1512_path  := FileSelect( , new_starting_directory, "Please Select an Operating File, From ABS Export Component Detail (1512)",'*.txt')
		if (file_1512_path  = "")
			ExitApp

		SplitPath(file_1512_path,,&new_starting_directory)
		file_272_path := FileSelect( , new_starting_directory, "From ABS Export Project Information (Appropriations with Allocations) (272)",'*.txt')       ;*[sankey_builder]
		if (file_272_path = "")
			ExitApp	

		loop
		{
			budget_name				:= InputBox("Name This Budget", "Name This Budget")
			if (budget_name.result = "Cancel")
				ExitApp

			budget_fiscal_year		:= InputBox("Fiscal Year...", "Enter numbers only for fiscal year:")
			if (budget_fiscal_year.result = "Cancel")
				ExitApp
			
			budget_name 			:= budget_name.value
			budget_fiscal_year		:= Trim(StrReplace(budget_fiscal_year.value, "fy", ""))

			msg_results 			:= "Correct? YES to continue, No to re-enter, CANCEL to quit." rn rn "Name: " budget_name rn "FY: " budget_fiscal_year

			confirm_loop := msgbox(msg_results,"Confirm:", 0x3)
			if (confirm_loop = "Cancel")
				ExitApp
			if (confirm_loop = "Yes")
				break
		}
		get_scenario_numbers()
		import_files_to_database()
	}
}
