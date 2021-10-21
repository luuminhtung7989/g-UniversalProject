// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgcHelper
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll


using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using WebCore;
<<<<<<< HEAD
using zgcSpaceKernel.Core;

namespace zgcLibCore
{
    public class zgcHelper
    {
        public string strError = "";
        private static string passPhrase = "Pas5pr@se%&*?)(";
        private static string initVector = "@1B2c3D4e5F6g7H8";

        public static double Encript(double v, double key, double tok) => v / tok + key / tok + 31.0;

        public static double Decrypt(double v, double key, double tok) => (v - 31.0) * tok - key;

        public static string Encript(string str) => new RijndaelEnhanced(zgcHelper.passPhrase, zgcHelper.initVector).Encrypt(str);

        public static string Decrypt(string str) => new RijndaelEnhanced(zgcHelper.passPhrase, zgcHelper.initVector).Decrypt(str);

        public static string HashCode(string str)
        {
            string str1 = "";
            try
            {
                SHA1 shA1 = SHA1.Create();
                byte[] bytes = new ASCIIEncoding().GetBytes(str);
                shA1.ComputeHash(bytes);
                str1 = Convert.ToBase64String(shA1.Hash);
            }
            catch (Exception ex)
            {
                string str2 = "Error in HashCode : " + ex.Message;
            }
            return str1;
        }

        public string EncryptString(string inputString, int dwKeySize, string xmlString)
        {
            RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider(dwKeySize);
            cryptoServiceProvider.FromXmlString(xmlString);
            int num1 = dwKeySize / 8;
            byte[] bytes = Encoding.UTF32.GetBytes(inputString);
            int num2 = num1 - 42;
            int length = bytes.Length;
            int num3 = length / num2;
            StringBuilder stringBuilder = new StringBuilder();
            for (int index = 0; index <= num3; ++index)
            {
                byte[] rgb = new byte[length - num2 * index > num2 ? num2 : length - num2 * index];
                Buffer.BlockCopy((Array)bytes, num2 * index, (Array)rgb, 0, rgb.Length);
                byte[] inArray = cryptoServiceProvider.Encrypt(rgb, true);
                Array.Reverse((Array)inArray);
                stringBuilder.Append(Convert.ToBase64String(inArray));
            }
            return stringBuilder.ToString();
        }

        public string DecryptString(string inputString, int dwKeySize, string xmlString)
        {
            RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider(dwKeySize);
            cryptoServiceProvider.FromXmlString(xmlString);
            int length = dwKeySize / 8 % 3 != 0 ? dwKeySize / 8 / 3 * 4 + 4 : dwKeySize / 8 / 3 * 4;
            int num = inputString.Length / length;
            ArrayList arrayList = new ArrayList();
            for (int index = 0; index < num; ++index)
            {
                byte[] rgb = Convert.FromBase64String(inputString.Substring(length * index, length));
                Array.Reverse((Array)rgb);
                arrayList.AddRange((ICollection)cryptoServiceProvider.Decrypt(rgb, true));
            }
            return Encoding.UTF32.GetString(arrayList.ToArray(Type.GetType("System.Byte")) as byte[]);
        }

        public static string EncriptMD5(string obj)
        {
            obj = "#@?" + obj + "(ô$ơ";
            byte[] hash = new MD5CryptoServiceProvider().ComputeHash(Encoding.UTF8.GetBytes(obj));
            string str = "";
            for (int index = 0; index < hash.Length; ++index)
                str += hash[index].ToString("x2");
            return str;
        }

        public static string EncriptMD5Old(string obj)
        {
            byte[] hash = new MD5CryptoServiceProvider().ComputeHash(Encoding.UTF8.GetBytes(obj));
            string str = "";
            for (int index = 0; index < hash.Length; ++index)
                str += hash[index].ToString("x2");
            return str;
        }

        public static string NoneException(Exception e) => e.ToString() + " \r\n";

        public static void NoneUsing(object e)
        {
        }

