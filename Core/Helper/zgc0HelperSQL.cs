// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgc0HelperSQL
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Web;


//using Microsoft.Web.Helpers;

namespace zgcLibCore
{
  public class zgc0HelperSQL
  {
    public static string GetRandomCode(Random r, int length)
    {
      char[] chArray = new char[length];
      string str = "ASDFGHJKLQWERTYUIOPZXCVBNM1234567890";
      for (int index = 0; index < length; ++index)
        chArray[index] = str[r.Next(str.Length)];
      return new string(chArray);
    }

    public static string getAutoGenCode(
      SqlCommand cmd,
      string colName,
      string gobaltable,
      string type,
      string prefix,
      string countZero,
      string controltype,
      string fieldCountZero,
      string SubField1,
      string SubField2,
      string TableName)
    {
      string str1 = "";
      string str2 = type;
      if (!(str2 == "Normal"))
      {
        if (str2 == "Date")
        {
          string str3 = DateTime.Now.Day.ToString();
          string str4 = str3.Length > 1 ? str3 : "0" + str3;
          string str5 = DateTime.Now.Month.ToString();
          string str6 = str5.Length > 1 ? str5 : "0" + str5;
          string str7 = prefix + "-" + str4 + str6 + (object) DateTime.Now.Year;
          string[] strArray = new string[14];
          strArray[0] = "select * from ";
          strArray[1] = TableName;
          strArray[2] = " where YEAR(";
          strArray[3] = SubField1;
          strArray[4] = ") =";
          DateTime now = DateTime.Now;
          strArray[5] = now.Year.ToString();
          strArray[6] = " AND MONTH(";
          strArray[7] = SubField1;
          strArray[8] = ") =";
          now = DateTime.Now;
          strArray[9] = now.Month.ToString();
          strArray[10] = " AND DAY(";
          strArray[11] = SubField1;
          strArray[12] = ") =";
          now = DateTime.Now;
          strArray[13] = now.Day.ToString();
          string query = string.Concat(strArray);
          DataTable dataTable = (DataTable) null;
          if (cmd == null)
          {
            dataTable = zgcHelper.GetDataSet(query, zgcHelper.getSqlStr()).Tables[0];
          }
          else
          {
            cmd.CommandText = query;
            new SqlDataAdapter() { SelectCommand = cmd }.Fill(dataTable);
          }
          int num1 = 0;
          if (dataTable.Rows.Count > 0)
            num1 = dataTable.Rows.Count;
          int num2 = num1 + 1;
          str1 = str7 + "-" + num2.ToString();
        }
      }
      else
      {
        string query = "select max(" + colName + ") as CountRow from " + TableName + " where " + colName + " like N'" + prefix.Trim() + "%'";
        DataTable dataTable = new DataTable();
        if (cmd == null)
        {
          dataTable = zgcHelper.GetDataSet(query, zgcHelper.getSqlStr()).Tables[0];
        }
        else
        {
          cmd.CommandText = query;
          new SqlDataAdapter() { SelectCommand = cmd }.Fill(dataTable);
        }
        if (dataTable.Rows[0]["CountRow"].ToString().Length < 1)
        {
          if (cmd == null)
          {
            dataTable = zgcHelper.GetDataSet("select count(Id) as CountRow from " + TableName, zgcHelper.getSqlStr()).Tables[0];
          }
          else
          {
            cmd.CommandText = "select count(Id) as CountRow from " + TableName;
            new SqlDataAdapter() { SelectCommand = cmd }.Fill(dataTable);
          }
        }
        string str3 = (Convert.ToInt32(dataTable.Rows[0]["CountRow"].ToString().Replace(prefix.Trim(), "")) + 1).ToString();
        for (int length = str3.Length; length < int.Parse(countZero); ++length)
          str3 = "0" + str3;
        str1 = prefix.Trim() + str3;
      }
      return str1;
    }

        public static string getPartComp(int userId, int MaCanBoId) => "";// HttpContext.Session["gcCtyId"].ToString() + "-" + HttpContext.Current.Session["gcBranchId"] + "-" + HttpContext.Current.Session["gcDepartmentId"];

    public static string ProcessFilter(string filter) => filter == null || filter.Length < 1 ? filter : filter.ToUpper().Replace("SELECT", "").Replace("DELETE", "").Replace("UPDATE", "").Replace("INSERT", "").Replace("DROP", "").Replace("ALTER", "").Replace("FROM", "").Replace("UNION", "").Replace("--", "").Replace("/*", "").Replace(">", "");

