InitializeDepartments()
{
	;This is the order they will appear in the index.
	global
	department_list := []
	department_list.push({abs_name: "Governor"						, readable_name:  "Office of the Governor"                                      })
	department_list.push({abs_name: "Administration"				, readable_name:  "Department of Administration"                                })
	department_list.push({abs_name: "Law"							, readable_name:  "Department of Law"                                           })
	department_list.push({abs_name: "Revenue"						, readable_name:  "Department of Revenue"                                       })
	department_list.push({abs_name: "Educ & Early Devel"			, readable_name:  "Department of Education & Early Development"  				})
	department_list.push({abs_name: "Branch-wide Appropriations"	, readable_name:  "Branch-wide Appropriations"           						})
	;department_list.push({abs_name: "Health & Social Services"		, readable_name:  "Department of Health & Social Services"                      })
	department_list.push({abs_name: "Health"          				, readable_name:  "Department of Health"										})
	department_list.push({abs_name: "Family & Community Services"  	, readable_name:  "Department of Family & Community Services"					})
	department_list.push({abs_name: "Labor & Workforce"				, readable_name:  "Department of Labor & Workforce Development"                 })
	department_list.push({abs_name: "Commerce"						, readable_name:  "Department of Commerce, Community, and Economic Development" })
	department_list.push({abs_name: "Military & Veterans Affairs"	, readable_name:  "Department of Military & Veterans Affairs"                   })
	department_list.push({abs_name: "Natural Resources"				, readable_name:  "Department of Natural Resources"                             })
	department_list.push({abs_name: "Fish & Game"					, readable_name:  "Department of Fish & Game"                                   })
	department_list.push({abs_name: "Public Safety"					, readable_name:  "Department of Public Safety"                                 })
	department_list.push({abs_name: "Environ Conservation"			, readable_name:  "Department of Environmental Conservation"                    })
	department_list.push({abs_name: "Corrections"					, readable_name:  "Department of Corrections"                                   })
	department_list.push({abs_name: "Transportation"				, readable_name:  "Department of Transportation & Public Facilities"            })
	department_list.push({abs_name: "Branch-wide Appropriations"	, readable_name:  "Branch-wide Appropriations"           						})
	department_list.push({abs_name: "Legislature"					, readable_name:  "Legislature"                                                 })
	department_list.push({abs_name: "Debt Service"					, readable_name:  "Debt Service"                                                })
	department_list.push({abs_name: "Judiciary"						, readable_name:  "Judiciary"                                                   })
	department_list.push({abs_name: "University of Alaska"			, readable_name:  "University of Alaska"                                        })
	department_list.push({abs_name: "Fund Capitalization"			, readable_name:  "Fund Capitalization"                                         })
	department_list.push({abs_name: "State Retirement Payments"		, readable_name:  "State Retirement Payments"                                   })
	department_list.push({abs_name: "Special Appropriations"		, readable_name:  "Special Appropriations"                                      })
	department_list.push({abs_name: "Fund Transfers"				, readable_name:  "Fund Transfers"                                              })
	department_list.push({abs_name: "Permanent Fund"				, readable_name:  "Permanent Fund Dividend"                                     })
	
	; Capital cleanup converts those names to these abs_names.... above
	
	for key, department_list_object in department_list
	{
		department_list_object.folder_name := StrReplace( StrReplace( Format( "{:L}", department_list_object.abs_name ), A_Space, "-"), "&", "and" )
	}
}