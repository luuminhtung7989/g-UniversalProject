// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.P
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;
<<<<<<< HEAD
using System.Data.SqlClient;
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea

namespace zgcSpaceKernel.Core
{
    class SQL
    {
        public static void gcLookupProcess(object obj, out object oo, string ModelDb)
        {
            object[] objArray = DGobal.Dict(ModelDb);
            Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>)objArray[1];
            X x1 = new X(obj);
            x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)objArray[0], ModelDb);
            X x2 = x1.R().A();
            foreach (C c in x2._a.T[0][0] == 'G' ? dictionary[int.Parse(x2._a.T[2])] : dictionary[int.Parse(x2._a.T[1])])
                x2 = x2.Pc(c.T[7]);
            R r = x2._CR()._CF().L().S().EX().G();
            oo = (object)new Rs()
            {
                Status = (r._e ? "FAIL" : "OK"),
                Records = r._d,
                TotalRecordCount = r._t,
                Infor = (object)x2._sql
            };
        }

        public static void Run(object obj, out object oo, string ModelDb)
        {
            object[] objArray = DGobal.Dict(ModelDb);
            Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>)objArray[1];
            X x1 = new X(obj);
            x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)objArray[0], ModelDb);
            X x2 = x1.R().A();
            foreach (C c in x2._a.T[0][0] == 'G' ? dictionary[int.Parse(x2._a.T[2])] : dictionary[int.Parse(x2._a.T[1])])
                x2 = x2.Pc(c.T[7]);
            R r = x2.L().S().EX().G();
            oo = (object)new Rs()
            {
                Status = (r._e ? "FAIL" : "OK"),
                Records = r._d,
                TotalRecordCount = r._t,
                Infor = (object)x2._sql
            };
        }

        public static void Sql(object obj, out object oo, string ModelDb)
        {
            object[] objArray = DGobal.Dict(ModelDb);
            Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>)objArray[1];
            X x1 = new X(obj);
            x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)objArray[0], ModelDb);
            x1.jSonFormat = true;
            //-----------------------------------------------------------------
            //process here 
            string sql = "";
            if (x1._ip.ContainsKey("sql"))
                sql = (string)x1._ip["sql"];
            //-----------------------------------------------------------------
<<<<<<< HEAD
            if (x1._ip.ContainsKey("type") && (x1._ip["type"].ToString() == "p"))
=======
            if (x1._ip.ContainsKey("type") && (x1._ip["type"].ToString()=="p"))
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
            {
                x1.GDP();
            }
            else if (x1._ip.ContainsKey("select"))
            {
                //swap table and a action
                x1._ip["a"] = "fGet" + x1._ip["table"];
                if (x1._ip.ContainsKey("_f"))//fix 
                    x1._f = x1._ip["_f"].ToString();
                if (x1._ip.ContainsKey("_gb"))//fix 
                    x1._f = x1._ip["_gb"].ToString();
                x1.R().A().L().S().EX().G();
            }
            else if (x1._ip.ContainsKey("insert"))
            {
                //swap table and a action
                x1._ip["a"] = "Insert" + x1._ip["table"];
                x1.R().A().L().S().EX().G();
            }
            else if (x1._ip.ContainsKey("update"))
            {
                x1._ip["a"] = "Update" + x1._ip["table"];
                x1.R().A().L().S().EX().G();
            }
            else if (x1._ip.ContainsKey("delete"))
            {
                x1._ip["a"] = "Remove" + x1._ip["table"];
                x1.R().A().L().S().EX().G();
            }
            else if (x1._ip.ContainsKey("sql"))
<<<<<<< HEAD
            {
                if(x1._ip.ContainsKey("noquery"))
                {
                    //fix 2021
                    SqlCommand cm = new SqlCommand(sql);
                    Rs trs = zgcLibCore.zgcHelper.ExecProc(cm,x1._cs, false);
                    trs.Infor = (object)sql;
                    oo = (object)trs;
                    return;
                }
                else 
                    x1.GD(sql);
            }
=======
                        x1.GD(sql);
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
            R r = x1.G();
            oo = (object)new Rs()
            {
                Status = (r._e ? "FAIL" : "OK"),
                Records = r._d,
                TotalRecordCount = r._t,
                Infor = (object)x1._sql
            };
        }

        public static void GetSQL(object obj, out object oo, string ModelDb)
        {
            object[] objArray = DGobal.Dict(ModelDb);
            Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>)objArray[1];
            X x1 = new X(obj);
            x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>)objArray[0], ModelDb);
            X x2 = x1.R().A();
            foreach (C c in x2._a.T[0][0] == 'G' ? dictionary[int.Parse(x2._a.T[2])] : dictionary[int.Parse(x2._a.T[1])])
                x2 = x2.Pc(c.T[7]);
            X x3 = x2.L().S();
            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)x3._sql,
                TotalRecordCount = 0,
                Infor = (object)x3._sql
            };
        }
    }
}
