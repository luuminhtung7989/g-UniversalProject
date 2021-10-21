using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using gcLibAdmin;

namespace WebApplication.Core
{
    public class XR
    {
        public string[] _a { get; set; }
        public string _ac { get; set; }
        public string[][] _fs; //List field cua table hoac view ma action do dung
        public readonly Dictionary<string, object> _ip; //Input cliet truyen vao
        public readonly string[][] _p = new string[100][]; //List field _c service push _c: fieldName; value: type
        public int _pc; //List field _c service push _c: fieldName; value: type

        public readonly string[][] _c = new string[15][];
        //List field _c service push _c key: fieldName; value: value, type

        public int _cc; //List field _c service push _c key: fieldName; value: value, type

        public readonly List<string[]> _d = new List<string[]>();
        //List field data client truyen vao key: fieldName; value: value, type

        public string _f; //Chuoi field client truyen vao
        public readonly R _r = new R { _s = 1 }; //Request gui ve cho client
        public string _sql; //Lenh sql tim duoc
        public static string _cs = ""; //Conection string
        public static string _css = ""; //Conection string
        public readonly Random _rd = new Random();
        public int _ct; // Count data random               
        public readonly gcRptTable tblReport = new gcRptTable();
        public string _hd = "";
        public string _ft = "";
        public Dictionary<string, object> _cf;
        public static Dictionary<string, string[]> _dra;
        public static Dictionary<int, string> _drh;
        public static Dictionary<int, string> _drf;
        public static void Init(string cs, string css, Dictionary<string, string[]> dra, Dictionary<int, string> drh, Dictionary<int, string> drf)
        {
            _cs = cs;
            _css = css;
            _dra = dra;
            _drh = drh;
            _drf = drf;
        }

        public XR(object input)
        {
            _ip = (Dictionary<string, object>)input;
            _cf = (Dictionary<string, object>)_ip["_cf"];
        }

        public XR R()
        {
            if (_r._e) return this;
            _r._s = 1;
            _r._d = "";
            return this;
        }

        public int Rd(int s, int e)
        {
            return _rd.Next(s, e);
        }

        public string Rd(int s, int e, int i, Dictionary<int, string[]> d)
        {
            return d[_rd.Next(s, e)][i];
        }

        public string Rd(int s, int e, int i, string c, DataTable d)
        {
            return string.IsNullOrEmpty(c)
                ? (d.Select()[_rd.Next(s, e)][i] + "")
                : (d.Select(c)[_rd.Next(s, e)][i] + "");
        }

        public XR A(string name = "")
        {
            // Kiem tra va lay action
            if (_r._e) return this;
            if (_ip.ContainsKey("a"))
            {
                _ac = name == "" ? _ip["a"] as string : name;
                if (_ac != null && _dra.ContainsKey(_ac))
                {
                    _a = _dra[_ac];
                    _pc = 0;
                    _cc = 0;
                    return this;
                }
                _r._s = 0;
                _r._d = _E.E10001.G();
                return this;
            }
            _r._s = 0;
            _r._d = _E.E10002.G();
            return this;
        }

        public XR Pc(string value)
        {
            // Push Field
            if (_r._e) return this;
            var fi = L(value, 7, 0, _fs.Length, _fs);
            if (fi != "")
            {
                _p[_pc] = new[] { value, fi };
                _pc++;
            }
            else
            {
                _r._s = 0;
                _r._d = _E.E10005.G();
            }
            return this;
        }

        public XR _CR()
        {
            //Check _c
            if (_r._e) return this;
            if (_ip.ContainsKey("_c"))
            {
                var c = _ip["_c"] as Dictionary<string, object>;
                if (c != null)
                    foreach (var i in c)
                        if (L(i.Key, 0, 0, _pc, _p) == "")
                        {
                            //Kiem tra neu field _c truyen vao khong dung giong voi tap field _c cua action thi bao loi
                            _r._s = 0;
                            _r._d = _E.E10006.G();
                            break;
                        }
            }
            return this;
        }

