// Decompiled with JetBrains decompiler
// Type: zgc0Admin.zgcAllTableCore
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Text;
using zgcSpaceKernel.Core;
using zgcLibCore;

namespace zgc0Admin
{
    public class zgcAllTableCore
    {
        private string scope = "\r\n        using System;\r\n        using System.Data;\r\n        using System.Configuration;\r\n        using System.Web;\r\n        using System.Data.SqlClient;\r\n        namespace zgcLibCore\r\n        {";
        private string scopecore = "using System.Collections.Generic;\r\n        namespace zgcSpaceKernel.Core\r\n        {{\r\n            partial class D: BaseD\r\n            {{\r\n                public override Dictionary<string, C> a() {{ return _a; }}\r\n                public override Dictionary<int, C[]> fd() {{ return _fd; }}\r\n                {0}\r\n                {1}\r\n            }}\r\n        }}";
        private string scopecorep = "using System.Collections.Generic;\r\n        namespace zgcSpaceKernel.Core\r\n        {{\r\n\r\n            partial class P\r\n            {{\r\n                public static string _sc = \"10.10.1.10;database=FUTAExpress2018;uid=futaexpress;pwd=futaexpress#1\";\r\n        {0}\r\n            }}\r\n        }}";
        public zgcOneTable[] Tables;
        public bool bIt = false;
        public string server = "";
        private static string _rightOnTable = "_rightOnTable: {{}},";
        private static string _sessionStore = "      _sessionStore: {\r\n                UserId: -1, UserName: \"\", SesstionId: \"\", ClientName: \"\",\r\n                CompanyName: \"\", CompanyTel: \"\", BrandName: \"\", DepartmentName: \"\",\r\n                CurDate: null,\r\n                DeptId: -1, BrandId: -1, CompanyId: -1, EmployeeId: -1,\r\n                keyApp: \"\", sessionKey: \"\"\r\n            },\r\n                get: function (tablename) {\r\n                    return this._Self.get(tablename);\r\n                },";
        private static string _listRefTables = "_listRefTables: [\r\n                {0}\r\n            ],";
        private static string _listSelfTables = "_listSelfTables: [\r\n                {0}\r\n            ],";
        private static string _fieldsList = "_fieldsList: [\r\n{0}\r\n            ],";
        private static string _fields = "/*{0}*/{{ field: \"{1}\", name: \"{2}\", create: {4}, edit: {5}, list: {6} {3} }}\r\n";
        private static string _editform = "_editform: [\r\n                {0}\r\n            ],";
        private static string _updateform = "_updateform: [\r\n                {0}\r\n            ],";
        private static string _listReports = "_listReports: [\r\n            {0}\r\n            ],";
       
        //Language Scope
        private static string langScopeBlock = "      \r\n         '{0}' : {{\r\n            _id: '{0}',//table\r\n         UIname: {{ en: '{0}', vn:'{0}'}},\r\n           _fieldsList: [\r\n                {1}\r\n            ],\r\n        }},";
        private static string _dictionaryLangSelf = "         this._dictSelf.set('{0}', obj{1});";
        private static string _gbLanguageI18 = "var _gbLanguageI18 = {{\r\n        \r\n{0}\r\n        \r\n}};";
        //End language scope

        private static string _dictionarySelf = "         this._Self.set('{0}', obj{1});";
        private static string _gbDictionary = "var _gbDictionary = {{\r\n       \r\n{0}\r\n        \r\n}};";
        private static string objScope = "         \r\n {0}'{3}' : {{\r\n            {1}\r\n            {2}\r\n            /*------------------------------------------------*/\r\n            _titleName: \"{3}\",\r\n            _id: \"{3}\",\r\n            {4}\r\n            className: 'display',\r\n            //print danh sach fields ra day [Id,Code,Name,....]\r\n            {5}\r\n            //table\r\n            {6}\r\n            //define form\r\n            {7}\r\n            {8}\r\n            //-----------------------------------------------------\r\n            {9}\r\n        }}";


        private static string scopeDB = "using System;\r\nusing System.Collections.Generic;\r\nnamespace {0}\r\n{{\r\n    {1}\r\n}}";
        private static string classScopeDB = "\r\n    public class {0}\r\n    {{\r\n {1} \r\n    }}";
        private static string _reportStr = "{{\r\n            name: \"{0}\",\r\n            cols: [\r\n               {1}\r\n                ],\r\n                mPosDataSumTotal: [], mMerCol: 0, mPosHeader: 0, mbAcceptCtrl: false, bShowIndexRow: false,\r\n                mbStoreId: false, jsonFormat: false, bShowGroupBy: false, bShowSTT: false\r\n            }}";

        public void Build(string orgPath, string path, bool isView)
        {
            //zgcAdmin zgcAdmin = new zgcAdmin();
            for (int index = 0; index < this.Tables.Length; ++index)
            {
                zgcCreateClassCore zgcCreateClassCore = new zgcCreateClassCore();
                zgcCreateClassCore.talbe = this.Tables[index];
                string path1 = orgPath + string.Format("ObjectBuildInter\\Object\\{0}.cs", (object)zgcCreateClassCore.talbe.newTableName);
                zgcHelper.CreateFile(path1);
                StreamWriter sw = zgcHelper.OpenFile(path1);
                sw.WriteLine(this.scope);
                try
                {
                    zgcCreateClassCore.BuildClass(sw, isView);
                }
                catch (Exception ex)
                {
                    ex.Message.ToString();
                    zgcHelper.NoneException(ex);
                }
                sw.WriteLine("}");
                sw.Close();
                sw.Dispose();
            }
        }

        public void BuildASMX(string path)
        {
            //zgcAdmin zgcAdmin = new zgcAdmin();
            for (int index = 0; index < this.Tables.Length; ++index)
            {
                new zgcCreateClassCore().talbe = this.Tables[index];
                zgcHelper.CreateFile(path + "\\" + this.Tables[index].newTableName + ".asmx");
                StreamWriter streamWriter = zgcHelper.OpenFile(path + "\\" + this.Tables[index].newTableName + ".asmx");
                string str = string.Format("<%@ WebService Language=\"C#\" CodeBehind=\"~/App_Code/WS/WS{0}.cs\" Class=\"WS{0}\" %>", (object)this.Tables[index].newTableName);
                streamWriter.WriteLine(str);
                streamWriter.Close();
                streamWriter.Dispose();
            }
        }

