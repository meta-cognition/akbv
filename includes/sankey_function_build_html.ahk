build_html()
{
	global
	FileRead, html_file, %A_ScriptDir%/template/template.html
	
	StringReplace, html_file, html_file, @@@UID@@@, % this_build_uid, All
	
	parent_levels_string := ""
	loop % parent_levels 
	{
		parent_levels_string .= "../"
	}
	StringReplace, html_file, html_file, @@@PLOTLYSOURCE@@@, % parent_levels_string . plotly_source, All
	
	StringReplace, html_file, html_file, @@@TITLE@@@, % this_title, All
	StringReplace, html_file, html_file, @@@WIDTH@@@,  % this_width, All
	StringReplace, html_file, html_file, @@@HEIGHT@@@, % this_height, All
	StringReplace, html_file, html_file, @@@SMALLHEIGHT@@@, % this_small_height, All
	StringReplace, html_file, html_file, @@@HEIGHT@@@, % this__small_height, All

	StringReplace, html_file, html_file, @@@NODELABEL@@@, % json_node_label
	StringReplace, html_file, html_file, @@@NODECOLOR@@@, % json_node_color
	StringReplace, html_file, html_file, @@@NODEMETA@@@, % json_node_meta
	StringReplace, html_file, html_file, @@@NODEX@@@, % json_node_x
	StringReplace, html_file, html_file, @@@NODEY@@@, % json_node_y

	StringReplace, html_file, html_file, @@@LINKSOURCE@@@, % json_link_source
	StringReplace, html_file, html_file, @@@LINKTARGET@@@, % json_link_target
	StringReplace, html_file, html_file, @@@LINKVALUE@@@,  % json_link_value
	StringReplace, html_file, html_file, @@@LINKLABEL@@@,  % json_link_label
	StringReplace, html_file, html_file, @@@LINKCOLOR@@@,  % json_link_color
	
	StringReplace, html_file, html_file, @@@NODEJSCURSOR@@@,  % javascript_hovers
	StringReplace, html_file, html_file, @@@NODEJSLINK@@@,  % javascript_links

	StringReplace, html_file, html_file, @@@VALUEFORMAT@@@,  % json_value_format
	
	if (show_values_in_labels = true )
	{
		javascript_node_hover_template := "hovertemplate: ""%{label}<extra></extra>"","
		StringReplace, html_file, html_file, @@@NODEHOVERTEMPLATE@@@,  % javascript_node_hover_template
	}
	else {
		javascript_node_hover_template := "hovertemplate: ""%{label}, %{value}<extra></extra>"","
		StringReplace, html_file, html_file, @@@NODEHOVERTEMPLATE@@@,  % javascript_node_hover_template
	}

	FileDelete, % this_output_file
	FileAppend, % html_file,  % this_output_file
	
	sankey_object.links := []
	
}

