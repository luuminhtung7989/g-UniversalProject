// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.X
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

using zgcLibCore;


namespace zgcSpaceKernel.Core
{
    public class X
    {
        public C[] _fs;
        public Dictionary<string, object> _ip;
        private readonly List<C> _p = new List<C>();
        public readonly List<C> _c = new List<C>();
        public readonly List<C> _d = new List<C>();
        public string _f;
        public string _gb;
        private readonly zgcSpaceKernel.Core.R _r = new zgcSpaceKernel.Core.R()
        {
            _s = 1
        };
        public string _sql;
        private List<string> _sqlL = new List<string>();
        public string _cs = "";
        public readonly Random _rd = new Random();
        public static Dictionary<string, C> D;
        public static BaseD DE;
        public bool jSonFormat = false;
        public static string _strDbName = "";

        public C _a { get; set; }

        public void Init(string cs, Dictionary<string, C> dict, string dbName)
        {
            X.D = dict;
            this._cs = cs;
            X._strDbName = dbName;
        }

        public X(object input) => this._ip = (Dictionary<string, object>)input;

        public X()
        {
        }

        public X R()
        {
            if (this._r._e)
                return this;
            this._r._s = 1;
            this._r._d = (object)"";
            return this;
        }

        public void LR(int s, int e, object d)
        {
        }

        public bool CA() => !this._r._e && (this._ip.ContainsKey("a") && X.Lookup(this._ip["a"] as string) != null);

        private static C Lookup(string action) => DGobal.Lookup_aByKey(X._strDbName, action);

        public X A()
        {
            if (this._r._e)
                return this;
            if (this._ip.ContainsKey("jSonFormat"))
                this.jSonFormat = true;
            if (this._ip.ContainsKey("a"))
            {
                Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>)DGobal.Dict(X._strDbName)[1];
                this._a = X.Lookup(this._ip["a"] as string);
                if (this._a != null)
                {
                    this._fs = this._a.T[0][0] == 'G' ? dictionary[int.Parse(this._a.T[2])] : dictionary[int.Parse(this._a.T[1])];
                    return this;
                }
                this._r._s = 0;
                this._r._d = (object)_E.E10001.G();
                return this;
            }
            this._r._s = 0;
            this._r._d = (object)_E.E10002.G();
            return this;
        }

        public X Pc(string value)
        {
            if (this._r._e)
                return this;
            string str = this.L(this._fs, value, 0);
            if (str != "")
            {
                this._p.Add(new C()
                {
                    T = new string[2] { value, str }
                });
            }
            else
            {
                this._r._s = 0;
                this._r._d = (object)_E.E10005.G();
            }
            return this;
        }

        public X _CR()
        {
            if (this._r._e || (!this._ip.ContainsKey("c") || !(this._ip["c"] is Dictionary<string, object> dictionary)))
                return this;
            foreach (KeyValuePair<string, object> keyValuePair in dictionary)
            {
                if (!this.L(this._p, keyValuePair.Key, 0))
                {
                    this._r._s = 0;
                    this._r._d = (object)_E.E10006.G();
                    break;
                }
            }
            return this;
        }

        public X _CF()
        {
            if (this._r._e)
                return this;
            if (this._ip.ContainsKey("d") && this._ip["d"] is Dictionary<string, object> dictionary)
            {
                foreach (KeyValuePair<string, object> keyValuePair in dictionary)
                {
                    if (this.L(this._fs, keyValuePair.Key, 0) == "")
                    {
                        this._r._s = 0;
                        this._r._d = (object)_E.E10007.G();
                    }
                }
                if (!this.V((object)dictionary))
                {
                    this._r._s = 0;
                    this._r._d = (object)_E.E10010.G();
                }
            }
            this._gb = "";
            if (this._ip.ContainsKey("_gb"))
                this._gb = this._ip["_gb"].ToString();
            this._f = "*";
            if (this._ip.ContainsKey("_f"))
                this._f = this._ip["_f"].ToString();
            return this;
        }

        public X _CG()
        {
            if (!this._ip.ContainsKey("d") || !((Dictionary<string, object>)this._ip["d"]).ContainsKey("count"))
            {
                this._r._s = 0;
                this._r._d = (object)_E.E10006.G();
            }
            return this;
        }

        public string L(C[] f, string k, int j)
        {
            foreach (C c in f)
            {
                if (c.T[7] == k)
                    return c.T[j];
            }
            return "";
        }

