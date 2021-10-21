// Decompiled with JetBrains decompiler
// Type: zgc0Admin.zgcCreateClassCore
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.IO;
using System.Text;
using zgcLibCore;

namespace zgc0Admin
{
  public class zgcCreateClassCore
  {
    public zgcOneTable talbe;
    private string classScope = "\r\n        public class {0}\r\n        {{\r\n            {1} \r\n            {2} \r\n            {3} \r\n        }}";
    private string caseAdd = "\r\n        public {0}()\r\n        {{\r\n        }}";

    public static zgcOneTable GetTableOf(zgcOneTable[] tables, string name)
    {
      for (int index = 0; index < tables.Length; ++index)
      {
        if (name.Equals(tables[index].TableName))
          return tables[index];
      }
      return (zgcOneTable) null;
    }

    public static string GetNameOf(zgcOneTable table) => zgcUtilityBuild.GetBestName(table);

    public string GetViewName()
    {
      string str = this.talbe.newTableName;
      int num = 0;
      for (int index = 0; index < this.talbe.Rows.Length; ++index)
      {
        if (this.talbe.Rows[index].fTable != null && this.talbe.Rows[index].fTable.Length > 0)
        {
          str = num >= 10 ? "zgcl_" + this.talbe.newTableName + (object) num : "zgcl_" + this.talbe.newTableName + "0" + num.ToString();
          ++num;
        }
      }
      if (num == 0)
        str = num >= 10 ? "zgcl_" + this.talbe.newTableName + (object) num : "zgcl_" + this.talbe.newTableName + "0" + num.ToString();
      return str;
    }

    public string BuildCore(StreamWriter sw)
    {
      StringBuilder stringBuilder1 = new StringBuilder("");
      StringBuilder stringBuilder2 = new StringBuilder("");
      return string.Format(this.caseAdd, (object) this.talbe.newTableName, (object) stringBuilder1.ToString(), (object) stringBuilder2.ToString());
    }

    public string BuildLib(StreamWriter sw) => this.BuildAdd(sw);

    private string BuildAdd(StreamWriter sw)
    {
      StringBuilder stringBuilder1 = new StringBuilder("");
      StringBuilder stringBuilder2 = new StringBuilder("");
      for (int index = 0; index < this.talbe.Rows.Length; ++index)
      {
        int? isIdentity = this.talbe.Rows[index].IsIdentity;
        int num = 0;
        if (isIdentity.GetValueOrDefault() <= num || !isIdentity.HasValue)
        {
          string colName = this.talbe.Rows[index].colName;
          zgcCreateClassCore.SqlToCS(this.talbe.Rows[index].colType);
          string str = "@p_" + colName;
        }
      }
      return string.Format(this.caseAdd, (object) this.talbe.newTableName, (object) stringBuilder1.ToString(), (object) stringBuilder2.ToString());
    }

    public string BuildUpdate(StreamWriter sw)
    {
      StringBuilder stringBuilder1 = new StringBuilder("\r\n");
      StringBuilder stringBuilder2 = new StringBuilder("\r\n");
      for (int index = 0; index < this.talbe.Rows.Length; ++index)
      {
        string colName = this.talbe.Rows[index].colName;
        zgcCreateClassCore.SqlToCS(this.talbe.Rows[index].colType);
        int? isPriKey = this.talbe.Rows[index].IsPriKey;
        int num = 0;
        string str = isPriKey.GetValueOrDefault() <= num || !isPriKey.HasValue ? "@p_" + colName : "@pk_" + colName;
      }
      return "";
    }

    public void BuildClass(StreamWriter sw, bool isView) => this.Build(sw, isView);

    private void Build(StreamWriter sw, bool isView)
    {
      string str = this.BuildClass(isView);
      sw.WriteLine(str);
    }

    private string BuildClass(bool isView)
    {
      string str1 = "";
      string str2 = "";
      if (!isView)
        str2 = (str2 ?? "") ?? "";
      string set = this.BuildGetSet();
      return string.Format(this.classScope, (object) this.talbe.newTableName, (object) str1, (object) str2, (object) set);
    }

    private string BuildGetSet()
    {
      StringBuilder stringBuilder = new StringBuilder(" ");
      for (int index = 0; index < this.talbe.Rows.Length; ++index)
      {
        string colName = this.talbe.Rows[index].colName;
        string cs = zgcCreateClassCore.SqlToCS(this.talbe.Rows[index].colType);
        if (cs != "string")
        {
          string str1 = cs + "?";
        }
        string str2 = "_" + colName;
      }
      return stringBuilder.ToString();
    }

    public string SqlToSpaceValue(string type, string index)
    {
      switch (type)
      {
        case "bigint":
          return "{" + index + "}";
        case "binary":
          return "{" + index + "}";
        case "bit":
          return "'{" + index + "}'";
        case "byte":
          return "{" + index + "}";
        case "char":
          return "N'{" + index + "}'";
        case "datetime":
          return "N'{" + index + "}'";
        case "double":
          return "{" + index + "}";
        case "float":
          return "{" + index + "}";
        case "image":
          return "{" + index + "}";
        case "int":
          return "{" + index + "}";
        case "nchar":
          return "N'{" + index + "}'";
        case "ntext":
          return "N'{" + index + "}'";
        case "numeric":
          return "{" + index + "}";
        case "nvarchar":
          return "N'{" + index + "}'";
        case "real":
          return "{" + index + "}";
        case "smallint":
          return "{" + index + "}";
        case "systemtype":
          return "{" + index + "}";
        case "text":
          return "N'{" + index + "}'";
        case "tinyint":
          return "{" + index + "}";
        case "varbinary":
          return "{" + index + "}";
        case "varchar":
          return "N'{" + index + "}'";
        default:
          return "";
      }
    }