        //public static DataTable GetDataTable(string query, string strConnect)
        //{
        //  DataTable dataTable = new DataTable();
        //  using (SqlConnection connection = new SqlConnection(zgcHelper.Decrypt(strConnect)))
        //  {
        //    connection.Open();
        //    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
        //    sqlDataAdapter.SelectCommand = new SqlCommand(query, connection);
        //    sqlDataAdapter.SelectCommand.CommandTimeout = 36000;
        //    try
        //    {
        //      sqlDataAdapter.Fill(dataTable);
        //    }
        //    catch (Exception ex)
        //    {
        //      zgcHelper.NoneException(ex);
        //    }
        //    finally
        //    {
        //    }
        //  }
        //  return dataTable;
        //}

        public static DataSet GetDataSet(string query, string strConnect, bool bDecript = true)
        {
            DataSet dataTable = new DataSet();
            using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
            {
                sqlConnection.Open();
                SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
                sqlDataAdapter.SelectCommand = new SqlCommand(query, sqlConnection);
                sqlDataAdapter.SelectCommand.CommandTimeout = 36000;
                try
                {
                    sqlDataAdapter.Fill(dataTable);
                }
                catch (Exception ex)
                {
                    zgcHelper.NoneException(ex);
                }
                finally
                {
                    sqlConnection.Close();
                }
            }
            return dataTable;
        }

        public static Rs ExecProc(SqlCommand cmd, string strConnect, bool bDecript = true)
        {
            Rs rs = new Rs();
            bool flag = false;
            using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
            {
                sqlConnection.Open();
                SqlTransaction sqlTransaction = sqlConnection.BeginTransaction(IsolationLevel.ReadUncommitted, "Sample Transaction 0901");
                cmd.Transaction = sqlTransaction;
                cmd.CommandTimeout = 36000;
                try
                {
                    cmd.Connection = sqlConnection;
                    cmd.ExecuteNonQuery();
                    sqlTransaction.Commit();
                    flag = true;
                }
                catch (Exception ex1)
                {
                    rs.Records = ex1.ToString();
                    try
                    {
                        sqlTransaction.Rollback();
                    }
                    catch (SqlException ex2)
                    {
                        if (sqlTransaction.Connection != null)
                            zgcHelper.NoneException((Exception)ex2);
                    }
                    flag = false;
                    zgcHelper.NoneException(ex1);
                }
                finally
                {
                    sqlConnection.Close();
                }
            }
            if (flag) rs.Status = "OK";
            else rs.Status = "FAIL";
            return rs;
        }