        public string LF(List<C> f, string k, int j)
        {
            foreach (C c in f)
            {
                if (c.T[7] == k)
                    return c.T[j];
            }
            return "";
        }

        public bool L(List<C> f, string k, int j)
        {
            foreach (C c in f)
            {
                if (c.T[j] == k)
                    return true;
            }
            return false;
        }

        public string[] LI(List<C> f)
        {
            string[] strArray = new string[2] { "", "" };
            foreach (C c in f)
            {
                if (!c.T[0].Equals("Id"))
                {
                    if (strArray[0] == "")
                    {
                        // ISSUE: explicit reference operation
                        strArray[0] += c.T[0];
                    }
                    else
                    {
                        ref string local = ref strArray[0];
                        local = local + "," + c.T[0];
                    }
                    string str = c.T[2].Trim().IndexOf("$x") != -1 ? c.T[2].Replace("$x", "") : (c.T[1][0] == '0' || c.T[1][0] == '1' || c.T[1][0] == '2' ? (c.T[2] == null || c.T[2].Length < 1 ? "null" : c.T[2]) : "N'" + c.T[2] + "'");
                    if (c.T[2].Trim().IndexOf("$x") == -1 && (c.T[1][0] == '9' || c.T[1][0] == '5'))
                        str = c.T[2] == null || c.T[2].Length < 1 ? "null" : "'" + c.T[2] + "'";
                    if (str.Length > 0)
                    {
                        if (strArray[1] == "")
                        {
                            // ISSUE: explicit reference operation
                            strArray[1] += str;
                        }
                        else
                        {
                            ref string local = ref strArray[1];
                            local = local + "," + str;
                        }
                    }
                }
            }
            return strArray;
        }

        public string LW(List<C> f)
        {
            string str1 = "";

            for (int index = 0; index < f.Count; ++index)
            {
                C c = f[index];
                string op = " AND ";
                string T = c.T[2].Trim();
                int ix = T.IndexOf("$x");
                int ixop = T.IndexOf("$op");
                c.T[2] = c.T[2].Replace("$x", c.T[0]);
                //----------------------------------------
                // update Thang 8/2021
                String format = "({0}={1})";
                string str2 = "";
                if (ix < 0)
                    str2 = String.Format(format, c.T[0], c.T[2]);
                else
                    str2 = String.Format("({0})", c.T[2]);

                if (str1 == "")
                    str1 = str1 + " WHERE " + str2;
                else
                {
                    if (ixop >= 0)
                    {
                        str2.Replace("$op", "");
                        str1 = str1 + " " + str2; // Cau truc: $op OR $x=1 , co the su dung dau ngoac gom nhom cho menh de truoc a:"($x=3"; b:"$op OR $x=3)"
                    }
                    else
                        str1 = str1 + " " + op + " " + str2;
                }
            }
            return str1;
        }

        private void FindOp(string str, out string T, out string op)
        {

            T = str;
            op = "AND";
            //------------fix bug 7/2021
            if (str.Length < 4)
                return;

            string[] strArray = str.Trim().ToUpper().Split(' ');
            if ((strArray != null & strArray.Length < 2))
                return;
            op = strArray[strArray.Length - 1];
            T = str.Substring(0, str.Length - op.Length - 1);
        }

        public string LU(List<C> f)
        {
            string str1 = "";
            foreach (C c in f)
            {
                if (!c.T[0].Equals("Id"))
                {
                    string str2 = c.T[1][0] == '0' || c.T[1][0] == '1' || c.T[1][0] == '2' ? (c.T[2] == null || c.T[2].Length < 1 ? "null" : c.T[2]) : "N'" + c.T[2] + "'";
                    if (c.T[1][0] == '9' || c.T[1][0] == '5')
                        str2 = c.T[2] == null || c.T[2].Length < 1 ? "null" : "'" + c.T[2] + "'";
                    if (c.T[2].Trim().IndexOf("$x") != -1)
                        str2 = c.T[2].Replace("$x", c.T[0]);
                    str1 = !(str1 == "") ? str1 + (str2.Length > 0 ? "," + c.T[0] + "=" + str2 : "") : str1 + (str2.Length > 0 ? c.T[0] + "=" + str2 : "");
                }
            }
            return str1;
        }

