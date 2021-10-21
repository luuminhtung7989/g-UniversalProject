using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Data.OleDb;
using System.Web;
using System.Collections.Generic;

namespace zgc0LibAdmin
{
	/// <summary>
	/// Summary description for zgc0Helper.
	/// </summary>
	public class zgc0Helper
	{
		public zgc0Helper()
		{
			//
			// TODO: Add constructor logic here
			//
		}

      
        static public int GetNewValue(string gobaleName, string tablename, string type, out int curCount)
        {
            gobaleName = zgc0Support.ProcessFilter(gobaleName);
            tablename = zgc0Support.ProcessFilter(tablename);

            string date = DateTime.Now.Year.ToString();
            curCount = -1;
            int bReturn = 1;
           SqlCommand command = new SqlCommand();

           command.CommandType = CommandType.Text;
            command.CommandText = "Update " + gobaleName + " SET Type='" + type + "'" + " WHERE Name='" + tablename + "'";
            zgc0HelperSecurity.ExecuteProcedure(command, zgc0GlobalStr.getSqlStr());
            if (type.Contains("Date"))
            {
                string tmpDate = DateTime.Now.Month +"/"+DateTime.Now.Day +"/"+DateTime.Now.Year;
                command.CommandText = "Update " + gobaleName + " SET Thoigian='" + tmpDate + "', CurCount=0 WHERE year(Thoigian)!=" + date + " AND Name='" + tablename + "'"; ;
                zgc0HelperSecurity.ExecuteProcedure(command, zgc0GlobalStr.getSqlStr());

                command.CommandText = "Update " + gobaleName + " SET CurCount=CurCount+1 WHERE year(Thoigian)='" + date + "' AND Name='" + tablename + "'"; ;
                zgc0HelperSecurity.ExecuteProcedure(command, zgc0GlobalStr.getSqlStr());
            }
            else if (type.Contains("Normal"))
            {
                command.CommandText = "Update " + gobaleName + " SET CurCount=CurCount+1 WHERE Name='" + tablename + "'"; ;
                zgc0HelperSecurity.ExecuteProcedure(command, zgc0GlobalStr.getSqlStr());
            }

            command.CommandText = "SELECT CurCount FROM " + gobaleName + " WHERE Name='" + tablename + "'"; ;
            curCount = (int)command.ExecuteScalar();

            return bReturn;
        }

      

        public static string getUploadLogoFolder()
        {
            return ConfigurationSettings.AppSettings["Upload"];
        }
		public static string getConfigValue(string name)
		{
			return ConfigurationSettings.AppSettings[name];
		}

		public static void setConfigValue(string name, string value)
		{
			if (ConfigurationSettings.AppSettings[name]!=null)
				ConfigurationSettings.AppSettings[name]=value;
		}
       
		/**
		 * Des: Thuc thi cau truy van va tra ve doi tuong chua result. Tu dong dong cau noi.
		 *		ErrorCode duoc gan bang 1 neu viec kiem tra thanh cong, nguoc lai errorCode se co
		 *      gia tri bang 0.
		 */
		
		/**
		 * Des: Thuc hien danh sach cac lenh khong truy van theo thu tu.
		 *		Tra ve true neu tat ca cac lenh deu thanh cong, nguoc lai tra ve false
		 *		va cac lenh se duoc rollback neu co the.
		 */
		
        public static bool checkExist(int id, string val, string colname, string tablename, out int errorCode)
        {
            colname = zgc0Support.ProcessFilter(colname);
            tablename = zgc0Support.ProcessFilter(tablename);
            string strSql = "select " + colname
                + " from " + tablename
                + " where " + colname + "=N'"
                + val.Replace("'", "''") + "'"+ " and Id<>"+id.ToString();

            bool bReturn = false;
            errorCode = -1;
            DataTable dt = zgc0HelperSecurity.GetDataTable(strSql, zgc0GlobalStr.getSqlStr());
            if (dt.Rows.Count > 0)
            {
                errorCode = 0;
                bReturn = true;
            }
            return bReturn;
        }

