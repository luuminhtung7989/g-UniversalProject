using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Text;
using System.Web;
using zgc0LibAdmin;

namespace WebApplication.Core
{
    public partial class PR
    {
        public static string _sc = ConfigurationManager.AppSettings["ConnectionString"];
        //public static string _sc = "server=ADMINISTRATOR\\SQLEXPRESS;database=CMRCanteenBaRia;uid=cmccanteen;pwd=canteen@123";

        public static string _scc = ConfigurationManager.AppSettings["ConnectionStringEncrypt"];
        //public static string _scc =
        //    "Z6l6o5pX6Vp9d9+HNDHODhyprwXHDHD4O9xFQO0faNEJ/JlLRWatl74GWoBc/KKKpcuZ6pPRkvDjA65QJd1wJNOpbeTLZ+0hjcu63nLtViBKyAFkP1Ownp1Af7A4qa40";
        //public static string _sc = "server=.\\SQLExpress;Trusted_Connection=Yes;database=VXR_BMS_001;";
        //for Account

        public static void rp(object obj, out object oo)
        {
            var x = new XR(obj); XR.Init(_sc, _scc, DR._a, DR._h, DR._f);
            var r = x.R().A().LC().EX().LS1().LG().B().G();
            oo = new Rs {Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = 0};
        }
        public static void CheckSizeFile(HttpContext c, StringBuilder sb, long s)
        {
            var path = string.Format("/Files/Reports/BaoCaoDoanhTHuChiTiet-{0}.xls", DateTime.UtcNow.ToBinary());
            StreamWriter sw = new StreamWriter(HttpContext.Current.Server.MapPath("~" + path));
            sw.WriteLine(sb);
            c.Response.ContentType = "text/plain";
            if (sw.BaseStream.Length < s)
            {
                c.Response.Write(sb + "");
            }
            else
            {
                sw.Flush();
                c.Response.Write(string.Format("<a href='/service{0}'>Click vào đây để down báo cáo</a>", path));
            }
        }
        public static void Absent(object obj, out object oo)
        {
            var _cf = (Dictionary<string, object>)((Dictionary<string, object>)obj)["_cf"];
            SqlConnection mC = new SqlConnection(_sc);
            mC.Open();
            SqlTransaction mT = mC.BeginTransaction(); // Start a local transaction.
            DataTable dt = new DataTable();
            try
            {
                SqlCommand mD;
                if (_cf.ContainsKey("alterView") && (_cf["alterView"] as ArrayList).Count > 0)
                {
                    var sql = _cf["alterView"] as ArrayList;
                    for (int i = 0; i < sql.Count; i++)
                    {
                        mD = mC.CreateCommand(); // Enlist the command in the current transaction.
                        mD.CommandTimeout = 36000;
                        mD.Transaction = mT;
                        mD.CommandText = sql[i] + "";
                        mD.ExecuteNonQuery();

                    }
                }
                mD = mC.CreateCommand(); // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                mD.Transaction = mT;
                mD.CommandText = "select KieuChu, KieuChu1, KieuChu2, KieuChu3, KieuChu4, KieuChu5, " +
                    "KieuNgay1, KieuNgay, KieuChu6, KieuChu7, Number from GBL_TRAINNING_COURSE_CLASS_TEACHER_TEMPHOUR " +
                    "order by Number, KieuChu, KieuChu1, KieuChu2, KieuChu3, KieuChu4, KieuChu5, KieuNgay ";
                var adap = new SqlDataAdapter(mD);
                adap.Fill(dt);
                mT.Commit();
            }
            catch (Exception e)
            {
                try
                {
                    mT.Rollback();
                }
                catch (SqlException ex)
                {
                    oo = "ERROR";
                }
            }
            finally
            {
                mC.Close();
            }
            if (dt.Rows.Count > 0)
            {
                StringBuilder builder = new StringBuilder();
                StringBuilder b = new StringBuilder();
                builder.Append(_cf.ContainsKey("hdValue") ? (_cf["hdValue"] + "") : "");
                builder.Append("<table cellspacing=0 border=1 class=\"reportDiemDanh\">");
                builder.Append("<thead><tr><th>No.</th><th><div style=\"width: 250px\">Student</div></th><th>Nick Name</th><th>FirstAO</th><th>Phone</th><th>Phone 2</th><th>Invoice</th>");
                b.Append("<tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>");
                string t = dt.Rows[0][10] + "";
                var i = 0;
                while (i < dt.Rows.Count && t == (dt.Rows[i][10] + ""))
                {
                    builder.Append("<th>" + ((DateTime)dt.Rows[i][7]).ToString("dd/MM/yyyy") + "</th>");
                    b.Append("<td>" + dt.Rows[i][8] + "</td>");
                    i++;
                }
                builder.Append("<th>Attendence</th><th>Invoice Date</th><th>Address</th></tr></thead>");
                b.Append("<td></td><td></td><td></td></tr>");
                builder.Append(b);
                for (int k = 0; k < (dt.Rows.Count + 1) / i; k++)
                {
                    builder.Append("<tr><td>" + (k + 1) + "</td><td>" + dt.Rows[k * i][0] + "</td><td></td><td>" + dt.Rows[k * i][1] + "</td><td>" +
                            dt.Rows[k * i][2] + "</td><td>" + dt.Rows[k * i][3] + "</td><td>" + dt.Rows[k * i][4] + "</td>");
                    for (int j = 0; j < i; j++)
                    {
                        builder.Append("<td>" + dt.Rows[k * i + j][9] + "</td>");
                    }
                    builder.Append("<td></td><td>" + (string.IsNullOrEmpty(dt.Rows[k * i][6] + "") ? "" : ((DateTime)dt.Rows[k * i][6]).ToString("dd/MM/yyyy")) + "</td><td>" + dt.Rows[k * i][5] + "</td></tr>");
                }
                builder.Append("</tbody></table>");
                oo = builder;
            }
            else oo = "";
        }
    }
}
