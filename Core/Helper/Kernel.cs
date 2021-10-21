// Decompiled with JetBrains decompiler
// Type: WebApplication.Services.Kernel
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;
using System.Data;
using System.Reflection;
using zgcSpaceKernel.Core;
using zgc0Admin;
using zgcLibCore;

namespace WebApplication.Services
{
    public static class Kernel
    {
        public static object Process(object obj, string si, string ps, string ModelDb = "CanteenDb")
        {
            int num1 = int.Parse(si);
            int num2 = num1;
            if (num1 > 0)
                num2 = num1 / int.Parse(ps);
            int num3 = num2 + 1;
            object[] parameters = new object[3]
            {
        obj,
        (object) new
        {
          Status = "Fail",
          Records = (object) null,
          TotalRecordCount = 0
        },
        (object) ModelDb
            };
            Dictionary<string, object> dictionary = (Dictionary<string, object>)obj;
            if (dictionary.ContainsKey("bUpdate"))
            {
                if (num3 != (int)dictionary[nameof(si)])
                    dictionary[nameof(si)] = (object)num3;
            }
            else
            {
                dictionary[nameof(si)] = (object)num3;
                dictionary["mr"] = (object)int.Parse(ps);
            }
            if (dictionary.ContainsKey("a"))
            {
                if (obj != null)
                {
                    string action = dictionary["a"] as string;
                    C c = Kernel.Lookup(action, ModelDb);
                    if (c != null)
                    {
                        if (Kernel.LookupE(action, ModelDb))
                        {
                            object[] objArray = DGobal.Dict(ModelDb);
                            objArray[1].GetType().GetMethod(c.T[5])?.Invoke(objArray[1], parameters);
                        }
                        //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                        //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                        else if (action == "API")
                            return Kernel.CallAPIFunc((Dictionary<string, object>)dictionary);
                        else if (action == "SYS")
                            return Kernel.CallAPISysFunc((Dictionary<string, object>)dictionary);

                        //Gọi theo không gian đã setup
                        else
                            zgcSpaceKernel.Core.SQL.gcLookupProcess(parameters[0], out parameters[1], ModelDb);
                    }
                    //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                    //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                    //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                    else if (action == "SYS")
                        return Kernel.CallAPISysFunc((Dictionary<string, object>)dictionary);
                    else if (action == "API")
                        return Kernel.CallAPIFunc((Dictionary<string, object>)dictionary);
                    //Gọi các thủ tục SYS ở đây
                    else if (action == "SQL")
                        zgcSpaceKernel.Core.SQL.Sql(parameters[0], out parameters[1], ModelDb);
                    //Gọi theo không gian đã setup
                    else if (action != null && dictionary.ContainsKey("_sysfunc"))
                        Kernel.CallSysFunc((Dictionary<string, object>)dictionary["_sysfunc"]);
                }

                else
                    parameters[1] = (object)new
                    {
                        Status = "FAIL",
                        Records = "Không có quyền truy cập dữ liệu"
                    };
            }
            return parameters[1];
        }

        public static object P(object obj, string ModelDb = "CanteenDb")
        {

            object[] parameters = new object[3]
            {
        obj,
        (object) new Rs()
        {
          Status = "Fail",
          Records = (object) "",
          TotalRecordCount = 0
        },
        (object) ModelDb
            };
            Dictionary<string, object> dictionary = (Dictionary<string, object>)obj;
            if (dictionary.ContainsKey("a"))
            {
                if (obj != null)
                {
                    string action = dictionary["a"] as string;
                    C c = Kernel.Lookup(action, ModelDb);
                    if (c != null)
                    {
                        if (Kernel.LookupE(action, ModelDb))
                        {
                            object[] objArray = DGobal.Dict(ModelDb);
                            objArray[1].GetType().GetMethod(c.T[5])?.Invoke(objArray[1], parameters);
                        }
                        //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                        else if (action == "Run")
                            zgcSpaceKernel.Core.SQL.Run(parameters[0], out parameters[1], ModelDb);
                        //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                        else if (action == "SYS")
                            return Kernel.CallAPISysFunc((Dictionary<string, object>)dictionary);
                        //Gọi các thủ tục API ở đây sửa lại gọi trong file API
                        else if (action == "API")
                            return Kernel.CallAPIFunc((Dictionary<string, object>)dictionary);
                        //Gọi theo không gian đã setup
                        else
                            zgcSpaceKernel.Core.SQL.gcLookupProcess(parameters[0], out parameters[1], ModelDb);
                    }
                    //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                    else if (action == "SYS")
                        return Kernel.CallAPISysFunc((Dictionary<string, object>)dictionary);
                    //Gọi các thủ tục API ở đây sửa lại gọi trong file API
                    else if (action == "API")
                        return Kernel.CallAPIFunc((Dictionary<string, object>)dictionary);
                    //Gọi các thủ tục SYS ở đây
                    else if (action == "SQL")
                        zgcSpaceKernel.Core.SQL.Sql(parameters[0], out parameters[1], ModelDb);
                    //Gọi theo không gian đã setup
                    else if (action != null && dictionary.ContainsKey("_sysfunc"))
                        Kernel.CallSysFunc((Dictionary<string, object>)dictionary["_sysfunc"]);
                }
                else
                    parameters[1] = (object)new
                    {
                        Status = "FAIL",
                        Records = "Không có quyền truy cập dữ liệu"
                    };
            }
            return parameters[1];
        }