    public static int GetNewValue(
      string gobaleName,
      string tablename,
      string type,
      out int curCount)
    {
      gobaleName = zgc0HelperSQL.ProcessFilter(gobaleName);
      tablename = zgc0HelperSQL.ProcessFilter(tablename);
      string str1 = DateTime.Now.Year.ToString();
      curCount = -1;
      int num = 1;
      SqlCommand cmd = new SqlCommand();
      cmd.CommandType = CommandType.Text;
      cmd.CommandText = "Update " + gobaleName + " SET Type='" + type + "' WHERE Name='" + tablename + "'";
      zgcHelper.ExecProc(cmd, zgcHelper.getSqlStr());
      if (type.Contains("Date"))
      {
        object[] objArray = new object[5]
        {
          (object) DateTime.Now.Month,
          (object) "/",
          null,
          null,
          null
        };
        DateTime now = DateTime.Now;
        objArray[2] = (object) now.Day;
        objArray[3] = (object) "/";
        now = DateTime.Now;
        objArray[4] = (object) now.Year;
        string str2 = string.Concat(objArray);
        cmd.CommandText = "Update " + gobaleName + " SET Thoigian='" + str2 + "', CurCount=0 WHERE year(Thoigian)!=" + str1 + " AND Name='" + tablename + "'";
        zgcHelper.ExecProc(cmd, zgcHelper.getSqlStr());
        cmd.CommandText = "Update " + gobaleName + " SET CurCount=CurCount+1 WHERE year(Thoigian)='" + str1 + "' AND Name='" + tablename + "'";
        zgcHelper.ExecProc(cmd, zgcHelper.getSqlStr());
      }
      else if (type.Contains("Normal"))
      {
        cmd.CommandText = "Update " + gobaleName + " SET CurCount=CurCount+1 WHERE Name='" + tablename + "'";
        zgcHelper.ExecProc(cmd, zgcHelper.getSqlStr());
      }
      cmd.CommandText = "SELECT CurCount FROM " + gobaleName + " WHERE Name='" + tablename + "'";
      curCount = (int) cmd.ExecuteScalar();
      return num;
    }

    public static string getUploadLogoFolder() => ConfigurationManager.AppSettings["Upload"];

    public static string getConfigValue(string name) => ConfigurationManager.AppSettings[name];

    public static void setConfigValue(string name, string value)
    {
      if (ConfigurationManager.AppSettings[name] == null)
        return;
      ConfigurationManager.AppSettings[name] = value;
    }

    public static string gcGetSQL(
      string prefixText,
      int count,
      string objname,
      string field,
      string filter,
      bool bCheckFilter,
      ref string sqlCount,
      int bLike)
    {
      if (filter == null)
        filter = "";
      filter = filter.Length >= 2 ? filter + " AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))" : filter + " ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))";
      string[] strArray = field.Split(',');
      if (strArray.Length < 1)
        strArray = new string[1]{ field };
      string.Format("Select TOP {0} Id,{1}   from {2}", (object) count, (object) field, (object) objname);
      string str1;
      if (prefixText == null)
      {
        str1 = string.Format("Select TOP {0} Id,{1}   from {2}", (object) count, (object) field, (object) objname);
      }
      else
      {
        prefixText = prefixText.Trim();
        if (prefixText.Length < 1)
        {
          str1 = string.Format("Select TOP {0} Id,{1}   from {2}", (object) count, (object) field, (object) objname);
          if (filter != null && filter.Trim().Length > 0)
            str1 = str1 + " WHERE " + filter;
          sqlCount = str1;
        }
        else
        {
          str1 = string.Format("Select TOP {0} Id,{1}   from {2}", (object) count, (object) field, (object) objname);
          sqlCount = str1;
          string str2 = "";
          if (bLike >= 0)
          {
            for (int index = 0; index < strArray.Length; ++index)
              str2 = index != 0 ? str2 + string.Format(" OR ({0} Like N'%{1}%')", (object) strArray[index], (object) prefixText) : str2 + string.Format("({0} Like N'%{1}%')", (object) strArray[index], (object) prefixText);
          }
          if (str2.Length > 0)
            str1 = str1 + " WHERE " + str2;
          if (filter != null && filter.Trim().Length > 1)
          {
            if (str2.Length > 0)
            {
              str1 = str1 + " AND " + filter;
              sqlCount = sqlCount + " WHERE " + filter;
            }
            else
            {
              str1 = str1 + " WHERE " + filter;
              sqlCount = sqlCount + " WHERE " + filter;
            }
          }
        }
      }
      return str1;
    }

    public static bool CheckRight(string tableName, string thaotac, string username)
    {
      DataTable dataTable = zgcHelper.GetDataSet("Select " + thaotac + " From vw_PhanQuyen WHERE Username=N'" + username + "' AND Ten=N'" + tableName + "'", zgcHelper.getSqlStr()).Tables[0];
      return dataTable.Rows.Count > 0 && (bool) dataTable.Rows[0][0];
    }

