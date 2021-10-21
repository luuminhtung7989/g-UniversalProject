using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web;
using System.Net.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using zgc0LibAdmin;
using Microsoft.AspNet.SessionState;
using gcLibAdmin;
using System.Collections.Generic;
/// <summary>
/// Summary description for dhuLogin
/// </summary>
public class zgc0Login
{
    public string LoginMessage;
    public zgc0Login()
	{
        LoginMessage = "";
	}
    public static bool CheckRightNew(HttpSessionState s, string url)
    {
        return true;
    }
    public static bool CheckRight(HttpSessionState s, string url, string usernamelog)
    {
        bool bReturn = false;
        if (s["zgc0Login_OK"] != null)
        {
            bReturn = bool.Parse(s["zgc0Login_OK"].ToString());

            //----------------------------------------------
            //kiểm tra quyền và nhóm quyền
            object username = s["gcUserName"];
            object MaCanBoId = s["gcMaCanBoId"];
            object MaNhomQuyenId = s["gcRightGroup"];
            if (username == null)
                bReturn = false;
            if (MaCanBoId == null)
                bReturn = false;
            if (MaNhomQuyenId == null)
                bReturn = false;
            if (MaNhomQuyenId != null)
            {
                string NhomQuyenId = int.Parse((string)MaNhomQuyenId).ToString();
                bReturn = zgc0Login.CheckGroupRightForWebservice(url, NhomQuyenId);
            }
        }
       
        return bReturn;
    }

    static public bool CheckGroupRightForWebservice(string defaultPage, string MaNhomQuyenId)
    {
        if (MaNhomQuyenId == "1" || MaNhomQuyenId == "2" || MaNhomQuyenId == "3")//administrator
            return true;
        string[] tmpString = defaultPage.Split('?');
       
        zgc0GlobalDict gcdict = new zgc0GlobalDict();
        //DataTable myData = zgc0HelperSecurity.GetDataTableNew("Select * From " + gcdict.strDict["GroupRightTable"] + "  WHERE Id = '" + int.Parse(MaNhomQuyenId).ToString() + "'");
        string[] strDict = null ;
        if (HttpContext.Current.Session["ThuMucAccount"] != null)
        {
            strDict = (string[])HttpContext.Current.Session["ThuMucAccount"];
        }
        else
            return false;
        for (int u = 0; u < strDict.Length; u++ )
            if(tmpString[0].Contains(strDict[u]))
                return true;
        
        return false;
    }

    static public  bool CheckGroupRightForPage( string defaultPage, string MaNhomQuyenId, Page thePage)
    {
        string[] tmpString = defaultPage.Split('?');

        zgc0GlobalDict gcdict = new zgc0GlobalDict();
        //DataTable myData = zgc0HelperSecurity.GetDataTableNew("Select * From " + gcdict.strDict["GroupRightTable"] + "  WHERE Id = '" + int.Parse(MaNhomQuyenId).ToString() + "'");
        string[] strDict = null;
        if (HttpContext.Current.Session["ThuMucAccount"] != null)
        {
            strDict = (string[])HttpContext.Current.Session["ThuMucAccount"];
        }
        else
            return false;

        for (int u = 0; u < strDict.Length; u++)
            if (tmpString[0].Contains(strDict[u]))
                return true;

        return false;
    }

    
    //for default  page
    static  void CheckRoupRight( string defaultPage,  string MaNhomQuyenId, Page thePage)
    {
        zgc0GlobalDict gcdict = new zgc0GlobalDict();
        DataTable myData = zgc0HelperSecurity.GetDataTableNew("Select * From " + gcdict.strDict["GroupRightTable"] + "  WHERE Id = '" + int.Parse(MaNhomQuyenId).ToString() + "'", zgc0GlobalStr.getSqlStr());
        if (myData.Rows.Count > 0)
        {
            string ThuMuc = myData.Rows[0]["ThuMuc"].ToString().ToUpper();
            
            //nếu defaultPage>0 nghĩa là vào 1 trang trực tiếp
            if(defaultPage.Length<=0)
                defaultPage = myData.Rows[0]["DefaultPage"].ToString();
            //check quyền trong thư mục cho phép
            string []tmpString = defaultPage.Split('?');
            tmpString[0] = tmpString[0].ToUpper();
            if (tmpString[0].Contains(ThuMuc))
            {
                thePage.Session["gcdefaultPage"] = defaultPage;
                thePage.Response.Redirect(defaultPage);
            }
            else
            {
                defaultPage = myData.Rows[0]["DefaultPage"].ToString();
                string[] tmpString2 = defaultPage.Split('?');
                tmpString2[0] = tmpString2[0].ToUpper();
                if (tmpString2[0].Contains(ThuMuc))
                {
                    thePage.Session["gcdefaultPage"] = defaultPage;
                    thePage.Response.Redirect(defaultPage);
                }
            }
            return;
        }
        else
        {
            thePage.Response.Redirect("../Error.aspx");
        }
    }
  
}

