// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgcConfigTable
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Data;
using System.Data.SqlClient;

namespace zgcLibCore
{
  public class zgcConfigTable
  {
    public int? Id;
    public string Tab = "";
    public string TableName = "";
    public string FormName = "";
    public int? ParentTab;
    public string TypeObject = "";
    public int? Detail;
    public int? MultiOrSingle;
    public string DetailBtnName = "";
    public int? ConfigId;
    public int? mLevel;
    public string mBaseRuleName = "";
    public string bLinkToBaseDetail = "";
    public string UpdateFile = "";
    public string ConfigForm = "";
    public string FogreinInfo = "";
    public int? FormStyle = new int?(0);
    public int? PageSize = new int?(0);
    public int? IndexPage = new int?(0);
    public string SourceFile = "";
    public string ScriptFile = "";
    public string Keep01 = "";
    public string Keep02 = "";
    public string Keep03 = "";
    public gcConfigTemplate[] arrButton;

    public zgcConfigTable()
    {
    }

    public zgcConfigTable(SqlDataReader reader)
    {
      this.Id = reader.IsDBNull(reader.GetOrdinal(nameof (Id))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (Id)]));
      this.Tab = reader.IsDBNull(reader.GetOrdinal(nameof (Tab))) ? (string) null : Convert.ToString(reader[nameof (Tab)]);
      this.TableName = reader.IsDBNull(reader.GetOrdinal(nameof (TableName))) ? (string) null : Convert.ToString(reader[nameof (TableName)]);
      this.FormName = reader.IsDBNull(reader.GetOrdinal(nameof (FormName))) ? (string) null : Convert.ToString(reader[nameof (FormName)]);
      this.ParentTab = reader.IsDBNull(reader.GetOrdinal(nameof (ParentTab))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (ParentTab)]));
      this.TypeObject = reader.IsDBNull(reader.GetOrdinal(nameof (TypeObject))) ? (string) null : Convert.ToString(reader[nameof (TypeObject)]);
      this.Detail = reader.IsDBNull(reader.GetOrdinal(nameof (Detail))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (Detail)]));
      this.MultiOrSingle = reader.IsDBNull(reader.GetOrdinal(nameof (MultiOrSingle))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (MultiOrSingle)]));
      this.DetailBtnName = reader.IsDBNull(reader.GetOrdinal(nameof (DetailBtnName))) ? (string) null : Convert.ToString(reader[nameof (DetailBtnName)]);
      this.ConfigId = reader.IsDBNull(reader.GetOrdinal(nameof (ConfigId))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (ConfigId)]));
      this.mLevel = reader.IsDBNull(reader.GetOrdinal(nameof (mLevel))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (mLevel)]));
      this.mBaseRuleName = reader.IsDBNull(reader.GetOrdinal(nameof (mBaseRuleName))) ? (string) null : Convert.ToString(reader[nameof (mBaseRuleName)]);
      this.bLinkToBaseDetail = reader.IsDBNull(reader.GetOrdinal(nameof (bLinkToBaseDetail))) ? (string) null : Convert.ToString(reader[nameof (bLinkToBaseDetail)]);
      this.UpdateFile = reader.IsDBNull(reader.GetOrdinal(nameof (UpdateFile))) ? (string) null : Convert.ToString(reader[nameof (UpdateFile)]);
      this.ConfigForm = reader.IsDBNull(reader.GetOrdinal(nameof (ConfigForm))) ? (string) null : Convert.ToString(reader[nameof (ConfigForm)]);
      this.FormStyle = reader.IsDBNull(reader.GetOrdinal(nameof (FormStyle))) ? new int?() : new int?(Convert.ToInt32(reader[nameof (FormStyle)]));
      this.FogreinInfo = reader.IsDBNull(reader.GetOrdinal(nameof (FogreinInfo))) ? (string) null : Convert.ToString(reader[nameof (FogreinInfo)]);
      this.PageSize = reader.IsDBNull(reader.GetOrdinal(nameof (PageSize))) ? new int?(10) : new int?(Convert.ToInt32(reader[nameof (PageSize)]));
      this.IndexPage = reader.IsDBNull(reader.GetOrdinal(nameof (IndexPage))) ? new int?(-1) : new int?(Convert.ToInt32(reader[nameof (IndexPage)]));
      this.SourceFile = reader.IsDBNull(reader.GetOrdinal(nameof (SourceFile))) ? "" : Convert.ToString(reader[nameof (SourceFile)]);
      this.ScriptFile = reader.IsDBNull(reader.GetOrdinal(nameof (ScriptFile))) ? "" : Convert.ToString(reader[nameof (ScriptFile)]);
      this.Keep01 = reader.IsDBNull(reader.GetOrdinal(nameof (Keep01))) ? "" : Convert.ToString(reader[nameof (Keep01)]);
      this.Keep02 = reader.IsDBNull(reader.GetOrdinal(nameof (Keep02))) ? "" : Convert.ToString(reader[nameof (Keep02)]);
      this.Keep03 = reader.IsDBNull(reader.GetOrdinal(nameof (Keep03))) ? "" : Convert.ToString(reader[nameof (Keep03)]);
    }

    public zgcConfigTable(DataRow row)
    {
      this.Id = row.IsNull(nameof (Id)) ? new int?() : new int?(Convert.ToInt32(row[nameof (Id)]));
      this.Tab = row.IsNull(nameof (Tab)) ? (string) null : Convert.ToString(row[nameof (Tab)]);
      this.TableName = row.IsNull(nameof (TableName)) ? (string) null : Convert.ToString(row[nameof (TableName)]);
      this.FormName = row.IsNull(nameof (FormName)) ? (string) null : Convert.ToString(row[nameof (FormName)]);
      this.ParentTab = row.IsNull(nameof (ParentTab)) ? new int?() : new int?(Convert.ToInt32(row[nameof (ParentTab)]));
      this.TypeObject = row.IsNull(nameof (TypeObject)) ? (string) null : Convert.ToString(row[nameof (TypeObject)]);
      this.Detail = row.IsNull(nameof (Detail)) ? new int?() : new int?(Convert.ToInt32(row[nameof (Detail)]));
      this.MultiOrSingle = row.IsNull(nameof (MultiOrSingle)) ? new int?() : new int?(Convert.ToInt32(row[nameof (MultiOrSingle)]));
      this.DetailBtnName = row.IsNull(nameof (DetailBtnName)) ? (string) null : Convert.ToString(row[nameof (DetailBtnName)]);
      this.ConfigId = row.IsNull(nameof (ConfigId)) ? new int?() : new int?(Convert.ToInt32(row[nameof (ConfigId)]));
      this.mLevel = row.IsNull(nameof (mLevel)) ? new int?() : new int?(Convert.ToInt32(row[nameof (mLevel)]));
      this.mBaseRuleName = row.IsNull(nameof (mBaseRuleName)) ? (string) null : Convert.ToString(row[nameof (mBaseRuleName)]);
      this.bLinkToBaseDetail = row.IsNull(nameof (bLinkToBaseDetail)) ? (string) null : Convert.ToString(row[nameof (bLinkToBaseDetail)]);
      this.UpdateFile = row.IsNull(nameof (UpdateFile)) ? (string) null : Convert.ToString(row[nameof (UpdateFile)]);
      this.ConfigForm = row.IsNull(nameof (ConfigForm)) ? (string) null : Convert.ToString(row[nameof (ConfigForm)]);
      this.FormStyle = new int?(row.IsNull(nameof (FormStyle)) ? 0 : Convert.ToInt32(row[nameof (FormStyle)]));
      this.FogreinInfo = row.IsNull(nameof (FogreinInfo)) ? (string) null : Convert.ToString(row[nameof (FogreinInfo)]);
      this.PageSize = new int?(row.IsNull(nameof (PageSize)) ? 10 : Convert.ToInt32(row[nameof (PageSize)]));
      this.IndexPage = new int?(row.IsNull(nameof (IndexPage)) ? -1 : Convert.ToInt32(row[nameof (IndexPage)]));
      this.SourceFile = row.IsNull(nameof (SourceFile)) ? "" : Convert.ToString(row[nameof (SourceFile)]);
      this.ScriptFile = row.IsNull(nameof (ScriptFile)) ? "" : Convert.ToString(row[nameof (ScriptFile)]);
      this.Keep03 = row.IsNull(nameof (Keep03)) ? "" : Convert.ToString(row[nameof (Keep03)]);
      this.Keep02 = row.IsNull(nameof (Keep02)) ? "" : Convert.ToString(row[nameof (Keep02)]);
      this.Keep01 = row.IsNull(nameof (Keep01)) ? "" : Convert.ToString(row[nameof (Keep01)]);
    }
  }
}
