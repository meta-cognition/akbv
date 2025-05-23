cleanup_data(cleanup_capital_flag = false)
{
	global
	
	;progress_title := "function: cleanup_data()"
	;progress_subtext := "Converting data file...standby..." . "`r`n"
	;Progress, , % progress_subtext, , % progress_title
	
	;Sleep, 500
	;progress_subtext := "Loading CSV data..." . "`r`n"
	;Progress, , % progress_subtext, , % progress_title
	
	CSV_Load(sankey_csv_ramfile, "sankey_csv_identifier", A_Tab)
	
	this_scenario_name := CSV_ReadCell("sankey_csv_identifier", scenario_row, scenario_column)
	this_scenario_name := StrSplit(this_scenario_name, "=")
	this_scenario_name := this_scenario_name[2]
	
	CSV_DeleteRow("sankey_csv_identifier", scenario_row) 
	
	sankey_csv_total_rows := CSV_TotalRows("sankey_csv_identifier") 
	sankey_csv_total_columns := CSV_TotalCols("sankey_csv_identifier") 
	
	;progress_subtext := "Loading CSV data:" rn
	;progress_subtext .= "-> Cleaning data..." rn
	;Progress, , % progress_subtext, , % progress_title
	
	current_csv_row = 1
	Loop, % sankey_csv_total_rows 
	{        
		/* removed for performance
			progress_subtext := "Loading CSV data:" rn
			progress_subtext .= "-> Cleaning data... " current_csv_row "/" sankey_csv_total_rows rn
		;Progress, , % progress_subtext, , % progress_title
		*/
		
		csv_find_replace_column( "Line 71000"       , "Personal Services"               , fund_column )
		csv_find_replace_column( "Line 72000"       , "Travel"                          , fund_column )
		csv_find_replace_column( "Line 73000"       , "Contractual Services"            , fund_column )
		csv_find_replace_column( "Line 74000"       , "Commodities"                     , fund_column )
		csv_find_replace_column( "Line 75000"       , "Capital Outlay"                  , fund_column )
		csv_find_replace_column( "Line 76000"       , "Line 7600"                       , fund_column )
		csv_find_replace_column( "Line 77000"       , "Grants, Benefits"                , fund_column )
		csv_find_replace_column( "Line 78000"       , "Miscellaneous"                   , fund_column )
		csv_find_replace_column( "PPT"              , "Permanent Part-Time"             , fund_column )
		csv_find_replace_column( "PFT"              , "Permanent Full-Time"             , fund_column )
		csv_find_replace_column( "NP"               , "Non-Permanent"                   , fund_column )
		
		csv_find_replace_column( "DGF"              , "Designated General Funds"        , group_column)         ;DGF has to go first! Otherwise the line below matches.
		csv_find_replace_column( "UGF"              , "Unrestricted General Funds"      , group_column)
		csv_find_replace_column( "Other"            , "Other Funds"                     , group_column)
		csv_find_replace_column( "Fed"              , "Federal Funds"                   , group_column)
		
		csv_find_replace_column( "Military & Veterans' Affairs", "Military & Veterans Affairs", department_column )
		
		if (cleanup_capital_flag = true)
		{
			; Capital Department Name Cleanup for Fund Category, FIND -> REPLACE (replace with standardized ABS name, department_list.abs_name)
			csv_find_replace_column( "Admin"												, "Administration"				, department_column )
			csv_find_replace_column( "Commerce"											, "Commerce"					, department_column )
			csv_find_replace_column( "EnvCon"												, "Environ Conservation"			, department_column )
			csv_find_replace_column( "Gov"												, "Governor"					, department_column )
			;csv_find_replace_column( "H&SS"												, "Health & Social Services"		, department_column )
			csv_find_replace_column( "DOH"												, "Health"					, department_column )
			csv_find_replace_column( "FCS"												, "Family & Community Services"	, department_column )
			csv_find_replace_column( "Labor"												, "Labor & Workforce"			, department_column )
			csv_find_replace_column( "M&VA"												, "Military & Veterans Affairs"	, department_column )
			csv_find_replace_column( "NatRes"												, "Natural Resources"			, department_column )
			csv_find_replace_column( "Rev"												, "Revenue"					, department_column )
			csv_find_replace_column( "Trans"												, "Transportation"				, department_column )
			csv_find_replace_column( "PubSaf"												, "Public Safety"				, department_column )
			csv_find_replace_column( "FishGm"												, "Fish & Game"				, department_column )
			csv_find_replace_column( "Courts"												, "Judiciary"					, department_column )
			csv_find_replace_column( "Correct"												, "Corrections"				, department_column )
			csv_find_replace_column( "E&ED"												, "Educ & Early Devel"			, department_column )
			csv_find_replace_column( "Univ"												, "University of Alaska"			, department_column )
			
			; Capital Cleanup for statewide, FIND -> REPLACE (replace with standardized ABS name, department_list.abs_name)
			csv_find_replace_column( "Department of Administration"							, "Administration"				, department_column )
			csv_find_replace_column( "Department of Commerce, Community, and Economic Development"	, "Commerce"                       , department_column )
			csv_find_replace_column( "Department of Environmental Conservation"					, "Environ Conservation"           , department_column )
			csv_find_replace_column( "Office of the Governor"									, "Governor"                       , department_column )
			;csv_find_replace_column( "Department of Health & Social Services"					, "Health & Social Services"       , department_column )
			csv_find_replace_column( "Department of Health"									, "Health"					, department_column )
			csv_find_replace_column( "Department of Family and Community Services"				, "Family & Community Services"	, department_column )
			csv_find_replace_column( "Department of Labor and Workforce Development"				, "Labor & Workforce"              , department_column )
			csv_find_replace_column( "Department of Military and Veterans Affairs"				, "Military & Veterans Affairs"    , department_column )
			csv_find_replace_column( "Department of Natural Resources"							, "Natural Resources"              , department_column )
			csv_find_replace_column( "Department of Revenue"									, "Revenue"                        , department_column )
			csv_find_replace_column( "Department of Transportation/Public Facilities"				, "Transportation"                 , department_column )
			csv_find_replace_column( "Department of Public Safety"								, "Public Safety"                  , department_column )
			csv_find_replace_column( "Department of Fish and Game"								, "Fish & Game"                    , department_column )
			csv_find_replace_column( "Department of Corrections"								, "Corrections"                    , department_column )
			csv_find_replace_column( "Department of Education and Early Development"				, "Educ & Early Devel"             , department_column )
			
			; Capital Category Cleanup
			csv_find_replace_column( "DGF_AMOUNT"       , "Designated General Funds"        , group_column)         ;DGF has to go first! Otherwise the line below matches.
			csv_find_replace_column( "UGF_AMOUNT"       , "Unrestricted General Funds"      , group_column)
			csv_find_replace_column( "O_AMOUNT"         , "Other Funds"                     , group_column)
			csv_find_replace_column( "F_AMOUNT"         , "Federal Funds"                   , group_column)
			
			
			; Capital Fund Cleanup
			csv_find_replace_column("1230 AKCW Ad Fu","1230 Alaska Clean Water Administrative Fund", fund_column)
			csv_find_replace_column("1231 AKDW Ad Fu","1231 Alaska Drinking Water Administrative Fund", fund_column)
			csv_find_replace_column("1232 ISPF-I/A","1232 In-state Pipeline Fund Interagency", fund_column)
			csv_find_replace_column("1233 Muni Bonds","1233 Municipal Bond Bank Bonds", fund_column)
			csv_find_replace_column("1235 AGDC-LNG","1235 Alaska Liquefied Natural Gas Project Fund (AGDC-LNG)", fund_column)
			csv_find_replace_column("1236 AK LNG I/A","1236 Alaska Liquefied Natural Gas Project Fund I/A (AK LNG I/A)", fund_column)
			csv_find_replace_column("1238 VaccAssess","1238 Vaccine Assessment Account", fund_column)
			csv_find_replace_column("1237 VocSmBus","1237 Vocational Rehabilitation Small Bus. Enterprise Revolving Fd", fund_column)
			csv_find_replace_column("1241 GF/LNG","1241 General Fund/Liquefied Natural Gas", fund_column)
			csv_find_replace_column("1243 SBR","1243 Statutory Budget Reserve Fund", fund_column)
			csv_find_replace_column("1249 Motor Fuel","1249 Motor Fuel Tax Receipts", fund_column)
			csv_find_replace_column("1250 Maint Cap","1250 Maintenance and Capital Fund", fund_column)
			csv_find_replace_column("1253 STA Bonds","1253 Subject to Appropriation Bonds", fund_column)
			csv_find_replace_column("1254 MET Fund","1254 Marijuana Education and Treatment Fund", fund_column)
			csv_find_replace_column("1255 Invest","1255 Securities Investor Education and Training Fund", fund_column)
			csv_find_replace_column("1256 Ed Endow","1256 Education Endowment Fund", fund_column)
			csv_find_replace_column("1257 Div Raffle","1257 Dividend Raffle Fund", fund_column)
			csv_find_replace_column("1261 Shared Tax","1261 Shared Taxes", fund_column)
			csv_find_replace_column("1262 StatPFRoy","1262 Non-mandatory Royalty Deposits to the Permanent Fund", fund_column)
			csv_find_replace_column("1251 Non-UGF","1251 Non-UGF (Leg Fiscal Note System Only)", fund_column)
			csv_find_replace_column("1252 DGF Temp","1252 DGF Temp (Leg Fiscal Note System)", fund_column)
			csv_find_replace_column("1264 MET Alt","1264 MET Alt", fund_column)
			csv_find_replace_column("1265 COVID Fed","1265 Non-specific COVID Fed", fund_column)
			csv_find_replace_column("1268 MH Tr Res","1268 Mental Health Trust Reserve", fund_column)
			csv_find_replace_column("1267 FTA CRRSAA","1267 FTA CRRSAA Grant Funding", fund_column)
			csv_find_replace_column("1269 CSLFRF","1269 CSLFRF (Fed) Flexible ARP Funding", fund_column)
			csv_find_replace_column("1266 COVID UGF","1266 COVID UGF", fund_column)
			csv_find_replace_column("1270 FHWA CRRSA","1270 FHWA CRRSAA Fed", fund_column)
			csv_find_replace_column("1271 ARPA Rev R","1271 ARPA Revenue Replacement UGF", fund_column)
			csv_find_replace_column("1246 Recid Redu","1246 Recidivism Reduction Fund", fund_column)
			csv_find_replace_column("1247 Med Recov","1247 Medicaid Monetary Recoveries", fund_column)
			csv_find_replace_column("1248 ACHI Fund","1248 Alaska Comprehensive Health Insurance Fund", fund_column)
			csv_find_replace_column("1000 Restrtd GF","1000 Restricted General Fund", fund_column)
			csv_find_replace_column("1002 Fed Rcpts","1002 Federal Receipts", fund_column)
			csv_find_replace_column("1003 G/F Match","1003 General Fund Match", fund_column)
			csv_find_replace_column("1004 Gen Fund","1004 General Fund Receipts", fund_column)
			csv_find_replace_column("1005 GF/Prgm","1005 General Fund/Program Receipts", fund_column)
			csv_find_replace_column("1007 I/A Rcpts","1007 Interagency Receipts", fund_column)
			csv_find_replace_column("1010 UA/INT INC","1010 University of Alaska Interest Income", fund_column)
			csv_find_replace_column("1012 Rail Enrgy","1012 Railbelt Energy Fund", fund_column)
			csv_find_replace_column("1013 Alchl/Drug","1013 Alcoholism & Drug Abuse Revolving Loan", fund_column)
			csv_find_replace_column("1014 Donat Comm","1014 Donated Commodity/Handling Fee Account", fund_column)
			csv_find_replace_column("1015 UA/DFA SVC","1015 U/A Dormitory/Food/Auxiliary Service", fund_column)
			csv_find_replace_column("1016 Fed Incent","1016 CSSD Federal Incentive Payments", fund_column)
			csv_find_replace_column("1019 Reforest","1019 Reforestation Fund", fund_column)
			csv_find_replace_column("1021 Agric Loan","1021 Agricultural Loan Fund", fund_column)
			csv_find_replace_column("1024 Fish/Game","1024 Fish and Game Fund", fund_column)
			csv_find_replace_column("1026 Hwy Capitl","1026 Highways/Equipment Working Capital Fund", fund_column)
			csv_find_replace_column("1027 Int Airprt","1027 International Airport Revenue Fund", fund_column)
			csv_find_replace_column("1031 Sec Injury","1031 Second Injury Fund Reserve Account", fund_column)
			csv_find_replace_column("1034 Teach Ret","1034 Teachers Retirement System Fund", fund_column)
			csv_find_replace_column("1036 Cm Fish Ln","1036 Commercial Fishing Loan Fund", fund_column)
			csv_find_replace_column("1195 SnoMachReg","1195 Snow Machine Registration Receipts", fund_column)
			csv_find_replace_column("1037 GF/MH","1037 General Fund / Mental Health", fund_column)
			csv_find_replace_column("1038 UA/STF SVC","1038 U/A Student Tuition/Fees/Services", fund_column)
			csv_find_replace_column("1039 UA/ICR","1039 U/A Indirect Cost Recovery", fund_column)
			csv_find_replace_column("1040 Surety Fnd","1040 Real Estate Surety Fund", fund_column)
			csv_find_replace_column("1192 Mine Trust","1192 Mine Reclamation Trust Fund", fund_column)
			csv_find_replace_column("1042 Jud Retire","1042 Judicial Retirement System", fund_column)
			csv_find_replace_column("1044 Debt Ret","1044 AK Debt Retirement Fund", fund_column)
			csv_find_replace_column("1046 Stdnt Loan","1046 Student Revolving Loan Fund", fund_column)
			csv_find_replace_column("1048 Univ Rcpt","1048 University Restricted Receipts", fund_column)
			csv_find_replace_column("1050 PFD Fund","1050 Permanent Fund Dividend Fund", fund_column)
			csv_find_replace_column("1057 Small Bus","1057 Small Business Loan Fund", fund_column)
			csv_find_replace_column("1058 Trsm Loan","1058 Tourism Revolving Loan Fund", fund_column)
			csv_find_replace_column("1059 Corr. Ind.","1059 Correctional Industries Fund", fund_column)
			csv_find_replace_column("1060 OF(Pre'84)","1060 Other Funds (Pre-FY '84 Only)", fund_column)
			csv_find_replace_column("1061 CIP Rcpts","1061 Capital Improvement Project Receipts", fund_column)
			csv_find_replace_column("1063 NPR Fund","1063 National Petroleum Reserve Fund", fund_column)
			csv_find_replace_column("9003 Unkn DGF","9003 Unknown DGF Fund Source", fund_column)
			csv_find_replace_column("1067 Mining RLF","1067 Mining Revolving Loan Fund", fund_column)
			csv_find_replace_column("1068 Child Care","1068 Child Care Revolving Loan Fund", fund_column)
			csv_find_replace_column("1069 Hist Dist","1069 Historical District Revolving Loan Fund", fund_column)
			csv_find_replace_column("1070 Fish En Ln","1070 Fisheries Enhancement Revolving Loan Fund", fund_column)
			csv_find_replace_column("1071 Alt Energy","1071 Alternative Energy Revolving Loan Fund", fund_column)
			csv_find_replace_column("1072 Res Energy","1072 Residential Energy Conservation Loan Fund", fund_column)
			csv_find_replace_column("1074 Bulk Fuel","1074 Bulk Fuel Revolving Loan Fund", fund_column)
			csv_find_replace_column("1076 Marine Hwy","1076 Marine Highway System Fund", fund_column)
			csv_find_replace_column("1078 Sr Housing","1078 Senior Housing Loan Fund", fund_column)
			csv_find_replace_column("1081 Info Svc","1081 Information Services Fund", fund_column)
			csv_find_replace_column("1082 Vessel Rep","1082 Vessel Replacement Fund", fund_column)
			csv_find_replace_column("1086 SE Energy","1086 Southeast Energy Fund", fund_column)
			csv_find_replace_column("1088 UnInc Mtch","1088 Unincorporated Matching Grant Fund", fund_column)
			csv_find_replace_column("1089 Power Cost","1089 Power Cost Equalization Fund", fund_column)
			csv_find_replace_column("1090 4 Dam Pool","1090 Four Dam Pool Transfer Fund", fund_column)
			csv_find_replace_column("1091 GF/Desig","1091 General Funds - Designated", fund_column)
			csv_find_replace_column("1094 MHT Admin","1094 Mental Health Trust Administration", fund_column)
			csv_find_replace_column("1097 AETNA Res","1097 Group Health and Life Benefits Fund (AS 39.30.095)", fund_column)
			csv_find_replace_column("1098 ChildTrErn","1098 Children's Trust Earnings", fund_column)
			csv_find_replace_column("1099 ChildTrPrn","1099 Children's Trust Principal", fund_column)
			csv_find_replace_column("1100 ADWF","1100 Alaska Drinking Water Fund", fund_column)
			csv_find_replace_column("1103 AHFC Rcpts","1103 Alaska Housing Finance Corporation Receipts", fund_column)
			csv_find_replace_column("-1 Unknown GF","-1 Unknown GF", fund_column)
			csv_find_replace_column("1102 AIDEA Rcpt","1102 Alaska Industrial Development & Export Authority Receipts", fund_column)
			csv_find_replace_column("1104 MBB Rcpts","1104 Alaska Municipal Bond Bank Receipts", fund_column)
			csv_find_replace_column("1105 PFund Rcpt","1105 Alaska Permanent Fund Corporation Receipts", fund_column)
			csv_find_replace_column("1107 AEA Rcpts","1107 Alaska Energy Authority Corporate Receipts", fund_column)
			csv_find_replace_column("1108 Stat Desig","1108 Statutory Designated Program Receipts", fund_column)
			csv_find_replace_column("1110 APUC Rcpts","1110 Alaska Public Utility Commission", fund_column)
			csv_find_replace_column("1092 MHTAAR","1092 Mental Health Trust Authority Authorized Receipts", fund_column)
			csv_find_replace_column("9999 No specif.","9999 No specific fund source", fund_column)
			csv_find_replace_column("1114 EVOS Rest","1114 Exxon Valdez Oil Spill Restoration Fund", fund_column)
			csv_find_replace_column("1115 InT/BuEnIn","1115 International Trade and Business Endowment Income", fund_column)
			csv_find_replace_column("1119 Tobac Setl","1119 Tobacco Settlement", fund_column)
			csv_find_replace_column("1121 MultiFunds","1121 Multiple Funds pre FY94", fund_column)
			csv_find_replace_column("1122 LIC/PER/CT","1122 License/Permits/Certification Pre 89", fund_column)
			csv_find_replace_column("1123 Care/Trmnt","1123 Care and Treatment - FY88", fund_column)
			csv_find_replace_column("1125 APA Plant","1125 APA Plant Maintenance & Operation - FY88", fund_column)
			csv_find_replace_column("1129 Legal Recp","1129 Legal Settlement Receipts - FY88", fund_column)
			csv_find_replace_column("1130 Handcap Fn","1130 Handicapped Vendor Facility Fund - FY88", fund_column)
			csv_find_replace_column("1049 Trng Bldg","1049 Training and Building Fund", fund_column)
			csv_find_replace_column("1174 UA I/A","1174 UA Intra-Agency Transfers", fund_column)
			csv_find_replace_column("1132 Publ/Other","1132 Publications and Other Services - FY88", fund_column)
			csv_find_replace_column("1096 ILT Fund","1096 Investment Loss Trust Fund (DO NOT USE)", fund_column)
			csv_find_replace_column("1017 Ben Sys","1017 Benefits Systems Receipts", fund_column)
			csv_find_replace_column("1035 Vet Loan","1035 Veterans Revolving Loan Fund", fund_column)
			csv_find_replace_column("1045 Nat Guard","1045 National Guard & Naval Militia Retirement System", fund_column)
			csv_find_replace_column("1055 IA/OIL HAZ","1055 Interagency/Oil & Hazardous Waste", fund_column)
			csv_find_replace_column("1064 House Loan","1064 Housing Assistance Loan Fund", fund_column)
			csv_find_replace_column("1073 Pwr Dv RLF","1073 Power Development Revolving Loan Fund", fund_column)
			csv_find_replace_column("1084 Alyeska","1084 Alyeska Settlement Fund", fund_column)
			csv_find_replace_column("1095 Med Facil","1095 Medical Facilities Authority Fund", fund_column)
			csv_find_replace_column("1113 AHFC Bonds","1113 Alaska Housing Finance Corporation Bonds", fund_column)
			csv_find_replace_column("1118 Pioneers' ","1118 Pioneers' Homes Receipts", fund_column)
			csv_find_replace_column("1224 MariculRLF","1224 Mariculture Revolving Loan Fund", fund_column)
			csv_find_replace_column("1135 AMHS Dup","1135 Marine Highway Duplicated Expenditures", fund_column)
			csv_find_replace_column("1137 DComp IA","1137 Inactive-Deferred Compensation Inter Agency Receipts", fund_column)
			csv_find_replace_column("1229 AGDC-ISP","1229 AK Gasline Development Corporation In-state Pipeline Fund", fund_column)
			csv_find_replace_column("1138 Hlth I/A","1138 Inactive-Health Inter-Agency Receipts", fund_column)
			csv_find_replace_column("1141 RCA Rcpts","1141 RCA Receipts", fund_column)
			csv_find_replace_column("1142 RHIF/MM   ","1142 Retiree Health Ins Fund/Major Medical", fund_column)
			csv_find_replace_column("1143 RHIF/LTC","1143 Retiree Health Ins Fund/Long-Term Care Fund", fund_column)
			csv_find_replace_column("1144 CWF Bond","1144 Clean Water Fund Bond Receipts", fund_column)
			csv_find_replace_column("1145 AIPP Fund","1145 Art in Public Places Fund", fund_column)
			csv_find_replace_column("1023 FICA Acct","1023 FICA Administration Fund Account", fund_column)
			csv_find_replace_column("1109 Test Fish","1109 Test Fisheries Receipts", fund_column)
			csv_find_replace_column("-2 UnknwnOthr","-2 Unknown Other", fund_column)
			csv_find_replace_column("1150 ASLC Div","1150 ASLC Dividend", fund_column)
			csv_find_replace_column("1184 GOB DSFund","1184 General Obligation Bond Debt Service Fund", fund_column)
			csv_find_replace_column("1186 ASLC Bonds","1186 Alaska Student Loan Corporation Bond Proceeds", fund_column)
			csv_find_replace_column("2000 Bond Funds","2000 Bond Proceeds", fund_column)
			csv_find_replace_column("2001 Bonds MH","2001 Bond Proceeds Mental Health", fund_column)
			csv_find_replace_column("1218 146(c)code","1218 146(c)code", fund_column)
			csv_find_replace_column("1146 Fee Supp ","1146 Inactive-Fee Supported Increase", fund_column)
			csv_find_replace_column("1147 PublicBldg","1147 Public Building Fund", fund_column)
			csv_find_replace_column("1053 Invst Loss","1053 Investment Loss Trust Fund", fund_column)
			csv_find_replace_column("1139 AHFC Div","1139 AHFC Dividend", fund_column)
			csv_find_replace_column("1156 Rcpt Svcs","1156 Receipt Supported Services", fund_column)
			csv_find_replace_column("1152 AFSC Rcpts","1152 AK Fire Standards Council Receipts", fund_column)
			csv_find_replace_column("1153 State Land","1153 State Land Disposal Income Fund", fund_column)
			csv_find_replace_column("1157 Wrkrs Safe","1157 Workers Safety and Compensation Administration Account", fund_column)
			csv_find_replace_column("1158 Emp Pay","1158 Inactive Don't Use Employee Pay", fund_column)
			csv_find_replace_column("1154 Shore Fish","1154 Shore Fisheries Development Lease Program", fund_column)
			csv_find_replace_column("1159 DWF Bond","1159 Drinking Water Fund Bond Receipts", fund_column)
			csv_find_replace_column("1136 SBS IA","1136 Inactive-SBS Inter Agency Receipts", fund_column)
			csv_find_replace_column("1028 Pre90 PRGM","1028 Pre-FY90 Program Receipts", fund_column)
			csv_find_replace_column("1106 ASLC Rcpts","1106 Alaska Student Loan Corporation Receipts", fund_column)
			csv_find_replace_column("1025 Sci/Tech","1025 Science & Technology Endowment Income", fund_column)
			csv_find_replace_column("1205 Ocn Rngr","1205 Berth Fees for the Ocean Ranger Program", fund_column)
			csv_find_replace_column("1124 Res Receip","1124 Resource Assessment Receipts - FY88", fund_column)
			csv_find_replace_column("1197 AK Cap Inc","1197 Alaska Capital Income Fund", fund_column)
			csv_find_replace_column("1203 WCBG Fund","1203 Workers' Compensation Benefits Guaranty Fund", fund_column)
			csv_find_replace_column("1127 User Fees","1127 User Fees - FY88", fund_column)
			csv_find_replace_column("1128 Child Sup","1128 Child Support Enforcement - FY88", fund_column)
			csv_find_replace_column("1999 No ID Fund","1999 Other Fund Source", fund_column)
			csv_find_replace_column("1131 RR Fund","1131 Alaska Railroad Revenue Fund - FY85, FY86, FY87", fund_column)
			csv_find_replace_column("1006 GF/MHTIA","1006 General Fund/Mental Health Trust", fund_column)
			csv_find_replace_column("1151 VoTech Ed","1151 Technical Vocational Education Program Account", fund_column)
			csv_find_replace_column("1160 M/C Protec","1160 Marine/Coastal Protection-Inactive", fund_column)
			csv_find_replace_column("1162 AOGCC Rcpt","1162 Alaska Oil & Gas Conservation Commission Rcpts", fund_column)
			csv_find_replace_column("1161 RRD Fund","1161 Renewable Resources Development Fund-Inactive", fund_column)
			csv_find_replace_column("1051 RuralEcDev","1051 Rural Economic Development Initiative Fund", fund_column)
			csv_find_replace_column("1222 REAA Fund","1222 Regional Educational Attendance Area School Fund", fund_column)
			csv_find_replace_column("1033 Surpl Prop","1033 Surplus Property Revolving Fund", fund_column)
			csv_find_replace_column("1164 RDIF","1164 Rural Development Initiative Fund", fund_column)
			csv_find_replace_column("1165 CBR/MH","1165 CBR/Mental Health", fund_column)
			csv_find_replace_column("1167 NTSC Bond","1167 Northern Tobacco Securitization Corporation Bonds", fund_column)
			csv_find_replace_column("1148 AATP Fund ","1148 Accelerated Alaska Transportation Projects Fund", fund_column)
			csv_find_replace_column("1043 Impact Aid","1043 Impact Aid for K-12 Schools", fund_column)
			csv_find_replace_column("1193 MaintGrant","1193 Major Maintenance Grant Fund", fund_column)
			csv_find_replace_column("1093 Clean Air","1093 Clean Air Protection Fund", fund_column)
			csv_find_replace_column("1194 F&G Nonded","1194 Fish and Game Nondedicated Receipts", fund_column)
			csv_find_replace_column("1170 SmBusEDRLF","1170 Small Business Economic Development Revolving Loan Fund", fund_column)
			csv_find_replace_column("1179 PFC ","1179 Passenger Facility Charges", fund_column)
			csv_find_replace_column("1126 Cont Reimb","1126 Contract Services Reimbursement - FY88", fund_column)
			csv_find_replace_column("1185 ElectionFd","1185 Election Fund (HAVA)", fund_column)
			csv_find_replace_column("1022 Corp Rcpts","1022 State Corporation Receipts", fund_column)
			csv_find_replace_column("1077 Gifts/Grnt","1077 Gifts/Grants/Bequests", fund_column)
			csv_find_replace_column("1149 TAPL Fund","1149 Trans-Alaska Pipeline Liability Fund", fund_column)
			csv_find_replace_column("1163 COPs","1163 Certificates of Participation", fund_column)
			csv_find_replace_column("1032 Fish Fund","1032 Fishermen's Fund", fund_column)
			csv_find_replace_column("1177 ITB Endow","1177 International Trade and Business Endowment", fund_column)
			csv_find_replace_column("1181 Vets Endow","1181 Alaska Veterans' Memorial Endowment Fund", fund_column)
			csv_find_replace_column("1196 Master LOC","1196 Master Lease Line of Credit", fund_column)
			csv_find_replace_column("1182 Ed Cn/Mnt","1182 Educational and Museum Facility Design/Const/MajorMaint Fund", fund_column)
			csv_find_replace_column("1183 Trans Proj","1183 Transportation Project Fund", fund_column)
			csv_find_replace_column("1029 P/E Retire","1029 Public Employees Retirement System Fund", fund_column)
			csv_find_replace_column("1166 Vessel Com","1166 Commercial Passenger Vessel Environmental Compliance Fund", fund_column)
			csv_find_replace_column("1169 PCE Endow","1169 PCE Endowment Fund", fund_column)
			csv_find_replace_column("1173 Misc Earn","1173 Miscellaneous Earnings", fund_column)
			csv_find_replace_column("1225 CQuota RLF","1225 Community Quota Entity Revolving Loan Fund", fund_column)
			csv_find_replace_column("1178 tracking","1178 tracking code", fund_column)
			csv_find_replace_column("1112 IntAptCons","1112 International Airports Construction Fund", fund_column)
			csv_find_replace_column("1188 Fed Unrstr","1188 Federal Unrestricted Receipts", fund_column)
			csv_find_replace_column("1187 Fed MH","1187 Federal Mental Health", fund_column)
			csv_find_replace_column("1190 Adak Ops","1190 Adak Airport Operations ", fund_column)
			csv_find_replace_column("1191 DEED CIP","1191 DEED CIP Fund Equity Account", fund_column)
			csv_find_replace_column("1041 PF Earn Rs","1041 Permanent Fund Earnings Reserve Account", fund_column)
			csv_find_replace_column("1054 Empl Trng","1054 State Employment & Training Program", fund_column)
			csv_find_replace_column("1198 F&GRevBond","1198 Alaska Fish and Game Revenue Bond Redemption Fund", fund_column)
			csv_find_replace_column("1062 Power Proj","1062 Power Project Loan Fund", fund_column)
			csv_find_replace_column("1065 Rural Elec","1065 Rural Electrification Revolving Loan Fund", fund_column)
			csv_find_replace_column("1056 Elect Svc","1056 Electrical Service Extension Fund", fund_column)
			csv_find_replace_column("1075 Clean Wtr","1075 Alaska Clean Water Loan Fund", fund_column)
			csv_find_replace_column("1079 Storg Tank","1079 Underground Storage Tank Revolving Loan Fund", fund_column)
			csv_find_replace_column("1083 Educ Facil","1083 Education Facilities Maint & Construction", fund_column)
			csv_find_replace_column("1085 Rail InTie","1085 Railbelt Intertie Reserve Fund", fund_column)
			csv_find_replace_column("1087 Muni Match","1087 Municipal Matching Grant Fund", fund_column)
			csv_find_replace_column("1101 AERO Rcpts","1101 Alaska Aerospace Development Corporation Receipts", fund_column)
			csv_find_replace_column("1212 Fed ARRA","1212 Federal Stimulus: ARRA 2009", fund_column)
			csv_find_replace_column("1052 Oil/Haz Fd","1052 Oil/Hazardous Prevention/Response Fund", fund_column)
			csv_find_replace_column("1117 VocRandSh","1117 Randolph Sheppard Small Business Fund", fund_column)
			csv_find_replace_column("1168 Tob Ed/Ces","1168 Tobacco Use Education and Cessation Fund", fund_column)
			csv_find_replace_column("1172 Bldg Safe","1172 Building Safety Account", fund_column)
			csv_find_replace_column("1176 Sci/T End","1176 Science and Technology Endowment Fund", fund_column)
			csv_find_replace_column("1011 Educ Trust","1011 Alaska Advance College Tuition Payment Fund", fund_column)
			csv_find_replace_column("1018 EVOSS","1018 Exxon Valdez Oil Spill Settlement", fund_column)
			csv_find_replace_column("1020 Grain Fund","1020 Grain Reserve Loan Fund", fund_column)
			csv_find_replace_column("1133 CSSD Reimb","1133 CSSD Administrative Cost Reimbursement", fund_column)
			csv_find_replace_column("1175 BLic&Corp","1175 Business License and Corporation Filing Fees and Taxes", fund_column)
			csv_find_replace_column("1199 SFEntAcct","1199 Alaska Sport Fishing Enterprise Account", fund_column)
			csv_find_replace_column("1219 Emrng Tech","1219 Emerging Energy Technology Fund", fund_column)
			csv_find_replace_column("1116 DisRlFd","1116 Disaster Relief Fund", fund_column)
			csv_find_replace_column("1140 AIDEA Div","1140 AIDEA Dividend", fund_column)
			csv_find_replace_column("1066 Pub School","1066 Public School Trust Fund", fund_column)
			csv_find_replace_column("1030 School Fnd","1030 School Fund (Cigarette Tax)", fund_column)
			csv_find_replace_column("1189 Sr Care","1189 Senior Care Fund", fund_column)
			csv_find_replace_column("1200 VehRntlTax","1200 Vehicle Rental Tax Receipts", fund_column)
			csv_find_replace_column("1201 CFEC Rcpts","1201 Commercial Fisheries Entry Commission Receipts", fund_column)
			csv_find_replace_column("1202 Anatomical","1202 Anatomical Gift Awareness Fund", fund_column)
			csv_find_replace_column("1155 Timber Rcp","1155 Timber Sale Receipts", fund_column)
			csv_find_replace_column("1207 Cr Shp Imp","1207 Regional Cruise Ship Impact Fund", fund_column)
			csv_find_replace_column("1208 BF Brdg LF","1208 Bulk Fuel Bridge Loan Fund", fund_column)
			csv_find_replace_column("1209 Capstone","1209 Alaska Capstone Avionics Revolving Loan Fund", fund_column)
			csv_find_replace_column("1210 Renew Ener","1210 Renewable Energy Grant Fund", fund_column)
			csv_find_replace_column("1206 CPV Tax","1206 Commercial Passenger Vessel Tax", fund_column)
			csv_find_replace_column("9000 Unkn UGF","9000 Unknown UGF Fund Source", fund_column)
			csv_find_replace_column("9001 Unknwn Fed","9001 Unknown Federal Fund Source", fund_column)
			csv_find_replace_column("9002 Unknwn Oth","9002 Unknown Other Fund Source", fund_column)
			csv_find_replace_column("1211 CSG Tax","1211 Cruise Ship Gambling Tax", fund_column)
			csv_find_replace_column("1171 PFD Crim","1171 Restorative Justice", fund_column)
			csv_find_replace_column("1216 Boat Rcpts","1216 Boat Registration Fees", fund_column)
			csv_find_replace_column("1215 UCR Rcpts","1215 Uniform Commercial Registration fees", fund_column)
			csv_find_replace_column("1214 WhitTunnel","1214 Whittier Tunnel Toll Receipts", fund_column)
			csv_find_replace_column("1217 NGF Earn","1217 NGF Earnings", fund_column)
			csv_find_replace_column("1009 Rev Bonds","1009 Revenue Bonds", fund_column)
			csv_find_replace_column("1220 Crime VCF","1220 Crime Victim Compensation Fund", fund_column)
			csv_find_replace_column("1258 CIF UGF","1258 UGF Deposits to the CIF", fund_column)
			csv_find_replace_column("1008 G/O Bonds","1008 General Obligation Bonds", fund_column)
			csv_find_replace_column("1221 Civil Legl","1221 Civil Legal Services Fund", fund_column)
			csv_find_replace_column("1001 CBR Fund","1001 Constitutional Budget Reserve Fund", fund_column)
			csv_find_replace_column("1223 CharterRLF","1223 Commercial Charter Fisheries RLF", fund_column)
			csv_find_replace_column("1080 Schl Const","1080 School Construction Fund", fund_column)
			csv_find_replace_column("1047 Title 20","1047 Title XX", fund_column)
			csv_find_replace_column("1120 MotorFuel ","1120 Motor Fuel Tax Increase", fund_column)
			csv_find_replace_column("1226 High Ed","1226 Alaska Higher Education Investment Fund", fund_column)
			csv_find_replace_column("1227 MicroRLF","1227 Alaska Microloan Revolving Loan Fund", fund_column)
			csv_find_replace_column("1111 FishFndInc","1111 Fishermans Fund Income", fund_column)
			csv_find_replace_column("1134 F&G CFP","1134 Fish and Game Criminal Fines and Penalties", fund_column)
			csv_find_replace_column("1213 AHCC Rcpts","1213 Alaska Housing Capital Corporation Receipts", fund_column)
			csv_find_replace_column("1180 Alcohol Fd","1180 Alcohol & Other Drug Abuse Treatment & Prevention Fund", fund_column)
			csv_find_replace_column("1228 UGFSequest","1228 UGF Associated with Sequestration", fund_column)
			csv_find_replace_column("1234 LicPlates","1234 License Plates", fund_column)
			csv_find_replace_column("1244 Rural Air","1244 Rural Airport Receipts", fund_column)
			csv_find_replace_column("1245 R Apt I/A","1245 Rural Airport Receipts I/A", fund_column)
			csv_find_replace_column("1239 AvFuel Tax","1239 Aviation Fuel Tax Revenue", fund_column)
			csv_find_replace_column("1275 Reapprop","1275 Reappropriation - Temporary to Match Leg Fin", fund_column)
		}
		
		;Fish & Game fix, leave this line below capital flag section
		csv_find_replace_column( "Fish and Game", "Fish & Game", department_column)
		
		;DOT&PF Component Cleanup
		csv_find_replace_column("Highways, Aviation and Faciliti", "Highways, Aviation and Facilities", rdu_column )
		csv_find_replace_column("Design, Engineering and Constru", "Design, Engineering and Construction", rdu_column )
		
		current_csv_row++
		
	}
	
	;progress_subtext .= "Saving clean data..." 
	;Progress, , % progress_subtext, , % progress_title
	Random, rand, 1, 100
	cleaned_csv_file := csv_directory "\source\cleaned_" A_Now "_r" rand ".txt"
	CSV_Save(cleaned_csv_file, "sankey_csv_identifier", true)
	
	FileRead, temp_cleaned_csv_file, % cleaned_csv_file
	FileDelete, % cleaned_csv_file
	temp_cleaned_csv_file := StrReplace( temp_cleaned_csv_file, """", "")
	FileAppend, % temp_cleaned_csv_file, % cleaned_csv_file
	
	;progress_subtext .= "Cleaning DONE!" 
	;Progress, , % progress_subtext, , % progress_title
	
}