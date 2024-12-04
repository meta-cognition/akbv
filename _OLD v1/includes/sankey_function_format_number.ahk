format_to_readable(value)
{
	global
	i=0
	readable_value =
	if (format_mode = "dollars")
	{
		loop % StrLen( round(value, 1) )
		{
			next_character_in_value := substr( round( value, 1), ( StrLen( round( value, 1 ) ) - i ), 1 )
			if ( i = 5 && next_character_in_value != "-" )
				readable_value := "," . readable_value
			if ( i = 8 && next_character_in_value != "-" )
				readable_value := "," . readable_value
			if ( i = 11 && next_character_in_value != "-" )
				readable_value := "," . readable_value
			if ( i = 14 && next_character_in_value != "-" )
				readable_value := "," . readable_value
					
			readable_value := substr( round( value, 1), ( StrLen( round( value, 1 ) ) - i ), 1 ) . readable_value
				
			i++
		}
		return "$" . readable_value
	}
	else if (format_mode = "positions")
	{
		loop % StrLen(round(value))
		{
			if i = 3
				readable_value := "," . readable_value
			if i = 6
				readable_value := "," . readable_value
			if i = 9
				readable_value := "," . readable_value
			if i = 13
				readable_value := "," . readable_value
					
			readable_value := substr( round( value ), ( StrLen( round( value ) ) - i ), 1 ) . readable_value
				
			i++
		}
		return readable_value
	}
	else
	{
		msgbox Error in format_to_readable(value), format_mode not recognized: %format_mode%
	}
}