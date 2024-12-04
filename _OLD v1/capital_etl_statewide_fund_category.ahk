#NoEnv  						; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  						; Enable warnings to assist with detecting common errors.
SendMode Input  				; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  	; Ensures a consistent starting directory.
SetBatchLines, -1				; run as fast as possible
#SingleInstance, Force			; single instance only

;=======================================================================|
#Include includes\csv.ahk												; see file, add byref to csv load to load file once
#Include includes\obj2str.ahk											; Obj2Str(obj), use https://beautifier.io/ to format output.
;=======================================================================|

department_column				:= 3	; e.g. Transportation (category name)

fund_column_min					:= 10	; e.g. 1004 GF
fund_column_max					:= 13	; e.g. Expenditure/Reveneu

;1/SCENARIO_ID	2/SCENARIO_NAME	3/DEPT	4/PROJ_ORDER	5/REFNUM	6/ALAP	7/PROJ_TITLE	8/PROJ_CAT		9/PROJ_TYPE		10/UGF_AMOUNT		11/DGF_AMOUNT		12/O_AMOUNT		13/F_AMOUNT	14/PROJ_TOTAL


sankey_csv_source := A_Args[1]
FileRead, sankey_csv_ramfile, % sankey_csv_source

CSV_Load(sankey_csv_ramfile,"sankey_csv_identifier", A_TAB)
sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 

scenario_title := CSV_ReadCell("sankey_csv_identifier", 2, 2) " (" CSV_ReadCell("sankey_csv_identifier", 2, 1) ")"

rn := "`r`n"
;			1					2				 3				   4				 5				 6				  7				   8				9				  10				11					12				  13				14					15							16		
new_data := "REPORT_SORT" A_Tab "DEPT_NUM" A_Tab "DEPT_SORT" A_Tab "DEPT_NAME" A_Tab "RDU_NUM" A_Tab "RDU_SORT" A_Tab "RDU_NAME" A_Tab "COMP_NUM" A_Tab "COMP_SORT" A_Tab "COMP_NAME" A_Tab "REPORT_LINE" A_Tab "LINE_TYPE" A_Tab "FUND_CODE" A_Tab "FUND_GROUP" A_Tab "DUPLICATED_INDICATOR" A_Tab "SCEN1_AMOUNT" A_Tab "SCEN2_AMOUNT" A_Tab "SCEN3_AMOUNT" A_Tab "SCEN4_AMOUNT" A_Tab "SCEN5_AMOUNT" A_Tab "SCEN6_AMOUNT" A_Tab "SCEN7_AMOUNT" A_Tab "SCEN8_AMOUNT" A_Tab "SCEN9_AMOUNT" A_Tab "SCEN10_AMOUNT" rn
new_data .=  A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab "SCEN1_AMOUNT=" scenario_title A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab  A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab rn
current_row = 2
loop 
{
    this_row_department 				:= CSV_ReadCell("sankey_csv_identifier", current_row, department_column)
    this_fund_column := fund_column_min
    loop
    { 
    
        this_fund := CSV_ReadCell("sankey_csv_identifier", 1, this_fund_column)
        this_value := CSV_ReadCell("sankey_csv_identifier", current_row, this_fund_column)
        this_value := round( this_value / 1000 ,  1 )
        if ( this_value > 0 )
        {
            new_data .= "" A_Tab "" A_Tab "" A_Tab this_row_department A_Tab "" A_Tab "" A_Tab "" A_Tab "" A_Tab "" A_Tab "" A_Tab ""  A_Tab "Revenue" A_Tab "" A_Tab this_fund A_Tab "" A_Tab this_value A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab A_Tab  rn
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