        public static Rs CallAPIFunc(Dictionary<string, object> dictionary)
        {
            string name = dictionary.ContainsKey("name") ? string.Concat(dictionary["name"]) : "";
            string ModelDb = dictionary.ContainsKey("ModelDb") ? string.Concat(dictionary["ModelDb"]) : "";
            object str = dictionary.ContainsKey("param") ? dictionary["param"] : (object)null;
            API sysP = new API();
            object[] parameters = new object[3]
            {
                (object) str,
                (object) new Rs()
                {
                  Status = "FAIL",
                  Records = (object) "",
                  TotalRecordCount = 0
                },
                ModelDb
            };
            MethodInfo method = sysP.GetType().GetMethod(name);
            if (!(method != (MethodInfo)null) || (object)method == null)
                return new Rs();
            // ISSUE: explicit non-virtual call
            method.Invoke((object)sysP, parameters);
            return parameters[1] as Rs;
        }
        public static Rs CallAPISysFunc(Dictionary<string, object> dictionary)
        {
            string name = dictionary.ContainsKey("name") ? string.Concat(dictionary["name"]) : "";
            string ModelDb = dictionary.ContainsKey("ModelDb") ? string.Concat(dictionary["ModelDb"]) : "";
            object str = dictionary.ContainsKey("param") ? dictionary["param"] : (object)null;
            APISys sysP = new APISys();
            object[] parameters = new object[3]
            {
                (object) str,
                (object) new Rs()
                {
                  Status = "FAIL",
                  Records = (object) "",
                  TotalRecordCount = 0
                },
                ModelDb
            };
            MethodInfo method = sysP.GetType().GetMethod(name);
            if (!(method != (MethodInfo)null) || (object)method == null)
                return new Rs();
            // ISSUE: explicit non-virtual call
            method.Invoke((object)sysP, parameters);
            return parameters[1] as Rs;
        }
        //fix 23/06/2021