        public XR _CF()
        {
            //Kiem tra field trong data va field
            if (_r._e) return this;
            if (_ip.ContainsKey("_d"))
            {
                //Check _d
                var da = _ip["_d"] as Dictionary<string, object>;
                if (da != null)
                {
                    foreach (var d in da)
                        if (L(d.Key, 7, 0, _fs.Length, _fs) == "")
                        {
                            _r._s = 0;
                            _r._d = _E.E10007.G();
                        }
                    if (!V(da))
                    {
                        _r._s = 0;
                        _r._d = _E.E10010.G();
                    } //Validate
                }
            }
            if (!_ip.ContainsKey("_f") || _ip["_f"] + "" == "") _f = "*";
            else _f = _ip["_f"].ToString(); //Note: Trong service thì nên split Field để kiểm tra.
            return this;
        }

        public XR _CG()
        {
            if (!_ip.ContainsKey("_d") || !((Dictionary<string, object>)_ip["_d"]).ContainsKey("count")
                || (int)(((Dictionary<string, object>)_ip["_d"])["count"]) < 1)
            {
                _r._s = 0;
                _r._d = _E.E10001.G();
            }
            _ct = (int)(((Dictionary<string, object>)_ip["_d"])["count"]);
            return this;
        }

        public string L(string k, int i, int j, int l, string[][] f)
        // Lookup FieldName: key, index compare, index value, length, array
        {
            for (int m = 0; m < l; m++) if (f[m][i] == k) return f[m][j];
            return "";
        }

        public string[] LI(List<string[]> f)
        {
            string[] r = { "", "" };
            foreach (var t1 in f)
                if (!t1[0].Equals("Id"))
                {
                    if (r[0] == "") r[0] += t1[0];
                    else r[0] += "," + t1[0];
                    string t = (t1[1][0] == '0' || t1[1][0] == '1') ? t1[2] : ("N'" + t1[2] + "'");
                    if (r[1] == "") r[1] += t;
                    else r[1] += "," + t;
                }
            return r;
        }

        public string LW(string[][] f, int l)
        {
            // loopup for update sql
            var r = "";
            for (var i = 0; i < l; i++)
            {
                string x;
                if (f[i][2].Trim().IndexOf("$x") != -1) x = f[i][2].Replace("$x", f[i][0]);
                else x = f[i][0] + "=" + ((f[i][1][0] == '0' || f[i][1][0] == '1') ? f[i][2] : ("N'" + f[i][2] + "'"));
                if (r == "") r += " " + x;
                else r += " AND " + x;
            }
            return r;
        }

        public string LS(string[][] f, int l)
        {
            // loopup for update sql
            string r = "";
            for (int i = 0; i < l; i++)
            {
                if (!f[i][0].Equals("Id", StringComparison.OrdinalIgnoreCase))
                {
                    string x;
                    if (f[i][2].Trim().IndexOf("$x") != -1) x = f[i][2].Replace("$x", f[i][0]);
                    else
                        x = f[i][0] + "=" +
                            ((f[i][1][0] == '0' || f[i][1][0] == '1') ? f[i][2] : ("N'" + f[i][2] + "'"));
                    if (r == "") r += " WHERE " + x;
                    else r += " AND " + x;
                }
                else if (r == "") r += " WHERE " + f[i][0] + "!=" + f[i][2];
                else r += " AND " + f[i][0] + "!=" + f[i][2];
            }
            return r;
        }

        public string LU(string[][] f, int l)
        {
            // loopup for update sql
            string r = "";
            for (int i = 0; i < l; i++)
            {
                if (f[i][0].Equals("Id", StringComparison.OrdinalIgnoreCase))
                {
                    string x;
                    if (f[i][2].Trim().IndexOf("$x") != -1) x = f[i][2].Replace("$x", f[i][0]);
                    else
                        x = f[i][0] + "=" +
                            ((f[i][1][0] == '0' || f[i][1][0] == '1') ? f[i][2] : ("N'" + f[i][2] + "'"));
                    r += " WHERE " + x;
                    break;
                }
            }
            return r;
        }

        public string LU(List<string[]> f)
        {
            // loopup for update sql
            var r = "";
            foreach (var t1 in f)
                if (!t1[0].Equals("Id"))
                {
                    var t = (t1[1][0] == '0' || t1[1][0] == '1') ? t1[2] : ("N'" + t1[2] + "'");
                    if (r == "") r += (t1[0] + "=" + t);
                    else r += ("," + t1[0] + "=" + t);
                }
            return r;
        }