        public static bool checkExist(string val, string colname, string tablename, out int errorCode)
        {
            colname = zgc0Support.ProcessFilter(colname);
            tablename = zgc0Support.ProcessFilter(tablename);
            string strSql = "select " + colname
                + " from " + tablename
                + " where " + colname + "=N'"
                + val.Replace("'", "''") + "';";
            
            bool bReturn = false;
            errorCode = -1;

            DataTable dt = zgc0HelperSecurity.GetDataTable(strSql, zgc0GlobalStr.getSqlStr());
            if (dt.Rows.Count > 0)
            {
                errorCode = 0;
                bReturn = true;
            }
            return bReturn;
        }

		/**
		 * Des: Tra ve so hang ket qua thoa cau truy van.
		 *      Neu truy van thuc hien thanh cong errorCode=1, nguoc lai = 0.
		 */
       

		// valList: separate by comma
		public static bool deleteAll(string valList, string colname, string tablename)
		{
			string strSql = "delete " + tablename
				+ " where " + colname + " in ('" + valList.Replace("'","''").Replace(",","','") + "')";
            return zgc0HelperSecurity.ExecuteNonQuery(strSql, zgc0GlobalStr.getSqlStr());
		}

		public static bool deleteAll(ArrayList valList, string colname, string tablename)
		{
			// make list
			string list = "";
			for (int i=0; i<valList.Count; i++)
				list += "," + valList[i];
			if (!list.Equals("")) 
			{
				list = list.Substring(1);
				string strSql = "delete " + tablename
					+ " where " + colname + " in ('" + list.Replace("'","''").Replace(",","','") + "')";
                return zgc0HelperSecurity.ExecuteNonQuery(strSql, zgc0GlobalStr.getSqlStr());
			}
			return false;
		}

