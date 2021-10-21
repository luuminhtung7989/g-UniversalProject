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
using System.Web.SessionState;

namespace zgc0LibAdmin
{
    /// <summary>
    /// Summary description for zgc0Helper.
    /// </summary>
    public class zgc0Support
    {
        public zgc0Support()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        //Nơi gọi sẽ gọi như thế này
        //Giới hạn tham số trên URL không được có những tham số đặc biệt để nhận dạng
        //------------------------------------------------------------------------
        public static int ProcessCount(string filter, string table, string columns)
        {
            table = ProcessFilter(table);
            // filter = ProcessFilter(filter);

            int count = 0;

            StringBuilder sqlBuilder = new StringBuilder();
            sqlBuilder.Append(String.Format("SELECT COUNT(*) as tCount FROM ( select distinct top 100 percent {1} from {0}", table, "Id"));
            if (filter != null && filter.Length > 3)
                sqlBuilder.Append(" WHERE (" + filter + ") ) a");
            else
                sqlBuilder.Append(" ) a ");
            DataTable dt = zgc0HelperSecurity.GetDataTable(sqlBuilder.ToString(), zgc0GlobalStr.getSqlStr());
            if (dt.Rows.Count > 0)
                count = (int)dt.Rows[0]["tCount"];
            return count;
        }

        public static bool ProcessDel(int Id, string table)
        {
            bool fTrue = false;
            table = ProcessFilter(table);

            //StringBuilder sqlBuilder = new StringBuilder();
            //sqlBuilder.AppendLine("UPDATE ");
            //sqlBuilder.AppendLine(String.Format(" {0} SET isPrgbUserDeleted = 1", table));
            //sqlBuilder.AppendLine(String.Format(" Where Id = {0}", Id));
            try
            {
                string sql = "if exists (select * from dbo.sysobjects where id = object_id(N'[dbo].[" + table + "_HIS]') " +
                        " and OBJECTPROPERTY(id, N'IsTable') = 1)" +
                        " delete from [dbo].[" + table + "_HIS] " + " Where MainObjectId = " + Id.ToString();
                zgc0HelperSecurity.ExecuteNonQuery(sql, zgc0GlobalStr.getSqlStr());
                //------------------------------------------------------
                StringBuilder sqlBuilder = new StringBuilder();
                sqlBuilder.AppendLine(String.Format("DELETE FROM {0} Where Id = {1}", table, Id));
                zgc0HelperSecurity.ExecuteNonQuery(sqlBuilder.ToString(), zgc0GlobalStr.getSqlStr());
                fTrue = true;
            }
            catch (Exception e)
            {
                zgc0HelperSecurity.NoneException(e);
                fTrue = false;
            }

            return fTrue;
        }