        public void BuildJS(string path)
        {
            //zgcAdmin zgcAdmin = new zgcAdmin();
            for (int index = 0; index < this.Tables.Length; ++index)
            {
                new zgcCreateClassCore().talbe = this.Tables[index];
                zgcHelper.CreateFile(path + "\\" + this.Tables[index].newTableName + ".js");
                StreamWriter streamWriter1 = zgcHelper.OpenFile(path + "\\" + this.Tables[index].newTableName + ".js");
                string str1 = "";
                streamWriter1.WriteLine(str1);
                streamWriter1.Close();
                streamWriter1.Dispose();
                string path1 = path + "\\JSEXT\\" + this.Tables[index].newTableName + "ext.js";
                if (!File.Exists(path1))
                {
                    zgcHelper.CreateFile(path1);
                    StreamWriter streamWriter2 = zgcHelper.OpenFile(path1);
                    string str2 = "";
                    streamWriter2.WriteLine(str2);
                    streamWriter2.Close();
                    streamWriter2.Dispose();
                }
            }
        }

        public string GetViewName(zgcOneTable t)
        {
            string str = t.newTableName;
            int num = 0;
            for (int index = 0; index < t.Rows.Length; ++index)
            {
                if (t.Rows[index].fTable != null && t.Rows[index].fTable.Length > 0)
                {
                    str = num >= 10 ? "zgcl_" + t.newTableName + (object)num : "zgcl_" + t.newTableName + "0" + num.ToString();
                    ++num;
                }
            }
            if (num == 0)
                str = num >= 10 ? "zgcl_" + t.newTableName + (object)num : "zgcl_" + t.newTableName + "0" + num.ToString();
            return str;
        }

        public void BuildCore(string strfile, string strfilep, string sfJS, string path5)
        {
            string format1 = "var o{1} = {{//{0} \r\n\t_v: [{2}], \r\n\t_e: [{3}], \r\n\t_d: [{4}], \r\n\t_f: [],_r: [], _coj: {{}},__id: {1}, _sy: 'dlg_cl', \r\n\tid: 'o{1}', cssb:'inputBtnBottomV2',$dw: null, dwcss: 'login_sign', }};\r\n";
            string format2 = "\t\t//for {0}\r\n\t\tpublic static void {0}(object obj,out object oo)\r\n\t\t{{\r\n\t\t    var x = new X(obj); X.Init(_sc);\r\n\t\t    var r = x.R().A(){1}._CR()._CF().L().S().EX().G();\r\n\t\t    oo = new Rs{{ Status = \"OK\", Records = r._d, TotalRecordCount = r._t }};\r\n\t\t}}\r\n";
            string format3 = ".Pc(\"{0}\")";
            string format4 = "// 0:method, 1:table key, 2:view key, 3:table, 4:view, 5:main function \r\n\tpublic static Dictionary<string, C> _a = new Dictionary<string, C>  {{ \r\n{0}\t}};";
            string format5 = "// 0:method, 1:table key, 2:view key, 3:table, 4:view, 5:main function \r\n\tpublic static Dictionary<string, string[]> _a = new Dictionary<string, string[]>  {{ \r\n{0}\t}};";
            string format6 = "\t\t//{0}\r\n\t\t{{\"pGet{0}\"     , new C {{T = new[]{{\"P\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}}}},\r\n\t\t{{\"fGet{0}\"     , new C {{T = new[]{{\"G\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}}}},\r\n\t\t{{\"Insert{0}\"   , new C {{T = new[]{{\"I\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}}}},\r\n\t\t{{\"Update{0}\"   , new C {{T = new[]{{\"U\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}}}},\r\n\t\t{{\"Remove{0}\"   , new C {{T = new[]{{\"D\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}}}},\r\n";
            string format7 = "\t\t//{0}\r\n\t\t{{\"pGet{0}\"     , new[]{{\"P\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}},\r\n\t\t{{\"fGet{0}\"     , new[]{{\"G\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}},\r\n\t\t{{\"Insert{0}\"   , new[]{{\"I\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}},\r\n\t\t{{\"Update{0}\"   , new[]{{\"U\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}},\r\n\t\t{{\"Remove{0}\"   , new[]{{\"D\", \"{2}\", \"{3}\" ,\"{0}\", \"{1}\", \"{0}\"}}}},\r\n";
            string format8 = "//[int: 1; float: 2; string: 4; date: 5; bool: 3] [0:type, 1:isnull, 2:key, 3:fkey, 4:length, 5:ftable, 6:fId, 7:Name]\r\n\tpublic static Dictionary<int, C[]> _fd = new Dictionary<int, C[]> {{ \r\n{0}\t}};";
            string format9 = "//[int: 1; float: 2; string: 4; date: 5; bool: 3] [0:type, 1:isnull, 2:key, 3:fkey, 4:length, 5:ftable, 6:fId, 7:Name]\r\n\tpublic static Dictionary<int, string[][]> _fd = new Dictionary<int, string[][]> {{ \r\n{0}\t}};";
            string format10 = "\t\t{{{1}, new [] {{  //{2} - {3} columns  \r\n{0}\t\t}}}},";
            string format11 = "\t\t\tnew C{{T= new []{{ \"{0}\", \"{1}\", \"{2}\", \"{3}\", \"{4}\", \"{5}\", \"{6}\", \"{7}\" }}}},";
            string format12 = "\t\t\t new []{{ \"{0}\", \"{1}\", \"{2}\", \"{3}\", \"{4}\", \"{5}\", \"{6}\", \"{7}\" }},";
            //zgcAdmin zgcAdmin = new zgcAdmin();
            zgcHelper.CreateFile(strfile);
            StreamWriter streamWriter1 = zgcHelper.OpenFile(strfile);
            StringBuilder stringBuilder1 = new StringBuilder("");
            StringBuilder stringBuilder2 = new StringBuilder("");
            StringBuilder stringBuilder3 = new StringBuilder("");
            StringBuilder stringBuilder4 = new StringBuilder("");
            StringBuilder stringBuilder5 = new StringBuilder("");
            StringBuilder stringBuilder6 = new StringBuilder("");
            for (int index1 = 0; index1 < this.Tables.Length; ++index1)
            {
                zgcOneTable table = this.Tables[index1];
                StringBuilder stringBuilder7 = new StringBuilder("");
                StringBuilder stringBuilder8 = new StringBuilder("");
                StringBuilder stringBuilder9 = new StringBuilder("");
                stringBuilder3.Append(string.Format(format6, (object)table.TableName, (object)this.GetViewName(table), (object)table.ID.Substring(1, table.ID.Length - 1), (object)table.ID.Substring(1, table.ID.Length - 1)));
                stringBuilder6.Append(string.Format(format7, (object)table.TableName, (object)this.GetViewName(table), (object)table.ID.Substring(1, table.ID.Length - 1), (object)table.ID.Substring(1, table.ID.Length - 1)));
                string str1 = "";
                string str2 = "";
                string str3 = "";
                string str4 = str1 + "'" + table.showTableName + "',";
                string str5 = str2 + "'" + table.TableName + "',";
                int num1 = 0;
                for (int index2 = 0; index2 < table.Rows.Length; ++index2)
                {
                    string colName = table.Rows[index2].colName;
                    if (table.Rows[index2].fCol != null && table.Rows[index2].fCol.Trim().Length > 0)
                        ++num1;
                    string str6 = table.Rows[index2].colName;
                    if (table.Rows[index2].format.formName != null && table.Rows[index2].format.formName.Length > 1)
                        str6 = table.Rows[index2].format.formName;
                    if (table.Rows[index2].fCol != null && table.Rows[index2].fCol.Trim().Length > 0)
                        stringBuilder7.AppendLine(string.Format("/*{0}-view-{1}*/", (object)(index2 + 1), (object)(table.Rows.Length + num1)) + string.Format(format11, (object)zgcCreateClassCore.SqlToSimpleType(table.Rows[index2].colType), (object)table.Rows[index2].colIsnull, (object)(table.Rows[index2].IsPriKey.HasValue ? 1 : 0), (object)table.Rows[index2].fCol, (object)table.Rows[index2].colLength, (object)table.Rows[index2].fTable, (object)table.Rows[index2].fCol, (object)table.Rows[index2].colName));
                    else
                        stringBuilder7.AppendLine(string.Format("/*{0}*/", (object)(index2 + 1)) + string.Format(format11, (object)zgcCreateClassCore.SqlToSimpleType(table.Rows[index2].colType), (object)table.Rows[index2].colIsnull, (object)(table.Rows[index2].IsPriKey.HasValue ? 1 : 0), (object)table.Rows[index2].fCol, (object)table.Rows[index2].colLength, (object)table.Rows[index2].fTable, (object)table.Rows[index2].fCol, (object)table.Rows[index2].colName));
                    stringBuilder8.AppendLine(string.Format(format12, (object)zgcCreateClassCore.SqlToSimpleType(table.Rows[index2].colType), (object)table.Rows[index2].colIsnull, (object)(table.Rows[index2].IsPriKey.HasValue ? 1 : 0), (object)table.Rows[index2].fCol, (object)table.Rows[index2].colLength, (object)table.Rows[index2].fTable, (object)table.Rows[index2].fCol, (object)table.Rows[index2].colName));
                    stringBuilder9.Append(string.Format(format3, (object)table.Rows[index2].colName));
                    str4 = str4 + "'" + str6 + "',";
                    str5 = str5 + "'" + table.Rows[index2].colName + "',";
                    int num2 = 1;
                    if (table.Rows[index2].format.objs.ContainsKey("FS") && short.Parse(table.Rows[index2].format.objs["FS"].strArrValue[0]) > (short)0)
                        num2 = 0;
                    if (table.Rows[index2].colName.Contains("isPrg"))
                        num2 = 0;
                    str3 += string.Format("\"{0},{0},{1},{2},{3},,,,\", ", index2 < 10 ? (object)("0" + (object)index2) : (object)string.Concat((object)index2), (object)num2, (object)zgcCreateClassCore.SqlToSimpleType(table.Rows[index2].colType), (object)(table.Rows[index2].fCol == null || table.Rows[index2].fCol.Trim().Length <= 0 ? 0 : 1));
                }
                stringBuilder4.Append(string.Format(format1, (object)table.TableName, (object)table.ID.Substring(1, table.ID.Length - 1), (object)str4, (object)str5, (object)str3));
                stringBuilder5.Append(string.Format(format2, (object)table.TableName, (object)stringBuilder9.ToString()));
                stringBuilder1.AppendLine(string.Format(format10, (object)stringBuilder7.ToString(), (object)table.ID.Substring(1, table.ID.Length - 1), (object)table.TableName, (object)table.Rows.Length));
                stringBuilder2.AppendLine(string.Format(format10, (object)stringBuilder8.ToString(), (object)table.ID.Substring(1, table.ID.Length - 1), (object)table.TableName, (object)table.Rows.Length));
            }
            string str7 = string.Format(format4, (object)stringBuilder3.ToString());
            string str8 = string.Format(format5, (object)stringBuilder6.ToString());
            string str9 = string.Format(format9, (object)stringBuilder2.ToString());
            string str10 = string.Format(format8, (object)stringBuilder1.ToString());
            string str11 = string.Format(this.scopecore, (object)str7, (object)str10);
            streamWriter1.WriteLine(str11);
            streamWriter1.Close();
            streamWriter1.Dispose();
            zgcHelper.CreateFile(strfilep);
            StreamWriter streamWriter2 = zgcHelper.OpenFile(strfilep);
            string str12 = string.Format(this.scopecorep, (object)stringBuilder5.ToString());
            streamWriter2.WriteLine(str12);
            streamWriter2.Close();
            streamWriter2.Dispose();
            zgcHelper.CreateFile(sfJS);
            StreamWriter streamWriter3 = zgcHelper.OpenFile(sfJS);
            streamWriter3.WriteLine(stringBuilder4.ToString());
            streamWriter3.Close();
            streamWriter3.Dispose();
            string str13 = string.Format(this.scopecore, (object)str8, (object)str9);
            zgcHelper.CreateFile(path5);
            StreamWriter streamWriter4 = zgcHelper.OpenFile(path5);
            streamWriter4.WriteLine(str13.ToString());
            streamWriter4.Close();
            streamWriter4.Dispose();
        }

