// Decompiled with JetBrains decompiler
// Type: gcLibAdmin.gcRptTailItem
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;
using System.Data;
using zgcLibCore;

namespace gcLibAdmin
{
    public class TreeNodeList<T> : List<TreeNode<T>>
    {
        public TreeNode<T> Parent;

        public TreeNodeList(TreeNode<T> Parent) => this.Parent = Parent;

        public new TreeNode<T> Add(TreeNode<T> Node)
        {
            base.Add(Node);
            Node.Parent = this.Parent;
            return Node;
        }

        public TreeNode<T> Add(T Value) => this.Add(new TreeNode<T>(Value));

        public override string ToString() => "Count=" + this.Count.ToString();
    }
    public interface ITreeNodeAware<T>
    {
        TreeNode<T> Node { get; set; }
    }
    public class gcRptParentDetailTable
    {
        public string strShowName;
        public string strContent;
        public List<gcRptTableItem> tables;

        public gcRptParentDetailTable()
        {
            this.strContent = "";
            this.strShowName = "Report Genaration";
            this.tables = new List<gcRptTableItem>();
        }

        public void BuildAll()
        {
            this.strContent += "<table cellspacing=1>";
            for (int index1 = 0; index1 < this.tables.Count; ++index1)
            {
                string str = "";
                gcRptTableItem table = this.tables[index1];
                if (table.isShowContent > 0)
                {
                    table.table.FillData();
                    for (int index2 = 0; index2 < table.table.mData.Count; ++index2)
                    {
                        double num1 = double.Parse((string)table.table.mData[index2][5]);
                        double num2 = double.Parse((string)table.table.mData[index2][6]);
                        double num3 = num1 * num2 / 100.0;
                        double num4 = num1 - num3;
                        table.table.mData[index2][8] = (object)num3.ToString();
                        table.table.mData[index2][9] = (object)num4.ToString();
                    }
                    str = table.table.MakeSimpleTable();
                }
                this.strContent += "<tr>";
                this.strContent += "<td>";
                this.strContent += table.strContent;
                this.strShowName += "</td>";
                this.strContent += "</tr>";
                if (table.isShowContent > 0)
                {
                    this.strContent += "<tr>";
                    this.strContent += "<td>";
                    this.strContent += str;
                    this.strContent += "</td>";
                    this.strContent += "</tr>";
                }
            }
            this.strContent += "</table>";
        }
    }
    public class gcRptTableItem
    {
        public int isShowContent;
        public string strShowName;
        public string strTypeReport;
        public string strContent;
        public string strTableName;
        public gcRptTable table;

        public gcRptTableItem()
        {
            this.isShowContent = 1;
            this.strContent = "";
            this.strShowName = "Tổng cộng";
            this.strTypeReport = "isSample";
        }
    }
    public class gcRptItem
    {
        public int position;
        public int from;
        public int to;
        public string strShowName;
        public int mPosData;
        public string strContent;
        public List<int> arrIndexData;
        public List<gcRptItem> list;
        public List<int> arrArgSumary;
        public string[] mValue;
        public string cssClass;
        public string cssClassShowName;
        public string cssValueClass;

        public gcRptItem()
        {
            this.from = 0;
            this.to = 0;
            this.mPosData = -1;
            this.strContent = "";
            this.strShowName = "Tổng cộng";
            this.list = new List<gcRptItem>();
            this.arrIndexData = new List<int>();
            this.arrArgSumary = new List<int>();
            this.cssClass = "";
            this.cssClassShowName = "";
            this.cssValueClass = "";
            this.position = 0;
        }
    }
    public class TreeNode<T> : IDisposable
    {
        private TreeNode<T>.TreeTraversalType _DisposeTraversal = TreeNode<T>.TreeTraversalType.BottomUp;
        private bool _IsDisposed;
        private TreeNode<T> _Parent;
        private TreeNodeList<T> _Children;
        private T _Value;

        public TreeNode() => this.Parent = (TreeNode<T>)null;

