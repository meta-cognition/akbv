/*
Dom's Sankey Object Stucture:

sankey_object
		.links[i] ; array
		|	.link_source
		|	.link_target
		|	.link_value 
		|	.link_label 
		|	.link_color 
		.nodes{} ; object
		|	.columns[i] ; array
			|	.rows[i] ; array
				|	.node_name
				|	.node_rbg_color
				|	.node_id
				|	.node_total
					.node_meta
		|	.all[i] ; array
			|	.node_name
			|	.node_rbg_color
			|	.node_id
		.hyperlink_ids[i] ;
		|	.id
		|	.link_identifier_text
*/