        public X L()
        {
            if (this._r._e)
                return this;
            Dictionary<int, C[]> dictionary1 = (Dictionary<int, C[]>)DGobal.Dict(X._strDbName)[1];
            Dictionary<string, object> dictionary2 = this._ip.ContainsKey("c") ? this._ip["c"] as Dictionary<string, object> : (Dictionary<string, object>)null;
            Dictionary<string, object> dictionary3 = this._ip.ContainsKey("d") ? this._ip["d"] as Dictionary<string, object> : (Dictionary<string, object>)null;
            C[] f = this._a.T[0][0] == 'G' ? dictionary1[int.Parse(this._a.T[2])] : dictionary1[int.Parse(this._a.T[1])];
            if (dictionary2 != null)
            {
                foreach (KeyValuePair<string, object> keyValuePair in dictionary2)
                    this._c.Add(new C()
                    {
                        T = new string[3]
                      {
              keyValuePair.Key,
              this.L(f, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
                      }
                    });
            }
            if (dictionary3 != null)
            {
                foreach (KeyValuePair<string, object> keyValuePair in dictionary3)
                    this._d.Add(new C()
                    {
                        T = new string[3]
                      {
              keyValuePair.Key,
              this.L(f, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
                      }
                    });
            }
            return this;
        }

        public bool V(object data) => true;

        public zgcSpaceKernel.Core.R G() => this._r;

        public X EX()
        {
            if (this._r._e)
                return this;
            switch (this._a.T[0][0])
            {
                case 'D':
                case 'U':
                    this.IoU(this._sql);
                    break;
                case 'E':
                    if (this._ip.ContainsKey("P"))
                    {
                        this.GD_P((string)this._ip["P"]);
                        break;
                    }
                    break;
                case 'G':
                    this.GD(this._sql);
                    break;
                case 'I':
                    this.Io(this._sql);
                    break;
                case 'P':
                    this.GDP();
                    break;
            }
            return this;
        }

        public X EXO(string[] sql, bool al)
        {
            if (this._r._e)
                return this;
            if (al)
            {
                switch (this._a.T[0][0])
                {
                    case 'G':
                        this.GD(sql);
                        break;
                    case 'I':
                        this.IO(sql);
                        break;
                    case 'S':
                        this.GDS(sql[0], this._a.T[4]);
                        break;
                    case 'U':
                        this.UO(sql);
                        break;
                }
            }
            else
                this.IoUL(sql);
            return this;
        }

        public X S()
        {
            if (this._r._e)
                return this;
            string v = this._a.T[0][0] == 'G' ? this._a.T[4] : this._a.T[3];
            if (this._ip.ContainsKey("exV"))
                v = string.Concat(this._ip["exV"]);
            switch (this._a.T[0][0])
            {
                case 'D':
                    this.R(v, this._c);
                    break;
                case 'G':
                    this.G(v);
                    break;
                case 'I':
                    this.I(v, this._d);
                    break;
                case 'U':
                    this.U(v, this._d, this._c);
                    break;
            }
            return this;
        }

        public void GD(string sql)
        {
            this.SetupData(zgcHelper.GetDataSet(sql, this._cs, false));
        }

        public void GD(string[] sql)
        {
            string cmdText = "";
            int index = 0;
            if ((uint)sql.Length > 0U)
            {
                string str = "";
                for (; index < sql.Length; ++index)
                    str += sql[index];
                cmdText = str;
            }
            this.SetupData(zgcHelper.GetDataSet(cmdText, this._cs, false));

        }

        public void GDP()
        {
            string str1 = this._ip.ContainsKey("se") ? string.Concat(this._ip["se"]) : " Id desc";
            string str2 = this._ip.ContainsKey("cl") ? string.Concat(this._ip["cl"]) : "*";
            string str3 = this._ip.ContainsKey("f") ? string.Concat(this._ip["f"]) : "";
            int num1 = this._ip.ContainsKey("mr") ? (int)this._ip["mr"] : 25;
            int num2 = this._ip.ContainsKey("si") ? (int)this._ip["si"] : 1;
            string str4 = "";
            if (this._a != null)
                str4 = this._a.T[0][0] == 'P' ? this._a.T[4] : this._a.T[3];
            if (this._ip.ContainsKey("exV"))
                str4 = string.Concat(this._ip["exV"]);
            SqlCommand sqlCommand = new SqlCommand();
            sqlCommand.CommandText = "gcz_GetRowNum";
            sqlCommand.CommandType = CommandType.StoredProcedure;
            SqlCommand cmd = sqlCommand;
            cmd.Parameters.Add("@sort", SqlDbType.NVarChar);
            cmd.Parameters["@sort"].Value = (object)str1;
            cmd.Parameters.Add("@table", SqlDbType.NVarChar);
            cmd.Parameters["@table"].Value = (object)str4;
            cmd.Parameters.Add("@column", SqlDbType.NVarChar);
            cmd.Parameters["@column"].Value = (object)str2;
            cmd.Parameters.Add("@filter", SqlDbType.NVarChar);
            cmd.Parameters["@filter"].Value = (object)str3;
            cmd.Parameters.Add("@SL", SqlDbType.Int);
            cmd.Parameters["@SL"].Value = (object)num1;
            cmd.Parameters.Add("@index", SqlDbType.Int);
            cmd.Parameters["@index"].Value = (object)num2;
            SqlParameter sqlParameter1 = new SqlParameter("@p_Count_out", SqlDbType.Int);
            sqlParameter1.Direction = ParameterDirection.Output;
            SqlParameter sqlParameter2 = sqlParameter1;
            cmd.Parameters.Add(sqlParameter2);
            DataSet dt = zgcHelper.ExecComnad(cmd, this._cs, false);
            if (dt == null)
                return;
            int num3 = 0;
            if (sqlParameter2 != null && sqlParameter2.Value != DBNull.Value)
                num3 = (int)sqlParameter2.Value;
            this.SetupData(dt);
            if (dt != null)
                this._r._t = num3;
        }

        public void GDS(string sql, string p)
        {
            SqlCommand sqlCommand = new SqlCommand();
            sqlCommand.CommandText = p;
            sqlCommand.CommandType = CommandType.StoredProcedure;
            SqlCommand cmd = sqlCommand;
            cmd.Parameters.Add("@sql", SqlDbType.NVarChar);
            cmd.Parameters["@sql"].Value = (object)sql;
            SqlParameter sqlParameter1 = new SqlParameter("@p_Count_out", SqlDbType.Int);
            sqlParameter1.Direction = ParameterDirection.Output;
            SqlParameter sqlParameter2 = sqlParameter1;
            cmd.Parameters.Add(sqlParameter2);
            DataSet dt = zgcHelper.ExecComnad(cmd, this._cs, false);
            int num = 0;
            if (sqlParameter2 != null && sqlParameter2.Value != DBNull.Value)
                num = (int)sqlParameter2.Value;
            this.SetupData(dt);
            if (dt == null)
                return;
            this._r._t = num;
        }

        public void GD_P(string p)
        {
            SqlCommand sqlCommand = new SqlCommand();
            sqlCommand.CommandText = p;
            sqlCommand.CommandType = CommandType.StoredProcedure;
            SqlCommand cmd = sqlCommand;
            Dictionary<string, object> dictionary = this._ip.ContainsKey("c") ? this._ip["c"] as Dictionary<string, object> : (Dictionary<string, object>)null;
            if (dictionary != null)
            {
                foreach (KeyValuePair<string, object> keyValuePair in dictionary)
                {
                    cmd.Parameters.Add("@" + keyValuePair.Key, X.CSToSql(keyValuePair.Value.GetType().ToString()));
                    cmd.Parameters["@" + keyValuePair.Key].Value = keyValuePair.Value;
                }
            }
            this.SetupData(zgcHelper.ExecComnad(cmd, this._cs, false));
        }

        public void IoU(string sql)
        {
            this._r._d = (object)-1;
            using (SqlConnection sqlConnection = new SqlConnection(this._cs))
            {
                sqlConnection.Open();
                SqlCommand command = sqlConnection.CreateCommand();
                command.CommandTimeout = 36000;
                try
                {
                    command.CommandText = sql;
                    object[] obj = new object[1];
                    obj[0] = command.ExecuteScalar();
                    this._r._d = obj;
                }
                catch (Exception ex)
                {
                    this._r._s = 0;
                    this._r._d = (object)ex.Message;
                }
                finally
                {
                    command.Dispose();
                    sqlConnection.Close();
                }
            }
        }

        public void IoUL(string[] sql)
        {
            this._r._d = (object)-1;

            int index1 = 0;
            if ((uint)sql.Length > 0U)
            {
                // nhiều cau quere quá thì thực hiện 50 câu flush 1 lần
                while (index1 < sql.Length)
                {
                    string str = "";
                    for (int index2 = index1; index1 < index2 + 50 && index1 < sql.Length; ++index1)
                        str += sql[index1];
                    if (str.Length > 0)
                    {
                        zgcHelper.ExecuteNonQuery(str, this._cs, false);
                    }
                }
            }
            this._r._d = (object)1;

        }

        public void Io(string sql)
        {
            this._r._d = (object)-1;
            using (SqlConnection sqlConnection = new SqlConnection(this._cs))
            {
                sqlConnection.Open();
                SqlCommand command = sqlConnection.CreateCommand();
                command.CommandTimeout = 36000;
                try
                {
                    command.CommandText = sql;
                    object[] obj = new object[1];
                    obj[0] = command.ExecuteScalar();
                    this._r._d = obj;
                }
                catch (Exception ex)
                {
                    this._r._s = 0;
                    this._r._d = (object)(ex.Message + ":" + sql);
                }
                finally
                {
                    command.Dispose();
                    sqlConnection.Close();
                }
            }
        }

        public void IO(string[] sql)
        {
            SqlConnection sqlConnection = new SqlConnection(this._cs);
            sqlConnection.Open();
            List<int> intList = new List<int>();
            try
            {
                foreach (string str in sql)
                {
                    SqlCommand command = sqlConnection.CreateCommand();
                    command.CommandTimeout = 36000;
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "gcGOBAL_PROC_RunSQL";
                    command.Parameters.Add("@_sql", SqlDbType.NVarChar);
                    command.Parameters["@_sql"].Value = (object)str;
                    SqlParameter sqlParameter1 = new SqlParameter("@p_Id_out", SqlDbType.Int);
                    sqlParameter1.Direction = ParameterDirection.Output;
                    SqlParameter sqlParameter2 = sqlParameter1;
                    command.Parameters.Add(sqlParameter2);
                    command.ExecuteNonQuery();
                    if (!string.IsNullOrEmpty(string.Concat(sqlParameter2.Value)) && !intList.Contains((int)sqlParameter2.Value))
                    {
                        intList.Add((int)sqlParameter2.Value);
                    }
                    else
                    {
                        sqlConnection.Close();
                        this._r._s = 0;
                        this._r._d = (object)_E.E10009.G();
                        return;
                    }
                }
                this._r._d = (object)intList;
            }
            catch (Exception ex)
            {
                this._r._s = 0;
                this._r._d = (object)(ex.Message + ":" + sql.ToString());
            }
            finally
            {
                sqlConnection.Close();
            }
        }

        public void UO(string[] sql)
        {
            SqlConnection sqlConnection = new SqlConnection(this._cs);
            sqlConnection.Open();
            List<int> intList = new List<int>();
            try
            {
                foreach (string str in sql)
                {
                    SqlCommand command = sqlConnection.CreateCommand();
                    command.CommandTimeout = 36000;
                    command.CommandType = CommandType.StoredProcedure;
                    command.CommandText = "gcGOBAL_PROC_RunSQL";
                    command.Parameters.Add("@_sql", SqlDbType.NVarChar);
                    command.Parameters["@_sql"].Value = (object)str;
                    int num = command.ExecuteNonQuery();
                    if (num > 0)
                    {
                        intList.Add(num);
                    }
                    else
                    {
                        sqlConnection.Close();
                        this._r._s = 0;
                        this._r._d = (object)_E.E10009.G();
                        return;
                    }
                }
                this._r._d = (object)intList;
            }
            catch (Exception ex)
            {
                this._r._s = 0;
                this._r._d = (object)(ex.Message + ":" + this._sql);
            }
            finally
            {
                sqlConnection.Close();
            }
        }

        public void I(string v, List<C> d)
        {
            string[] strArray = this.LI(d);
            this._sql = string.Format("INSERT {0} ({1}) VALUES ({2})", (object)v, (object)strArray[0], (object)strArray[1]);
            if (this._sql.Contains(";"))
            {
                this._r._s = 0;
                this._r._d = (object)(_E.E10009.G() + ":" + this._sql);
            }
            else
            {
                this._sql += "; select SCOPE_IDENTITY() as Id";
                this._sqlL.Add(this._sql);
            }
        }

        public void U(string v, List<C> d, List<C> c)
        {
            this._sql = string.Format("UPDATE {0} SET {1} {2}", (object)v, (object)this.LU(d), (object)this.LW(c));
            if (this._sql.Contains(";") || !this._sql.Contains("WHERE"))
            {
                this._r._s = 0;
                this._r._d = (object)(_E.E10009.G() + ":" + this._sql);
            }
            else
            {
                this._sql += "; select @@ROWCOUNT";
                this._sqlL.Add(this._sql);
            }
        }

        public void R(string v, List<C> c)
        {
            this._sql = string.Format("DELETE FROM {0} {1}", (object)v, (object)this.LW(c));
            if (this._sql.Contains(";") || !this._sql.Contains("WHERE"))
            {
                this._r._s = 0;
                this._r._d = (object)(_E.E10009.G() + ":" + this._sql);
            }
            else
            {
                this._sql += "; select @@ROWCOUNT";
                this._sqlL.Add(this._sql);
            }
        }

        public void G(string v)
        {
            this._sql = string.Format("SELECT {0} FROM {1} {2} {3}", (object)this._f, (object)v, (object)this.LW(this._c), (object)this._gb);
            if (this._sql.Contains(";"))
            {
                this._r._s = 0;
                this._r._d = (object)(_E.E10009.G() + ":" + this._sql);
            }
            else
                this._sqlL.Add(this._sql);
        }



        public static SqlDbType CSToSql(string type)
        {
            switch (type)
            {
                case "System.Boolean":
                    return SqlDbType.Bit;
                case "System.Byte":
                    return SqlDbType.TinyInt;
                case "System.Byte[]":
                    return SqlDbType.Binary;
                case "System.DateTime":
                    return SqlDbType.DateTime;
                case "System.Decimal":
                    return SqlDbType.Decimal;
                case "System.Double":
                    return SqlDbType.Float;
                case "System.Guid":
                    return SqlDbType.UniqueIdentifier;
                case "System.Int16":
                    return SqlDbType.SmallInt;
                case "System.Int32":
                    return SqlDbType.Int;
                case "System.Int64":
                    return SqlDbType.BigInt;
                case "System.Object":
                    return SqlDbType.VarBinary;
                case "System.Single":
                    return SqlDbType.Real;
                default:
                    return SqlDbType.NVarChar;
            }
        }

        public void SetupData(DataSet dts)
        {
            if (dts == null)
            {
                this._r._d = (object)null;
                this._r._t = 0;
            }
            else
            {
                if (dts.Tables.Count == 0)
                    return;
                DataTable dt = dts.Tables[0];
                if (this.jSonFormat)
                {
                    //JavaScriptSerializer scriptSerializer = new JavaScriptSerializer();
                    List<Dictionary<string, object>> dictionaryList = new List<Dictionary<string, object>>();
                    foreach (DataRow row in (InternalDataCollectionBase)dt.Rows)
                    {
                        Dictionary<string, object> dictionary = new Dictionary<string, object>();
                        foreach (DataColumn column in (InternalDataCollectionBase)dt.Columns)
                        {
                            if (column.ColumnName.ToUpper().Contains("PASSWORD"))
                                dictionary.Add(column.ColumnName, (object)"******");
                            else
                                dictionary.Add(column.ColumnName, row[column].GetType().Name == "DBNull" ? (object)null : row[column]);
                        }
                        dictionaryList.Add(dictionary);
                    }
                    this._r._d = (object)dictionaryList;
                }
                else
                {
                    //find index password
                    var indexpassword = -1;
                    for (int u = 0; u < dt.Columns.Count; u++)
                    {
                        var col = dt.Columns[u];
                        if (col.ColumnName.ToUpper().Contains("PASSWORD"))
                            indexpassword = u;
                    }
                    //end
                    List<object[]> objArrayList = new List<object[]>();
                    for (int index1 = 0; index1 < dt.Rows.Count; ++index1)
                    {
                        object[] itemArray = dt.Rows[index1].ItemArray;
                        if (indexpassword > 0)
                            itemArray[indexpassword] = (object)"******";
                        for (int index2 = 0; index2 < itemArray.Length; ++index2)
                        {
                            if (itemArray[index2].GetType().Name == "DBNull")
                                itemArray[index2] = (object)null;
                        }
                        objArrayList.Add(itemArray);
                    }
                    this._r._d = (object)objArrayList;
                }
                this._r._t = dt.Rows.Count;
            }
        }
    }
}
