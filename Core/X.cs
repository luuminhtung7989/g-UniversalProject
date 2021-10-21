using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace WebApplication.Core
{
    public class X
    {
        public C _a { get; set; }
        public C[] _fs;                                        //List field cua table hoac view ma action do dung
        public Dictionary<string, object> _ip;        //Input cliet truyen vao
        private readonly List<C> _p = new List<C>();            //List field _c service push _c: fieldName; value: type
        public readonly List<C> _c = new List<C>();            //List field _c service push _c key: fieldName; value: value, type
        public readonly List<C> _d = new List<C>();            //List field data client truyen vao key: fieldName; value: value, type
        private string _f;                                      //Chuoi field client truyen vao
        private readonly R _r = new R { _s = 1 };               //Request gui ve cho client
        public string _sql;                                    //Lenh sql tim duoc
        private List<string> _sqlL = new List<string>();                                    //Lenh sql tim duoc
        public static string _cs = "";                          //Conection string
        public readonly Random _rd = new Random();
        public static void Init(string cs)
        {
            _cs = cs;
        }
        public X(object input)
        {
            _ip = (Dictionary<string, object>)input;
        }
        public X R()
        {
            if (_r._e) return this; _r._s = 1; _r._d = ""; return this;
        }
        public void LR(int s, int e, object d)
        {        // Lookup random
            if (true) { }
        }
        public bool CA()
        {  // Kiem tra va lay action
            if (_r._e) return false;
            if (_ip.ContainsKey("a"))
            {
                var a = _ip["a"] as string;
                if (a != null && D._a.ContainsKey(a)) return true;
            }
            return false;
        }
        public X A()
        {  // Kiem tra va lay action
            if (_r._e) return this;
            if (_ip.ContainsKey("a"))
            {
                var a = _ip["a"] as string;
                if (a != null && D._a.ContainsKey(a))
                {
                    _a = D._a[a];
                    _fs = _a.T[0][0] == 'G' ? D._fd[int.Parse(_a.T[2])] : D._fd[int.Parse(_a.T[1])];
                    return this;
                }
                _r._s = 0; _r._d = _E.E10001.G(); return this;
            }
            _r._s = 0; _r._d = _E.E10002.G(); return this;
        }
        public X Pc(string value)
        {       // Push Field
            if (_r._e) return this;
            var fi = L(_fs, value, 0);
            if (fi != "") _p.Add(new C { T = new[] { value, fi } });
            else { _r._s = 0; _r._d = _E.E10005.G(); }
            return this;
        }
        public X _CR()
        {       //Check _c
            if (_r._e) return this;
            if (_ip.ContainsKey("c"))
            {
                var c = _ip["c"] as Dictionary<string, object>;
                if (c != null)
                    foreach (var i in c)
                        if (!L(_p, i.Key, 0))
                        {     //Kiem tra neu field _c truyen vao khong dung giong voi tap field _c cua action thi bao loi
                            _r._s = 0; _r._d = _E.E10006.G(); break;
                        }
            }
            return this;
        }
        public X _CF()
        {        //Kiem tra field trong data vaf field
            if (_r._e) return this;
            if (_ip.ContainsKey("d"))
            {       //Check _d
                var da = _ip["d"] as Dictionary<string, object>;
                if (da != null)
                {
                    foreach (var d in da)
                        if (L(_fs, d.Key, 0) == "") { _r._s = 0; _r._d = _E.E10007.G(); }
                    if (!V(da)) { _r._s = 0; _r._d = _E.E10010.G(); }     //Validate
                }
            }
            if (!_ip.ContainsKey("_f") || _ip["_f"] + "" == "") _f = "*";
            else _f = _ip["_f"].ToString();          //Note: Trong service thì nên split Field để kiểm tra.
            return this;
        }
        public X _CG()
        {
            if (!_ip.ContainsKey("d") || !((Dictionary<string, object>)_ip["d"]).ContainsKey("count"))
            {
                _r._s = 0; _r._d = _E.E10006.G();
            }
            return this;
        }
        public string L(C[] f, string k, int j)
        {
            // Lookup Field: param key
            foreach (var t in f)
                if (t.T[7] == k) return t.T[j];
            return "";
        }

        public string LF(List<C> f, string k, int j)
        {
            foreach (var t in f)
                if (t.T[7] == k) return t.T[j];
            return "";
        }

        public bool L(List<C> f, string k, int j)
        {
            foreach (var t in f)
                if (t.T[j] == k) return true;
            return false;
        }

        public string[] LI(List<C> f)
        {
            string[] r = { "", "" };
            foreach (var t1 in f)
                if (!t1.T[0].Equals("Id"))
                {////int: 1; float: 2; string: 3; date: 4; bool: 5, bit:9
                    if (r[0] == "") r[0] += t1.T[0]; else r[0] += "," + t1.T[0];
                    var t = (t1.T[2].Trim().IndexOf("$x") != -1) ? t1.T[2].Replace("$x", "") : ((t1.T[1][0] == '0' || t1.T[1][0] == '1' || t1.T[1][0] == '2') ? ((t1.T[2] == null || t1.T[2].Length < 1) ? "null" : t1.T[2]) : ("N'" + t1.T[2] + "'"));
                    if (t1.T[2].Trim().IndexOf("$x") == -1 && (t1.T[1][0] == '9' || t1.T[1][0] == '5'))//bit && date
                        t = (t1.T[2] == null || t1.T[2].Length < 1) ? "null" : "'" + t1.T[2] + "'";
                    if (t.Length > 0) if (r[1] == "") r[1] += t; else r[1] += "," + t;
                }
            return r;
        }
        public string LW(List<C> f)
        {       // loopup for update sql
            var r = "";
            foreach (var t in f)
            {
                string x;
                if (t.T[2].Trim().IndexOf("$x") != -1) x = t.T[2].Replace("$x", t.T[0]);
                else x = t.T[0] + "=" + ((t.T[1][0] == '0' || t.T[1][0] == '1') ? t.T[2] : ("N'" + t.T[2] + "'"));
                if (r == "") r += " WHERE " + x; else r += " AND " + x;
            }
            return r;
        }
        public string LU(List<C> f)
        {       // loopup for update sql
            var r = "";
            foreach (var t1 in f)
                if (!t1.T[0].Equals("Id"))
                {////int: 1; float: 2; string: 3; date: 4; bool: 5, bit:9
                    var t = (t1.T[1][0] == '0' || t1.T[1][0] == '1' || t1.T[1][0] == '2') ? ((t1.T[2] == null || t1.T[2].Length < 1) ? "null" : t1.T[2]) : ("N'" + t1.T[2] + "'");
                    if (t1.T[1][0] == '9' || t1.T[1][0] == '5')//bit && date
                        t = (t1.T[2] == null || t1.T[2].Length < 1) ? "null" : "'" + t1.T[2] + "'";
                    if (t1.T[2].Trim().IndexOf("$x") != -1)// trường hợp truyền biểu thức
                        t = t1.T[2].Replace("$x", t1.T[0]);
                    if (r == "") r += (t.Length > 0) ? (t1.T[0] + "=" + t) : ""; else r += (t.Length > 0) ? ("," + t1.T[0] + "=" + t) : "";
                }
            return r;
        }
        public X L()
        {
            if (_r._e) return this;
            var cd = _ip.ContainsKey("c") ? _ip["c"] as Dictionary<string, object> : null;
            var da = _ip.ContainsKey("d") ? _ip["d"] as Dictionary<string, object> : null;
            var lfi = _a.T[0][0] == 'G' ? D._fd[int.Parse(_a.T[2])] : D._fd[int.Parse(_a.T[1])];
            if (cd != null) foreach (var c in cd)
                    _c.Add(new C { T = new[] { c.Key, L(lfi, c.Key, 0), c.Value + "" } });
            if (da != null) foreach (var dv in da)
                    _d.Add(new C { T = new[] { dv.Key, L(lfi, dv.Key, 0), dv.Value + "" } });
            return this;
        }
        public bool V(object data)
        {
            return true;
        }
        public R G()
        {
            return _r;
        }
        public X EX()
        {
            if (_r._e) return this;
            switch (_a.T[0][0])
            {
                case 'G': GD(_sql); break;
                case 'P': GDP(); break;
                case 'I': Io(_sql); break;
                case 'U':
                case 'D': IoU(_sql); break;
            }
            return this;
        }
        public X EXO(string[] sql, bool al)
        {
            if (_r._e) return this;
            if (al)
                switch (_a.T[0][0])
                {
                    case 'G': GD(sql); break;
                    case 'I': IO(sql); break;
                    case 'U': UO(sql); break;
                    //case 'D': U(sql); break;
                    case 'S': GDS(sql[0], _a.T[4]); break;
                }
            else { IoUL(sql); }
            return this;
        }
        public X S()
        {
            if (_r._e) return this;
            var v = _a.T[0][0] == 'G' ? _a.T[4] : _a.T[3];
            if (_ip.ContainsKey("exV") && string.IsNullOrEmpty(_ip["exV"] + ""))
                v = _ip["exV"] + "";
            switch (_a.T[0][0])
            {
                case 'G': G(v); break;
                //case 'P': GDP(); break;
                case 'I': I(v, _d); break;
                case 'U': U(v, _d, _c); break;
                case 'D': R(v, _c); break;
            }
            return this;
        }
        //void GD(string sql)
        //{       //Get data
        //    var result = new DataTable();
        //    using (var mC = new SqlConnection(_cs))
        //    {
        //        mC.Open();
        //        var mT = mC.BeginTransaction();      // Start a local transaction.
        //        var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //        mD.CommandTimeout = 36000;
        //        mD.Transaction = mT;
        //        var adap = new SqlDataAdapter(mD);
        //        try
        //        {
        //            mD.CommandText = sql;
        //            adap.Fill(result);
        //            var list = new List<object[]>();
        //            for (var m = 0; m < result.Rows.Count; m++) list.Add(result.Rows[m].ItemArray);
        //            _r._d = list; _r._t = result.Rows.Count;
        //            mT.Commit();
        //        }
        //        catch (Exception ex) { mT.Rollback(); _r._s = 0; _r._d = ex.Message; }
        //        finally { mD.Dispose(); mC.Close(); }
        //    }
        //}
        void GD(string sql)
        {       //Get data
            var result = new DataTable();
            using (var mC = new SqlConnection(_cs))
            {
                mC.Open();
                //var mT = mC.BeginTransaction();      // Start a local transaction.
                var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                //mD.Transaction = mT;
                var adap = new SqlDataAdapter(mD);
                try
                {
                    mD.CommandText = sql;
                    adap.Fill(result);
                    var list = new List<object[]>();
                    for (var m = 0; m < result.Rows.Count; m++) list.Add(result.Rows[m].ItemArray);
                    _r._d = list; _r._t = result.Rows.Count;
                }
                catch (Exception ex) { _r._s = 0; _r._d = ex.Message; }
                finally { mD.Dispose(); mC.Close(); }
            }
        }
        //void GD(string[] sql)
        //{       //Get data
        //    var result = new DataTable();
        //    using (var mC = new SqlConnection(_cs))
        //    {
        //        mC.Open();
        //        var mT = mC.BeginTransaction();      // Start a local transaction.
        //        var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //        mD.CommandTimeout = 36000;
        //        mD.Transaction = mT;
        //        var adap = new SqlDataAdapter(mD);
        //        try
        //        {
        //            var curCount = 0;
        //            if (sql.Length > 0)
        //            {
        //                var ss = "";
        //                while (curCount < sql.Length)
        //                {
        //                    ss += sql[curCount]; curCount++;
        //                }
        //                mD.CommandText = ss;
        //            }
        //            adap.Fill(result);
        //            var list = new List<object[]>();
        //            for (var m = 0; m < result.Rows.Count; m++) list.Add(result.Rows[m].ItemArray);
        //            _r._d = list; _r._t = result.Rows.Count;
        //            mT.Commit();
        //        }
        //        catch (Exception ex) { mT.Rollback(); _r._s = 0; _r._d = ex.Message; }
        //        finally { mD.Dispose(); mC.Close(); }
        //    }
        //}
        void GD(string[] sql)
        {       //Get data
            var result = new DataTable();
            using (var mC = new SqlConnection(_cs))
            {
                mC.Open();
                var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                var adap = new SqlDataAdapter(mD);
                try
                {
                    var curCount = 0;
                    if (sql.Length > 0)
                    {
                        var ss = "";
                        while (curCount < sql.Length)
                        {
                            ss += sql[curCount]; curCount++;
                        }
                        mD.CommandText = ss;
                    }
                    adap.Fill(result);
                    var list = new List<object[]>();
                    for (var m = 0; m < result.Rows.Count; m++) list.Add(result.Rows[m].ItemArray);
                    _r._d = list; _r._t = result.Rows.Count;
                }
                catch (Exception ex) { _r._s = 0; _r._d = ex.Message; }
                finally { mD.Dispose(); mC.Close(); }
            }
        }
        public void GDP()
        {
            var se = _ip.ContainsKey("se") ? _ip["se"] + "" : " Id desc";
            var cl = _ip.ContainsKey("cl") ? _ip["cl"] + "" : "*";
            var f = _ip.ContainsKey("f") ? _ip["f"] + "" : "";
            var mr = _ip.ContainsKey("mr") ? (int)_ip["mr"] : 25;
            var si = _ip.ContainsKey("si") ? (int)_ip["si"] : 1;
            var table = _a.T[0][0] == 'P' ? _a.T[4] : _a.T[3];
            //---------------------------------------------------------------
            var cmd = new SqlCommand
            {
                CommandText = "XIKE_GetRowNum",
                CommandType = CommandType.StoredProcedure
            };
            cmd.Parameters.Add("@sort", SqlDbType.NVarChar);
            cmd.Parameters["@sort"].Value = se;
            cmd.Parameters.Add("@table", SqlDbType.NVarChar);
            cmd.Parameters["@table"].Value = table;
            cmd.Parameters.Add("@column", SqlDbType.NVarChar);
            cmd.Parameters["@column"].Value = cl;
            cmd.Parameters.Add("@filter", SqlDbType.NVarChar);
            cmd.Parameters["@filter"].Value = f;
            cmd.Parameters.Add("@SL", SqlDbType.Int);
            cmd.Parameters["@SL"].Value = mr;
            cmd.Parameters.Add("@index", SqlDbType.Int);
            cmd.Parameters["@index"].Value = si;

            var pIdOut = new SqlParameter("@p_Count_out", SqlDbType.Int) { Direction = ParameterDirection.Output };
            cmd.Parameters.Add(pIdOut);



            var dt = ExecuteProcedureData(cmd, _cs);
            if (dt != null)
            {
                var Total = 0;
                if ((pIdOut != null) && (pIdOut.Value != DBNull.Value))
                    Total = (int)(pIdOut.Value);

                var list = new List<object[]>();
                for (var m = 0; m < dt.Rows.Count; m++) list.Add(dt.Rows[m].ItemArray);
                _r._d = list; _r._t = Total;
            }
        }//end proc
        public void GDS(string sql, string p)
        {
            //---------------------------------------------------------------
            var cmd = new SqlCommand
            {
                CommandText = p,
                CommandType = CommandType.StoredProcedure
            };
            cmd.Parameters.Add("@sql", SqlDbType.NVarChar);
            cmd.Parameters["@sql"].Value = sql;

            var pIdOut = new SqlParameter("@p_Count_out", SqlDbType.Int)
            {
                Direction = ParameterDirection.Output
            };
            cmd.Parameters.Add(pIdOut);

            var dt = ExecuteProcedureData(cmd, _cs);
            var Total = 0;
            if ((pIdOut != null) && (pIdOut.Value != DBNull.Value))
                Total = (int)(pIdOut.Value);

            var list = new List<object[]>();
            for (var m = 0; m < dt.Rows.Count; m++) list.Add(dt.Rows[m].ItemArray);
            _r._d = list; _r._t = Total;
        }


        //void IoU(string sql)
        //{
        //    _r._d = -1;//fail
        //    using (var mC = new SqlConnection(_cs))
        //    {
        //        mC.Open();
        //        var mT = mC.BeginTransaction();      // Start a local transaction.
        //        var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //        mD.CommandTimeout = 36000;
        //        mD.Transaction = mT;
        //        try
        //        {
        //            mD.CommandText = sql;
        //            mD.ExecuteNonQuery();
        //            mT.Commit();
        //            _r._d = 1;
        //        }
        //        catch (Exception ex) { mT.Rollback(); _r._s = 0; _r._d = ex.Message; }
        //        finally { mD.Dispose(); mC.Close(); }
        //    }
        //}
        void IoU(string sql)
        {
            _r._d = -1;//fail
            using (var mC = new SqlConnection(_cs))
            {
                mC.Open();
                var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                try
                {
                    mD.CommandText = sql;
                    mD.ExecuteNonQuery();
                    _r._d = 1;
                }
                catch (Exception ex) { _r._s = 0; _r._d = ex.Message; }
                finally { mD.Dispose(); mC.Close(); }
            }
        }
        //void IoUL(string[] sql)
        //{
        //    _r._d = -1;//fail
        //    using (var mC = new SqlConnection(_cs))
        //    {
        //        mC.Open();
        //        var mT = mC.BeginTransaction();      // Start a local transaction.
        //        var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //        mD.CommandTimeout = 36000;
        //        mD.Transaction = mT;
        //        try
        //        {
        //            var curCount = 0;
        //            if (sql.Length > 0)
        //                while (curCount < sql.Length)
        //                {
        //                    var ss = "";
        //                    var tmp = curCount;
        //                    while (curCount < tmp + 40 && curCount < sql.Length)
        //                    {
        //                        ss += sql[curCount]; curCount++;
        //                    }
        //                    if (ss.Length > 0)
        //                    {
        //                        mD.CommandText = ss;
        //                        mD.ExecuteNonQuery();
        //                    }
        //                }
        //            mT.Commit();
        //            _r._d = 1;//success
        //        }
        //        catch (Exception ex) { mT.Rollback(); _r._s = 0; _r._d = ex.Message; }
        //        finally { mD.Dispose(); mC.Close(); }
        //    }
        //}
        void IoUL(string[] sql)
        {
            _r._d = -1;//fail
            using (var mC = new SqlConnection(_cs))
            {
                mC.Open();
                var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                try
                {
                    var curCount = 0;
                    if (sql.Length > 0)
                        while (curCount < sql.Length)
                        {
                            var ss = "";
                            var tmp = curCount;
                            while (curCount < tmp + 40 && curCount < sql.Length)
                            {
                                ss += sql[curCount]; curCount++;
                            }
                            if (ss.Length > 0)
                            {
                                mD.CommandText = ss;
                                mD.ExecuteNonQuery();
                            }
                        }
                    _r._d = 1;//success
                }
                catch (Exception ex) { _r._s = 0; _r._d = ex.Message; }
                finally { mD.Dispose(); mC.Close(); }
            }
        }
        //void Io(string sql)
        //{
        //    _r._d = -1;//fail
        //    using (var mC = new SqlConnection(_cs))
        //    {
        //        mC.Open();
        //        var mT = mC.BeginTransaction();      // Start a local transaction.
        //        var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //        mD.CommandTimeout = 36000;
        //        mD.Transaction = mT;
        //        try
        //        {
        //            mD.CommandText = sql;
        //            _r._d = mD.ExecuteScalar();
        //            mT.Commit();
        //        }
        //        catch (Exception ex) { mT.Rollback(); _r._s = 0; _r._d = ex.Message; }
        //        finally { mD.Dispose(); mC.Close(); }
        //    }
        //}
        void Io(string sql)
        {
            _r._d = -1;//fail
            using (var mC = new SqlConnection(_cs))
            {
                mC.Open();
                var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                try
                {
                    mD.CommandText = sql;
                    _r._d = mD.ExecuteScalar();
                }
                catch (Exception ex) { _r._s = 0; _r._d = ex.Message; }
                finally { mD.Dispose(); mC.Close(); }
            }
        }
        //void IO(string[] sql)
        //{
        //    var mC = new SqlConnection(_cs);
        //    mC.Open();
        //    var mT = mC.BeginTransaction();      // Start a local transaction.

        //    var lI = new List<int>();
        //    try
        //    {
        //        foreach (var t in sql)
        //        {
        //            var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //            mD.CommandTimeout = 36000;
        //            mD.Transaction = mT;
        //            mD.CommandType = CommandType.StoredProcedure;
        //            mD.CommandText = "MyProcess";
        //            mD.Parameters.Add("@_sql", SqlDbType.NVarChar);
        //            mD.Parameters["@_sql"].Value = t;
        //            var pIdOut = new SqlParameter("@p_Id_out", SqlDbType.Int) { Direction = ParameterDirection.Output };
        //            mD.Parameters.Add(pIdOut);
        //            mD.ExecuteNonQuery();
        //            if (!string.IsNullOrEmpty(pIdOut.Value + "") && !lI.Contains((int)pIdOut.Value)) lI.Add((int)pIdOut.Value);
        //            else { mC.Close(); _r._s = 0; _r._d = _E.E10009.G(); return; }
        //        }
        //        _r._d = lI; mT.Commit();
        //    }
        //    catch (Exception e)
        //    {
        //        try
        //        {
        //            mT.Rollback();
        //        }
        //        catch (SqlException ex)
        //        {
        //            if (mT.Connection != null)
        //            {
        //                _r._s = 0; _r._d = ex.Message;
        //            }
        //        }
        //        _r._s = 0; _r._d = e.Message;
        //    }
        //    finally
        //    {
        //        mC.Close();
        //    }
        //}
        void IO(string[] sql)
        {
            var mC = new SqlConnection(_cs);
            mC.Open();

            var lI = new List<int>();
            try
            {
                foreach (var t in sql)
                {
                    var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                    mD.CommandTimeout = 36000;
                    mD.CommandType = CommandType.StoredProcedure;
                    mD.CommandText = "MyProcess";
                    mD.Parameters.Add("@_sql", SqlDbType.NVarChar);
                    mD.Parameters["@_sql"].Value = t;
                    var pIdOut = new SqlParameter("@p_Id_out", SqlDbType.Int) { Direction = ParameterDirection.Output };
                    mD.Parameters.Add(pIdOut);
                    mD.ExecuteNonQuery();
                    if (!string.IsNullOrEmpty(pIdOut.Value + "") && !lI.Contains((int)pIdOut.Value)) lI.Add((int)pIdOut.Value);
                    else { mC.Close(); _r._s = 0; _r._d = _E.E10009.G(); return; }
                }
                _r._d = lI;
            }
            catch (Exception e)
            {
                _r._s = 0; _r._d = e.Message;
            }
            finally
            {
                mC.Close();
            }
        }
        //void UO(string[] sql)
        //{
        //    var mC = new SqlConnection(_cs);
        //    mC.Open();
        //    var mT = mC.BeginTransaction();      // Start a local transaction.
        //    var lI = new List<int>();
        //    try
        //    {
        //        foreach (var t1 in sql)
        //        {
        //            var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
        //            mD.CommandTimeout = 36000;
        //            mD.Transaction = mT;
        //            mD.CommandType = CommandType.StoredProcedure;
        //            mD.CommandText = "MyProcess1";
        //            mD.Parameters.Add("@_sql", SqlDbType.NVarChar);
        //            mD.Parameters["@_sql"].Value = t1;
        //            var t = mD.ExecuteNonQuery();
        //            if (t > 0) lI.Add(t);
        //            else { mC.Close(); _r._s = 0; _r._d = _E.E10009.G(); return; }
        //        }
        //        _r._d = lI; mT.Commit();
        //    }
        //    catch (Exception e)
        //    {
        //        try
        //        {
        //            mT.Rollback();
        //        }
        //        catch (SqlException ex)
        //        {
        //            if (mT.Connection != null)
        //            {
        //                _r._s = 0; _r._d = ex.Message;
        //            }
        //        }
        //        _r._s = 0; _r._d = e.Message;
        //    }
        //    finally
        //    {
        //        mC.Close();
        //    }
        //}

        void UO(string[] sql)
        {
            var mC = new SqlConnection(_cs);
            mC.Open();
            var lI = new List<int>();
            try
            {
                foreach (var t1 in sql)
                {
                    var mD = mC.CreateCommand();       // Enlist the command in the current transaction.
                    mD.CommandTimeout = 36000;
                    mD.CommandType = CommandType.StoredProcedure;
                    mD.CommandText = "MyProcess1";
                    mD.Parameters.Add("@_sql", SqlDbType.NVarChar);
                    mD.Parameters["@_sql"].Value = t1;
                    var t = mD.ExecuteNonQuery();
                    if (t > 0) lI.Add(t);
                    else { mC.Close(); _r._s = 0; _r._d = _E.E10009.G(); return; }
                }
                _r._d = lI;
            }
            catch (Exception e)
            {
                _r._s = 0; _r._d = e.Message;
            }
            finally
            {
                mC.Close();
            }
        }
        public void I(string v, List<C> d)
        {
            var r = LI(d); _sql = string.Format("INSERT {0} ({1}) VALUES ({2}); SELECT SCOPE_IDENTITY()", v, r[0], r[1]); _sqlL.Add(_sql);
        }
        //void I(string v, List<C> d)
        //{
        //    var r = LI(d); _sql = string.Format("INSERT {0} ({1}) VALUES ({2}); SELECT SCOPE_IDENTITY()", v, r[0], r[1]);
        //}
        public void U(string v, List<C> d, List<C> c)
        {
            _sql = string.Format("UPDATE {0} SET {1} {2}", v, LU(d), LW(c)); _sqlL.Add(_sql);   //{2} if WHERE is _c not null
        }
        public void R(string v, List<C> c)
        {
            _sql = string.Format("DELETE FROM {0} {1}", v, LW(c)); _sqlL.Add(_sql);
        }
        public void G(string v)
        {
            _sql = string.Format("SELECT {0} FROM {1} {2}", _f, v, LW(_c)); _sqlL.Add(_sql);
        }

        /**/
        //public DataTable ExecuteProcedureData(SqlCommand cmd, string strConnect)
        //{
        //    var dt = new DataTable();
        //    using (var myCon = new SqlConnection((strConnect)))
        //    {
        //        myCon.Open();
        //        var transaction = myCon.BeginTransaction(IsolationLevel.ReadCommitted, "Sample Transaction 0901");
        //        try
        //        {
        //            cmd.CommandTimeout = 36000;
        //            var dataAdapter = new SqlDataAdapter {SelectCommand = cmd};
        //            dataAdapter.SelectCommand.Transaction = transaction;
        //            dataAdapter.SelectCommand.Connection = myCon;
        //            dataAdapter.Fill(dt);
        //            transaction.Commit();
        //        }
        //        catch (Exception e)
        //        {
        //            try
        //            {
        //                transaction.Rollback();
        //            }
        //            catch (SqlException ex)
        //            {
        //                if (transaction.Connection != null)
        //                {
        //                    _r._s = 0; _r._d = ex.Message; 
        //                }
        //            }
        //            _r._s = 0; _r._d = e.Message; 
        //        }
        //    }
        //    return _r._s == 0 ? null : dt;
        //}
        /*-------------------------------------------------------------------------------*/
        public DataTable ExecuteProcedureData(SqlCommand cmd, string strConnect)
        {
            var dt = new DataTable();
            using (var myCon = new SqlConnection((strConnect)))
            {
                myCon.Open();
                try
                {
                    cmd.CommandTimeout = 36000;
                    var dataAdapter = new SqlDataAdapter { SelectCommand = cmd };
                    dataAdapter.SelectCommand.Connection = myCon;
                    dataAdapter.Fill(dt);
                }
                catch (Exception e)
                {
                    _r._s = 0; _r._d = e.Message;
                }
            }
            return _r._s == 0 ? null : dt;
        }
    }

}