        public TreeNode(T Value)
        {
            this.Value = Value;
            this.Parent = (TreeNode<T>)null;
            this.Children = new TreeNodeList<T>(this);
        }

        public TreeNode(T Value, TreeNode<T> Parent)
        {
            this.Value = Value;
            this.Parent = Parent;
            this.Children = new TreeNodeList<T>(this);
        }

        public int Depth
        {
            get
            {
                int num = 0;
                TreeNode<T> treeNode = this;
                while (treeNode.Parent != null)
                {
                    treeNode = treeNode.Parent;
                    ++num;
                }
                return num;
            }
        }

        public TreeNode<T>.TreeTraversalType DisposeTraversal
        {
            get => this._DisposeTraversal;
            set => this._DisposeTraversal = value;
        }

        public bool IsDisposed => this._IsDisposed;

        public void Dispose()
        {
            this.CheckDisposed();
            this.OnDisposing();
            if ((object)this.Value is IDisposable)
            {
                if (this.DisposeTraversal == TreeNode<T>.TreeTraversalType.BottomUp)
                {
                    foreach (TreeNode<T> child in (List<TreeNode<T>>)this.Children)
                        child.Dispose();
                }
              ((object)this.Value as IDisposable).Dispose();
                if (this.DisposeTraversal == TreeNode<T>.TreeTraversalType.TopDown)
                {
                    foreach (TreeNode<T> child in (List<TreeNode<T>>)this.Children)
                        child.Dispose();
                }
            }
            this._IsDisposed = true;
        }

        public event EventHandler Disposing;

        protected void OnDisposing()
        {
            if (this.Disposing == null)
                return;
            this.Disposing((object)this, EventArgs.Empty);
        }

        public void CheckDisposed()
        {
            if (this.IsDisposed)
                throw new ObjectDisposedException(this.GetType().Name);
        }

        public TreeNode<T> Parent
        {
            get => this._Parent;
            set
            {
                if (value == this._Parent)
                    return;
                if (this._Parent != null)
                    this._Parent.Children.Remove(this);
                if (value != null && !value.Children.Contains(this))
                    value.Children.Add(this);
                this._Parent = value;
            }
        }

        public TreeNode<T> Root
        {
            get
            {
                TreeNode<T> treeNode = this;
                while (treeNode.Parent != null)
                    treeNode = treeNode.Parent;
                return treeNode;
            }
        }

        public TreeNodeList<T> Children
        {
            get => this._Children;
            private set => this._Children = value;
        }

        public T Value
        {
            get => this._Value;
            set
            {
                this._Value = value;
                if ((object)this._Value == null || !((object)this._Value is ITreeNodeAware<T>))
                    return;
                ((object)this._Value as ITreeNodeAware<T>).Node = this;
            }
        }

        public enum TreeTraversalType
        {
            TopDown,
            BottomUp,
        }
    }
    public class Task : ITreeNodeAware<Task>
    {
        public bool Complete = false;
        private TreeNode<Task> _Node;

        public TreeNode<Task> Node
        {
            get => this._Node;
            set => this._Node = value;
        }

        public void MarkComplete()
        {
            foreach (TreeNode<Task> child in (List<TreeNode<Task>>)this.Node.Children)
                child.Value.MarkComplete();
            this.Complete = true;
        }
    }
    public class Tree<T> : TreeNode<T>
    {
        public Tree()
        {
        }
        public Tree(T RootValue) => this.Value = RootValue;
    }
    public class gcRptPattern
    {
        public string orderBy;
        public int bGroupby;
        public string hField;
        public string hValue;
        public string hText;
        public string hTable;
        public string hWhere;
        public string hSql;
        public string hCondition;
        public string hValueCondition;
        public string hValueConditionFormat;

        public gcRptPattern()
        {
            this.hField = "";
            this.hText = "";
            this.hTable = "";
            this.hWhere = "";
            this.hSql = "";
            this.hCondition = "";
            this.hValueCondition = "";
            this.bGroupby = 0;
            this.orderBy = "";
        }
    }
    public class gcRange
    {
        public int a;
        public int b;

