#NoEnv  						; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  						; Enable warnings to assist with detecting common errors.
SendMode Input  				; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  	; Ensures a consistent starting directory.
SetBatchLines, -1				; run as fast as possible
#SingleInstance, Force			; single instance only

;=======================================================================|
#Include includes\csv.ahk									; see file, add byref to csv load to load file once
#Include includes\obj2str.ahk									; Obj2Str(obj), use https://beautifier.io/ to format output.
#Include includes\sankey_function_fund_type.ahk		
;=======================================================================|

department_column				:= 6		; e.g. Transportation (category name)
entry_type_column 				:= 9 	; Appropriation or Allocation
reference_number_column			:= 4
parent_reference_number_column	:= 21
project_title_column			:= 10	; 
fund_column_min				:= 69	; CHECK THE ABS EXPORT, THESE CHANGE
fund_column_max				:= 89	; CHECK THE ABS EXPORT, THESE CHANGE
fund_column                 		:= 11

rn := "`r`n"

sankey_csv_source := A_Args[1]
FileRead, sankey_csv_ramfile, % sankey_csv_source

CSV_Load(sankey_csv_ramfile,"sankey_csv_identifier", A_TAB)
sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 

scenario_title := CSV_ReadCell("sankey_csv_identifier", 2, 2) " (" CSV_ReadCell("sankey_csv_identifier", 2, 1) ")"

newline_marker := CSV_ReadCell("sankey_csv_identifier", 2, 1)

sankey_csv_ramfile := StrReplace(sankey_csv_ramfile, rn newline_marker, "@@@ BREAK-NEWLINE @@@")
sankey_csv_ramfile := StrReplace(sankey_csv_ramfile, rn, "")
sankey_csv_ramfile := StrReplace(sankey_csv_ramfile,  "@@@ BREAK-NEWLINE @@@", rn newline_marker)

CSV_Load(sankey_csv_ramfile,"sankey_csv_identifier", A_TAB)
sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 

new_data := "REPORT_SORT" A_Tab "DEPT_NUM" A_Tab "DEPT_SORT" A_Tab "DEPT_NAME" A_Tab "RDU_NUM" A_Tab "RDU_SORT" A_Tab "RDU_NAME" A_Tab "COMP_NUM" A_Tab "COMP_SORT" A_Tab "COMP_NAME" A_Tab "REPORT_LINE" A_Tab "LINE_TYPE" A_Tab "FUND_CODE" A_Tab "FUND_GROUP" A_Tab "DUPLICATED_INDICATOR" A_Tab "SCEN1_AMOUNT" A_Tab "SCEN2_AMOUNT" A_Tab "SCEN3_AMOUNT" A_Tab "SCEN4_AMOUNT" A_Tab "SCEN5_AMOUNT" A_Tab "SCEN6_AMOUNT" A_Tab "SCEN7_AMOUNT" A_Tab "SCEN8_AMOUNT" A_Tab "SCEN9_AMOUNT" A_Tab "SCEN10_AMOUNT" rn
new_data .=  A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab "SCEN1_AMOUNT=" scenario_title A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab  A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab rn
current_row = 2
loop 
{
	this_row_department 				:= CSV_ReadCell("sankey_csv_identifier", current_row, department_column)
	this_row_entry_type					:= CSV_ReadCell("sankey_csv_identifier", current_row, entry_type_column)
	if ( InStr(this_row_entry_type, "AP", true) )
	{
		this_row_appropriation_name			:= CSV_ReadCell("sankey_csv_identifier", current_row, project_title_column)
		this_row_allocation_name			:= ""
		this_row_parent_reference_number	:= ""
	} else
	{
		this_row_allocation_name			:= CSV_ReadCell("sankey_csv_identifier", current_row, project_title_column)
		this_row_parent_reference_number	:= CSV_ReadCell("sankey_csv_identifier", current_row, parent_reference_number_column)
		parent_row							:= CSV_SearchColumn("sankey_csv_identifier", this_row_parent_reference_number, reference_number_column)
		this_row_appropriation_name			:= CSV_ReadCell("sankey_csv_identifier", parent_row, project_title_column)
	}
	this_fund_column := fund_column_min
	loop
	{ 
	
		this_fund := CSV_ReadCell("sankey_csv_identifier", 1, this_fund_column)
		this_value := CSV_ReadCell("sankey_csv_identifier", current_row, this_fund_column)
		this_value := round( this_value / 1000 ,  1 )
		/* 
			if you're having any trouble check the column variables, the ABS reports are shifty.
		*/
		if ( this_value > 0 )
		{
			new_data .= "" A_Tab "" A_Tab "" A_Tab this_row_department A_Tab "" A_Tab "" A_Tab this_row_appropriation_name  A_Tab "" A_Tab "" A_Tab this_row_allocation_name A_Tab this_fund A_Tab this_row_entry_type A_Tab A_Tab A_Tab A_Tab this_value A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab  rn
		}
		if (this_fund_column = fund_column_max)
		{
			break
		}
		this_fund_column++
	}
	if (current_row = sankey_csv_total_rows) 
	{
		break
	}
	current_row++
}

FileAppend, % new_data, % A_Args[2]
   
ExitApp