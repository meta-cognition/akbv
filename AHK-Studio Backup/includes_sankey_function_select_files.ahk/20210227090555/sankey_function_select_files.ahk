previous_input_files := A_ScriptDir "\previous_input_files.save"
select_new_files()
{
	global
	; SELECT INPUT FILES, EXPORTS FROM ABS
	FileSelectFile, sankey_csv_source,, % A_ScriptDir "\abs exports\", Please Select an Operating File`, From ABS "Export Component Detail (1512)",*.txt
	FileSelectFile, input_file_1,, % A_ScriptDir "\abs exports\", From ABS "Export Project Summary (UGF/DGF/Other/Fed) (1328)",*.txt
	FileSelectFile, input_file_2,, % A_ScriptDir "\abs exports\", From ABS "Export Project Information (Appropriations with Allocations) (272)",*.txt
	FileDelete, % previous_input_files
	FileAppend, % sankey_csv_source, % previous_input_files rn
	FileAppend, % input_file_1, % previous_input_files rn
	FileAppend, % input_file_2,	% previous_input_files rn
}
use_files_from_last_time()
{
	global	
	IfNotExist, % previous_input_files
	{
		select_new_files()
		return
	}
	FileReadLine, sankey_csv_source, % previous_input_files, 1
	FileReadLine, input_file_1, % previous_input_files, 2
	FileReadLine, input_file_2,	% previous_input_files, 3
}