        public static bool deleteAllData(string tablename, string strFilter)
        {
            string strSql = "delete from " + tablename + (strFilter.Equals("")? "": " WHERE " + strFilter);
            return zgc0HelperSecurity.ExecuteNonQuery(strSql, zgc0GlobalStr.getSqlStr());
        }

        
        public static void upload(System.Web.UI.HtmlControls.HtmlInputFile ctrlname, string dir_from_root, string filename, System.Web.HttpRequest request)
        {
            string path = request.ServerVariables["APPL_PHYSICAL_PATH"];
            path = path + dir_from_root + filename;
            ctrlname.PostedFile.SaveAs(path);
        }
        public static List<object[]> gcGetObjectWS(string prefixText, int count, string objname, string field, 
                                    string filter, object obj, bool bCheckFilter)
        {
            
            
            List<object[]> list = new List<object[]>();
            string text = (HttpContext.Current.Session["FlushText"] == null) ? "-1" : (string)HttpContext.Current.Session["FlushText"];
            string flag = (HttpContext.Current.Session["isFlush"] == null) ? "" : (string)HttpContext.Current.Session["isFlush"];
            if (flag == "true")
            {
                if (text.Length > 0)
                {
                    if (prefixText.Contains(text))
                        return list;
                }
            }
            else if (flag == "false")
            {
                if((prefixText!=null) && (prefixText.Length>0))
                if (prefixText == text)
                {
                    string objnameSes = (HttpContext.Current.Session["FlushObject"] == null) ? "-1" : (string)HttpContext.Current.Session["FlushObject"];
                    if (objnameSes.Equals(objname))
                    {
                        list = (List<object[]>)HttpContext.Current.Session["FlushTextData"];
                        return list;
                    }
                }
            }
            //----------------------------------------------------------------
            string sqlCountNew="";
            string sql = gcGetSQL(prefixText, count, objname, field, filter, bCheckFilter, ref sqlCountNew, 1);

            DataTable myDataTable = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
            if (myDataTable != null)
            {
                if (myDataTable.Rows.Count <= 0)
                {
                    if(prefixText.Length>0)
                        prefixText = prefixText.Substring(0, prefixText.Length - 1);
                    sql = gcGetSQL(prefixText, count, objname, field, filter, bCheckFilter, ref sqlCountNew, 1);
                    myDataTable = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
                }
            }
            else
            {
                if (prefixText.Length > 0)
                    prefixText = prefixText.Substring(0, prefixText.Length - 1);
                sql = gcGetSQL(prefixText, count, objname, field, filter, bCheckFilter, ref sqlCountNew, 1);
                myDataTable = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
            }
            string[] arrField = field.Split(',');
            int index = sqlCountNew.IndexOf("from");
            string sqlCount = "select count(*) as c " + sqlCountNew.Substring(index, sqlCountNew.Length - index);
            DataTable db = zgc0HelperSecurity.GetDataTableNew(sqlCount, zgc0GlobalStr.getSqlStr());
            //------------------------------------------------------------
            for (int i = 0; i < myDataTable.Rows.Count; i++)
            {
                object[] item = new object[arrField.Length + 2];
                item[0] = myDataTable.Rows[i][0].ToString();
                for (int m = 0; m < arrField.Length; m++)
                    item[m+1] = myDataTable.Rows[i][m+1].ToString();
                item[arrField.Length+1] = 0;
                list.Add(item);
            }
            if (myDataTable.Rows.Count == 1)
            {
                string id = (list[0][0]).ToString();
                if ( (filter != null) && (filter.Trim().Length > 1))
                    filter += " AND (Id<>" + id + ")";
                else
                    filter += " (Id<>" + id + ")";
                list[0][arrField.Length+1] = 1;
                sql = gcGetSQL(prefixText, count-1, objname, field, filter, false, ref sqlCountNew, -1);
                DataTable dbr = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
                for (int i = 0; i < dbr.Rows.Count; i++)
                {
                    object[] item = new object[arrField.Length + 2];
                    item[0] = dbr.Rows[i][0].ToString();
                    for (int m = 0; m < arrField.Length; m++)
                        item[m + 1] = dbr.Rows[i][m + 1].ToString();
                    item[arrField.Length+1] = 0;
                    list.Add(item);
                }
            }
            if (db.Rows.Count > 0)
            {
                object[] item = new object[1];
                item[0] = db.Rows[0]["c"];
                list.Add(item);
            }
            if (myDataTable.Rows.Count > 0)
            {
                 
                HttpContext.Current.Session["FlushTextData"] = list;
                HttpContext.Current.Session["FlushText"] = prefixText;
                HttpContext.Current.Session["FlushObject"] = objname;
                HttpContext.Current.Session["isFlush"] = "false";
            }
            else
            {
                HttpContext.Current.Session["FlushText"] = prefixText;
                HttpContext.Current.Session["isFlush"] = "true";
            }
            return list;
        }
        //--------------------------------------------------------------------------------
        public static string gcGetSQL(string prefixText, int count, string objname, 
                                        string field, string filter, bool bCheckFilter,ref string sqlCount, int bLike)
        {
            //security
            //if(bCheckFilter)
            //    filter = zgc0Support.ProcessFilter(filter);
            //prefixText = zgc0Support.ProcessSimpleFilter(prefixText);

            if (filter == null)
                filter = "";
            if (filter.Length < 2)
                filter += " ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))";
            else
                filter += " AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))";


            //end security
            string[] arrField = field.Split(',');
            if (arrField.Length < 1)
                arrField = new string[] { field };
            string sql = String.Format("Select TOP {0} Id,{1}   from {2}", count, field, objname);
            if (prefixText == null)
                sql = String.Format("Select TOP {0} Id,{1}   from {2}", count, field, objname);
            else
            {
                prefixText = prefixText.Trim();
                if (prefixText.Length < 1)
                {
                    sql = String.Format("Select TOP {0} Id,{1}   from {2}", count, field, objname);
                    if ( (filter != null) && (filter.Trim().Length>0))
                    {
                        sql += " WHERE " + filter;
                    }
                    sqlCount = sql;
                }
                else
                {
                    sql = String.Format("Select TOP {0} Id,{1}   from {2}", count, field, objname);
                    sqlCount = sql;
                    string temp = "";
                    if (bLike >= 0)
                    {
                        for (int j = 0; j < arrField.Length; j++)
                        {
                            if (j == 0)
                                temp += String.Format("({0} Like N'%{1}%')", arrField[j], prefixText);
                            else
                                temp += String.Format(" OR ({0} Like N'%{1}%')", arrField[j], prefixText);
                        }
                    }
                    if (temp.Length > 0)
                        sql += " WHERE " + temp;

                    if (filter != null)
                    {
                        if (filter.Trim().Length > 1)
                        {
                            if (temp.Length > 0)
                            {
                                sql += " AND " + filter;
                                sqlCount += " WHERE " + filter;
                            }
                            else
                            {
                                sql += " WHERE " + filter;
                                sqlCount += " WHERE " + filter;
                            }
                        }
                    }
                }
            }
            return sql;
        }

