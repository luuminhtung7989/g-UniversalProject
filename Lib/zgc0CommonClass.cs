using System;
using System.Data;
using System.Configuration;
using System.Web;

using System.Data.Common;
using System.Collections.Generic;
using System.Data.SqlClient;
using gcLibAdmin;
using zgc0LibAdmin;
/// <summary>
/// Summary description for Common
/// </summary>
public class zgc0CommonClass
{
    string strServer = "";
    public zgc0CommonClass()
	{
		//
		// TODO: Add constructor logic here
		//
	}
    public List<Config_SoDoGheOverr> GetInfoGhe()
    {
        string sql = "Select * from tbl_Config_SoDoGhe where LoaiXeId = 3";
        DataTable dtSoDoGhe = zgc0HelperSecurity.GetDataTable(sql, strServer);
        List<Config_SoDoGheOverr> list = new List<Config_SoDoGheOverr>();
        for (int i = 0; i < dtSoDoGhe.Rows.Count; i++)
        {
            Config_SoDoGheOverr newElement = new Config_SoDoGheOverr(dtSoDoGhe.Rows[i]);
            list.Add(newElement);
        }
        return list;
    }

    public List<Config_SoDoGheOverr> GetInfoGhe(int LoaiXeId)
    {
        string sql = "Select * from tbl_Config_SoDoGhe where LoaiXeId = " + LoaiXeId;
        DataTable dtSoDoGhe = zgc0HelperSecurity.GetDataTable(sql, strServer);
        List<Config_SoDoGheOverr> list = new List<Config_SoDoGheOverr>();
        for (int i = 0; i < dtSoDoGhe.Rows.Count; i++)
        {
            Config_SoDoGheOverr newElement = new Config_SoDoGheOverr(dtSoDoGhe.Rows[i]);
            list.Add(newElement);
        }
        return list;
    }
    public List<Config_SoDoGheOverr> GetInfoGhe(int tuyen, DateTime ngaychay, string giochay, int loaixe)
    {
        string sql = "Select * from tbl_Config_SoDoGhe where LoaiXeId = " + loaixe;
        DataTable dtSoDoGhe = zgc0HelperSecurity.GetDataTable(sql, strServer);
        List<Config_SoDoGheOverr> list = new List<Config_SoDoGheOverr>();
        for (int i = 0; i < dtSoDoGhe.Rows.Count; i++)
        {
            Config_SoDoGheOverr newElement = new Config_SoDoGheOverr(dtSoDoGhe.Rows[i]);
            list.Add(newElement);
        }
        string sqlChuyen = "Select * from tbl_ChuyenDi where TuyenId = " + tuyen + " AND GioKhoiHanh = '" + giochay + "' AND NgayKhoiHanh = '" + ngaychay + "'";
        DataTable dtChuyen = zgc0HelperSecurity.GetDataTable(sqlChuyen, strServer);
        if (dtChuyen.Rows.Count > 0)
        {
            string ChuyenId = dtChuyen.Rows[0]["Id"].ToString();

            string sqlVeBan = "select * from tbl_VeBan where ChuyenId = " + ChuyenId;
            DataTable dtVeBan = zgc0HelperSecurity.GetDataTable(sqlVeBan, strServer);

            for (int i = 0; i < list.Count; i++)
            {
                list[i].Data = new string[] { "", "", "", "", "" };
                string[] info = list[i].Info.Split(',');
                for (int j = 0; j < dtVeBan.Rows.Count; j++)
                {
                    string Ghe = dtVeBan.Rows[j]["SoGhe"].ToString();
                    for (int k = 0; k < info.Length; k++)
                    {
                        if (Ghe == info[k].ToString())
                        {
                            list[i].Data.SetValue(dtVeBan.Rows[j]["TenKhach"].ToString(), k);
                        }
                    }
                }
            }
        }
        return list;
    }
    public List<Config_SoDoGheOverr> GetInfoGhe(int chuyenId, int loaixe)
    {
        string sqlChuyen = "Select * from tbl_ChuyenDi where Id = " + chuyenId.ToString() ;
        DataTable dtChuyen = zgc0HelperSecurity.GetDataTable(sqlChuyen, strServer);

        string sql = "Select * from tbl_Config_SoDoGhe where LoaiXeId = " + loaixe;
        DataTable dtSoDoGhe = zgc0HelperSecurity.GetDataTable(sql, strServer);
        List<Config_SoDoGheOverr> list = new List<Config_SoDoGheOverr>();
        for (int i = 0; i < dtSoDoGhe.Rows.Count; i++)
        {
            Config_SoDoGheOverr newElement = new Config_SoDoGheOverr(dtSoDoGhe.Rows[i]);
            list.Add(newElement);
        }
        
        if (dtChuyen.Rows.Count > 0)
        {
            string sqlVeBan = "select * from tbl_VeBan where ChuyenId = " + chuyenId.ToString() + " AND (isCanCel is NULL OR isCancel = 'False')";
            DataTable dtVeBan = zgc0HelperSecurity.GetDataTable(sqlVeBan, strServer);

            for (int i = 0; i < list.Count; i++)
            {
                list[i].Data = new string[] { "", "", "", "", "" };
                string[] info = list[i].Info.Split(',');
                for (int j = 0; j < dtVeBan.Rows.Count; j++)
                {
                    string Ghe = dtVeBan.Rows[j]["SoGhe"].ToString();
                    for (int k = 0; k < info.Length; k++)
                    {
                        if (Ghe == info[k].ToString())
                        {
                            string istratien = "";
                            if (dtVeBan.Rows[j]["isThanhToan"].ToString() == "True")
                            {
                                istratien = "(Đã thu tiền)";
                            }
                            string data = dtVeBan.Rows[j]["TenKhach"].ToString() + Environment.NewLine + " - " + dtVeBan.Rows[j]["DiaDiemDon"].ToString() 
                                + Environment.NewLine + " (" + dtVeBan.Rows[j]["Phone"].ToString() + ")"
                                + "<div style=\"color:#41762a;font-size:8pt;\">" + string.Format("{0: ###,###,###.##}", dtVeBan.Rows[j]["GiaVe"]) + " " + istratien + "</div>";
                            list[i].Data.SetValue(data, k);
                        }
                    }
                }
            }
        }
        return list;
    }
    public string BuildChildDiv(int GheNo,string Data,int chuyenId)
    {
        string DivContent = "";
        if (GheNo == 0)
        {
            DivContent += "<div id=\"Ghe0\" class=\"divDriverChair\">{0}</div>";
            DivContent = string.Format(DivContent, "Tài xế");
        }
        else if (GheNo < 0)
        {
            if (Data != string.Empty)
            {
                DivContent = "<div id=\"GheSub{0}\" class=\"divSubBusyChair\" onclick='BanVe(" + chuyenId.ToString() + "," + GheNo.ToString() + ")'>{1}<div class=\"divInfo\">{2}</div></div>";
                DivContent = string.Format(DivContent, Math.Abs(GheNo), "Sub" + Math.Abs(GheNo),Data);
            }
            else
            {
                DivContent = "<div id=\"GheSub{0}\" class=\"divSubChair\" onclick='BanVe(" + chuyenId.ToString() + "," + GheNo.ToString() + ")'>{1}</div>";
                DivContent = string.Format(DivContent, Math.Abs(GheNo), "Sub" + Math.Abs(GheNo));
            }
        }
        else
        {
            if (Data != string.Empty)
            {
                DivContent = "<div id=\"Ghe{0}\" class=\"divBusyChair\" onclick='BanVe(" + chuyenId.ToString() + "," + GheNo.ToString() + ")'>{1}<div class=\"divInfo\">{2}</div></div>";
                DivContent = string.Format(DivContent, GheNo, GheNo, Data);
            }
            else
            {
                DivContent = "<div id=\"Ghe{0}\" class=\"divFreeChair\" onclick='BanVe(" + chuyenId.ToString() + "," + GheNo.ToString() + ")'>{1}</div>";
                DivContent = string.Format(DivContent, GheNo, GheNo);
            }
        }
        return DivContent;
    }
    public string BuildButtonXe(string BienSoXe,int chuyenId)
    {
        string Content = "";
        string _xeId = "";
        if (BienSoXe != "0")
        {
            string sqlXe = "Select * from tbl_DM_Xe where BienSo = '" + BienSoXe + "'";
            DataTable dtXe = zgc0HelperSecurity.GetDataTable(sqlXe, strServer);
            _xeId = dtXe.Rows[0]["Id"].ToString();
            Content = "<div id=\"{0}\" class=\"divButtonXe\"><input type=\"button\" value=\"{0}\" runat=\"server\" class=\"buttonUpdate2\" onclick='LoadSoDoByXe(" + chuyenId.ToString() + "," + _xeId + ")'/></div>";
        }
        else
        {
            Content = "<div id=\"{0}\" class=\"divButtonXe\"><input type=\"button\" value=\"{0}\" runat=\"server\" class=\"buttonUpdate2\" onclick='LoadSoDoByXe(" + chuyenId.ToString() + "," + BienSoXe + ")'/></div>";
        }
        Content = string.Format(Content,BienSoXe);

        return Content;
    }

