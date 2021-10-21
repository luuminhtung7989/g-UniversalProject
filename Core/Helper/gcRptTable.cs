// Decompiled with JetBrains decompiler
// Type: gcLibAdmin.gcRptTable
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Data;
using System.Text;
using System.Text.RegularExpressions;
using zgcLibCore;

namespace gcLibAdmin
{
  public class gcRptTable
  {
    public string gobalFormat = "";
    public TreeNode<gcRptColumn> root;
    public int curPos;
    public int mShowSumPosition;
    public int posValeForMakeRow;
    public string colValue;
    public List<int> arrPos;
    public int mMaxLevel;
    public bool bExtexntRow;
    public string ExtexntRowValue = "";
    public string ExtexntRowCSS = "rptTDExtern";
    public string rptTDHeaderCSS = "rptTDHeader";
    public string rptTableCSS = "rptTable";
    public List<gcRptColumn> arrListLeaf = new List<gcRptColumn>();
    public gcRptRow Row;
    public gcRptRow RowSumGobal;
    public gcRptRow[] RowSumGroupBy;
    public int cRows;
    public int cCols;
    public List<object[]> mData;
    public string mTypeBuild;
    public bool bShowIndexRow;
    public bool bShowSTT;
    public string bShowSTTName;
    public int mCountRows;
    public int[] mArrId;
    public int[] mArrPos;
    public bool bShowGroupBy;
    public bool isBIGDATA = false;
    public List<gcRptTailItem> mListTailItem;
    public int mColMergForSubSumRow = 0;
    public int mColMergForSubSumRowSub = 0;
    public gcRptRow SubRowSumGobal;
    public int bShowSubSumary = 0;
    public string[] mColGroup = (string[]) null;
    public int mGobalGroupRowFisrt = 0;
    public List<gcRptItem> mListItem;
    public List<int> mArrArgSumary;
    public List<string> mStrShowContent;
    public List<string> mArrCssForRow;
    public List<int> mArrRightStyle;
    public List<string> mArrRightStyleCss;
    public string mStrFormatNumber = ",";
    public List<int> mArrFormatNumber;
    public string strMainTable;
    public string mainField;
    public string strWhere;
    public string strOrderBy;
    public string strTblSql;
    public string strConfigColumnSql;
    private StringDictionary strDictionary;
    public string[] lstTable;
    public string server;

    public gcRptTable()
    {
      this.bShowSubSumary = 0;
      this.mShowSumPosition = 1;
      this.mTypeBuild = "isSimple";
      this.strMainTable = "tbl_Test_MakeReport";
      this.strWhere = "";
      this.strOrderBy = "";
      this.strTblSql = "";
      this.strConfigColumnSql = "";
      this.mainField = "";
      this.cRows = 0;
      this.cCols = 0;
      this.root = new TreeNode<gcRptColumn>(new gcRptColumn()
      {
        Id = -1,
        Index = -1
      });
      this.curPos = 0;
      this.bExtexntRow = false;
      this.bShowIndexRow = true;
      this.mMaxLevel = 1;
      this.colValue = "rValue";
      this.posValeForMakeRow = 0;
      this.bShowSTT = false;
      this.bShowSTTName = "№";
      this.bShowGroupBy = false;
      this.mListItem = new List<gcRptItem>();
      this.mListTailItem = new List<gcRptTailItem>();
      this.mStrShowContent = new List<string>();
      this.strDictionary = new StringDictionary();
      this.mData = new List<object[]>();
      this.mArrRightStyle = new List<int>();
      this.mArrFormatNumber = new List<int>();
      this.mArrRightStyleCss = new List<string>();
      this.mArrCssForRow = new List<string>();
    }

    private bool CheckOrgLicese()
    {
      this.FillDataInner();
      return true;
    }

    public void GetSizeAndAddLeaf(TreeNode<gcRptColumn> node)
    {
      if (node == null)
        return;
      if (node.Value.isLeaf)
      {
        node.Value.Index = this.cCols;
        this.arrListLeaf.Add(node.Value);
        ++this.cCols;
      }
      else
      {
        for (int index = 0; index < node.Children.Count; ++index)
          this.GetSizeAndAddLeaf(node.Children[index]);
      }
    }

    public void RunFunctoNodeRoot(TreeNode<gcRptColumn> root)
    {
      gcRange range = new gcRange();
      bool flag = false;
      for (int index = 0; index < root.Children.Count; ++index)
      {
        if (root.Children[index].Value.type.Contains("isAutoGen"))
        {
          if (!flag)
          {
            range.a = index;
            range.b = range.a + 1;
            flag = true;
          }
          else
            ++range.b;
        }
        else if (flag)
          break;
      }
      this.RunFunctoNode(root, range);
    }

    public void RunFunctoNode(TreeNode<gcRptColumn> curNode, gcRange range)
    {
      if (curNode.Value.isLeaf)
        return;
      for (int a1 = range.a; a1 < range.b; ++a1)
      {
        TreeNode<gcRptColumn> child = curNode.Children[a1];
        gcRange range1 = new gcRange();
        bool flag = false;
        for (int index = 0; index < child.Children.Count; ++index)
        {
          if (child.Children[index].Value.type.Contains("isAutoGen"))
          {
            if (!flag)
            {
              range1.a = index;
              range1.b = range1.a + 1;
              flag = true;
            }
            else
              ++range1.b;
          }
          else if (flag)
            break;
        }
        this.RunFunctoNode(child, range1);
        if (child.Children.Count > 0)
        {
          if (child.Children[0].Value.isLeaf)
          {
            for (int index = 0; index < child.Children.Count; ++index)
              child.Value.value += child.Children[index].Value.value;
          }
          else
          {
            for (int a2 = range1.a; a2 < range1.b; ++a2)
              child.Value.value += child.Children[a2].Value.value;
          }
        }
      }
    }

