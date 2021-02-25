build_html_menu()
{
    global
    FileRead, html_file, %A_ScriptDir%/template/menu-template.html
    StringReplace, html_file, html_file, @@@UID@@@, % this_build_uid, All
    parent_levels_string := ""
    loop % parent_levels 
    {
        parent_levels_string .= "../"
    }
    StringReplace, html_file, html_file, @@@PLOTLYSOURCE@@@, % parent_levels_string . plotly_source, All
    StringReplace, html_file, html_file, @@@HTMLTITLE@@@, % StrReplace(this_title, " <br />"), All
    StringReplace, html_file, html_file, @@@MENU-HTML@@@,  % menu_html All
    FileDelete, % this_output_file
    FileAppend, % html_file,  % this_output_file
    sankey_object.links := []
}