    //public static string getFilename(FileUpload ctrlname)
    //{
    //  string str1 = string.Empty;
    //  //if (ctrlname. != null)
    //  //  str1 = ctrlname.PostedFile.FileName;
    //  if (str1 == "")
    //    return "";
    //  int startIndex = str1.LastIndexOf("\\") + 1;
    //  string str2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    //  int num = 20;
    //  Random random = new Random((int) DateTime.Now.Ticks);
    //  string empty = string.Empty;
    //  for (int index = 0; index < num; ++index)
    //    empty += str2[random.Next(0, str2.Length - 1)].ToString();
    //  string str3 = str1.Substring(startIndex);
    //  return str3.Replace(str3.Substring(0, str3.IndexOf(".")), empty).Substring(startIndex);
    //}

    public static void LogDatabaseOperation(
      string username,
      int canBoId,
      string operation,
      string tableName,
      string description,
      DateTime time,
      string remoteAdd,
      string remoteHost,
      string remotePort)
    {
      SqlCommand cmd = new SqlCommand();
      cmd.CommandType = CommandType.StoredProcedure;
      cmd.CommandText = "gcGOBAL_PROC_LogDatabaseOperation";
      cmd.Parameters.Add("@username", SqlDbType.NVarChar);
      cmd.Parameters["@username"].Value = (object) username;
      cmd.Parameters.Add("@canBoId", SqlDbType.Int);
      cmd.Parameters["@canBoId"].Value = (object) canBoId;
      cmd.Parameters.Add("@operation", SqlDbType.NVarChar);
      cmd.Parameters["@operation"].Value = (object) operation;
      cmd.Parameters.Add("@tableName", SqlDbType.NVarChar);
      cmd.Parameters["@tableName"].Value = (object) tableName;
      cmd.Parameters.Add("@description", SqlDbType.NVarChar);
      cmd.Parameters["@description"].Value = (object) description;
      cmd.Parameters.Add("@time", SqlDbType.DateTime);
      cmd.Parameters["@time"].Value = (object) time;
      cmd.Parameters.Add("@RemoteClientAdd", SqlDbType.NVarChar);
      cmd.Parameters["@RemoteClientAdd"].Value = remoteAdd == null ? (object) "" : (object) remoteAdd;
      cmd.Parameters.Add("@RemoteClientHost", SqlDbType.NVarChar);
      cmd.Parameters["@RemoteClientHost"].Value = remoteHost == null ? (object) "" : (object) remoteHost;
      cmd.Parameters.Add("@RemoteClientPort", SqlDbType.NVarChar);
      cmd.Parameters["@RemoteClientPort"].Value = remotePort == null ? (object) "" : (object) remotePort;
      zgcHelper.ExecProc(cmd, zgcHelper.getSqlStr());
    }

    public static void LogErrorOperation(
      string username,
      int canBoId,
      string operation,
      string tableName,
      string description,
      DateTime time)
    {
      SqlCommand cmd = new SqlCommand();
      cmd.CommandType = CommandType.StoredProcedure;
      cmd.CommandText = "gcGOBAL_PROC_LogErrorOperation";
      cmd.Parameters.Add("@username", SqlDbType.NVarChar);
      cmd.Parameters["@username"].Value = (object) username;
      cmd.Parameters.Add("@canBoId", SqlDbType.Int);
      cmd.Parameters["@canBoId"].Value = (object) canBoId;
      cmd.Parameters.Add("@operation", SqlDbType.NVarChar);
      cmd.Parameters["@operation"].Value = (object) operation;
      cmd.Parameters.Add("@tableName", SqlDbType.NVarChar);
      cmd.Parameters["@tableName"].Value = (object) tableName;
      cmd.Parameters.Add("@description", SqlDbType.NVarChar);
      cmd.Parameters["@description"].Value = (object) description;
      cmd.Parameters.Add("@time", SqlDbType.DateTime);
      cmd.Parameters["@time"].Value = (object) time;
      zgcHelper.ExecProc(cmd, zgcHelper.getSqlStr());
    }

    public static string getFileIcon(string _extension)
    {
      switch (_extension)
      {
        case ".doc":
          return "Img/doc.png";
        case ".docx":
          return "Img/doc.png";
        case ".pdf":
          return "Img/pdf.jpg";
        case ".ppt":
          return "Img/ppt.gif";
        case ".pptx":
          return "Img/ppt.gif";
        case ".rar":
          return "Img/rar.jpg";
        case ".xls":
          return "Img/xls.png";
        case ".xlsx":
          return "Img/xls.png";
        case ".zip":
          return "Img/zip.png";
        default:
          return "Img/file.jpg";
      }
    }
  }
}