        public static DataTable ProcessGet1(ref int startIndex, ref  int maximumRows,
                         ref  string sortExpressions, ref  string filter,
                         ref string columns, ref int bSql, string table)
        {
            if (bSql > 0)
            {
                //thực thi câu query lấy về kết quả, mở rộng, chưa xử lý
            }
            //---------------------------------------------------
            //columns có 2 giá trị , mặc định là *
            //sử dụng tên colum để lấy thông tin ở bảng chính không lấy tất cả thông tin bảng kết



            if (filter == null)
                filter = "";
            string newSort = "";
            if ((sortExpressions == null) || (sortExpressions.Length < 1))
            {
                newSort = " Id desc";
            }
            else
            {
                newSort = sortExpressions;
            }
            DataTable dt = new DataTable();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "gcGOBAL_PROC_GetRowNum";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.Add("@sort", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@sort"].Value = newSort;

            cmd.Parameters.Add("@table", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@table"].Value = table;

            cmd.Parameters.Add("@column", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@column"].Value = columns;

            cmd.Parameters.Add("@filter", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@filter"].Value = filter;

            cmd.Parameters.Add("@SL", System.Data.SqlDbType.Int);
            cmd.Parameters["@SL"].Value = maximumRows;

            cmd.Parameters.Add("@index", System.Data.SqlDbType.Int);
            cmd.Parameters["@index"].Value = startIndex;


            dt = zgc0HelperSecurity.ExecuteProcedureData(cmd, zgc0GlobalStr.getSqlStr());
            return dt;
        }//end proc

        //sử dụng hàm này cho điều kiện của where không có khoảng trắng, đối với điều
        //kiện where có khoảng trắng phải xử lý bằng hàm bên dưới
        public static string ProcessFilter(string filter)
        {
            if (filter == null)
                return filter;
            if (filter.Length < 1)
                return filter;
            string tmpFilter = filter.ToUpper();
            tmpFilter = tmpFilter.Replace("SELECT", "");
            tmpFilter = tmpFilter.Replace("DELETE", "");
            tmpFilter = tmpFilter.Replace("UPDATE", "");
            tmpFilter = tmpFilter.Replace("INSERT", "");
            tmpFilter = tmpFilter.Replace("DROP", "");
            tmpFilter = tmpFilter.Replace("ALTER", "");
            tmpFilter = tmpFilter.Replace("FROM", "");
            tmpFilter = tmpFilter.Replace("UNION", "");
            tmpFilter = tmpFilter.Replace("--", "");
            tmpFilter = tmpFilter.Replace("/*", "");
            tmpFilter = tmpFilter.Replace(">", "");
            //tmpFilter = tmpFilter.Replace("", "");
            return tmpFilter;
        }

        public static string ProcessSimpleFilter(string filter)
        {
            if (filter == null)
                return filter;
            if (filter.Length < 1)
                return filter;
            string tmpFilter = filter;
            string tmpF2 = tmpFilter.ToUpper();
            if (tmpF2.Contains("DELETE") && tmpF2.Contains("FROM"))
                return "";
            if (tmpF2.Contains("UNION") && tmpF2.Contains("SELECT"))
                return "";
            if (tmpF2.Contains("SELECT") && tmpF2.Contains("FROM"))
                return "";
            if (tmpF2.Contains("ALTER") && tmpF2.Contains("TABLE"))
                return "";
            if (tmpF2.Contains("ALTER") && tmpF2.Contains("VIEW"))
                return "";
            if (tmpF2.Contains("ALTER") && tmpF2.Contains("DATABASE"))
                return "";
            if (tmpF2.Contains("DROP") && tmpF2.Contains("TABLE"))
                return "";
            if (tmpF2.Contains("DROP") && tmpF2.Contains("VIEW"))
                return "";
            if (tmpF2.Contains("DROP") && tmpF2.Contains("DATABASE"))
                return "";
            if (tmpF2.Contains("DROP") && tmpF2.Contains("PROCEDURE"))
                return "";
            tmpFilter = tmpFilter.Replace("SELECT", "");
            tmpFilter = tmpFilter.Replace("DELETE", "");
            tmpFilter = tmpFilter.Replace("UPDATE", "");
            tmpFilter = tmpFilter.Replace("INSERT", "");
            tmpFilter = tmpFilter.Replace("DROP", "");
            tmpFilter = tmpFilter.Replace("ALTER", "");
            tmpFilter = tmpFilter.Replace("FROM", "");
            tmpFilter = tmpFilter.Replace("UNION", "");
            tmpFilter = tmpFilter.Replace("select", "");
            tmpFilter = tmpFilter.Replace("delete", "");
            tmpFilter = tmpFilter.Replace("update", "");
            tmpFilter = tmpFilter.Replace("insert", "");
            tmpFilter = tmpFilter.Replace("drop", "");
            tmpFilter = tmpFilter.Replace("alter", "");
            tmpFilter = tmpFilter.Replace("from", "");
            tmpFilter = tmpFilter.Replace("union", "");
            tmpFilter = tmpFilter.Replace("--", "");
            tmpFilter = tmpFilter.Replace("/*", "");
            tmpFilter = tmpFilter.Replace(">", "");
            //tmpFilter = tmpFilter.Replace("=", "");
            return tmpFilter;
        }

        //-----------------------------------------------------
        //add one column 
        public static void AddOneColum(string tablename, string colname, string type)
        {

            SqlCommand myCmd = new SqlCommand();

            myCmd.CommandText = "gcGOBAL_PROC_TBL_CreateColumn";
            myCmd.CommandType = System.Data.CommandType.StoredProcedure;
            myCmd.Parameters.Add("@p_Table_Name", System.Data.SqlDbType.NVarChar);
            myCmd.Parameters["@p_Table_Name"].Value = tablename;
            myCmd.Parameters.Add("@p_Column_Name", System.Data.SqlDbType.NVarChar);
            myCmd.Parameters["@p_Column_Name"].Value = colname;
            myCmd.Parameters.Add("@p_Column_DataType", System.Data.SqlDbType.NVarChar);
            myCmd.Parameters["@p_Column_DataType"].Value = type;
            zgc0HelperSecurity.ExecuteProcedure(myCmd, zgc0GlobalStr.getSqlStr());
        }//end proc

        //------------------------------------------------------
        // Update cột dữ liệu dựa vào bảng và khóa Id, cập nhật từng cột một
        public static int UpdateOneColunm(string tablename, string colname, string key, string type, string value)
        {
            int bReturn = -1;
            string TableName = tablename, ColumnName = colname, Type = type, Value = value;
            int Id = int.Parse(key);

            SqlCommand myCmd = new SqlCommand();

            try
            {
                myCmd.CommandText = "gcGOBAL_PROC_Update1Column";
                myCmd.CommandType = System.Data.CommandType.StoredProcedure;
                myCmd.Parameters.Add("@TableName", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters["@TableName"].Value = TableName;

                myCmd.Parameters.Add("@ColumnName", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters["@ColumnName"].Value = ColumnName;

                myCmd.Parameters.Add("@Type", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters["@Type"].Value = Type;

                myCmd.Parameters.Add("@Value", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters["@Value"].Value = Value;

                myCmd.Parameters.Add("@Id", System.Data.SqlDbType.Int);
                myCmd.Parameters["@Id"].Value = Id;

                zgc0HelperSecurity.ExecuteProcedure(myCmd, zgc0GlobalStr.getSqlStr());
                bReturn = 1;
            }
            catch
            {
                bReturn = -1;
            }
            return bReturn;
        }

        public static object getOneInfo(string tablename, string colname, string key)
        {
            if ((key == null) || (key.Length < 1))
                return null;

            string sql = "select * from " + tablename + " where Id=" + key;
            DataTable dt = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
            if (dt != null)
            {
                if (dt.Rows.Count > 0)
                {
                    return dt.Rows[0][colname];
                }
            }
            return null;
        }

        public static string getAutoGenCode(SqlCommand cmd, string colName, string gobaltable, string type, string
                                        prefix, string countZero, string controltype, string fieldCountZero, string SubField1,
                                        string SubField2, string TableName)
        {
            string value = "";

            switch (type)
            {
                case "Normal":
                    {
                        string sqlmaxId = "select max(" + colName + ") as CountRow from " + TableName + " where " + colName + " like N'" + prefix.Trim() + "%'";
                        DataTable dtMaxId = new DataTable();
                        if (cmd == null)
                            dtMaxId = zgc0HelperSecurity.GetDataTable(sqlmaxId, zgc0GlobalStr.getSqlStr());
                        else
                        {
                            cmd.CommandText = sqlmaxId;
                            SqlDataAdapter adapter = new SqlDataAdapter();
                            adapter.SelectCommand = cmd;
                            adapter.Fill(dtMaxId);
                        }
                        if (dtMaxId.Rows[0]["CountRow"].ToString().Length < 1)
                        {
                            if (cmd == null)
                                dtMaxId = zgc0HelperSecurity.GetDataTable("select count(Id) as CountRow from " + TableName, zgc0GlobalStr.getSqlStr());
                            else
                            {
                                cmd.CommandText = "select count(Id) as CountRow from " + TableName;
                                SqlDataAdapter adap = new SqlDataAdapter();
                                adap.SelectCommand = cmd;
                                adap.Fill(dtMaxId);
                            }
                        }
                        string _sophieu = dtMaxId.Rows[0]["CountRow"].ToString();
                        _sophieu = _sophieu.Replace(prefix.Trim(), "");
                        string _sophieunew = (Convert.ToInt32(_sophieu) + 1).ToString();
                        for (int i = _sophieunew.Length; i < int.Parse(countZero); i++)
                        {
                            _sophieunew = "0" + _sophieunew;
                        }
                        value = prefix.Trim() + _sophieunew;
                        break;
                    }
                case "Date":
                    {
                        string day = DateTime.Now.Day.ToString();
                        day = (day.Length > 1) ? day : "0" + day;
                        string month = DateTime.Now.Month.ToString();
                        month = (month.Length > 1) ? month : "0" + month;
                        string CODE = prefix + "-" + day + month + DateTime.Now.Year;

                        int curCountCode = -1;

                        string sqlNo = "select * from " + TableName + " where YEAR(" + SubField1 + ") =" + DateTime.Now.Year.ToString()
                                        + " AND MONTH(" + SubField1 + ") =" + DateTime.Now.Month.ToString()
                                        + " AND DAY(" + SubField1 + ") =" + DateTime.Now.Day.ToString();
                        DataTable sqlNoData = null;
                        if (cmd == null)
                            sqlNoData = zgc0HelperSecurity.GetDataTable(sqlNo, zgc0GlobalStr.getSqlStr());
                        else
                        {

                            cmd.CommandText = sqlNo;
                            SqlDataAdapter adapter = new SqlDataAdapter();
                            adapter.SelectCommand = cmd;
                            adapter.Fill(sqlNoData);
                        }
                        int count = 0;
                        if (sqlNoData.Rows.Count > 0)
                        {
                            count = sqlNoData.Rows.Count;
                        }
                        curCountCode = count + 1;
                        value = CODE + "-" + curCountCode.ToString();
                        break;
                    }
                default:
                    break;
            }



            return value;
        }

        public static string getPartComp(int userId, int MaCanBoId)
        {
            string value = "";
            //gcGobal_COMP_EmployeeLife

            //if(myTableNew!=null)
            //    if(myTableNew.Rows.Count>0)
            //    value = myTableNew.Rows[0]["companyId"] + "-" + myTableNew.Rows[0]["branchId"] + "-" + myTableNew.Rows[0]["departmentId"];
            value = HttpContext.Current.Session["gcCtyId"] + "-" + HttpContext.Current.Session["gcBranchId"] + "-" + HttpContext.Current.Session["gcDepartmentId"];
            return value;
        }

        public static bool getHISTable(string p)
        {
            return true;
        }


        public static string ProcessOneCtrl(string textCtrl, string textSelect, string textAndOr, string type, string field, ref string Fisrt)
        {

            string strFilter27 = "";
            string andorStr = "";
            string assignStr = "LIKE";
            if (textCtrl.Length > 0)
            {
                string select = textSelect;
                string andor = textAndOr;
                if (Fisrt != "false")
                {
                    if (andor == "VÀ") andorStr = " AND ";
                    else andorStr = " OR ";
                    Fisrt = "true";
                }
                Fisrt = "true";
                assignStr = parserAssigment(select, textCtrl, type, field);
                strFilter27 += andorStr + assignStr;
            }
            andorStr = "";
            assignStr = "LIKE";
            return strFilter27;
        }
        public static string parserAssigment(string str, string value, string type, string field)
        {
            string returnValue = "";
            string Op = str.Replace("▼", " ");
            Op = Op.Replace(" ", "");
            string[] stringBeetween = value.Split(':');
            //string strArr = "Chứa = < <= > >= <> Giữa";
            switch (type)
            {
                case "ntext":
                case "text":
                    {
                        returnValue = field + " LIKE N'%" + stringBeetween[0] + "%'";
                        break;
                    }
                case "char":
                case "nchar":
                case "varchar":
                case "nvarchar":
                    {
                        if (stringBeetween.Length > 1)
                        {
                            returnValue = field + " BETWEEN N'" + stringBeetween[0] + "' AND N'" + stringBeetween[1] + "'";
                        }
                        else
                        {
                            switch (Op)
                            {
                                case "Chứa": returnValue = field + " LIKE N'%" + stringBeetween[0] + "%'"; break;
                                case "Giửa": returnValue = field + " LIKE N'%" + stringBeetween[0] + "%'"; break;
                                case "=": returnValue = field + " = N'" + stringBeetween[0] + "'"; break;
                                case "<": returnValue = field + " < N'" + stringBeetween[0] + "'"; break;
                                case "<=": returnValue = field + " <= N'" + stringBeetween[0] + "'"; break;
                                case ">": returnValue = field + " > N'" + stringBeetween[0] + "'"; break;
                                case ">=": returnValue = field + " >= N'" + stringBeetween[0] + "'"; break;
                                case "<>": returnValue = field + " <> N'" + stringBeetween[0] + "'"; break;
                                case "NULL": returnValue = field + " IS NULL"; break;
                                case "NOT NULL": returnValue = field + " IS NOT NULL"; break;
                            }
                        }
                        break;
                    }
                case "datetime":
                    {
                        //check length
                        if (stringBeetween.Length > 1)
                        {
                            int l0 = stringBeetween[0].Length;
                            int l1 = stringBeetween[1].Length;
                            if (l0 >= 8) // dịnh dạng ngày/tháng/năm 
                                returnValue = field + " BETWEEN '" + stringBeetween[0] + "' AND '" + stringBeetween[1] + "'";
                            else if (l0 >= 6)// định dạng tháng/năm
                            {
                                char[] param = { '/', '-' };
                                string[] d0 = stringBeetween[0].Split(param);
                                string[] d1 = stringBeetween[1].Split(param);
                                returnValue = " ( ( month(" + field + ") >=" + d0[0] + " and year(" + field + ")>=" + d0[1] + ")" +
                                              " and ( month(" + field + ") <=" + d1[0] + " and year(" + field + ")<=" + d1[1] + ") )";
                            }
                            else if (l0 >= 4)// định dạng năm
                            {

                                char[] param = { '/', '-' };
                                string[] d0 = stringBeetween[0].Split(param);
                                string[] d1 = stringBeetween[1].Split(param);
                                returnValue = " ( (year(" + field + ")>=" + d0[0] + ")" +
                                              " and (year(" + field + ")<=" + d1[0] + ") )";
                            }
                        }
                        else
                        {
                            int l0 = stringBeetween[0].Length;
                            if (l0 >= 8) // dịnh dạng ngày/tháng/năm 
                            {
                                switch (Op)
                                {
                                    case "Chứa": returnValue = field + " = '" + stringBeetween[0] + "'"; break;
                                    case "Giửa": returnValue = field + " = '" + stringBeetween[0] + "'"; break;
                                    case "=": returnValue = field + " = '" + stringBeetween[0] + "'"; break;
                                    case "<": returnValue = field + " < '" + stringBeetween[0] + "'"; break;
                                    case "<=": returnValue = field + " <= '" + stringBeetween[0] + "'"; break;
                                    case ">": returnValue = field + " > '" + stringBeetween[0] + "'"; break;
                                    case ">=": returnValue = field + " >= '" + stringBeetween[0] + "'"; break;
                                    case "<>": returnValue = field + " <> '" + stringBeetween[0] + "'"; break;
                                    case "NULL": returnValue = field + " IS NULL"; break;
                                    case "NOT NULL": returnValue = field + " IS NOT NULL"; break;
                                }
                            }
                            else if (l0 >= 6)// định dạng tháng/năm
                            {
                                char[] param = { '/', '-' };
                                string[] d0 = stringBeetween[0].Split(param);
                                switch (Op)
                                {
                                    case "Chứa": returnValue = " ( ( month(" + field + ") =" + d0[0] + " and year(" + field + ") =" + d0[1] + ")"; break;
                                    case "Giửa": returnValue = " ( ( month(" + field + ") =" + d0[0] + " and year(" + field + ") =" + d0[1] + ")"; break;
                                    case "=": returnValue = " ( ( month(" + field + ") =" + d0[0] + " and year(" + field + ") =" + d0[1] + ")"; break;
                                    case "<": returnValue = " ( ( month(" + field + ") <" + d0[0] + " and year(" + field + ") <" + d0[1] + ")"; break;
                                    case "<=": returnValue = " ( ( month(" + field + ") <=" + d0[0] + " and year(" + field + ") <=" + d0[1] + ")"; break;
                                    case ">": returnValue = " ( ( month(" + field + ") >" + d0[0] + " and year(" + field + ") >" + d0[1] + ")"; break;
                                    case ">=": returnValue = " ( ( month(" + field + ") >=" + d0[0] + " and year(" + field + ") >=" + d0[1] + ")"; break;
                                    case "<>": returnValue = " ( ( month(" + field + ") <>" + d0[0] + " and year(" + field + ") <>" + d0[1] + ")"; break;
                                    case "NULL": returnValue = field + " IS NULL"; break;
                                    case "NOT NULL": returnValue = field + " IS NOT NULL"; break;
                                }
                            }
                            else if (l0 >= 4)// định dạng tháng/năm
                            {
                                char[] param = { '/', '-' };
                                string[] d0 = stringBeetween[0].Split(param);
                                switch (Op)
                                {
                                    case "Chứa": returnValue = " (  year(" + field + ") =" + d0[0] + ")"; break;
                                    case "Giửa": returnValue = " (  year(" + field + ") =" + d0[0] + ")"; break;
                                    case "=": returnValue = " ( year(" + field + ") =" + d0[0] + ")"; break;
                                    case "<": returnValue = " ( year(" + field + ") <" + d0[0] + ")"; break;
                                    case "<=": returnValue = " ( year(" + field + ") <=" + d0[0] + ")"; break;
                                    case ">": returnValue = " ( year(" + field + ") >" + d0[0] + ")"; break;
                                    case ">=": returnValue = " ( year(" + field + ") >=" + d0[0] + ")"; break;
                                    case "<>": returnValue = " ( year(" + field + ") <>" + d0[0] + ")"; break;
                                    case "NULL": returnValue = field + " IS NULL"; break;
                                    case "NOT NULL": returnValue = field + " IS NOT NULL"; break;
                                }
                            }

                        }
                        break;
                    }
                case "int":
                case "float":
                case "smallint":
                case "long":
                    {
                        if (stringBeetween.Length > 1)
                        {
                            returnValue = field + " BETWEEN " + stringBeetween[0] + " AND " + stringBeetween[1];
                        }
                        else
                        {
                            switch (Op)
                            {
                                case "Chứa": returnValue = field + " = " + stringBeetween[0]; break;
                                case "Giửa": returnValue = field + " = " + stringBeetween[0]; break;
                                case "=": returnValue = field + " = " + stringBeetween[0]; break;
                                case "<": returnValue = field + " < " + stringBeetween[0]; break;
                                case "<=": returnValue = field + " <= " + stringBeetween[0]; break;
                                case ">": returnValue = field + " > " + stringBeetween[0]; break;
                                case ">=": returnValue = field + " >= " + stringBeetween[0]; break;
                                case "<>": returnValue = field + " <> " + stringBeetween[0]; break;
                                case "NULL": returnValue = field + " IS NULL"; break;
                                case "NOT NULL": returnValue = field + " IS NOT NULL"; break;
                            }
                        }
                        break;
                    }
                case "bit":
                    {
                        switch (Op)
                        {
                            case "Chứa": returnValue = field + " = " + stringBeetween[0]; break;
                            case "Giửa": returnValue = field + " = " + stringBeetween[0]; break;
                            case "=": returnValue = field + " = " + stringBeetween[0]; break;
                            case "<": returnValue = field + " = " + stringBeetween[0]; break;
                            case "<=": returnValue = field + " = " + stringBeetween[0]; break;
                            case ">": returnValue = field + " = " + stringBeetween[0]; break;
                            case ">=": returnValue = field + " = " + stringBeetween[0]; break;
                            case "<>": returnValue = field + " <> " + stringBeetween[0]; break;
                            case "NULL": returnValue = field + " IS NULL"; break;
                            case "NOT NULL": returnValue = field + " IS NOT NULL"; break;
                        }
                        break;
                    }

                case "image":
                    {
                        break;
                    }
                default:
                    break;
            }
            if (returnValue != "")
                returnValue = " (" + returnValue + ") ";
            return returnValue;
        }
        public static DataTable ProcessGet(ref int startIndex, ref  int maximumRows,
                        ref  string sortExpressions, ref  string filter,
                        ref string columns, ref int bSql, string table, string bSecurity)
        {
            if (bSql > 0)
            {
                //thực thi câu query lấy về kết quả, mở rộng, chưa xử lý
            }
            //---------------------------------------------------
            //columns có 2 giá trị , mặc định là *
            //sử dụng tên colum để lấy thông tin ở bảng chính không lấy tất cả thông tin bảng kết
            if (bSecurity != null)
                if (bSecurity != "false")
                    filter = ProcessFilter(filter);

            if (filter == null)
                filter = "";
            if (filter.Length < 2)
                filter += " ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))";
            else
                filter += " AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))";

            //-----------------------------------------------------------------------
            // Phan theo tai khoan ke toan
            //Kiểm tra phân chia quyền, Ví dụ kế toán tổng có thể xem được các phiếu thu, như khi vào mổi mục của mỗi chi nhánh cũng chỉ
            // hiển danh sách thông tin của chi nhánh đó.
            if (HttpContext.Current.Session["gczPartionRight"] != null)
            {
                // add điều kiện ở đây.
            }
            //-----------------------------------------------------------------------
            //2/12/2010 processing for one information 
            string strTmp = "Id";
            if (HttpContext.Current.Session["gczSelfInfo"] != null)
            {
                if (HttpContext.Current.Session["gcMaCanBoId"] != null)
                {
                    string gr = zgc0HelperSecurity.Decrypt(HttpContext.Current.Session["gczNewGroupRight"].ToString());
                    string gcAccountId = HttpContext.Current.Session["gcAccountId"].ToString();

                    string sql = String.Format("select * from zgcl_zgcBUILDIN_GOBAL00 where (NhomQuyenId ={0})", gr);
                    DataTable myTable = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
                    if (myTable.Rows.Count > 0)
                    {
                        bool isHasRowNum = false;
                        zgcl_zgcBUILDIN_GOBAL00Inner data = new zgcl_zgcBUILDIN_GOBAL00Inner(myTable.Rows[0], isHasRowNum);
                        string[] paths = HttpContext.Current.Request.UrlReferrer.AbsolutePath.Split('/');
                        sql = String.Format("select * from zgcl_gcGobal_ACCOUNT_GroupRight_DefPages00 where (Page ='{0}') and NhomQuyenId={1}", paths[paths.Length - 1], gr);
                        DataTable myTable0 = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
                        if (myTable0.Rows.Count > 0)
                        {
                            bool isHasRowNum2 = myTable0.Columns.Contains("ROWNUM");
                            zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter sub = new zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter(myTable0.Rows[0], isHasRowNum2);
                            string[] lst = sub.FogreinInfo.Split(':');
                            strTmp = lst[0];
                            if (strTmp.Trim().Length < 2)
                                strTmp = "";
                        }
                    }
                    string Id = HttpContext.Current.Session["gcMaCanBoId"].ToString();

                    if (strTmp.Length > 0)
                        filter += String.Format(" AND ({1} = {0})", Id, strTmp);
                }
            }

            string newSort = "";
            if ((sortExpressions == null) || (sortExpressions.Length < 1))
            {
                newSort = " Id desc";
            }
            else
            {
                newSort = sortExpressions;
                if (newSort.Trim().Length < 5)
                    newSort = " Id desc";
            }
            DataTable dt = new DataTable();

            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "gcGOBAL_PROC_GetRowNum";
            cmd.CommandType = System.Data.CommandType.StoredProcedure;
            cmd.Parameters.Add("@sort", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@sort"].Value = newSort;

            cmd.Parameters.Add("@table", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@table"].Value = table;

            cmd.Parameters.Add("@column", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@column"].Value = columns;

            cmd.Parameters.Add("@filter", System.Data.SqlDbType.NVarChar);
            cmd.Parameters["@filter"].Value = filter;

            cmd.Parameters.Add("@SL", System.Data.SqlDbType.Int);
            cmd.Parameters["@SL"].Value = maximumRows;

            cmd.Parameters.Add("@index", System.Data.SqlDbType.Int);
            cmd.Parameters["@index"].Value = startIndex;


            dt = zgc0HelperSecurity.ExecuteProcedureData(cmd, zgc0GlobalStr.getSqlStr());

            return dt;
        }//end proc
        public static void ProcessAccountRight(ref zgc0GlobalTail tail)
        {
            //lúc login nên ghi nhận quyền vào 
            //tail.numObj = tail.numObj;
            tail.isPrgDelete = 0;
            tail.isPrgUpdate = 0;
            tail.isPrgInsert = 0;
            tail.isPrgView = 0;
            if (HttpContext.Current.Session["gcMaCanBoId"] != null)// performance ở đây
            {
                //string gr = zgc0HelperSecurity.Decrypt(HttpContext.Current.Session["gczNewGroupRight"].ToString());
                string gr = HttpContext.Current.Session["gczNewGroupRight"].ToString();
                string gcAccountId = HttpContext.Current.Session["gcAccountId"].ToString();

                string sql = String.Format("select * from zgcBUILDIN_GOBAL where (NhomQuyenId ={0})", gr);
                DataTable myTable = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
                if (myTable.Rows.Count > 0)
                {
                    bool isHasRowNum = false;
                    zgcl_zgcBUILDIN_GOBAL00Inner data = new zgcl_zgcBUILDIN_GOBAL00Inner(myTable.Rows[0], isHasRowNum);
                    string[] paths = HttpContext.Current.Request.Url.AbsolutePath.Split('/');
                    sql = String.Format("select * from gcGobal_ACCOUNT_GroupRight_DefPages where (Page ='{0}') and NhomQuyenId={1}", paths[paths.Length - 1], gr);
                    DataTable myTable0 = zgc0HelperSecurity.GetDataTableNew(sql, zgc0GlobalStr.getSqlStr());
                    if (myTable0.Rows.Count > 0)
                    {
                        bool isHasRowNum2 = myTable0.Columns.Contains("ROWNUM");
                        zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter sub = new zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter(myTable0.Rows[0], isHasRowNum2);
                        tail.isPrgDelete = sub.isDelete.HasValue ? sub.isDelete.Value : 0;
                        tail.isPrgUpdate = sub.isUpdate.HasValue ? sub.isUpdate.Value : 0;
                        tail.isPrgInsert = sub.isInsert.HasValue ? sub.isInsert.Value : 0;
                        tail.isPrgView = sub.isView.HasValue ? sub.isView.Value : 0;
                    }
                }
            }
        }
    }
}