        public void BuildCoreJS(string strfile)
        {
            string format = "var o{1} = {{//{0} \r\n\t_v: [{2}], \r\n\t_e: [{3}], \r\n\t_d: [{4}], \r\n\t_f: [],_r: [], _coj: {{}},__id: {1}, _sy: 'dlg_cl', id: 'o{1}', cssb:'inputBtnBottomV2',$dw: null, dwcss: 'login_sign', }};\r\n";
            //zgcAdmin zgcAdmin = new zgcAdmin();
            zgcHelper.CreateFile(strfile);
            StreamWriter streamWriter = zgcHelper.OpenFile(strfile);
            StringBuilder stringBuilder1 = new StringBuilder("");
            for (int index1 = 0; index1 < this.Tables.Length; ++index1)
            {
                int num1 = 0;
                zgcOneTable table = this.Tables[index1];
                string str1 = "";
                string str2 = "";
                string str3 = "";
                string str4 = str1 + "'" + table.showTableName + "',";
                string str5 = str2 + "'" + table.TableName + "',";
                for (int index2 = 0; index2 < table.Rows.Length; ++index2)
                    table.Rows[index2].isBuildForm = false;
                for (int index2 = 0; index2 < table.Rows.Length; ++index2)
                {
                    string colName = table.Rows[index2].colName;
                    string str6 = table.Rows[index2].colName;
                    if (table.Rows[index2].format.formName != null && table.Rows[index2].format.formName.Length > 1)
                        str6 = table.Rows[index2].format.formName;
                    str4 = str4 + "'" + str6 + "',";
                    str5 = str5 + "'" + table.Rows[index2].colName + "',";
                    if (!table.Rows[index2].isBuildForm)
                    {
                        bool flag = false;
                        if (table.Rows[index2].format.objs.ContainsKey("SR"))
                        {
                            string str7 = "";
                            string str8 = table.Rows[index2].format.objs["SR"].strArrValue[0].Trim();
                            StringBuilder stringBuilder2 = new StringBuilder("");
                            for (int index3 = 0; index3 < table.Rows.Length; ++index3)
                            {
                                int num2 = 1;
                                zgcOneRow row = table.Rows[index3];
                                if (row.format.objs.ContainsKey("FS") && short.Parse(row.format.objs["FS"].strArrValue[0]) > (short)0)
                                    num2 = 0;
                                if (row.colName.Contains("isPrg"))
                                    num2 = 0;
                                if (!row.isBuildForm && row.format.objs.ContainsKey("SR") && str8 == row.format.objs["SR"].strArrValue[0].Trim())
                                {
                                    flag = true;
                                    string str9 = "";
                                    if (row.fCol != null && row.fCol.Trim().Length > 0)
                                    {
                                        str9 = zgcCreateClassCore.GetNameOf(zgcCreateClassCore.GetTableOf(this.Tables, row.fTable));
                                        ++num1;
                                    }
                                    if (str7.Length <= 0)
                                        str7 += string.Format("{0},{0},{1},{2},{3},{4},{5},{6},", index3 < 10 ? (object)("0" + (object)index3) : (object)string.Concat((object)index3), (object)num2, (object)zgcCreateClassCore.SqlToSimpleType(row.colType), (object)(row.fCol == null || row.fCol.Trim().Length <= 0 ? 0 : 1), (object)row.fTable, row.fCol == null || row.fCol.Trim().Length <= 0 ? (object)"" : (object)str9, row.fCol == null || row.fCol.Trim().Length <= 0 ? (object)"" : (object)string.Concat((object)(table.Rows.Length + this.GetIndexView(table, row.colName))));
                                    else
                                        str7 += string.Format("|{0},{0},{1},{2},{3},{4},{5},{6},", index3 < 10 ? (object)("0" + (object)index3) : (object)string.Concat((object)index3), (object)num2, (object)zgcCreateClassCore.SqlToSimpleType(row.colType), (object)(row.fCol == null || row.fCol.Trim().Length <= 0 ? 0 : 1), (object)row.fTable, row.fCol == null || row.fCol.Trim().Length <= 0 ? (object)"" : (object)str9, row.fCol == null || row.fCol.Trim().Length <= 0 ? (object)"" : (object)string.Concat((object)(table.Rows.Length + this.GetIndexView(table, row.colName))));
                                    table.Rows[index3].isBuildForm = true;
                                }
                            }
                            if (flag)
                            {
                                string str9 = "\"" + str7 + "\",";
                                str3 += str9;
                            }
                        }
                        if (!flag)
                        {
                            int num2 = 1;
                            if (table.Rows[index2].format.objs.ContainsKey("FS") && short.Parse(table.Rows[index2].format.objs["FS"].strArrValue[0]) > (short)0)
                                num2 = 0;
                            if (table.Rows[index2].colName.Contains("isPrg"))
                                num2 = 0;
                            string str7 = "";
                            if (table.Rows[index2].fCol != null && table.Rows[index2].fCol.Trim().Length > 0)
                            {
                                str7 = zgcCreateClassCore.GetNameOf(zgcCreateClassCore.GetTableOf(this.Tables, table.Rows[index2].fTable));
                                ++num1;
                            }
                            str3 += string.Format("\"{0},{0},{1},{2},{3},{4},{5},{6},\", ", index2 < 10 ? (object)("0" + (object)index2) : (object)string.Concat((object)index2), (object)num2, (object)zgcCreateClassCore.SqlToSimpleType(table.Rows[index2].colType), (object)(table.Rows[index2].fCol == null || table.Rows[index2].fCol.Trim().Length <= 0 ? 0 : 1), (object)table.Rows[index2].fTable, table.Rows[index2].fCol == null || table.Rows[index2].fCol.Trim().Length <= 0 ? (object)"" : (object)str7, table.Rows[index2].fCol == null || table.Rows[index2].fCol.Trim().Length <= 0 ? (object)"" : (object)string.Concat((object)(table.Rows.Length + this.GetIndexView(table, table.Rows[index2].colName))));
                            table.Rows[index2].isBuildForm = true;
                        }
                    }
                }
                stringBuilder1.Append(string.Format(format, (object)table.TableName, (object)table.ID.Substring(1, table.ID.Length - 1), (object)str4, (object)str5, (object)str3));
            }
            streamWriter.WriteLine(stringBuilder1.ToString());
            streamWriter.Close();
            streamWriter.Dispose();
        }

