// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.DGobalUI
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;
using zgc0Admin;
using zgcLibCore;

namespace zgcSpaceKernel.Core
{
    public class DGobalUI
    {
        public static string gbDatabaseDb = nameof(gbDatabaseDb);
        public static Dictionary<string, C[]> _dD_DBStr;
        public static Dictionary<int, object[]> _dD_DP;
        public static Dictionary<string, Dictionary<string, object>> _dD_ListDatabass;
        public static Dictionary<string, Dictionary<string, object>> _dD_TablesCache;
        public static Dictionary<string, Dictionary<string, object>> _dD_TablesAutoAsignColumn;
        public static Dictionary<string, object[]> _dD_List_fd_a = (Dictionary<string, object[]>)null;

        //new 23/06 for Client UI
        //Lưu 1 cấp _objDictionary=>ObjectName
        public static Dictionary<string, object> _objDictionary;

        //Lưu 2 cấp (_objUserDictionary=>UserName)=>ObjectName Bản thân biến Object này là 1 thể hiện ở trên _objDictionary
        public static Dictionary<string, object> _objUserDictionary;
        public static object InitAll(string ModelDb)
        {
            Rs rs = new Rs();
            return rs;
        }
        public static object DevSaveAllUItoDisk(string ModelDb)
        {
            Rs  rs= new Rs();
            return rs;
        }
        public static object DevAllUItoDisk(string ModelDb)
        {
            Rs rs = new Rs();
            return rs;
        }
        //--------------------------------------------------------------

        public static object DevSaveUItoDisk(object obj, string ModelDb)
        {
            Rs rs = new Rs();
            return rs;
        }
        public static object DevLoadUI(object obj,string ModelDb)
        {
            Rs rs = new Rs();
            return rs;
        }
        //End

        public static DGobalUI.DbName Lookup(string ModelDb)
        {
            switch (ModelDb)
            {
                case "AccountingDb":
                    return DGobalUI.DbName.AccountingDb;
                case "BusLinesDb":
                    return DGobalUI.DbName.BusLinesDb;
                case "CustomerDb":
                    return DGobalUI.DbName.CustomerDb;
                case "ExpressLogDb":
                    return DGobalUI.DbName.ExpressLogDb;
                case "ExpressMainDb":
                    return DGobalUI.DbName.ExpressMainDb;
                case "ExpressReportDb":
                    return DGobalUI.DbName.ExpressReportDb;
                case "ExpressSMSDb":
                    return DGobalUI.DbName.ExpressSMSDb;
                case "HumanResourceDb":
                    return DGobalUI.DbName.HumanResourceDb;
                case "TaxiDb":
                    return DGobalUI.DbName.TaxiDb;
                default:
                    return DGobalUI.DbName.CanteenDb;
            }
        }

        public static string SqlString(string key, bool bDecript = false)
        {
            if (DGobalUI._dD_DBStr == null)
                DGobalUI.Init();
            C[] cArray = DGobalUI._dD_DBStr[key];
            return bDecript ? zgcHelper.Decrypt(cArray[0].T[4]) : cArray[0].T[4];
        }

        public static object[] Dict(string key)
        {
            if (DGobalUI._dD_List_fd_a == null)
                DGobalUI.Load_fda(key);
            return DGobalUI._dD_List_fd_a[key];
        }

