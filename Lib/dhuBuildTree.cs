using System;
using System.Data;
using System.Configuration;
using System.Web;

using System.Collections.Generic;

/// <summary>
/// Summary description for dhuBuildTree
/// </summary>
public class dhuBuildTree
{
	public dhuBuildTree()
	{
		//
		// TODO: Add constructor logic here
		//
	}
}
public class Tree
{
    Node root;
    string tbl_Config_Detail = "tbl_Config_Report_Detail";
    string wv_Name = "dhu_TC_NM_BangChamCong_Final";

}
public class Node
{
    public int Id;
    public string Name;
    public string ColName;
    public string Where;
    public string Status;//isLeaf;isRoot;
    public List<Node> listChildNode;
    public Node() {
        Id = 0;
        ColName = "";
        Name = "";
        Where = "";
        listChildNode = new List<Node>();
    }
    public Node(int _Id,string _Name,string _ColName)
    {
        Id = _Id;
        Name = _Name;
        ColName = _ColName;
        Where = "";
        listChildNode = new List<Node>();
    }
}
