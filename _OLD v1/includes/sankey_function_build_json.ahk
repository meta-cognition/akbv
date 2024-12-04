build_json()
{
	global
	json_link_source := "source : ["
	json_link_target := "target : ["
	json_link_value := "value : ["
	json_link_label := "label : ["
	json_link_color := "color : ["


	for index, value in sankey_object.links
	{
		json_link_source .= """" . sankey_object.links[index].link_source . """, " 
		json_link_target .= """" . sankey_object.links[index].link_target . """, " 
		json_link_value .= """" . sankey_object.links[index].link_value . """, " 
		json_link_label .= """" . sankey_object.links[index].link_label . """, " 
		json_link_color .= """" . sankey_object.links[index].link_color . """, " 
	}

	json_link_source .= "]," 
	json_link_target .= "],"
	json_link_value .= "],"
	json_link_label .= "]," 
	json_link_color .= "],"
	
}