        public int GetIndexView(zgcOneTable t, string Name)
        {
            int num = 0;
            for (int index = 0; index < t.Rows.Length; ++index)
            {
                string colName = t.Rows[index].colName;
                if (t.Rows[index].fCol != null && t.Rows[index].fCol.Trim().Length > 0)
                    ++num;
                if (colName.Equals(Name))
                    return num;
            }
            return 0;
        }

        public void BuildASPX(string path, string originalPath)
        {
        }

        public void Load()
        {
            string query = "select  tablename,objname from gcDesc_TO order by Id ";
            try
            {
                DataTable dataTableNew = zgcHelper.GetDataSet(query, this.server).Tables[0];
                this.Tables = new zgcOneTable[dataTableNew.Rows.Count];
                for (int index = 0; index < dataTableNew.Rows.Count; ++index)
                {
                    this.Tables[index] = new zgcOneTable();
                    this.Tables[index].server = this.server;
                    this.Tables[index].TableName = Convert.ToString(dataTableNew.Rows[index]["tablename"]);
                    this.Tables[index].showTableName = Convert.ToString(dataTableNew.Rows[index]["objname"]);
                    if (this.Tables[index].TableName.Length > 4)
                        this.Tables[index].newTableName = this.Tables[index].TableName.Substring(0, 4);
                    this.Tables[index].newTableName = !(this.Tables[index].newTableName == "tbl_") ? this.Tables[index].TableName : this.Tables[index].TableName.Substring(4, this.Tables[index].TableName.Length - 4);
                    this.Tables[index].ID = "P" + index.ToString();
                    this.Tables[index].Load();
                }
                dataTableNew.Clone();
            }
            catch (Exception ex)
            {
                zgcHelper.NoneException(ex);
            }
        }

