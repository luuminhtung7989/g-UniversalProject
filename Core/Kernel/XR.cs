// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.XR
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using gcLibAdmin;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace zgcSpaceKernel.Core
{
  public class XR
  {
    public string[][] _fs;
    public readonly Dictionary<string, object> _ip;
    public readonly string[][] _p = new string[100][];
    public int _pc;
    public readonly string[][] _c = new string[15][];
    public int _cc;
    public readonly List<string[]> _d = new List<string[]>();
    public string _f;
    public readonly zgcSpaceKernel.Core.R _r = new zgcSpaceKernel.Core.R()
    {
      _s = 1
    };
    public string _sql;
    public static string _cs = "";
    public static string _css = "";
    public readonly Random _rd = new Random();
    public int _ct;
    public gcRptTable tblReport = new gcRptTable();
    public string _hd = "";
    public string _ft = "";
    public Dictionary<string, object> _cf;
    public static Dictionary<string, string[]> _dra;
    public static Dictionary<int, string> _drh;
    public static Dictionary<int, string> _drf;

    public string[] _a { get; set; }

    public string _ac { get; set; }

    public void Init(
      string cs,
      string css,
      Dictionary<string, string[]> dra,
      Dictionary<int, string> drh,
      Dictionary<int, string> drf)
    {
      XR._cs = cs;
      XR._css = css;
      XR._dra = dra;
      XR._drh = drh;
      XR._drf = drf;
      this.tblReport = new gcRptTable();
      this.tblReport.server = css;
    }

    public XR(object input)
    {
      this._ip = (Dictionary<string, object>) input;
      this._cf = (Dictionary<string, object>) this._ip[nameof (_cf)];
    }

    public XR R()
    {
      if (this._r._e)
        return this;
      this._r._s = 1;
      this._r._d = (object) "";
      return this;
    }

    public int Rd(int s, int e) => this._rd.Next(s, e);

    public string Rd(int s, int e, int i, Dictionary<int, string[]> d) => d[this._rd.Next(s, e)][i];

    public string Rd(int s, int e, int i, string c, DataTable d) => string.IsNullOrEmpty(c) ? string.Concat(d.Select()[this._rd.Next(s, e)][i]) : string.Concat(d.Select(c)[this._rd.Next(s, e)][i]);

    public XR A(string name = "")
    {
      if (this._r._e)
        return this;
      if (this._ip.ContainsKey("a"))
      {
        this._ac = name == "" ? this._ip["a"] as string : name;
        if (this._ac != null && XR._dra.ContainsKey(this._ac))
        {
          this._a = XR._dra[this._ac];
          this._pc = 0;
          this._cc = 0;
          return this;
        }
        this._r._s = 0;
        this._r._d = (object) _E.E10001.G();
        return this;
      }
      this._r._s = 0;
      this._r._d = (object) _E.E10002.G();
      return this;
    }

    public XR Pc(string value)
    {
      if (this._r._e)
        return this;
      string str = this.L(value, 7, 0, this._fs.Length, this._fs);
      if (str != "")
      {
        this._p[this._pc] = new string[2]{ value, str };
        ++this._pc;
      }
      else
      {
        this._r._s = 0;
        this._r._d = (object) _E.E10005.G();
      }
      return this;
    }

    public XR _CR()
    {
      if (this._r._e || (!this._ip.ContainsKey("_c") || !(this._ip["_c"] is Dictionary<string, object> dictionary)))
        return this;
      foreach (KeyValuePair<string, object> keyValuePair in dictionary)
      {
        if (this.L(keyValuePair.Key, 0, 0, this._pc, this._p) == "")
        {
          this._r._s = 0;
          this._r._d = (object) _E.E10006.G();
          break;
        }
      }
      return this;
    }

    public XR _CF()
    {
      if (this._r._e)
        return this;
      if (this._ip.ContainsKey("_d") && this._ip["_d"] is Dictionary<string, object> dictionary)
      {
        foreach (KeyValuePair<string, object> keyValuePair in dictionary)
        {
          if (this.L(keyValuePair.Key, 7, 0, this._fs.Length, this._fs) == "")
          {
            this._r._s = 0;
            this._r._d = (object) _E.E10007.G();
          }
        }
        if (!this.V((object) dictionary))
        {
          this._r._s = 0;
          this._r._d = (object) _E.E10010.G();
        }
      }
      this._f = this._ip.ContainsKey("_f") && !(string.Concat(this._ip["_f"]) == "") ? this._ip["_f"].ToString() : "*";
      return this;
    }

    public XR _CG()
    {
      if (!this._ip.ContainsKey("_d") || !((Dictionary<string, object>) this._ip["_d"]).ContainsKey("count") || (int) ((Dictionary<string, object>) this._ip["_d"])["count"] < 1)
      {
        this._r._s = 0;
        this._r._d = (object) _E.E10001.G();
      }
      this._ct = (int) ((Dictionary<string, object>) this._ip["_d"])["count"];
      return this;
    }

    public string L(string k, int i, int j, int l, string[][] f)
    {
      for (int index = 0; index < l; ++index)
      {
        if (f[index][i] == k)
          return f[index][j];
      }
      return "";
    }

    public string[] LI(List<string[]> f)
    {
      string[] strArray1 = new string[2]{ "", "" };
      foreach (string[] strArray2 in f)
      {
        if (!strArray2[0].Equals("Id"))
        {
          if (strArray1[0] == "")
          {
            // ISSUE: explicit reference operation
             strArray1[0] += strArray2[0];
          }
          else
          {
            ref string local = ref strArray1[0];
            local = local + "," + strArray2[0];
          }
          string str = strArray2[1][0] == '0' || strArray2[1][0] == '1' ? strArray2[2] : "N'" + strArray2[2] + "'";
          if (strArray1[1] == "")
          {
            // ISSUE: explicit reference operation
             strArray1[1] += str;
          }
          else
          {
            ref string local = ref strArray1[1];
            local = local + "," + str;
          }
        }
      }
      return strArray1;
    }

    public string LW(string[][] f, int l)
    {
      string str1 = "";
      for (int index = 0; index < l; ++index)
      {
        string str2 = f[index][2].Trim().IndexOf("$x") == -1 ? f[index][0] + "=" + (f[index][1][0] == '0' || f[index][1][0] == '1' ? f[index][2] : "N'" + f[index][2] + "'") : f[index][2].Replace("$x", f[index][0]);
        str1 = !(str1 == "") ? str1 + " AND " + str2 : str1 + " " + str2;
      }
      return str1;
    }

    public string LS(string[][] f, int l)
    {
      string str1 = "";
      for (int index = 0; index < l; ++index)
      {
        if (!f[index][0].Equals("Id", StringComparison.OrdinalIgnoreCase))
        {
          string str2 = f[index][2].Trim().IndexOf("$x") == -1 ? f[index][0] + "=" + (f[index][1][0] == '0' || f[index][1][0] == '1' ? f[index][2] : "N'" + f[index][2] + "'") : f[index][2].Replace("$x", f[index][0]);
          str1 = !(str1 == "") ? str1 + " AND " + str2 : str1 + " WHERE " + str2;
        }
        else if (str1 == "")
          str1 = str1 + " WHERE " + f[index][0] + "!=" + f[index][2];
        else
          str1 = str1 + " AND " + f[index][0] + "!=" + f[index][2];
      }
      return str1;
    }

    public string LU(string[][] f, int l)
    {
      string str1 = "";
      for (int index = 0; index < l; ++index)
      {
        if (f[index][0].Equals("Id", StringComparison.OrdinalIgnoreCase))
        {
          string str2 = f[index][2].Trim().IndexOf("$x") == -1 ? f[index][0] + "=" + (f[index][1][0] == '0' || f[index][1][0] == '1' ? f[index][2] : "N'" + f[index][2] + "'") : f[index][2].Replace("$x", f[index][0]);
          str1 = str1 + " WHERE " + str2;
          break;
        }
      }
      return str1;
    }

    public string LU(List<string[]> f)
    {
      string str1 = "";
      foreach (string[] strArray in f)
      {
        if (!strArray[0].Equals("Id"))
        {
          string str2 = strArray[1][0] == '0' || strArray[1][0] == '1' ? strArray[2] : "N'" + strArray[2] + "'";
          if (str1 == "")
            str1 = str1 + strArray[0] + "=" + str2;
          else
            str1 = str1 + "," + strArray[0] + "=" + str2;
        }
      }
      return str1;
    }

    public XR L()
    {
      if (this._r._e)
        return this;
      Dictionary<string, object> dictionary1 = this._ip.ContainsKey("_c") ? this._ip["_c"] as Dictionary<string, object> : (Dictionary<string, object>) null;
      Dictionary<string, object> dictionary2 = this._ip.ContainsKey("_d") ? this._ip["_d"] as Dictionary<string, object> : (Dictionary<string, object>) null;
      if (dictionary1 != null)
      {
        foreach (KeyValuePair<string, object> keyValuePair in dictionary1)
        {
          this._c[this._cc] = new string[3]
          {
            keyValuePair.Key,
            this.L(keyValuePair.Key, 7, 0, this._fs.Length, this._fs),
            string.Concat(keyValuePair.Value)
          };
          ++this._cc;
        }
      }
      if (dictionary2 != null)
      {
        foreach (KeyValuePair<string, object> keyValuePair in dictionary2)
          this._d.Add(new string[3]
          {
            keyValuePair.Key,
            this.L(keyValuePair.Key, 7, 0, this._fs.Length, this._fs),
            string.Concat(keyValuePair.Value)
          });
      }
      return this;
    }

    public bool V(object d) => true;

    public zgcSpaceKernel.Core.R G() => this._r;

    public XR LC()
    {
      this._hd = !this._cf.ContainsKey("hd") || !(string.Concat(this._cf["hd"]) == "0") ? string.Format(this._cf.ContainsKey("hd") ? XR._drh[(int) this._cf["hd"]] : XR._drh[1], (object) this._a[4], this._cf.ContainsKey("hdValue") ? this._cf["hdValue"] : (object) "") : (this._cf.ContainsKey("hdValue") ? string.Concat(this._cf["hdValue"]) : "");
      this._ft = string.Format(this._cf.ContainsKey("fd") ? XR._drf[(int) this._cf["fd"]] : XR._drf[1]);
      this.tblReport.strMainTable = this._a[2];
      this.tblReport.bShowIndexRow = this._cf.ContainsKey("bShowIndexRow") && (bool) this._cf["bShowIndexRow"];
      this.tblReport.mColMergForSubSumRow = this._cf.ContainsKey("mColMergForSubSumRow") ? (int) this._cf["mColMergForSubSumRow"] : 0;
      this.tblReport.bShowSubSumary = this._cf.ContainsKey("bShowSubSumary") ? (int) this._cf["bShowSubSumary"] : 0;
      this.tblReport.mMaxLevel = this._cf.ContainsKey("mMaxLl") ? (int) this._cf["mMaxLl"] : 1;
      this.tblReport.mTypeBuild = this._cf.ContainsKey("mTypeBuild") ? (string) this._cf["mTypeBuild"] : "isSimple";
      this.tblReport.bShowSTT = true;
      this.tblReport.strOrderBy = this._cf.ContainsKey("strOrderBy") ? (string) this._cf["strOrderBy"] : "";
      this.tblReport.server = XR._css;
      this.tblReport.strWhere = this._cf.ContainsKey("alterView") ? "" : (this._cf.ContainsKey("strWhere") ? string.Concat(this._cf["strWhere"]).Trim() : "");
      if (this._cf.ContainsKey("mMaxLevel") && (int) this._cf["mMaxLevel"] > 0)
      {
        this.tblReport.mArrPos = new int[(int) this._cf["mMaxLevel"]];
        for (int index = 0; index < (int) this._cf["mMaxLevel"]; ++index)
        {
          this.tblReport.mArrPos[index] = index + 1;
          this.tblReport.mStrShowContent.Add("");
        }
        this.tblReport.mColMergForSubSumRowSub = this.tblReport.mColMergForSubSumRow - ((int) this._cf["mMaxLevel"] > 2 ? 2 : (int) this._cf["mMaxLevel"]);
        this.tblReport.bShowGroupBy = true;
      }
      else
        this.tblReport.bShowGroupBy = false;
      if (this._cf.ContainsKey("col"))
        this.BuildASimple(this.tblReport.root);
      else
        this.tblReport.BuidlASimpleByDB(this.tblReport, this._a[2], "zgcBUILDIN_CONFIG_REPORT_DETAIL", string.Concat(this._cf["reportId"]));
      this.tblReport.InitTable();
      this.tblReport.mArrArgSumary = new List<int>();
      for (int index = 0; index < this.tblReport.cCols; ++index)
        this.tblReport.mArrArgSumary.Add(0);
      if (this._cf.ContainsKey("mArrArgSumary") && this._cf["mArrArgSumary"] is ArrayList arrayList)
      {
        foreach (int index in arrayList)
          this.tblReport.mArrArgSumary[index] = 1;
      }
      this.tblReport.MakeGobalRowForTesting();
      return this;
    }

    public XR LC_()
    {
      this._hd = !this._cf.ContainsKey("hd") || !(string.Concat(this._cf["hd"]) == "0") ? string.Format(this._cf.ContainsKey("hd") ? XR._drh[(int) this._cf["hd"]] : XR._drh[1], (object) this._a[4], this._cf.ContainsKey("hdValue") ? this._cf["hdValue"] : (object) "") : (this._cf.ContainsKey("hdValue") ? string.Concat(this._cf["hdValue"]) : "");
      this._ft = string.Format(this._cf.ContainsKey("fd") ? XR._drf[(int) this._cf["fd"]] : XR._drf[1]);
      this.tblReport.strMainTable = this._cf.ContainsKey("mstrMainTable") ? (string) this._cf["mstrMainTable"] : this._a[2];
      this.tblReport.mTypeBuild = this._cf.ContainsKey("mTypeBuild") ? (string) this._cf["mTypeBuild"] : "isSimple";
      this.tblReport.mainField = this._cf.ContainsKey("mainField") ? (string) this._cf["mainField"] : "*";
      this.tblReport.bShowSTT = true;
      this.tblReport.strOrderBy = this._cf.ContainsKey("strOrderBy") ? (string) this._cf["strOrderBy"] : "";
      this.tblReport.server = XR._css;
      this.tblReport.strWhere = this._cf.ContainsKey("strWhere") ? string.Concat(this._cf["strWhere"]).Trim() : "";
      return this;
    }

    public XR EX_()
    {
      if (this._r._e)
        return this;
      SqlConnection sqlConnection = new SqlConnection(XR._cs);
      sqlConnection.Open();
      SqlTransaction sqlTransaction = sqlConnection.BeginTransaction();
      DataTable dataTable = new DataTable();
      try
      {
        if (this._cf.ContainsKey("alterView") && (this._cf["alterView"] as ArrayList).Count > 0)
        {
          foreach (object obj in this._cf["alterView"] as ArrayList)
          {
            SqlCommand command = sqlConnection.CreateCommand();
            command.CommandTimeout = 36000;
            command.Transaction = sqlTransaction;
            command.CommandText = string.Concat(obj);
            command.ExecuteNonQuery();
          }
        }
        SqlCommand command1 = sqlConnection.CreateCommand();
        command1.CommandTimeout = 36000;
        command1.Transaction = sqlTransaction;
        command1.CommandText = this.tblReport.PrepairFillData();
        new SqlDataAdapter(command1).Fill(dataTable);
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
          this._r._s = 0;
          this._r._d = (object) (_E.E10009.G() + ex2.ToString());
        }
        this._r._s = 0;
        this._r._d = (object) (_E.E10009.G() + ex1.ToString());
      }
      finally
      {
        sqlConnection.Close();
      }
      if (this._r._e)
        return this;
      List<object[]> objArrayList = new List<object[]>();
      for (int index = 0; index < dataTable.Rows.Count; ++index)
        objArrayList.Add(dataTable.Rows[index].ItemArray);
      this._r._d = (object) objArrayList;
      this._r._t = dataTable.Rows.Count;
      return this;
    }

    public XR EX()
    {
      if (this._r._e)
        return this;
      SqlConnection sqlConnection = new SqlConnection(XR._cs);
      sqlConnection.Open();
      SqlTransaction sqlTransaction = sqlConnection.BeginTransaction();
      DataTable dataTable = new DataTable();
      try
      {
        if (this._cf.ContainsKey("alterView") && (this._cf["alterView"] as ArrayList).Count > 0)
        {
          foreach (object obj in this._cf["alterView"] as ArrayList)
          {
            SqlCommand command = sqlConnection.CreateCommand();
            command.CommandTimeout = 36000;
            command.Transaction = sqlTransaction;
            command.CommandText = string.Concat(obj);
            command.ExecuteNonQuery();
          }
        }
        SqlCommand command1 = sqlConnection.CreateCommand();
        command1.CommandTimeout = 36000;
        command1.Transaction = sqlTransaction;
        command1.CommandText = this.tblReport.PrepairFillData();
        new SqlDataAdapter(command1).Fill(dataTable);
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
          this._r._s = 0;
          this._r._d = (object) (_E.E10009.G() + ex2.ToString());
        }
        this._r._s = 0;
        this._r._d = (object) (_E.E10009.G() + ex1.ToString());
      }
      finally
      {
        sqlConnection.Close();
      }
      if (this._r._e)
        return this;
      this.FillDataInner(dataTable);
      return this;
    }

    public XR LV()
    {
      if (this._r._e || (!this._cf.ContainsKey("colValue") || !(this._cf["colValue"] is ArrayList arrayList1)))
        return this;
      Stack stack = new Stack();
      foreach (object obj in arrayList1)
      {
        ArrayList arrayList2 = obj as ArrayList;
        foreach (object[] objArray in this.tblReport.mData)
        {
          for (int index = 1; index < arrayList2.Count; ++index)
          {
            string str = string.Concat(arrayList2[index]);
            if (!(str == "+"))
            {
              if (!(str == "-"))
              {
                if (!(str == "*"))
                {
                  if (str == "/")
                    stack.Push((object) (double.Parse(string.Concat(stack.Pop())) / double.Parse(string.Concat(stack.Pop()))));
                  else
                    stack.Push(objArray[(int) arrayList2[index]]);
                }
                else
                  stack.Push((object) (double.Parse(string.Concat(stack.Pop())) * double.Parse(string.Concat(stack.Pop()))));
              }
              else
                stack.Push((object) (double.Parse(string.Concat(stack.Pop())) - double.Parse(string.Concat(stack.Pop()))));
            }
            else
              stack.Push((object) (double.Parse(string.Concat(stack.Pop())) + double.Parse(string.Concat(stack.Pop()))));
          }
          objArray[(int) arrayList2[0]] = (object) string.Concat(stack.Pop());
        }
      }
      return this;
    }

    public XR LS()
    {
      if (this._r._e || (!this._cf.ContainsKey("mArrArgSumary") || !(this._cf["mArrArgSumary"] is ArrayList arrayList)))
        return this;
      foreach (object obj in arrayList)
      {
        double num = 0.0;
        foreach (object[] objArray in this.tblReport.mData)
        {
          string s = (string) objArray[(int) obj];
          if (string.IsNullOrWhiteSpace(s))
          {
            objArray[(int) obj] = (object) "0";
          }
          else
          {
            double result;
            if (double.TryParse(s, out result))
            {
              num += result;
              objArray[(int) obj] = (object) string.Concat((object) double.Parse(s));
            }
            else
              ++num;
          }
        }
        this.tblReport.RowSumGobal.mValue[(int) obj] = string.Concat((object) num);
      }
      return this;
    }

    public XR LS1()
    {
      if (this._r._e)
        return this;
      ArrayList arrayList1 = this._cf.ContainsKey("mArrArgSumary") ? this._cf["mArrArgSumary"] as ArrayList : (ArrayList) null;
      ArrayList arrayList2 = this._cf.ContainsKey("colValue") ? this._cf["colValue"] as ArrayList : (ArrayList) null;
      double[] numArray = arrayList1 == null ? (double[]) null : new double[arrayList1.Count];
      Stack stack = new Stack();
      for (int index1 = 0; index1 < this.tblReport.mData.Count; ++index1)
      {
        if (arrayList2 != null)
        {
          foreach (object obj in arrayList2)
          {
            ArrayList arrayList3 = obj as ArrayList;
            for (int index2 = 1; index2 < arrayList3.Count; ++index2)
            {
              if (arrayList3.Count == 2)
              {
                stack.Push((object) string.Concat(arrayList3[index2]));
              }
              else
              {
                string str = string.Concat(arrayList3[index2]);
                if (!(str == "+"))
                {
                  if (!(str == "-"))
                  {
                    if (!(str == "*"))
                    {
                      if (str == "/")
                        stack.Push((object) (double.Parse(string.Concat(stack.Pop())) / double.Parse(string.Concat(stack.Pop()))));
                      else
                        stack.Push(this.tblReport.mData[index1][(int) arrayList3[index2]]);
                    }
                    else
                      stack.Push((object) (double.Parse(string.Concat(stack.Pop())) * double.Parse(string.Concat(stack.Pop()))));
                  }
                  else
                    stack.Push((object) (double.Parse(string.Concat(stack.Pop())) - double.Parse(string.Concat(stack.Pop()))));
                }
                else
                  stack.Push((object) (double.Parse(string.Concat(stack.Pop())) + double.Parse(string.Concat(stack.Pop()))));
              }
            }
            this.tblReport.mData[index1][(int) arrayList3[0]] = (object) string.Concat(stack.Pop());
          }
        }
        if (arrayList1 != null)
        {
          for (int index2 = 0; index2 < arrayList1.Count; ++index2)
          {
            string s = (string) this.tblReport.mData[index1][(int) arrayList1[index2]];
            if (string.IsNullOrWhiteSpace(s))
            {
              this.tblReport.mData[index1][(int) arrayList1[index2]] = (object) "0";
            }
            else
            {
              double result;
              if (double.TryParse(s, out result))
              {
                numArray[index2] += result;
                this.tblReport.mData[index1][(int) arrayList1[index2]] = (object) string.Concat((object) double.Parse(s));
              }
              else
                ++numArray[index2];
            }
            if (index1 == this.tblReport.mData.Count - 1)
              this.tblReport.RowSumGobal.mValue[(int) arrayList1[index2]] = string.Concat((object) numArray[index2]);
          }
        }
      }
      return this;
    }

    public XR LG()
    {
      if (this._r._e || this.tblReport.mListItem.Count <= 0)
        return this;
      ArrayList arrayList = this._cf["mArrArgSumary"] as ArrayList;
      foreach (gcRptItem gcRptItem1 in this.tblReport.mListItem)
      {
        gcRptItem gcRptItem2 = gcRptItem1;
        if (this._cf.ContainsKey("mMaxLevel") && (int) this._cf["mMaxLevel"] > 0)
        {
          foreach (object obj in arrayList)
          {
            double num = 0.0;
            for (int from = gcRptItem2.from; from < gcRptItem2.to; ++from)
            {
              double result;
              if (double.TryParse((string) this.tblReport.mData[from][(int) obj], out result))
                num += result;
              else
                ++num;
            }
            gcRptItem2.mValue[(int) obj] = num.ToString();
            if (this._cf.ContainsKey("strShowSumName"))
              gcRptItem2.strShowName = string.Concat(this._cf["strShowSumName"]);
          }
          if (this._cf.ContainsKey("classListItem"))
          {
            gcRptItem2.cssClass = (string) this._cf["classListItem"];
            gcRptItem2.cssValueClass = (string) this._cf["classListItem"];
            gcRptItem2.cssClassShowName = (string) this._cf["classListItem"];
          }
          foreach (gcRptItem gcRptItem3 in gcRptItem1.list)
          {
            foreach (object obj in arrayList)
            {
              double num = 0.0;
              for (int from = gcRptItem3.from; from < gcRptItem3.to; ++from)
              {
                double result;
                if (double.TryParse((string) this.tblReport.mData[from][(int) obj], out result))
                  num += result;
                else
                  ++num;
              }
              gcRptItem3.mValue[(int) obj] = num.ToString();
            }
          }
        }
      }
      return this;
    }

    public XR B()
    {
      if (this._r._e)
        return this;
      for (int index = 0; index < this.tblReport.cCols; ++index)
      {
        this.tblReport.mArrRightStyle.Add(0);
        this.tblReport.mArrRightStyleCss.Add("");
      }
      if (this.tblReport.mArrPos != null)
        this.tblReport.SubRowSumGobal.position = this.tblReport.mArrPos.Length > 2 ? 2 : this.tblReport.mArrPos.Length;
      if (this._cf.ContainsKey("classRowSumGobal"))
      {
        this.tblReport.RowSumGobal.cssClass = (string) this._cf["classRowSumGobal"];
        this.tblReport.RowSumGobal.cssValueClass = (string) this._cf["classRowSumGobal"];
        this.tblReport.RowSumGobal.cssClassShowName = (string) this._cf["classRowSumGobal"];
      }
      if (this._cf.ContainsKey("showName"))
        this.tblReport.RowSumGobal.showName = (string) this._cf["showName"];
      if (this._cf.ContainsKey("strShowSubName"))
        this.tblReport.SubRowSumGobal.showName = string.Concat(this._cf["strShowSubName"]);
      if (this._cf.ContainsKey("classSubRowSumGobal"))
      {
        this.tblReport.SubRowSumGobal.cssClass = (string) this._cf["classSubRowSumGobal"];
        this.tblReport.SubRowSumGobal.cssValueClass = (string) this._cf["classSubRowSumGobal"];
        this.tblReport.SubRowSumGobal.cssClassShowName = (string) this._cf["classSubRowSumGobal"];
      }
      if (this._cf.ContainsKey("classCol"))
      {
        foreach (object obj in this._cf["classCol"] as ArrayList)
        {
          ArrayList arrayList = obj as ArrayList;
          this.tblReport.mArrRightStyle[(int) arrayList[0]] = 1;
          this.tblReport.mArrRightStyleCss[(int) arrayList[0]] = string.Concat(arrayList[1]);
        }
      }
      this._r._d = (object) (this._hd + this.tblReport.MakeSimpleTable() + this._ft);
      return this;
    }

    private void FillDataInner(DataTable dt)
    {
      int index1 = 0;
      if (dt.Rows.Count > 0)
      {
        bool flag = false;
        if (this.tblReport.mTypeBuild.ToUpper().Contains("ISKEY"))
        {
          flag = true;
          this.tblReport.mArrId = new int[dt.Rows.Count];
        }
        foreach (gcRptColumn gcRptColumn in this.tblReport.arrListLeaf)
        {
          string hField = gcRptColumn.cPattern.hField;
          if (gcRptColumn.iNotFillData == 0 && !dt.Columns.Contains(hField))
            gcRptColumn.iNotFillData = 1;
        }
        if (this.tblReport.mTypeBuild.ToUpper().Contains("ISSIMPLE"))
        {
          while (index1 < dt.Rows.Count)
          {
            if (flag)
              this.tblReport.mArrId[index1] = (int) dt.Rows[index1]["Id"];
            object[] objArray = new object[this.tblReport.cCols];
            for (int index2 = 0; index2 < this.tblReport.arrListLeaf.Count; ++index2)
            {
              gcRptColumn gcRptColumn = this.tblReport.arrListLeaf[index2];
              if (this.tblReport.bShowSTT)
                objArray[0] = (object) (this.tblReport.mCountRows + 1).ToString();
              objArray[index2] = gcRptColumn.iNotFillData != 1 ? (object) this.tblReport.GetStringValue(gcRptColumn.datatype, dt.Rows[index1][gcRptColumn.cPattern.hField]) : (object) "0";
            }
            ++index1;
            ++this.tblReport.mCountRows;
            this.tblReport.mData.Add(objArray);
          }
        }
      }
      if (this.tblReport.bShowGroupBy)
      {
        int from = 0;
        int count = this.tblReport.mData.Count;
        this.tblReport.FindGroupBy(this.tblReport.mListItem, this.tblReport.mArrPos, 0, ref from, ref count);
      }
      for (int index2 = 0; index2 < this.tblReport.mData.Count; ++index2)
        this.tblReport.mArrCssForRow.Add("rptTD");
      for (int index2 = 0; index2 < this.tblReport.cCols; ++index2)
        this.tblReport.mArrFormatNumber.Add(0);
      this.tblReport.FormatNumber(this.tblReport.root, this.tblReport.mArrFormatNumber);
    }

    public void BuildASimple(TreeNode<gcRptColumn> root)
    {
      if (this.tblReport.bShowSTT)
        this.tblReport.AddDataNode(root, "", "STT", "rpt_TEST_", "", "STT", "rpt_TEST_", 0, true, "isData", "int", -1, -1);
      foreach (object obj in this._cf["col"] as ArrayList)
      {
        ArrayList arrayList = obj as ArrayList;
        this.tblReport.AddDataNode(root, string.Concat(arrayList[0]), string.Concat(arrayList[1]), string.Concat(arrayList[2]), string.Concat(arrayList[3]), string.Concat(arrayList[4]), string.Concat(arrayList[5]), (int) arrayList[6], (bool) arrayList[7], string.Concat(arrayList[8]), string.Concat(arrayList[9]), (int) arrayList[10], (int) arrayList[11]);
      }
    }
  }
}
