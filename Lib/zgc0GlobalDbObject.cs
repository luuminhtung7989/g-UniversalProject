using System;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Web;

using gcLibAdmin;

using System.Collections.Generic;
/// <summary>
/// Summary description for dhuLogin
/// </summary>
/// 
namespace zgc0LibAdmin
{
    public class gcGobal_REPORT_AUTOGEN_STOCK_InputInitInner
    {
        private int? _Id = null;
        private DateTime? _DayCheck = null;
        private int? _VattuId = null;
        private double? _SLDK = null;
        private double? _SLXK = null;
        private double? _SLNK = null;
        private double? _SLHT = null;
        private double? _SLTT = null;
        private double? _DGDK = null;
        private double? _DGHT = null;
        private int? _DonviId = null;
        private int? _ExtentId = null;
        private int? _TypeId = null;
        private string _ExpandCode = null;
        private double? _KHTS = null;
        private double? _SoTh = null;
        private int? _IsTSCD = null;
        private DateTime? _DayInitData = null;
        private int? _isPrgbUserDeleted = null;
        private string _Code = null;
        private string _VattuIdName = null;
        private int? _LoaiVatTuId = null;
        private double? _GiaMua = null;
        private double? _GiaMoi = null;
        private bool? _HangBanRa = null;
        private string _TypeCode = null;
        private string _TypeName = null;
        private double? _Space01 = null;
        private string _Space02 = null;
        private DateTime? _Space03 = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public gcGobal_REPORT_AUTOGEN_STOCK_InputInitInner()
        {
        }
        public gcGobal_REPORT_AUTOGEN_STOCK_InputInitInner(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _DayCheck = (reader.IsDBNull(reader.GetOrdinal("DayCheck"))) ? (DateTime?)null : Convert.ToDateTime(reader["DayCheck"]);
            _VattuId = (reader.IsDBNull(reader.GetOrdinal("VattuId"))) ? (int?)null : Convert.ToInt32(reader["VattuId"]);
            _SLDK = (reader.IsDBNull(reader.GetOrdinal("SLDK"))) ? (double?)null : Convert.ToDouble(reader["SLDK"]);
            _SLXK = (reader.IsDBNull(reader.GetOrdinal("SLXK"))) ? (double?)null : Convert.ToDouble(reader["SLXK"]);
            _SLNK = (reader.IsDBNull(reader.GetOrdinal("SLNK"))) ? (double?)null : Convert.ToDouble(reader["SLNK"]);
            _SLHT = (reader.IsDBNull(reader.GetOrdinal("SLHT"))) ? (double?)null : Convert.ToDouble(reader["SLHT"]);
            _SLTT = (reader.IsDBNull(reader.GetOrdinal("SLTT"))) ? (double?)null : Convert.ToDouble(reader["SLTT"]);
            _DGDK = (reader.IsDBNull(reader.GetOrdinal("DGDK"))) ? (double?)null : Convert.ToDouble(reader["DGDK"]);
            _DGHT = (reader.IsDBNull(reader.GetOrdinal("DGHT"))) ? (double?)null : Convert.ToDouble(reader["DGHT"]);
            _DonviId = (reader.IsDBNull(reader.GetOrdinal("DonviId"))) ? (int?)null : Convert.ToInt32(reader["DonviId"]);
            _ExtentId = (reader.IsDBNull(reader.GetOrdinal("ExtentId"))) ? (int?)null : Convert.ToInt32(reader["ExtentId"]);
            _TypeId = (reader.IsDBNull(reader.GetOrdinal("TypeId"))) ? (int?)null : Convert.ToInt32(reader["TypeId"]);
            _ExpandCode = (reader.IsDBNull(reader.GetOrdinal("ExpandCode"))) ? (string)null : Convert.ToString(reader["ExpandCode"]);
            _KHTS = (reader.IsDBNull(reader.GetOrdinal("KHTS"))) ? (double?)null : Convert.ToDouble(reader["KHTS"]);
            _SoTh = (reader.IsDBNull(reader.GetOrdinal("SoTh"))) ? (double?)null : Convert.ToDouble(reader["SoTh"]);
            _IsTSCD = (reader.IsDBNull(reader.GetOrdinal("IsTSCD"))) ? (int?)null : Convert.ToInt32(reader["IsTSCD"]);
            _DayInitData = (reader.IsDBNull(reader.GetOrdinal("DayInitData"))) ? (DateTime?)null : Convert.ToDateTime(reader["DayInitData"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _Code = (reader.IsDBNull(reader.GetOrdinal("Code"))) ? (string)null : Convert.ToString(reader["Code"]);
            _VattuIdName = (reader.IsDBNull(reader.GetOrdinal("VattuIdName"))) ? (string)null : Convert.ToString(reader["VattuIdName"]);
            _LoaiVatTuId = (reader.IsDBNull(reader.GetOrdinal("LoaiVatTuId"))) ? (int?)null : Convert.ToInt32(reader["LoaiVatTuId"]);
            _GiaMua = (reader.IsDBNull(reader.GetOrdinal("GiaMua"))) ? (double?)null : Convert.ToDouble(reader["GiaMua"]);
            _GiaMoi = (reader.IsDBNull(reader.GetOrdinal("GiaMoi"))) ? (double?)null : Convert.ToDouble(reader["GiaMoi"]);
            //_HangBanRa = (reader.IsDBNull(reader.GetOrdinal("HangBanRa"))) ? (bool?)null : Convert.ToBoolean(reader["HangBanRa"]);
            _TypeCode = (reader.IsDBNull(reader.GetOrdinal("TypeCode"))) ? (string)null : Convert.ToString(reader["TypeCode"]);
            _TypeName = (reader.IsDBNull(reader.GetOrdinal("TypeName"))) ? (string)null : Convert.ToString(reader["TypeName"]);
            _Space01 = (reader.IsDBNull(reader.GetOrdinal("Space01"))) ? (double?)null : Convert.ToDouble(reader["Space01"]);
            _Space02 = (reader.IsDBNull(reader.GetOrdinal("Space02"))) ? (string)null : Convert.ToString(reader["Space02"]);
            _Space03 = (reader.IsDBNull(reader.GetOrdinal("Space03"))) ? (DateTime?)null : Convert.ToDateTime(reader["Space03"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public gcGobal_REPORT_AUTOGEN_STOCK_InputInitInner(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _DayCheck = (row.IsNull("DayCheck")) ? (DateTime?)null : Convert.ToDateTime(row["DayCheck"]);
            _VattuId = (row.IsNull("VattuId")) ? (int?)null : Convert.ToInt32(row["VattuId"]);
            _SLDK = (row.IsNull("SLDK")) ? (double?)null : Convert.ToDouble(row["SLDK"]);
            _SLXK = (row.IsNull("SLXK")) ? (double?)null : Convert.ToDouble(row["SLXK"]);
            _SLNK = (row.IsNull("SLNK")) ? (double?)null : Convert.ToDouble(row["SLNK"]);
            _SLHT = (row.IsNull("SLHT")) ? (double?)null : Convert.ToDouble(row["SLHT"]);
            _SLTT = (row.IsNull("SLTT")) ? (double?)null : Convert.ToDouble(row["SLTT"]);
            _DGDK = (row.IsNull("DGDK")) ? (double?)null : Convert.ToDouble(row["DGDK"]);
            _DGHT = (row.IsNull("DGHT")) ? (double?)null : Convert.ToDouble(row["DGHT"]);
            _DonviId = (row.IsNull("DonviId")) ? (int?)null : Convert.ToInt32(row["DonviId"]);
            _ExtentId = (row.IsNull("ExtentId")) ? (int?)null : Convert.ToInt32(row["ExtentId"]);
            _TypeId = (row.IsNull("TypeId")) ? (int?)null : Convert.ToInt32(row["TypeId"]);
            _ExpandCode = (row.IsNull("ExpandCode")) ? (string)null : Convert.ToString(row["ExpandCode"]);
            _KHTS = (row.IsNull("KHTS")) ? (double?)null : Convert.ToDouble(row["KHTS"]);
            _SoTh = (row.IsNull("SoTh")) ? (double?)null : Convert.ToDouble(row["SoTh"]);
            _IsTSCD = (row.IsNull("IsTSCD")) ? (int?)null : Convert.ToInt32(row["IsTSCD"]);
            _DayInitData = (row.IsNull("DayInitData")) ? (DateTime?)null : Convert.ToDateTime(row["DayInitData"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _Code = (row.IsNull("Code")) ? (string)null : Convert.ToString(row["Code"]);
            _VattuIdName = (row.IsNull("VattuIdName")) ? (string)null : Convert.ToString(row["VattuIdName"]);
            _LoaiVatTuId = (row.IsNull("LoaiVatTuId")) ? (int?)null : Convert.ToInt32(row["LoaiVatTuId"]);
            _GiaMua = (row.IsNull("GiaMua")) ? (double?)null : Convert.ToDouble(row["GiaMua"]);
            _GiaMoi = (row.IsNull("GiaMoi")) ? (double?)null : Convert.ToDouble(row["GiaMoi"]);
            //_HangBanRa = (row.IsNull("HangBanRa")) ? (bool?)null : Convert.ToBoolean(row["HangBanRa"]);
            _TypeCode = (row.IsNull("TypeCode")) ? (string)null : Convert.ToString(row["TypeCode"]);
            _TypeName = (row.IsNull("TypeName")) ? (string)null : Convert.ToString(row["TypeName"]);
            _Space01 = (row.IsNull("Space01")) ? (double?)null : Convert.ToDouble(row["Space01"]);
            _Space02 = (row.IsNull("Space02")) ? (string)null : Convert.ToString(row["Space02"]);
            _Space03 = (row.IsNull("Space03")) ? (DateTime?)null : Convert.ToDateTime(row["Space03"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public DateTime? DayCheck
        {
            get { return _DayCheck; }
            set { if (this._DayCheck != value) _DayCheck = value; }
        }
        public int? VattuId
        {
            get { return _VattuId; }
            set { if (this._VattuId != value) _VattuId = value; }
        }
        public double? SLDK
        {
            get { return _SLDK; }
            set { if (this._SLDK != value) _SLDK = value; }
        }
        public double? SLXK
        {
            get { return _SLXK; }
            set { if (this._SLXK != value) _SLXK = value; }
        }
        public double? SLNK
        {
            get { return _SLNK; }
            set { if (this._SLNK != value) _SLNK = value; }
        }
        public double? SLHT
        {
            get { return _SLHT; }
            set { if (this._SLHT != value) _SLHT = value; }
        }
        public double? SLTT
        {
            get { return _SLTT; }
            set { if (this._SLTT != value) _SLTT = value; }
        }
        public double? DGDK
        {
            get { return _DGDK; }
            set { if (this._DGDK != value) _DGDK = value; }
        }
        public double? DGHT
        {
            get { return _DGHT; }
            set { if (this._DGHT != value) _DGHT = value; }
        }
        public int? DonviId
        {
            get { return _DonviId; }
            set { if (this._DonviId != value) _DonviId = value; }
        }
        public int? ExtentId
        {
            get { return _ExtentId; }
            set { if (this._ExtentId != value) _ExtentId = value; }
        }
        public int? TypeId
        {
            get { return _TypeId; }
            set { if (this._TypeId != value) _TypeId = value; }
        }
        public string ExpandCode
        {
            get { return _ExpandCode; }
            set { if (this._ExpandCode != value) _ExpandCode = value; }
        }
        public double? KHTS
        {
            get { return _KHTS; }
            set { if (this._KHTS != value) _KHTS = value; }
        }
        public double? SoTh
        {
            get { return _SoTh; }
            set { if (this._SoTh != value) _SoTh = value; }
        }
        public int? IsTSCD
        {
            get { return _IsTSCD; }
            set { if (this._IsTSCD != value) _IsTSCD = value; }
        }
        public DateTime? DayInitData
        {
            get { return _DayInitData; }
            set { if (this._DayInitData != value) _DayInitData = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public string Code
        {
            get { return _Code; }
            set { if (this._Code != value) _Code = value; }
        }
        public string VattuIdName
        {
            get { return _VattuIdName; }
            set { if (this._VattuIdName != value) _VattuIdName = value; }
        }
        public int? LoaiVatTuId
        {
            get { return _LoaiVatTuId; }
            set { if (this._LoaiVatTuId != value) _LoaiVatTuId = value; }
        }
        public double? GiaMua
        {
            get { return _GiaMua; }
            set { if (this._GiaMua != value) _GiaMua = value; }
        }
        public double? GiaMoi
        {
            get { return _GiaMoi; }
            set { if (this._GiaMoi != value) _GiaMoi = value; }
        }
        public bool? HangBanRa
        {
            get { return _HangBanRa; }
            set { if (this._HangBanRa != value) _HangBanRa = value; }
        }
        public string TypeCode
        {
            get { return _TypeCode; }
            set { if (this._TypeCode != value) _TypeCode = value; }
        }
        public string TypeName
        {
            get { return _TypeName; }
            set { if (this._TypeName != value) _TypeName = value; }
        }
        public double? Space01
        {
            get { return _Space01; }
            set { if (this._Space01 != value) _Space01 = value; }
        }
        public string Space02
        {
            get { return _Space02; }
            set { if (this._Space02 != value) _Space02 = value; }
        }
        public DateTime? Space03
        {
            get { return _Space03; }
            set { if (this._Space03 != value) _Space03 = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }

    

    public class zgcl_gcGobal_ACCOUNT_GroupRight_DefPages00Inter
    {
        private int? _Id = null;
        private int? _NhomQuyenId = null;
        private string _Tab = null;
        private string _TableName = null;
        private string _FormName = null;
        private int? _ParentTab = null;
        private int? _Detail = null;
        private string _FogreinInfo = null;
        private string _Path = null;
        private string _Page = null;
        private string _HinhAnhIcon = null;
        private string _ConfigUIMenu = null;
        private int? _isInsert = null;
        private int? _isUpdate = null;
        private int? _isDelete = null;
        private int? _isView = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private string _NhomQuyenIdTen = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public zgcl_gcGobal_ACCOUNT_GroupRight_DefPages00Inter()
        {
        }
        public zgcl_gcGobal_ACCOUNT_GroupRight_DefPages00Inter(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _NhomQuyenId = (reader.IsDBNull(reader.GetOrdinal("NhomQuyenId"))) ? (int?)null : Convert.ToInt32(reader["NhomQuyenId"]);
            _Tab = (reader.IsDBNull(reader.GetOrdinal("Tab"))) ? (string)null : Convert.ToString(reader["Tab"]);
            _TableName = (reader.IsDBNull(reader.GetOrdinal("TableName"))) ? (string)null : Convert.ToString(reader["TableName"]);
            _FormName = (reader.IsDBNull(reader.GetOrdinal("FormName"))) ? (string)null : Convert.ToString(reader["FormName"]);
            _ParentTab = (reader.IsDBNull(reader.GetOrdinal("ParentTab"))) ? (int?)null : Convert.ToInt32(reader["ParentTab"]);
            _Detail = (reader.IsDBNull(reader.GetOrdinal("Detail"))) ? (int?)null : Convert.ToInt32(reader["Detail"]);
            _FogreinInfo = (reader.IsDBNull(reader.GetOrdinal("FogreinInfo"))) ? (string)null : Convert.ToString(reader["FogreinInfo"]);
            _Path = (reader.IsDBNull(reader.GetOrdinal("Path"))) ? (string)null : Convert.ToString(reader["Path"]);
            _Page = (reader.IsDBNull(reader.GetOrdinal("Page"))) ? (string)null : Convert.ToString(reader["Page"]);
            _HinhAnhIcon = (reader.IsDBNull(reader.GetOrdinal("HinhAnhIcon"))) ? (string)null : Convert.ToString(reader["HinhAnhIcon"]);
            _ConfigUIMenu = (reader.IsDBNull(reader.GetOrdinal("ConfigUIMenu"))) ? (string)null : Convert.ToString(reader["ConfigUIMenu"]);
            _isInsert = (reader.IsDBNull(reader.GetOrdinal("isInsert"))) ? (int?)null : Convert.ToInt32(reader["isInsert"]);
            _isUpdate = (reader.IsDBNull(reader.GetOrdinal("isUpdate"))) ? (int?)null : Convert.ToInt32(reader["isUpdate"]);
            _isDelete = (reader.IsDBNull(reader.GetOrdinal("isDelete"))) ? (int?)null : Convert.ToInt32(reader["isDelete"]);
            _isView = (reader.IsDBNull(reader.GetOrdinal("isView"))) ? (int?)null : Convert.ToInt32(reader["isView"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            _NhomQuyenIdTen = (reader.IsDBNull(reader.GetOrdinal("NhomQuyenIdTen"))) ? (string)null : Convert.ToString(reader["NhomQuyenIdTen"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public zgcl_gcGobal_ACCOUNT_GroupRight_DefPages00Inter(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _NhomQuyenId = (row.IsNull("NhomQuyenId")) ? (int?)null : Convert.ToInt32(row["NhomQuyenId"]);
            _Tab = (row.IsNull("Tab")) ? (string)null : Convert.ToString(row["Tab"]);
            _TableName = (row.IsNull("TableName")) ? (string)null : Convert.ToString(row["TableName"]);
            _FormName = (row.IsNull("FormName")) ? (string)null : Convert.ToString(row["FormName"]);
            _ParentTab = (row.IsNull("ParentTab")) ? (int?)null : Convert.ToInt32(row["ParentTab"]);
            _Detail = (row.IsNull("Detail")) ? (int?)null : Convert.ToInt32(row["Detail"]);
            _FogreinInfo = (row.IsNull("FogreinInfo")) ? (string)null : Convert.ToString(row["FogreinInfo"]);
            _Path = (row.IsNull("Path")) ? (string)null : Convert.ToString(row["Path"]);
            _Page = (row.IsNull("Page")) ? (string)null : Convert.ToString(row["Page"]);
            _HinhAnhIcon = (row.IsNull("HinhAnhIcon")) ? (string)null : Convert.ToString(row["HinhAnhIcon"]);
            _ConfigUIMenu = (row.IsNull("ConfigUIMenu")) ? (string)null : Convert.ToString(row["ConfigUIMenu"]);
            _isInsert = (row.IsNull("isInsert")) ? (int?)null : Convert.ToInt32(row["isInsert"]);
            _isUpdate = (row.IsNull("isUpdate")) ? (int?)null : Convert.ToInt32(row["isUpdate"]);
            _isDelete = (row.IsNull("isDelete")) ? (int?)null : Convert.ToInt32(row["isDelete"]);
            _isView = (row.IsNull("isView")) ? (int?)null : Convert.ToInt32(row["isView"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            _NhomQuyenIdTen = (row.IsNull("NhomQuyenIdTen")) ? (string)null : Convert.ToString(row["NhomQuyenIdTen"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public int? NhomQuyenId
        {
            get { return _NhomQuyenId; }
            set { if (this._NhomQuyenId != value) _NhomQuyenId = value; }
        }
        public string Tab
        {
            get { return _Tab; }
            set { if (this._Tab != value) _Tab = value; }
        }
        public string TableName
        {
            get { return _TableName; }
            set { if (this._TableName != value) _TableName = value; }
        }
        public string FormName
        {
            get { return _FormName; }
            set { if (this._FormName != value) _FormName = value; }
        }
        public int? ParentTab
        {
            get { return _ParentTab; }
            set { if (this._ParentTab != value) _ParentTab = value; }
        }
        public int? Detail
        {
            get { return _Detail; }
            set { if (this._Detail != value) _Detail = value; }
        }
        public string FogreinInfo
        {
            get { return _FogreinInfo; }
            set { if (this._FogreinInfo != value) _FogreinInfo = value; }
        }
        public string Path
        {
            get { return _Path; }
            set { if (this._Path != value) _Path = value; }
        }
        public string Page
        {
            get { return _Page; }
            set { if (this._Page != value) _Page = value; }
        }
        public string HinhAnhIcon
        {
            get { return _HinhAnhIcon; }
            set { if (this._HinhAnhIcon != value) _HinhAnhIcon = value; }
        }
        public string ConfigUIMenu
        {
            get { return _ConfigUIMenu; }
            set { if (this._ConfigUIMenu != value) _ConfigUIMenu = value; }
        }
        public int? isInsert
        {
            get { return _isInsert; }
            set { if (this._isInsert != value) _isInsert = value; }
        }
        public int? isUpdate
        {
            get { return _isUpdate; }
            set { if (this._isUpdate != value) _isUpdate = value; }
        }
        public int? isDelete
        {
            get { return _isDelete; }
            set { if (this._isDelete != value) _isDelete = value; }
        }
        public int? isView
        {
            get { return _isView; }
            set { if (this._isView != value) _isView = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public string NhomQuyenIdTen
        {
            get { return _NhomQuyenIdTen; }
            set { if (this._NhomQuyenIdTen != value) _NhomQuyenIdTen = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }


    public class gcGobal_ACCOUNT_GroupRight_DefPagesInter
    {
        private int? _Id = null;
        private int? _NhomQuyenId = null;
        private string _Tab = null;
        private string _TableName = null;
        private string _FormName = null;
        private int? _ParentTab = null;
        private int? _Detail = null;
        private string _FogreinInfo = null;
        private string _Path = null;
        private string _Page = null;
        private string _HinhAnhIcon = null;
        private string _ConfigUIMenu = null;
        private int? _isInsert = null;
        private int? _isUpdate = null;
        private int? _isDelete = null;
        private int? _isView = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public gcGobal_ACCOUNT_GroupRight_DefPagesInter()
        {
        }
        public gcGobal_ACCOUNT_GroupRight_DefPagesInter(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _NhomQuyenId = (reader.IsDBNull(reader.GetOrdinal("NhomQuyenId"))) ? (int?)null : Convert.ToInt32(reader["NhomQuyenId"]);
            _Tab = (reader.IsDBNull(reader.GetOrdinal("Tab"))) ? (string)null : Convert.ToString(reader["Tab"]);
            _TableName = (reader.IsDBNull(reader.GetOrdinal("TableName"))) ? (string)null : Convert.ToString(reader["TableName"]);
            _FormName = (reader.IsDBNull(reader.GetOrdinal("FormName"))) ? (string)null : Convert.ToString(reader["FormName"]);
            _ParentTab = (reader.IsDBNull(reader.GetOrdinal("ParentTab"))) ? (int?)null : Convert.ToInt32(reader["ParentTab"]);
            _Detail = (reader.IsDBNull(reader.GetOrdinal("Detail"))) ? (int?)null : Convert.ToInt32(reader["Detail"]);
            _FogreinInfo = (reader.IsDBNull(reader.GetOrdinal("FogreinInfo"))) ? (string)null : Convert.ToString(reader["FogreinInfo"]);
            _Path = (reader.IsDBNull(reader.GetOrdinal("Path"))) ? (string)null : Convert.ToString(reader["Path"]);
            _Page = (reader.IsDBNull(reader.GetOrdinal("Page"))) ? (string)null : Convert.ToString(reader["Page"]);
            _HinhAnhIcon = (reader.IsDBNull(reader.GetOrdinal("HinhAnhIcon"))) ? (string)null : Convert.ToString(reader["HinhAnhIcon"]);
            _ConfigUIMenu = (reader.IsDBNull(reader.GetOrdinal("ConfigUIMenu"))) ? (string)null : Convert.ToString(reader["ConfigUIMenu"]);
            _isInsert = (reader.IsDBNull(reader.GetOrdinal("isInsert"))) ? (int?)null : Convert.ToInt32(reader["isInsert"]);
            _isUpdate = (reader.IsDBNull(reader.GetOrdinal("isUpdate"))) ? (int?)null : Convert.ToInt32(reader["isUpdate"]);
            _isDelete = (reader.IsDBNull(reader.GetOrdinal("isDelete"))) ? (int?)null : Convert.ToInt32(reader["isDelete"]);
            _isView = (reader.IsDBNull(reader.GetOrdinal("isView"))) ? (int?)null : Convert.ToInt32(reader["isView"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public gcGobal_ACCOUNT_GroupRight_DefPagesInter(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _NhomQuyenId = (row.IsNull("NhomQuyenId")) ? (int?)null : Convert.ToInt32(row["NhomQuyenId"]);
            _Tab = (row.IsNull("Tab")) ? (string)null : Convert.ToString(row["Tab"]);
            _TableName = (row.IsNull("TableName")) ? (string)null : Convert.ToString(row["TableName"]);
            _FormName = (row.IsNull("FormName")) ? (string)null : Convert.ToString(row["FormName"]);
            _ParentTab = (row.IsNull("ParentTab")) ? (int?)null : Convert.ToInt32(row["ParentTab"]);
            _Detail = (row.IsNull("Detail")) ? (int?)null : Convert.ToInt32(row["Detail"]);
            _FogreinInfo = (row.IsNull("FogreinInfo")) ? (string)null : Convert.ToString(row["FogreinInfo"]);
            _Path = (row.IsNull("Path")) ? (string)null : Convert.ToString(row["Path"]);
            _Page = (row.IsNull("Page")) ? (string)null : Convert.ToString(row["Page"]);
            _HinhAnhIcon = (row.IsNull("HinhAnhIcon")) ? (string)null : Convert.ToString(row["HinhAnhIcon"]);
            _ConfigUIMenu = (row.IsNull("ConfigUIMenu")) ? (string)null : Convert.ToString(row["ConfigUIMenu"]);
            _isInsert = (row.IsNull("isInsert")) ? (int?)null : Convert.ToInt32(row["isInsert"]);
            _isUpdate = (row.IsNull("isUpdate")) ? (int?)null : Convert.ToInt32(row["isUpdate"]);
            _isDelete = (row.IsNull("isDelete")) ? (int?)null : Convert.ToInt32(row["isDelete"]);
            _isView = (row.IsNull("isView")) ? (int?)null : Convert.ToInt32(row["isView"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public static int AddObject(object obj, ref string IdOut, SqlCommand myCmd, string strConnect)
        {
            SqlConnection myCon = null;
            IdOut = null;
            int ErrorCode = 0;
            try
            {
                if (myCmd == null)
                {
                    myCmd = new SqlCommand();
                }
                myCmd.CommandType = System.Data.CommandType.StoredProcedure;
                myCmd.CommandText = "zspi_Add_gcGobal_ACCOUNT_GroupRight_DefPages";
                //----------------------------------------------------------------------------
                myCmd.Parameters.Add("@p_NhomQuyenId", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_Tab", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_TableName", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_FormName", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_ParentTab", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_Detail", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_FogreinInfo", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_Path", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_Page", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_HinhAnhIcon", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_ConfigUIMenu", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isInsert", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isUpdate", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isDelete", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isView", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgAccountId", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgInUse", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgCreateDate", System.Data.SqlDbType.DateTime);
                myCmd.Parameters.Add("@p_isPrgWaitingConfirmStatus", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgbAdminDeleted", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgbUserDeleted", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgbShow", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgOrdered", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgVNKoDau", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isPrgSmField", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isPrgPartComp", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isPrgEncriptData", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgDescriptData", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgAccountUpdateId", System.Data.SqlDbType.Int);
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).NhomQuyenId.HasValue)
                    myCmd.Parameters["@p_NhomQuyenId"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_NhomQuyenId"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).NhomQuyenId.Value;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Tab == null)
                    myCmd.Parameters["@p_Tab"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Tab"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Tab;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).TableName == null)
                    myCmd.Parameters["@p_TableName"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_TableName"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).TableName;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FormName == null)
                    myCmd.Parameters["@p_FormName"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_FormName"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FormName;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ParentTab.HasValue)
                    myCmd.Parameters["@p_ParentTab"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_ParentTab"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ParentTab.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Detail.HasValue)
                    myCmd.Parameters["@p_Detail"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Detail"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Detail.Value;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FogreinInfo == null)
                    myCmd.Parameters["@p_FogreinInfo"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_FogreinInfo"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FogreinInfo;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Path == null)
                    myCmd.Parameters["@p_Path"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Path"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Path;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Page == null)
                    myCmd.Parameters["@p_Page"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Page"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Page;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).HinhAnhIcon == null)
                    myCmd.Parameters["@p_HinhAnhIcon"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_HinhAnhIcon"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).HinhAnhIcon;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ConfigUIMenu == null)
                    myCmd.Parameters["@p_ConfigUIMenu"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_ConfigUIMenu"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ConfigUIMenu;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isInsert.HasValue)
                    myCmd.Parameters["@p_isInsert"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isInsert"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isInsert.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isUpdate.HasValue)
                    myCmd.Parameters["@p_isUpdate"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isUpdate"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isUpdate.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isDelete.HasValue)
                    myCmd.Parameters["@p_isDelete"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isDelete"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isDelete.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isView.HasValue)
                    myCmd.Parameters["@p_isView"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isView"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isView.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountId.HasValue)
                    myCmd.Parameters["@p_isPrgAccountId"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgAccountId"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountId.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgInUse.HasValue)
                    myCmd.Parameters["@p_isPrgInUse"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgInUse"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgInUse.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgCreateDate.HasValue)
                    myCmd.Parameters["@p_isPrgCreateDate"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgCreateDate"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgCreateDate.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgWaitingConfirmStatus.HasValue)
                    myCmd.Parameters["@p_isPrgWaitingConfirmStatus"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgWaitingConfirmStatus"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgWaitingConfirmStatus.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbAdminDeleted.HasValue)
                    myCmd.Parameters["@p_isPrgbAdminDeleted"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgbAdminDeleted"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbAdminDeleted.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbUserDeleted.HasValue)
                    myCmd.Parameters["@p_isPrgbUserDeleted"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgbUserDeleted"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbUserDeleted.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbShow.HasValue)
                    myCmd.Parameters["@p_isPrgbShow"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgbShow"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbShow.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgOrdered.HasValue)
                    myCmd.Parameters["@p_isPrgOrdered"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgOrdered"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgOrdered.Value;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgVNKoDau == null)
                    myCmd.Parameters["@p_isPrgVNKoDau"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgVNKoDau"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgVNKoDau;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgSmField == null)
                    myCmd.Parameters["@p_isPrgSmField"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgSmField"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgSmField;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgPartComp == null)
                    myCmd.Parameters["@p_isPrgPartComp"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgPartComp"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgPartComp;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgEncriptData.HasValue)
                    myCmd.Parameters["@p_isPrgEncriptData"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgEncriptData"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgEncriptData.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgDescriptData.HasValue)
                    myCmd.Parameters["@p_isPrgDescriptData"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgDescriptData"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgDescriptData.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountUpdateId.HasValue)
                    myCmd.Parameters["@p_isPrgAccountUpdateId"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgAccountUpdateId"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountUpdateId.Value;
                //----------------------------------------------------------------------------
                SqlParameter pIdOut = new SqlParameter("@p_Id_out", System.Data.SqlDbType.Int);
                pIdOut.Direction = ParameterDirection.Output;
                myCmd.Parameters.Add(pIdOut);
                zgc0HelperSecurity.ExecuteProcedure(myCmd, strConnect);
                IdOut = (pIdOut == null) ? "" : (string)pIdOut.Value.ToString();
            }
            catch (Exception e)
            {
                ErrorCode = -1;
                zgc0HelperSecurity.NoneException(e);
            }
            return ErrorCode;
        }
        public static int UpdateObject(object obj, SqlCommand myCmd, string strConnect)
        {
            SqlConnection myCon = null;
            int ErrorCode = 0;
            try
            {
                if (myCmd == null)
                {
                    myCmd = new SqlCommand();
                }
                myCmd.CommandType = System.Data.CommandType.StoredProcedure;
                myCmd.CommandText = "zspi_Update_gcGobal_ACCOUNT_GroupRight_DefPages";
                //----------------------------------------------------------------------------
                myCmd.Parameters.Add("@pk_Id", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_NhomQuyenId", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_Tab", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_TableName", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_FormName", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_ParentTab", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_Detail", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_FogreinInfo", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_Path", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_Page", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_HinhAnhIcon", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_ConfigUIMenu", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isInsert", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isUpdate", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isDelete", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isView", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgAccountId", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgInUse", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgCreateDate", System.Data.SqlDbType.DateTime);
                myCmd.Parameters.Add("@p_isPrgWaitingConfirmStatus", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgbAdminDeleted", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgbUserDeleted", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgbShow", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgOrdered", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgVNKoDau", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isPrgSmField", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isPrgPartComp", System.Data.SqlDbType.NVarChar);
                myCmd.Parameters.Add("@p_isPrgEncriptData", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgDescriptData", System.Data.SqlDbType.Int);
                myCmd.Parameters.Add("@p_isPrgAccountUpdateId", System.Data.SqlDbType.Int);
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Id.HasValue)
                    myCmd.Parameters["@pk_Id"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@pk_Id"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Id.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).NhomQuyenId.HasValue)
                    myCmd.Parameters["@p_NhomQuyenId"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_NhomQuyenId"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).NhomQuyenId.Value;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Tab == null)
                    myCmd.Parameters["@p_Tab"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Tab"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Tab;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).TableName == null)
                    myCmd.Parameters["@p_TableName"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_TableName"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).TableName;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FormName == null)
                    myCmd.Parameters["@p_FormName"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_FormName"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FormName;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ParentTab.HasValue)
                    myCmd.Parameters["@p_ParentTab"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_ParentTab"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ParentTab.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Detail.HasValue)
                    myCmd.Parameters["@p_Detail"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Detail"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Detail.Value;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FogreinInfo == null)
                    myCmd.Parameters["@p_FogreinInfo"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_FogreinInfo"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).FogreinInfo;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Path == null)
                    myCmd.Parameters["@p_Path"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Path"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Path;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Page == null)
                    myCmd.Parameters["@p_Page"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_Page"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).Page;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).HinhAnhIcon == null)
                    myCmd.Parameters["@p_HinhAnhIcon"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_HinhAnhIcon"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).HinhAnhIcon;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ConfigUIMenu == null)
                    myCmd.Parameters["@p_ConfigUIMenu"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_ConfigUIMenu"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).ConfigUIMenu;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isInsert.HasValue)
                    myCmd.Parameters["@p_isInsert"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isInsert"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isInsert.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isUpdate.HasValue)
                    myCmd.Parameters["@p_isUpdate"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isUpdate"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isUpdate.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isDelete.HasValue)
                    myCmd.Parameters["@p_isDelete"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isDelete"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isDelete.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isView.HasValue)
                    myCmd.Parameters["@p_isView"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isView"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isView.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountId.HasValue)
                    myCmd.Parameters["@p_isPrgAccountId"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgAccountId"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountId.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgInUse.HasValue)
                    myCmd.Parameters["@p_isPrgInUse"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgInUse"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgInUse.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgCreateDate.HasValue)
                    myCmd.Parameters["@p_isPrgCreateDate"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgCreateDate"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgCreateDate.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgWaitingConfirmStatus.HasValue)
                    myCmd.Parameters["@p_isPrgWaitingConfirmStatus"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgWaitingConfirmStatus"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgWaitingConfirmStatus.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbAdminDeleted.HasValue)
                    myCmd.Parameters["@p_isPrgbAdminDeleted"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgbAdminDeleted"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbAdminDeleted.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbUserDeleted.HasValue)
                    myCmd.Parameters["@p_isPrgbUserDeleted"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgbUserDeleted"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbUserDeleted.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbShow.HasValue)
                    myCmd.Parameters["@p_isPrgbShow"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgbShow"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgbShow.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgOrdered.HasValue)
                    myCmd.Parameters["@p_isPrgOrdered"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgOrdered"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgOrdered.Value;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgVNKoDau == null)
                    myCmd.Parameters["@p_isPrgVNKoDau"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgVNKoDau"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgVNKoDau;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgSmField == null)
                    myCmd.Parameters["@p_isPrgSmField"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgSmField"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgSmField;
                if (((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgPartComp == null)
                    myCmd.Parameters["@p_isPrgPartComp"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgPartComp"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgPartComp;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgEncriptData.HasValue)
                    myCmd.Parameters["@p_isPrgEncriptData"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgEncriptData"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgEncriptData.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgDescriptData.HasValue)
                    myCmd.Parameters["@p_isPrgDescriptData"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgDescriptData"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgDescriptData.Value;
                if (!((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountUpdateId.HasValue)
                    myCmd.Parameters["@p_isPrgAccountUpdateId"].Value = DBNull.Value;
                else
                    myCmd.Parameters["@p_isPrgAccountUpdateId"].Value = ((gcGobal_ACCOUNT_GroupRight_DefPagesInter)obj).isPrgAccountUpdateId.Value;
                //----------------------------------------------------------------------------
                zgc0HelperSecurity.ExecuteProcedure(myCmd, strConnect);
            }
            catch (Exception e)
            {
                ErrorCode = -1;
                zgc0HelperSecurity.NoneException(e);
            }
            return ErrorCode;
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public int? NhomQuyenId
        {
            get { return _NhomQuyenId; }
            set { if (this._NhomQuyenId != value) _NhomQuyenId = value; }
        }
        public string Tab
        {
            get { return _Tab; }
            set { if (this._Tab != value) _Tab = value; }
        }
        public string TableName
        {
            get { return _TableName; }
            set { if (this._TableName != value) _TableName = value; }
        }
        public string FormName
        {
            get { return _FormName; }
            set { if (this._FormName != value) _FormName = value; }
        }
        public int? ParentTab
        {
            get { return _ParentTab; }
            set { if (this._ParentTab != value) _ParentTab = value; }
        }
        public int? Detail
        {
            get { return _Detail; }
            set { if (this._Detail != value) _Detail = value; }
        }
        public string FogreinInfo
        {
            get { return _FogreinInfo; }
            set { if (this._FogreinInfo != value) _FogreinInfo = value; }
        }
        public string Path
        {
            get { return _Path; }
            set { if (this._Path != value) _Path = value; }
        }
        public string Page
        {
            get { return _Page; }
            set { if (this._Page != value) _Page = value; }
        }
        public string HinhAnhIcon
        {
            get { return _HinhAnhIcon; }
            set { if (this._HinhAnhIcon != value) _HinhAnhIcon = value; }
        }
        public string ConfigUIMenu
        {
            get { return _ConfigUIMenu; }
            set { if (this._ConfigUIMenu != value) _ConfigUIMenu = value; }
        }
        public int? isInsert
        {
            get { return _isInsert; }
            set { if (this._isInsert != value) _isInsert = value; }
        }
        public int? isUpdate
        {
            get { return _isUpdate; }
            set { if (this._isUpdate != value) _isUpdate = value; }
        }
        public int? isDelete
        {
            get { return _isDelete; }
            set { if (this._isDelete != value) _isDelete = value; }
        }
        public int? isView
        {
            get { return _isView; }
            set { if (this._isView != value) _isView = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }

    public class zgcl_gcGobal_ACCOUNT_Right_GroupRight01Inter
    {
        private int? _Id = null;
        private int? _MaQuyenId = null;
        private int? _NhomQuyenId = null;
        private string _FormName = null;
        private string _Keep01 = null;
        private string _Keep02 = null;
        private string _Keep03 = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private string _MaQuyenIdTen = null;
        private string _NhomQuyenIdTen = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public zgcl_gcGobal_ACCOUNT_Right_GroupRight01Inter()
        {
        }
        public zgcl_gcGobal_ACCOUNT_Right_GroupRight01Inter(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _MaQuyenId = (reader.IsDBNull(reader.GetOrdinal("MaQuyenId"))) ? (int?)null : Convert.ToInt32(reader["MaQuyenId"]);
            _NhomQuyenId = (reader.IsDBNull(reader.GetOrdinal("NhomQuyenId"))) ? (int?)null : Convert.ToInt32(reader["NhomQuyenId"]);
            _FormName = (reader.IsDBNull(reader.GetOrdinal("FormName"))) ? (string)null : Convert.ToString(reader["FormName"]);
            _Keep01 = (reader.IsDBNull(reader.GetOrdinal("Keep01"))) ? (string)null : Convert.ToString(reader["Keep01"]);
            _Keep02 = (reader.IsDBNull(reader.GetOrdinal("Keep02"))) ? (string)null : Convert.ToString(reader["Keep02"]);
            _Keep03 = (reader.IsDBNull(reader.GetOrdinal("Keep03"))) ? (string)null : Convert.ToString(reader["Keep03"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            _MaQuyenIdTen = (reader.IsDBNull(reader.GetOrdinal("MaQuyenIdTen"))) ? (string)null : Convert.ToString(reader["MaQuyenIdTen"]);
            _NhomQuyenIdTen = (reader.IsDBNull(reader.GetOrdinal("NhomQuyenIdTen"))) ? (string)null : Convert.ToString(reader["NhomQuyenIdTen"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public zgcl_gcGobal_ACCOUNT_Right_GroupRight01Inter(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _MaQuyenId = (row.IsNull("MaQuyenId")) ? (int?)null : Convert.ToInt32(row["MaQuyenId"]);
            _NhomQuyenId = (row.IsNull("NhomQuyenId")) ? (int?)null : Convert.ToInt32(row["NhomQuyenId"]);
            _FormName = (row.IsNull("FormName")) ? (string)null : Convert.ToString(row["FormName"]);
            _Keep01 = (row.IsNull("Keep01")) ? (string)null : Convert.ToString(row["Keep01"]);
            _Keep02 = (row.IsNull("Keep02")) ? (string)null : Convert.ToString(row["Keep02"]);
            _Keep03 = (row.IsNull("Keep03")) ? (string)null : Convert.ToString(row["Keep03"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            _MaQuyenIdTen = (row.IsNull("MaQuyenIdTen")) ? (string)null : Convert.ToString(row["MaQuyenIdTen"]);
            _NhomQuyenIdTen = (row.IsNull("NhomQuyenIdTen")) ? (string)null : Convert.ToString(row["NhomQuyenIdTen"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public int? MaQuyenId
        {
            get { return _MaQuyenId; }
            set { if (this._MaQuyenId != value) _MaQuyenId = value; }
        }
        public int? NhomQuyenId
        {
            get { return _NhomQuyenId; }
            set { if (this._NhomQuyenId != value) _NhomQuyenId = value; }
        }
        public string FormName
        {
            get { return _FormName; }
            set { if (this._FormName != value) _FormName = value; }
        }
        public string Keep01
        {
            get { return _Keep01; }
            set { if (this._Keep01 != value) _Keep01 = value; }
        }
        public string Keep02
        {
            get { return _Keep02; }
            set { if (this._Keep02 != value) _Keep02 = value; }
        }
        public string Keep03
        {
            get { return _Keep03; }
            set { if (this._Keep03 != value) _Keep03 = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public string MaQuyenIdTen
        {
            get { return _MaQuyenIdTen; }
            set { if (this._MaQuyenIdTen != value) _MaQuyenIdTen = value; }
        }
        public string NhomQuyenIdTen
        {
            get { return _NhomQuyenIdTen; }
            set { if (this._NhomQuyenIdTen != value) _NhomQuyenIdTen = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }

    public class zgcl_zgcBUILDIN_GOBAL_ONE_MUDULE00Inter
    {
        private int? _Id = null;
        private string _Tab = null;
        private string _TableName = null;
        private string _FormName = null;
        private int? _ParentTab = null;
        private string _TypeObject = null;
        private int? _Detail = null;
        private string _FogreinInfo = null;
        private int? _MultiOrSingle = null;
        private string _DetailBtnName = null;
        private string _mBaseRuleName = null;
        private int? _ConfigId = null;
        private int? _mLevel = null;
        private string _bLinkToBaseDetail = null;
        private string _UpdateFile = null;
        private string _ConfigForm = null;
        private int? _FormStyle = null;
        private string _ConfigUIMenu = null;
        private string _Keep01 = null;
        private string _Keep02 = null;
        private string _Keep03 = null;
        private string _Keep04 = null;
        private double? _Space01 = null;
        private string _Space02 = null;
        private DateTime? _Space03 = null;
        private int? _SpaceId = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public zgcl_zgcBUILDIN_GOBAL_ONE_MUDULE00Inter()
        {
        }
        public zgcl_zgcBUILDIN_GOBAL_ONE_MUDULE00Inter(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _Tab = (reader.IsDBNull(reader.GetOrdinal("Tab"))) ? (string)null : Convert.ToString(reader["Tab"]);
            _TableName = (reader.IsDBNull(reader.GetOrdinal("TableName"))) ? (string)null : Convert.ToString(reader["TableName"]);
            _FormName = (reader.IsDBNull(reader.GetOrdinal("FormName"))) ? (string)null : Convert.ToString(reader["FormName"]);
            _ParentTab = (reader.IsDBNull(reader.GetOrdinal("ParentTab"))) ? (int?)null : Convert.ToInt32(reader["ParentTab"]);
            _TypeObject = (reader.IsDBNull(reader.GetOrdinal("TypeObject"))) ? (string)null : Convert.ToString(reader["TypeObject"]);
            _Detail = (reader.IsDBNull(reader.GetOrdinal("Detail"))) ? (int?)null : Convert.ToInt32(reader["Detail"]);
            _FogreinInfo = (reader.IsDBNull(reader.GetOrdinal("FogreinInfo"))) ? (string)null : Convert.ToString(reader["FogreinInfo"]);
            _MultiOrSingle = (reader.IsDBNull(reader.GetOrdinal("MultiOrSingle"))) ? (int?)null : Convert.ToInt32(reader["MultiOrSingle"]);
            _DetailBtnName = (reader.IsDBNull(reader.GetOrdinal("DetailBtnName"))) ? (string)null : Convert.ToString(reader["DetailBtnName"]);
            _mBaseRuleName = (reader.IsDBNull(reader.GetOrdinal("mBaseRuleName"))) ? (string)null : Convert.ToString(reader["mBaseRuleName"]);
            _ConfigId = (reader.IsDBNull(reader.GetOrdinal("ConfigId"))) ? (int?)null : Convert.ToInt32(reader["ConfigId"]);
            _mLevel = (reader.IsDBNull(reader.GetOrdinal("mLevel"))) ? (int?)null : Convert.ToInt32(reader["mLevel"]);
            _bLinkToBaseDetail = (reader.IsDBNull(reader.GetOrdinal("bLinkToBaseDetail"))) ? (string)null : Convert.ToString(reader["bLinkToBaseDetail"]);
            _UpdateFile = (reader.IsDBNull(reader.GetOrdinal("UpdateFile"))) ? (string)null : Convert.ToString(reader["UpdateFile"]);
            _ConfigForm = (reader.IsDBNull(reader.GetOrdinal("ConfigForm"))) ? (string)null : Convert.ToString(reader["ConfigForm"]);
            _FormStyle = (reader.IsDBNull(reader.GetOrdinal("FormStyle"))) ? (int?)null : Convert.ToInt32(reader["FormStyle"]);
            _ConfigUIMenu = (reader.IsDBNull(reader.GetOrdinal("ConfigUIMenu"))) ? (string)null : Convert.ToString(reader["ConfigUIMenu"]);
            _Keep01 = (reader.IsDBNull(reader.GetOrdinal("Keep01"))) ? (string)null : Convert.ToString(reader["Keep01"]);
            _Keep02 = (reader.IsDBNull(reader.GetOrdinal("Keep02"))) ? (string)null : Convert.ToString(reader["Keep02"]);
            _Keep03 = (reader.IsDBNull(reader.GetOrdinal("Keep03"))) ? (string)null : Convert.ToString(reader["Keep03"]);
            _Keep04 = (reader.IsDBNull(reader.GetOrdinal("Keep04"))) ? (string)null : Convert.ToString(reader["Keep04"]);
            _Space01 = (reader.IsDBNull(reader.GetOrdinal("Space01"))) ? (double?)null : Convert.ToDouble(reader["Space01"]);
            _Space02 = (reader.IsDBNull(reader.GetOrdinal("Space02"))) ? (string)null : Convert.ToString(reader["Space02"]);
            _Space03 = (reader.IsDBNull(reader.GetOrdinal("Space03"))) ? (DateTime?)null : Convert.ToDateTime(reader["Space03"]);
            _SpaceId = (reader.IsDBNull(reader.GetOrdinal("SpaceId"))) ? (int?)null : Convert.ToInt32(reader["SpaceId"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public zgcl_zgcBUILDIN_GOBAL_ONE_MUDULE00Inter(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _Tab = (row.IsNull("Tab")) ? (string)null : Convert.ToString(row["Tab"]);
            _TableName = (row.IsNull("TableName")) ? (string)null : Convert.ToString(row["TableName"]);
            _FormName = (row.IsNull("FormName")) ? (string)null : Convert.ToString(row["FormName"]);
            _ParentTab = (row.IsNull("ParentTab")) ? (int?)null : Convert.ToInt32(row["ParentTab"]);
            _TypeObject = (row.IsNull("TypeObject")) ? (string)null : Convert.ToString(row["TypeObject"]);
            _Detail = (row.IsNull("Detail")) ? (int?)null : Convert.ToInt32(row["Detail"]);
            _FogreinInfo = (row.IsNull("FogreinInfo")) ? (string)null : Convert.ToString(row["FogreinInfo"]);
            _MultiOrSingle = (row.IsNull("MultiOrSingle")) ? (int?)null : Convert.ToInt32(row["MultiOrSingle"]);
            _DetailBtnName = (row.IsNull("DetailBtnName")) ? (string)null : Convert.ToString(row["DetailBtnName"]);
            _mBaseRuleName = (row.IsNull("mBaseRuleName")) ? (string)null : Convert.ToString(row["mBaseRuleName"]);
            _ConfigId = (row.IsNull("ConfigId")) ? (int?)null : Convert.ToInt32(row["ConfigId"]);
            _mLevel = (row.IsNull("mLevel")) ? (int?)null : Convert.ToInt32(row["mLevel"]);
            _bLinkToBaseDetail = (row.IsNull("bLinkToBaseDetail")) ? (string)null : Convert.ToString(row["bLinkToBaseDetail"]);
            _UpdateFile = (row.IsNull("UpdateFile")) ? (string)null : Convert.ToString(row["UpdateFile"]);
            _ConfigForm = (row.IsNull("ConfigForm")) ? (string)null : Convert.ToString(row["ConfigForm"]);
            _FormStyle = (row.IsNull("FormStyle")) ? (int?)null : Convert.ToInt32(row["FormStyle"]);
            _ConfigUIMenu = (row.IsNull("ConfigUIMenu")) ? (string)null : Convert.ToString(row["ConfigUIMenu"]);
            _Keep01 = (row.IsNull("Keep01")) ? (string)null : Convert.ToString(row["Keep01"]);
            _Keep02 = (row.IsNull("Keep02")) ? (string)null : Convert.ToString(row["Keep02"]);
            _Keep03 = (row.IsNull("Keep03")) ? (string)null : Convert.ToString(row["Keep03"]);
            _Keep04 = (row.IsNull("Keep04")) ? (string)null : Convert.ToString(row["Keep04"]);
            _Space01 = (row.IsNull("Space01")) ? (double?)null : Convert.ToDouble(row["Space01"]);
            _Space02 = (row.IsNull("Space02")) ? (string)null : Convert.ToString(row["Space02"]);
            _Space03 = (row.IsNull("Space03")) ? (DateTime?)null : Convert.ToDateTime(row["Space03"]);
            _SpaceId = (row.IsNull("SpaceId")) ? (int?)null : Convert.ToInt32(row["SpaceId"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }

        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public string Tab
        {
            get { return _Tab; }
            set { if (this._Tab != value) _Tab = value; }
        }
        public string TableName
        {
            get { return _TableName; }
            set { if (this._TableName != value) _TableName = value; }
        }
        public string FormName
        {
            get { return _FormName; }
            set { if (this._FormName != value) _FormName = value; }
        }
        public int? ParentTab
        {
            get { return _ParentTab; }
            set { if (this._ParentTab != value) _ParentTab = value; }
        }
        public string TypeObject
        {
            get { return _TypeObject; }
            set { if (this._TypeObject != value) _TypeObject = value; }
        }
        public int? Detail
        {
            get { return _Detail; }
            set { if (this._Detail != value) _Detail = value; }
        }
        public string FogreinInfo
        {
            get { return _FogreinInfo; }
            set { if (this._FogreinInfo != value) _FogreinInfo = value; }
        }
        public int? MultiOrSingle
        {
            get { return _MultiOrSingle; }
            set { if (this._MultiOrSingle != value) _MultiOrSingle = value; }
        }
        public string DetailBtnName
        {
            get { return _DetailBtnName; }
            set { if (this._DetailBtnName != value) _DetailBtnName = value; }
        }
        public string mBaseRuleName
        {
            get { return _mBaseRuleName; }
            set { if (this._mBaseRuleName != value) _mBaseRuleName = value; }
        }
        public int? ConfigId
        {
            get { return _ConfigId; }
            set { if (this._ConfigId != value) _ConfigId = value; }
        }
        public int? mLevel
        {
            get { return _mLevel; }
            set { if (this._mLevel != value) _mLevel = value; }
        }
        public string bLinkToBaseDetail
        {
            get { return _bLinkToBaseDetail; }
            set { if (this._bLinkToBaseDetail != value) _bLinkToBaseDetail = value; }
        }
        public string UpdateFile
        {
            get { return _UpdateFile; }
            set { if (this._UpdateFile != value) _UpdateFile = value; }
        }
        public string ConfigForm
        {
            get { return _ConfigForm; }
            set { if (this._ConfigForm != value) _ConfigForm = value; }
        }
        public int? FormStyle
        {
            get { return _FormStyle; }
            set { if (this._FormStyle != value) _FormStyle = value; }
        }
        public string ConfigUIMenu
        {
            get { return _ConfigUIMenu; }
            set { if (this._ConfigUIMenu != value) _ConfigUIMenu = value; }
        }
        public string Keep01
        {
            get { return _Keep01; }
            set { if (this._Keep01 != value) _Keep01 = value; }
        }
        public string Keep02
        {
            get { return _Keep02; }
            set { if (this._Keep02 != value) _Keep02 = value; }
        }
        public string Keep03
        {
            get { return _Keep03; }
            set { if (this._Keep03 != value) _Keep03 = value; }
        }
        public string Keep04
        {
            get { return _Keep04; }
            set { if (this._Keep04 != value) _Keep04 = value; }
        }
        public double? Space01
        {
            get { return _Space01; }
            set { if (this._Space01 != value) _Space01 = value; }
        }
        public string Space02
        {
            get { return _Space02; }
            set { if (this._Space02 != value) _Space02 = value; }
        }
        public DateTime? Space03
        {
            get { return _Space03; }
            set { if (this._Space03 != value) _Space03 = value; }
        }
        public int? SpaceId
        {
            get { return _SpaceId; }
            set { if (this._SpaceId != value) _SpaceId = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }

    }


    public class zgcl_gcGobal_ACCOUNT_GroupRight00Inner
    {
        private int? _Id = null;
        private string _Ten = null;
        private string _GhiChu = null;
        private string _DefaultPage = null;
        private string _ThuMuc = null;
        private string _HinhAnhIcon = null;
        private string _ConfigUIMenu = null;
        private string _Keep01 = null;
        private string _Keep02 = null;
        private string _Keep03 = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public zgcl_gcGobal_ACCOUNT_GroupRight00Inner()
        {
        }
        public zgcl_gcGobal_ACCOUNT_GroupRight00Inner(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _Ten = (reader.IsDBNull(reader.GetOrdinal("Ten"))) ? (string)null : Convert.ToString(reader["Ten"]);
            _GhiChu = (reader.IsDBNull(reader.GetOrdinal("GhiChu"))) ? (string)null : Convert.ToString(reader["GhiChu"]);
            _DefaultPage = (reader.IsDBNull(reader.GetOrdinal("DefaultPage"))) ? (string)null : Convert.ToString(reader["DefaultPage"]);
            _ThuMuc = (reader.IsDBNull(reader.GetOrdinal("ThuMuc"))) ? (string)null : Convert.ToString(reader["ThuMuc"]);
            _HinhAnhIcon = (reader.IsDBNull(reader.GetOrdinal("HinhAnhIcon"))) ? (string)null : Convert.ToString(reader["HinhAnhIcon"]);
            _ConfigUIMenu = (reader.IsDBNull(reader.GetOrdinal("ConfigUIMenu"))) ? (string)null : Convert.ToString(reader["ConfigUIMenu"]);
            _Keep01 = (reader.IsDBNull(reader.GetOrdinal("Keep01"))) ? (string)null : Convert.ToString(reader["Keep01"]);
            _Keep02 = (reader.IsDBNull(reader.GetOrdinal("Keep02"))) ? (string)null : Convert.ToString(reader["Keep02"]);
            _Keep03 = (reader.IsDBNull(reader.GetOrdinal("Keep03"))) ? (string)null : Convert.ToString(reader["Keep03"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public zgcl_gcGobal_ACCOUNT_GroupRight00Inner(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _Ten = (row.IsNull("Ten")) ? (string)null : Convert.ToString(row["Ten"]);
            _GhiChu = (row.IsNull("GhiChu")) ? (string)null : Convert.ToString(row["GhiChu"]);
            _DefaultPage = (row.IsNull("DefaultPage")) ? (string)null : Convert.ToString(row["DefaultPage"]);
            _ThuMuc = (row.IsNull("ThuMuc")) ? (string)null : Convert.ToString(row["ThuMuc"]);
            _HinhAnhIcon = (row.IsNull("HinhAnhIcon")) ? (string)null : Convert.ToString(row["HinhAnhIcon"]);
            _ConfigUIMenu = (row.IsNull("ConfigUIMenu")) ? (string)null : Convert.ToString(row["ConfigUIMenu"]);
            _Keep01 = (row.IsNull("Keep01")) ? (string)null : Convert.ToString(row["Keep01"]);
            _Keep02 = (row.IsNull("Keep02")) ? (string)null : Convert.ToString(row["Keep02"]);
            _Keep03 = (row.IsNull("Keep03")) ? (string)null : Convert.ToString(row["Keep03"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public string Ten
        {
            get { return _Ten; }
            set { if (this._Ten != value) _Ten = value; }
        }
        public string GhiChu
        {
            get { return _GhiChu; }
            set { if (this._GhiChu != value) _GhiChu = value; }
        }
        public string DefaultPage
        {
            get { return _DefaultPage; }
            set { if (this._DefaultPage != value) _DefaultPage = value; }
        }
        public string ThuMuc
        {
            get { return _ThuMuc; }
            set { if (this._ThuMuc != value) _ThuMuc = value; }
        }
        public string HinhAnhIcon
        {
            get { return _HinhAnhIcon; }
            set { if (this._HinhAnhIcon != value) _HinhAnhIcon = value; }
        }
        public string ConfigUIMenu
        {
            get { return _ConfigUIMenu; }
            set { if (this._ConfigUIMenu != value) _ConfigUIMenu = value; }
        }
        public string Keep01
        {
            get { return _Keep01; }
            set { if (this._Keep01 != value) _Keep01 = value; }
        }
        public string Keep02
        {
            get { return _Keep02; }
            set { if (this._Keep02 != value) _Keep02 = value; }
        }
        public string Keep03
        {
            get { return _Keep03; }
            set { if (this._Keep03 != value) _Keep03 = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }

    public class zgcl_zgcBUILDIN_GOBAL00Inner
    {
        private int? _Id = null;
        private string _VattuIdName = null;
        private string _Path = null;
        private bool? _bBuild = null;
        private string _ImagePath = null;
        private string _FormName = null;
        private string _CurParentName = null;
        private string _FileChangeCode = null;
        private string _HinhAnhIcon = null;
        private string _ConfigUIMenu = null;
        private int? _NhomQuyenId = null;
        private string _Keep01 = null;
        private string _Keep02 = null;
        private string _Keep03 = null;
        private double? _Space01 = null;
        private string _Space02 = null;
        private DateTime? _Space03 = null;
        private int? _SpaceId = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public zgcl_zgcBUILDIN_GOBAL00Inner()
        {
        }
        public zgcl_zgcBUILDIN_GOBAL00Inner(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _VattuIdName = (reader.IsDBNull(reader.GetOrdinal("Name"))) ? (string)null : Convert.ToString(reader["Name"]);
            _Path = (reader.IsDBNull(reader.GetOrdinal("Path"))) ? (string)null : Convert.ToString(reader["Path"]);
            _bBuild = (reader.IsDBNull(reader.GetOrdinal("bBuild"))) ? (bool?)null : Convert.ToBoolean(reader["bBuild"]);
            _ImagePath = (reader.IsDBNull(reader.GetOrdinal("ImagePath"))) ? (string)null : Convert.ToString(reader["ImagePath"]);
            _FormName = (reader.IsDBNull(reader.GetOrdinal("FormName"))) ? (string)null : Convert.ToString(reader["FormName"]);
            _CurParentName = (reader.IsDBNull(reader.GetOrdinal("CurParentName"))) ? (string)null : Convert.ToString(reader["CurParentName"]);
            _FileChangeCode = (reader.IsDBNull(reader.GetOrdinal("FileChangeCode"))) ? (string)null : Convert.ToString(reader["FileChangeCode"]);
            _HinhAnhIcon = (reader.IsDBNull(reader.GetOrdinal("HinhAnhIcon"))) ? (string)null : Convert.ToString(reader["HinhAnhIcon"]);
            _ConfigUIMenu = (reader.IsDBNull(reader.GetOrdinal("ConfigUIMenu"))) ? (string)null : Convert.ToString(reader["ConfigUIMenu"]);
            _NhomQuyenId = (reader.IsDBNull(reader.GetOrdinal("NhomQuyenId"))) ? (int?)null : Convert.ToInt32(reader["NhomQuyenId"]);
            _Keep01 = (reader.IsDBNull(reader.GetOrdinal("Keep01"))) ? (string)null : Convert.ToString(reader["Keep01"]);
            _Keep02 = (reader.IsDBNull(reader.GetOrdinal("Keep02"))) ? (string)null : Convert.ToString(reader["Keep02"]);
            _Keep03 = (reader.IsDBNull(reader.GetOrdinal("Keep03"))) ? (string)null : Convert.ToString(reader["Keep03"]);
            _Space01 = (reader.IsDBNull(reader.GetOrdinal("Space01"))) ? (double?)null : Convert.ToDouble(reader["Space01"]);
            _Space02 = (reader.IsDBNull(reader.GetOrdinal("Space02"))) ? (string)null : Convert.ToString(reader["Space02"]);
            _Space03 = (reader.IsDBNull(reader.GetOrdinal("Space03"))) ? (DateTime?)null : Convert.ToDateTime(reader["Space03"]);
            _SpaceId = (reader.IsDBNull(reader.GetOrdinal("SpaceId"))) ? (int?)null : Convert.ToInt32(reader["SpaceId"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public zgcl_zgcBUILDIN_GOBAL00Inner(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _VattuIdName = (row.IsNull("Name")) ? (string)null : Convert.ToString(row["Name"]);
            _Path = (row.IsNull("Path")) ? (string)null : Convert.ToString(row["Path"]);
            _bBuild = (row.IsNull("bBuild")) ? (bool?)null : Convert.ToBoolean(row["bBuild"]);
            _ImagePath = (row.IsNull("ImagePath")) ? (string)null : Convert.ToString(row["ImagePath"]);
            _FormName = (row.IsNull("FormName")) ? (string)null : Convert.ToString(row["FormName"]);
            _CurParentName = (row.IsNull("CurParentName")) ? (string)null : Convert.ToString(row["CurParentName"]);
            _FileChangeCode = (row.IsNull("FileChangeCode")) ? (string)null : Convert.ToString(row["FileChangeCode"]);
            _HinhAnhIcon = (row.IsNull("HinhAnhIcon")) ? (string)null : Convert.ToString(row["HinhAnhIcon"]);
            _ConfigUIMenu = (row.IsNull("ConfigUIMenu")) ? (string)null : Convert.ToString(row["ConfigUIMenu"]);
            _NhomQuyenId = (row.IsNull("NhomQuyenId")) ? (int?)null : Convert.ToInt32(row["NhomQuyenId"]);
            _Keep01 = (row.IsNull("Keep01")) ? (string)null : Convert.ToString(row["Keep01"]);
            _Keep02 = (row.IsNull("Keep02")) ? (string)null : Convert.ToString(row["Keep02"]);
            _Keep03 = (row.IsNull("Keep03")) ? (string)null : Convert.ToString(row["Keep03"]);
            _Space01 = (row.IsNull("Space01")) ? (double?)null : Convert.ToDouble(row["Space01"]);
            _Space02 = (row.IsNull("Space02")) ? (string)null : Convert.ToString(row["Space02"]);
            _Space03 = (row.IsNull("Space03")) ? (DateTime?)null : Convert.ToDateTime(row["Space03"]);
            _SpaceId = (row.IsNull("SpaceId")) ? (int?)null : Convert.ToInt32(row["SpaceId"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public string Name
        {
            get { return _VattuIdName; }
            set { if (this._VattuIdName != value) _VattuIdName = value; }
        }
        public string Path
        {
            get { return _Path; }
            set { if (this._Path != value) _Path = value; }
        }
        public bool? bBuild
        {
            get { return _bBuild; }
            set { if (this._bBuild != value) _bBuild = value; }
        }
        public string ImagePath
        {
            get { return _ImagePath; }
            set { if (this._ImagePath != value) _ImagePath = value; }
        }
        public string FormName
        {
            get { return _FormName; }
            set { if (this._FormName != value) _FormName = value; }
        }
        public string CurParentName
        {
            get { return _CurParentName; }
            set { if (this._CurParentName != value) _CurParentName = value; }
        }
        public string FileChangeCode
        {
            get { return _FileChangeCode; }
            set { if (this._FileChangeCode != value) _FileChangeCode = value; }
        }
        public string HinhAnhIcon
        {
            get { return _HinhAnhIcon; }
            set { if (this._HinhAnhIcon != value) _HinhAnhIcon = value; }
        }
        public string ConfigUIMenu
        {
            get { return _ConfigUIMenu; }
            set { if (this._ConfigUIMenu != value) _ConfigUIMenu = value; }
        }
        public int? NhomQuyenId
        {
            get { return _NhomQuyenId; }
            set { if (this._NhomQuyenId != value) _NhomQuyenId = value; }
        }
        public string Keep01
        {
            get { return _Keep01; }
            set { if (this._Keep01 != value) _Keep01 = value; }
        }
        public string Keep02
        {
            get { return _Keep02; }
            set { if (this._Keep02 != value) _Keep02 = value; }
        }
        public string Keep03
        {
            get { return _Keep03; }
            set { if (this._Keep03 != value) _Keep03 = value; }
        }
        public double? Space01
        {
            get { return _Space01; }
            set { if (this._Space01 != value) _Space01 = value; }
        }
        public string Space02
        {
            get { return _Space02; }
            set { if (this._Space02 != value) _Space02 = value; }
        }
        public DateTime? Space03
        {
            get { return _Space03; }
            set { if (this._Space03 != value) _Space03 = value; }
        }
        public int? SpaceId
        {
            get { return _SpaceId; }
            set { if (this._SpaceId != value) _SpaceId = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }
    public class zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter
    {
        private int? _Id = null;
        private int? _TaiKhoanId = null;
        private string _Tab = null;
        private string _TableName = null;
        private string _FormName = null;
        private int? _ParentTab = null;
        private int? _Detail = null;
        private string _FogreinInfo = null;
        private string _Path = null;
        private string _Page = null;
        private string _HinhAnhIcon = null;
        private string _ConfigUIMenu = null;
        private string _Keep01 = null;
        private string _Keep02 = null;
        private string _Keep03 = null;
        private int? _isInsert = null;
        private int? _isUpdate = null;
        private int? _isDelete = null;
        private int? _isView = null;
        private int? _isPrgAccountId = null;
        private int? _isPrgInUse = null;
        private DateTime? _isPrgCreateDate = null;
        private int? _isPrgWaitingConfirmStatus = null;
        private int? _isPrgbAdminDeleted = null;
        private int? _isPrgbUserDeleted = null;
        private int? _isPrgbShow = null;
        private int? _isPrgOrdered = null;
        private string _isPrgVNKoDau = null;
        private string _isPrgSmField = null;
        private string _isPrgPartComp = null;
        private int? _isPrgEncriptData = null;
        private int? _isPrgDescriptData = null;
        private int? _isPrgAccountUpdateId = null;
        private string _TaiKhoanIdUsername = null;
        private long? _ROWNUM = null;
        public string IdOut = null; private string _bScript = "";

        public zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter()
        {
        }
        public zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter(SqlDataReader reader, bool isHasRowNum)
        {
            _Id = (reader.IsDBNull(reader.GetOrdinal("Id"))) ? (int?)null : Convert.ToInt32(reader["Id"]);
            _TaiKhoanId = (reader.IsDBNull(reader.GetOrdinal("TaiKhoanId"))) ? (int?)null : Convert.ToInt32(reader["TaiKhoanId"]);
            _Tab = (reader.IsDBNull(reader.GetOrdinal("Tab"))) ? (string)null : Convert.ToString(reader["Tab"]);
            _TableName = (reader.IsDBNull(reader.GetOrdinal("TableName"))) ? (string)null : Convert.ToString(reader["TableName"]);
            _FormName = (reader.IsDBNull(reader.GetOrdinal("FormName"))) ? (string)null : Convert.ToString(reader["FormName"]);
            _ParentTab = (reader.IsDBNull(reader.GetOrdinal("ParentTab"))) ? (int?)null : Convert.ToInt32(reader["ParentTab"]);
            _Detail = (reader.IsDBNull(reader.GetOrdinal("Detail"))) ? (int?)null : Convert.ToInt32(reader["Detail"]);
            _FogreinInfo = (reader.IsDBNull(reader.GetOrdinal("FogreinInfo"))) ? (string)null : Convert.ToString(reader["FogreinInfo"]);
            _Path = (reader.IsDBNull(reader.GetOrdinal("Path"))) ? (string)null : Convert.ToString(reader["Path"]);
            _Page = (reader.IsDBNull(reader.GetOrdinal("Page"))) ? (string)null : Convert.ToString(reader["Page"]);
            _HinhAnhIcon = (reader.IsDBNull(reader.GetOrdinal("HinhAnhIcon"))) ? (string)null : Convert.ToString(reader["HinhAnhIcon"]);
            _ConfigUIMenu = (reader.IsDBNull(reader.GetOrdinal("ConfigUIMenu"))) ? (string)null : Convert.ToString(reader["ConfigUIMenu"]);
            _Keep01 = (reader.IsDBNull(reader.GetOrdinal("Keep01"))) ? (string)null : Convert.ToString(reader["Keep01"]);
            _Keep02 = (reader.IsDBNull(reader.GetOrdinal("Keep02"))) ? (string)null : Convert.ToString(reader["Keep02"]);
            _Keep03 = (reader.IsDBNull(reader.GetOrdinal("Keep03"))) ? (string)null : Convert.ToString(reader["Keep03"]);
            _isInsert = (reader.IsDBNull(reader.GetOrdinal("isInsert"))) ? (int?)null : Convert.ToInt32(reader["isInsert"]);
            _isUpdate = (reader.IsDBNull(reader.GetOrdinal("isUpdate"))) ? (int?)null : Convert.ToInt32(reader["isUpdate"]);
            _isDelete = (reader.IsDBNull(reader.GetOrdinal("isDelete"))) ? (int?)null : Convert.ToInt32(reader["isDelete"]);
            _isView = (reader.IsDBNull(reader.GetOrdinal("isView"))) ? (int?)null : Convert.ToInt32(reader["isView"]);
            _isPrgAccountId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountId"]);
            _isPrgInUse = (reader.IsDBNull(reader.GetOrdinal("isPrgInUse"))) ? (int?)null : Convert.ToInt32(reader["isPrgInUse"]);
            _isPrgCreateDate = (reader.IsDBNull(reader.GetOrdinal("isPrgCreateDate"))) ? (DateTime?)null : Convert.ToDateTime(reader["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (reader.IsDBNull(reader.GetOrdinal("isPrgWaitingConfirmStatus"))) ? (int?)null : Convert.ToInt32(reader["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbAdminDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (reader.IsDBNull(reader.GetOrdinal("isPrgbUserDeleted"))) ? (int?)null : Convert.ToInt32(reader["isPrgbUserDeleted"]);
            _isPrgbShow = (reader.IsDBNull(reader.GetOrdinal("isPrgbShow"))) ? (int?)null : Convert.ToInt32(reader["isPrgbShow"]);
            _isPrgOrdered = (reader.IsDBNull(reader.GetOrdinal("isPrgOrdered"))) ? (int?)null : Convert.ToInt32(reader["isPrgOrdered"]);
            _isPrgVNKoDau = (reader.IsDBNull(reader.GetOrdinal("isPrgVNKoDau"))) ? (string)null : Convert.ToString(reader["isPrgVNKoDau"]);
            _isPrgSmField = (reader.IsDBNull(reader.GetOrdinal("isPrgSmField"))) ? (string)null : Convert.ToString(reader["isPrgSmField"]);
            _isPrgPartComp = (reader.IsDBNull(reader.GetOrdinal("isPrgPartComp"))) ? (string)null : Convert.ToString(reader["isPrgPartComp"]);
            _isPrgEncriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgEncriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgEncriptData"]);
            _isPrgDescriptData = (reader.IsDBNull(reader.GetOrdinal("isPrgDescriptData"))) ? (int?)null : Convert.ToInt32(reader["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (reader.IsDBNull(reader.GetOrdinal("isPrgAccountUpdateId"))) ? (int?)null : Convert.ToInt32(reader["isPrgAccountUpdateId"]);
            _TaiKhoanIdUsername = (reader.IsDBNull(reader.GetOrdinal("TaiKhoanIdUsername"))) ? (string)null : Convert.ToString(reader["TaiKhoanIdUsername"]);
            if (isHasRowNum)
                _ROWNUM = (reader.IsDBNull(reader.GetOrdinal("ROWNUM"))) ? (long?)null : Convert.ToInt64(reader["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }
        public zgcl_gcGobal_ACCOUNT_Account_DefPages00Inter(DataRow row, bool isHasRowNum)
        {
            _Id = (row.IsNull("Id")) ? (int?)null : Convert.ToInt32(row["Id"]);
            _TaiKhoanId = (row.IsNull("TaiKhoanId")) ? (int?)null : Convert.ToInt32(row["TaiKhoanId"]);
            _Tab = (row.IsNull("Tab")) ? (string)null : Convert.ToString(row["Tab"]);
            _TableName = (row.IsNull("TableName")) ? (string)null : Convert.ToString(row["TableName"]);
            _FormName = (row.IsNull("FormName")) ? (string)null : Convert.ToString(row["FormName"]);
            _ParentTab = (row.IsNull("ParentTab")) ? (int?)null : Convert.ToInt32(row["ParentTab"]);
            _Detail = (row.IsNull("Detail")) ? (int?)null : Convert.ToInt32(row["Detail"]);
            _FogreinInfo = (row.IsNull("FogreinInfo")) ? (string)null : Convert.ToString(row["FogreinInfo"]);
            _Path = (row.IsNull("Path")) ? (string)null : Convert.ToString(row["Path"]);
            _Page = (row.IsNull("Page")) ? (string)null : Convert.ToString(row["Page"]);
            _HinhAnhIcon = (row.IsNull("HinhAnhIcon")) ? (string)null : Convert.ToString(row["HinhAnhIcon"]);
            _ConfigUIMenu = (row.IsNull("ConfigUIMenu")) ? (string)null : Convert.ToString(row["ConfigUIMenu"]);
            _Keep01 = (row.IsNull("Keep01")) ? (string)null : Convert.ToString(row["Keep01"]);
            _Keep02 = (row.IsNull("Keep02")) ? (string)null : Convert.ToString(row["Keep02"]);
            _Keep03 = (row.IsNull("Keep03")) ? (string)null : Convert.ToString(row["Keep03"]);
            _isInsert = (row.IsNull("isInsert")) ? (int?)null : Convert.ToInt32(row["isInsert"]);
            _isUpdate = (row.IsNull("isUpdate")) ? (int?)null : Convert.ToInt32(row["isUpdate"]);
            _isDelete = (row.IsNull("isDelete")) ? (int?)null : Convert.ToInt32(row["isDelete"]);
            _isView = (row.IsNull("isView")) ? (int?)null : Convert.ToInt32(row["isView"]);
            _isPrgAccountId = (row.IsNull("isPrgAccountId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountId"]);
            _isPrgInUse = (row.IsNull("isPrgInUse")) ? (int?)null : Convert.ToInt32(row["isPrgInUse"]);
            _isPrgCreateDate = (row.IsNull("isPrgCreateDate")) ? (DateTime?)null : Convert.ToDateTime(row["isPrgCreateDate"]);
            _isPrgWaitingConfirmStatus = (row.IsNull("isPrgWaitingConfirmStatus")) ? (int?)null : Convert.ToInt32(row["isPrgWaitingConfirmStatus"]);
            _isPrgbAdminDeleted = (row.IsNull("isPrgbAdminDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbAdminDeleted"]);
            _isPrgbUserDeleted = (row.IsNull("isPrgbUserDeleted")) ? (int?)null : Convert.ToInt32(row["isPrgbUserDeleted"]);
            _isPrgbShow = (row.IsNull("isPrgbShow")) ? (int?)null : Convert.ToInt32(row["isPrgbShow"]);
            _isPrgOrdered = (row.IsNull("isPrgOrdered")) ? (int?)null : Convert.ToInt32(row["isPrgOrdered"]);
            _isPrgVNKoDau = (row.IsNull("isPrgVNKoDau")) ? (string)null : Convert.ToString(row["isPrgVNKoDau"]);
            _isPrgSmField = (row.IsNull("isPrgSmField")) ? (string)null : Convert.ToString(row["isPrgSmField"]);
            _isPrgPartComp = (row.IsNull("isPrgPartComp")) ? (string)null : Convert.ToString(row["isPrgPartComp"]);
            _isPrgEncriptData = (row.IsNull("isPrgEncriptData")) ? (int?)null : Convert.ToInt32(row["isPrgEncriptData"]);
            _isPrgDescriptData = (row.IsNull("isPrgDescriptData")) ? (int?)null : Convert.ToInt32(row["isPrgDescriptData"]);
            _isPrgAccountUpdateId = (row.IsNull("isPrgAccountUpdateId")) ? (int?)null : Convert.ToInt32(row["isPrgAccountUpdateId"]);
            _TaiKhoanIdUsername = (row.IsNull("TaiKhoanIdUsername")) ? (string)null : Convert.ToString(row["TaiKhoanIdUsername"]);
            if (isHasRowNum)
                _ROWNUM = (row.IsNull("ROWNUM")) ? (long?)null : Convert.ToInt64(row["ROWNUM"]);
            _bScript = zgc0HelperSecurity.Encript(_Id.Value.ToString());
        }

        public string bScript
        {
            get { return _bScript; }
            set { if (this._bScript != value) _bScript = value; }
        }
        public int? Id
        {
            get { return _Id; }
            set { if (this._Id != value) _Id = value; }
        }
        public int? TaiKhoanId
        {
            get { return _TaiKhoanId; }
            set { if (this._TaiKhoanId != value) _TaiKhoanId = value; }
        }
        public string Tab
        {
            get { return _Tab; }
            set { if (this._Tab != value) _Tab = value; }
        }
        public string TableName
        {
            get { return _TableName; }
            set { if (this._TableName != value) _TableName = value; }
        }
        public string FormName
        {
            get { return _FormName; }
            set { if (this._FormName != value) _FormName = value; }
        }
        public int? ParentTab
        {
            get { return _ParentTab; }
            set { if (this._ParentTab != value) _ParentTab = value; }
        }
        public int? Detail
        {
            get { return _Detail; }
            set { if (this._Detail != value) _Detail = value; }
        }
        public string FogreinInfo
        {
            get { return _FogreinInfo; }
            set { if (this._FogreinInfo != value) _FogreinInfo = value; }
        }
        public string Path
        {
            get { return _Path; }
            set { if (this._Path != value) _Path = value; }
        }
        public string Page
        {
            get { return _Page; }
            set { if (this._Page != value) _Page = value; }
        }
        public string HinhAnhIcon
        {
            get { return _HinhAnhIcon; }
            set { if (this._HinhAnhIcon != value) _HinhAnhIcon = value; }
        }
        public string ConfigUIMenu
        {
            get { return _ConfigUIMenu; }
            set { if (this._ConfigUIMenu != value) _ConfigUIMenu = value; }
        }
        public string Keep01
        {
            get { return _Keep01; }
            set { if (this._Keep01 != value) _Keep01 = value; }
        }
        public string Keep02
        {
            get { return _Keep02; }
            set { if (this._Keep02 != value) _Keep02 = value; }
        }
        public string Keep03
        {
            get { return _Keep03; }
            set { if (this._Keep03 != value) _Keep03 = value; }
        }
        public int? isInsert
        {
            get { return _isInsert; }
            set { if (this._isInsert != value) _isInsert = value; }
        }
        public int? isUpdate
        {
            get { return _isUpdate; }
            set { if (this._isUpdate != value) _isUpdate = value; }
        }
        public int? isDelete
        {
            get { return _isDelete; }
            set { if (this._isDelete != value) _isDelete = value; }
        }
        public int? isView
        {
            get { return _isView; }
            set { if (this._isView != value) _isView = value; }
        }
        public int? isPrgAccountId
        {
            get { return _isPrgAccountId; }
            set { if (this._isPrgAccountId != value) _isPrgAccountId = value; }
        }
        public int? isPrgInUse
        {
            get { return _isPrgInUse; }
            set { if (this._isPrgInUse != value) _isPrgInUse = value; }
        }
        public DateTime? isPrgCreateDate
        {
            get { return _isPrgCreateDate; }
            set { if (this._isPrgCreateDate != value) _isPrgCreateDate = value; }
        }
        public int? isPrgWaitingConfirmStatus
        {
            get { return _isPrgWaitingConfirmStatus; }
            set { if (this._isPrgWaitingConfirmStatus != value) _isPrgWaitingConfirmStatus = value; }
        }
        public int? isPrgbAdminDeleted
        {
            get { return _isPrgbAdminDeleted; }
            set { if (this._isPrgbAdminDeleted != value) _isPrgbAdminDeleted = value; }
        }
        public int? isPrgbUserDeleted
        {
            get { return _isPrgbUserDeleted; }
            set { if (this._isPrgbUserDeleted != value) _isPrgbUserDeleted = value; }
        }
        public int? isPrgbShow
        {
            get { return _isPrgbShow; }
            set { if (this._isPrgbShow != value) _isPrgbShow = value; }
        }
        public int? isPrgOrdered
        {
            get { return _isPrgOrdered; }
            set { if (this._isPrgOrdered != value) _isPrgOrdered = value; }
        }
        public string isPrgVNKoDau
        {
            get { return _isPrgVNKoDau; }
            set { if (this._isPrgVNKoDau != value) _isPrgVNKoDau = value; }
        }
        public string isPrgSmField
        {
            get { return _isPrgSmField; }
            set { if (this._isPrgSmField != value) _isPrgSmField = value; }
        }
        public string isPrgPartComp
        {
            get { return _isPrgPartComp; }
            set { if (this._isPrgPartComp != value) _isPrgPartComp = value; }
        }
        public int? isPrgEncriptData
        {
            get { return _isPrgEncriptData; }
            set { if (this._isPrgEncriptData != value) _isPrgEncriptData = value; }
        }
        public int? isPrgDescriptData
        {
            get { return _isPrgDescriptData; }
            set { if (this._isPrgDescriptData != value) _isPrgDescriptData = value; }
        }
        public int? isPrgAccountUpdateId
        {
            get { return _isPrgAccountUpdateId; }
            set { if (this._isPrgAccountUpdateId != value) _isPrgAccountUpdateId = value; }
        }
        public string TaiKhoanIdUsername
        {
            get { return _TaiKhoanIdUsername; }
            set { if (this._TaiKhoanIdUsername != value) _TaiKhoanIdUsername = value; }
        }
        public long? ROWNUM
        {
            get { return _ROWNUM; }
            set { if (this._ROWNUM != value) _ROWNUM = value; }
        }

    }
}