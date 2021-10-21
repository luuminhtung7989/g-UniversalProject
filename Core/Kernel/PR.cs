// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.PR
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using gcLibAdmin;

using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.IO;
using System.Text;
using System.Web;
using WebCore;
using zgcLibCore;

namespace zgcSpaceKernel.Core
{
    public class PR
    {
        public static void rp(object obj, out object oo, string ModelDb)
        {
            XR xr = new XR(obj);
            xr.Init(DGobal.SqlString(ModelDb, true), DGobal.SqlString(ModelDb), DR._a, DR._h, DR._f);
            R r = xr.R().A().LC().EX().LS1().LG().B().G();
            oo = (object)new Rs()
            {
                Status = (r._e ? "FAIL" : "OK"),
                Records = r._d,
                TotalRecordCount = 0
            };
        }

        public static void Rps(object obj, out object oo, string ModelDb)
        {
            XR xr = new XR(obj);
            xr.Init(DGobal.SqlString(ModelDb, true), DGobal.SqlString(ModelDb), DR._a, DR._h, DR._f);
            R r = xr.R().A().LC_().EX_().G();
            oo = (object)new Rs()
            {
                Status = (r._e ? "FAIL" : "OK"),
                Records = r._d,
                TotalRecordCount = r._t
            };
        }

        public static void CheckSizeFile(StringBuilder sb, long s)
        {
            var c = HttpContext.Current;
            string str = string.Format("/Files/Reports/BaoCaoDoanhTHuChiTiet-{0}.xls", (object)DateTime.UtcNow.ToBinary());
            //HttpContext.Current.Server.MapPath("~" + str)
            StreamWriter streamWriter = new StreamWriter(str);
            streamWriter.WriteLine((object)sb);
            c.Response.ContentType = "text/plain";
            if (streamWriter.BaseStream.Length < s)
            {
                //c.Response.(string.Concat((object) sb));
            }
            else
            {
                streamWriter.Flush();
                //c.Response.WriteAsync(string.Format("<a href='/service{0}'>Click vào đây để down báo cáo</a>", (object) str));
            }
        }

