/*
Dom's Sankey Object Stucture for v2:

sankey_object
		.links[i] ; array
		|	.link_source
		|	.link_target
		|	.link_value 
		|	.link_label 
		|	.link_color 
		.nodes{} ; object
		|	.columns[i] ; array
			|	.column_name
			|	.rows[i] ; array
				|	.node_name
				|	.node_rbg_color
				|	.node_id
				|	.node_total
				|	.node_meta
		|	.all[i] ; array
			|	.node_name
			|	.node_rbg_color
			|	.node_id
		.hyperlink_ids[i] ;
		|	.id
		|	.link_identifier_text

		

To Do: 

[] add view names.
[] links for project files. 
[] automatic color iteration with pallette.
[] document fund exports from abs.
[] make select new files a button on gui, not automatic ask.
[] make node_color function aware of fund_group color mismatch with line_type of expenditure, position.
[] add dump_sql to all db error traps.

[x] verify amounts. 2023.07.08
[x] remove sum_appropriations logic from build nodes 2023.07.08
[x] remove 1328 export 2023.07.08

https://www.sqlitetutorial.net/sqlite-group-by/



*/ 