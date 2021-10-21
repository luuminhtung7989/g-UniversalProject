// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.PI
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Web;
using zgcLibCore;

namespace zgcSpaceKernel.Core
{
  public class PI
  {
    public static string[] getGetNewValueMa(string user, string Code, string table)
    {
      string[] strArray = new string[2]{ "", "" };
      strArray[0] = zgc0HelperSQL.getAutoGenCode((SqlCommand) null, "MaCT", "zgcBUILDIN_GOBAL_AutoGenCode", "Date", Code, "4", "Text", "MaCT", "", "", table);
      strArray[1] = zgc0HelperSQL.getAutoGenCode((SqlCommand) null, "SoCT", "zgcBUILDIN_GOBAL_AutoGenCode", "Normal", Code, "8", "Text", "SoCT", "", "", table);
      return strArray;
    }

    public static void createDataExtra(object obj, out object oo)
    {
      string user = "crmgobal";
      Dictionary<string, object> dictionary = (Dictionary<string, object>) obj;
      C c = D10._a[dictionary["a"] as string];
      C[] cArray = D10._fd[int.Parse(c.T[1])];
      int num = 1;
      for (int index = 0; index < cArray.Length; ++index)
        num += string.IsNullOrEmpty(cArray[index].T[3]) ? 0 : 1;
      object[] objArray = new object[cArray.Length + num];
      string[] getNewValueMa = PI.getGetNewValueMa(user, string.Concat(dictionary["t"]), c.T[3]);
      string str1 = getNewValueMa[0];
      string str2 = getNewValueMa[1];
      for (int index = 0; index < cArray.Length; ++index)
      {
        switch (cArray[index].T[7])
        {
          case "Id":
            objArray[index + 1] = (object) -1;
            break;
          case "MaCT":
            objArray[index + 1] = (object) str1;
            break;
          case "NgayLap":
            objArray[index + 1] = (object) DateTime.Now;
            break;
          case "SoCT":
            objArray[index + 1] = (object) str2;
            break;
          case "isPrgAccountId":
                        objArray[index + 1] = "";// HttpContext.Current.Session["gcAccountId"];
            break;
          case "isPrgAccountUpdateId":
                        objArray[index + 1] = "";// HttpContext.Current.Session["gcAccountId"];
            break;
          case "isPrgCreateDate":
            objArray[index + 1] = (object) DateTime.Now;
            break;
          case "isPrgOrdered":
            objArray[index + 1] = (object) str2;
            break;
          case "isPrgPartComp":
                        objArray[index + 1] = "";// (object) zgc0HelperSQL.getPartComp(int.Parse(HttpContext.Current.Session["gcAccountId"].ToString()), int.Parse(HttpContext.Current.Session["gcMaCanBoId"].ToString()));
            break;
          case "isPrgSmField":
                        objArray[index + 1] = "";// (object) (Convert.ToDateTime(DateTime.Now).ToString() + " | " + zgc0HelperSQL.getPartComp(int.Parse(HttpContext.Current.Session["gcAccountId"].ToString()), int.Parse(HttpContext.Current.Session["gcMaCanBoId"].ToString())));
            break;
          case "isPrgVNKoDau":
                        objArray[index + 1] = "";// HttpContext.Current.Session["gcUserName"];
            break;
        }
      }
      oo = (object) new
      {
        Status = "OK",
        Records = new object[1][]{ objArray },
        TotalRecordCount = 1
      };
    }

    public static void createAutoCode(Dictionary<string, object> ip)
    {
      string user = "crmgobal";
      C c = D10._a[ip["a"] as string];
      string[] getNewValueMa = PI.getGetNewValueMa(user, string.Concat(ip["ti"]), c.T[3]);
      if (!ip.ContainsKey("d"))
        return;
      Dictionary<string, object> dictionary = ip["d"] as Dictionary<string, object>;
      dictionary["MaCT"] = (object) getNewValueMa[0];
      dictionary["SoCT"] = (object) getNewValueMa[1];
      dictionary["isPrgCreateDate"] = (object) DateTime.Now;
    }
  }
}
