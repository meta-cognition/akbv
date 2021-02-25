build_javascript()
{
	global
	
	javascript_links := ""
	javascript_hovers := ""
	
	if ( use_parent != false )
	{
		directory_specifier := "../"
	}
	else
	{
		directory_specifier := "./"
	}
	
	4_tabs := A_Tab . A_Tab . A_Tab . A_Tab 
	5_tabs := A_Tab . A_Tab . A_Tab . A_Tab . A_Tab 
	
	for key, linkable_node in sankey_object.hyperlink_ids
	{
		;msgbox % key " / " linkable_node_id
		javascript_links .= "case " . linkable_node.id . ":" . "`r`n"
		if InStr(linkable_node.link_identifier_text, "https://")
		{
			javascript_links .= 5_tabs . "window.open('" linkable_node.link_identifier_text "'); `r`n"
		}
		else if (this_plot_name = "plot-overview")
		{
			javascript_links .= 5_tabs . "window.location.href = 'plot.html'; `r`n"
		}
		else if InStr(this_plot_name, "statewide-plot")
		{
			javascript_links .= 5_tabs . "window.open('" linkable_node.link_identifier_text "'); `r`n"
		}
		else
		{
			javascript_links .= 5_tabs . "window.location.href = '" . linkable_node.link_identifier_text . "/" . this_plot_name . ".html';" . "`r`n"
		}
		javascript_links .= 5_tabs . "break;" . "`r`n"
		javascript_links .= 4_tabs 
		
		javascript_hovers .= "case " . linkable_node.id . ":" . "`r`n"
		javascript_hovers .= 5_tabs . "data.event.srcElement.style.cursor = 'pointer';" . "`r`n"
		javascript_hovers .= 5_tabs . "break;" . "`r`n"
		javascript_hovers .= 4_tabs 
	}
	
	sankey_object.hyperlink_ids := ""
	sankey_object.hyperlink_ids := []
}
