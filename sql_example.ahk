#Requires AutoHotkey v2.0.0
; ======================================================================================================================
; Function:       Sample script for Class_SQLiteDB.ahk
; AHK version:    AHK 2.0.2
; Tested on:      Win 10 Pro (x64)
; Author:         just me
; Version:        2.0.0/2023-01-02/just me    - Initial release for AHK 2.08
; ======================================================================================================================
; AHK Settings
; ======================================================================================================================
#SingleInstance Force
SetWorkingDir(A_ScriptDir)
OnExit((*) => Main_Close())
; ======================================================================================================================
; Includes
; ======================================================================================================================
#Include Class_SQLiteDB.ahk
; ======================================================================================================================
; Start & GUI
; ======================================================================================================================
CBBSQL := ["SELECT * FROM Test"]
DBFileName := A_ScriptDir . "\TEST.DB"

DB := SQLiteDB()

If !DB.OpenDB(DBFileName) {
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
   ExitApp
}
Sleep(1000)

DB.Exec("BEGIN TRANSACTION;")
SQLStr := ""
_SQL := "INSERT INTO Test VALUES('Näme#', 'Fname#', 'Phone#', 'Room#');"
Loop 1000 {
   SQL := StrReplace(_SQL, "#", A_Index)
   SQLStr .= SQL
}
If !DB.Exec(SQLStr)
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
DB.Exec("COMMIT TRANSACTION;")
SQLStr := ""

; ======================================================================================================================
; Use Class SQLiteDB : Using Exec() with callback function
; ======================================================================================================================
SB.SetText("Exec: Using a callback function")
SQL := "SELECT COUNT(*) FROM Test;"
DB.Exec(SQL, SQLiteExecCallBack)
SQL := "SELECT * FROM Test;"
Result := ""
If !DB.GetTable(SQL, &Result, 10)
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
ShowTable(LV, Result)
Sleep(1000)
; ======================================================================================================================
; Start of query using Prepare() : Get the column names for table Test
; ======================================================================================================================
SQL := "SELECT * FROM Test;"
SB.SetText("Prepare : " . SQL)
Prepared := ""
If !DB.Prepare(SQL, &Prepared)
   MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)

Prepared.Free()
LV.Opt("+ReDraw")
; ======================================================================================================================
; End of query using Prepare()
; ======================================================================================================================
Main.Opt("-Disabled")
Return
; ======================================================================================================================
; Gui Subs
; ======================================================================================================================
Main_Close(*) {
   If !DB.CloseDB()
      MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
   ExitApp
}
; ======================================================================================================================
; Other Subs
; ======================================================================================================================
; "One step" query using GetTable()
; ======================================================================================================================
GetTable(GuiCtrl, Info) {
   Table := Main["Table"].Text
   SQL := "SELECT * FROM " . Table . ";"
   SB.SetText("GetTable: " . SQL)
   Start := A_TickCount
   Result := ""
   If !DB.GetTable(SQL, &Result)
      MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
   ShowTable(LV, Result)
   SB.SetText("GetTable: " . SQL . " done (including ListView) in " . (A_TickCount - Start) . " ms")
}
; ======================================================================================================================
; Show results for prepared query using Prepare()
; ======================================================================================================================
GetResult(GuiCtrl, Info) {
   Table := Main["Table"].Text
   SQL := "SELECT * FROM " . Table . ";"
   SB.SetText("Query: " . SQL)
   Start := A_TickCount
   Prepared := ""
   If !DB.Prepare(SQL, &Prepared)
      MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
   ShowResult(LV, Prepared)
   SB.SetText("Prepare: " . SQL . " done (including ListView) in " . (A_TickCount - Start) . " ms")
}
; ======================================================================================================================
; Execute SQL statement using Exec() / GetTable()
; ======================================================================================================================
RunSQL(CtrlObj, Info) {
   SQL := Trim(Main["SQL"].Text)
   If (SQL = "") {
      SB.SetText("No SQL statement entered!")
      Return
   }
   If (Main["SQL"].Value = 0)
      Main["SQL"].Add([SQL])
   If (SubStr(SQL, -1) != ";")
      SQL .= ";"
   Result := ""
   If RegExMatch(SQL, "i)^\s*SELECT\s") {
      SB.SetText("GetTable: " . SQL)
      If !DB.GetTable(SQL, &Result)
         MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
      Else
         ShowTable(LV, Result)
      SB.SetText("GetTable: " . SQL . " done!")
   }
   Else {
      SB.SetText("Exec: " . SQL)
      If !DB.Exec(SQL)
         MsgBox("Msg:`t" . DB.ErrorMsg . "`nCode:`t" . DB.ErrorCode, "SQLite Error", 16)
      Else
         SB.SetText("Exec: " . SQL . " done!")
   }
}
; ======================================================================================================================
; Exec() callback function sample
; ======================================================================================================================
SQLiteExecCallBack(DB, ColumnCount, ColumnValues, ColumnNames) {
   This := ObjFromPtrAddRef(DB)
   Main.Opt("+OwnDialogs") ; required for the MsgBox
   MsgBox("SQLite version: " . SQLiteDB.Version . "`n" .
          "SQL statement: " . This.SQL . "`n" .
          "Number of columns: " . ColumnCount . "`n" .
          "Name of first column: " . StrGet(NumGet(ColumnNames, "Ptr"), "UTF-8") . "`n" .
          "Value of first column: " . StrGet(NumGet(ColumnValues, "Ptr"), "UTF-8"),
          A_ThisFunc, 0)
   Return 0
}
; ======================================================================================================================
; Show results
; ======================================================================================================================
ShowTable(LV, Table) {
   LV.Opt("-Redraw")
   LV.Delete()
   Loop LV.GetCount("Col")
      LV.DeleteCol(1)
   If (Table.HasNames) {
      Loop Table.ColumnCount
         LV.InsertCol(A_Index, "", Table.ColumnNames[A_Index])
      If (Table.HasRows) {
         Loop Table.Rows.Length
            LV.Add("", Table.Rows[A_Index]*)
      }
      Loop Table.ColumnCount
         LV.ModifyCol(A_Index, "AutoHdr")
   }
   LV.Opt("+Redraw")
}
; ----------------------------------------------------------------------------------------------------------------------
ShowResult(LV, Prepared) {
   LV.Opt("-Redraw")
   LV.Delete()
   Loop LV.GetCount("Col")
      LV.DeleteCol(1)
   If (Prepared.ColumnCount > 0) {
      Loop Prepared.ColumnCount
         LV.InsertCol(A_Index, "", Prepared.ColumnNames[A_Index])
      Row := ""
      RC := Prepared.Step(&Row)
      While (RC > 0) {
         LV.Add("", Row*)
         RC := Prepared.Step(&Row)
      }
      If (RC = 0)
         MsgBox("Msg:`t" . Prepared.ErrorMsg . "`nCode:`t" . Prepared.ErrorCode, A_ThisFunc, 16)
      Loop Prepared.ColumnCount
         LV.ModifyCol(A_Index, "AutoHdr")
   }
   LV.Opt("+Redraw")
}