cleanup_data(cleanup_capital_flag = false)
{
	global
	
	progress_title := "function: cleanup_data()"
	progress_subtext := "Converting data file...standby..." . "`r`n"
	Progress, , % progress_subtext, , % progress_title
	
	;Sleep, 500
	progress_subtext := "Loading CSV data..." . "`r`n"
	Progress, , % progress_subtext, , % progress_title
	
	CSV_Load(sankey_csv_ramfile, "sankey_csv_identifier", A_Tab)
	
	this_scenario_name := CSV_ReadCell("sankey_csv_identifier", scenario_row, scenario_column)
	this_scenario_name := StrSplit(this_scenario_name, "=")
	this_scenario_name := this_scenario_name[2]
	
	CSV_DeleteRow("sankey_csv_identifier", scenario_row) 
	
	sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
	sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 
	
	progress_subtext := "Loading CSV data:" rn
	progress_subtext .= "-> Cleaning data..." rn
	Progress, , % progress_subtext, , % progress_title
	
	current_csv_row = 1
	Loop, %  sankey_csv_total_rows 
	{        
		progress_subtext := "Loading CSV data:" rn
		progress_subtext .= "-> Cleaning data... " current_csv_row "/" sankey_csv_total_rows rn
		Progress, , % progress_subtext, , % progress_title
		
		csv_find_replace_column( "Line 71000"       , "Personal Services"               , fund_column )
		csv_find_replace_column( "Line 72000"       , "Travel"                          , fund_column )
		csv_find_replace_column( "Line 73000"       , "Contractual Services"            , fund_column )
		csv_find_replace_column( "Line 74000"       , "Commodities"                     , fund_column )
		csv_find_replace_column( "Line 75000"       , "Capital Outlay"                  , fund_column )
		csv_find_replace_column( "Line 76000"       , "Line 7600"                       , fund_column )
		csv_find_replace_column( "Line 77000"       , "Grants, Benefits"                , fund_column )
		csv_find_replace_column( "Line 78000"       , "Miscellaneous"                   , fund_column )
		csv_find_replace_column( "PPT"              , "Permanent Part-Time"             , fund_column )
		csv_find_replace_column( "PFT"              , "Permanent Full-Time"             , fund_column )
		csv_find_replace_column( "NP"               , "Non-Permanent"                   , fund_column )
		
		csv_find_replace_column( "DGF"              , "Designated General Funds"        , group_column)         ;DGF has to go first! Otherwise the line below matches.
		csv_find_replace_column( "UGF"              , "Unrestricted General Funds"      , group_column)
		csv_find_replace_column( "Other"            , "Other Funds"                     , group_column)
		csv_find_replace_column( "Fed"              , "Federal Funds"                   , group_column)
		
		; Capital Category Cleanup
		csv_find_replace_column( "DGF_AMOUNT"       , "Designated General Funds"        , group_column)         ;DGF has to go first! Otherwise the line below matches.
		csv_find_replace_column( "UGF_AMOUNT"       , "Unrestricted General Funds"      , group_column)
		csv_find_replace_column( "O_AMOUNT"         , "Other Funds"                     , group_column)
		csv_find_replace_column( "F_AMOUNT"         , "Federal Funds"                   , group_column)
		
		; Capital Fund Cleanup
		csv_find_replace_column( "1002 Fed Rcpts"       , "1002 Federal Receipts"                                       , fund_column)
		csv_find_replace_column( "1003 G/F Match"       , "1003 General Fund Match"                                     , fund_column)
		csv_find_replace_column( "1004 Gen Fund"        , "1004 General Fund Receipts"                                  , fund_column)
		csv_find_replace_column( "1005 GF/Prgm"         , "1005 General Fund/Program Receipts"                          , fund_column)
		csv_find_replace_column( "1026 Hwy Capitl"      , "1026 Highways/Equipment Working Capital Fund"                , fund_column)
		csv_find_replace_column( "1027 Int Airprt"      , "1027 International Airport Revenue Fund"                     , fund_column)
		csv_find_replace_column( "1092 MHTAAR"          , "1092 Mental Health Trust Authority Authorized Receipts"      , fund_column)
		csv_find_replace_column( "1108 Stat Desig"      , "1108 Statutory Designated Program Receipts"                  , fund_column)
		csv_find_replace_column( "1112 IntAptCons"      , "1112 International Airports Construction Fund"               , fund_column)
		csv_find_replace_column( "9002 Unknwn Oth"      , "9002 Unknown Other Fund Source"                              , fund_column)
		
		if (cleanup_capital_flag = true)
		{
			; Capital Department Name Cleanup for Fund Category, FIND -> REPLACE (replace with standardized ABS name, department_list.abs_name)
			csv_find_replace_column( "Admin"												, "Administration"				, department_column )
			csv_find_replace_column( "Commerce"											, "Commerce"					, department_column )
			csv_find_replace_column( "EnvCon"												, "Environ Conservation"			, department_column )
			csv_find_replace_column( "Gov"												, "Governor"					, department_column )
			csv_find_replace_column( "H&SS"												, "Health & Social Svcs"			, department_column )
			csv_find_replace_column( "DOH"												, "Health"					, department_column )
			csv_find_replace_column( "Labor"												, "Labor & Workforce"			, department_column )
			csv_find_replace_column( "M&VA"												, "Military & Veterans Affairs"	, department_column )
			csv_find_replace_column( "NatRes"												, "Natural Resources"			, department_column )
			csv_find_replace_column( "Rev"												, "Revenue"					, department_column )
			csv_find_replace_column( "Trans"												, "Transportation"				, department_column )
			csv_find_replace_column( "PubSaf"												, "Public Safety"				, department_column )
			csv_find_replace_column( "FishGm"												, "Fish & Game"				, department_column )
			csv_find_replace_column( "Courts"												, "Judiciary"					, department_column )
			csv_find_replace_column( "Correct"												, "Corrections"				, department_column )
			; Capital Cleanup for statewide, FIND -> REPLACE (replace with standardized ABS name, department_list.abs_name)
			csv_find_replace_column( "Department of Administration"							, "Administration"				, department_column )
			csv_find_replace_column( "Department of Commerce, Community, and Economic Development"	, "Commerce"                       , department_column )
			csv_find_replace_column( "Department of Environmental Conservation"					, "Environ Conservation"           , department_column )
			csv_find_replace_column( "Office of the Governor"									, "Governor"                       , department_column )
			csv_find_replace_column( "Department of Health and Social Services"					, "Health & Social Svcs"           , department_column )
			csv_find_replace_column( "Department of Health"									, "Health"					, department_column )
			csv_find_replace_column( "Department of Labor and Workforce Development"				, "Labor & Workforce"              , department_column )
			csv_find_replace_column( "Department of Military and Veterans Affairs"				, "Military & Veterans Affairs"    , department_column )
			csv_find_replace_column( "Department of Natural Resources"							, "Natural Resources"              , department_column )
			csv_find_replace_column( "Department of Revenue"									, "Revenue"                        , department_column )
			csv_find_replace_column( "Department of Transportation/Public Facilities"				, "Transportation"                 , department_column )
			csv_find_replace_column( "Department of Public Safety"								, "Public Safety"                  , department_column )
			csv_find_replace_column( "Department of Fish and Game"								, "Fish & Game"                    , department_column )
			csv_find_replace_column( "Department of Corrections"								, "Corrections"                    , department_column )
		}
		
		;Fish & Game fix, leave this line below capital flag section
		csv_find_replace_column( "Fish and Game", "Fish & Game", department_column)
		
		;DOT&PF Component Cleanup
		csv_find_replace("Highways, Aviation and Faciliti", "Highways, Aviation & Facilities")
		csv_find_replace("Design, Engineering and Constru", "Design, Engineering & Construction")
		
		current_csv_row++
		
	}
	
	progress_subtext .= "Saving clean data..." 
	Progress, , % progress_subtext, , % progress_title
	
	cleaned_csv_file := csv_directory "\source\cleaned_" A_Now ".txt"
	CSV_Save(cleaned_csv_file, "sankey_csv_identifier", true) 
	
	FileRead, temp_cleaned_csv_file, % cleaned_csv_file
	FileDelete, % cleaned_csv_file
	temp_cleaned_csv_file := StrReplace( temp_cleaned_csv_file, """", "")
	FileAppend, % temp_cleaned_csv_file, % cleaned_csv_file
	
	progress_subtext .= "Cleaning DONE!" 
	Progress, , % progress_subtext, , % progress_title
	
}