using System;
using System.Data;
using System.Configuration;
using System.Web;

using System.Collections.Generic;
using gcLibAdmin;
/// <summary>
/// Summary description for dhuReport
/// </summary>
/// 

    public class dhuDictionary
    {
        System.Collections.Specialized.StringDictionary Dict;
        public const string CompanyName = "CompanyName";
        public const string CompanyAddr = "CompanyAddr";       
        public const string KeToanTruong = "KeToanTruong";
        public const string KeToanGhiSo = "keToanGhiSo";
        public const string ChuNhiem = "ChuNhiem";
        public const string NguoiLapBieu = "NguoiLapBieu";
        public const string ThuTruongDV = "ThuTruongDV";
        public const string NguoiLapPhieu = "NguoiLapPhieu";
        public const string ThuQuy = "ThuQuy";
        public const string NguoiNopTien = "NguoiNopTien";       
        public const string TenChuNhiem = "TenChuNhiem";
        public const string SoPhieu = "SoPhieu";
        public const string MauPhieu = "MauPhieu";
        public const string TenKTTruong = "TenKTTruong";
        public const string TenKtGhiSo="TenKtGhiSo";

        public const string NguoiNhanHang = "NguoiNhanHang";
        public const string NguoiGiaoHang = "NguoiGiaoHang";
        public const string PhuTrachBoPhan = "PhuTrachBoPhan";
        public const string QuanlyBoPhan = "QuanlyBoPhan";
        public const string NguoiNhanTien = "NguoiNhanTien";
        public const string NguoiDatHang = "NguoiDatHang";
        public dhuDictionary()
        {
            Dict = new System.Collections.Specialized.StringDictionary();
            Dict[CompanyName] = "HTX. VT. CG. XD ĐẠI THÀNH";
            Dict[CompanyAddr] = "1219/1-1219/3 NGUYỄN THỊ ĐỊNH, P.CÁT LÁI, Q2";
            Dict[MauPhieu] = "<b>Mẫu số: 01-TT</b><br/>Ban hành theo QĐ số:15/2006/QĐ-BTC<br/>Ngày 1 tháng 11 năm 1995 của Bộ Tài chính";
            Dict[KeToanTruong] = "Kế toán trưởng";
            Dict[KeToanGhiSo] = "Kế toán ghi sổ";
            Dict[NguoiLapBieu] = "Người lập biểu";
            Dict[ThuTruongDV] = "Thủ trưởng đơn vị";
            Dict[NguoiLapPhieu] = "Người lập phiếu";
            Dict[ThuQuy] = "Thủ quỹ";
            Dict[NguoiNopTien] = "Người nộp tiền";
            
            Dict[TenChuNhiem] = "Phan Thị Mai";
            Dict[SoPhieu] = "Số phiếu: ";
            Dict[TenKTTruong] = "";
            Dict[TenKtGhiSo] = "";
            Dict[ChuNhiem] = "Giám Đốc";

            Dict[NguoiNhanHang] = "Người nhận hàng";
            Dict[NguoiGiaoHang] = "Người giao hàng";
            Dict[PhuTrachBoPhan] = "Phụ trách bộ phận";
            Dict[QuanlyBoPhan] = "Quản lý bộ phận";
            Dict[NguoiNhanTien] = "Người nhận tiền";
            Dict[NguoiDatHang] = "Người đặt hàng";
            

        }
        public void SetValue(string key, string text)
        {
            Dict[key] = text;
        }
        public string GetValue(string KeyName)
        {
            return Dict[KeyName];
        }
    }
    public class dhuHTMLItem
    {

        public string strHTML;
        public string strCSS;
        public string strSTYLE;
        public string strText;
        public bool isLeaf;
        public string DiffProperty;
        public List<dhuHTMLItem> dhuListChildItem;
        public dhuHTMLItem(string HTMLCode)
        {
            strHTML = HTMLCode;
            DiffProperty=string.Empty;
            strCSS = string.Empty;
            strSTYLE = string.Empty;
            strText = string.Empty;
            isLeaf = true;
            dhuListChildItem = new List<dhuHTMLItem>();
        }
        public dhuHTMLItem(string HTMLCode, string CssClass, string Style, string Text, List<dhuHTMLItem> ChildItem)
        {

            strHTML = HTMLCode;
            isLeaf = true;
            strCSS = CssClass;
            strSTYLE = strSTYLE;
            strText = Text;
            DiffProperty = string.Empty;
            dhuListChildItem = ChildItem;
        }
        public dhuHTMLItem(string HTMLCode, string CssClass, string Style, string Text)
        {

            strHTML = HTMLCode;
            isLeaf = true;
            strCSS = CssClass;
            strSTYLE = strSTYLE;
            strText = Text;
            DiffProperty = string.Empty;
            dhuListChildItem = new List<dhuHTMLItem>();
        }
        public void AddRangeChildItem(string ChildHTML, string ChildCss, string ChildStyle, string[] arrayChild)
        {
            for (int i = 0; i < arrayChild.Length; i++)
            {
                dhuHTMLItem item = new dhuHTMLItem(ChildHTML, ChildCss, ChildStyle, arrayChild[i]);
                dhuListChildItem.Add(item);
            }
        }
        public void AddChildItem(dhuHTMLItem item)
        {
            dhuListChildItem.Add(item);
        }
        public void InsertChildItem(int index, dhuHTMLItem item)
        {
            dhuListChildItem.Insert(index, item);
        }
        public void ClearChildItem()
        {
            dhuListChildItem.Clear();
        }
        public string BuildHTMLCode()
        {
            string strResult = "<" + strHTML.Trim() + " " +DiffProperty+" ";
            if (!string.IsNullOrEmpty(strCSS)) strResult += "class=\"" + strCSS + "\" ";
            if (!string.IsNullOrEmpty(strSTYLE)) strResult += "style=\"" + strSTYLE + "\"";
            strResult += " >";
            if (dhuListChildItem.Count <= 0) strResult += strText;
            for (int i = 0; i < dhuListChildItem.Count; i++)
                strResult += dhuListChildItem[i].BuildHTMLCode();
            strResult += "</" + strHTML.Trim() + ">";
            return strResult;

        }
    }

    /// <summary>
    /// Title cho phan chung tu
    /// Gom 3 cot: ten cong ty, So phieu, va Thong tin ve mau phieu
    /// </summary>
    public class dhu_tpl_Title_ThreeParts
    {

        public dhuHTMLItem TitleTable;
        dhuDictionary Dict = new dhuDictionary();
        public string BuildATemplate(string Text)
        {
            dhuDictionary Dict = new dhuDictionary();
            dhuHTMLItem row = new dhuHTMLItem("tr");
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDName", "", Dict.GetValue(dhuDictionary.CompanyName) + "<br/>" + Dict.GetValue(dhuDictionary.CompanyAddr)));
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDCode", "", Text));
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDPattern", "", Dict.GetValue(dhuDictionary.MauPhieu)));

            TitleTable = new dhuHTMLItem("table", "dhu_rptTable", "vertical-align:top", "");
            TitleTable.AddChildItem(row);

            return TitleTable.BuildHTMLCode();
        }
    }
    public class dhu_tpl_TitleAndHeader_KTSS
    {
        public dhuHTMLItem TitleTable;
        public dhuHTMLItem HeaderTable;
        public dhuDictionary Dict = new dhuDictionary();
        public string BuildATemplate(string TenPhieu, string PhuLuc, DateTime NgayBD, DateTime NgayKT)
        {
            dhuHTMLItem row = new dhuHTMLItem("tr");
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDName", "", Dict.GetValue(dhuDictionary.CompanyName) + "<br/>" + Dict.GetValue(dhuDictionary.CompanyAddr)));

            TitleTable = new dhuHTMLItem("table", "dhu_rptTable", "vertical-align:top", "");
            TitleTable.AddChildItem(row);

            string times = "Từ ngày: " + NgayBD.ToShortDateString() + " đến ngày: " + NgayKT.ToShortDateString();
            row.ClearChildItem();
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Header", "", TenPhieu));
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Header_Times", "", times + "<br/>" + PhuLuc));
            HeaderTable = new dhuHTMLItem("table", "dhu_rptTable", "vertical-align:top", "");
            HeaderTable.AddChildItem(row);

            return TitleTable.BuildHTMLCode() + HeaderTable.BuildHTMLCode();
        }
    }
    /// <summary>
    /// Mau co dang phieu tu tien mat
    /// 
    /// </summary>
    public class dhu01TT_QD152006_QDBTC_Title
    {

        public dhuHTMLItem TitleTable;
        dhuDictionary Dict = new dhuDictionary();
        public string BuildATemplate()
        {
            dhuDictionary Dict = new dhuDictionary();
            dhuHTMLItem row = new dhuHTMLItem("tr");
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDName", "", Dict.GetValue(dhuDictionary.CompanyName) + "<br/>" + Dict.GetValue(dhuDictionary.CompanyAddr)));
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDCode", "", Dict.GetValue(dhuDictionary.SoPhieu) + "{0}"));
            row.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_TitleTDPattern", "", Dict.GetValue(dhuDictionary.MauPhieu)));

            TitleTable = new dhuHTMLItem("table", "dhu_rptTable", "vertical-align:top", "");
            TitleTable.AddChildItem(row);

            return TitleTable.BuildHTMLCode();
        }       
        
    }
    public class dhu01TT_QD152006_QDBTC_Header
    {

        public dhuHTMLItem HeaderTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
        public string BuildATemplate()
        {
            dhuHTMLItem hd_row1 = new dhuHTMLItem("tr");
            hd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Header", "", "{0}"));
            hd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", ""));
            hd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", ""));
            HeaderTable.AddChildItem(hd_row1);

            dhuHTMLItem hd_row2 = new dhuHTMLItem("tr");
            hd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderPhieuThu_Times", "", "{1}"));
            hd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", "Nợ:{2}"));
            hd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", "{3}"));
            HeaderTable.AddChildItem(hd_row2);

            dhuHTMLItem hd_row3 = new dhuHTMLItem("tr");
            hd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderPhieuThu_Times", "", ""));
            hd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", "Có:{4}"));
            hd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", "{5}"));
            HeaderTable.AddChildItem(hd_row3);
            return HeaderTable.BuildHTMLCode();
        }
        public string BuildATemplate(string TenPhieu, DateTime NgayLapPhieu, string TKNo, double SoTienNo, string TKCo, double SoTienCo)
        {

            string Ngay = "<em>Ngày " + NgayLapPhieu.Day.ToString() + " tháng " + NgayLapPhieu.Month.ToString() + " năm " + NgayLapPhieu.Year.ToString() + "</em>";

            dhuHTMLItem hd_row1 = new dhuHTMLItem("tr");
            hd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Header", "", TenPhieu));
            hd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", ""));
            hd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", ""));
            HeaderTable.AddChildItem(hd_row1);

            dhuHTMLItem hd_row2 = new dhuHTMLItem("tr");
            hd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderPhieuThu_Times", "", Ngay));
            hd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", "Nợ: " + TKNo));
            hd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", SoTienNo.ToString()));
            HeaderTable.AddChildItem(hd_row2);

            dhuHTMLItem hd_row3 = new dhuHTMLItem("tr");
            hd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderPhieuThu_Times", "", ""));
            hd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", "Có: " + TKCo));
            hd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_HeaderTK", "", SoTienCo.ToString()));
            HeaderTable.AddChildItem(hd_row3);
            return HeaderTable.BuildHTMLCode();
        }

    }
    public class dhu01TT_QD152006_QDBTC_Body
    {

        public dhuHTMLItem BodyTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
        private dhuDictionary Dict = new dhuDictionary();
        public string BuildATemplate()
        {
            dhuHTMLItem BodyTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
            dhuHTMLItem bd_row1 = new dhuHTMLItem("tr");
            bd_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Padding", "", "Họ tên: " + "{0}"));
            BodyTable.AddChildItem(bd_row1);

            dhuHTMLItem bd_row2 = new dhuHTMLItem("tr");
            bd_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Padding", "", "Địa chỉ: " + "{1}"));
            BodyTable.AddChildItem(bd_row2);

            dhuHTMLItem bd_row3 = new dhuHTMLItem("tr");
            bd_row3.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Padding", "", "Lý do: " + "{2}"));
            BodyTable.AddChildItem(bd_row3);

            dhuHTMLItem bd_row4 = new dhuHTMLItem("tr");
            bd_row4.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Padding", "", "Số tiền: " + "{3}"));
            BodyTable.AddChildItem(bd_row4);

            dhuHTMLItem bd_row5 = new dhuHTMLItem("tr");
            bd_row5.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_Padding", "", "Kèm theo: " + "{4}"));
            BodyTable.AddChildItem(bd_row5);

            return BodyTable.BuildHTMLCode();
        }
        
    }
    public class dhu01TT_QD152006_QDBTC_Footer
    {

        dhuDictionary Dict = new dhuDictionary();
        public string BuildATemplate()
        {
            //footer
            dhuHTMLItem FooterTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");

            dhuHTMLItem ft_row1 = new dhuHTMLItem("tr");
            string[] arrChildText ={ Dict.GetValue(dhuDictionary.NguoiLapPhieu), Dict.GetValue(dhuDictionary.NguoiNopTien), Dict.GetValue(dhuDictionary.ThuQuy), Dict.GetValue(dhuDictionary.KeToanTruong), Dict.GetValue(dhuDictionary.ChuNhiem) };
            ft_row1.AddRangeChildItem("td", "dhu_rpt_tpl_FooterTD", "", arrChildText);
            FooterTable.AddChildItem(ft_row1);

            dhuHTMLItem ft_row2 = new dhuHTMLItem("tr");
            string[] arrName ={ "{0}", "{1}", "{2}", "{3}", "{4}" };
            ft_row2.AddRangeChildItem("td", "dhu_rpt_tpl_FooterTD", "", arrName);
            FooterTable.AddChildItem(ft_row2);
            return FooterTable.BuildHTMLCode();

        }
       
    }
    //dhu_rpt_tpl_KTSS_HeaderNoteName
    public class dhu_KT_SS_Footer
    {

        dhuDictionary Dict = new dhuDictionary();
        public string BuildATemplate()
        {
            //footer
            dhuHTMLItem FooterTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
            dhuHTMLItem ft_row0 = new dhuHTMLItem("tr");
            string[] Ngay={"","","{0}"};
            ft_row0.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer","",Ngay);
            dhuHTMLItem ft_row1 = new dhuHTMLItem("tr");
            string[] arrChildText ={ "{1}", "{2}", "{3}" };
            ft_row1.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", arrChildText);
            FooterTable.AddChildItem(ft_row1);

            dhuHTMLItem ft_row2 = new dhuHTMLItem("tr");
            string[] arrName ={ "{4}", "{5}", "{6}" };
            ft_row2.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", arrName);
            FooterTable.AddChildItem(ft_row2);
            return FooterTable.BuildHTMLCode();

        }

        public string BuildATemplateDUNG()
        {
            //footer
            dhuHTMLItem FooterTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
            dhuHTMLItem ft_row0 = new dhuHTMLItem("tr");
            string[] Ngay = { "", "", "{0}" };
            ft_row0.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", Ngay);
            dhuHTMLItem ft_row1 = new dhuHTMLItem("tr");
            string[] arrChildText = { "{1}", "{2}", "{3}" };
            ft_row1.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", arrChildText);
            FooterTable.AddChildItem(ft_row1);

            dhuHTMLItem ft_row2 = new dhuHTMLItem("tr");
            string[] arrName = { "{4}", "{5}", "{6}" };
            ft_row2.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", arrName);
            FooterTable.AddChildItem(ft_row2);
            return FooterTable.BuildHTMLCode();

        }
        public string BuildATemplateDUNG4()
        {
            //footer
            dhuHTMLItem FooterTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
            dhuHTMLItem ft_row0 = new dhuHTMLItem("tr");
            string[] Ngay = { "", "", "{0}" };
            ft_row0.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", Ngay);
            dhuHTMLItem ft_row1 = new dhuHTMLItem("tr");
            string[] arrChildText = { "{1}", "{2}", "{3}", "{4}" };
            ft_row1.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", arrChildText);
            FooterTable.AddChildItem(ft_row1);

            dhuHTMLItem ft_row2 = new dhuHTMLItem("tr");
            string[] arrName = { "{5}", "{6}", "{7}", "{8}" };
            ft_row2.AddRangeChildItem("td", "dhu_rpt_tpl_KTSS_Footer", "", arrName);
            FooterTable.AddChildItem(ft_row2);
            return FooterTable.BuildHTMLCode();

        }
    }
