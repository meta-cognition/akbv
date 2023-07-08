; array_searches.ahk

; V2 function
sankey_object_column_number(column_name)
{
    global sankey_object
    for index, value in sankey_object.nodes.columns
	{
		if (value.column_name = column_name)
			return index
	}
}
; V2 function
sankey_object_node_id(column_name, node_name)
{
    global sankey_object
    for index, value in sankey_object.nodes.columns[sankey_object_column_number(column_name)].rows
    {
        if (value.node_name = node_name)
            return value.node_id
    }
    MsgBox('sankey_object_node_id: unable to provide a node id for "' node_name '" in "' column_name '"')
	FileAppend(ObjectToString(sankey_object, "`t"), "Error_" a_now ".txt",)
}
; V2 function
sankey_object_column_rows(column_name)
{
    global sankey_object
    for index, value in sankey_object.nodes.columns
	{
		if (value.column_name = column_name)
			return value.rows
	}
}
translate_fund_to_operating(cap_fund_search)
{
    global fund_translate
	if cap_fund_search = ""
		msgbox(A_ThisFunc 'search param cannot be blank')
    for index, value in fund_translate
	{
		if (value.capital = cap_fund_search)
			return value.operating
	}
	msgbox(A_ThisFunc ': could not translate fund, "' cap_fund_search '".')
	return cap_fund_search
}
HasNodeId(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value = needle)
			return true
	return false
}

HasVal(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value = needle)
			return true
	return false
}

; V1 Functions Below - Still used....
HasHyperLinkVal(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.id = needle)
			return true
	return false
}

NodeRowNumber(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.node_name = needle)
			return index
	return false
}

NodeID(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.node_name = needle)
			return value.node_id
	return false
}

LinkColor(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	for index, value in haystack
		if (value.link_label = needle)
			return value.link_color
	msgbox(A_ThisFunc ': no needle found: "' needle '"')
	return "rgba(0,0,96,0.2)"
}

NodeColor(needle, haystack) {
	global abs_department_name, this_plot_name
	
	if !(IsObject(haystack)) || (haystack.Length = 0)
		return false
	
	if (instr(this_plot_name, "overview"))
	{
		for index, value in haystack
		{
			if (value.node_label = needle)
				return value.node_color
		}
	}
	
	for index, value in haystack
	{
		if (HasProp(value, "node_department"))
        {
            if (value.node_label = needle AND value.node_department = abs_department_name)
			    return value.node_color
        }
	}
		
	for index, value in haystack
	{
		if (value.node_label = needle)
			return value.node_color
	}
		
	if (instr(this_plot_name, "capital"))
		return "rgb(160,0,0)"
	
	;msgbox(A_ThisFunc ': no needle found: "' needle '"')
	return "rgb(120,120,120)"
}