        public XR L()
        {
            if (_r._e) return this;
            var cd = _ip.ContainsKey("_c") ? _ip["_c"] as Dictionary<string, object> : null;
            var da = _ip.ContainsKey("_d") ? _ip["_d"] as Dictionary<string, object> : null;
            if (cd != null)
                foreach (var c in cd)
                {
                    _c[_cc] = new[] { c.Key, L(c.Key, 7, 0, _fs.Length, _fs), c.Value + "" };
                    _cc++;
                }
            if (da != null)
                foreach (var d in da)
                    _d.Add(new[] { d.Key, L(d.Key, 7, 0, _fs.Length, _fs), d.Value + "" });
            return this;
        }

        public bool V(object d)
        {
            return true;
        }

        public R G()
        {
            return _r;
        }

        //public object
        public XR LC()
        {

            //-----------------------------------------------------------
            //Cài đặt báo cáo tự động
            //mMaxLevel số mức tối đa của cây
            _hd = (_cf.ContainsKey("hd") && (_cf["hd"] + "") == "0") ? (_cf.ContainsKey("hdValue") ? (_cf["hdValue"] + "") : "") :
                string.Format(_cf.ContainsKey("hd") ? _drh[(int)_cf["hd"]] : _drh[1], _a[4],
                _cf.ContainsKey("hdValue") ? _cf["hdValue"] : "");
            _ft = string.Format(_cf.ContainsKey("fd") ? _drf[(int)_cf["fd"]] : _drf[1]
                /*, _cf.ContainsKey("_fdValue") ? _cf["_fdValue"] : ""*/);
            tblReport.strMainTable = _a[2];
            tblReport.bShowIndexRow = _cf.ContainsKey("bShowIndexRow") && (bool)_cf["bShowIndexRow"];
            tblReport.mColMergForSubSumRow = _cf.ContainsKey("mColMergForSubSumRow")
                ? (int)_cf["mColMergForSubSumRow"]
                : 0;
            tblReport.bShowSubSumary = _cf.ContainsKey("bShowSubSumary") ? (int)_cf["bShowSubSumary"] : 0;
            tblReport.mMaxLevel = _cf.ContainsKey("mMaxLl") ? (int)_cf["mMaxLl"] : 1;

            tblReport.mTypeBuild = _cf.ContainsKey("mTypeBuild") ? (string)_cf["mTypeBuild"] : "isSimple";
            tblReport.bShowSTT = true;
            tblReport.strOrderBy = _cf.ContainsKey("strOrderBy") ? (string)_cf["strOrderBy"] : "";
            tblReport.server = _css;
            tblReport.strWhere = _cf.ContainsKey("alterView") ? "" : (_cf.ContainsKey("strWhere") ? (_cf["strWhere"] + "").Trim() : "");

            if (_cf.ContainsKey("mMaxLevel") && (int)_cf["mMaxLevel"] > 0)
            {
                tblReport.mArrPos = new int[(int)_cf["mMaxLevel"]];
                for (int i = 0; i < (int)_cf["mMaxLevel"]; i++)
                {
                    tblReport.mArrPos[i] = i + 1;
                    //1 ở đây là cột 1, cột 0 đã chứa số thứ tự không thì chúng ta sét cột 0 vào
                    tblReport.mStrShowContent.Add(""); //Tương ứng với 3 phần tử trên
                }
                tblReport.mColMergForSubSumRowSub = tblReport.mColMergForSubSumRow -
                                                    ((int)_cf["mMaxLevel"] > 2 ? 2 : (int)_cf["mMaxLevel"]);
                tblReport.bShowGroupBy = true;
                //tblReport.mMaxLevel = (int)_cf["mMaxLevel"];
            }
            else
                tblReport.bShowGroupBy = false;
            if (_cf.ContainsKey("col"))
                BuildASimple(tblReport.root);
            else
                tblReport.BuidlASimpleByDB(tblReport, _a[2], "zgcBUILDIN_CONFIG_REPORT_DETAIL", _cf["reportId"] + "");
            tblReport.InitTable();
            tblReport.mArrArgSumary = new List<int>();
            for (var t = 0; t < tblReport.cCols; t++)
                tblReport.mArrArgSumary.Add(0);
            if (_cf.ContainsKey("mArrArgSumary"))
            {
                var m = _cf["mArrArgSumary"] as ArrayList;
                if (m != null)
                    foreach (var t in m)
                        tblReport.mArrArgSumary[(int)t] = 1;
            }
            tblReport.MakeGobalRowForTesting();
            return this;
        }

