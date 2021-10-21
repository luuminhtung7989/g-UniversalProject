// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgcUtilityBuild
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

namespace zgcLibCore
{
  public class zgcUtilityBuild
  {
    public static string SqlToCS3(string type)
    {
      switch (type)
      {
        case "bigint":
          return "BigInt";
        case "binary":
          return "Binary";
        case "bit":
          return "Bit";
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
        case "char":
          return "string";
        case "datetime":
          return "DateTime";
        case "double":
          return "double";
        case "float":
          return "double";
        case "image":
          return "byte";
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

    public static string SqlToCS2(string type)
    {
      switch (type)
      {
        case "bigint":
          return "ToInt64";
        case "binary":
          return "ToString";
        case "bit":
          return "ToBoolean";
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

    public static string GetBestName(zgcOneTable table)
    {
      for (int index = 0; index < table.Rows.Length; ++index)
      {
        if (table.Rows[index].format.objs.ContainsKey("CMBFIELD"))
          return table.Rows[index].colName;
      }
      for (int index = 0; index < table.Rows.Length; ++index)
      {
        if (!table.Rows[index].colName.Contains("isPrg"))
        {
          string str = table.Rows[index].colName.ToUpper().Trim();
          if (str.Equals("NAME") || str.Equals("Name") || (str.Equals("TEN") || str.Equals("HOTEN")))
            return table.Rows[index].colName;
        }
      }
      for (int index = 0; index < table.Rows.Length; ++index)
      {
        if (!table.Rows[index].colName.Contains("isPrg"))
        {
          string str = table.Rows[index].colName.ToUpper().Trim();
          if (str.Equals("CODE") || str.Equals("SOCT") || str.Equals("MACT"))
            return table.Rows[index].colName;
        }
      }
      return "Id";
    }

    public static zgcOneTable GetTableOf(zgcOneTable[] tables, string name)
    {
      for (int index = 0; index < tables.Length; ++index)
      {
        if (name.Equals(tables[index].TableName))
          return tables[index];
      }
      return (zgcOneTable) null;
    }

    public static zgcConfigTable GetConfigTableOf(
      zgcConfigTable[] tables,
      string name)
    {
      for (int index = 0; index < tables.Length; ++index)
      {
        if (name.Equals(tables[index].TableName))
          return tables[index];
      }
      return (zgcConfigTable) null;
    }

    public static string GetViewName(zgcOneTable table)
    {
      string str = table.newTableName;
      int num = 0;
      for (int index = 0; index < table.Rows.Length; ++index)
      {
        if (!table.Rows[index].colName.Contains("isPrg") && table.Rows[index].fTable != null && table.Rows[index].fTable.Length > 0)
        {
          str = num >= 10 ? "zgcl_" + table.newTableName + (object) num : "zgcl_" + table.newTableName + "0" + num.ToString();
          ++num;
        }
      }
      if (num == 0)
        str = num >= 10 ? "zgcl_" + table.newTableName + (object) num : "zgcl_" + table.newTableName + "0" + num.ToString();
      return str;
    }

    public static zgcOneRow GetRowByName(zgcOneTable table, string name)
    {
      for (int index = 0; index < table.Rows.Length; ++index)
      {
        if (name == table.Rows[index].colName)
          return table.Rows[index];
      }
      return (zgcOneRow) null;
    }
  }
}
