FileRead, menu_html_ramfile, %A_ScriptDir%/resources/html_templates/menu-template.html

build_html_menu()
{
    global
    menu_html_file := menu_html_ramfile
    StringReplace, menu_html_file, menu_html_file, @@@UID@@@, % this_build_uid, All
    parent_levels_string := ""
    loop % parent_levels 
    {
        parent_levels_string .= "../"
    }
    StringReplace, menu_html_file, menu_html_file, @@@PLOTLYSOURCE@@@, % parent_levels_string . plotly_source, All
    StringReplace, menu_html_file, menu_html_file, @@@HTMLTITLE@@@, % StrReplace(this_title, " <br />"), All
    StringReplace, menu_html_file, menu_html_file, @@@MENU-HTML@@@,  % menu_html All
    FileDelete, % this_output_file
    FileAppend, % menu_html_file,  % this_output_file
    sankey_object.links := []
}

