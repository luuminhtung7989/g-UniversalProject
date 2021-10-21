using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Data.OleDb;
using System.Web;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Data.Common;
using System.IO;
using System.Security.Cryptography;
using zgc0LibAdmin;

namespace zgc0Admin
{
    public class zgc0NewsStyleDict
    {

        public System.Collections.Specialized.StringDictionary Dict;
        public zgc0NewsStyleDict()
        {
            Dict = new System.Collections.Specialized.StringDictionary();
            Dict["marquee"] = "<marquee onmouseover=\"this.stop();\" onmouseout=\"this.start();\" behavior=\"scroll\" direction=\"up\" scrollamount=\"1\">";
            Dict["marqueeend"] = "</marquee>";
            Dict["divPaging"] = @"<div class='gcPaging'>{0}</div>";
            Dict["divOnePageNameEN"] = "<div class='gcPage'>Pages:</div>";
            Dict["divOnePageNameVN"] = "<div class='gcPage'>Trang:</div>";
            Dict["divOnePage"] = "<div class='gcPage' onclick='{0}({1},\"{2}\",\"{3}\",{4},this.id)'>{1}</div>";
            Dict["NoticeGroup"] = @"<div class='module_gray' style=' border:1px solid #ddd'>
                <div class='title'>{0}</div>                  
                 <div class='content' runat='server'>{1}</div>                 
             </div>";

            Dict["NoticeGroupOneNews"] = @"<div class='module_gray_onenews' style=' border:1px solid #ddd'>
                <div class='title_onenews'>{0}</div>                  
                 <div class='content_onenews' runat='server'>{1}</div>                 
             </div>";


            Dict["NoticeContents"] = @"<div class='NoticeContents'>
                                        <a style='color:#000;' href='{2}'>{0} </a> <div style='color:#538c14;font-weight:bold'>{1}</div>
                                    </div>";

            Dict["divTitleNoneTagA"] = @"<div class='NoticeContents'>
                                {0}  <div style='color:#538c14;font-weight:bold'>{1}</div>
                            </div>";
            Dict["divContents"] = @"<div style='margin-top:15px;margin-left:15px; text-align:justify;text-indent:15px; font-size:10pt;font-family:Arial'>{0}</div>";
            Dict["Goback"] = "<div style='float:left;'><a style='color:#000' href='{0}'><img style='width:32px; height:32px; border:none' alt='' src='../Img/go_back_button.jpg'><br/>Trở về</a></div><div class='clear'></div>";
            Dict["tblDetail"] = @"<table class='tblNoticeDetail' cellpadding='0' cellspacing=''>
                     <tr class='header'>
                        <td>Tiêu đề</td>
                        <td>Tên tài liệu</td>
                        <td>Kích thước</td>{0}
                     </tr>                      
                 </table>";
            Dict["divClear"] = "<div class='clear'> </div>";
            Dict["divSender"] = "<div style='float:right;text-align:center'>Người đăng tin <br/><br/><b> {0}</b></div>";
            Dict["OneRow"] = @"<tr >
                        <td class='Title'><a style='color:#000;border:solid 0px #fff;' href='../Upload/{1}'>{0}</a></td>
                        <td class='Name'>
                            <div style='float:left;width:32px;' >
                                <a style='color:#000;border:solid 0px #fff;' href='../Upload/{1}'><img src={3} style='border:solid 0px #fff;width:32px; height:32px'></a>
                            </div>
                            <div style='float:left; margin-left:5px; width:250px'>
                                <a style='color:#000' href='../Upload/{1}'>{4}</a></div>
                            <div class='clear'></div>
                        </td>
                        <td class='Size'>{2}</td>
                     </tr>";
            Dict["divActive"] = @"<div class='{1}'>
                        	<div class='images'><a href='{3}'><img style='width:80px; height:80px;border:none' alt='' src='../Upload/{0}' /></a></div>
                            <div class='content'><a href='{3}' style='color:#000'>{2}... </a><a href='{3}' style='color:#538c14; font-size:8pt;font-style:italic'>Chi tiết</a> </div>
                     </div>";
            Dict["tbl3Colum"] = @"<div class='divListImage'><table cellpadding='0' cellspacing='0' class='tblActive'> {0}                   
                     
                 </table></div>";
            Dict["OneRowImage"] = @"<tr {0}>{1}</tr>";
            Dict["OneColImage"] = "<td>{0}</td>";
            Dict["OneImage"] = @"<a href='{2}' rel='lightbox' title='{0}'>
                                <img alt='{0}' src='{1}' class='Image'/>
                            </a>";
            Dict["clear"] = "<div class='clear'></div>";
            Dict["divNewsShortContents"] = @"                                        
                    <div class='divNewsContent'>
                        <div class='news_title'><a href='{0}'>{1}</a></div>
                        <div class='divNewsContentInner'>
                            <div class='news_image'><img class='imgThumnail' alt='' src='{2}'/></div>
                            <a href='{0}'><div  class='divMotaContent'>{3}...</div></a>
                            <div class='clear'></div>
                        </div>
                   </div>";
            Dict["divOneNewsContents"] = @"                                        
                    <div class='divOneNewsContents'>
                        <div class='onenews_title'>{0}</div>
                        <div class='divOneNewsContentInner'>
                            {1}
                        </div>
                        <div class='onenews_footer'>{2}</div>
                   </div>";
            Dict["divOneNewsContentInner"] = @"                                        
                    <div class='divOneNewsContents2'>
                        <div class='onenews_image'>{0}</div>
                        <div class='divOneNewsContentInner2'>
                            {1}
                        </div>
                        <div class='clear'></div>
                   </div>";
            Dict["OneImageNews"] = @"<img alt='{0}' src='{1}' class='Image'/>";
            Dict["divToChange"] = "<div id='divChange{0}'>{1}</div>";
            Dict["NoticeShowName"] = "Tin tức - Sự kiện";
            Dict["viewNews"] = "gcGOBAL_AUTO_NEWS";
            Dict["viewPageNews"] = "gcGobal_WEBSITE_PAGE";
            Dict["div10"] = "<div style='height:10px;'>&nbsp;</div>";
            Dict["div20"] = "<div style='height:20px;'>&nbsp;</div>";
        }
    }
    public class ClassGeneral
    {
        zgc0NewsStyleDict Dict;
        string strServer = "";
        public ClassGeneral()
        {
        }
        public ClassGeneral(string server)
        {
            strServer = server;
            Dict = new zgc0NewsStyleDict();
        }
        public string GetTops(int PageSize, int PageId, int PageIndex, string Title)
        {
            string strResult = "";
            if (PageId == 1) strResult = CreateScopes(PageSize);
            else strResult = CreateOneScope(PageSize, PageIndex, PageId, Title, "divGeneral");
            return strResult;
        }
        public string CreateScopes(int PageSize)
        {
            string sqlScope = String.Format(" SELECT * FROM {0} Order by Id", Dict.Dict["viewPageNews"]); ;
            DataTable dtScope = zgc0HelperSecurity.GetDataTable(sqlScope, strServer);
            string strResult = "";
            for (int scope = 0; scope < dtScope.Rows.Count; scope++)
            {
                string strPageId = dtScope.Rows[scope]["Id"].ToString();
                string strPageName = dtScope.Rows[scope]["Name"].ToString();
                int PageId = int.Parse((strPageId.Length < 1) ? "0" : strPageId);
                string strTem = CreateOneScope(PageSize, 1, PageId, strPageName, "divChange" + scope.ToString());
                if (strTem != "")
                    strResult += string.Format(Dict.Dict["divToChange"], scope.ToString(), strTem);

            }
            return strResult;
        }
        public virtual string CreateOneScope(int PageSize, int PageIndex, int PageId, string ScopeName, string divToChange)
        {
            return "";
        }
        public string CreatePaging(int NumRows, int PageSize, int PageId, string eventArgs, string divToChange, string ScopeName)
        {
            string strResult = "";
            int NumPages = (int)NumRows / PageSize + 1;
            zgc0NewsStyleDict Dict = new zgc0NewsStyleDict();
            if (NumPages > 0)
                strResult += Dict.Dict["divOnePageNameVN"];
            for (int i = 1; i <= NumPages; i++)
            {
                strResult += String.Format(Dict.Dict["divOnePage"], eventArgs, i, divToChange, ScopeName, PageId);
            }
            //if (strResult != "")
            //    strResult = String.Format(Dict.Dict["divOnePage"], eventArgs, "P", divToChange, ScopeName, PageId) + strResult + String.Format(Dict.Dict["divOnePage"], eventArgs, "N", divToChange, ScopeName, PageId);
            return String.Format(Dict.Dict["divPaging"], strResult + Dict.Dict["clear"]);
        }

    }
    public class GetNews : ClassGeneral
    {
        zgc0NewsStyleDict Dict;
        public string strServer = "";
        public string UrlWebsite = "http://diaocquangthai.com.vn";
        public GetNews()
        {
        }
        public GetNews(string server )
        {
            strServer = server;
            Dict = new zgc0NewsStyleDict();
        }
        public string GetShortNews(int Count, int PageId)
        {
            string strWhere = "";
            string strHTML = "<div class='ShortNews' style='margin-bottom:6px;'><a href='{0}'><div class='headln'>({1})</div> <div style='float:left;text-align:justify; font-size:11px;color:black;padding:2px;'>{2}</div><div style='float:left;'>{3}</div><div class='clear'></div></a></div>";
            string strResult = "";
            string strMar = "<marquee  style='height:{0}px !important;' onmouseover=\"this.stop();\" onmouseout=\"this.start();\" behavior=\"scroll\" direction=\"up\" scrollamount=\"1\">";

            string sql = @"SELECT TOP(" + Count.ToString() + ") * FROM dhu_NEWS_ShortNews";
            if (PageId != 1) strWhere = " WHERE PageId=" + PageId.ToString();
            string mysql = sql + strWhere + " ORDER BY dbo.tbl_NEWS_ThongBao.NgayDuaTin DESC";
            DataTable dt = zgc0HelperSecurity.GetDataTable(mysql, strServer);
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                DateTime date = DateTime.Now;
                if (dt.Rows[i]["NgayDuaTin"] != DBNull.Value)
                    if (dt.Rows[i]["NgayDuaTin"].ToString() != "") date = DateTime.Parse(dt.Rows[i]["NgayDuaTin"].ToString());
                string strDate = "Ngày đăng tin: " + date.Day + "/" + date.Month + "/" + date.Year;
                string strNewIcon = "";
                if (dt.Rows[i]["isNew"].ToString() == "1") strNewIcon += "<img alt='' src='../Img/icon_new.gif'/>";
                strResult += String.Format(strHTML, "news.aspx?_news=" + dt.Rows[i]["Id"].ToString() + "&_status=read&_PageId=" + PageId.ToString(), strDate, dt.Rows[i]["Ten"].ToString(), strNewIcon);
            }
            string Noticesql = @"SELECT     TOP (10) dbo.tbl_NEWS_ThongBao.Id, dbo.tbl_NEWS_ThongBao.PageId, dbo.tbl_NEWS_ThongBao.LoaiThongBao, dbo.tbl_NEWS_ThongBao.Ten, 
                      dbo.tbl_NEWS_ThongBao.NoiDung, dbo.tbl_NEWS_ThongBao.NguoiDuaTinId, dbo.tbl_NEWS_ThongBao.NgayDuaTin, 
                      dbo.tbl_NEWS_ThongBao.HinhAnh, dbo.tbl_NEWS_DM_Page.Name, CASE WHEN DAY(NgayDuaTin) > DAY(Getdate()) - 7 AND MONTH(NgayDuaTin) 
                      = MONTH(Getdate()) AND YEAR(NgayDuaTin) = YEAR(Getdate()) THEN 1 ELSE 0 END AS isNew
                    FROM         dbo.tbl_NEWS_DM_Page INNER JOIN
                                          dbo.tbl_NEWS_ThongBao ON dbo.tbl_NEWS_DM_Page.Id = dbo.tbl_NEWS_ThongBao.PageId INNER JOIN
                                          dbo.tbl_NEWS_LoaiThongBao ON dbo.tbl_NEWS_ThongBao.LoaiThongBao = dbo.tbl_NEWS_LoaiThongBao.Id
                    WHERE     (dbo.tbl_NEWS_LoaiThongBao.Name LIKE N'%Tuyển%dụng%')
                    ORDER BY dbo.tbl_NEWS_ThongBao.NgayDuaTin DESC";
            DataTable Noticedt = zgc0HelperSecurity.GetDataTable(Noticesql, strServer);
            for (int i = 0; i < Noticedt.Rows.Count; i++)
            {
                string strDate = "Ngày đăng tin ";
                if (Noticedt.Rows[0]["NgayDuaTin"] != DBNull.Value)
                    if (Noticedt.Rows[0]["NgayDuaTin"].ToString() != "")
                    {
                        DateTime dtime = DateTime.Parse(Noticedt.Rows[0]["NgayDuaTin"].ToString());
                        strDate = dtime.Day.ToString() + "/" + dtime.Month.ToString() + "/" + dtime.Year.ToString();
                    }

                strResult += String.Format(strHTML, "Notice.aspx?_PageId=1&_status=read&_cPage=Notice&_news=" + Noticedt.Rows[i]["Id"].ToString(), strDate, Noticedt.Rows[i]["Ten"].ToString(), "");
                if (Noticedt.Rows[i]["isNew"].ToString() == "1") strResult += "<img alt='' src='../Img/icon_new.gif'/>";
                strResult += "</a></div>";
            }
            string strHeight = "170";
            if (PageId == 1) strHeight = "255";
            return String.Format(strMar, strHeight) + strResult + "</marquee>";
        }
        public string GetOneNews(int newsId, int PageId,string ScopeName)
        {
            zgc0NewsStyleDict Dict = new zgc0NewsStyleDict();
            string strResult = "";
            DataTable dt = zgc0HelperSecurity.ProcessGetIndexData(1, 10, "", " PageId=" + PageId + " AND Id=" + newsId, "*", Dict.Dict["viewNews"], strServer);
            //------------------------------------------------------------------------------
            if (dt.Rows.Count > 0)
            {
                DataRow row = dt.Rows[0];
                string UrlName = (row.IsNull("UrlName")) ? (string)null : Convert.ToString(row["UrlName"]);
                string ShortContentNews = (row.IsNull("ShortContentNews")) ? (string)null : Convert.ToString(row["ShortContentNews"]);
                string ContentNews = (row.IsNull("ContentNews")) ? (string)null : Convert.ToString(row["ContentNews"]);

                //--------------------------------------------------------------------------
                string strFooter = "";
                string sql = String.Format("select * from gcGobal_WEBSITE_NEWS_IMAGES where NewsId={0}", newsId);
                DataTable dtimage = zgc0HelperSecurity.GetDataTable(sql, strServer);
                string imageStr = "";
                for (int m = 0; m < dtimage.Rows.Count; m++ )
                {
                    DataRow row2 = dtimage.Rows[0];
                    string ImageName = (row2.IsNull("ImageName")) ? (string)null : Convert.ToString(row2["ImageName"]);
                    string hinhanhPath = (row2.IsNull("hinhanhPath")) ? (string)null : Convert.ToString(row2["hinhanhPath"]);
                    imageStr += String.Format(Dict.Dict["OneImageNews"], ImageName, hinhanhPath);
                }
                string InnerString = String.Format(Dict.Dict["divOneNewsContentInner"], imageStr, ContentNews);
                strResult += String.Format(Dict.Dict["divOneNewsContents"],
                                dt.Rows[0]["Name"].ToString(), InnerString, strFooter);
            }
            strResult = String.Format(Dict.Dict["NoticeGroupOneNews"], ScopeName, strResult);
            return strResult;
        }
        private static string getgifnType(object arg3)
        {
            if (arg3 == DBNull.Value)
                return "";
            string arg = (string)arg3;
            if (arg.Contains(".doc"))
                return "imgdoc.gif";
            else if (arg.Contains(".xls"))
                return "imgxls.gif";
            else if (arg.Contains(".pdf"))
                return "imgpdf.gif";
            else if (arg.Contains(".rar"))
                return "imgrar.gif";
            else if (arg.Contains(".zip"))
                return "imgrar.gif";
            else
                return "";
        }
        public override string CreateOneScope(int PageSize, int PageIndex, int PageId, string ScopeName, string divToChange)
        {
            int NumRows = 0;
            string strResult = "";
            DataTable dt = zgc0HelperSecurity.ProcessGetIndexData(PageIndex, PageSize, "", " PageId=" + PageId, "*", Dict.Dict["viewNews"], strServer);
            //------------------------------------------------------------------------------
            
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                DataRow row = dt.Rows[i];
                string UrlName = (row.IsNull("UrlName")) ? (string)null : Convert.ToString(row["UrlName"]);
                string ShortContentNews = (row.IsNull("ShortContentNews")) ? (string)null : Convert.ToString(row["ShortContentNews"]);
                string ContentNews = (row.IsNull("ContentNews")) ? (string)null : Convert.ToString(row["ContentNews"]);
                if (ShortContentNews == null || ShortContentNews.Length < 10)
                    ShortContentNews = ContentNews.Substring(0, (ContentNews.Length > 201) ? 200 : ContentNews.Length);
                strResult += String.Format(Dict.Dict["divNewsShortContents"],
                                UrlName + "?_PageId=" + PageId.ToString()  + 
                                "&_News=" + dt.Rows[i]["Id"].ToString() +
                                "&_status=read", dt.Rows[i]["Name"].ToString(),
                                dt.Rows[i]["hinhanhImageSample"].ToString(),
                                ShortContentNews);
            }
            //------------------------------------------------------------------------------
            NumRows = zgc0HelperSecurity.ProcessCount(" PageId=" + PageId, Dict.Dict["viewNews"], "*", strServer);
            string Paging = CreatePaging(NumRows, PageSize, PageId, "GoToThePage", divToChange, ScopeName);
            if (strResult != "")
            {
                strResult += Dict.Dict["clear"] + Paging;
                //strResult += Dict.Dict["div20"];
                strResult = String.Format(Dict.Dict["NoticeGroup"], ScopeName, strResult);
            }
            //------------------------------------------------------------------------------
            return strResult;
        }
       
    }

    

    public class zgc0WebSite
    {
        public zgc0WebSite()
        {
        }
        public string Build()
        {
            string strReport = "";
            return strReport;
        }
        public string Do()
        {
            string strReport = "";
            return strReport;
        }
        public string Run()
        {
            string strReport = "";
            return strReport;
        }
      
       
        public void Proccess(object[] parammeter, string funcname)
        {
            //zgc0RobotInner tmpClass = new zgc0RobotInner();
            //MethodInfo method = tmpClass.GetType().GetMethod(funcname);
            //if (method != null)
            //{
            //    method.Invoke(tmpClass, parammeter);// sử dụng gọi method
        }
    };

   
}