        public static void CallSysFunc(Dictionary<string, object> _sysfunc)
        {
            string name = _sysfunc.ContainsKey("_funcname") ? string.Concat(_sysfunc["_funcname"]) : "";
            string str = _sysfunc.ContainsKey("_funcparam") ? string.Concat(_sysfunc["_funcparam"]) : (string)null;
            _sysP sysP = new _sysP();
            object[] parameters = new object[2]
            {
        (object) str,
        (object) new Rs()
        {
          Status = "FAIL",
          Records = (object) "",
          TotalRecordCount = 0
        }
            };
            MethodInfo method = sysP.GetType().GetMethod(name);
            if (!(method != (MethodInfo)null) || (object)method == null)
                return;
            // ISSUE: explicit non-virtual call
            method.Invoke((object)sysP, parameters);
        }
        public static object U(object obj, string ModelDb = "CanteenDb")
        {
            object[] parameters = new object[3]
            {
        obj,
        (object) new Rs()
        {
          Status = "FAIL",
          Records = (object) "",
          TotalRecordCount = 0
        },
        (object) ModelDb
            };
            Dictionary<string, object> dictionary1 = (Dictionary<string, object>)obj;
            //if (dictionary1.ContainsKey("id"))
            //{
            //  int key1 = (int) dictionary1["id"];
            //  C[] cArray = D10._fd[key1];
            //  if (dictionary1.ContainsKey("d"))
            //  {
            //    Dictionary<string, object> dictionary2 = (Dictionary<string, object>) dictionary1["d"];
            //    Dictionary<string, object> dictionary3 = new Dictionary<string, object>();
            //    for (int index = 0; index < cArray.Length; ++index)
            //    {
            //      string key2 = cArray[index].T[7];
            //      dictionary3[key2] = dictionary2["f" + (index <= 9 ? "0" + (object) index : string.Concat((object) index))];
            //    }
            //    dictionary1["d"] = (object) dictionary3;
            //  }
            //}
            if (dictionary1.ContainsKey("a"))
            {
                if (obj != null)
                {
                    string action = dictionary1["a"] as string;
                    C c = Kernel.Lookup(action, ModelDb);
                    if (c != null)
                    {
                        if (Kernel.LookupE(action, ModelDb))
                        {
                            object[] objArray = DGobal.Dict(ModelDb);
                            objArray[1].GetType().GetMethod(c.T[5])?.Invoke(objArray[1], parameters);
                        }
                        //Gọi các thủ tục SYS ở đây sửa lại gọi trong file SYS
                        else if (action == "Run")
                            zgcSpaceKernel.Core.SQL.Run(parameters[0], out parameters[1], ModelDb);

                        //Gọi theo không gian đã setup
                        else
                            zgcSpaceKernel.Core.SQL.gcLookupProcess(parameters[0], out parameters[1], ModelDb);
                    }
                }
                else
                    parameters[1] = (object)new Rs()
                    {
                        Status = "FAIL",
                        Records = (object)"Không có quyền truy cập dữ liệu"
                    };
            }
            return parameters[1];
        }

        public static object Rp(object obj, string ModelDb = "CanteenDb")
        {
            object[] parameters = new object[3]
            {
        obj,
        (object) new Rs()
        {
          Status = "FAIL",
          Records = (object) "",
          TotalRecordCount = 0
        },
        (object) ModelDb
            };
            Dictionary<string, object> dictionary = (Dictionary<string, object>)obj;
            if (dictionary.ContainsKey("a"))
            {
                if (obj != null)
                {
                    if (dictionary["a"] is string key3 && DR._a.ContainsKey(key3))
                    {
                        string[] strArray = DR._a[key3];
                        PR pr = new PR();
                        pr.GetType().GetMethod(strArray[3])?.Invoke((object)pr, parameters);
                    }
                }
                else
                    parameters[1] = (object)new Rs()
                    {
                        Status = "FAIL",
                        Records = (object)"Không có quyền truy cập dữ liệu"
                    };
            }
            return parameters[1];
        }

        private static C Lookup(string action, string ModelDb) => DGobal.Lookup_aByKey(ModelDb, action);

        private static bool LookupE(string action, string ModelDb)
        {
            DGobal.Dict(ModelDb);
            return (C)null != null;
        }

        public static Rs ConvertVNKD()
        {
            DataTable dataTable = zgcHelper.GetDataSet(" select * from gcGobal_STOCK_gcProductList", zgcHelper.getSqlStr()).Tables[0];
            string[] strArray = new string[dataTable.Rows.Count];
            for (int index = 0; index < dataTable.Rows.Count; ++index)
            {
                string Vietnamese = dataTable.Rows[index]["Name"].ToString();
                string str = dataTable.Rows[index]["Id"].ToString();
                string sql = "Update  gcGobal_STOCK_gcProductList set MoTa='" + zgcHelper.VNConvertVNKODAU(Vietnamese).ToUpper() + "' where Id=" + str;
                strArray[index] = sql;
                zgcHelper.ExecuteNonQuery(sql, zgcHelper.getSqlStr());
            }
            return new Rs()
            {
                Status = "OK",
                Records = (object)""
            };
        }

        public static void AddProperty(
          object expando,
          string propertyName,
          object propertyValue,
          bool addNewProp = false)
        {
            IDictionary<string, object> dictionary = expando as IDictionary<string, object>;
            if (dictionary.ContainsKey(propertyName))
            {
                dictionary[propertyName] = propertyValue;
            }
            else
            {
                if (!addNewProp)
                    return;
                dictionary.Add(propertyName, propertyValue);
            }
        }

        public static void BuildClassAndJs(
          string PathDirectory,
          string path,
          string pathJS,
          string ModelDb,
          string type = "full")
        {
            zgcAllTableCore.LoadAll(PathDirectory, path, pathJS, ModelDb, type);
        }
    }
}
