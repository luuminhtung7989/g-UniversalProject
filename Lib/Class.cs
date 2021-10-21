using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Collections;
using System.Data.OleDb;
using System.Web;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using System.Data.Common;
//using System.Web.SessionState;

namespace zgc0LibAdmin
{
    /// <summary>
    /// Summary description for zgc0Helper.
    /// </summary>
    public class zgcl_gcGobal_STOCK_gcProduct_Input05
    {
        public zgcl_gcGobal_STOCK_gcProduct_Input05()
        {
            //
            // TODO: Add constructor logic here
            //
        }
        public zgcl_gcGobal_STOCK_gcProduct_Input05(DataRow myRow, bool isHasRowNum)
        {
            //
            // TODO: Add constructor logic here
            //
            Id = (myRow["Id"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["Id"]);
            Ten = (myRow["Ten"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Ten"]);
            SoCT = (myRow["SoCT"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["SoCT"]);
            NgayLap = (myRow["NgayLap"] == DBNull.Value) ? (DateTime?)null : Convert.ToDateTime(myRow["NgayLap"]);
            MSHDId = (myRow["MSHDId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["MSHDId"]);
            NCCId = (myRow["NCCId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["NCCId"]);
            TienThue = (myRow["TienThue"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["TienThue"]);
            TongTien = (myRow["TongTien"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["TongTien"]);
            NhanvienId = (myRow["NhanvienId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["NhanvienId"]);
            DaTra = (myRow["DaTra"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["DaTra"]);
            NoLai = (myRow["NoLai"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["NoLai"]);
            KhoXuatId = (myRow["KhoXuatId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["KhoXuatId"]);
            KhoNhapId = (myRow["KhoNhapId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["KhoNhapId"]);
            DienGiai = (myRow["DienGiai"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["DienGiai"]);
            StatusId = (myRow["StatusId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["StatusId"]);
            Keep01 = (myRow["Keep01"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep01"]);
            Keep02 = (myRow["Keep02"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep02"]);
            Keep03 = (myRow["Keep03"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep03"]);
            Keep04 = (myRow["Keep04"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep04"]);
            Space01 = (myRow["Space01"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["Space01"]);
            Space02 = (myRow["Space02"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Space02"]);
            Space03 = (myRow["Space03"] == DBNull.Value) ? (DateTime?)null : Convert.ToDateTime(myRow["Space03"]);
            SpaceId = (myRow["SpaceId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["SpaceId"]);
            isPrgAccountId = (myRow["isPrgAccountId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgAccountId"]);
            isPrgInUse = (myRow["isPrgInUse"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgInUse"]);
            isPrgCreateDate = (myRow["isPrgCreateDate"] == DBNull.Value) ? (DateTime?)null : Convert.ToDateTime(myRow["isPrgCreateDate"]);
            isPrgWaitingConfirmStatus = (myRow["isPrgWaitingConfirmStatus"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgWaitingConfirmStatus"]);
            isPrgbAdminDeleted = (myRow["isPrgbAdminDeleted"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgbAdminDeleted"]);
            isPrgbUserDeleted = (myRow["isPrgbUserDeleted"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgbUserDeleted"]);
            isPrgbShow = (myRow["isPrgbShow"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgbShow"]);
            isPrgOrdered = (myRow["isPrgOrdered"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgOrdered"]);
            isPrgVNKoDau = (myRow["isPrgVNKoDau"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["isPrgVNKoDau"]);
            isPrgSmField = (myRow["isPrgSmField"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["isPrgSmField"]);
            isPrgPartComp = (myRow["isPrgPartComp"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["isPrgPartComp"]);
            isPrgEncriptData = (myRow["isPrgEncriptData"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgEncriptData"]);
            isPrgDescriptData = (myRow["isPrgDescriptData"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgDescriptData"]);
            isPrgAccountUpdateId = (myRow["isPrgAccountUpdateId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgAccountUpdateId"]);
        }
        public string IdOut;
        public string bScript { get; set; }
        public double? DaTra { get; set; }
        public string DienGiai { get; set; }
        public int? Id { get; set; }
        public int? isPrgAccountId { get; set; }
        public int? isPrgAccountUpdateId { get; set; }
        public int? isPrgbAdminDeleted { get; set; }
        public int? isPrgbShow { get; set; }
        public int? isPrgbUserDeleted { get; set; }
        public DateTime? isPrgCreateDate { get; set; }
        public int? isPrgDescriptData { get; set; }
        public int? isPrgEncriptData { get; set; }
        public int? isPrgInUse { get; set; }
        public int? isPrgOrdered { get; set; }
        public string isPrgPartComp { get; set; }
        public string isPrgSmField { get; set; }
        public string isPrgVNKoDau { get; set; }
        public int? isPrgWaitingConfirmStatus { get; set; }
        public string Keep01 { get; set; }
        public string Keep02 { get; set; }
        public string Keep03 { get; set; }
        public string Keep04 { get; set; }
        public int? KhoNhapId { get; set; }
        public string KhoNhapIdName { get; set; }
        public int? KhoXuatId { get; set; }
        public string KhoXuatIdName { get; set; }
        public int? MSHDId { get; set; }
        public string MSHDIdName { get; set; }
        public int? NCCId { get; set; }
        public string NCCIdTen { get; set; }
        public DateTime? NgayLap { get; set; }
        public int? NhanvienId { get; set; }
        public string NhanvienIdHoTen { get; set; }
        public double? NoLai { get; set; }
        public long? ROWNUM { get; set; }
        public string SoCT { get; set; }
        public double? Space01 { get; set; }
        public string Space02 { get; set; }
        public DateTime? Space03 { get; set; }
        public int? SpaceId { get; set; }
        public int? StatusId { get; set; }
        public string StatusIdName { get; set; }
        public string Ten { get; set; }
        public double? TienThue { get; set; }
        public double? TongTien { get; set; }
    }
    public class zgcl_gcGobal_STOCK_gcProduct_Output05
    {
        public string IdOut;

        public zgcl_gcGobal_STOCK_gcProduct_Output05()
        {
            
        }

        public zgcl_gcGobal_STOCK_gcProduct_Output05(DataRow myRow, bool isHasRowNum)
        {
            Id = (myRow["Id"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["Id"]);
            Ten = (myRow["Ten"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Ten"]);
            SoCT = (myRow["SoCT"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["SoCT"]);
            NgayLap = (myRow["NgayLap"] == DBNull.Value) ? (DateTime?)null : Convert.ToDateTime(myRow["NgayLap"]);
            MSHDId = (myRow["MSHDId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["MSHDId"]);
            NCCId = (myRow["NCCId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["NCCId"]);
            TienThue = (myRow["TienThue"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["TienThue"]);
            TongTien = (myRow["TongTien"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["TongTien"]);
            NhanvienId = (myRow["NhanvienId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["NhanvienId"]);
            DaTra = (myRow["DaTra"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["DaTra"]);
            NoLai = (myRow["NoLai"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["NoLai"]);
            KhoXuatId = (myRow["KhoXuatId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["KhoXuatId"]);
            KhoNhapId = (myRow["KhoNhapId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["KhoNhapId"]);
            DienGiai = (myRow["DienGiai"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["DienGiai"]);
            StatusId = (myRow["StatusId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["StatusId"]);
            Keep01 = (myRow["Keep01"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep01"]);
            Keep02 = (myRow["Keep02"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep02"]);
            Keep03 = (myRow["Keep03"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep03"]);
            Keep04 = (myRow["Keep04"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Keep04"]);
            Space01 = (myRow["Space01"] == DBNull.Value) ? (double?)null : Convert.ToDouble(myRow["Space01"]);
            Space02 = (myRow["Space02"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["Space02"]);
            Space03 = (myRow["Space03"] == DBNull.Value) ? (DateTime?)null : Convert.ToDateTime(myRow["Space03"]);
            SpaceId = (myRow["SpaceId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["SpaceId"]);
            isPrgAccountId = (myRow["isPrgAccountId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgAccountId"]);
            isPrgInUse = (myRow["isPrgInUse"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgInUse"]);
            isPrgCreateDate = (myRow["isPrgCreateDate"] == DBNull.Value) ? (DateTime?)null : Convert.ToDateTime(myRow["isPrgCreateDate"]);
            isPrgWaitingConfirmStatus = (myRow["isPrgWaitingConfirmStatus"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgWaitingConfirmStatus"]);
            isPrgbAdminDeleted = (myRow["isPrgbAdminDeleted"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgbAdminDeleted"]);
            isPrgbUserDeleted = (myRow["isPrgbUserDeleted"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgbUserDeleted"]);
            isPrgbShow = (myRow["isPrgbShow"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgbShow"]);
            isPrgOrdered = (myRow["isPrgOrdered"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgOrdered"]);
            isPrgVNKoDau = (myRow["isPrgVNKoDau"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["isPrgVNKoDau"]);
            isPrgSmField = (myRow["isPrgSmField"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["isPrgSmField"]);
            isPrgPartComp = (myRow["isPrgPartComp"] == DBNull.Value) ? (string)null : Convert.ToString(myRow["isPrgPartComp"]);
            isPrgEncriptData = (myRow["isPrgEncriptData"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgEncriptData"]);
            isPrgDescriptData = (myRow["isPrgDescriptData"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgDescriptData"]);
            isPrgAccountUpdateId = (myRow["isPrgAccountUpdateId"] == DBNull.Value) ? (int?)null : Convert.ToInt32(myRow["isPrgAccountUpdateId"]);
        }

        public string bScript { get; set; }
        public double? DaTra { get; set; }
        public string DienGiai { get; set; }
        public int? Id { get; set; }
        public int? isPrgAccountId { get; set; }
        public int? isPrgAccountUpdateId { get; set; }
        public int? isPrgbAdminDeleted { get; set; }
        public int? isPrgbShow { get; set; }
        public int? isPrgbUserDeleted { get; set; }
        public DateTime? isPrgCreateDate { get; set; }
        public int? isPrgDescriptData { get; set; }
        public int? isPrgEncriptData { get; set; }
        public int? isPrgInUse { get; set; }
        public int? isPrgOrdered { get; set; }
        public string isPrgPartComp { get; set; }
        public string isPrgSmField { get; set; }
        public string isPrgVNKoDau { get; set; }
        public int? isPrgWaitingConfirmStatus { get; set; }
        public string Keep01 { get; set; }
        public string Keep02 { get; set; }
        public string Keep03 { get; set; }
        public string Keep04 { get; set; }
        public int? KhoNhapId { get; set; }
        public string KhoNhapIdName { get; set; }
        public int? KhoXuatId { get; set; }
        public string KhoXuatIdName { get; set; }
        public int? MSHDId { get; set; }
        public string MSHDIdName { get; set; }
        public int? NCCId { get; set; }
        public string NCCIdTen { get; set; }
        public DateTime? NgayLap { get; set; }
        public int? NhanvienId { get; set; }
        public string NhanvienIdHoTen { get; set; }
        public double? NoLai { get; set; }
        public long? ROWNUM { get; set; }
        public string SoCT { get; set; }
        public double? Space01 { get; set; }
        public string Space02 { get; set; }
        public DateTime? Space03 { get; set; }
        public int? SpaceId { get; set; }
        public int? StatusId { get; set; }
        public string StatusIdName { get; set; }
        public string Ten { get; set; }
        public double? TienThue { get; set; }
        public double? TongTien { get; set; }
    }
}
