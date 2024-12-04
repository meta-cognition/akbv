previous_input_files := A_ScriptDir "\previous_input_files.save"
select_new_files()
{
	global
	; SELECT INPUT FILES, EXPORTS FROM ABS
	FileSelectFile, sankey_csv_source,, % A_ScriptDir "\abs exports\", Please Select an Operating File`, From ABS "Export Component Detail (1512)",*.txt
	if (sankey_csv_source = "")
		ExitApp
	FileSelectFile, input_file_1,, % A_ScriptDir "\abs exports\", From ABS "Export Project Summary (UGF/DGF/Other/Fed) (1328)",*.txt
	if (input_file_1 = "")
		ExitApp
	FileSelectFile, input_file_2,, % A_ScriptDir "\abs exports\", From ABS "Export Project Information (Appropriations with Allocations) (272)",*.txt ;*[sankey_builder]
	if (input_file_2 = "")
		ExitApp
	FileDelete, % previous_input_files
	FileAppend, % sankey_csv_source rn, % previous_input_files
	FileAppend, % input_file_1 rn, % previous_input_files
	FileAppend, % input_file_2 rn,% previous_input_files 
}
use_files_from_last_time()
{
	global	
	IfNotExist, % previous_input_files
	{
		insist_new_files()
		return
	}
	FileReadLine, sankey_csv_source, % previous_input_files, 1
	FileReadLine, input_file_1, % previous_input_files, 2
	FileReadLine, input_file_2,	% previous_input_files, 3
	If ( !FileExist(sankey_csv_source) OR !FileExist(input_file_1) OR !FileExist(input_file_2) )
	{
		insist_new_files()
		return
	}
}
insist_new_files()
{
	MsgBox Unable to use files, please select new files.
	select_new_files()
	return
}