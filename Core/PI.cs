using System;
using System.Collections.Generic;
using System.Web;
using zgc0LibAdmin;

namespace WebApplication.Core
{
    public class PI
    {
        public static string[] getGetNewValueMa(string user, string Code, string table)
        {
            string[] tmpValue = { "", "" };
            tmpValue[0] = zgc0Support.getAutoGenCode(null, "MaCT", "zgcBUILDIN_GOBAL_AutoGenCode", "Date", Code, "4", "Text", "MaCT", "", "", table);
            tmpValue[1] = zgc0Support.getAutoGenCode(null, "SoCT", "zgcBUILDIN_GOBAL_AutoGenCode", "Normal", Code, "8", "Text", "SoCT", "", "", table);
            return tmpValue;
        }
        public static void createDataExtra(object obj, out object oo)
        {
            string user = "crmgobal";
            Dictionary<string, object> _ip = (Dictionary<string, object>)obj;
            var a = D._a[_ip["a"] as string];
            var f = D._fd[int.Parse(a.T[1])];
            int cF = 1;
            for (int i = 0; i < f.Length; i++) 
                cF += (string.IsNullOrEmpty(f[i].T[3]) ? 0 : 1);
            var d = new object[f.Length + cF];
            var t = getGetNewValueMa(user, (_ip["t"]+""), a.T[3]);
            string MaCT = t[0];
            string SoCT = t[1];
            for (int i = 0; i < f.Length; i++)
            {
                switch (f[i].T[7])
                {
                    case "Id":
                        d[i + 1] = -1;
                        break;
                    case "MaCT":
                        d[i + 1] = MaCT;
                        break;
                    case "SoCT":
                        d[i + 1] = SoCT;
                        break;
                    case "NgayLap":
                        d[i + 1] = DateTime.Now;
                        break;
                    case "isPrgOrdered":
                        d[i + 1] = SoCT;
                        break;
                    case "isPrgAccountId":
                        d[i + 1] = HttpContext.Current.Session["gcAccountId"];
                        break;
                    case "isPrgVNKoDau":
                        d[i + 1] = HttpContext.Current.Session["gcUserName"];
                        break;
                    case "isPrgCreateDate":
                        d[i + 1] = DateTime.Now;
                        break;
                    case "isPrgAccountUpdateId":
                        d[i + 1] = HttpContext.Current.Session["gcAccountId"];
                        break;
                    case "isPrgSmField":
                        d[i + 1] = Convert.ToDateTime(DateTime.Now) + " | " +
                                   zgc0Support.getPartComp(int.Parse(HttpContext.Current.Session["gcAccountId"].ToString()),
                                       int.Parse(HttpContext.Current.Session["gcMaCanBoId"].ToString()));
                        break;
                    case "isPrgPartComp":
                        d[i + 1] = zgc0Support.getPartComp(int.Parse(HttpContext.Current.Session["gcAccountId"].ToString()),
                            int.Parse(HttpContext.Current.Session["gcMaCanBoId"].ToString()));
                        break;
                }
            }
            oo = new { Result = "OK", Records = new[] { d }, TotalRecordCount = 1 };
        }
        public static void createAutoCode(Dictionary<string, object> ip)
        {
            string user = "crmgobal";
            var a = D._a[ip["a"] as string];
            var t = getGetNewValueMa(user, (ip["ti"] + ""), a.T[3]);
            if (ip.ContainsKey("d")) {
                var d = ip["d"] as Dictionary<string, object>;
                d["MaCT"] = t[0];
                d["SoCT"] = t[1];
                d["isPrgCreateDate"] = DateTime.Now;
            }
        }
    }
}