        public static DataSet ExecComnad(SqlCommand cmd, string strConnect, bool bDecript = true)
        {
            DataSet dataTable = new DataSet();
            using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
            {
                sqlConnection.Open();
                SqlTransaction sqlTransaction = sqlConnection.BeginTransaction(IsolationLevel.ReadCommitted, "Sample Transaction 0901");
                try
                {
                    cmd.CommandTimeout = 36000;
                    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter()
                    {
                        SelectCommand = cmd
                    };
                    sqlDataAdapter.SelectCommand.Transaction = sqlTransaction;
                    sqlDataAdapter.SelectCommand.Connection = sqlConnection;
                    sqlDataAdapter.Fill(dataTable);
                    sqlTransaction.Commit();
                }
                catch (Exception ex1)
                {
                    try
                    {
                        sqlTransaction.Rollback();
                    }
                    catch (SqlException ex2)
                    {
                        if (sqlTransaction.Connection != null)
                            zgcHelper.NoneException((Exception)ex2);
                    }
                    zgcHelper.NoneException(ex1);
                }
=======

namespace zgcLibCore
{
  public class zgcHelper
  {
    public string strError = "";
    private static string passPhrase = "Pas5pr@se%&*?)(";
    private static string initVector = "@1B2c3D4e5F6g7H8";

    public static double Encript(double v, double key, double tok) => v / tok + key / tok + 31.0;

    public static double Decrypt(double v, double key, double tok) => (v - 31.0) * tok - key;

    public static string Encript(string str) => new RijndaelEnhanced(zgcHelper.passPhrase, zgcHelper.initVector).Encrypt(str);

    public static string Decrypt(string str) => new RijndaelEnhanced(zgcHelper.passPhrase, zgcHelper.initVector).Decrypt(str);

    public static string HashCode(string str)
    {
      string str1 = "";
      try
      {
        SHA1 shA1 = SHA1.Create();
        byte[] bytes = new ASCIIEncoding().GetBytes(str);
        shA1.ComputeHash(bytes);
        str1 = Convert.ToBase64String(shA1.Hash);
      }
      catch (Exception ex)
      {
        string str2 = "Error in HashCode : " + ex.Message;
      }
      return str1;
    }

    public string EncryptString(string inputString, int dwKeySize, string xmlString)
    {
      RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider(dwKeySize);
      cryptoServiceProvider.FromXmlString(xmlString);
      int num1 = dwKeySize / 8;
      byte[] bytes = Encoding.UTF32.GetBytes(inputString);
      int num2 = num1 - 42;
      int length = bytes.Length;
      int num3 = length / num2;
      StringBuilder stringBuilder = new StringBuilder();
      for (int index = 0; index <= num3; ++index)
      {
        byte[] rgb = new byte[length - num2 * index > num2 ? num2 : length - num2 * index];
        Buffer.BlockCopy((Array) bytes, num2 * index, (Array) rgb, 0, rgb.Length);
        byte[] inArray = cryptoServiceProvider.Encrypt(rgb, true);
        Array.Reverse((Array) inArray);
        stringBuilder.Append(Convert.ToBase64String(inArray));
      }
      return stringBuilder.ToString();
    }

    public string DecryptString(string inputString, int dwKeySize, string xmlString)
    {
      RSACryptoServiceProvider cryptoServiceProvider = new RSACryptoServiceProvider(dwKeySize);
      cryptoServiceProvider.FromXmlString(xmlString);
      int length = dwKeySize / 8 % 3 != 0 ? dwKeySize / 8 / 3 * 4 + 4 : dwKeySize / 8 / 3 * 4;
      int num = inputString.Length / length;
      ArrayList arrayList = new ArrayList();
      for (int index = 0; index < num; ++index)
      {
        byte[] rgb = Convert.FromBase64String(inputString.Substring(length * index, length));
        Array.Reverse((Array) rgb);
        arrayList.AddRange((ICollection) cryptoServiceProvider.Decrypt(rgb, true));
      }
      return Encoding.UTF32.GetString(arrayList.ToArray(Type.GetType("System.Byte")) as byte[]);
    }

    public static string EncriptMD5(string obj)
    {
      obj = "#@?" + obj + "(ô$ơ";
      byte[] hash = new MD5CryptoServiceProvider().ComputeHash(Encoding.UTF8.GetBytes(obj));
      string str = "";
      for (int index = 0; index < hash.Length; ++index)
        str += hash[index].ToString("x2");
      return str;
    }

    public static string EncriptMD5Old(string obj)
    {
      byte[] hash = new MD5CryptoServiceProvider().ComputeHash(Encoding.UTF8.GetBytes(obj));
      string str = "";
      for (int index = 0; index < hash.Length; ++index)
        str += hash[index].ToString("x2");
      return str;
    }

    public static string NoneException(Exception e) => e.ToString() + " \r\n";

    public static void NoneUsing(object e)
    {
    }

    //public static DataTable GetDataTable(string query, string strConnect)
    //{
    //  DataTable dataTable = new DataTable();
    //  using (SqlConnection connection = new SqlConnection(zgcHelper.Decrypt(strConnect)))
    //  {
    //    connection.Open();
    //    SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
    //    sqlDataAdapter.SelectCommand = new SqlCommand(query, connection);
    //    sqlDataAdapter.SelectCommand.CommandTimeout = 36000;
    //    try
    //    {
    //      sqlDataAdapter.Fill(dataTable);
    //    }
    //    catch (Exception ex)
    //    {
    //      zgcHelper.NoneException(ex);
    //    }
    //    finally
    //    {
    //    }
    //  }
    //  return dataTable;
    //}

    public static DataSet GetDataSet(string query, string strConnect, bool bDecript=true)
    {
            DataSet dataTable = new DataSet();
      using (SqlConnection sqlConnection = new SqlConnection(bDecript?zgcHelper.Decrypt(strConnect): strConnect))
      {
                sqlConnection.Open();
        SqlDataAdapter sqlDataAdapter = new SqlDataAdapter();
        sqlDataAdapter.SelectCommand = new SqlCommand(query, sqlConnection);
        sqlDataAdapter.SelectCommand.CommandTimeout = 36000;
        try
        {
          sqlDataAdapter.Fill(dataTable);
        }
        catch (Exception ex)
        {
          zgcHelper.NoneException(ex);
        }
        finally
        {
                    sqlConnection.Close();
        }
       }
      return dataTable;
    }

    public static bool ExecProc(SqlCommand cmd, string strConnect, bool bDecript = true)
    {
      bool flag = false;
      using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
      {
        sqlConnection.Open();
        SqlTransaction sqlTransaction = sqlConnection.BeginTransaction(IsolationLevel.ReadCommitted, "Sample Transaction 0901");
        cmd.Transaction = sqlTransaction;
        cmd.CommandTimeout = 36000;
        try
        {
          cmd.Connection = sqlConnection;
          cmd.ExecuteNonQuery();
          sqlTransaction.Commit();
          flag = true;
        }
        catch (Exception ex1)
        {
          try
          {
            sqlTransaction.Rollback();
          }
          catch (SqlException ex2)
          {
            if (sqlTransaction.Connection != null)
              zgcHelper.NoneException((Exception) ex2);
          }
          flag = false;
          zgcHelper.NoneException(ex1);
        }
        finally
        {
             sqlConnection.Close();
        }
     }
      return flag;
    }

    public static DataSet ExecComnad(SqlCommand cmd, string strConnect, bool bDecript = true)
    {
            DataSet dataTable = new DataSet();
      using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
      {
        sqlConnection.Open();
        SqlTransaction sqlTransaction = sqlConnection.BeginTransaction(IsolationLevel.ReadCommitted, "Sample Transaction 0901");
        try
        {
          cmd.CommandTimeout = 36000;
          SqlDataAdapter sqlDataAdapter = new SqlDataAdapter()
          {
            SelectCommand = cmd
          };
          sqlDataAdapter.SelectCommand.Transaction = sqlTransaction;
          sqlDataAdapter.SelectCommand.Connection = sqlConnection;
          sqlDataAdapter.Fill(dataTable);
          sqlTransaction.Commit();
        }
        catch (Exception ex1)
        {
          try
          {
            sqlTransaction.Rollback();
          }
          catch (SqlException ex2)
          {
            if (sqlTransaction.Connection != null)
              zgcHelper.NoneException((Exception) ex2);
          }
          zgcHelper.NoneException(ex1);
        }
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
                finally
                {
                    sqlConnection.Close();
                }
            }
<<<<<<< HEAD
            return dataTable;
        }

        public static int ProcessCount(string filter, string table, string columns, string server)
        {
            int num = 0;
            StringBuilder stringBuilder = new StringBuilder();
            stringBuilder.Append(string.Format("SELECT COUNT(*) as tCount FROM ( select distinct top 100 percent {1} from {0}", (object)table, (object)"Id"));
            if (filter != null && filter.Length > 3)
                stringBuilder.Append(" WHERE (" + filter + ") ) a");
            else
                stringBuilder.Append(" ) a ");
            DataTable dataTable = zgcHelper.GetDataSet(stringBuilder.ToString(), server).Tables[0];
            if (dataTable.Rows.Count > 0)
                num = (int)dataTable.Rows[0]["tCount"];
            return num;
        }

        public static DataSet ProcessGetIndexData(
          int startIndex,
          int maximumRows,
          string sortExpressions,
          string filter,
          string columns,
          string tableorview,
          string server)
        {
            if (filter == null)
                filter = "";
            string str;
            if (sortExpressions == null || sortExpressions.Length < 1)
            {
                str = " Id desc";
            }
            else
            {
                str = sortExpressions;
                if (str.Trim().Length < 5)
                    str = " Id desc";
            }

            SqlCommand cmd = new SqlCommand();
            cmd.CommandText = "gcGOBAL_PROC_GetRowNum";
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@sort", SqlDbType.NVarChar);
            cmd.Parameters["@sort"].Value = (object)str;
            cmd.Parameters.Add("@table", SqlDbType.NVarChar);
            cmd.Parameters["@table"].Value = (object)tableorview;
            cmd.Parameters.Add("@column", SqlDbType.NVarChar);
            cmd.Parameters["@column"].Value = (object)columns;
            cmd.Parameters.Add("@filter", SqlDbType.NVarChar);
            cmd.Parameters["@filter"].Value = (object)filter;
            cmd.Parameters.Add("@SL", SqlDbType.Int);
            cmd.Parameters["@SL"].Value = (object)maximumRows;
            cmd.Parameters.Add("@index", SqlDbType.Int);
            cmd.Parameters["@index"].Value = (object)startIndex;
            return zgcHelper.ExecComnad(cmd, server);
        }

        public static bool ExecuteNonQuery(string sql, string strConnect, bool bDecript = true)
        {
            bool flag = false;
            using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
            {
                sqlConnection.Open();
                SqlCommand command = sqlConnection.CreateCommand();
                SqlTransaction sqlTransaction = sqlConnection.BeginTransaction(IsolationLevel.ReadCommitted, "SampleTransaction2");
                command.Connection = sqlConnection;
                command.Transaction = sqlTransaction;
                try
                {
                    command.CommandTimeout = 36000;
                    command.CommandText = sql;
                    command.ExecuteNonQuery();
                    sqlTransaction.Commit();
                    flag = true;
                }
                catch (Exception ex1)
                {
                    try
                    {
                        sqlTransaction.Rollback();
                    }
                    catch (SqlException ex2)
                    {
                        if (sqlTransaction.Connection != null)
                        {
                            flag = false;
                            zgcHelper.NoneException((Exception)ex2);
                        }
                    }
                    flag = false;
                    zgcHelper.NoneException(ex1);
                }
                finally
                {
                    sqlConnection.Close();
                }
            }
            return flag;
        }
=======
      return dataTable;
    }

    public static int ProcessCount(string filter, string table, string columns, string server)
    {
      int num = 0;
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.Append(string.Format("SELECT COUNT(*) as tCount FROM ( select distinct top 100 percent {1} from {0}", (object) table, (object) "Id"));
      if (filter != null && filter.Length > 3)
        stringBuilder.Append(" WHERE (" + filter + ") ) a");
      else
        stringBuilder.Append(" ) a ");
      DataTable dataTable = zgcHelper.GetDataSet(stringBuilder.ToString(), server).Tables[0];
      if (dataTable.Rows.Count > 0)
        num = (int) dataTable.Rows[0]["tCount"];
      return num;
    }

    public static DataSet ProcessGetIndexData(
      int startIndex,
      int maximumRows,
      string sortExpressions,
      string filter,
      string columns,
      string tableorview,
      string server)
    {
      if (filter == null)
        filter = "";
      string str;
      if (sortExpressions == null || sortExpressions.Length < 1)
      {
        str = " Id desc";
      }
      else
      {
        str = sortExpressions;
        if (str.Trim().Length < 5)
          str = " Id desc";
      }
    
      SqlCommand cmd = new SqlCommand();
      cmd.CommandText = "gcGOBAL_PROC_GetRowNum";
      cmd.CommandType = CommandType.StoredProcedure;
      cmd.Parameters.Add("@sort", SqlDbType.NVarChar);
      cmd.Parameters["@sort"].Value = (object) str;
      cmd.Parameters.Add("@table", SqlDbType.NVarChar);
      cmd.Parameters["@table"].Value = (object) tableorview;
      cmd.Parameters.Add("@column", SqlDbType.NVarChar);
      cmd.Parameters["@column"].Value = (object) columns;
      cmd.Parameters.Add("@filter", SqlDbType.NVarChar);
      cmd.Parameters["@filter"].Value = (object) filter;
      cmd.Parameters.Add("@SL", SqlDbType.Int);
      cmd.Parameters["@SL"].Value = (object) maximumRows;
      cmd.Parameters.Add("@index", SqlDbType.Int);
      cmd.Parameters["@index"].Value = (object) startIndex;
      return zgcHelper.ExecComnad(cmd, server);
    }

    public static bool ExecuteNonQuery(string sql, string strConnect, bool bDecript = true)
    {
      bool flag = false;
      using (SqlConnection sqlConnection = new SqlConnection(bDecript ? zgcHelper.Decrypt(strConnect) : strConnect))
      {
        sqlConnection.Open();
        SqlCommand command = sqlConnection.CreateCommand();
        SqlTransaction sqlTransaction = sqlConnection.BeginTransaction(IsolationLevel.ReadCommitted, "SampleTransaction2");
        command.Connection = sqlConnection;
        command.Transaction = sqlTransaction;
        try
        {
          command.CommandTimeout = 36000;
          command.CommandText = sql;
          command.ExecuteNonQuery();
          sqlTransaction.Commit();
          flag = true;
        }
        catch (Exception ex1)
        {
          try
          {
            sqlTransaction.Rollback();
          }
          catch (SqlException ex2)
          {
            if (sqlTransaction.Connection != null)
            {
              flag = false;
              zgcHelper.NoneException((Exception) ex2);
            }
          }
          flag = false;
          zgcHelper.NoneException(ex1);
        }
        finally
        {
            sqlConnection.Close();
        }
    }
      return flag;
    }
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea

        // Chuyển đổi tiền tệ và đọc tiền
        public static string MoneyConvertStr(double number)
        {
            string str1 = "";
            string strValue = number.ToString().Trim().TrimStart('0');
            if (strValue.Length < 1)
                return " Không đồng";
            while (strValue.Length > 0)
            {
                int i = int.Parse(strValue.Substring(0, 1));
                strValue = strValue.Remove(0, 1);
                int num;
                switch (i)
                {
                    case 0:
                        str1 = str1 + zgcHelper.Tail(strValue.Length + 1) + " lẻ ";
                        strValue = strValue.TrimStart('0');
                        goto label_15;
                    case 1:
                        num = strValue.Length % 3 == 1 ? 1 : 0;
                        break;
                    default:
                        num = 0;
                        break;
                }
                if (num != 0)
                {
                    if (zgcHelper.IsAllZero(strValue))
                    {
                        string str2 = (str1 + " mười " + zgcHelper.Tail(strValue.Length - 1) + " đồng").Trim();
                        return str2.Substring(0, 1).ToUpper() + str2.Substring(1, str2.Length - 1);
                    }
                    if (strValue.Substring(0, 1) == "5")
                    {
                        string str2 = (str1 + " mười lăm " + zgcHelper.Tail(strValue.Length - 1) + " đồng").Trim();
                        return str2.Substring(0, 1).ToUpper() + str2.Substring(1, str2.Length - 1);
                    }
                    str1 += " mười ";
                }
                else
                {
                    if (zgcHelper.IsAllZero(strValue))
                    {
                        string str2 = (str1 + zgcHelper.NumberToString(i, false) + zgcHelper.Tail(strValue.Length % 3) + zgcHelper.Tail(strValue.Length - strValue.Length % 3) + " đồng").Trim();
                        return str2.Substring(0, 1).ToUpper() + str2.Substring(1, str2.Length - 1);
                    }
                    str1 = strValue.Length % 3 != 0 ? str1 + zgcHelper.NumberToString(i, false) + zgcHelper.Tail(strValue.Length % 3) : str1 + zgcHelper.NumberToString(i, false) + zgcHelper.Tail(strValue.Length);
                }
<<<<<<< HEAD
                label_15:;
=======
            label_15:;
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
            }
            string str3 = (str1 + " đồng").Trim();
            return str3.Substring(0, 1).ToUpper() + str3.Substring(1, str3.Length - 1);
        }

        public static bool IsAllZero(string strValue) => double.Parse(strValue.Length < 1 ? "0" : strValue) == 0.0;

        public static string NumberToString(int i, bool isFirst)
        {
            switch (i)
            {
                case 0:
                    return "không ";
                case 1:
                    return "một ";
                case 2:
                    return "hai ";
                case 3:
                    return "ba ";
                case 4:
                    return "bốn ";
                case 5:
                    return "năm ";
                case 6:
                    return "sáu ";
                case 7:
                    return "bảy ";
                case 8:
                    return "tám ";
                case 9:
                    return "chín ";
                default:
                    return " ";
            }
        }

        public static string Tail(int lenght)
        {
            switch (lenght)
            {
                case 0:
                    return " ";
                case 1:
                    return "mươi ";
                case 2:
                    return "trăm ";
                case 3:
                    return "nghìn ";
                case 6:
                    return "triệu ";
                case 9:
                    return "tỷ ";
                case 12:
                    return "nghìn tỷ ";
                default:
                    return " ";
            }
        }
        //End Chuyển đổi tiền tệ

        //Support đọc ghi file
        public static void CreateFileNew(string path)
        {
            FileStream fileStream = (FileStream)null;
            if (File.Exists(path))
                return;
            using (fileStream = File.Create(path))
                return;
        }

        public static void CreateFile(string path)
        {
            FileStream fileStream = (FileStream)null;
            if (File.Exists(path))
                return;
            using (fileStream = File.Create(path))
                return;
        }

        public static string FileReadAll(StreamReader sw) => "" + sw.ReadToEnd();

        public static StreamReader OpenFileRead(string path) => File.Exists(path) ? new StreamReader(path, Encoding.Unicode) : (StreamReader)null;

        public static StreamWriter OpenFile(string path) => File.Exists(path) ? new StreamWriter(path, false, Encoding.Unicode) : (StreamWriter)null;

        public static StreamWriter OpenFileAppend(string path) => File.Exists(path) ? new StreamWriter(path, true, Encoding.Unicode) : (StreamWriter)null;

        //End Support đoc ghi file

        //gobal string for connection
        public static string getSqlStr()
        {
            byte[] str;
            HttpContext.Current.Session.TryGetValue("gs", out str);
            return str != null ? str.ToString() : "";
        }

        public static string getOleStr()
        {
            byte[] str;
            HttpContext.Current.Session.TryGetValue("gs", out str);
            return str != null ? str.ToString() : "";
        }

        public static string GetAdminSqlStr() => ConfigurationManager.AppSettings["sqlserveradmin"];

        public static string GetAdminOleStr() => ConfigurationManager.AppSettings["sqloleadmin"];

        //end string for connection

        //chuyển đổi tiếng việt sang Tiếng việt không dấu
        public const string Orgrinal = "áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ";
        public const string AfterConvert = "aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY";
        public const string pad = "`´?~";

        public static string VNConvertVNKODAU(string Vietnamese)
        {
            int index1;
            int index2;
            for (; (index1 = Vietnamese.IndexOfAny("áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ".ToCharArray())) != -1; Vietnamese = Vietnamese.Replace(Vietnamese[index1], "aaaaaaaaaaaaaaaaadeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyAAAAAAAAAAAAAAAAADEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYY"[index2]))
                index2 = "áàảãạâấầẩẫậăắằẳẵặđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠÂẤẦẨẪẬĂẮẰẲẴẶĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ".IndexOf(Vietnamese[index1]);
            for (int index3 = 0; index3 < Vietnamese.Length; ++index3)
            {
                if (Vietnamese[index3] >= '̀')
                {
                    Vietnamese = Vietnamese.Remove(index3, 1);
                    --index3;
                }
            }
            return Vietnamese;
        }
        //End chuyển  đổi tiếng việt
    }
}