    public int CountChild(TreeNode<gcRptColumn> node)
    {
      if (node != null)
      {
        if (node.Children.Count > 0)
        {
          if (node.Children[0].Value.isLeaf)
          {
            node.Value.cChild = node.Children.Count;
            return node.Value.cChild;
          }
          for (int index = 0; index < node.Children.Count; ++index)
            node.Value.cChild += this.CountChild(node.Children[index]);
        }
        else if (node.Value.isLeaf)
          node.Value.cChild = 1;
      }
      return 0;
    }

    public void FormatNumber(TreeNode<gcRptColumn> node, List<int> arr)
    {
      if (node == null)
        return;
      if (node.Value.isLeaf)
      {
        if (node.Value.datatype == "float")
          arr[node.Value.Index] = 1;
        else if (node.Value.datatype == "long")
          arr[node.Value.Index] = 1;
        else if (node.Value.datatype == "real")
          arr[node.Value.Index] = 1;
        else if (node.Value.datatype == "int")
          arr[node.Value.Index] = 1;
        else if (node.Value.datatype == "double")
          arr[node.Value.Index] = 1;
      }
      if (node.Children.Count > 0)
      {
        for (int index = 0; index < node.Children.Count; ++index)
          this.FormatNumber(node.Children[index], arr);
      }
    }

    public void InitTable()
    {
      this.cCols = 0;
      this.arrListLeaf = new List<gcRptColumn>();
      this.GetSizeAndAddLeaf(this.root);
    }

    public TreeNode<gcRptColumn> AddDataNode(
      TreeNode<gcRptColumn> parent,
      string hField,
      string hText,
      string hTable,
      string hRefField,
      string hRefText,
      string hRefTable,
      int level,
      bool isleaf,
      string type,
      string datatype,
      int index,
      int id)
    {
      return parent.Children.Add(new TreeNode<gcRptColumn>(new gcRptColumn()
      {
        cPattern = {
          hField = hField,
          hText = hText,
          hTable = hTable
        },
        cRef = {
          hRefField = hRefField,
          hRefText = hRefText,
          hRefTable = hRefTable
        },
        isLeaf = isleaf,
        mLevel = level,
        type = type,
        datatype = datatype,
        Id = id,
        Index = index,
        iNotFillData = 0
      }));
    }

    public TreeNode<gcRptColumn> AddDataNode(
      TreeNode<gcRptColumn> parent,
      string hField,
      string hText,
      string hTable,
      string hRefField,
      string hRefText,
      string hRefTable,
      int level,
      bool isleaf,
      string type,
      string datatype,
      int index,
      int id,
      int iNotFillData)
    {
      return parent.Children.Add(new TreeNode<gcRptColumn>(new gcRptColumn()
      {
        cPattern = {
          hField = hField,
          hText = hText,
          hTable = hTable
        },
        cRef = {
          hRefField = hRefField,
          hRefText = hRefText,
          hRefTable = hRefTable
        },
        isLeaf = isleaf,
        mLevel = level,
        type = type,
        datatype = datatype,
        Id = id,
        Index = index,
        iNotFillData = iNotFillData
      }));
    }