        public gcRange()
        {
            this.a = 0;
            this.b = this.a + 1;
        }
    }
    public class gcRptRow
    {
        public string type;
        public int posShow;
        public int position;
        public string cssClass;
        public string cssClassShowName;
        public string cssValueClass;
        public string showName;
        public int countCols;
        public gcRptColumn[] cols;
        public int[] posFunc;
        public string[] mFunc;
        public string[] mValue;

        public gcRptRow()
        {
            this.type = "isData";
            this.cssClass = "";
            this.cssClassShowName = "";
            this.cssValueClass = "";
            this.position = 0;
            this.posFunc = (int[])null;
            this.showName = "Tổng cộng";
        }
    }
    public class gcRptTailItem
  {
    public string strFormName = "";
    public string Value = "";
    public int ColSpan = 1;
    public string cssClassFormName = "rptTD";
    public string cssValueClass = "rptTD";

    public gcRptTailItem()
    {
      this.strFormName = "";
      this.Value = "";
      this.ColSpan = 1;
      this.cssClassFormName = "rptTD";
      this.cssValueClass = "rptTD";
    }
  }
    public class gcRptColumn
    {
        public string datatype;
        public double Calvalue;
        public int mCalfunLevel;
        public double value;
        public int cChild;
        public int cVisit;
        public string funcStr;
        public int Id;
        public int Index;
        public bool isLeaf;
        public int mLevel;
        public int mSize;
        public gcRange range;
        public string type;
        public int iNotFillData;
        public gcRptRef cRef;
        public gcRptPattern[] arrAutoColunm;
        public gcRptPattern cPattern;
        public string formular;

        public gcRptColumn()
        {
            this.type = "isFix";
            this.isLeaf = false;
            this.Id = -1;
            this.cPattern = new gcRptPattern();
            this.cRef = new gcRptRef();
            this.mLevel = -1;
            this.range = new gcRange();
            this.funcStr = "SUM";
            this.cVisit = 0;
            this.cChild = 0;
            this.value = 0.0;
            this.Calvalue = 0.0;
            this.mCalfunLevel = -1;
            this.datatype = "nvarchar";
        }

        public void BuildAutoGen(string server)
        {
            if (!this.type.Contains("isAutoGen") || this.cRef.hRefTable == string.Empty)
                return;
            string query = " SELECT * FROM " + this.cRef.hRefTable;
            if (this.cRef.hRefCondition != string.Empty)
                query = " SELECT * FROM " + this.cRef.hRefTable + " where Id IN " + this.cRef.hRefCondition;
            DataTable dataTable = zgcHelper.GetDataSet(query, server).Tables[0];
            if (dataTable.Rows.Count > 0)
            {
                this.arrAutoColunm = new gcRptPattern[dataTable.Rows.Count];
                for (int index = 0; index < dataTable.Rows.Count; ++index)
                {
                    this.arrAutoColunm[index].hText = (string)dataTable.Rows[index][this.cRef.hRefField];
                    this.arrAutoColunm[index].hValue = ((int)dataTable.Rows[index]["Id"]).ToString();
                    this.arrAutoColunm[index].hField = "Id";
                    this.arrAutoColunm[index].hTable = this.cRef.hRefTable;
                }
            }
        }
    }

    public class gcRptRef
    {
        public string orderBy;
        public string hRefField;
        public string hRefValue;
        public string hRefText;
        public string hRefTable;
        public string hRefWhere;
        public string hRefSql;
        public string hRefCondition;
        public string hGroupby;
        public string hRefValueCondition;

        public gcRptRef()
        {
            this.hRefField = "";
            this.hRefText = "";
            this.hRefTable = "";
            this.hRefWhere = "";
            this.hRefSql = "";
            this.hRefCondition = "";
            this.hGroupby = "";
            this.orderBy = "";
        }
    }
}
