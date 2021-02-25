FileRead, html_ramfile, %A_ScriptDir%/template/template.html

build_html()
{
	global
	html_file := html_ramfile
	StringReplace, html_file, html_file, @@@UID@@@, % this_build_uid, All
	parent_levels_string := ""
	loop % parent_levels 
	{
		parent_levels_string .= "../"
	}
	StringReplace, html_file, html_file, @@@PLOTLYSOURCE@@@ , % parent_levels_string . plotly_source    , All
	StringReplace, html_file, html_file, @@@HTMLTITLE@@@    , % StrReplace(this_title, " <br />")       , All
	StringReplace, html_file, html_file, @@@TITLE@@@        , % this_title                              , All
	StringReplace, html_file, html_file, @@@WIDTH@@@        , % this_width                              , All
	StringReplace, html_file, html_file, @@@HEIGHT@@@       , % this_height                             , All
	StringReplace, html_file, html_file, @@@SMALLHEIGHT@@@  , % this_small_height                       , All
	StringReplace, html_file, html_file, @@@HEIGHT@@@       , % this__small_height                      , All
	StringReplace, html_file, html_file, @@@NODELABEL@@@    , % json_node_label
	StringReplace, html_file, html_file, @@@NODECOLOR@@@    , % json_node_color
	StringReplace, html_file, html_file, @@@NODEMETA@@@     , % json_node_meta
	StringReplace, html_file, html_file, @@@NODEX@@@        , % json_node_x
	StringReplace, html_file, html_file, @@@NODEY@@@        , % json_node_y
	StringReplace, html_file, html_file, @@@LINKSOURCE@@@   , % json_link_source
	StringReplace, html_file, html_file, @@@LINKTARGET@@@   , % json_link_target
	StringReplace, html_file, html_file, @@@LINKVALUE@@@    , % json_link_value
	StringReplace, html_file, html_file, @@@LINKLABEL@@@    , % json_link_label
	StringReplace, html_file, html_file, @@@LINKCOLOR@@@    , % json_link_color
	StringReplace, html_file, html_file, @@@NODEJSCURSOR@@@ , % javascript_hovers
	StringReplace, html_file, html_file, @@@NODEJSLINK@@@   , % javascript_links
	StringReplace, html_file, html_file, @@@VALUEFORMAT@@@  , % json_value_format
	if (show_values_in_labels = true )
	{
		javascript_node_hover_template := "hovertemplate: ""%{label}<extra></extra>"","
		StringReplace, html_file, html_file, @@@NODEHOVERTEMPLATE@@@,  % javascript_node_hover_template
	}
	else {
		javascript_node_hover_template := "hovertemplate: ""%{label}, %{value}<extra></extra>"","
		StringReplace, html_file, html_file, @@@NODEHOVERTEMPLATE@@@,  % javascript_node_hover_template
	}
	if !InStr(this_output_file, "plot-pcn.html")
	{
		StringReplace, html_file, html_file, @@@LEGENDHTML@@@ 	, % html_color_legend
		StringReplace, html_file, html_file, @@@UGFCOLOR@@@	, % NodeColor("Unrestricted General Funds", node_color_list[1])
		StringReplace, html_file, html_file, @@@DGFCOLOR@@@	, % NodeColor("Designated General Funds", node_color_list[1])
		StringReplace, html_file, html_file, @@@OTHERCOLOR@@@	, % NodeColor("Other Funds", node_color_list[1])
		StringReplace, html_file, html_file, @@@FEDCOLOR@@@	, % NodeColor("Federal Funds", node_color_list[1])
	}
	else
	{
		StringReplace, html_file, html_file, @@@LEGENDHTML@@@ 	, % ""
	}
	FileDelete, % this_output_file
	FileAppend, % html_file,  % this_output_file
	sankey_object.links := []
}

html_color_legend =
(
<div class='plot-legend'>
	<!-- div class='legend-title'>Fund Types</div> -->
		<div class='legend-scale'>
			<ul class='legend-labels'>
				<li><span style='background:@@@UGFCOLOR@@@;'></span>Unrestricted General Funds (UGF)</li>
				<li><span style='background:@@@DGFCOLOR@@@;'></span>Designated General Funds (DGF)</li>
				<li><span style='background:@@@OTHERCOLOR@@@;'></span>Other (O)</li>
				<li><span style='background:@@@FEDCOLOR@@@;'></span>Federal (Fed)</li>
				<li><div style="margin:auto">$>$ in Thousands (1,000)</div>/li>
			</ul>
		</div>
<!-- <div class='legend-source'>Source: <a href="#link to source">Office of Management & Budget</a></div> -->
</div>`r`n
)
