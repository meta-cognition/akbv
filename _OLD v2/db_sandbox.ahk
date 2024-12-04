#Include includes\v2\Class_SQLiteDB.ahk   
DBFileName := A_ScriptDir . "\sqlite\budget.db"
DB := SQLiteDB()
If !DB.OpenDB(DBFileName) {
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
   ExitApp
}

   ;                                     1: SQLiteDB object
   ;                                     2: Number of columns
   ;                                     3: Pointer to an array of pointers to columns text
   ;                                     4: Pointer to an array of pointers to column names


SQL := 'SELECT * FROM "20230609153736_19382_1512";'
DB.Exec(SQL, SQLiteExecCallBack)
If !DB.GetTable(SQL, &Result, 10)
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

SQL := 'SELECT * FROM "20230609153736_19382_1512";'
Result := ""

If !DB.GetTable(SQL, &Result)
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)


SQLiteExecCallBack(DB, ColumnCount, ColumnValues, ColumnNames) {
    This := ObjFromPtrAddRef(DB)
    MsgBox("SQLite version: " . SQLiteDB.Version . "`n" .
           "SQL statement: " . This.SQL . "`n" .
           "Number of columns: " . ColumnCount . "`n" .
           "Name of first column: " . StrGet(NumGet(ColumnNames, "Ptr"), "UTF-8") . "`n" .
           "Value of first column: " . StrGet(NumGet(ColumnValues, "Ptr"), "UTF-8"),
           A_ThisFunc, 0)
    Return 0
 }