        //25/06/2021
        public static void LoadAll(
          string PathDirectory,
          string strfile,
          string strfileJS,
          string ModelDb,
          string typeBuild = "full")
        {
            string sql1 = "SELECT   o.name, o.object_id as id, o.type  FROM sys.objects as o WHERE(o.type = 'U') AND(o.name <> 'dtproperties') order by o.create_date ";
            X x1 = new X((object)null);
            x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x1.jSonFormat = true;
            x1.GD(sql1);
            string sql2 = "SELECT   o.name, o.object_id as id, o.type  FROM sys.objects as o WHERE(o.type = 'V') AND(o.name <> 'dtproperties') order by o.create_date ";
            X x2 = new X((object)null);
            x2.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x2.jSonFormat = true;
            x2.GD(sql2);
            string sql3 = "SELECT  c.name, c.object_id as tableid, TYPE_NAME(c.user_type_id) as type,  c.max_length as length, c.column_id, c.is_nullable, c.is_identity FROM sys.columns as c order by c.object_id";
            X x3 = new X((object)null);
            x3.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x3.jSonFormat = true;
            x3.GD(sql3);
            string sql4 = "SELECT  fk.name, fk.parent_object_id as id,  OBJECT_NAME(fk.parent_object_id) 'Parenttable',  c1.name 'Parentcolumn',  OBJECT_NAME(fk.referenced_object_id) 'Referencedtable',  c2.name 'Referencedcolumn'  FROM   sys.foreign_keys fk  INNER JOIN  sys.foreign_key_columns fkc ON fkc.constraint_object_id = fk.object_id  INNER JOIN  sys.columns c1 ON fkc.parent_column_id = c1.column_id AND fkc.parent_object_id = c1.object_id  INNER JOIN  sys.columns c2 ON fkc.referenced_column_id = c2.column_id AND fkc.referenced_object_id = c2.object_id  order by Parenttable";
            X x4 = new X((object)null);
            x4.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x4.jSonFormat = true;
            x4.GD(sql4);
            List<Dictionary<string, object>> d1 = (List<Dictionary<string, object>>)x1.G()._d;
            List<Dictionary<string, object>> d2 = (List<Dictionary<string, object>>)x2.G()._d;
            List<Dictionary<string, object>> d3 = (List<Dictionary<string, object>>)x3.G()._d;
            Dictionary<string, List<Dictionary<string, object>>> mapTables1 = new Dictionary<string, List<Dictionary<string, object>>>();
            Dictionary<string, List<Dictionary<string, object>>> mapTables2 = new Dictionary<string, List<Dictionary<string, object>>>();
            for (int index1 = 0; index1 < d1.Count; ++index1)
            {
                string key = string.Concat(d1[index1]["name"]);
                int num = (int)d1[index1]["id"];
                string.Concat((object)index1);
                List<Dictionary<string, object>> dictionaryList = new List<Dictionary<string, object>>();
                List<string> stringList = new List<string>();
                for (int index2 = 0; index2 < d3.Count; ++index2)
                {
                    Dictionary<string, object> dictionary = d3[index2];
                    if ((int)dictionary["tableid"] == num)
                        dictionaryList.Add(dictionary);
                }
                mapTables1.Add(key, dictionaryList);
            }
            for (int index1 = 0; index1 < d2.Count; ++index1)
            {
                string key = string.Concat(d2[index1]["name"]);
                int num = (int)d2[index1]["id"];
                string.Concat((object)index1);
                List<Dictionary<string, object>> dictionaryList = new List<Dictionary<string, object>>();
                List<string> stringList = new List<string>();
                for (int index2 = 0; index2 < d3.Count; ++index2)
                {
                    Dictionary<string, object> dictionary = d3[index2];
                    if ((int)dictionary["tableid"] == num)
                        dictionaryList.Add(dictionary);
                }
                mapTables2.Add(key, dictionaryList);
            }
            List<Dictionary<string, object>> d4 = (List<Dictionary<string, object>>)x4.G()._d;
            string str1 = zgcAllTableCore.BuildObj(mapTables1, d1, d3, typeBuild);
            string str2 = "";
            string str3 = zgcAllTableCore.BuildObj(mapTables2, d2, d3, typeBuild);
            string str4 = str2 + string.Format(zgcAllTableCore.scopeDB, (object)ModelDb, (object)(str1 + str3));
            //zgcAdmin zgcAdmin = new zgcAdmin();
            zgcHelper.CreateFile(strfile);
            StreamWriter streamWriter1 = zgcHelper.OpenFile(strfile);
            streamWriter1.WriteLine(str4);
            streamWriter1.Close();
            streamWriter1.Dispose();
            string str5 = zgcAllTableCore.BuildJSObj_Version2021(mapTables1, d1, d3, d4, ModelDb, typeBuild);
            zgcHelper.CreateFile(strfileJS);
            StreamWriter streamWriter2 = zgcHelper.OpenFile(strfileJS);
            streamWriter2.WriteLine(str5);
            streamWriter2.Close();
            streamWriter2.Dispose();
            string str6 = zgcAllTableCore.BuildLanguage(mapTables1, d1, d3, d4, ModelDb);
            zgcHelper.CreateFile(PathDirectory + ModelDb + "_langFull.js");
            StreamWriter streamWriter3 = zgcHelper.OpenFile(PathDirectory + ModelDb + "_langFull.js");
            streamWriter3.WriteLine(str6);
            streamWriter3.Close();
            streamWriter3.Dispose();
            string str7 = zgcAllTableCore.BuildLanguage(mapTables1, d1, d3, d4, ModelDb, "part");
            zgcHelper.CreateFile(PathDirectory + ModelDb + "_langPart.js");
            StreamWriter streamWriter4 = zgcHelper.OpenFile(PathDirectory + ModelDb + "_langPart.js");
            streamWriter4.WriteLine(str7);
            streamWriter4.Close();
            streamWriter4.Dispose();
        }

        public static string BuildLanguage(
          Dictionary<string, List<Dictionary<string, object>>> mapTables,
          List<Dictionary<string, object>> tablesObj,
          List<Dictionary<string, object>> columsObj,
          List<Dictionary<string, object>> refcolumsObj,
          string ModelDb,
          string typeBuild = "full")
        {
            string str1 = "";
            string str2 = "";
            for (int index1 = 0; index1 < tablesObj.Count; ++index1)
            {
                string str3 = "";
                string key = string.Concat(tablesObj[index1]["name"]);
                int num1 = (int)tablesObj[index1]["id"];
                string.Concat((object)index1);
                string format = "/*{0}*/{{ field: '{1}', vn: '{2}' }}\r\n";
                int num2 = 0;
                List<Dictionary<string, object>> mapTable = mapTables[key];
                List<string> stringList = new List<string>();
                for (int index2 = 0; index2 < mapTable.Count; ++index2)
                {
                    string str4 = (string)mapTable[index2]["name"];
                    if (!(typeBuild == "part") || !str4.ToLower().Contains("isprg"))
                    {
                        str3 = num2 != 0 ? str3 + "\t\t\t\t," + string.Format(format, (object)num2, (object)str4, (object)str4) : str3 + string.Format(format, (object)num2, (object)str4, (object)str4);
                        ++num2;
                    }
                }
                string str5 = string.Format(zgcAllTableCore.langScopeBlock, (object)key, (object)str3);
                
                str2 = str2 + str5;// + "\r\n" + string.Format(zgcAllTableCore._dictionaryLangSelf, (object) key, (object) index1) + "\r\n";
            }
            return (str1 + string.Format(zgcAllTableCore._gbLanguageI18, (object)str2)).ToString();
        }