        public XR EX()
        {
            //-----------------------------------------------------------
            //BuilSampleTree(tblReport.root, tblReport);
            //-----------------------------------------------------------
            if (_r._e) return this;
            SqlConnection mC = new SqlConnection(_cs);
            mC.Open();
            SqlTransaction mT = mC.BeginTransaction(); // Start a local transaction.
            DataTable dt = new DataTable();
            try
            {
                SqlCommand mD;
                if (_cf.ContainsKey("alterView") && (_cf["alterView"] as ArrayList).Count > 0)
                {
                    var sql = _cf["alterView"] as ArrayList;
                    foreach (var t in sql)
                    {
                        mD = mC.CreateCommand(); // Enlist the command in the current transaction.
                        mD.CommandTimeout = 36000;
                        mD.Transaction = mT;
                        mD.CommandText = t + "";
                        mD.ExecuteNonQuery();
                    }
                }
                mD = mC.CreateCommand(); // Enlist the command in the current transaction.
                mD.CommandTimeout = 36000;
                mD.Transaction = mT;
                mD.CommandText = tblReport.PrepairFillData();
                var adap = new SqlDataAdapter(mD);
                adap.Fill(dt);
                mT.Commit();
            }
            catch (Exception e)
            {
                try
                {
                    mT.Rollback();
                }
                catch (SqlException ex)
                {
                    _r._s = 0;
                    _r._d = _E.E10009.G();
                }
                _r._s = 0;
                _r._d = _E.E10009.G();
            }
            finally
            {
                mC.Close();
            }
            if (_r._e) return this;
            FillDataInner(dt);

            return this;
        }

        public XR LV()
        {
            if (_r._e) return this;
            if (_cf.ContainsKey("colValue"))
            {
                var m = _cf["colValue"] as ArrayList;
                if (m != null)
                {
                    var f = new Stack();
                    foreach (var t1 in m)
                    {
                        var it = t1 as ArrayList;
                        foreach (var t2 in tblReport.mData)
                        {
                            for (var k = 1; k < it.Count; k++)
                            {
                                switch (it[k] + "")
                                {
                                    case "+":
                                        f.Push(double.Parse(f.Pop() + "") + double.Parse(f.Pop() + ""));
                                        break;
                                    case "-":
                                        f.Push(double.Parse(f.Pop() + "") - double.Parse(f.Pop() + ""));
                                        break;
                                    case "*":
                                        f.Push(double.Parse(f.Pop() + "") * double.Parse(f.Pop() + ""));
                                        break;
                                    case "/":
                                        f.Push(double.Parse(f.Pop() + "") / double.Parse(f.Pop() + ""));
                                        break;
                                    default:
                                        f.Push(t2[(int)it[k]]);
                                        break;
                                }
                            }
                            t2[(int)it[0]] = f.Pop() + "";
                        }
                    }
                }
            }
            return this;
        }

        public XR LS()
        {
            if (_r._e) return this;
            if (_cf.ContainsKey("mArrArgSumary"))
            {
                var m = _cf["mArrArgSumary"] as ArrayList;
                if (m != null)
                    foreach (var t1 in m)
                    {
                        double sum = 0;
                        foreach (var t2 in tblReport.mData)
                        {
                            var value = (string)t2[(int)t1];
                            double t;
                            if (string.IsNullOrWhiteSpace(value))
                                t2[(int)t1] = "0";
                            else if (double.TryParse(value, out t))
                            {
                                sum += t;
                                t2[(int)t1] = double.Parse(value) + "";
                            }
                            else sum++;
                        }
                        tblReport.RowSumGobal.mValue[(int)t1] = sum + "";
                    }
            }
            return this;
        }