        public static void Absent(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> dictionary = (Dictionary<string, object>)((Dictionary<string, object>)obj)["_cf"];
            SqlConnection sqlConnection = new SqlConnection(DGobal.SqlString(ModelDb, true));
            sqlConnection.Open();
            SqlTransaction sqlTransaction = sqlConnection.BeginTransaction();
            DataTable dataTable = new DataTable();
            try
            {
                if (dictionary.ContainsKey("alterView") && (dictionary["alterView"] as ArrayList).Count > 0)
                {
                    ArrayList arrayList = dictionary["alterView"] as ArrayList;
                    for (int index = 0; index < arrayList.Count; ++index)
                    {
                        SqlCommand command = sqlConnection.CreateCommand();
                        command.CommandTimeout = 36000;
                        command.Transaction = sqlTransaction;
                        command.CommandText = string.Concat(arrayList[index]);
                        command.ExecuteNonQuery();
                    }
                }
                SqlCommand command1 = sqlConnection.CreateCommand();
                command1.CommandTimeout = 36000;
                command1.Transaction = sqlTransaction;
                command1.CommandText = "select KieuChu, KieuChu1, KieuChu2, KieuChu3, KieuChu4, KieuChu5, KieuNgay1, KieuNgay, KieuChu6, KieuChu7, Number from GBL_TRAINNING_COURSE_CLASS_TEACHER_TEMPHOUR order by Number, KieuChu, KieuChu1, KieuChu2, KieuChu3, KieuChu4, KieuChu5, KieuNgay ";
                new SqlDataAdapter(command1).Fill(dataTable);
                sqlTransaction.Commit();
            }
            catch (Exception ex1)
            {
                try
                {
                    sqlTransaction.Rollback();
                }
                catch (SqlException ex2)
                {
                    oo = (object)("ERROR" + ex2.ToString() + ex1.ToString());
                }
            }
            finally
            {
                sqlConnection.Close();
            }
            if (dataTable.Rows.Count > 0)
            {
                StringBuilder stringBuilder1 = new StringBuilder();
                StringBuilder stringBuilder2 = new StringBuilder();
                stringBuilder1.Append(dictionary.ContainsKey("hdValue") ? string.Concat(dictionary["hdValue"]) : "");
                stringBuilder1.Append("<table cellspacing=0 border=1 class=\"reportDiemDanh\">");
                stringBuilder1.Append("<thead><tr><th>No.</th><th><div style=\"width: 250px\">Student</div></th><th>Nick Name</th><th>FirstAO</th><th>Phone</th><th>Phone 2</th><th>Invoice</th>");
                stringBuilder2.Append("<tbody><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>");
                string str1 = string.Concat(dataTable.Rows[0][10]);
                int index1;
                DateTime dateTime;
                for (index1 = 0; index1 < dataTable.Rows.Count && str1 == string.Concat(dataTable.Rows[index1][10]); ++index1)
                {
                    StringBuilder stringBuilder3 = stringBuilder1;
                    dateTime = (DateTime)dataTable.Rows[index1][7];
                    string str2 = "<th>" + dateTime.ToString("dd/MM/yyyy") + "</th>";
                    stringBuilder3.Append(str2);
                    stringBuilder2.Append("<td>" + dataTable.Rows[index1][8] + "</td>");
                }
                stringBuilder1.Append("<th>Attendence</th><th>Invoice Date</th><th>Address</th></tr></thead>");
                stringBuilder2.Append("<td></td><td></td><td></td></tr>");
                stringBuilder1.Append((object)stringBuilder2);
                for (int index2 = 0; index2 < (dataTable.Rows.Count + 1) / index1; ++index2)
                {
                    stringBuilder1.Append("<tr><td>" + (object)(index2 + 1) + "</td><td>" + dataTable.Rows[index2 * index1][0] + "</td><td></td><td>" + dataTable.Rows[index2 * index1][1] + "</td><td>" + dataTable.Rows[index2 * index1][2] + "</td><td>" + dataTable.Rows[index2 * index1][3] + "</td><td>" + dataTable.Rows[index2 * index1][4] + "</td>");
                    for (int index3 = 0; index3 < index1; ++index3)
                        stringBuilder1.Append("<td>" + dataTable.Rows[index2 * index1 + index3][9] + "</td>");
                    StringBuilder stringBuilder3 = stringBuilder1;
                    object[] objArray = new object[5]
                    {
            (object) "<td></td><td>",
            null,
            null,
            null,
            null
                    };
                    string str2;
                    if (!string.IsNullOrEmpty(string.Concat(dataTable.Rows[index2 * index1][6])))
                    {
                        dateTime = (DateTime)dataTable.Rows[index2 * index1][6];
                        str2 = dateTime.ToString("dd/MM/yyyy");
                    }
                    else
                        str2 = "";
                    objArray[1] = (object)str2;
                    objArray[2] = (object)"</td><td>";
                    objArray[3] = dataTable.Rows[index2 * index1][5];
                    objArray[4] = (object)"</td></tr>";
                    string str3 = string.Concat(objArray);
                    stringBuilder3.Append(str3);
                }
                stringBuilder1.Append("</tbody></table>");
                oo = (object)stringBuilder1;
            }
            else
                oo = (object)"";
        }


