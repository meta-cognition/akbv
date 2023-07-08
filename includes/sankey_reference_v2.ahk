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

[] links for project files. 
[] verify amounts. 
[] automatic color iteration with pallette.
[] remove sum_appropriations logic from build nodes
[] remove 1328 export
[] document fund exports from abs.
[] make select new files a button on gui, not automatic ask.


https://www.sqlitetutorial.net/sqlite-group-by/



*/