-- SQLite
SELECT DISTINCT DEPT_NAME, SUM(SCEN1_AMOUNT) AS Total
FROM `20230609153736_19382_1512` where LINE_TYPE='Expenditure' group by dept_name;