        public XR LS1()
        {
            if (_r._e) return this;
            var mA = _cf.ContainsKey("mArrArgSumary") ? _cf["mArrArgSumary"] as ArrayList : null;
            var cV = _cf.ContainsKey("colValue") ? _cf["colValue"] as ArrayList : null;
            var s = mA == null ? null : new double[mA.Count];
            var f = new Stack();
            for (var i = 0; i < tblReport.mData.Count; i++)
            {
                if (cV != null)
                {
                    foreach (var t in cV)
                    {
                        var it = t as ArrayList;
                        for (var k = 1; k < it.Count; k++)
                        {
                            if (it.Count == 2)
                                f.Push(it[k] + "");
                            else
                                switch (it[k] + "")
                                {
                                    case "+":
                                        f.Push(double.Parse(f.Pop() + "") + double.Parse(f.Pop() + ""));
                                        break;
                                    case "-":
                                        f.Push(double.Parse(f.Pop() + "") - double.Parse(f.Pop() + ""));
                                        break;
                                    case "*":
                                        f.Push(double.Parse(f.Pop() + "") * double.Parse(f.Pop() + ""));
                                        break;
                                    case "/":
                                        f.Push(double.Parse(f.Pop() + "") / double.Parse(f.Pop() + ""));
                                        break;
                                    default:
                                        f.Push(tblReport.mData[i][(int)it[k]]);
                                        break;
                                }
                        }
                        tblReport.mData[i][(int)it[0]] = f.Pop() + "";
                    }
                }
                if (mA != null)
                {
                    for (var j = 0; j < mA.Count; j++)
                    {
                        var value = (string)tblReport.mData[i][(int)mA[j]];
                        double t;
                        if (string.IsNullOrWhiteSpace(value))
                            tblReport.mData[i][(int)mA[j]] = "0";
                        else if (double.TryParse(value, out t))
                        {
                            s[j] += t;
                            tblReport.mData[i][(int)mA[j]] = double.Parse(value) + "";
                        }
                        else s[j]++;
                        if (i == tblReport.mData.Count - 1)
                        {
                            tblReport.RowSumGobal.mValue[(int)mA[j]] = s[j] + "";
                        }
                    }
                }
            }
            return this;
        }

        public XR LG()
        {
            if (_r._e) return this;
            //Tong theo nhom và định dạng
            if (tblReport.mListItem.Count > 0)
            {
                var t = _cf["mArrArgSumary"] as ArrayList;
                foreach (var t2 in tblReport.mListItem)
                {
                    var Item = t2;
                    if (_cf.ContainsKey("mMaxLevel") && (int)_cf["mMaxLevel"] > 0)
                    {
                        double Tem3; //, temp4 = 0;
                        foreach (var t3 in t)
                        {
                            Tem3 = 0;
                            for (var i = Item.@from; i < Item.to; i++)
                            {
                                var value = (string)tblReport.mData[i][(int)t3];
                                double t1;
                                if (double.TryParse(value, out t1))
                                    Tem3 += t1;
                                else Tem3++;
                            }
                            Item.mValue[(int)t3] = Tem3.ToString();
                            if (_cf.ContainsKey("strShowSumName"))
                                Item.strShowName = _cf["strShowSumName"] + "";
                        }
                        if (_cf.ContainsKey("classListItem"))
                        {
                            Item.cssClass = (string)_cf["classListItem"];
                            Item.cssValueClass = (string)_cf["classListItem"];
                            Item.cssClassShowName = (string)_cf["classListItem"];
                        }
                        foreach (var Item2 in t2.list)
                        {
                            foreach (var t3 in t)
                            {
                                Tem3 = 0;
                                for (var i = Item2.@from; i < Item2.to; i++)
                                {
                                    var value = (string)tblReport.mData[i][(int)t3];
                                    double t1;
                                    if (double.TryParse(value, out t1))
                                        Tem3 += t1;
                                    else Tem3++;
                                }
                                Item2.mValue[(int)t3] = Tem3.ToString();
                                //if (_cf.ContainsKey("strShowSubName"))
                                //    Item2.strShowName = _cf["strShowSubName"] + "";
                            }
                        }
                    }
                }
            }
            return this;
        }

        public XR B()
        {
            if (_r._e) return this;
            ////------------------------------------------------------------
            ////Xuất dữ liệu

            for (int t = 0; t < tblReport.cCols; t++)
            {
                tblReport.mArrRightStyle.Add(0);
                tblReport.mArrRightStyleCss.Add("");
            }
            if (tblReport.mArrPos != null)
                tblReport.SubRowSumGobal.position = tblReport.mArrPos.Length > 2 ? 2 : tblReport.mArrPos.Length;
            if (_cf.ContainsKey("classRowSumGobal"))
            {
                tblReport.RowSumGobal.cssClass = (string)_cf["classRowSumGobal"];
                tblReport.RowSumGobal.cssValueClass = (string)_cf["classRowSumGobal"];
                tblReport.RowSumGobal.cssClassShowName = (string)_cf["classRowSumGobal"];
            }
            if (_cf.ContainsKey("showName"))
            {
                tblReport.RowSumGobal.showName = (string)_cf["showName"];
            }
            if (_cf.ContainsKey("strShowSubName"))
                tblReport.SubRowSumGobal.showName = _cf["strShowSubName"] + "";
            if (_cf.ContainsKey("classSubRowSumGobal"))
            {
                tblReport.SubRowSumGobal.cssClass = (string)_cf["classSubRowSumGobal"];
                tblReport.SubRowSumGobal.cssValueClass = (string)_cf["classSubRowSumGobal"];
                tblReport.SubRowSumGobal.cssClassShowName = (string)_cf["classSubRowSumGobal"];
            }
            if (_cf.ContainsKey("classCol"))
            {
                var m = _cf["classCol"] as ArrayList;
                foreach (var t in m)
                {
                    var it = t as ArrayList;
                    tblReport.mArrRightStyle[(int)it[0]] = 1;
                    tblReport.mArrRightStyleCss[(int)it[0]] = it[1] + "";
                }
            }
            //Xuất dữ liệu
            //
            _r._d = _hd + tblReport.MakeSimpleTable() + _ft;
            return this;
        }

