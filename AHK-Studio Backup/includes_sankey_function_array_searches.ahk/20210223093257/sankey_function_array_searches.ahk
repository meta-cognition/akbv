; sankey_function_array_searches.ahk
HasNodeId(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value = needle)
			return true
	return false
}

HasVal(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value = needle)
			return true
	return false
}

HasHyperLinkVal(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value.id = needle)
			return true
	return false
}

NodeRowNumber(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value.node_name = needle)
			return index
	return false
}

NodeID(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value.node_name = needle)
			return value.node_id
	return false
}

LinkColor(needle, haystack) {
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value.link_label = needle)
			return value.link_color
	return "rgba(0,0,96,0.2)"
}

NodeColor(needle, haystack) {
	global abs_department_name
	if !(IsObject(haystack)) || (haystack.Length() = 0)
		return false
	for index, value in haystack
		if (value.node_label = needle AND value.node_department = abs_department_name)
			return value.node_color
	for index, value in haystack
		if (value.node_label = needle)
			return value.node_color
	return "rgb(120,120,120)"
}