        public static string BuildJSObj_Version2021(
      Dictionary<string, List<Dictionary<string, object>>> mapTables,
      List<Dictionary<string, object>> tablesObj,
      List<Dictionary<string, object>> columsObj,
      List<Dictionary<string, object>> refcolumsObj,
      string ModelDb,
      string typeBuild = "full")
        {
            string str1 = "";
            string str2 = "";
            for (int index1 = 0; index1 < tablesObj.Count; ++index1)
            {
                string str3 = "";
                string str4 = string.Concat(tablesObj[index1]["name"]);
                int num1 = (int)tablesObj[index1]["id"];
                string.Concat((object)index1);
                string format1 = "{{ field: \"{3}\", mergename: [1], objAjax: {{ AjaxObj: {{ a: \"fGet{1}\", c: {{}}, _f: \"{2}\", ModelDb: \"{0}\" }}, APIkey: \"kUcHUoWsxLPrIJy$rTcbeG5k\" }} }}";
                bool flag1 = true;
                int num2 = 0;
                List<Dictionary<string, object>> mapTable1 = mapTables[str4];
                List<string> stringList = new List<string>();
                for (int index2 = 0; index2 < mapTable1.Count; ++index2)
                {
                    Dictionary<string, object> dictionary = mapTable1[index2];
                    string str5 = (string)dictionary["name"];
                    if (!(typeBuild == "part") || !str5.ToLower().Contains("isprg"))
                    {
                        string str6 = "";
                        if ((int)dictionary["tableid"] == num1)
                        {
                            string str7 = "true";
                            string str8 = "true";
                            string str9 = "true";
                            bool flag2 = false;
                            for (int index3 = 0; index3 < refcolumsObj.Count; ++index3)
                            {
                                if (num1 == (int)refcolumsObj[index3]["id"] && str5 == (string)refcolumsObj[index3]["Parentcolumn"])
                                {
                                    flag2 = true;
                                    string key = (string)refcolumsObj[index3]["Referencedtable"];
                                    string str10 = (string)refcolumsObj[index3]["Referencedcolumn"];
                                    bool flag3 = false;
                                    List<Dictionary<string, object>> mapTable2 = mapTables[key];
                                    for (int index4 = 0; index4 < mapTable2.Count; ++index4)
                                    {
                                        string str11 = (string)mapTable2[index4]["name"];
                                        if (str11.ToLower() == "name" || str11.ToLower() == "fullname")
                                        {
                                            str10 = str10 + "," + str11;
                                            flag3 = true;
                                            break;
                                        }
                                    }
                                    for (int index4 = 0; index4 < mapTable2.Count; ++index4)
                                    {
                                        string str11 = (string)mapTable2[index4]["name"];
                                        if (str11.ToLower() == "code")
                                        {
                                            str10 = str10 + "," + str11;
                                            flag3 = true;
                                            break;
                                        }
                                    }
                                    if (!flag3)
                                        str10 += ",Id";
                                    stringList.Add(string.Format(format1, (object)ModelDb, (object)key, (object)str10, (object)str5));
                                    str6 = " , type: \"select\", option:" + string.Format(format1, (object)ModelDb, (object)key, (object)str10, (object)str5);
                                    break;
                                }
                            }
                            string str12 = dictionary["type"].ToString();
                            if (str5.ToLower().IndexOf("isprg") >= 0)
                            {
                                str7 = "false";
                                str8 = "false";
                                str9 = "false";
                            }
                            if (str12 == "datetime")
                                str6 = ", type: \"datetime\"";
                            string cs = zgcCreateClassCore.SqlToCS(dictionary["type"].ToString());
                            if (!flag2)
                            {
                                if (cs == "double")
                                    str6 = ", type: \"money\" , precition: 2";
                                if (cs == "long" || cs == "int")
                                    str6 = ", type: \"money\" ";
                            }
                            if (str5.ToLower() == "id")
                                str6 = ", type: \"hidden\"";
                            string lower = str5.ToLower();
                            if (lower.Contains("phone"))
                                str6 = ", color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' }";
                            else if (lower.Contains("weight"))
                                str6 = ", addon: { text: '(kg)', css: 'gb-gcolor' }";
                            else if (lower.Contains("cost") || lower.Contains("price"))
                                str6 = ",color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' }";
                            else if (lower.Contains("barcode"))
                                str6 = ",color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' }";
                            str3 = (flag1 ? str3 + "\t\t\t" : str3 + "\t\t\t,") + string.Format(zgcAllTableCore._fields, (object)num2, (object)str5, (object)str5, (object)str6, (object)str7, (object)str8, (object)str9);
                            flag1 = false;
                            ++num2;
                        }
                        else if (!flag1)
                            break;
                    }
                }
                string str13 = string.Format(zgcAllTableCore._rightOnTable, (object)"");
                string str14 = "";
                for (int index2 = 0; index2 < stringList.Count; ++index2)
                    str14 = index2 != 0 ? str14 + "\t\t\t\t," + stringList[index2] + "\r\n" : str14 + stringList[index2] + "\r\n";
                string str15 = string.Format(zgcAllTableCore._listRefTables, (object)str14);
                string format2 = "{{ AjaxObj: {{ a: \"fGet{1}\", _f: \"{2}\", _gb: \"\", ModelDb: \"{0}\" }}, APIkey: \"kUcHUoWsxLPrIJy$rTcbeG5k\" }}\r\n";
                string joinList1 = zgcAllTableCore.GetJoinList(mapTable1, "name", "part");
                string joinList2 = zgcAllTableCore.GetJoinList(mapTable1, "name");
                string str16 = string.Format(format2, (object)ModelDb, (object)str4, (object)"*") + "\t\t\t\t," + string.Format(format2, (object)ModelDb, (object)str4, (object)joinList1) + "\t\t\t\t," + string.Format(format2, (object)ModelDb, (object)str4, (object)joinList2);
                string str17 = string.Format(zgcAllTableCore._listSelfTables, (object)str16);
                string str18 = string.Format(zgcAllTableCore._fieldsList, (object)str3);
                string str19 = zgcAllTableCore.BuildForm(mapTable1);
                string str20 = string.Format(zgcAllTableCore._editform, (object)str19);
                string str21 = string.Format(zgcAllTableCore._updateform, (object)str19);
                string str22 = string.Format(zgcAllTableCore._listReports, (object)zgcAllTableCore.BuildReportAll(mapTable1, str4));
                
                string str23 = string.Format(zgcAllTableCore.objScope, (object)"", (object)str13, (object)"", (object)str4, (object)str15, (object)str17, (object)str18, (object)str20, (object)str21, (object)str22);
                //if (index1 > 0)
                    str23 += ",";
                str2 = str2 + str23 + "\r\n";// + string.Format(zgcAllTableCore._dictionarySelf, (object)str4, (object)index1) + "\r\n";
            }
            return (str1 + string.Format(zgcAllTableCore._gbDictionary, (object)str2, (object)zgcAllTableCore._sessionStore)).ToString();
        }