    public void BuidlASimpleByDB(
      gcRptTable table,
      string tblName,
      string tblGobal,
      string reportId)
    {
      string query = "SELECT * FROM " + tblGobal + " WHERE     ReportId = " + reportId + " and isShow='isShow' ORDER BY OrderCol ";
      if (this.strConfigColumnSql != string.Empty && this.strConfigColumnSql.Length > 3)
        query = this.strConfigColumnSql;
      DataTable dataTable = zgcHelper.GetDataSet(query, this.server).Tables[0];
      int index1 = 0;
      if (dataTable.Rows.Count <= 0)
        return;
      int index2 = 0;
      TreeNode<gcRptColumn>[] treeNodeArray = new TreeNode<gcRptColumn>[dataTable.Rows.Count + 2];
      if (table.bShowSTT)
      {
        treeNodeArray[0] = table.AddDataNode(table.root, "", this.bShowSTTName, "", "", this.bShowSTTName, "", 0, true, "isData", "int", -1, -1, 1);
        index2 = 1;
      }
      for (; index1 < dataTable.Rows.Count; ++index1)
      {
        string str1 = dataTable.Rows[index1]["ColName"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["ColName"];
        string str2 = dataTable.Rows[index1]["FormName"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["FormName"];
        string datatype = dataTable.Rows[index1]["ColType"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["ColType"];
        string str3 = dataTable.Rows[index1]["TableName"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["TableName"];
        string str4 = dataTable.Rows[index1]["isShow"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["isShow"];
        string str5 = dataTable.Rows[index1]["Parent"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["Parent"];
        string str6 = dataTable.Rows[index1]["ChildNode"] == DBNull.Value ? "" : (string) dataTable.Rows[index1]["ChildNode"];
        int iNotFillData = dataTable.Rows[index1]["iNotFillData"] == DBNull.Value ? 0 : (int) dataTable.Rows[index1]["iNotFillData"];
        if (str5.ToUpper().Contains("ISPARENT"))
        {
          treeNodeArray[index2] = !str6.ToUpper().Contains("HASCHILD") ? table.AddDataNode(table.root, str1, str2, str3, str1, str2, str3, 0, true, "isData", datatype, -1, -1, iNotFillData) : table.AddDataNode(table.root, str1, str2, str3, str1, str2, str3, 0, false, "isData", datatype, -1, -1, iNotFillData);
        }
        else
        {
          int level = 1;
          int index3 = 0;
          string[] strArray = str5.Split(':');
          if ((uint) strArray.Length > 0U)
          {
            string str7 = strArray[0];
            if (str7.Substring(1).Length > 0)
            {
              index3 = int.Parse(str7.Substring(1));
              level = int.Parse(strArray[1]);
            }
          }
          treeNodeArray[index2] = !str6.ToUpper().Contains("HASCHILD") ? table.AddDataNode(treeNodeArray[index3], str1, str2, str3, str1, str2, str3, level, true, "isData", datatype, -1, -1, iNotFillData) : table.AddDataNode(treeNodeArray[index3], str1, str2, str3, str1, str2, str3, level, false, "isData", datatype, -1, -1, iNotFillData);
        }
        ++index2;
      }
    }

    public void MakeGobalRowForTesting()
    {
      this.RowSumGobal = new gcRptRow();
      this.RowSumGobal.posFunc = new int[this.cCols];
      this.RowSumGobal.mFunc = new string[this.cCols];
      this.RowSumGobal.mValue = new string[this.cCols];
      this.RowSumGobal.cssClass = "rptTD";
      this.RowSumGobal.cssClassShowName = "rptTD";
      for (int index = 0; index < this.cCols; ++index)
      {
        this.RowSumGobal.posFunc[index] = this.mArrArgSumary[index];
        this.RowSumGobal.mFunc[index] = "SUM";
        this.RowSumGobal.mValue[index] = "";
      }
      this.mColGroup = new string[this.cCols];
      this.SubRowSumGobal = new gcRptRow();
      this.SubRowSumGobal.posFunc = new int[this.cCols];
      this.SubRowSumGobal.mFunc = new string[this.cCols];
      this.SubRowSumGobal.mValue = new string[this.cCols];
      this.SubRowSumGobal.cssClass = "rptTD";
      this.SubRowSumGobal.cssClassShowName = "rptTD";
      for (int index = 0; index < this.cCols; ++index)
      {
        this.SubRowSumGobal.posFunc[index] = this.mArrArgSumary[index];
        this.SubRowSumGobal.mFunc[index] = "SUM";
        this.SubRowSumGobal.mValue[index] = "";
        this.mColGroup[index] = "";
      }
      this.mArrCssForRow.Clear();
      for (int index = 0; index < this.mData.Count; ++index)
        this.mArrCssForRow.Add("rptTD");
      this.mArrFormatNumber.Clear();
      this.mArrRightStyle.Clear();
      this.mArrRightStyleCss.Clear();
      for (int index = 0; index < this.cCols; ++index)
      {
        this.mArrFormatNumber.Add(0);
        this.mArrRightStyle.Add(0);
        this.mArrRightStyleCss.Add("rptTD");
      }
      this.mGobalGroupRowFisrt = this.cCols;
    }

    public void FillData() => this.CheckOrgLicese();

    public string PrepairFillData()
    {
      for (int index = 0; index < this.root.Children.Count; ++index)
        this.CountChild(this.root.Children[index]);
      string str = "SELECT * FROM " + this.strMainTable;
      if (this.mainField != "")
        str = "SELECT " + this.mainField + " FROM " + this.strMainTable;
      if (this.strWhere != string.Empty)
      {
        str = "SELECT * FROM " + this.strMainTable + " WHERE " + this.strWhere;
        if (this.mainField != "")
          str = "SELECT " + this.mainField + " FROM " + this.strMainTable + " WHERE " + this.strWhere;
      }
      if (this.strOrderBy != string.Empty)
        str += this.strOrderBy;
      if (this.strTblSql != string.Empty)
        str = this.strTblSql;
      this.mCountRows = 0;
      return str;
    }

    private void FillDataInner()
    {
      DataTable dataTable = zgcHelper.GetDataSet(this.PrepairFillData(), this.server).Tables[0];
      int index1 = 0;
      if (dataTable.Rows.Count > 0)
      {
        TreeNodeList<gcRptColumn> children = this.root.Children;
        bool flag = false;
        if (this.mTypeBuild.ToUpper().Contains("ISKEY"))
        {
          flag = true;
          this.mArrId = new int[dataTable.Rows.Count];
        }
        for (int index2 = 0; index2 < this.arrListLeaf.Count; ++index2)
        {
          gcRptColumn gcRptColumn = this.arrListLeaf[index2];
          string hField = gcRptColumn.cPattern.hField;
          if (gcRptColumn.iNotFillData == 0 && !dataTable.Columns.Contains(hField))
            gcRptColumn.iNotFillData = 1;
        }
        if (this.mTypeBuild.ToUpper().Contains("ISSIMPLE"))
        {
          while (index1 < dataTable.Rows.Count)
          {
            if (flag)
              this.mArrId[index1] = (int) dataTable.Rows[index1]["Id"];
            string[] strArray = new string[this.cCols];
            for (int index2 = 0; index2 < this.arrListLeaf.Count; ++index2)
            {
              gcRptColumn gcRptColumn = this.arrListLeaf[index2];
              if (this.bShowSTT)
                strArray[0] = (this.mCountRows + 1).ToString();
              strArray[index2] = gcRptColumn.iNotFillData != 1 ? this.GetStringValue(gcRptColumn.datatype, dataTable.Rows[index1][gcRptColumn.cPattern.hField]) : "0";
            }
            ++index1;
            ++this.mCountRows;
            this.mData.Add((object[]) strArray);
          }
        }
      }
      if (this.bShowGroupBy)
      {
        int from = 0;
        int count = this.mData.Count;
        this.FindGroupBy(this.mListItem, this.mArrPos, 0, ref from, ref count);
      }
      this.mArrCssForRow.Clear();
      for (int index2 = 0; index2 < this.mData.Count; ++index2)
        this.mArrCssForRow.Add("rptTD");
      this.mArrFormatNumber.Clear();
      for (int index2 = 0; index2 < this.cCols; ++index2)
        this.mArrFormatNumber.Add(0);
      this.FormatNumber(this.root, this.mArrFormatNumber);
    }

    public string ChangeMinute(int m)
    {
      switch (m)
      {
        case 0:
          return "00";
        case 1:
          return "01";
        case 2:
          return "02";
        case 3:
          return "03";
        case 4:
          return "04";
        case 5:
          return "05";
        case 6:
          return "06";
        case 7:
          return "07";
        case 8:
          return "08";
        case 9:
          return "09";
        default:
          return m.ToString();
      }
    }

    public string ChangeMonth(int m)
    {
      switch (m)
      {
        case 1:
          return "Jan";
        case 2:
          return "Feb";
        case 3:
          return "Mar";
        case 4:
          return "Apr";
        case 5:
          return "May";
        case 6:
          return "Jun";
        case 7:
          return "Jul";
        case 8:
          return "Aug";
        case 9:
          return "Sep";
        case 10:
          return "Oct";
        case 11:
          return "Nov";
        case 12:
          return "Dec";
        default:
          return "";
      }
    }

    public string GetStringValue(string datatype, object o)
    {
      string str1 = "";
      if (o == null || o == DBNull.Value)
        return str1;
      string str2;
      if (datatype.Contains("date"))
      {
        object[] objArray1 = new object[5];
        DateTime dateTime = (DateTime) o;
        objArray1[0] = (object) dateTime.Day.ToString();
        objArray1[1] = (object) "/";
        dateTime = (DateTime) o;
        objArray1[2] = (object) dateTime.Month;
        objArray1[3] = (object) "/";
        dateTime = (DateTime) o;
        objArray1[4] = (object) dateTime.Year;
        str2 = string.Concat(objArray1);
        if (this.gobalFormat == "ENGLISH")
        {
          object[] objArray2 = new object[5];
          dateTime = (DateTime) o;
          objArray2[0] = (object) dateTime.Day;
          objArray2[1] = (object) "-";
          dateTime = (DateTime) o;
          objArray2[2] = (object) this.ChangeMonth(dateTime.Month);
          objArray2[3] = (object) "-";
          dateTime = (DateTime) o;
          objArray2[4] = (object) dateTime.Year;
          str2 = string.Concat(objArray2);
        }
      }
      else if (datatype.Contains("spectime"))
      {
        object[] objArray1 = new object[9];
        DateTime dateTime = (DateTime) o;
        objArray1[0] = (object) dateTime.Day.ToString();
        objArray1[1] = (object) "/";
        dateTime = (DateTime) o;
        objArray1[2] = (object) dateTime.Month;
        objArray1[3] = (object) "/";
        dateTime = (DateTime) o;
        objArray1[4] = (object) dateTime.Year;
        objArray1[5] = (object) " ";
        dateTime = (DateTime) o;
        objArray1[6] = (object) dateTime.Hour;
        objArray1[7] = (object) ":";
        dateTime = (DateTime) o;
        objArray1[8] = (object) this.ChangeMinute(dateTime.Minute);
        str2 = string.Concat(objArray1);
        if (this.gobalFormat == "ENGLISH")
        {
          object[] objArray2 = new object[9];
          dateTime = (DateTime) o;
          objArray2[0] = (object) dateTime.Day;
          objArray2[1] = (object) "-";
          dateTime = (DateTime) o;
          objArray2[2] = (object) this.ChangeMonth(dateTime.Month);
          objArray2[3] = (object) "-";
          dateTime = (DateTime) o;
          objArray2[4] = (object) dateTime.Year;
          objArray2[5] = (object) " ";
          dateTime = (DateTime) o;
          objArray2[6] = (object) dateTime.Hour;
          objArray2[7] = (object) ":";
          dateTime = (DateTime) o;
          objArray2[8] = (object) this.ChangeMinute(dateTime.Minute);
          str2 = string.Concat(objArray2);
        }
      }
      else
        str2 = o.ToString();
      return str2;
    }

    public string MakeExpertHeader(TreeNode<gcRptColumn> node, int Level)
    {
      StringBuilder tr = new StringBuilder();
      for (int curLevel = 0; curLevel < Level; ++curLevel)
      {
        tr.Append("<tr>");
        this.Build(node, curLevel, Level, ref tr);
        tr.Append("</tr>");
      }
      return tr.ToString();
    }

    public void Build(TreeNode<gcRptColumn> node, int curLevel, int Level, ref StringBuilder tr)
    {
      if (node == null)
        return;
      if (curLevel == Level - 1 && node.Value.mLevel == curLevel)
      {
        tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center>");
        tr.Append(node.Value.cRef.hRefText);
        tr.Append("</td>");
      }
      else if (node.Value.mLevel == curLevel)
      {
        if (curLevel == 0)
        {
          if (node.Value.isLeaf)
          {
            tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center rowspan=");
            tr.Append(Level);
            tr.Append(">");
            if (node.Value.type.Contains("isAutoGen"))
              tr.Append(node.Value.cRef.hRefText);
            else if (node.Value.type.Contains("isData"))
              tr.Append(node.Value.cPattern.hText);
            else if (node.Value.type.Contains("isCalculate"))
              tr.Append(node.Value.cPattern.hText);
            else if (node.Value.type.Contains("isFomular"))
              tr.Append(node.Value.cPattern.hText);
            tr.Append("</td>");
          }
          else if (node.Value.type.Contains("isAutoGen"))
          {
            tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
            tr.Append(node.Value.cChild);
            tr.Append(">");
            tr.Append(node.Value.cRef.hRefText);
            tr.Append("</td>");
          }
          else if (node.Children.Count > 0)
          {
            int mLevel = node.Children[0].Value.mLevel;
            if (node.Value.mLevel == mLevel - 1)
            {
              tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
              tr.Append(node.Value.cChild);
              tr.Append(">");
              tr.Append(node.Value.cRef.hRefText);
              tr.Append("</td>");
            }
            else
            {
              int num = mLevel - node.Value.mLevel;
              tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
              tr.Append(node.Value.cChild);
              tr.Append(" rowspan=");
              tr.Append(num);
              tr.Append(">");
              tr.Append(node.Value.cRef.hRefText);
              tr.Append("</td>");
            }
          }
        }
        else if (node.Value.type.Contains("isAutoGen"))
        {
          tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
          tr.Append(node.Value.cChild);
          tr.Append(">");
          tr.Append(node.Value.cRef.hRefText);
          tr.Append("</td>");
        }
        else if (node.Value.isLeaf)
        {
          int num = Level - node.Value.mLevel;
          tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
          tr.Append(node.Value.cChild);
          tr.Append(" rowspan=");
          tr.Append(num);
          tr.Append(">");
          tr.Append(node.Value.cRef.hRefText);
          tr.Append("</td>");
        }
        else if (node.Children.Count > 0)
        {
          int mLevel = node.Children[0].Value.mLevel;
          if (node.Value.mLevel == mLevel - 1)
          {
            tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
            tr.Append(node.Value.cChild);
            tr.Append(">");
            tr.Append(node.Value.cRef.hRefText);
            tr.Append("</td>");
          }
          else
          {
            int num = mLevel - node.Value.mLevel;
            tr.Append("<td class=\"" + this.rptTDHeaderCSS + "\" align=center colspan=");
            tr.Append(node.Value.cChild);
            tr.Append(" rowspan=");
            tr.Append(num);
            tr.Append(">");
            tr.Append(node.Value.cRef.hRefText);
            tr.Append("</td>");
          }
        }
      }
      else
      {
        for (int index = 0; index < node.Children.Count; ++index)
          this.Build(node.Children[index], curLevel, Level, ref tr);
      }
    }

    public void FindGroupBy(
      List<gcRptItem> list,
      int[] arrPos,
      int curIndex,
      ref int from,
      ref int to)
    {
      if (curIndex >= arrPos.Length)
        return;
      int index1 = from;
      while (index1 < to)
      {
        int arrPo = arrPos[curIndex];
        gcRptItem gcRptItem = new gcRptItem();
        gcRptItem.mValue = new string[this.cCols];
        gcRptItem.mPosData = arrPo;
        gcRptItem.strContent = this.mStrShowContent[0];
        gcRptItem.cssClass = "rptTD";
        gcRptItem.cssClassShowName = "rptTD";
        gcRptItem.cssValueClass = "rptTD";
        for (int index2 = 0; index2 < this.cCols; ++index2)
          gcRptItem.arrArgSumary.Add(this.mArrArgSumary[index2]);
        bool flag = false;
        int from1 = index1;
        int to1 = index1;
        while (!flag)
        {
          string str = (string) this.mData[index1][gcRptItem.mPosData];
          gcRptItem.arrIndexData.Add(index1);
          ++index1;
          ++to1;
          if (index1 < to)
          {
            if (str != (string) this.mData[index1][gcRptItem.mPosData])
              flag = true;
          }
          else
            flag = true;
          if (flag)
          {
            gcRptItem.from = from1;
            gcRptItem.to = to1;
            list.Add(gcRptItem);
          }
        }
        gcRptItem.from = from1;
        gcRptItem.to = to1;
        if (curIndex < arrPos.Length)
        {
          gcRptItem.list = new List<gcRptItem>();
          this.FindGroupBy(gcRptItem.list, arrPos, curIndex + 1, ref from1, ref to1);
        }
      }
    }

    public void AddGroupRow(ref StringBuilder table, gcRptItem item, int cCountCols)
    {
      table.Append("<tr class=\"rptContentGroupBy\">");
      table.Append("<td class=\"rptTDContentGroupBy\" colspan=");
      table.Append(this.mGobalGroupRowFisrt.ToString());
      table.Append(">");
      table.Append(item.strContent);
      table.Append("</td>");
      for (int index = 0; index < cCountCols - this.mGobalGroupRowFisrt; ++index)
        table.Append("<td class=\"rptTDContentGroupBy\" >&nbsp;</td>");
      table.Append("</tr>");
    }

    public void AddParentMakup(
      ref StringBuilder table,
      gcRptItem item,
      int cCountCols,
      object[] a,
      int[] arrPos,
      int curIndex,
      bool bAddSubSub)
    {
      if (curIndex == 0 && item.strContent != string.Empty)
        this.AddGroupRow(ref table, item, cCountCols);
      if (curIndex == 0)
      {
        table.Append("<tr>");
        if (this.bShowSTT)
        {
          table.Append("<td class=\"rptTD\">");
          table.Append((string) a[0]);
          table.Append("</td>");
        }
      }
      string str1 = "<td class=\"rptTD\" rowspan=" + (object) item.arrIndexData.Count + ">";
      if (bAddSubSub)
        str1 = "<td class=\"rptTD\" rowspan=" + item.arrIndexData.Count.ToString() + ">";
      if (this.bShowSubSumary > 0 && item.list != null && item.list.Count > 1)
        str1 = "<td class=\"rptTD\" rowspan=" + (item.arrIndexData.Count + item.list.Count).ToString() + ">";
      table.Append(str1);
      string str2 = this.InterFormatDataNumBer((string) a[arrPos[curIndex]], this.mArrFormatNumber[arrPos[curIndex]]);
      table.Append(str2);
      table.Append("</td>");
    }

    public void AddChildMakup(
      ref StringBuilder table,
      gcRptItem item,
      int Row,
      int[] arrPos,
      int curIndex,
      object[] a,
      bool bAddSubSub)
    {
      if (curIndex == arrPos.Length)
        return;
      if (Row == item.from)
        this.AddParentMakup(ref table, item, this.cCols - arrPos.Length + curIndex, a, arrPos, curIndex, bAddSubSub);
      if (item.list == null)
        return;
      for (int index = 0; index < item.list.Count; ++index)
        this.AddChildMakup(ref table, item.list[index], Row, arrPos, curIndex + 1, a, bAddSubSub);
    }

    public string AddMakup(List<gcRptItem> list, int[] arrPos, int curIndex)
    {
      StringBuilder table = new StringBuilder();
      table.Append("");
      for (int index1 = 0; index1 < list.Count; ++index1)
      {
        gcRptItem gcRptItem1 = list[index1];
        int from = gcRptItem1.from;
        int to = gcRptItem1.to;
        for (int index2 = from; index2 < to; ++index2)
        {
          object[] a = this.mData[index2];
          if (index2 == from)
          {
            this.AddParentMakup(ref table, gcRptItem1, this.cCols, a, arrPos, curIndex, false);
          }
          else
          {
            table.Append("<tr>");
            if (this.bShowSTT)
            {
              table.Append("<td class=\"");
              table.Append(this.mArrCssForRow[index2]);
              table.Append("\">");
              table.Append((string) a[0]);
              table.Append("</td>");
            }
          }
          if (gcRptItem1.list != null)
          {
            for (int index3 = 0; index3 < gcRptItem1.list.Count; ++index3)
            {
              if (this.bShowSubSumary > 0)
              {
                if (gcRptItem1.list.Count > 1)
                  this.AddChildMakup(ref table, gcRptItem1.list[index3], index2, arrPos, curIndex + 1, a, true);
                else
                  this.AddChildMakup(ref table, gcRptItem1.list[index3], index2, arrPos, curIndex + 1, a, false);
              }
              else
                this.AddChildMakup(ref table, gcRptItem1.list[index3], index2, arrPos, curIndex + 1, a, false);
            }
          }
          for (int index3 = arrPos[arrPos.Length - 1] + 1; index3 < this.cCols; ++index3)
          {
            if (this.mArrRightStyle[index3] == 1)
            {
              table.Append("<td class=\"");
              table.Append(this.mArrRightStyleCss[index3]);
              table.Append("\">");
            }
            else
            {
              table.Append("<td class=\"");
              table.Append(this.mArrCssForRow[index2]);
              table.Append("\">");
            }
            if (this.isBIGDATA)
              table.Append((string) a[index3]);
            else
              table.Append(this.InterFormatDataNumBer((string) a[index3], this.mArrFormatNumber[index3]));
            table.Append("</td>");
          }
          table.Append("</tr>");
          if (this.bShowSubSumary > 0 && gcRptItem1.list.Count > 1)
          {
            for (int index3 = 0; index3 < gcRptItem1.list.Count; ++index3)
            {
              gcRptItem gcRptItem2 = gcRptItem1.list[index3];
              if (gcRptItem2.to - 1 == index2)
              {
                int mergForSubSumRowSub = this.mColMergForSubSumRowSub;
                if (this.SubRowSumGobal != null && this.SubRowSumGobal.posFunc != null)
                {
                  table.Append("<tr>");
                  table.Append("<td class=\"rptTD\"></td>");
                  for (int index4 = 2; index4 < this.cCols; ++index4)
                  {
                    if (this.SubRowSumGobal.posFunc[index4] > 0)
                    {
                      string input = gcRptItem2.mValue[index4];
                      if (input != null)
                      {
                        if (input.Contains("<"))
                        {
                          string[] strArray = Regex.Split(input, "<br/>");
                          for (int index5 = 0; index5 < strArray.Length; ++index5)
                            strArray[index5] = this.InterFormatDataNumBer(strArray[index5], this.mArrFormatNumber[index4]);
                          input = "";
                          for (int index5 = 0; index5 < strArray.Length; ++index5)
                          {
                            input += strArray[index5];
                            if (index5 < strArray.Length - 1)
                              input += "<br/>";
                          }
                        }
                        else
                          input = this.InterFormatDataNumBer(input, this.mArrFormatNumber[index4]);
                      }
                      table.Append("<td class=\"" + this.SubRowSumGobal.cssClass + "\">" + input + "</td>");
                    }
                    else if (this.SubRowSumGobal.position == index4)
                    {
                      if (mergForSubSumRowSub > 0)
                      {
                        --mergForSubSumRowSub;
                        table.Append("<td class=\"" + this.SubRowSumGobal.cssClassShowName + "\" colspan=" + (object) this.mColMergForSubSumRowSub + ">" + this.SubRowSumGobal.showName + "</td>");
                      }
                      else
                        table.Append("<td class=\"" + this.SubRowSumGobal.cssClassShowName + "\" >" + this.SubRowSumGobal.showName + "</td>");
                    }
                    else if (mergForSubSumRowSub > 0)
                      --mergForSubSumRowSub;
                    else
                      table.Append("<td class=\"" + this.SubRowSumGobal.cssClassShowName + "\">&nbsp;</td>");
                  }
                  table.Append("</tr>");
                  break;
                }
                break;
              }
            }
          }
        }
        int mergForSubSumRow = this.mColMergForSubSumRow;
        table.Append(this.PrintSumaryRow(gcRptItem1));
      }
      return table.ToString();
    }

    public string PrintSumaryRow(gcRptItem item)
    {
      StringBuilder stringBuilder = new StringBuilder();
      int mergForSubSumRow = this.mColMergForSubSumRow;
      if (item.strShowName != "IsEmpty" && item.arrArgSumary.Count > 0)
      {
        stringBuilder.Append("<tr>");
        for (int index = 0; index < this.cCols; ++index)
        {
          if (item.arrArgSumary[index] > 0)
          {
            string str = this.InterFormatDataNumBer(item.mValue[index], this.mArrFormatNumber[index]);
            stringBuilder.Append("<td class=\"");
            stringBuilder.Append(item.cssClass);
            stringBuilder.Append("\">");
            stringBuilder.Append(str);
            stringBuilder.Append("</td>");
          }
          else if (this.RowSumGobal.position == index)
          {
            if (mergForSubSumRow > 0)
            {
              stringBuilder.Append("<td class=\"");
              stringBuilder.Append(item.cssClassShowName);
              stringBuilder.Append("\" colspan=");
              stringBuilder.Append(mergForSubSumRow);
              stringBuilder.Append(">");
              stringBuilder.Append(item.strShowName);
              stringBuilder.Append("</td>");
              --mergForSubSumRow;
            }
            else
            {
              stringBuilder.Append("<td class=\"");
              stringBuilder.Append(item.cssClassShowName);
              stringBuilder.Append("\" >");
              stringBuilder.Append(item.strShowName);
              stringBuilder.Append("</td>");
            }
          }
          else if (mergForSubSumRow > 0)
          {
            --mergForSubSumRow;
          }
          else
          {
            stringBuilder.Append("<td class=\"");
            stringBuilder.Append(item.cssClassShowName);
            stringBuilder.Append("\">&nbsp;</td>");
          }
        }
        stringBuilder.Append("</tr>");
      }
      return stringBuilder.ToString();
    }

    public string InterFormatColGroup()
    {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.Append("<colgroup> ");
      for (int index = 0; index < this.cCols; ++index)
      {
        stringBuilder.Append("<col ");
        stringBuilder.Append(this.mColGroup[index]);
        stringBuilder.Append(" />");
      }
      stringBuilder.Append("</colgroup> ");
      return stringBuilder.ToString();
    }

    public string InterFormatDataNumBer(string value, int bFormat)
    {
      string str = value;
      if (value == null)
        return "0";
      if (value.Trim().Length < 1)
        return str;
      if (value.IndexOf('.') >= 0)
        return value;
      bool flag1 = false;
      if (str.Contains("$"))
      {
        str = str.Replace("$", "").Trim();
        flag1 = true;
        if (str.Length < 1)
          return value;
      }
      if (bFormat > 0)
      {
        bool flag2 = false;
        if (str[0] == '-')
        {
          str = str.Substring(1, value.Length - 1);
          flag2 = true;
        }
        if (str.Trim().Length > 3 && bFormat > 0)
        {
          for (int startIndex = str.Length - 3; startIndex > 0; startIndex -= 3)
            str = str.Insert(startIndex, this.mStrFormatNumber);
        }
        if (flag2)
          str = "-" + str;
      }
      if (flag1)
        str = "$ " + str;
      return str;
    }

    public string MakeSimpleTable()
    {
      StringBuilder stringBuilder = new StringBuilder();
      stringBuilder.Append("<table class=\"" + this.rptTableCSS + "\" cellspacing=0 border=1>");
      stringBuilder.Append(this.InterFormatColGroup());
      stringBuilder.Append(this.MakeExpertHeader(this.root, this.mMaxLevel));
      if (this.bShowIndexRow)
      {
        stringBuilder.Append("<tr>");
        for (int index = 0; index < this.cCols; ++index)
          stringBuilder.Append("<td class=\"rptTD\">(" + (object) index + ")</td>");
        stringBuilder.Append("</tr>");
      }
      if (this.bExtexntRow)
      {
        stringBuilder.Append("<tr>");
        stringBuilder.Append("<td class=\"" + this.ExtexntRowCSS + "\" colspan=" + (object) this.cCols + ">" + this.ExtexntRowValue + "</td>");
        stringBuilder.Append("</tr>");
      }
      int mergForSubSumRow = this.mColMergForSubSumRow;
      if (this.mShowSumPosition == 0 && this.RowSumGobal != null && this.RowSumGobal.posFunc != null)
      {
        stringBuilder.Append("<tr>");
        for (int index1 = 0; index1 < this.cCols; ++index1)
        {
          if (this.RowSumGobal.posFunc[index1] > 0)
          {
            string input = this.RowSumGobal.mValue[index1];
            string str;
            if (input.Contains("<"))
            {
              string[] strArray = Regex.Split(input, "<br/>");
              for (int index2 = 0; index2 < strArray.Length; ++index2)
                strArray[index2] = this.InterFormatDataNumBer(strArray[index2], this.mArrFormatNumber[index1]);
              str = "";
              for (int index2 = 0; index2 < strArray.Length; ++index2)
              {
                str += strArray[index2];
                if (index2 < strArray.Length - 1)
                  str += "<br/>";
              }
            }
            else
              str = this.InterFormatDataNumBer(input, this.mArrFormatNumber[index1]);
            stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClass + "\">" + str + "</td>");
          }
          else if (this.RowSumGobal.position == index1)
          {
            if (mergForSubSumRow > 0)
            {
              --mergForSubSumRow;
              stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClassShowName + "\" colspan=" + (object) this.mColMergForSubSumRow + ">" + this.RowSumGobal.showName + "</td>");
            }
            else
              stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClassShowName + "\" >" + this.RowSumGobal.showName + "</td>");
          }
          else if (mergForSubSumRow > 0)
            --mergForSubSumRow;
          else
            stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClassShowName + "\">&nbsp;</td>");
        }
        stringBuilder.Append("</tr>");
      }
      if (this.bShowGroupBy)
      {
        stringBuilder.Append(this.AddMakup(this.mListItem, this.mArrPos, 0));
      }
      else
      {
        for (int index1 = 0; index1 < this.mData.Count; ++index1)
        {
          stringBuilder.Append("<tr>");
          for (int index2 = 0; index2 < this.cCols; ++index2)
          {
            string str = "<td class=\"" + this.mArrCssForRow[index1] + "\">";
            if (this.mArrRightStyle.Count > 0 && this.mArrRightStyle[index2] == 1)
              str = "<td class=\"" + this.mArrRightStyleCss[index2] + "\">";
            stringBuilder.Append(str);
            if (this.isBIGDATA)
              stringBuilder.Append((string) this.mData[index1][index2]);
            else
              stringBuilder.Append(this.InterFormatDataNumBer((string) this.mData[index1][index2], this.mArrFormatNumber[index2]));
            stringBuilder.Append("</td>");
          }
          stringBuilder.Append("</tr>");
        }
      }
      if (this.mShowSumPosition == 1 && this.RowSumGobal != null && this.RowSumGobal.posFunc != null)
      {
        stringBuilder.Append("<tr>");
        for (int index1 = 0; index1 < this.cCols; ++index1)
        {
          if (this.RowSumGobal.posFunc[index1] > 0)
          {
            string input = this.RowSumGobal.mValue[index1];
            string str;
            if (input.Contains("<"))
            {
              string[] strArray = Regex.Split(input, "<br/>");
              for (int index2 = 0; index2 < strArray.Length; ++index2)
                strArray[index2] = this.InterFormatDataNumBer(strArray[index2], this.mArrFormatNumber[index1]);
              str = "";
              for (int index2 = 0; index2 < strArray.Length; ++index2)
              {
                str += strArray[index2];
                if (index2 < strArray.Length - 1)
                  str += "<br/>";
              }
            }
            else
              str = this.InterFormatDataNumBer(input, this.mArrFormatNumber[index1]);
            stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClass + "\">" + str + "</td>");
          }
          else if (this.RowSumGobal.position == index1)
          {
            if (mergForSubSumRow > 0)
            {
              --mergForSubSumRow;
              stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClassShowName + "\" colspan=" + (object) this.mColMergForSubSumRow + ">" + this.RowSumGobal.showName + "</td>");
            }
            else
              stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClassShowName + "\" >" + this.RowSumGobal.showName + "</td>");
          }
          else if (mergForSubSumRow > 0)
            --mergForSubSumRow;
          else
            stringBuilder.Append("<td class=\"" + this.RowSumGobal.cssClassShowName + "\">&nbsp;</td>");
        }
        stringBuilder.Append("</tr>");
      }
      for (int index1 = 0; index1 < this.mListTailItem.Count; ++index1)
      {
        gcRptTailItem gcRptTailItem = this.mListTailItem[index1];
        stringBuilder.Append("<tr>");
        if (gcRptTailItem.ColSpan == this.cCols)
          stringBuilder.Append("<td class=\"" + gcRptTailItem.cssClassFormName + "\" colspan=" + gcRptTailItem.ColSpan.ToString() + ">" + gcRptTailItem.strFormName + "</td>");
        else
          stringBuilder.Append("<td class=\"" + gcRptTailItem.cssClassFormName + "\" colspan=" + gcRptTailItem.ColSpan.ToString() + ">" + gcRptTailItem.strFormName + "</td><td class=\"" + gcRptTailItem.cssValueClass + "\">" + gcRptTailItem.Value + "</td>");
        if (gcRptTailItem.ColSpan < this.cCols - 1)
        {
          for (int index2 = 0; index2 < this.cCols - gcRptTailItem.ColSpan - 1; ++index2)
          {
            stringBuilder.Append("<td class=\"");
            stringBuilder.Append(gcRptTailItem.cssClassFormName);
            stringBuilder.Append("\">&nbsp;</td>");
          }
        }
        stringBuilder.Append("</tr>");
      }
      stringBuilder.Append("</table>");
      return stringBuilder.ToString();
    }

    public void ResetValue(TreeNode<gcRptColumn> node)
    {
      node.Value.value = 0.0;
      if (node == null || node.Children.Count <= 0)
        return;
      for (int index = 0; index < node.Children.Count; ++index)
        this.ResetValue(node.Children[index]);
    }

    public void GoStepDepth(TreeNode<gcRptColumn> node, object[] row, int[] p, string value)
    {
      for (int index = 0; index < node.Children.Count; ++index)
      {
        if (node.Children[index].Value.Id == p[node.Children[index].Value.mLevel])
        {
          if (node.Children[index].Value.isLeaf)
          {
            row[node.Children[index].Value.Index] = (object) value;
            node.Children[index].Value.value = double.Parse(value);
          }
          else
            this.GoStepDepth(node.Children[index], row, p, value);
        }
      }
    }
  }
}