        public static void Load_fda(string ModelDb)
        {
            string sql1 = "SELECT   o.name, o.object_id as id, o.type  FROM sys.objects as o WHERE(o.type = 'U') AND(o.name <> 'dtproperties') order by o.create_date ";
            X x1 = new X((object)null);
            x1.Init(DGobalUI.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x1.jSonFormat = true;
            x1.GD(sql1);
            string sql2 = "SELECT  c.name, c.object_id as tableid, TYPE_NAME(c.user_type_id) as type,  c.max_length as length, c.column_id, c.is_nullable, c.is_identity FROM sys.columns as c";
            X x2 = new X((object)null);
            x2.Init(DGobalUI.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x2.jSonFormat = true;
            x2.GD(sql2);
            string sql3 = "SELECT  fk.name, fk.parent_object_id as id,  OBJECT_NAME(fk.parent_object_id) 'Parenttable',  c1.name 'Parentcolumn',  OBJECT_NAME(fk.referenced_object_id) 'Referencedtable',  c2.name 'Referencedcolumn'  FROM   sys.foreign_keys fk  INNER JOIN  sys.foreign_key_columns fkc ON fkc.constraint_object_id = fk.object_id  INNER JOIN  sys.columns c1 ON fkc.parent_column_id = c1.column_id AND fkc.parent_object_id = c1.object_id  INNER JOIN  sys.columns c2 ON fkc.referenced_column_id = c2.column_id AND fkc.referenced_object_id = c2.object_id  order by Parenttable";
            X x3 = new X((object)null);
            x3.Init(DGobalUI.SqlString(ModelDb, true), (Dictionary<string, C>)null, ModelDb);
            x3.jSonFormat = true;
            x3.GD(sql3);
            List<Dictionary<string, object>> d1 = (List<Dictionary<string, object>>)x1.G()._d;
            List<Dictionary<string, object>> d2 = (List<Dictionary<string, object>>)x2.G()._d;
            List<Dictionary<string, object>> d3 = (List<Dictionary<string, object>>)x3.G()._d;
            Dictionary<string, C> dictionary1 = new Dictionary<string, C>();
            Dictionary<int, C[]> dictionary2 = new Dictionary<int, C[]>();
            C c1 = new C()
            {
                T = new string[6]
              {
          "E",
          "0",
          "0",
          "gcGOBAL_PROC_RunSQL",
          "gcGOBAL_PROC_RunSQL",
          "gcGOBAL_PROC_RunSQL"
              }
            };
            dictionary1.Add("Run", c1);
            for (int index1 = 0; index1 < d1.Count; ++index1)
            {
                string str1 = string.Concat(d1[index1]["name"]);
                int num1 = (int)d1[index1]["id"];
                string str2 = string.Concat((object)index1);
                int num2 = 0;
                for (int index2 = 0; index2 < d3.Count; ++index2)
                {
                    if (num1 == (int)d3[index2]["id"])
                        ++num2;
                }
                if (num2 > 0)
                    --num2;
                string str3 = num2 < 10 ? "0" + (object)num2 : string.Concat((object)num2);
                dictionary1.Add("pGet" + str1, new C()
                {
                    T = new string[6]
                  {
            "P",
            str2,
            str2,
            str1,
            "zgcl_" + str1 + str3,
            str1
                  }
                });
                dictionary1.Add("fGet" + str1, new C()
                {
                    T = new string[6]
                  {
            "G",
            str2,
            str2,
            str1,
            "zgcl_" + str1 + str3,
            str1
                  }
                });
                dictionary1.Add("Insert" + str1, new C()
                {
                    T = new string[6]
                  {
            "I",
            str2,
            str2,
            str1,
            "zgcl_" + str1 + str3,
            str1
                  }
                });
                dictionary1.Add("Update" + str1, new C()
                {
                    T = new string[6]
                  {
            "U",
            str2,
            str2,
            str1,
            "zgcl_" + str1 + str3,
            str1
                  }
                });
                dictionary1.Add("Remove" + str1, new C()
                {
                    T = new string[6]
                  {
            "D",
            str2,
            str2,
            str1,
            "zgcl_" + str1 + str3,
            str1
                  }
                });
                List<C> cList = new List<C>();
                for (int index2 = 0; index2 < d2.Count; ++index2)
                {
                    Dictionary<string, object> dictionary3 = d2[index2];
                    if ((int)dictionary3["tableid"] == num1)
                    {
                        string str4 = "";
                        string str5 = "";
                        string str6 = (string)dictionary3["name"];
                        for (int index3 = 0; index3 < d3.Count; ++index3)
                        {
                            if (num1 == (int)d3[index3]["id"] && str6 == (string)d3[index3]["Parentcolumn"])
                            {
                                str4 = (string)d3[index3]["Referencedtable"];
                                str5 = (string)d3[index3]["Referencedcolumn"];
                            }
                        }
                        cList.Add(new C()
                        {
                            T = new string[9]
                          {
                zgcCreateClassCore.SqlToSimpleType(Convert.ToString(dictionary3["type"])),
                Convert.ToString(dictionary3["is_nullable"]),
                "1",
                "",
                Convert.ToString(dictionary3["length"]),
                str4,
                str5,
                (string) dictionary3["name"],
                zgcCreateClassCore.SqlToCS(Convert.ToString(dictionary3["type"]))
                          }
                        });
                    }
                }
                dictionary2.Add(index1, cList.ToArray());
            }
            string sql4 = "SELECT * FROM table_d_expand ";
            X x4 = new X((object)null);
            x4.Init(DGobalUI.SqlString(DGobalUI.gbDatabaseDb, true), (Dictionary<string, C>)null, DGobalUI.gbDatabaseDb);
            x4.jSonFormat = true;
            x4.GD(sql4);
            List<Dictionary<string, object>> d4 = (List<Dictionary<string, object>>)x4.G()._d;
            for (int index = 0; index < d4.Count; ++index)
            {
                string str1 = string.Concat(d4[index]["name"]);
                if (ModelDb == str1)
                {
                    string key = string.Concat(d4[index]["funcname"]);
                    string str2 = string.Concat(d4[index]["tablename"]);
                    string str3 = string.Concat(d4[index]["viewname"]);
                    C c2 = new C()
                    {
                        T = new string[6]
                      {
              "E",
              "0",
              "0",
              str2,
              str3,
              key
                      }
                    };
                    dictionary1.Add(key, c2);
                }
            }
            object[] objArray = new object[2]
            {
        (object) dictionary1,
        (object) dictionary2
            };
            if (DGobalUI._dD_List_fd_a == null)
                DGobalUI._dD_List_fd_a = new Dictionary<string, object[]>();
            DGobalUI._dD_List_fd_a.Add(ModelDb, objArray);
        }

        public static object[] _fda(string DbName)
        {
            if (DGobalUI._dD_List_fd_a == null)
                DGobalUI.Load_fda(DbName);
            if (DGobalUI._dD_List_fd_a.ContainsKey(DbName))
                return DGobalUI._dD_List_fd_a[DbName];
            DGobalUI.Load_fda(DbName);
            return DGobalUI._dD_List_fd_a.ContainsKey(DbName) ? DGobalUI._dD_List_fd_a[DbName] : (object[])null;
        }

        public static C Lookup_aByKey(string DbName, string action)
        {
            if (DGobalUI._dD_List_fd_a == null)
                DGobalUI.Load_fda(DbName);
            if (DGobalUI._dD_List_fd_a.ContainsKey(DbName))
            {
                Dictionary<string, C> dictionary = DGobalUI._dD_List_fd_a[DbName][0] as Dictionary<string, C>;
                if (dictionary.ContainsKey(action))
                    return dictionary[action];
            }
            else
            {
                DGobalUI.Load_fda(DbName);
                if (DGobalUI._dD_List_fd_a.ContainsKey(DbName))
                {
                    Dictionary<string, C> dictionary = DGobalUI._dD_List_fd_a[DbName][0] as Dictionary<string, C>;
                    if (dictionary.ContainsKey(action))
                        return dictionary[action];
                }
            }
            return (C)null;
        }

        public static Dictionary<int, C[]> _fd(string DbName)
        {
            if (DGobalUI._dD_List_fd_a == null)
                DGobalUI.Load_fda(DbName);
            if (DGobalUI._dD_List_fd_a.ContainsKey(DbName))
                return DGobalUI._dD_List_fd_a[DbName][1] as Dictionary<int, C[]>;
            DGobalUI.Load_fda(DbName);
            return DGobalUI._dD_List_fd_a.ContainsKey(DbName) ? DGobalUI._dD_List_fd_a[DbName][1] as Dictionary<int, C[]> : (Dictionary<int, C[]>)null;
        }

        public static void Init()
        {
            Dictionary<string, C[]> dictionary = new Dictionary<string, C[]>();
            dictionary.Add("gbDatabaseDb", new C[2]
            {
        new C()
        {
          T = new string[5]
          {
            "D1",
            "DE1",
            "P1",
            "PE1",
            "WNUro85BQ2mzir2SO6l8WYw0S0N3J5M0NLhb5uVzYuEl7oevSQveBHqjZQg309NlgRJsDB4E5jKQ1fRUxEVnGP76/YfIC6yDDn5uPZtwjvx74dcCm9J2S0l3MSy3o+xt"
          }
        },
        new C() { T = new string[3]{ "Keep Space", "Not Use", "" } }
            });
            DGobalUI._dD_DBStr = dictionary;
            string sql = "SELECT * FROM table_databases ";
            X x = new X((object)null);
            x.Init(DGobalUI.SqlString(DGobalUI.gbDatabaseDb, true), (Dictionary<string, C>)null, DGobalUI.gbDatabaseDb);
            x.jSonFormat = true;
            x.GD(sql);
            List<Dictionary<string, object>> d = (List<Dictionary<string, object>>)x.G()._d;
            for (int index = 0; index < d.Count; ++index)
            {
                string key = string.Concat(d[index]["name"]);
                string str = string.Concat(d[index]["SqlString"]);
                C[] cArray = new C[1]
                {
          new C()
          {
            T = new string[5]
            {
              "D1",
              "DE1",
              "P1",
              "PE1",
              str
            }
          }
                };
                if (DGobalUI._dD_DBStr == null)
                    DGobalUI._dD_DBStr = new Dictionary<string, C[]>();
                DGobalUI._dD_DBStr.Add(key, cArray);
            }
        }

        public enum DbName
        {
            ExpressReportDb = 1,
            ExpressSMSDb = 2,
            ExpressLogDb = 3,
            CustomerDb = 4,
            HumanResourceDb = 5,
            AccountingDb = 6,
            ExpressMainDb = 7,
            BusLinesDb = 8,
            TaxiDb = 9,
            CanteenDb = 10, // 0x0000000A
        }
    }
}
