; This file is depricated and for reference only.
; I'm not entirely sure what I was doing with this but this was likely for single department correction,
; where as the new version is able to process statewide exports. -DMP 1/8/2021

#NoEnv  						; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  						; Enable warnings to assist with detecting common errors.
SendMode Input  				; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  	; Ensures a consistent starting directory.
SetBatchLines, -1				; run as fast as possible
#SingleInstance, Force			; single instance only

#Include csv.ahk											; see file, add byref to csv load to load file once

department_column				:= 15	; e.g. Transportation (category name)
entry_type_column 				:= 9 	; Appropriation or Allocation
reference_number_column			:= 4
parent_reference_number_column	:= 21
project_title_column			:= 10	; 
fund_column_min					:= 69	; e.g. 1004 GF
fund_column_max					:= 96	; e.g. Expenditure/Reveneu


FileSelectFile, sankey_csv_source,, % A_ScriptDir "\abs exports\",,*.csv
FileRead, sankey_csv_ramfile, % sankey_csv_source

CSV_Load(sankey_csv_ramfile,"sankey_csv_identifier")
sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 

rn := "`r`n"
new_data := "REPORT_SORT, DEPT_NUM, DEPT_SORT, DEPT_NAME, RDU_NUM, RDU_SORT, RDU_NAME, COMP_NUM, COMP_SORT, COMP_NAME, REPORT_LINE, LINE_TYPE, FUND_CODE, FUND_GROUP, DUPLICATED_INDICATOR, SCEN1_AMOUNT,SCEN2_AMOUNT,SCEN3_AMOUNT,SCEN4_AMOUNT,SCEN5_AMOUNT,SCEN6_AMOUNT,SCEN7_AMOUNT,SCEN8_AMOUNT,SCEN9_AMOUNT,SCEN10_AMOUNT" rn

current_row = 2
loop 
{
	this_row_department 				:= CSV_ReadCell("sankey_csv_identifier", current_row, department_column)
	this_row_reference__number			:= CSV_ReadCell("sankey_csv_identifier", current_row, reference_number_column)
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
		new_data .= ",,,""" this_row_department """,,,""" this_row_appropriation_name  """,,,""" this_row_allocation_name """,""" this_fund """,""" this_row_entry_type """,,,,""" round(this_value / 1000, 1) """,,,,,,,," rn
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

FileAppend, % new_data, % "capital_export_" A_Now ".csv"
   
ExitApp