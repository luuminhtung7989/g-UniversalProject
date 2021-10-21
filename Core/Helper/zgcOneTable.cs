// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgcOneTable
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Data;
using System.Data.SqlClient;

namespace zgcLibCore
{
    public class zgcOneRow
    {
        public string colName = (string)null;
        public string colType = (string)null;
        public int? colLength;
        public int? colIsnull;
        public string colDescript = (string)null;
        public string fCol = (string)null;
        public string fTable = (string)null;
        public int? IsPriKey = new int?(0);
        public int? IsIdentity = new int?(0);
        public bool isBuildForm = false;
        public zgcCongigTemplateL format = new zgcCongigTemplateL();
    }
    public class zgcOneTable
  {
    public zgcOneRow[] Rows;
    public string TableName;
    public string showTableName = "";
    public string newTableName;
    public string ID = "";
    public string server = "";

    public void LoadViewReport(string PathName, string FileName, string ViewName)
    {
      DataTable dataTableNew1 = zgcHelper.GetDataSet(string.Format("select * from tbl_CONFIG_REPORT where PathName='{0}' AND FileName = '{1}' AND TableName = '{2}'", (object) PathName, (object) FileName, (object) ViewName), this.server).Tables[0];
      if (dataTableNew1 == null || dataTableNew1.Rows.Count <= 0)
        return;
      DataTable dataTableNew2 = zgcHelper.GetDataSet("select * from tbl_CONFIG_REPORT_DETAIL where ReportId=" + dataTableNew1.Rows[0]["Id"].ToString() + " order by IsView, OrderCol", this.server).Tables[0];
      this.Rows = new zgcOneRow[dataTableNew2.Rows.Count];
      for (int index = 0; index < dataTableNew2.Rows.Count; ++index)
      {
        this.Rows[index] = new zgcOneRow();
        this.Rows[index].colName = dataTableNew2.Rows[index].IsNull("ColName") ? (string) null : Convert.ToString(dataTableNew2.Rows[index]["ColName"]);
        this.Rows[index].colType = dataTableNew2.Rows[index].IsNull("ColType") ? (string) null : Convert.ToString(dataTableNew2.Rows[index]["ColType"]);
        this.Rows[index].colLength = dataTableNew2.Rows[index].IsNull("length") ? new int?() : new int?(Convert.ToInt32(dataTableNew2.Rows[index]["length"]));
        this.Rows[index].colIsnull = new int?(1);
        this.Rows[index].fTable = dataTableNew2.Rows[index].IsNull("ftable") ? (string) null : Convert.ToString(dataTableNew2.Rows[index]["ftable"]);
        this.Rows[index].fCol = dataTableNew2.Rows[index].IsNull("fcolname") ? (string) null : Convert.ToString(dataTableNew2.Rows[index]["fcolname"]);
        this.Rows[index].colDescript = dataTableNew2.Rows[index].IsNull("descript") ? (string) null : Convert.ToString(dataTableNew2.Rows[index]["descript"]);
        this.Rows[index].format.Parser(this.Rows[index].colDescript);
      }
    }

    public void LoadView()
    {
      DataTable dataTableNew = zgcHelper.GetDataSet("select * from gcUserView where tblname='" + this.TableName + "' order by colorder", this.server).Tables[0];
      this.Rows = new zgcOneRow[dataTableNew.Rows.Count];
      for (int index = 0; index < dataTableNew.Rows.Count; ++index)
      {
        this.Rows[index] = new zgcOneRow();
        this.Rows[index].colName = dataTableNew.Rows[index].IsNull("name") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["name"]);
        this.Rows[index].colType = dataTableNew.Rows[index].IsNull("typename") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["typename"]);
        this.Rows[index].colLength = dataTableNew.Rows[index].IsNull("length") ? new int?() : new int?(Convert.ToInt32(dataTableNew.Rows[index]["length"]));
        this.Rows[index].colIsnull = dataTableNew.Rows[index].IsNull("isnullable") ? new int?() : new int?(Convert.ToInt32(dataTableNew.Rows[index]["isnullable"]));
      }
    }

    public void Load()
    {
      DataTable dataTableNew = zgcHelper.GetDataSet("select * from gcDesc where tablename='" + this.TableName + "' order by colorder", this.server).Tables[0];
      this.Rows = new zgcOneRow[dataTableNew.Rows.Count];
      for (int index = 0; index < dataTableNew.Rows.Count; ++index)
      {
        this.Rows[index] = new zgcOneRow();
        this.Rows[index].colName = dataTableNew.Rows[index].IsNull("name") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["name"]);
        this.Rows[index].colType = dataTableNew.Rows[index].IsNull("typename") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["typename"]);
        this.Rows[index].colLength = dataTableNew.Rows[index].IsNull("length") ? new int?() : new int?(Convert.ToInt32(dataTableNew.Rows[index]["length"]));
        this.Rows[index].colIsnull = dataTableNew.Rows[index].IsNull("isnullable") ? new int?() : new int?(Convert.ToInt32(dataTableNew.Rows[index]["isnullable"]));
        this.Rows[index].fTable = dataTableNew.Rows[index].IsNull("ftable") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["ftable"]);
        this.Rows[index].fCol = dataTableNew.Rows[index].IsNull("fcolname") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["fcolname"]);
        this.Rows[index].IsPriKey = dataTableNew.Rows[index].IsNull("PrimaryKey") ? new int?() : new int?(Convert.ToInt32(dataTableNew.Rows[index]["PrimaryKey"]));
        this.Rows[index].colDescript = dataTableNew.Rows[index].IsNull("descript") ? (string) null : Convert.ToString(dataTableNew.Rows[index]["descript"]);
        this.Rows[index].format.Parser(this.Rows[index].colDescript);
        this.Rows[index].IsIdentity = dataTableNew.Rows[index].IsNull("isIdentify") ? new int?() : new int?(Convert.ToInt32(dataTableNew.Rows[index]["isIdentify"]));
      }
      dataTableNew.Clone();
    }

    public int GetIdentity(string table, string column)
    {
      int num = 0;
      try
      {
        SqlCommand cmd = new SqlCommand("gcGOBAL_GetIdentity");
        cmd.CommandText = "gcGOBAL_GetIdentity";
        cmd.CommandType = CommandType.StoredProcedure;
        cmd.Parameters.Add("@tablename", SqlDbType.NVarChar);
        cmd.Parameters["@tablename"].Value = (object) table;
        cmd.Parameters.Add("@name", SqlDbType.NVarChar);
        cmd.Parameters["@name"].Value = (object) column;
        SqlParameter sqlParameter = new SqlParameter("@identity", SqlDbType.NVarChar, 128);
        sqlParameter.Direction = ParameterDirection.Output;
        cmd.Parameters.Add(sqlParameter);
        zgcHelper.ExecProc(cmd, this.server);
        if (sqlParameter == null)
          num = 0;
        else if (sqlParameter.Value.ToString().Length > 0)
          num = 1;
      }
      catch (Exception ex)
      {
        zgcHelper.NoneException(ex);
        return num;
      }
      return num;
    }
  }
}