        //version 09/2018
        public static string BuildJSObj(
      Dictionary<string, List<Dictionary<string, object>>> mapTables,
      List<Dictionary<string, object>> tablesObj,
      List<Dictionary<string, object>> columsObj,
      List<Dictionary<string, object>> refcolumsObj,
      string ModelDb,
      string typeBuild = "full")
        {
            string str1 = "";
            string str2 = "";
            for (int index1 = 0; index1 < tablesObj.Count; ++index1)
            {
                string str3 = "";
                string str4 = string.Concat(tablesObj[index1]["name"]);
                int num1 = (int)tablesObj[index1]["id"];
                string.Concat((object)index1);
                string format1 = "{{ field: \"{3}\", mergename: [1], objAjax: {{ AjaxObj: {{ a: \"fGet{1}\", c: {{}}, _f: \"{2}\", ModelDb: \"{0}\" }}, APIkey: \"kUcHUoWsxLPrIJy$rTcbeG5k\" }} }}";
                bool flag1 = true;
                int num2 = 0;
                List<Dictionary<string, object>> mapTable1 = mapTables[str4];
                List<string> stringList = new List<string>();
                for (int index2 = 0; index2 < mapTable1.Count; ++index2)
                {
                    Dictionary<string, object> dictionary = mapTable1[index2];
                    string str5 = (string)dictionary["name"];
                    if (!(typeBuild == "part") || !str5.ToLower().Contains("isprg"))
                    {
                        string str6 = "";
                        if ((int)dictionary["tableid"] == num1)
                        {
                            string str7 = "true";
                            string str8 = "true";
                            string str9 = "true";
                            bool flag2 = false;
                            for (int index3 = 0; index3 < refcolumsObj.Count; ++index3)
                            {
                                if (num1 == (int)refcolumsObj[index3]["id"] && str5 == (string)refcolumsObj[index3]["Parentcolumn"])
                                {
                                    flag2 = true;
                                    string key = (string)refcolumsObj[index3]["Referencedtable"];
                                    string str10 = (string)refcolumsObj[index3]["Referencedcolumn"];
                                    bool flag3 = false;
                                    List<Dictionary<string, object>> mapTable2 = mapTables[key];
                                    for (int index4 = 0; index4 < mapTable2.Count; ++index4)
                                    {
                                        string str11 = (string)mapTable2[index4]["name"];
                                        if (str11.ToLower() == "name" || str11.ToLower() == "fullname")
                                        {
                                            str10 = str10 + "," + str11;
                                            flag3 = true;
                                            break;
                                        }
                                    }
                                    for (int index4 = 0; index4 < mapTable2.Count; ++index4)
                                    {
                                        string str11 = (string)mapTable2[index4]["name"];
                                        if (str11.ToLower() == "code")
                                        {
                                            str10 = str10 + "," + str11;
                                            flag3 = true;
                                            break;
                                        }
                                    }
                                    if (!flag3)
                                        str10 += ",Id";
                                    stringList.Add(string.Format(format1, (object)ModelDb, (object)key, (object)str10, (object)str5));
                                    str6 = " , type: \"select\", option:" + string.Format(format1, (object)ModelDb, (object)key, (object)str10, (object)str5);
                                    break;
                                }
                            }
                            string str12 = dictionary["type"].ToString();
                            if (str5.ToLower().IndexOf("isprg") >= 0)
                            {
                                str7 = "false";
                                str8 = "false";
                                str9 = "false";
                            }
                            if (str12 == "datetime")
                                str6 = ", type: \"datetime\"";
                            string cs = zgcCreateClassCore.SqlToCS(dictionary["type"].ToString());
                            if (!flag2)
                            {
                                if (cs == "double")
                                    str6 = ", type: \"money\" , precition: 2";
                                if (cs == "long" || cs == "int")
                                    str6 = ", type: \"money\" ";
                            }
                            if (str5.ToLower() == "id")
                                str6 = ", type: \"hidden\"";
                            string lower = str5.ToLower();
                            if (lower.Contains("phone"))
                                str6 = ", color: 'green',addon: { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-phone' }";
                            else if (lower.Contains("weight"))
                                str6 = ", addon: { text: '(kg)', css: 'gb-gcolor' }";
                            else if (lower.Contains("cost") || lower.Contains("price"))
                                str6 = ",color: 'orange', addon: { text: '(VNĐ)', css: 'gb-gcolor' }";
                            else if (lower.Contains("barcode"))
                                str6 = ",color: 'orange', addon:  { text: '', css: 'gb-fcolor', icon: 'glyphicon glyphicon-barcode' }";
                            str3 = (flag1 ? str3 + "\t\t\t" : str3 + "\t\t\t,") + string.Format(zgcAllTableCore._fields, (object)num2, (object)str5, (object)str5, (object)str6, (object)str7, (object)str8, (object)str9);
                            flag1 = false;
                            ++num2;
                        }
                        else if (!flag1)
                            break;
                    }
                }
                string str13 = string.Format(zgcAllTableCore._rightOnTable, (object)"");
                string str14 = "";
                for (int index2 = 0; index2 < stringList.Count; ++index2)
                    str14 = index2 != 0 ? str14 + "\t\t\t\t," + stringList[index2] + "\r\n" : str14 + stringList[index2] + "\r\n";
                string str15 = string.Format(zgcAllTableCore._listRefTables, (object)str14);
                string format2 = "{{ AjaxObj: {{ a: \"fGet{1}\", _f: \"{2}\", _gb: \"\", ModelDb: \"{0}\" }}, APIkey: \"kUcHUoWsxLPrIJy$rTcbeG5k\" }}\r\n";
                string joinList1 = zgcAllTableCore.GetJoinList(mapTable1, "name", "part");
                string joinList2 = zgcAllTableCore.GetJoinList(mapTable1, "name");
                string str16 = string.Format(format2, (object)ModelDb, (object)str4, (object)"*") + "\t\t\t\t," + string.Format(format2, (object)ModelDb, (object)str4, (object)joinList1) + "\t\t\t\t," + string.Format(format2, (object)ModelDb, (object)str4, (object)joinList2);
                string str17 = string.Format(zgcAllTableCore._listSelfTables, (object)str16);
                string str18 = string.Format(zgcAllTableCore._fieldsList, (object)str3);
                string str19 = zgcAllTableCore.BuildForm(mapTable1);
                string str20 = string.Format(zgcAllTableCore._editform, (object)str19);
                string str21 = string.Format(zgcAllTableCore._updateform, (object)str19);
                string str22 = string.Format(zgcAllTableCore._listReports, (object)zgcAllTableCore.BuildReportAll(mapTable1, str4));
                string str23 = string.Format(zgcAllTableCore.objScope, (object)index1, (object)str13, (object)"", (object)str4, (object)str15, (object)str17, (object)str18, (object)str20, (object)str21, (object)str22);
                str2 = str2 + str23 + "\r\n" + string.Format(zgcAllTableCore._dictionarySelf, (object)str4, (object)index1) + "\r\n";
            }
            return (str1 + string.Format(zgcAllTableCore._gbDictionary, (object)str2, (object)zgcAllTableCore._sessionStore)).ToString();
        }
        //end Version 09/2018
        public static string BuildReportAll(
          List<Dictionary<string, object>> columsObj,
          string tablename)
        {
            string str1 = "";
            string str2 = zgcAllTableCore.BuildReport(columsObj);
            return (str1 + string.Format(zgcAllTableCore._reportStr, (object)tablename, (object)str2) + "\r\n\t\t\t\t," + string.Format(zgcAllTableCore._reportStr, (object)(tablename + "detail"), (object)str2)).ToString();
        }