    public string SqlToDefaultValue(string type)
    {
      switch (type)
      {
        case "bigint":
          return "0";
        case "binary":
          return "(string)null";
        case "bit":
          return "(bool?)null";
        case "byte":
          return "(byte?)null";
        case "char":
          return "(string)null";
        case "datetime":
          return "(DateTime?)null";
        case "double":
          return "(double?)null";
        case "float":
          return "(double?)null";
        case "image":
          return "(string)null";
        case "int":
          return "(int?)null";
        case "nchar":
          return "(string)null";
        case "ntext":
          return "(string)null";
        case "numeric":
          return "(double?)null";
        case "nvarchar":
          return "(string)null";
        case "real":
          return "(double?)null";
        case "smallint":
          return "(int?)null";
        case "systemtype":
          return "(string)null";
        case "text":
          return "(string)null";
        case "tinyint":
          return "(byte?)null";
        case "varbinary":
          return "(string)null";
        case "varchar":
          return "(string)null";
        default:
          return "";
      }
    }

    public string SqlToCS3(string type)
    {
      switch (type)
      {
        case "bigint":
          return "BigInt";
        case "binary":
          return "Binary";
        case "bit":
          return "Bit";
        case "byte":
          return "Byte";
        case "char":
          return "Char";
        case "datetime":
          return "DateTime";
        case "double":
          return "Float";
        case "float":
          return "Float";
        case "image":
          return "Image";
        case "int":
          return "Int";
        case "nchar":
          return "NChar";
        case "ntext":
          return "NText";
        case "numeric":
          return "Decimal";
        case "nvarchar":
          return "NVarChar";
        case "real":
          return "Float";
        case "smallint":
          return "SmallInt";
        case "systemtype":
          return "NVarChar";
        case "text":
          return "Text";
        case "tinyint":
          return " TinyInt";
        case "varbinary":
          return "VarBinary";
        case "varchar":
          return " VarChar";
        default:
          return "NVarChar";
      }
    }

    public static string SqlToCS(string type)
    {
      switch (type)
      {
        case "bigint":
          return "long";
        case "binary":
          return "string";
        case "bit":
          return "bool";
        case "byte":
          return "byte";
        case "char":
          return "string";
        case "datetime":
          return "DateTime";
        case "double":
          return "double";
        case "float":
          return "double";
        case "image":
          return "string";
        case "int":
          return "int";
        case "nchar":
          return "string";
        case "ntext":
          return "string";
        case "numeric":
          return "double";
        case "nvarchar":
          return "string";
        case "real":
          return "double";
        case "smallint":
          return "int";
        case "systemtype":
          return "string";
        case "text":
          return "string";
        case "tinyint":
          return "byte";
        case "varbinary":
          return "string";
        case "varchar":
          return "string";
        default:
          return "string";
      }
    }

    public static string SqlToSimpleType(string type)
    {
      switch (type)
      {
        case "bigint":
          return "1";
        case "binary":
          return "6";
        case "bit":
          return "9";
        case "byte":
          return "1";
        case "char":
          return "4";
        case "datetime":
          return "5";
        case "double":
          return "2";
        case "float":
          return "2";
        case "image":
          return "6";
        case "int":
          return "1";
        case "nchar":
          return "4";
        case "ntext":
          return "4";
        case "numeric":
          return "2";
        case "nvarchar":
          return "4";
        case "real":
          return "2";
        case "smallint":
          return "1";
        case "systemtype":
          return "4";
        case "text":
          return "4";
        case "tinyint":
          return "1";
        case "varbinary":
          return "6";
        case "varchar":
          return "4";
        default:
          return "4";
      }
    }

    public string SqlToCS2(string type)
    {
      switch (type)
      {
        case "bigint":
          return "ToInt64";
        case "binary":
          return "ToString";
        case "bit":
          return "ToBoolean";
        case "byte":
          return "ToByte";
        case "char":
          return "ToString";
        case "datetime":
          return "ToDateTime";
        case "double":
          return "ToDouble";
        case "float":
          return "ToDouble";
        case "image":
          return "ToString";
        case "int":
          return "ToInt32";
        case "nchar":
          return "ToString";
        case "ntext":
          return "ToString";
        case "numeric":
          return "ToDouble";
        case "nvarchar":
          return "ToString";
        case "real":
          return "ToDouble";
        case "smallint":
          return "ToInt16";
        case "systemtype":
          return "ToString";
        case "text":
          return "ToString";
        case "tinyint":
          return "ToByte";
        case "varbinary":
          return "ToString";
        case "varchar":
          return "ToString";
        default:
          return "ToString";
      }
    }
  }
}