        public static void insertLog(string username, string thaotac, DateTime thoidiem, string tablename, int rowId, string functionfile)
        {
            string insertStr = "Insert into tbl_DBLog(Username, ThaoTac, ThoiDiem, TableName, RowId, FunctionFile) VALUES(N'" + username + "', N'" + thaotac + "', '" + String.Format("{0:G}", thoidiem) + "', N'" + tablename + "', " + rowId + ",N'" + functionfile + "')";
            zgc0HelperSecurity.ExecuteNonQuery(insertStr, zgc0GlobalStr.getSqlStr());
        }
        public static bool CheckRight(string tableName, string thaotac, string username)
        {
            //return true;
            string sqlStr = "Select " + thaotac + " From vw_PhanQuyen WHERE Username=N'" + username + "' AND Ten=N'" + tableName + "'";
            DataTable myData = zgc0HelperSecurity.GetDataTable(sqlStr, zgc0GlobalStr.getSqlStr());
            if (myData.Rows.Count > 0)
                if ((bool)myData.Rows[0][0])
                    return true;
            return false;
        }
        public static string getFilename(FileUpload ctrlname)
        {
            string s1 = string.Empty;
            int pos;
            if (ctrlname.PostedFile != null)
                s1 = ctrlname.PostedFile.FileName;
            if (s1 == "")
                return "";
            pos = s1.LastIndexOf("\\") + 1;
            string sChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            int lenRandom = 20; //Random 1 chuoi voi len = 10
            Random rd = new Random(unchecked((int)DateTime.Now.Ticks));
            string fileName = string.Empty;
            for (int i = 0; i < lenRandom; i++)
                fileName += sChars[rd.Next(0, sChars.Length - 1)].ToString();

            s1 = s1.Substring(pos);
            s1 = s1.Replace(s1.Substring(0, s1.IndexOf(".")), fileName);
            return s1.Substring(pos);
        }

        public static void upload(FileUpload ctrlname, string dir_from_root, string filename, System.Web.HttpRequest request)
        {
            string path = request.ServerVariables["APPL_PHYSICAL_PATH"];
            path = path + dir_from_root + filename;
            ctrlname.PostedFile.SaveAs(path);
        }
        public static string getFileIcon(string _extension)
        {
            switch (_extension)
            {
                case ".pdf":
                    return "Img/pdf.jpg";
                case ".doc":
                    return "Img/doc.png";
                case ".docx":
                    return "Img/doc.png";
                case ".xls":
                    return "Img/xls.png";
                case ".xlsx":
                    return "Img/xls.png";
                case ".ppt":
                    return "Img/ppt.gif";
                case ".pptx":
                    return "Img/ppt.gif";
                case ".rar":
                    return "Img/rar.jpg";
                case ".zip":
                    return "Img/zip.png";
                default:
                    return "Img/file.jpg";
            }
        }
        
	}
}