public class dhu_KT_SS_Header
{

    dhuDictionary Dict = new dhuDictionary();
    public string BuildATemplate()
    {
        //footer
        dhuHTMLItem HeaderTable = new dhuHTMLItem("table", "dhu_rptTable", "", "");
        dhuHTMLItem ft_row2 = new dhuHTMLItem("tr");
        ft_row2.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_KTSS_HeaderDate", "", ""));
        HeaderTable.AddChildItem(ft_row2); 

        dhuHTMLItem ft_row0 = new dhuHTMLItem("tr");
        ft_row0.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_KTSS_HeaderNoteName", "", "{0}"));
        HeaderTable.AddChildItem(ft_row0);

        dhuHTMLItem ft_row1 = new dhuHTMLItem("tr");
        ft_row1.AddChildItem(new dhuHTMLItem("td", "dhu_rpt_tpl_KTSS_HeaderDate", "", "{1}"));
        HeaderTable.AddChildItem(ft_row1);
        return HeaderTable.BuildHTMLCode();

    }
}


public class dhuConvertNumberToString {
   static  public string Convert(double number)
    {
        string strResult = "";
        string strValue = number.ToString().Trim().TrimStart('0');
        string strTheFirst="";
        int iTheFirst = 0;
        if (strValue.Length < 1) return " Không đồng";
        while(strValue.Length>0)
        {
            strTheFirst = strValue.Substring(0, 1);
            iTheFirst = int.Parse(strTheFirst);            
            strValue = strValue.Remove(0, 1);
            if (iTheFirst == 0){
                strResult += Tail(strValue.Length + 1) + " lẻ ";
                strValue = strValue.TrimStart('0');
            }
            else if (iTheFirst == 1 && (strValue.Length % 3 == 1)){
                if (IsAllZero(strValue)) return FormatOneChar(strResult) + " mười " + Tail(strValue.Length - 1) + " đồng";
                else if (strValue.Substring(0, 1) == "5") return FormatOneChar(strResult) + " mười lăm " + Tail(strValue.Length - 1) + " đồng";
                strResult += " mười ";
            }
            else if (IsAllZero(strValue))
            {
                return FormatOneChar(strResult) + ((strResult.Length < 1) ? FormatOneChar(ToString(iTheFirst, false)) : ToString(iTheFirst, false)) + Tail(strValue.Length % 3) + Tail(strValue.Length - strValue.Length % 3) + " đồng";
            }
            else if (strValue.Length % 3 == 0) { strResult += ToString(iTheFirst, false) + Tail(strValue.Length); }
            else { strResult += ToString(iTheFirst, false) + Tail(strValue.Length % 3); }
        }
        return FormatOneChar(strResult) + " đồng"; ;
    }
   static private string FormatOneChar(string value)
    {
        if (value == null)
            return value;
        if (value.Length < 1)
            return value;
        string newString = value;
        string strTmp = newString.Substring(0, 1);
        newString = strTmp.ToUpper() + newString.Substring(1, newString.Length - 1);
        return newString;
    }
   static private bool IsAllZero(string strValue)
    {
        double dValue = double.Parse((strValue.Length < 1) ? "0" : strValue);
        if (dValue == 0) return true;
        return false;
    }
   static private string ToString(int i, bool isFirst)
   {        
        if (i == 0) return "không ";
        else if (i == 1) return "một ";
        else if (i == 2) return "hai ";
        else if (i == 3) return "ba ";
        else if (i == 4) return "bốn ";
        else if (i == 5) return "năm ";
        else if (i == 6) return "sáu ";
        else if (i == 7) return "bảy ";
        else if (i == 8) return "tám ";
        else if (i == 9) return "chín ";
        else return " ";
    }

   static private string Tail(int lenght)
   {
        if (lenght == 0) return " ";
        else if (lenght == 1) return "mươi ";
        else if (lenght == 2) return "trăm ";
        else if (lenght == 3) return "nghìn ";
        else if (lenght == 6) return "triệu ";
        else if (lenght == 9) return "tỷ ";
        else if (lenght == 12) return "nghìn tỷ ";
        else return " ";

    }
}