        public static string BuildReport(List<Dictionary<string, object>> columsObj)
        {
            string str1 = "";
            string format = "{{ ColName: '{0}', FormName: '{1}', PositionData: {2}, IsShow: 'isShow', ColType: '{3}', Parent: 'isParent', iNotFillData: 0 }}\r\n";
            bool flag = false;
            int num = 0;
            for (int index = 0; index < columsObj.Count; ++index)
            {
                Dictionary<string, object> dictionary = columsObj[index];
                string str2 = (string)dictionary["name"];
                string str3 = (string)dictionary["type"];
                if (!(str2.ToLower() == "id") && !str2.ToLower().Contains("isprg"))
                {
                    if (flag)
                    {
                        str1 = str1 + string.Format("\t\t\t\t/*{0}*/,", (object)(num + 1)) + string.Format(format, (object)str2, (object)str2, (object)(num + 1), (object)str3);
                        flag = true;
                        ++num;
                    }
                    else
                    {
                        str1 = str1 + string.Format("/*{0}*/", (object)(num + 1)) + string.Format(format, (object)str2, (object)str2, (object)(num + 1), (object)str3);
                        flag = true;
                        ++num;
                    }
                }
            }
            return str1.ToString();
        }

        public static string BuildForm(List<Dictionary<string, object>> columsObj)
        {
            string str1 = "";
            string str2 = "{{ row: [{0}], style: [\".col-md-2\", \".col-md-4\", \".col-md-2\", \".col-md-4\"] }},\r\n";
            string format1 = "{{ row: [{0}], style: [\".col-md-2\", \".col-md-4\"] }},\r\n";
            bool flag = false;
            int num1 = 0;
            for (int index = 0; index < columsObj.Count; ++index)
            {
                string str3 = (string)columsObj[index]["name"];
                if (!(str3.ToLower() == "id") && !str3.ToLower().Contains("isprg"))
                {
                    if (index + 1 < columsObj.Count && !columsObj[index + 1]["name"].ToString().ToLower().Contains("isprg"))
                    {
                        int num2;
                        if (flag)
                        {
                            string str4 = str1;
                            string format2 = str2;
                            string str5 = num1.ToString();
                            num2 = num1 + 1;
                            string str6 = num2.ToString();
                            string str7 = str5 + "," + str6;
                            string str8 = string.Format(format2, (object)str7);
                            str1 = str4 + "\t\t\t\t" + str8;
                        }
                        else
                        {
                            string str4 = str1;
                            string format2 = str2;
                            string str5 = num1.ToString();
                            num2 = num1 + 1;
                            string str6 = num2.ToString();
                            string str7 = str5 + "," + str6;
                            string str8 = string.Format(format2, (object)str7);
                            str1 = str4 + str8;
                        }
                        ++index;
                        flag = true;
                        ++num1;
                        ++num1;
                    }
                    else
                    {
                        str1 = !flag ? str1 + string.Format(format1, (object)num1) : str1 + "\t\t\t\t" + string.Format(format1, (object)num1);
                        flag = true;
                        ++num1;
                    }
                }
            }
            return str1.ToString();
        }

        public static string BuildObj(
          Dictionary<string, List<Dictionary<string, object>>> mapTables,
          List<Dictionary<string, object>> tablesObj,
          List<Dictionary<string, object>> columsObj,
          string typeBuild = "full")
        {
            string str1 = "";
            for (int index1 = 0; index1 < tablesObj.Count; ++index1)
            {
                string str2 = "";
                string key = string.Concat(tablesObj[index1]["name"]);
                int num = (int)tablesObj[index1]["id"];
                string.Concat((object)index1);
                List<Dictionary<string, object>> mapTable = mapTables[key];
                for (int index2 = 0; index2 < mapTable.Count; ++index2)
                {
                    Dictionary<string, object> dictionary = mapTable[index2];
                    string str3 = (string)dictionary["name"];
                    string cs = zgcCreateClassCore.SqlToCS(dictionary["type"].ToString());
                    if (typeBuild == "part")
                    {
                        if (!str3.ToLower().Contains("isprg"))
                            str2 += string.Format("\t\t public {0} {1} {{get;set;}}\r\n", (object)cs, (object)str3);
                    }
                    else
                        str2 += string.Format("\t\t public {0} {1} {{get;set;}}\r\n", (object)cs, (object)str3);
                }
                str1 += string.Format(zgcAllTableCore.classScopeDB, (object)key, (object)str2, (object)"", (object)"");
            }
            return str1.ToString();
        }

        private static string SqlToCS(object colType) => throw new NotImplementedException();

        private static string GetJoinList(
          List<Dictionary<string, object>> list,
          string name,
          string type = "full")
        {
            string str = "";
            for (int index = 0; index < list.Count; ++index)
            {
                if (list[index].ContainsKey(name) && (!(type == "part") || !list[index][name].ToString().ToLower().Contains("isprg")))
                    str = index <= 0 ? str + list[index][name] : str + "," + list[index][name];
            }
            return str;
        }
    }
}