        private void FillDataInner(DataTable dt)
        {

            var j = 0;
            if (dt.Rows.Count > 0)
            {
                //nên lưu 1 dãy trật tự các cột sẽ được build trên cây
                //Điều kiện lọc ở đây dược tính theo ngày

                var bStoreId = false;
                if (tblReport.mTypeBuild.ToUpper().Contains("ISKEY"))
                {
                    bStoreId = true;
                    tblReport.mArrId = new int[dt.Rows.Count];
                }

                //check field before fill data
                foreach (var item in tblReport.arrListLeaf)
                {
                    var field = item.cPattern.hField; //
                    //check field nhu sau, neu 0 tuc la fill data, check column nay co nam trong danh sach hay ko
                    //neu la 1 tuc ko co fill ko can kiem tra
                    if (item.iNotFillData == 0)
                        if (!dt.Columns.Contains(field))
                        {
                            item.iNotFillData = 1; // cot du lieu nay ko ton tai, ko the fill data dc 
                        }
                }

                if (tblReport.mTypeBuild.ToUpper().Contains("ISSIMPLE"))
                    while (j < dt.Rows.Count)
                    {
                        if (bStoreId)
                            tblReport.mArrId[j] = (int)dt.Rows[j]["Id"];

                        var row = new object[tblReport.cCols];

                        for (var l = 0; l < tblReport.arrListLeaf.Count; l++)
                        {
                            var item = tblReport.arrListLeaf[l];
                            if (tblReport.bShowSTT)
                            {
                                row[0] = (tblReport.mCountRows + 1).ToString();
                            }

                            if (item.iNotFillData == 1) //add new column chỉ ra cột này không lấy data
                            {
                                row[l] = "0";
                            }
                            else
                                row[l] = tblReport.GetStringValue(item.datatype, dt.Rows[j][item.cPattern.hField]);

                        }

                        j++;
                        tblReport.mCountRows++;
                        tblReport.mData.Add(row);
                    }
            }
            //end if (dt.Rows.Count > 0)
            //-------------------------------------------
            //build calculate column
            if (tblReport.bShowGroupBy)
            {
                //------------------------------------------------
                //phải build dạng cây đệ quy không thì dùng cấp độ 
                int from = 0;
                int to = tblReport.mData.Count;
                tblReport.FindGroupBy(tblReport.mListItem, tblReport.mArrPos, 0, ref from, ref to);
            }
            //--------------------------------------
            //add row style
            for (int p = 0; p < tblReport.mData.Count; p++)
                tblReport.mArrCssForRow.Add("rptTD");

            for (int mJ = 0; mJ < tblReport.cCols; mJ++)
                tblReport.mArrFormatNumber.Add(0);

            tblReport.FormatNumber(tblReport.root, tblReport.mArrFormatNumber);
        }

        public void BuildASimple(TreeNode<gcRptColumn> root)
        {
            if (tblReport.bShowSTT)
                tblReport.AddDataNode(root, "", "STT", "rpt_TEST_", "", "STT", "rpt_TEST_", 0, true, "isData", "int", -1, -1);
            var col = _cf["col"] as ArrayList;
            foreach (var t in col)
            {
                var it = t as ArrayList;
                tblReport.AddDataNode(root, it[0] + "", it[1] + "", it[2] + "", it[3] + "", it[4] + "", it[5] + "",
                    (int)it[6], (bool)it[7], it[8] + "", it[9] + "", (int)it[10], (int)it[11]);
            }
        }
    }
}