    public float GetGiaVeByTuyen(int tuyenId)
    {
        string sqlGiaVe = "select Top 1 GiaVe from tbl_DM_Ve where TuyenId = " + tuyenId.ToString() + " Order by NgayApDung Desc" ;
        DataTable dtGiaVe = zgc0HelperSecurity.GetDataTable(sqlGiaVe, strServer);
        float GiaVe = 0;
        if (dtGiaVe.Rows.Count > 0)
        {
            GiaVe = float.Parse(dtGiaVe.Rows[0]["Gia"].ToString());
        }
        return GiaVe;
    }
    public float GetGiaVeByChuyen(int chuyenId)
    {
        string sqlTuyen = "select * from tbl_ChuyenDi where Id = " + chuyenId.ToString();
        DataTable dtTuyen = zgc0HelperSecurity.GetDataTable(sqlTuyen, strServer);
        string tuyenId = "";
        if (dtTuyen.Rows.Count > 0)
        {
            tuyenId = dtTuyen.Rows[0]["TuyenId"].ToString();    
        }
        string sqlGiaVe = "select Top 1 Gia from tbl_DM_Ve where TuyenId = " + tuyenId + " Order by NgayApDung Desc";
        DataTable dtGiaVe = zgc0HelperSecurity.GetDataTable(sqlGiaVe, strServer);
        float GiaVe = 0;
        if (dtGiaVe.Rows.Count > 0)
        {
            GiaVe = float.Parse(dtGiaVe.Rows[0]["Gia"].ToString());
        }
        return GiaVe;
    }

}
public class Config_SoDoGheOverr
{
    private int? _Id = null;
	private int? _LoaiXeId = null;
	private string _HangGhe = null;
	private int? _HangGheNo = null;
	private string _Info = null;
	public string IdOut = null;
    public string[] Data = null;