        public static string BuildAReport(
          string Id,
          string strWhere,
          string strOrderBy,
          ref double OldThucThu,
          ref double OldPhuThu,
          ref double OldGiamGia,
          ref double VAT,
          double ThucThu1,
          double VAT1,
          double PhuThu1)
        {
            gcRptTable table = new gcRptTable()
            {
                strTblSql = string.Format("SELECT VatTuIdName,DonGia,DonViTinhIdName, Sum(SoLuong) AS SoLuong,  SUM(ThanhTien) AS ThanhTien, GhiChu FROM  zgcl_gcGobal_STOCK_gcProduct_Input_Detail04 WHERE PhieuNhapKhoId={0}  GROUP BY VatTuIdName,DonViTinhIdName, DonGia, NhomId, TypeId, GhiChu", (object)Id),
                strMainTable = "zgcl_gcGobal_INCOM_Receipt_DetailAll",
                bShowIndexRow = false,
                mColMergForSubSumRow = 5,
                mTypeBuild = "isSimple",
                bShowSTT = true,
                strOrderBy = strOrderBy,
                server = zgcHelper.getSqlStr(),
                strWhere = strWhere,
                mArrPos = new int[1],
                bShowGroupBy = false
            };
            table.mStrShowContent.Add("");
            table.BuidlASimpleByDB(table, "zgcl_gcGobal_INCOM_Receipt_DetailAll", "zgcBUILDIN_CONFIG_REPORT_DETAIL", "16010401");
            table.InitTable();
            table.mArrArgSumary = new List<int>();
            for (int index = 0; index < table.cCols; ++index)
                table.mArrArgSumary.Add(0);
            table.mArrArgSumary[5] = 1;
            table.MakeGobalRowForTesting();
            table.FillData();
            double num1 = 0.0;
            for (int index = 5; index < 6; ++index)
            {
                foreach (object[] objArray in table.mData)
                {
                    string s = (string)objArray[index];
                    s.Trim();
                    if (s != string.Empty)
                        num1 += double.Parse(s);
                }
                table.RowSumGobal.mValue[index] = num1.ToString();
            }
            for (int index = 0; index < table.cCols; ++index)
            {
                table.mArrRightStyle.Add(0);
                table.mArrRightStyleCss.Add("");
            }
            double number = VAT;
            double num2 = OldGiamGia <= 0.0 || OldGiamGia >= 100.0 ? OldGiamGia : OldGiamGia * num1 / 100.0;
            if (num2 > 0.0)
            {
                gcRptTailItem gcRptTailItem = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Chiết khấu"
                };
                if (OldGiamGia > 0.0 && OldGiamGia < 100.0)
                    gcRptTailItem.strFormName = "Chiết khấu " + (object)OldGiamGia + "%";
                gcRptTailItem.Value = string.Format("{0:N0}", (object)num2);
                table.mListTailItem.Add(gcRptTailItem);
            }
            double num3 = OldPhuThu <= 0.0 || OldPhuThu >= 100.0 ? OldPhuThu : OldPhuThu * num1 / 100.0;
            if (num3 > 0.0)
            {
                gcRptTailItem gcRptTailItem = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Thuế"
                };
                if (OldPhuThu > 0.0 && OldPhuThu < 100.0)
                    gcRptTailItem.strFormName = "Thuế " + (object)OldPhuThu + "%";
                gcRptTailItem.Value = string.Format("{0:N0}", (object)num3);
                table.mListTailItem.Add(gcRptTailItem);
            }
            if (num2 > 0.0 || num3 > 0.0)
            {
                gcRptTailItem gcRptTailItem = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Tổng tiền hàng",
                    Value = string.Format("{0:N0}", (object)number)
                };
                table.mListTailItem.Add(gcRptTailItem);
            }
            string str = zgcHelper.MoneyConvertStr(number);
            gcRptTailItem gcRptTailItem1 = new gcRptTailItem()
            {
                cssValueClass = "dhu_rpt_TextRightBold",
                ColSpan = table.cCols,
                strFormName = "<span style='font-style:italic; font-weight:bold;'>" + str + "./</span>",
                Value = ""
            };
            table.mListTailItem.Add(gcRptTailItem1);
            table.mArrRightStyle[5] = 1;
            table.mArrRightStyleCss[5] = "dhu_rpt_TextRight";
            table.mArrRightStyle[4] = 1;
            table.mArrRightStyleCss[4] = "dhu_rpt_TextRight";
            table.mArrRightStyle[3] = 1;
            table.mArrRightStyleCss[3] = "dhu_rpt_TextRight";
            table.mArrRightStyle[1] = 1;
            table.mArrRightStyleCss[1] = "dhu_rpt_TextLeft";
            table.RowSumGobal.cssClass = "dhu_rpt_TextCenterTotal";
            table.RowSumGobal.cssClassShowName = "dhu_rpt_TextCenterTotal";
            table.RowSumGobal.cssValueClass = "dhu_rpt_TextCenterTotal";
            return table.MakeSimpleTable();
        }

       
            public static string BuildAReport1(
              string Id,
              string strWhere,
              string strOrderBy,
              ref double OldThucThu,
              ref double OldPhuThu,
              ref double OldGiamGia,
              ref double VAT,
              double ThucThu1,
              double VAT1,
              double PhuThu1)
            {
                gcRptTable table = new gcRptTable()
                {
                    strTblSql = string.Format("SELECT VatTuIdName,DonGia,DonViTinhIdName, Sum(SoLuong) AS SoLuong,  SUM(ThanhTien) AS ThanhTien, GhiChu FROM  zgcl_gcGobal_STOCK_gcProduct_Input_Detail04 WHERE PhieuNhapKhoId={0}  GROUP BY VatTuIdName,DonViTinhIdName, DonGia, NhomId, TypeId, GhiChu", (object)Id),
                    strMainTable = "zgcl_gcGobal_INCOM_Receipt_DetailAll",
                    bShowIndexRow = false,
                    mColMergForSubSumRow = 5,
                    mTypeBuild = "isSimple",
                    bShowSTT = true,
                    strOrderBy = strOrderBy,
                    server = zgcHelper.getSqlStr(),
                    strWhere = strWhere,
                    mArrPos = new int[1],
                    bShowGroupBy = false
                };
                table.mStrShowContent.Add("");
                table.BuidlASimpleByDB(table, "zgcl_gcGobal_INCOM_Receipt_DetailAll", "zgcBUILDIN_CONFIG_REPORT_DETAIL", "16010401");
                table.InitTable();
                table.mArrArgSumary = new List<int>();
                for (int index = 0; index < table.cCols; ++index)
                    table.mArrArgSumary.Add(0);
                table.mArrArgSumary[5] = 1;
                table.MakeGobalRowForTesting();
                table.FillData();
                double num1 = 0.0;
                for (int index = 5; index < 6; ++index)
                {
                    foreach (object[] objArray in table.mData)
                    {
                        string s = (string)objArray[index];
                        s.Trim();
                        if (s != string.Empty)
                            num1 += double.Parse(s);
                    }
                    table.RowSumGobal.mValue[index] = num1.ToString();
                }
                for (int index = 0; index < table.cCols; ++index)
                {
                    table.mArrRightStyle.Add(0);
                    table.mArrRightStyleCss.Add("");
                }
                double num2 = OldGiamGia <= 0.0 || OldGiamGia >= 100.0 ? OldGiamGia : OldGiamGia * num1 / 100.0;
                gcRptTailItem gcRptTailItem1 = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Chiết khấu"
                };
                if (OldGiamGia > 0.0 && OldGiamGia < 100.0)
                    gcRptTailItem1.strFormName = "Chiết khấu " + (object)OldGiamGia + "%";
                gcRptTailItem1.Value = string.Format("{0:N0}", (object)num2);
                table.mListTailItem.Add(gcRptTailItem1);
                double num3 = OldPhuThu <= 0.0 || OldPhuThu >= 100.0 ? OldPhuThu : OldPhuThu * num1 / 100.0;
                gcRptTailItem gcRptTailItem2 = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Thuế"
                };
                if (OldPhuThu > 0.0 && OldPhuThu < 100.0)
                    gcRptTailItem2.strFormName = "Thuế " + (object)OldPhuThu + "%";
                gcRptTailItem2.Value = string.Format("{0:N0}", (object)num3);
                table.mListTailItem.Add(gcRptTailItem2);
                double num4 = VAT;
                gcRptTailItem gcRptTailItem3 = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Tổng tiền hàng",
                    Value = string.Format("{0:N0}", (object)num4)
                };
                table.mListTailItem.Add(gcRptTailItem3);
                double num5 = VAT1;
                gcRptTailItem gcRptTailItem4 = new gcRptTailItem()
                {
                    ColSpan = table.cCols - 2,
                    cssValueClass = "dhu_rpt_TextRight",
                    strFormName = "Công nợ cũ",
                    Value = string.Format("{0:N0}", (object)num5)
                };
                table.mListTailItem.Add(gcRptTailItem4);
                gcRptTailItem gcRptTailItem5 = new gcRptTailItem()
                {
                    cssValueClass = "dhu_rpt_TextRightBold",
                    ColSpan = table.cCols - 2,
                    strFormName = "Công nợ hiện tại",
                    Value = string.Format("{0:N0}", (object)(num5 + ThucThu1))
                };
                table.mListTailItem.Add(gcRptTailItem5);
                double number = num5 + ThucThu1;
                if (string.Concat((object)number).Split('.').Length > 1)
                    number = double.Parse(string.Concat((object)number).Split('.')[0]);
                string str = zgcHelper.MoneyConvertStr(number);
                gcRptTailItem gcRptTailItem6 = new gcRptTailItem()
                {
                    cssValueClass = "dhu_rpt_TextRightBold",
                    ColSpan = table.cCols,
                    strFormName = "<span style='font-style:italic; font-weight:bold;'>" + str + "./</span>",
                    Value = ""
                };
                table.mListTailItem.Add(gcRptTailItem6);
                OldThucThu = num5;
                table.mArrRightStyle[5] = 1;
                table.mArrRightStyleCss[5] = "dhu_rpt_TextRight";
                table.mArrRightStyle[4] = 1;
                table.mArrRightStyleCss[4] = "dhu_rpt_TextRight";
                table.mArrRightStyle[3] = 1;
                table.mArrRightStyleCss[3] = "dhu_rpt_TextRight";
                table.mArrRightStyle[1] = 1;
                table.mArrRightStyleCss[1] = "dhu_rpt_TextLeft";
                table.RowSumGobal.cssClass = "dhu_rpt_TextCenterTotal";
                table.RowSumGobal.cssClassShowName = "dhu_rpt_TextCenterTotal";
                table.RowSumGobal.cssValueClass = "dhu_rpt_TextCenterTotal";
                return table.MakeSimpleTable();
            }



        }
    }