 	public Config_SoDoGheOverr()
	{
	}
	public Config_SoDoGheOverr(SqlDataReader reader)
	{
		_Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
		_LoaiXeId = (reader.IsDBNull(reader.GetOrdinal("LoaiXeId"))) ? (int?)null : Convert.ToInt32(reader["LoaiXeId"]);
		_HangGhe = (reader.IsDBNull(reader.GetOrdinal("HangGhe"))) ? (string)null : Convert.ToString(reader["HangGhe"]);
		_HangGheNo = (reader.IsDBNull(reader.GetOrdinal("HangGheNo"))) ? (int?)null : Convert.ToInt32(reader["HangGheNo"]);
		_Info = (reader.IsDBNull(reader.GetOrdinal("Info"))) ? (string)null : Convert.ToString(reader["Info"]);
 	}
    public Config_SoDoGheOverr(DataRow row)
	{
		_Id = (row.IsNull("Id"))? (int?)null : Convert.ToInt32(row["Id"]);
		_LoaiXeId = (row.IsNull("LoaiXeId"))? (int?)null : Convert.ToInt32(row["LoaiXeId"]);
		_HangGhe = (row.IsNull("HangGhe"))? (string)null : Convert.ToString(row["HangGhe"]);
		_HangGheNo = (row.IsNull("HangGheNo"))? (int?)null : Convert.ToInt32(row["HangGheNo"]);
		_Info = (row.IsNull("Info"))? (string)null : Convert.ToString(row["Info"]);
 	}
 
  	public int? Id
	{
	    get{return _Id;}
	    set{if (this._Id != value) _Id = value;}
	}
	public int? LoaiXeId
	{
	    get{return _LoaiXeId;}
	    set{if (this._LoaiXeId != value) _LoaiXeId = value;}
	}
	public string HangGhe
	{
	    get{return _HangGhe;}
	    set{if (this._HangGhe != value) _HangGhe = value;}
	}
	public int? HangGheNo
	{
	    get{return _HangGheNo;}
	    set{if (this._HangGheNo != value) _HangGheNo = value;}
	}
	public string Info
	{
	    get{return _Info;}
	    set{if (this._Info != value) _Info = value;}
	}
}