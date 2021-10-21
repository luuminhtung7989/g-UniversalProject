using System.Collections.Generic;
using System.Configuration;

namespace WebApplication.Core
{

    public class P
    {
        public static string _sc = ConfigurationManager.AppSettings["ConnectionString"];
        //public static string _sc = "server=ADMINISTRATOR\\SQLEXPRESS;database=CMRCanteenBaRia;uid=cmccanteen;pwd=canteen@123";
        //for gcGobal_WEBSITE_NEWS_GROUP_TYPE
        public static void gcGobal_WEBSITE_NEWS_GROUP_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_NEWS_TYPE
		public static void gcGobal_WEBSITE_NEWS_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("DirName").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_AboutEvents
		public static void gcGobal_INCOM_AboutEvents(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_CustomerGroup
		public static void gcGobal_INCOM_CustomerGroup(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_CustomerDebt
		public static void gcGobal_INCOM_CustomerDebt(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("KHId").Pc("LoaiKhachId").Pc("NgayLap").Pc("TuNgay").Pc("DenNgay").Pc("Thang").Pc("Nam").Pc("TongDoanhSoHangTraLaiTrongKy").Pc("TongDoanhSoBanTrongKy").Pc("TongTienDaThuTrongKy").Pc("DiscountCustTrongKy").Pc("CongNoTrongKy").Pc("TongCongNoTinhDenKyNay").Pc("NhanVienThuNoId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_StatusContactResult
		public static void gcGobal_CUST_Customer_StatusContactResult(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_Question
		public static void gcGobal_CUST_Customer_Question(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_SUMFollowDay
		public static void gcGobal_INCOM_Receipt_SUMFollowDay(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("KHId").Pc("LoaiKhachId").Pc("NgayLap").Pc("TuNgay").Pc("DenNgay").Pc("Thang").Pc("Nam").Pc("TongDoanhSoHangTraLaiTrongKy").Pc("TongDoanhSoBanTrongKy").Pc("TongTienDaThuTrongKy").Pc("DiscountCustTrongKy").Pc("CongNoTrongKy").Pc("TongCongNoTinhDenKyNay").Pc("NhanVienThuNoId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_Answer
		public static void gcGobal_CUST_Customer_Answer(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Married
		public static void gcGobal_LITERAL_Married(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStockType
		public static void gcGobal_STOCK_gcStockType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Marriage
		public static void gcGobal_LITERAL_Marriage(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Hoppy_Type
		public static void gcGobal_LITERAL_Hoppy_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcDateList
		public static void gcGobal_STOCK_gcDateList(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("T1").Pc("T2").Pc("Description").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("Code").Pc("Name").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_Right
		public static void gcGobal_ACCOUNT_Right(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Ten").Pc("GhiChu").Pc("DefaultPage").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcMax
		public static void gcGobal_STOCK_gcMax(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("m").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_SHIFTS
		public static void gcGobal_LITERAL_SHIFTS(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("T1").Pc("T2").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_GroupRight
		public static void gcGobal_ACCOUNT_GroupRight(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Ten").Pc("GhiChu").Pc("DefaultPage").Pc("ThuMuc").Pc("HinhAnhIcon").Pc("ConfigUIMenu").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_Account_Profile
		public static void gcGobal_ACCOUNT_Account_Profile(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("UserName").Pc("IP0").Pc("IP1").Pc("IP2").Pc("EmailValid").Pc("PhoneValid").Pc("BossPhoneValid").Pc("SMSValid").Pc("AccountAccess").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Unit_Group
		public static void gcGobal_LITERAL_Unit_Group(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order_Mailisa_NgoaiCanh
		public static void gcGobal_INCOM_Order_Mailisa_NgoaiCanh(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Professtional
		public static void gcGobal_LITERAL_Professtional(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order_Target
		public static void gcGobal_INCOM_Order_Target(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Positions
		public static void gcGobal_LITERAL_Positions(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Religion
		public static void gcGobal_LITERAL_Religion(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_DOCUMENT_Direction
		public static void gcGobal_DOCUMENT_Direction(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_Hoppy
		public static void gcGobal_USER_Hoppy(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_SMS_SEND_MEASSAGE
		public static void gcGobal_CUST_SMS_SEND_MEASSAGE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Name").Pc("Mobile").Pc("Message").Pc("Adress").Pc("CustomerType").Pc("CustomerGroupType").Pc("Status").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_Group
		public static void gcGobal_USER_Group(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("GroupName").Pc("GroupDesc").Pc("GroupShow").Pc("AccountID").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_CustomerCardType
		public static void gcGobal_CUST_CustomerCardType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProductList_GroupType
		public static void gcGobal_STOCK_gcProductList_GroupType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_Type
		public static void gcGobal_EMPLOY_Salary_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PRODUCT_GROUPTYPE
		public static void gcGobal_WEBSITE_PRODUCT_GROUPTYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_TrainningPriceOneLession
		public static void gcGobal_EMPLOY_Salary_TrainningPriceOneLession(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Price").Pc("Discount").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_COUNTER_QT
		public static void gcGobal_WEBSITE_COUNTER_QT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Counter").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_COUNTER
		public static void gcGobal_WEBSITE_COUNTER(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Counter").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_MethodContactId
		public static void gcGobal_CUST_Customer_MethodContactId(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_User_Type
		public static void gcGobal_USER_User_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_DOCUMENT_Orgnization
		public static void gcGobal_DOCUMENT_Orgnization(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("Type").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_DOCUMENT_Type
		public static void gcGobal_DOCUMENT_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_COMP_Company
		public static void gcGobal_COMP_Company(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CODE").Pc("NAME").Pc("ENAME").Pc("ADDRESS").Pc("TEL").Pc("MOBILE").Pc("SoTK").Pc("FAX").Pc("MAIL").Pc("WEBSITE").Pc("CONFIG").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_CustomerReflectStatus
		public static void gcGobal_INCOM_CustomerReflectStatus(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Blood
		public static void gcGobal_LITERAL_Blood(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_TakeCareCustomerStatus
		public static void gcGobal_INCOM_TakeCareCustomerStatus(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_SMS_LIST_FIXMOBILE
		public static void gcGobal_CUST_SMS_LIST_FIXMOBILE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Adress").Pc("Mobile").Pc("Message").Pc("CustomerType").Pc("CustomerGroupType").Pc("Status").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_SMS_LIST_CMD
		public static void gcGobal_CUST_SMS_LIST_CMD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Adress").Pc("Mobile").Pc("Email").Pc("CmdSMS").Pc("Status").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_SUMFollowMonth
		public static void gcGobal_INCOM_Receipt_SUMFollowMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("KHId").Pc("LoaiKhachId").Pc("NgayLap").Pc("TuNgay").Pc("DenNgay").Pc("Thang").Pc("Nam").Pc("TongDoanhSoHangTraLaiTrongKy").Pc("TongDoanhSoBanTrongKy").Pc("TongTienDaThuTrongKy").Pc("DiscountCustTrongKy").Pc("CongNoTrongKy").Pc("TongCongNoTinhDenKyNay").Pc("NhanVienThuNoId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_USERWEBSITE_MODULE
		public static void zgcBUILDIN_GOBAL_USERWEBSITE_MODULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_SMS_LIST
		public static void gcGobal_CUST_SMS_LIST(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Adress").Pc("Mobile").Pc("CustomerType").Pc("CustomerGroupType").Pc("Status").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgAccountUpdateId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_AutoGenCode
		public static void zgcBUILDIN_GOBAL_AutoGenCode(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Name").Pc("Thoigian").Pc("CurCount").Pc("CountRow").Pc("Type").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_ADMIN_CRM_DAOTAO_MUDULE
		public static void zgcBUILDIN_GOBAL_ADMIN_CRM_DAOTAO_MUDULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_SMS_MODULE
		public static void zgcBUILDIN_GOBAL_SMS_MODULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_ADMIN_SERVICE_MUDULE
		public static void zgcBUILDIN_GOBAL_ADMIN_SERVICE_MUDULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL
		public static void zgcBUILDIN_GOBAL(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Name").Pc("Path").Pc("bBuild").Pc("ImagePath").Pc("FormName").Pc("CurParentName").Pc("FileChangeCode").Pc("HinhAnhIcon").Pc("ConfigUIMenu").Pc("NhomQuyenId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_ONE_MUDULE
		public static void zgcBUILDIN_GOBAL_ONE_MUDULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_SERVICE_TYPE
		public static void gcGobal_WEBSITE_SERVICE_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStatus
		public static void gcGobal_STOCK_gcStatus(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_DEFINE_STYLE_TYPE
		public static void gcGobal_WEBSITE_DEFINE_STYLE_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcService_Type
		public static void gcGobal_STOCK_gcService_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Status
		public static void gcGobal_INCOM_Status(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SERVICE_Receipt_Profile
		public static void gcGobal_INCOM_SERVICE_Receipt_Profile(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("hinhanhFileName").Pc("ShortName").Pc("ContentFiles").Pc("DateExpire").Pc("IsDownload").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PAGE_CONTENT
		public static void gcGobal_WEBSITE_PAGE_CONTENT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PageId").Pc("BlockNumber").Pc("OrderContent").Pc("StyleLayout").Pc("StyeImageLayout").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("DataIsFromWhre").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Occupation
		public static void gcGobal_LITERAL_Occupation(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_National
		public static void gcGobal_LITERAL_National(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Healthy
		public static void gcGobal_LITERAL_Healthy(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Gender
		public static void gcGobal_LITERAL_Gender(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Ethnic
		public static void gcGobal_LITERAL_Ethnic(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_EducationLevel
		public static void gcGobal_LITERAL_EducationLevel(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_REFTABLE_ORVIEW
		public static void gcGobal_WEBSITE_REFTABLE_ORVIEW(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Name").Pc("RefTableOrView").Pc("Condition").Pc("Groupby").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_SERVICE_GROUPTYPE
		public static void gcGobal_WEBSITE_SERVICE_GROUPTYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_DEFINE_CONFIG_RepairAddFields
		public static void zgcBUILDIN_DEFINE_CONFIG_RepairAddFields(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Type").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_DEFINE_CONFIG_FormatPrograme
		public static void zgcBUILDIN_DEFINE_CONFIG_FormatPrograme(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DateFormat").Pc("MoneyFormatMain").Pc("MoneyFormatSub1").Pc("MoneyFormatSub2").Pc("MoneyFormatSub3").Pc("LanguageFormat").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_DEFINE_CONFIG_BasicProcedure
		public static void zgcBUILDIN_DEFINE_CONFIG_BasicProcedure(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("CreateSQL").Pc("IsInCode").Pc("isOrdered").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_CONFIG_REPORT
		public static void zgcBUILDIN_CONFIG_REPORT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("TableName").Pc("ShowName").Pc("TypeReport").Pc("MainTable").Pc("ParentId").Pc("CssHeader").Pc("CssTD").Pc("CssSumGobal").Pc("CssSumGroupBy").Pc("isBuild").Pc("GroupBy").Pc("GroupByArr").Pc("GroupByArrContent").Pc("SumCol").Pc("FileName").Pc("PathName").Pc("isLoadField").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PRODUCT_TYPE
		public static void gcGobal_WEBSITE_PRODUCT_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_User
		public static void gcGobal_USER_User(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("UserName").Pc("FirstName").Pc("MiddleInitial").Pc("LastName").Pc("EncryptedPwd").Pc("PwdQuestionCode").Pc("EncryptedAnswer").Pc("CreateUserID").Pc("CreateDate").Pc("UserType").Pc("PromoCode").Pc("CheckNo").Pc("Status").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_LogError
		public static void zgcBUILDIN_LogError(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_TimeKeeper_Type
		public static void gcGobal_EMPLOY_TimeKeeper_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_WEBSITE_MODULE
		public static void zgcBUILDIN_GOBAL_WEBSITE_MODULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Province
		public static void gcGobal_LITERAL_Province(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NationalId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_District
		public static void gcGobal_LITERAL_District(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ProviceId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_COMP_Department
		public static void gcGobal_COMP_Department(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("CompanyId").Pc("ParentDeptId").Pc("CODE").Pc("NAME").Pc("ENAME").Pc("ADDRESS").Pc("TEL").Pc("MOBILE").Pc("SoTK").Pc("FAX").Pc("MAIL").Pc("WEBSITE").Pc("CONFIG").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PAGE
		public static void gcGobal_WEBSITE_PAGE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PageName").Pc("DirName").Pc("StyleLayout").Pc("CSS").Pc("IsShowContentParentOrChild").Pc("NewsOrProducct").Pc("StyeImageLayout").Pc("IsBuildContent").Pc("ShortName").Pc("hinhanhImageSample").Pc("Name").Pc("ContentNews").Pc("TagName").Pc("NgayDeliver").Pc("EmployeeId").Pc("FullContent").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_NEWS
		public static void gcGobal_WEBSITE_NEWS(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PageId").Pc("NewsTypeId").Pc("NewsGroupTypeId").Pc("StyleLayout").Pc("CSS").Pc("IsShowContentParentOrChild").Pc("hinhanhImageSample").Pc("IsBuildContent").Pc("ShowGobalPoup").Pc("NewsOrProducct").Pc("StyeImageLayout").Pc("Name").Pc("ShortContentNews").Pc("ContentNews").Pc("TagName").Pc("NgayDeliver").Pc("NgayExpire").Pc("EmployeeId").Pc("DataIsFromWhre").Pc("FullContent").Pc("UrlName").Pc("ShowPublic").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_DEFINE_STYLE
		public static void gcGobal_WEBSITE_DEFINE_STYLE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("StyleType").Pc("StyleLayout").Pc("CSS").Pc("IsBuildContent").Pc("StyeImageLayout").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("TagName").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_DEFINE_STYLE_DETAIL
		public static void gcGobal_WEBSITE_DEFINE_STYLE_DETAIL(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("StyleId").Pc("StyleLayout").Pc("CSS").Pc("IsBuildContent").Pc("StyeImageLayout").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("TagName").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PAGE_DEFINE_LAYOUT
		public static void gcGobal_WEBSITE_PAGE_DEFINE_LAYOUT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PageId").Pc("MenuLayoutId").Pc("HeaderLayoutId").Pc("FooteLayoutrId").Pc("ServiceLayoutId").Pc("ProductLayoutId").Pc("IsShowContentParentOrChild").Pc("StyleLayout").Pc("StyeImageLayout").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("DataIsFromWhre").Pc("FullContent").Pc("OrderContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Payment_Detail
		public static void gcGobal_INCOM_Payment_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuChiTienMatId").Pc("VuViecId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("VAT").Pc("DienGiai").Pc("NoidungChiTien").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_Known
		public static void gcGobal_CUST_Customer_Known(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CustomerId").Pc("QuestionId").Pc("AnwserId").Pc("DateCheck").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PAGE_IMAGES
		public static void gcGobal_WEBSITE_PAGE_IMAGES(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PagesId").Pc("ImageName").Pc("hinhanhPath").Pc("SizeShowIcon").Pc("SizeShowFull").Pc("SizeSmall").Pc("SizeMedium").Pc("SizeLarge").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PAGE_REFTABLE_ORVIEW
		public static void gcGobal_WEBSITE_PAGE_REFTABLE_ORVIEW(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PagesId").Pc("RefId").Pc("RefTableOrView").Pc("Condition").Pc("Groupby").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Hoppy
		public static void gcGobal_LITERAL_Hoppy(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("TypeId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_Right_GroupRight
		public static void gcGobal_ACCOUNT_Right_GroupRight(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaQuyenId").Pc("NhomQuyenId").Pc("FormName").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_Account
		public static void gcGobal_ACCOUNT_Account(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("Password").Pc("PwdQuestionCode").Pc("EncryptedAnswer").Pc("MaQuyenId").Pc("MaCanBoId").Pc("CheckNo").Pc("QuyenPCId").Pc("TuNgay").Pc("DenNgay").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_GroupRight_DefPages
		public static void gcGobal_ACCOUNT_GroupRight_DefPages(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhomQuyenId").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("Detail").Pc("FogreinInfo").Pc("Path").Pc("Page").Pc("HinhAnhIcon").Pc("ConfigUIMenu").Pc("isInsert").Pc("isUpdate").Pc("isDelete").Pc("isView").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PRODUCT
		public static void gcGobal_WEBSITE_PRODUCT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("GroupTypeId").Pc("GiaBan").Pc("NgayCapNhatGiaBan").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("MoTaHangHoa").Pc("hinhanhProduct").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("DepartmentId").Pc("BranchId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_PRODUCT_IMAGELIST
		public static void gcGobal_WEBSITE_PRODUCT_IMAGELIST(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ProductId").Pc("ImageName").Pc("hinhanhPath").Pc("SizeShowIcon").Pc("SizeShowFull").Pc("SizeSmall").Pc("SizeMedium").Pc("SizeLarge").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_User_PersonalInfo
		public static void gcGobal_USER_User_PersonalInfo(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("UserID").Pc("BirthDay").Pc("BirthMonth").Pc("BirthYear").Pc("BirthPlace").Pc("Addr1").Pc("Addr2").Pc("City").Pc("Nationality").Pc("EducationalLevelID").Pc("ProfessionID").Pc("StateCode").Pc("ZipCode").Pc("HomePhone").Pc("WorkPhone").Pc("CellPhone").Pc("Email1").Pc("Email2").Pc("BusinessName").Pc("CountryID").Pc("WorkAddr1").Pc("WorkAddr2").Pc("WorkCity").Pc("WorkStateCode").Pc("WorkZipCode").Pc("WorkCountryId").Pc("MainPhone").Pc("FaxPhone").Pc("WebSite").Pc("AgeRangeCode").Pc("GenderCode").Pc("MaritalStatusCode").Pc("IncomeRangeCode").Pc("NumOfPeopleInHousehold").Pc("NumOfIncomeProviders").Pc("NumOfCarsInHousehold").Pc("ResidenceStatusCode").Pc("ChangeDate").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_User_PersonalInfo_HIS
		public static void gcGobal_USER_User_PersonalInfo_HIS(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MainObjectId").Pc("UpdateDate").Pc("UserID").Pc("BirthDay").Pc("BirthMonth").Pc("BirthYear").Pc("BirthPlace").Pc("Addr1").Pc("Addr2").Pc("City").Pc("Nationality").Pc("EducationalLevelID").Pc("ProfessionID").Pc("StateCode").Pc("ZipCode").Pc("HomePhone").Pc("WorkPhone").Pc("CellPhone").Pc("Email1").Pc("Email2").Pc("BusinessName").Pc("CountryID").Pc("WorkAddr1").Pc("WorkAddr2").Pc("WorkCity").Pc("WorkStateCode").Pc("WorkZipCode").Pc("WorkCountryId").Pc("MainPhone").Pc("FaxPhone").Pc("WebSite").Pc("AgeRangeCode").Pc("GenderCode").Pc("MaritalStatusCode").Pc("IncomeRangeCode").Pc("NumOfPeopleInHousehold").Pc("NumOfIncomeProviders").Pc("NumOfCarsInHousehold").Pc("ResidenceStatusCode").Pc("ChangeDate").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order_AocuoiMailisaInfo
		public static void gcGobal_INCOM_Order_AocuoiMailisaInfo(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("TenCoDau").Pc("NgaySinhCoDau").Pc("TenChuRe").Pc("NgaySinhChuRe").Pc("NgayCuoi").Pc("NgayThuAoCuoi").Pc("NgayTraCocLanII").Pc("NgayChupAlbum").Pc("NgayThuAoChupAlbum").Pc("NgayGiaoAlbumAnh").Pc("MauAoCoDauNgayCuoiId").Pc("MauAoChuReNgayCuoiId").Pc("MauAoCoDauChupAnhId").Pc("MauAoChuReChupAnhId").Pc("NgayTraTienLanCuoi").Pc("NhanVienTuVanId").Pc("DingoaiCanhId").Pc("DichVuPhatSinh").Pc("DienGiai").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_ACCOUNT_Account_DefPages
		public static void gcGobal_ACCOUNT_Account_DefPages(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("TaiKhoanId").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("Detail").Pc("FogreinInfo").Pc("Path").Pc("Page").Pc("HinhAnhIcon").Pc("ConfigUIMenu").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isInsert").Pc("isUpdate").Pc("isDelete").Pc("isView").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_DOCUMENT_Own
		public static void gcGobal_DOCUMENT_Own(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayNhan").Pc("NguoiNhanId").Pc("NguoiNhanName").Pc("CoQuanNhanId").Pc("TenCongVan").Pc("SoCongVan").Pc("TrichYeu").Pc("DienGiai").Pc("NgayPhatHanh").Pc("NoiPhatHanhId").Pc("NguoiKyCV").Pc("LoaiCongVanId").Pc("HuongDiChuyenId").Pc("HinhAnhFileGoc").Pc("NoiLuuBanGoc").Pc("GhiChu").Pc("VNKoDau").Pc("SmField").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order_Detail
		public static void gcGobal_INCOM_Order_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("TargetId").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_Refund_Detail
		public static void gcGobal_INCOM_Receipt_Refund_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("ChietKhauNgMoiGioi").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Production
		public static void gcGobal_STOCK_gcProduct_Production(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Ten").Pc("SoCT").Pc("NgayLap").Pc("NCCId").Pc("TienThue").Pc("TongTien").Pc("NhanvienId").Pc("DaTra").Pc("NoLai").Pc("KhoXuatId").Pc("KhoNhapId").Pc("DienGiai").Pc("StatusId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order_Profile
		public static void gcGobal_INCOM_Order_Profile(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("hinhanhFileName").Pc("ShortName").Pc("ContentFiles").Pc("DateExpire").Pc("IsDownload").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order_SERVICE
		public static void gcGobal_INCOM_Order_SERVICE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("BranchId").Pc("DepartmentId").Pc("DichvuId").Pc("NhanvienId").Pc("ChietKhauNV").Pc("NVTuVanId").Pc("ChietKhauNVTV").Pc("VAT").Pc("DienGiai").Pc("TienDichVu").Pc("KhuyenMaiDV").Pc("KhuyenMaiNgMoiGioi").Pc("NvLam2Id").Pc("NvLam3Id").Pc("NvLam4Id").Pc("NvTv2Id").Pc("NvTv3Id").Pc("NvTv4Id").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_SUPP_Supplier_Document
		public static void gcGobal_SUPP_Supplier_Document(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MainObjectId").Pc("DescCompany").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_SUPP_Supplier_HIS
		public static void gcGobal_SUPP_Supplier_HIS(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MainObjectId").Pc("UpdateDate").Pc("Code").Pc("TenCty").Pc("NguoiDaiDien").Pc("Ho").Pc("Ten").Pc("DiaChi").Pc("DienThoai").Pc("Fax").Pc("Email").Pc("MST").Pc("Taikhoan").Pc("Tinhthanh").Pc("MotaSupplier").Pc("GhiChu").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_TimeKeeper
		public static void gcGobal_EMPLOY_TimeKeeper(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("BoPhanId").Pc("BranchId").Pc("Ngay").Pc("Status").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_DefBasic
		public static void gcGobal_EMPLOY_Salary_DefBasic(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("EmployeeId").Pc("Money").Pc("ValidDate").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Payoff
		public static void gcGobal_EMPLOY_Payoff(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("EmployeeId").Pc("Money").Pc("ValidDate").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_ByMonth
		public static void gcGobal_EMPLOY_Salary_ByMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("EmployeeId").Pc("Money").Pc("Month").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_ByMonth_Detail
		public static void gcGobal_EMPLOY_Salary_ByMonth_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("EmployeeId").Pc("Money").Pc("ByDate").Pc("Note").Pc("Space01").Pc("Space02").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_DefAllowances
		public static void gcGobal_EMPLOY_Salary_DefAllowances(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("EmployeeId").Pc("Money").Pc("ValidDate").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_TrainningInDay
		public static void gcGobal_EMPLOY_Salary_TrainningInDay(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("Ngay").Pc("LopHocId").Pc("SoTietLT").Pc("SoTietThucHanh").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_EMPLOY_Salary_TrainningInMonth
		public static void gcGobal_EMPLOY_Salary_TrainningInMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("Thang").Pc("LopHocId").Pc("SoTietLT").Pc("SoTietThucHanh").Pc("SoHocVienDaoTao").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_SERVICE
		public static void gcGobal_WEBSITE_SERVICE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("LoaiDichVuId").Pc("DonViTinhId").Pc("NhomDichVuId").Pc("GiaBan").Pc("NgayCapNhatGiaBan").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("MoTaHangHoa").Pc("TenNhaSanXuat").Pc("hinhanhProduct").Pc("QuocGiaId").Pc("DepartmentId").Pc("BranchId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_NEWS_REFTABLE_ORVIEW
		public static void gcGobal_WEBSITE_NEWS_REFTABLE_ORVIEW(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NewsId").Pc("RefId").Pc("RefTableOrView").Pc("Condition").Pc("Groupby").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_Profile
		public static void gcGobal_CUST_Customer_Profile(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CustomerId").Pc("companyId").Pc("branchId").Pc("departmentId").Pc("MaBarCode").Pc("HoTen").Pc("VNKoDau").Pc("Ho").Pc("Ten").Pc("DiaChi").Pc("HuyenTTId").Pc("TinhTTId").Pc("GioitinhId").Pc("NgaySinh").Pc("NgheNghiepId").Pc("QuocTichId").Pc("PHONE").Pc("MOBILE").Pc("hinhanh").Pc("ChucvuId").Pc("CheckedSign").Pc("mySoTK").Pc("Email").Pc("Website").Pc("GhiChu").Pc("IdentifyCardNo").Pc("NgayCap").Pc("NoiCap").Pc("QueQuan").Pc("hinhanhCard").Pc("hinhanhCard2").Pc("DIPLOMA").Pc("RELATION").Pc("RELATIONPHONE").Pc("TamTru").Pc("HuyenThId").Pc("TinhThId").Pc("TinhTrangSKId").Pc("NhomMauId").Pc("HonNhanId").Pc("isNghiViec").Pc("CHANGEDATE").Pc("CONFIG").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_Product_Defs_Unit
		public static void gcGobal_STOCK_Product_Defs_Unit(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("SourceUnitId").Pc("DestUnitId").Pc("SL").Pc("DVTId").Pc("GiaVon").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_USER_User_Hoppy
		public static void gcGobal_USER_User_Hoppy(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("UserId").Pc("HobbyId").Pc("Note").Pc("CreateDated").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_NEWS_DETAIL
		public static void gcGobal_WEBSITE_NEWS_DETAIL(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NewsId").Pc("StyleLayout").Pc("IsShowContentParentOrChild").Pc("StyeImageLayout").Pc("Name").Pc("ShortName").Pc("ContentNews").Pc("DateDeliver").Pc("EmployeeId").Pc("DataIsFromWhre").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_NEWS_IMAGES
		public static void gcGobal_WEBSITE_NEWS_IMAGES(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NewsId").Pc("ImageName").Pc("hinhanhPath").Pc("SizeShowIcon").Pc("SizeShowFull").Pc("SizeSmall").Pc("SizeMedium").Pc("SizeLarge").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_NEWS_FILE_ATTACH
		public static void gcGobal_WEBSITE_NEWS_FILE_ATTACH(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NewsId").Pc("StyleLayout").Pc("hinhanhFileName").Pc("ShortName").Pc("ContentFiles").Pc("DateExpire").Pc("IsDownload").Pc("FullContent").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_WEBSITE_SERVICE_IMAGELIST
		public static void gcGobal_WEBSITE_SERVICE_IMAGELIST(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ServiceId").Pc("ImageName").Pc("hinhanhPath").Pc("SizeShowIcon").Pc("SizeShowFull").Pc("SizeSmall").Pc("SizeMedium").Pc("SizeLarge").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for sysdiagrams
		public static void sysdiagrams(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("name").Pc("principal_id").Pc("diagram_id").Pc("version").Pc("definition")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for cc_GOBAL_DM_ChamCong_ThuongPhat
		public static void cc_GOBAL_DM_ChamCong_ThuongPhat(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Ten").Pc("Thuong").Pc("SoTien").Pc("BranchId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for cc_GOBAL_NhanVien_ThuongPhat
		public static void cc_GOBAL_NhanVien_ThuongPhat(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("NgayXet").Pc("ThuongPhatId").Pc("SoTien").Pc("GhiChu").Pc("isPrgHideId").Pc("isPrgPTChitietId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for cc_GOBAL_NhanVien_ChamCong
		public static void cc_GOBAL_NhanVien_ChamCong(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("BoPhanId").Pc("Ngay").Pc("Status").Pc("BranchId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for cc_GOBAL_NhanVien_TamUng
		public static void cc_GOBAL_NhanVien_TamUng(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("NgayTamUng").Pc("SoTien").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for cc_GOBAL_NhanVien_LuongBaoHiem
		public static void cc_GOBAL_NhanVien_LuongBaoHiem(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhanVienId").Pc("BranchId").Pc("PhanTram").Pc("Tien").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_MaBiaMaKhung
		public static void gcGobal_LITERAL_MaBiaMaKhung(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("TypeId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcService
		public static void gcGobal_STOCK_gcService(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("LoaiDichVuId").Pc("GiaDichVu").Pc("GiaNhanh").Pc("GiaVon").Pc("ThoiGianThucHien").Pc("DiscountNVLam").Pc("DiscountNVTuVan").Pc("DiscountNguoiMoigioi").Pc("DiscountKH").Pc("DepartmentId").Pc("BranchId").Pc("ProductId").Pc("W").Pc("H").Pc("EpLua").Pc("EpCat").Pc("Ep3D").Pc("Go").Pc("Giay").Pc("Da").Pc("Meka").Pc("WxH").Pc("WxHKhung").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_GIACONG
		public static void gcGobal_LITERAL_GIACONG(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcService_DefService
		public static void gcGobal_STOCK_gcService_DefService(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ServiceId").Pc("RuotId").Pc("ChatlieuEpId").Pc("GiaDichVu20").Pc("GiaDichVu15").Pc("GiaDichVu10").Pc("KichThuoc").Pc("GiaDichVu").Pc("GiaDichVu1Trang").Pc("GiaDichVuGiaCong").Pc("DiscountNVLam").Pc("DiscountNVTuVan").Pc("DiscountNguoiMoigioi").Pc("DiscountKH").Pc("DepartmentId").Pc("BranchId").Pc("ProductId").Pc("W").Pc("H").Pc("EpLua").Pc("EpCat").Pc("Ep3D").Pc("Go").Pc("Giay").Pc("Da").Pc("Meka").Pc("WxH").Pc("WxHKhung").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcService_DefService_OnePage
		public static void gcGobal_STOCK_gcService_DefService_OnePage(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("KichThuoc").Pc("RuotId").Pc("ChatlieuEpId").Pc("GiaDichVu20").Pc("GiaDichVu15").Pc("GiaDichVu10").Pc("GiaDichVu").Pc("GiaDichVu1Trang").Pc("GiaDichVuGiaCong").Pc("DiscountNVLam").Pc("DiscountNVTuVan").Pc("DiscountNguoiMoigioi").Pc("DiscountKH").Pc("DepartmentId").Pc("BranchId").Pc("ProductId").Pc("W").Pc("H").Pc("EpLua").Pc("EpCat").Pc("Ep3D").Pc("Go").Pc("Giay").Pc("Da").Pc("Meka").Pc("WxH").Pc("WxHKhung").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_CHATLIEU
		public static void gcGobal_LITERAL_CHATLIEU(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_RUOT
		public static void gcGobal_LITERAL_RUOT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_KHOGIAYIN
		public static void gcGobal_LITERAL_KHOGIAYIN(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_BAMGOC
		public static void gcGobal_LITERAL_BAMGOC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SERVICE_Receipt_Detail
		public static void gcGobal_INCOM_SERVICE_Receipt_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("BoPhanId").Pc("DichvuId").Pc("NhanvienId").Pc("ChietKhauNV").Pc("NVTuVanId").Pc("MaGiaCongId").Pc("MaRuotId").Pc("MaChatlieuEpId").Pc("CustomerReflectId").Pc("ChietKhauNVTV").Pc("VAT").Pc("DienGiai").Pc("TienDichVu").Pc("KhuyenMaiDV").Pc("KhuyenMaiNgMoiGioi").Pc("KhoAlbumNgangDoc").Pc("NvLam2Id").Pc("NvLam3Id").Pc("NvLam4Id").Pc("NvTv2Id").Pc("NvTv3Id").Pc("NvTv4Id").Pc("NoteForTakeCar").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcService_Defs_Product
		public static void gcGobal_STOCK_gcService_Defs_Product(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DichVuId").Pc("ProductId").Pc("SL").Pc("DVTId").Pc("GiaVon").Pc("NhanSLSP").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT12
		public static void gcGobal_LOG_gcT12(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT11
		public static void gcGobal_LOG_gcT11(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT10
		public static void gcGobal_LOG_gcT10(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT09
		public static void gcGobal_LOG_gcT09(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT08
		public static void gcGobal_LOG_gcT08(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT07
		public static void gcGobal_LOG_gcT07(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT06
		public static void gcGobal_LOG_gcT06(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT05
		public static void gcGobal_LOG_gcT05(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT04
		public static void gcGobal_LOG_gcT04(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT03
		public static void gcGobal_LOG_gcT03(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT02
		public static void gcGobal_LOG_gcT02(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LOG_gcT01
		public static void gcGobal_LOG_gcT01(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Username").Pc("CanBoId").Pc("Operation").Pc("TableName").Pc("Description").Pc("ExecutionTime").Pc("ThoiGianThucHien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("RemoteClientAdd").Pc("RemoteClientHost").Pc("RemoteClientPort").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Payment_THEMTIEN_VAOQUYHIENTAI
		public static void gcGobal_INCOM_Payment_THEMTIEN_VAOQUYHIENTAI(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BranchId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("NhanVienId").Pc("isFinished").Pc("DiscountNgMoiGioi").Pc("DiscountCust").Pc("isDiscount").Pc("StatusId").Pc("isPrinted").Pc("OrderId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_BANK_List
		public static void gcGobal_INCOM_BANK_List(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_COMP_Branch_CURMONNEY_ATBRANCH
		public static void gcGobal_COMP_Branch_CURMONNEY_ATBRANCH(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("CurMoneyVND").Pc("CurMoneyUSD").Pc("CurMoneyRiel").Pc("CurMoneyYen").Pc("CurMoneyBANGANH").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_BANK_CURRENT_MONEY_NEW
		public static void gcGobal_INCOM_BANK_CURRENT_MONEY_NEW(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BankId").Pc("CurMoneyVND").Pc("CurMoneyUSD").Pc("CurMoneyRiel").Pc("CurMoneyYen").Pc("CurMoneyBANGANH").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Contract_Detail
		public static void gcGobal_INCOM_Contract_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("MSHDId").Pc("NgayLap").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("NhanVienId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Contract_Profile
		public static void gcGobal_INCOM_Contract_Profile(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("MSHDId").Pc("NgayLap").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("NhanVienId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_BANK_SUB
		public static void gcGobal_INCOM_BANK_SUB(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BankId").Pc("MSHDId").Pc("NCCId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("NhanVienId").Pc("isPrinted").Pc("OrderId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_TWO_MUDULE
		public static void zgcBUILDIN_GOBAL_TWO_MUDULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_CONFIG_REPORT_DETAIL
		public static void zgcBUILDIN_CONFIG_REPORT_DETAIL(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ReportId").Pc("TableName").Pc("ColName").Pc("FormName").Pc("IsShow").Pc("ColType").Pc("OrderCol").Pc("Parent").Pc("ChildNode").Pc("ColTypeInt").Pc("iNotFillData").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_BANK_ADD
		public static void gcGobal_INCOM_BANK_ADD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BankId").Pc("MSHDId").Pc("NCCId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("NhanVienId").Pc("OrderId").Pc("isFinished").Pc("DiscountNgMoiGioi").Pc("DiscountCust").Pc("isDiscount").Pc("StatusId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_PRE_Customer_Contacted
		public static void gcGobal_CUST_PRE_Customer_Contacted(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CustomerId").Pc("ContactNo").Pc("MethodContactTypeId").Pc("DateContact").Pc("ResultContact").Pc("StatusResultId").Pc("Note").Pc("Finished").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TRAINNING_COURSE
		public static void gcGobal_TRAINNING_COURSE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("FromDate").Pc("ToDate").Pc("NumHours").Pc("Price1Hours").Pc("Description").Pc("Note").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_CustomerType
		public static void gcGobal_CUST_CustomerType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_LITERAL_ResultTrainnig
		public static void gcGobal_INCOM_LITERAL_ResultTrainnig(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_TrainningResult_Cemina
		public static void gcGobal_LITERAL_TrainningResult_Cemina(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_StatusHocPhi
		public static void gcGobal_LITERAL_StatusHocPhi(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_ResultTrainning
		public static void gcGobal_LITERAL_ResultTrainning(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("ProviceId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_PRE_Customer
		public static void gcGobal_CUST_PRE_Customer(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("HoTen").Pc("VNKoDau").Pc("LoaiKhachId").Pc("Ho").Pc("Ten").Pc("TenCongTy").Pc("TenVietTat").Pc("SoLanChamSoc").Pc("NgaySinh").Pc("DiaChi").Pc("SoDienThoai").Pc("SoTK").Pc("Email").Pc("Website").Pc("GhiChu").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_HOAHONGTUVAN
		public static void gcGobal_LITERAL_HOAHONGTUVAN(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("HoaHong").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_CHUONGTRINHHOC
		public static void gcGobal_LITERAL_CHUONGTRINHHOC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("SoTiet").Pc("HocPhi").Pc("LoaiMH").Pc("GiaTaiLieu").Pc("GhiChu").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_LEPHI
		public static void gcGobal_LITERAL_LEPHI(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("LEPHITHI").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_GIAMGIA
		public static void gcGobal_LITERAL_GIAMGIA(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("GIAMGIA").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_KHANANGPHONG
		public static void gcGobal_LITERAL_KHANANGPHONG(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("SOHOCVIEN").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_THULAOGIAOVIEN
		public static void gcGobal_LITERAL_THULAOGIAOVIEN(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("SS").Pc("SOTIEN").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_StatusLOPHOC
		public static void gcGobal_LITERAL_StatusLOPHOC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_GIOHOC
		public static void gcGobal_LITERAL_GIOHOC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_StatusInHopDong
		public static void gcGobal_LITERAL_StatusInHopDong(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TRAINNING_COURSE_CLASS_STUDENT
		public static void gcGobal_TRAINNING_COURSE_CLASS_STUDENT(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ClassId").Pc("StudentId").Pc("StartDate").Pc("Mark").Pc("NumHours").Pc("ResultTrainId").Pc("SoTienPhaiDong").Pc("HOCPHI").Pc("DisCount").Pc("TienSach").Pc("ReceiptRefId").Pc("ResultCeminaId").Pc("NVTuVanId").Pc("ThayGiaoTuVanId").Pc("SoBL").Pc("HoaHongThucNhan").Pc("NoteReceipt").Pc("Description").Pc("Note").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TRAINNING_COURSE_CLASS
		public static void gcGobal_TRAINNING_COURSE_CLASS(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CourseId").Pc("TeacherId").Pc("ChuongTrinhId").Pc("StatusId").Pc("PhongId").Pc("Code").Pc("Name").Pc("FromDate").Pc("ToDate").Pc("NumHours").Pc("Price1Hours").Pc("LichHoc").Pc("GioHocId").Pc("StatusInHDId").Pc("Description").Pc("Note").Pc("PathFileHopDong").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_LICHHOC
		public static void gcGobal_LITERAL_LICHHOC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_HOCHAM
		public static void gcGobal_LITERAL_HOCHAM(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_HOCVI
		public static void gcGobal_LITERAL_HOCVI(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcl_gcGobal_TRAINNING_TEACHER
		public static void zgcl_gcGobal_TRAINNING_TEACHER(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("companyId").Pc("branchId").Pc("departmentId").Pc("MaBarCode").Pc("HoTen").Pc("VNKoDau").Pc("Ho").Pc("Ten").Pc("DiaChi").Pc("HuyenTTId").Pc("TinhTTId").Pc("GioitinhId").Pc("NgaySinh").Pc("NgheNghiepId").Pc("QuocTichId").Pc("PHONE").Pc("MOBILE").Pc("ImgPho").Pc("CheckedSign").Pc("mySoTK").Pc("Email").Pc("Website").Pc("GhiChu").Pc("IdentifyCardNo").Pc("NgayCap").Pc("NoiCap").Pc("QueQuan").Pc("ImgPhoCard").Pc("DIPLOMA").Pc("RELATION").Pc("RELATIONPHONE").Pc("TinhTrangSKId").Pc("NhomMauId").Pc("HonNhanId").Pc("isNghiViec").Pc("CHANGEDATE").Pc("CONFIG").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for zgcBUILDIN_GOBAL_ADMIN_RESTAURENT_MUDULE
		public static void zgcBUILDIN_GOBAL_ADMIN_RESTAURENT_MUDULE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Tab").Pc("TableName").Pc("FormName").Pc("ParentTab").Pc("TypeObject").Pc("Detail").Pc("FogreinInfo").Pc("MultiOrSingle").Pc("DetailBtnName").Pc("mBaseRuleName").Pc("ConfigId").Pc("mLevel").Pc("bLinkToBaseDetail").Pc("UpdateFile").Pc("ConfigForm").Pc("FormStyle").Pc("ConfigUIMenu").Pc("PageSize").Pc("IndexPage").Pc("SourceFile").Pc("ScriptFile").Pc("aspxCS").Pc("aspx").Pc("ascx").Pc("ascxCS").Pc("JS").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_PaymentType
		public static void gcGobal_LITERAL_PaymentType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("TypeId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProductList_ImageInfo
		public static void gcGobal_STOCK_gcProductList_ImageInfo(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ProductId").Pc("Code").Pc("Name").Pc("ShortDescription").Pc("ImageInfo").Pc("Note").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_QA_Floor
		public static void gcGobal_QA_Floor(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("Code").Pc("Name").Pc("EName").Pc("ImageInfo").Pc("Note").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("ChietKhauNgMoiGioi").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_QA_Table
		public static void gcGobal_QA_Table(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("FloorId").Pc("Code").Pc("Name").Pc("EName").Pc("ImageInfo").Pc("Note").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("ChietKhauNgMoiGioi").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_CustomerCard
		public static void gcGobal_CUST_CustomerCard(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("KhangId").Pc("MaBarCode").Pc("BranchId").Pc("MaThe").Pc("SoLuotSuDung").Pc("SoLuotKhuyenMai").Pc("CardTypeId").Pc("NgayLap").Pc("NgayHetHan").Pc("TongGiaTriCard").Pc("DaSuDungTien").Pc("GiaTien").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer_Contacted
		public static void gcGobal_CUST_Customer_Contacted(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CustomerId").Pc("ContactNo").Pc("MethodContactTypeId").Pc("DateContact").Pc("ResultContact").Pc("StatusResultId").Pc("Note").Pc("Finished").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_BAOTRI
		public static void gcGobal_TSCD_BAOTRI(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("TSCDId").Pc("DonViBaoTriId").Pc("NgayBaoTri").Pc("ChiPhiBaoTri").Pc("StatusTSCDId").Pc("MoTaNoiDungBaoTri").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_NangCap
		public static void gcGobal_TSCD_NangCap(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("TSCDId").Pc("DonViNangCapID").Pc("ThoiGianNangCap").Pc("GiaTriNangCap").Pc("StatusTSCDId").Pc("NoiDungNangCap").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_SoTheoDoiTSCD
		public static void gcGobal_TSCD_SoTheoDoiTSCD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("TSCDId").Pc("DonViTinhId").Pc("NgayKiem").Pc("SoLuong").Pc("StatusTSCDId").Pc("HienTrang").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_DanhSach
		public static void gcGobal_TSCD_DanhSach(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NhomTSCDId").Pc("NhomNhoTSCDId").Pc("DonViTinhId").Pc("GiaMoi").Pc("ImageInfo").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("KE").Pc("TANG_HANG").Pc("MoTaHangHoa").Pc("BranchId").Pc("MinValue").Pc("DepartmentId").Pc("NgayMua").Pc("GiaMua").Pc("GiaCu").Pc("NgayCapNhatGiaCu").Pc("NgayCapNhatGiaMoi").Pc("GroupTypeId").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_NhomTSCD
		public static void gcGobal_TSCD_NhomTSCD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_NhomNhoTSCD
		public static void gcGobal_TSCD_NhomNhoTSCD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoCaiTongHop
		public static void gcGobal_INCOM_SoCaiTongHop(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("TongThu").Pc("TongChi").Pc("TienQuyToDay").Pc("ThemQuy").Pc("RutQuy").Pc("ChuyenNHorNopTien").Pc("TonCuoiNgay").Pc("NhanvienId").Pc("DienGiai").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_NhapTaiSan_Detail
		public static void gcGobal_TSCD_NhapTaiSan_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhapTaiSanId").Pc("TSCDId").Pc("DonViTinhId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_THANHLY_Detail
		public static void gcGobal_TSCD_THANHLY_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NhapTaiSanId").Pc("TSCDId").Pc("DonViTinhId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_Status
		public static void gcGobal_TSCD_Status(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_ChuyenPhongSuDung
		public static void gcGobal_TSCD_ChuyenPhongSuDung(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("TSCDId").Pc("CurDepartmentId").Pc("CurBranchId").Pc("NewDepartmentId").Pc("NewBranchId").Pc("NgayChuyen").Pc("StatusTSCDId").Pc("MoTaHienTrangChuyen").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TRAINNING_HOCVIEN
		public static void gcGobal_TRAINNING_HOCVIEN(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("HoTen").Pc("VNKoDau").Pc("Ho").Pc("Ten").Pc("TenVietTat").Pc("NgaySinh").Pc("ChucVu").Pc("DiaChi").Pc("LopHocId").Pc("HocPhan").Pc("MaSoThue").Pc("DiscountId").Pc("SoDienThoai").Pc("Fax").Pc("HocPhi").Pc("Email").Pc("MonHoc").Pc("LoaiKhachId").Pc("TenCongTy").Pc("NgayDangKy").Pc("GhiChu").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyHangMucKhac
		public static void gcGobal_INCOM_SoQuyHangMucKhac(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("HangMucId").Pc("TypeId").Pc("Nam").Pc("Thang").Pc("Money").Pc("LaiSuat").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_HANGMUC_THUCHIKHAC
		public static void gcGobal_LITERAL_HANGMUC_THUCHIKHAC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_HANGMUC_THUCHIKHAC_TYPE
		public static void gcGobal_LITERAL_HANGMUC_THUCHIKHAC_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_Subsidies_Detail
		public static void gcGobal_INCOM_Receipt_Subsidies_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("ChietKhauNgMoiGioi").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyDauTu
		public static void gcGobal_INCOM_SoQuyDauTu(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("TongChi").Pc("DienGiai").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_Detail_Material
		public static void gcGobal_INCOM_Receipt_Detail_Material(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatDetailId").Pc("KhoId").Pc("SourceId").Pc("VatTuNguyenLieuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("PhanTramChenhLech").Pc("Khautru").Pc("OrtherInfor").Pc("Note").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("ChietKhauNgMoiGioi").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVonVay_VayVon
		public static void gcGobal_INCOM_SoQuyVonVay_VayVon(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("SoTien").Pc("LaiSuatHangThang").Pc("NgayDaoHan").Pc("DienGiai").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVonVay_TraTienVonVay
		public static void gcGobal_INCOM_SoQuyVonVay_TraTienVonVay(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("SoTien").Pc("LaiSuatHangThang").Pc("NgayDaoHan").Pc("DienGiai").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVon
		public static void gcGobal_INCOM_SoQuyVon(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("TongThu").Pc("TongChi").Pc("TienQuyToDay").Pc("ThemQuy").Pc("RutQuy").Pc("ChuyenNHorNopTien").Pc("TonCuoiNgay").Pc("NhanvienId").Pc("DienGiai").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVon_HangMucVon
		public static void gcGobal_INCOM_SoQuyVon_HangMucVon(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVon_NhapVaoTienMat
		public static void gcGobal_INCOM_SoQuyVon_NhapVaoTienMat(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("BranchId").Pc("SoTien").Pc("LaiSuatHangThang").Pc("NgayDaoHan").Pc("DienGiai").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVon_RutVonTienMat
		public static void gcGobal_INCOM_SoQuyVon_RutVonTienMat(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("BranchId").Pc("SoTien").Pc("LaiSuatHangThang").Pc("NgayDaoHan").Pc("DienGiai").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVon_PhanBoVon_ChiNhanh_Chitiet
		public static void gcGobal_INCOM_SoQuyVon_PhanBoVon_ChiNhanh_Chitiet(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuPhanBoId").Pc("HangMucId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KC_NK
		public static void gcGobal_STOCK_gcStock_KC_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KC_XK
		public static void gcGobal_STOCK_gcStock_KC_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KC_BalanceYear
		public static void gcGobal_STOCK_gcStock_KC_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTPDEN
		public static void gcGobal_STOCK_gcStock_KTPDEN(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTPDEN_NK
		public static void gcGobal_STOCK_gcStock_KTPDEN_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTPDEN_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KTPDEN_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTPDEN_XK
		public static void gcGobal_STOCK_gcStock_KTPDEN_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTPDEN_BalanceYear
		public static void gcGobal_STOCK_gcStock_KTPDEN_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KHO_OTO
		public static void gcGobal_STOCK_gcStock_KHO_OTO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KHO_OTO_NK
		public static void gcGobal_STOCK_gcStock_KHO_OTO_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KHO_OTO_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KHO_OTO_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KHO_OTO_XK
		public static void gcGobal_STOCK_gcStock_KHO_OTO_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KHO_OTO_BalanceYear
		public static void gcGobal_STOCK_gcStock_KHO_OTO_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_XE_PIAGIO
		public static void gcGobal_STOCK_gcStock_XE_PIAGIO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_XE_PIAGIO_NK
		public static void gcGobal_STOCK_gcStock_XE_PIAGIO_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_XE_PIAGIO_XK
		public static void gcGobal_STOCK_gcStock_XE_PIAGIO_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_XE_PIAGIO_BalanceMonth
		public static void gcGobal_STOCK_gcStock_XE_PIAGIO_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_XE_PIAGIO_BalanceYear
		public static void gcGobal_STOCK_gcStock_XE_PIAGIO_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEDAP
		public static void gcGobal_STOCK_gcStock_KPT_XEDAP(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEDAP_NK
		public static void gcGobal_STOCK_gcStock_KPT_XEDAP_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEDAP_XK
		public static void gcGobal_STOCK_gcStock_KPT_XEDAP_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEDAP_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KPT_XEDAP_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEDAP_BalanceYear
		public static void gcGobal_STOCK_gcStock_KPT_XEDAP_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_K_XEDAP159
		public static void gcGobal_STOCK_gcStock_K_XEDAP159(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_K_XEDAP159_NK
		public static void gcGobal_STOCK_gcStock_K_XEDAP159_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_K_XEDAP159_XK
		public static void gcGobal_STOCK_gcStock_K_XEDAP159_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_K_XEDAP159_BalanceMonth
		public static void gcGobal_STOCK_gcStock_K_XEDAP159_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_K_XEDAP159_BalanceYear
		public static void gcGobal_STOCK_gcStock_K_XEDAP159_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEMMAY
		public static void gcGobal_STOCK_gcStock_KPT_XEMMAY(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEMMAY_NK
		public static void gcGobal_STOCK_gcStock_KPT_XEMMAY_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEMMAY_XK
		public static void gcGobal_STOCK_gcStock_KPT_XEMMAY_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEMMAY_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KPT_XEMMAY_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEMMAY_BalanceYear
		public static void gcGobal_STOCK_gcStock_KPT_XEMMAY_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTONG
		public static void gcGobal_STOCK_gcStock_KTONG(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH").Pc("LastDate")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTONG_NK
		public static void gcGobal_STOCK_gcStock_KTONG_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTONG_XK
		public static void gcGobal_STOCK_gcStock_KTONG_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTONG_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KTONG_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTONG_BalanceYear
		public static void gcGobal_STOCK_gcStock_KTONG_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KSUACHUA_OTO
		public static void gcGobal_STOCK_gcStock_KSUACHUA_OTO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KSUACHUA_OTO_NK
		public static void gcGobal_STOCK_gcStock_KSUACHUA_OTO_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KSUACHUA_OTO_XK
		public static void gcGobal_STOCK_gcStock_KSUACHUA_OTO_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KSUACHUA_OTO_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KSUACHUA_OTO_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KSUACHUA_OTO_BalanceYear
		public static void gcGobal_STOCK_gcStock_KSUACHUA_OTO_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PT_276THD
		public static void gcGobal_STOCK_gcStock_PT_276THD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PT_276THD_NK
		public static void gcGobal_STOCK_gcStock_PT_276THD_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PT_276THD_XK
		public static void gcGobal_STOCK_gcStock_PT_276THD_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PT_276THD_BalanceMonth
		public static void gcGobal_STOCK_gcStock_PT_276THD_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PT_276THD_BalanceYear
		public static void gcGobal_STOCK_gcStock_PT_276THD_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_276THD
		public static void gcGobal_STOCK_gcStock_PK_276THD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_276THD_NK
		public static void gcGobal_STOCK_gcStock_PK_276THD_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_276THD_BalanceMonth
		public static void gcGobal_STOCK_gcStock_PK_276THD_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_276THD_XK
		public static void gcGobal_STOCK_gcStock_PK_276THD_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_276THD_BalanceYear
		public static void gcGobal_STOCK_gcStock_PK_276THD_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_276THD
		public static void gcGobal_STOCK_gcStock_PKTX_276THD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_276THD_BalanceMonth
		public static void gcGobal_STOCK_gcStock_PKTX_276THD_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_276THD_NK
		public static void gcGobal_STOCK_gcStock_PKTX_276THD_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_276THD_XK
		public static void gcGobal_STOCK_gcStock_PKTX_276THD_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_276THD_BalanceYear
		public static void gcGobal_STOCK_gcStock_PKTX_276THD_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_276THD
		public static void gcGobal_STOCK_gcStock_BAGA_276THD(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_276THD_NK
		public static void gcGobal_STOCK_gcStock_BAGA_276THD_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_276THD_XK
		public static void gcGobal_STOCK_gcStock_BAGA_276THD_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_276THD_BalanceMonth
		public static void gcGobal_STOCK_gcStock_BAGA_276THD_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_276THD_BalanceYear
		public static void gcGobal_STOCK_gcStock_BAGA_276THD_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_OTO
		public static void gcGobal_STOCK_gcStock_PK_OTO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_OTO_NK
		public static void gcGobal_STOCK_gcStock_PK_OTO_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_OTO_BalanceMonth
		public static void gcGobal_STOCK_gcStock_PK_OTO_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_OTO_XK
		public static void gcGobal_STOCK_gcStock_PK_OTO_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_OTO_BalanceYear
		public static void gcGobal_STOCK_gcStock_PK_OTO_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_OTO
		public static void gcGobal_STOCK_gcStock_PKTX_OTO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_OTO_NK
		public static void gcGobal_STOCK_gcStock_PKTX_OTO_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_OTO_BalanceMonth
		public static void gcGobal_STOCK_gcStock_PKTX_OTO_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_OTO_XK
		public static void gcGobal_STOCK_gcStock_PKTX_OTO_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_OTO_BalanceYear
		public static void gcGobal_STOCK_gcStock_PKTX_OTO_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_OTO
		public static void gcGobal_STOCK_gcStock_BAGA_OTO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_OTO_NK
		public static void gcGobal_STOCK_gcStock_BAGA_OTO_NK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_OTO_BalanceMonth
		public static void gcGobal_STOCK_gcStock_BAGA_OTO_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("Month").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_OTO_XK
		public static void gcGobal_STOCK_gcStock_BAGA_OTO_XK(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("Ngay").Pc("SL").Pc("DG").Pc("DonviId").Pc("ExtentId").Pc("ExpandCode").Pc("Note").Pc("CurDate").Pc("TableRef").Pc("TypeXNK").Pc("Keep01")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BAGA_OTO_BalanceYear
		public static void gcGobal_STOCK_gcStock_BAGA_OTO_BalanceYear(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Year").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance").Pc("M1").Pc("M2").Pc("M3").Pc("M4").Pc("M5").Pc("M6").Pc("M7").Pc("M8").Pc("M9").Pc("M10").Pc("M11").Pc("M12")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProductType
		public static void gcGobal_STOCK_gcProductType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_COMP_Branch
		public static void gcGobal_COMP_Branch(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("CompanyId").Pc("CODE").Pc("NAME").Pc("ENAME").Pc("ADDRESS").Pc("TEL").Pc("MOBILE").Pc("SoTK").Pc("FAX").Pc("MAIL").Pc("WEBSITE").Pc("CONFIG").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGOBALsysuserGcDescriptionFull_TableOrder
		public static void gcGOBALsysuserGcDescriptionFull_TableOrder(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("tablename").Pc("rorder").Pc("objname").Pc("GroupName").Pc("NumChild").Pc("TableChild")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_COMP_EmployeeLife
		public static void gcGobal_COMP_EmployeeLife(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("companyId").Pc("branchId").Pc("departmentId").Pc("MaBarCode").Pc("HoTen").Pc("VNKoDau").Pc("Ho").Pc("Ten").Pc("DiaChi").Pc("HuyenTTId").Pc("TinhTTId").Pc("GioitinhId").Pc("NgaySinh").Pc("NgheNghiepId").Pc("QuocTichId").Pc("PHONE").Pc("MOBILE").Pc("ImgPho").Pc("ChucvuId").Pc("CheckedSign").Pc("mySoTK").Pc("Email").Pc("Website").Pc("GhiChu").Pc("IdentifyCardNo").Pc("NgayCap").Pc("NoiCap").Pc("QueQuan").Pc("ImgPhoCard").Pc("ImgPhoCard2").Pc("DIPLOMA").Pc("RELATION").Pc("RELATIONPHONE").Pc("TamTru").Pc("HuyenThId").Pc("TinhThId").Pc("TinhTrangSKId").Pc("NhomMauId").Pc("HonNhanId").Pc("isNghiViec").Pc("CHANGEDATE").Pc("CONFIG").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Contract
		public static void gcGobal_INCOM_Contract(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("SoCT").Pc("Name").Pc("NgayLap").Pc("BranchId").Pc("KHId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("VAT").Pc("PhuThu").Pc("NhanVienId").Pc("ThanhToan").Pc("isDatCoc").Pc("SoTienCoc").Pc("SoTienDaCoc").Pc("MaPTDaCoc").Pc("isTraNo").Pc("NgayHen").Pc("SoTienNo").Pc("isFinished").Pc("DiscountNgMoiGioi").Pc("DiscountCust").Pc("isDiscount").Pc("StatusId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyTienMat
		public static void gcGobal_INCOM_SoQuyTienMat(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("TongThu").Pc("TongChi").Pc("TienQuyToDay").Pc("ThemQuy").Pc("RutQuy").Pc("KHChuyenNH").Pc("NVNopTien").Pc("TonCuoiNgay").Pc("NhanvienId").Pc("DienGiai").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyNganHang
		public static void gcGobal_INCOM_SoQuyNganHang(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("TongThu").Pc("TongChi").Pc("TienQuyToDay").Pc("ThemQuy").Pc("RutQuy").Pc("KHChuyenNH").Pc("NVNopTien").Pc("TonCuoiNgay").Pc("NhanvienId").Pc("DienGiai").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_Detail
		public static void gcGobal_INCOM_Receipt_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("TraLai").Pc("GiaMua").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("ChietKhauNgMoiGioi").Pc("PrintSLInfo").Pc("AddInfor").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Production_Detail
		public static void gcGobal_STOCK_gcProduct_Production_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("GiaMua").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Defs_Product
		public static void gcGobal_STOCK_gcProduct_Defs_Product(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("SourceProductId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("GiaMua").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Defs_Material
		public static void gcGobal_STOCK_gcProduct_Defs_Material(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("SourceProductId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("GiaMua").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_Refund
		public static void gcGobal_INCOM_Receipt_Refund(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BranchId").Pc("KHId").Pc("MSHDId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("VAT").Pc("PhuThu").Pc("NhanVienId").Pc("ThanhToan").Pc("isDatCoc").Pc("SoTienCoc").Pc("SoTienDaCoc").Pc("MaPTDaCoc").Pc("isTraNo").Pc("NgayHen").Pc("SoTienNo").Pc("SoTienNoKhachTra").Pc("isFinished").Pc("DiscountNgMoiGioi").Pc("DiscountCust").Pc("isDiscount").Pc("StatusId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt_Subsidies
		public static void gcGobal_INCOM_Receipt_Subsidies(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BranchId").Pc("MSHDId").Pc("KHId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("VAT").Pc("PhuThu").Pc("NhanVienId").Pc("ThanhToan").Pc("isDatCoc").Pc("SoTienCoc").Pc("SoTienDaCoc").Pc("MaPTDaCoc").Pc("isTraNo").Pc("NgayHen").Pc("SoTienNo").Pc("SoTienNoKhachTra").Pc("isFinished").Pc("DiscountNgMoiGioi").Pc("DiscountCust").Pc("isDiscount").Pc("StatusId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Order
		public static void gcGobal_INCOM_Order(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BranchId").Pc("MSHDId").Pc("KHId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("VAT").Pc("PhuThu").Pc("NhanVienThuNganId").Pc("ThanhToan").Pc("isDatCoc").Pc("SoTienCoc").Pc("SoTienDaCoc").Pc("MaPTDaCoc").Pc("isTraNo").Pc("NgayHen").Pc("SoTienNo").Pc("SoTienNoKhachTra").Pc("isFinished").Pc("DiscountNgMoiGioi").Pc("DiscountCust").Pc("isDiscount").Pc("StatusId").Pc("isPrinted").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGOBALsysuserGcDescriptionFull_RefTable
		public static void gcGOBALsysuserGcDescriptionFull_RefTable(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("refTableId").Pc("refTableChildId").Pc("Note")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KC
		public static void gcGobal_STOCK_gcStock_KC(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("DayCheck").Pc("VattuId").Pc("TypeId").Pc("DonviId").Pc("SLDK").Pc("SLXK").Pc("SLNK").Pc("SLHT").Pc("SLTT").Pc("DGDK").Pc("DGHT").Pc("ExtentId").Pc("ExpandCode").Pc("KHTS").Pc("SoTh").Pc("IsTSCD").Pc("DayInitData").Pc("isPrgbUserDeleted").Pc("CurDate").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("SLXH")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuy_Status_NopTienOrKHChuyen
		public static void gcGobal_INCOM_SoQuy_Status_NopTienOrKHChuyen(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyNganHang_RutOrChuyenTien
		public static void gcGobal_INCOM_SoQuyNganHang_RutOrChuyenTien(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("SoTien").Pc("DienGiai").Pc("KHOrNapTienId").Pc("NganHangId").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyTienMat_ThemTienMat
		public static void gcGobal_INCOM_SoQuyTienMat_ThemTienMat(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("SoTien").Pc("DienGiai").Pc("KHOrNapTienId").Pc("NganHangId").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyTienMat_RutTienMatOrChuyenNH
		public static void gcGobal_INCOM_SoQuyTienMat_RutTienMatOrChuyenNH(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("SoTien").Pc("DienGiai").Pc("KHOrNapTienId").Pc("NganHangId").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyNganHang_NopTienHoacNhanChuyenKhoan
		public static void gcGobal_INCOM_SoQuyNganHang_NopTienHoacNhanChuyenKhoan(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("SoTien").Pc("DienGiai").Pc("KHOrNapTienId").Pc("NganHangId").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_SOQUY_HANGMUC_PHANBOVON
		public static void gcGobal_LITERAL_SOQUY_HANGMUC_PHANBOVON(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_SOQUY_HANGMUC_NCC_KHUYENMAI
		public static void gcGobal_LITERAL_SOQUY_HANGMUC_NCC_KHUYENMAI(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_SUPP_Supplier_DS_KhuyenMai_TruocBa
		public static void gcGobal_SUPP_Supplier_DS_KhuyenMai_TruocBa(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("BranchId").Pc("NCCId").Pc("HangMucNCCId").Pc("SoLuong").Pc("SoLuongNhan").Pc("SoTien").Pc("TienDonHang").Pc("HoaHong").Pc("KMTruocBa").Pc("DienGiai").Pc("VattuId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVon_PhanBoVon_ChiNhanh
		public static void gcGobal_INCOM_SoQuyVon_PhanBoVon_ChiNhanh(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("NgayLap").Pc("BranchId").Pc("HangMucId").Pc("SoLuong").Pc("SoTien").Pc("VonGiaoCH").Pc("SoLuongBan").Pc("DSTrongNgay").Pc("ChiPhiTrongNgay").Pc("ChiTuNH").Pc("KHChuyenTien").Pc("NVNopTien").Pc("KMLuuChu").Pc("KHNo").Pc("DienGiai").Pc("NhanvienId").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_SoQuyVonVay
		public static void gcGobal_INCOM_SoQuyVonVay(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("NgayLap").Pc("DienGiai").Pc("TongVonVay").Pc("TongChiTraLai").Pc("TraVon").Pc("VayThemVon").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for Table_1
		public static void Table_1(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("a1").Pc("code").Pc("type").Pc("name").Pc("a23").Pc("giamua").Pc("gialoc").Pc("giaban").Pc("typeid").Pc("unitid")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for Table_2
		public static void Table_2(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("code").Pc("tenhang").Pc("quocgia").Pc("loaihang").Pc("size").Pc("mau").Pc("sl").Pc("dg").Pc("thanhtien").Pc("chatlieu").Pc("trangtri").Pc("ghichu").Pc("tmpcode").Pc("loaihang11").Pc("loaihang1")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGOBALsysuserGcDescriptionFull
		public static void gcGOBALsysuserGcDescriptionFull(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("name").Pc("length").Pc("crdate").Pc("xprec").Pc("xscale").Pc("colid").Pc("status").Pc("isnullable").Pc("colorder").Pc("typename").Pc("xtype").Pc("tablename").Pc("tableid").Pc("fkeyid").Pc("ftable").Pc("fcolname").Pc("PrimaryKey").Pc("descript").Pc("isIdentify")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGOBALsysuserVIEW
		public static void gcGOBALsysuserVIEW(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("name").Pc("length").Pc("xprec").Pc("xscale").Pc("colid").Pc("status").Pc("isnullable").Pc("colorder").Pc("typename").Pc("tblname").Pc("id").Pc("xtype")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KC_BalanceMonth
		public static void gcGobal_STOCK_gcStock_KC_BalanceMonth(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("VattuId").Pc("DonviId").Pc("TypeId").Pc("Y").Pc("M").Pc("D1").Pc("D2").Pc("D3").Pc("D4").Pc("D5").Pc("D6").Pc("D7").Pc("D8").Pc("D9").Pc("D10").Pc("D11").Pc("D12").Pc("D13").Pc("D14").Pc("D15").Pc("D16").Pc("D17").Pc("D18").Pc("D19").Pc("D20").Pc("D21").Pc("D22").Pc("D23").Pc("D24").Pc("D25").Pc("D26").Pc("D27").Pc("D28").Pc("D29").Pc("D30").Pc("D31").Pc("CurInStock").Pc("TotalOutput").Pc("TotalInput").Pc("TotalBalance").Pc("CloseBalance").Pc("TotalValueOutput").Pc("TotalValueInput").Pc("TotalValueBalance")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_OTO_Today
		public static void gcGobal_STOCK_gcStock_PK_OTO_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOUTs").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for XIKE_KC_Today
		public static void XIKE_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INv").Pc("INs").Pc("mINs").Pc("OUTv").Pc("OUTs").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Productionv").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_THANHLY
		public static void gcGobal_TSCD_THANHLY(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("SoCT").Pc("MaCT").Pc("NgayLap").Pc("TSCDId").Pc("NguoiThanhLyID").Pc("ThoiGianThanhLy").Pc("GiaTriThanhLy").Pc("StatusTSCDId").Pc("MoTaNoiDung").Pc("Note").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_TSCD_NhapTaiSan
		public static void gcGobal_TSCD_NhapTaiSan(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("SoCT").Pc("MaCT").Pc("NgayLap").Pc("TSCDId").Pc("DonViTinhId").Pc("DepartmentId").Pc("NhaCungCapId").Pc("HopDongMuaSamId").Pc("SoQuyetDinh").Pc("GiaTaiSanBanDau").Pc("KE1SoSerial").Pc("MoTaHangHoa").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("KE").Pc("TANG_HANG").Pc("NgayMua").Pc("NgayBatDauTinhKhauHao").Pc("ThoiHanKhauHao").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PK_276THD_Today
		public static void gcGobal_STOCK_gcStock_PK_276THD_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOUTs").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTPDEN_Today
		public static void gcGobal_STOCK_gcStock_KTPDEN_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOUTs").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KC_Today
		public static void gcGobal_STOCK_gcStock_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INv").Pc("INs").Pc("mINs").Pc("OUTv").Pc("OUTs").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KTONG_Today
		public static void gcGobal_STOCK_gcStock_KTONG_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("Outv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KPT_XEDAP_Today
		public static void gcGobal_STOCK_gcStock_KPT_XEDAP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOUTs").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PT_276THD_Today
		public static void gcGobal_STOCK_gcStock_PT_276THD_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_XE_PIAGIO_Today
		public static void gcGobal_STOCK_gcStock_XE_PIAGIO_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_PKTX_OTO_Today
		public static void gcGobal_STOCK_gcStock_PKTX_OTO_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for Table_3
		public static void Table_3(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Number").Pc("Number1").Pc("Number2").Pc("Number3").Pc("Number4").Pc("Number5").Pc("Number6").Pc("Number7").Pc("Number8").Pc("Money").Pc("Money1").Pc("Money2").Pc("Money3").Pc("Money4").Pc("Money5").Pc("Money6").Pc("Money7").Pc("Money8").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuChu3").Pc("KieuChu4").Pc("KieuChu5").Pc("KieuChu6").Pc("KieuChu7").Pc("KieuChu8").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuNgay3").Pc("KieuNgay4").Pc("KieuNgay5").Pc("KieuNgay6").Pc("KieuNgay7").Pc("KieuNgay8").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcDesc_TO
		public static void gcDesc_TO(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("tablename").Pc("rorder").Pc("objname").Pc("GroupName").Pc("NumChild").Pc("TableChild")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gbl_DM_Ca
		public static void gbl_DM_Ca(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gbl_PhieuNopTien_Status
		public static void gbl_PhieuNopTien_Status(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gbl_PhieuNopTien
		public static void gbl_PhieuNopTien(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BranchId").Pc("NhanVienId").Pc("AccountId").Pc("Ca").Pc("TongTien").Pc("TienMay").Pc("ChenhLech").Pc("NguoiXacNhanId").Pc("ToNamTram").Pc("TNamTram").Pc("ToHaiTram").Pc("THaiTram").Pc("ToMotTram").Pc("TMotTram").Pc("ToNamChuc").Pc("TNamChuc").Pc("ToHaiChuc").Pc("THaiChuc").Pc("ToMuoiNgan").Pc("TMuoiNgan").Pc("ToNamNgan").Pc("TNamNgan").Pc("ToHaiNgan").Pc("THaiNgan").Pc("ToMotNgan").Pc("TMotNgan").Pc("ToNamT").Pc("TNamT").Pc("StatusId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for Table_4
		public static void Table_4(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Number").Pc("Number1").Pc("Number2").Pc("Number3").Pc("Number4").Pc("Number5").Pc("Number6").Pc("Number7").Pc("Number8").Pc("Money").Pc("Money1").Pc("Money2").Pc("Money3").Pc("Money4").Pc("Money5").Pc("Money6").Pc("Money7").Pc("Money8").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuChu3").Pc("KieuChu4").Pc("KieuChu5").Pc("KieuChu6").Pc("KieuChu7").Pc("KieuChu8").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuNgay3").Pc("KieuNgay4").Pc("KieuNgay5").Pc("KieuNgay6").Pc("KieuNgay7").Pc("KieuNgay8").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Input_Detail_ProductType
		public static void gcGobal_STOCK_gcProduct_Input_Detail_ProductType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("SoLuong").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output_Detail_ProductType
		public static void gcGobal_STOCK_gcProduct_Output_Detail_ProductType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("SoLuong").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Unit
		public static void gcGobal_LITERAL_Unit(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("Mota").Pc("NationalId").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_DANHMUC_THU
		public static void gcGobal_LITERAL_DANHMUC_THU(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_DANHMUC_CHI
		public static void gcGobal_LITERAL_DANHMUC_CHI(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output_ChiPhiType
		public static void gcGobal_STOCK_gcProduct_Output_ChiPhiType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("SoLuong").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Input_ChiPhiType
		public static void gcGobal_STOCK_gcProduct_Input_ChiPhiType(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("SoLuong").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_SUPP_Supplier
		public static void gcGobal_SUPP_Supplier(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Ten").Pc("DienThoai").Pc("Email").Pc("DiaChi").Pc("MaSoThue").Pc("TaiKhoanNH").Pc("NguoiDaiDien").Pc("DienThoaiDD").Pc("CongNoBD").Pc("LoaiId").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_CUST_Customer
		public static void gcGobal_CUST_Customer(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Ten").Pc("DienThoai").Pc("Email").Pc("DiaChi").Pc("NgaySinh").Pc("NgayDangKy").Pc("TenCongTy").Pc("SoDienThoaiCTy").Pc("MaSoThue").Pc("TaiKhoanNH").Pc("CongNoBD").Pc("LoaiKhachId").Pc("DiscountId").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Input_TaiVuon
		public static void gcGobal_STOCK_gcProduct_Input_TaiVuon(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("NCCId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_List
		public static void gcGobal_STOCK_List(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("Code").Pc("Name").Pc("LoaiKhoId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Input_ChiPhi
		public static void gcGobal_STOCK_gcProduct_Input_ChiPhi(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("TypeId").Pc("ThanhTien").Pc("NCCId").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BL_KC_Today
		public static void gcGobal_STOCK_gcStock_BL_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BL_KP_Today
		public static void gcGobal_STOCK_gcStock_BL_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BL_VT_Today
		public static void gcGobal_STOCK_gcStock_BL_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_CB_KC_Today
		public static void gcGobal_STOCK_gcStock_CB_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_CB_KP_Today
		public static void gcGobal_STOCK_gcStock_CB_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_CB_VT_Today
		public static void gcGobal_STOCK_gcStock_CB_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_LV_KC_Today
		public static void gcGobal_STOCK_gcStock_LV_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_LV_KP_Today
		public static void gcGobal_STOCK_gcStock_LV_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_LV_VT_Today
		public static void gcGobal_STOCK_gcStock_LV_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_VL_KC_Today
		public static void gcGobal_STOCK_gcStock_VL_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_VL_KP_Today
		public static void gcGobal_STOCK_gcStock_VL_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_VL_VT_Today
		public static void gcGobal_STOCK_gcStock_VL_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KS_KC_Today
		public static void gcGobal_STOCK_gcStock_KS_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KS_KP_Today
		public static void gcGobal_STOCK_gcStock_KS_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_KS_VT_Today
		public static void gcGobal_STOCK_gcStock_KS_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_138_KC_Today
		public static void gcGobal_STOCK_gcStock_138_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_138_KP_Today
		public static void gcGobal_STOCK_gcStock_138_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_138_VT_Today
		public static void gcGobal_STOCK_gcStock_138_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_142_KC_Today
		public static void gcGobal_STOCK_gcStock_142_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_142_KP_Today
		public static void gcGobal_STOCK_gcStock_142_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_142_VT_Today
		public static void gcGobal_STOCK_gcStock_142_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BP_KC_Today
		public static void gcGobal_STOCK_gcStock_BP_KC_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BP_KP_Today
		public static void gcGobal_STOCK_gcStock_BP_KP_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcStock_BP_VT_Today
		public static void gcGobal_STOCK_gcStock_BP_VT_Today(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("mToDay").Pc("ProductId").Pc("TypeId").Pc("UnitId").Pc("BV").Pc("SV").Pc("SD").Pc("Sell").Pc("mSell").Pc("INs").Pc("INv").Pc("mINs").Pc("OUTs").Pc("OUTv").Pc("mOuts").Pc("Production").Pc("Refund").Pc("Destroy").Pc("ED").Pc("mSD").Pc("mProduction").Pc("Refundv").Pc("mRefund").Pc("mDestroy").Pc("mED").Pc("LastDate").Pc("NCCId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output_Type
		public static void gcGobal_STOCK_gcProduct_Output_Type(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProductList_Detail
		public static void gcGobal_STOCK_gcProductList_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("ProductId").Pc("VatTuId").Pc("DonViTinhId").Pc("LoaiVatTuId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcUserView
		public static void gcUserView(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("name").Pc("length").Pc("xprec").Pc("xscale").Pc("colid").Pc("status").Pc("isnullable").Pc("colorder").Pc("typename").Pc("tblname").Pc("id").Pc("xtype")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for GBL_SOQUY_TIEN_TYPE
		public static void GBL_SOQUY_TIEN_TYPE(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("MoTa").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for GBL_SOQUY_TIEN
		public static void GBL_SOQUY_TIEN(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("BranchId").Pc("TypeId").Pc("NgayDauKy").Pc("TongTienDK").Pc("NgayCuoiKy").Pc("TongTienCK").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Input
		public static void gcGobal_STOCK_gcProduct_Input(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("BranchId").Pc("KhoNhapId").Pc("NCCId").Pc("NhanvienId").Pc("StatusId").Pc("TongTien").Pc("KhuyenMai").Pc("PhuThu").Pc("PhaiTra").Pc("NgayIn").Pc("DienGiai").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProductList
		public static void gcGobal_STOCK_gcProductList(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NhaCCId").Pc("GroupTypeId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("GiaMua").Pc("GiaBan").Pc("Type").Pc("MoTa").Pc("KE").Pc("TANG_HANG").Pc("MoTaHangHoa").Pc("BranchId").Pc("MinValue").Pc("DepartmentId").Pc("NgayMua").Pc("GiaCu").Pc("NgayCapNhatGiaCu").Pc("NgayCapNhatGiaMoi").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("ImageInfo").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Currency
		public static void gcGobal_LITERAL_Currency(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("TiGia").Pc("MoTa").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_LITERAL_Defs_CurrencyExchange
		public static void gcGobal_LITERAL_Defs_CurrencyExchange(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("CurrencyId").Pc("CurrencyChangeId").Pc("Price").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Receipt
		public static void gcGobal_INCOM_Receipt(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("NoiDungThu").Pc("LyDoThuId").Pc("SoTien").Pc("TienTeId").Pc("TiGia").Pc("TongTien").Pc("BranchId").Pc("NhanVienId").Pc("LoaiKhachId").Pc("KHId").Pc("MSHDId").Pc("NCCId").Pc("NguoiNopTien").Pc("DienThoai").Pc("DiaChi").Pc("CardPaymentId").Pc("isFinished").Pc("GhiChu").Pc("PhuThu").Pc("DiscountCust").Pc("ThucThu").Pc("NoLai").Pc("DaTra").Pc("VAT").Pc("NgayHen").Pc("StatusId").Pc("BankReceiptId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_INCOM_Payment
		public static void gcGobal_INCOM_Payment(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("NoidungChiTien").Pc("LyDoChiId").Pc("TongTien").Pc("NhanvienId").Pc("NCCId").Pc("NhanvienNhanTienId").Pc("MSHDId").Pc("MaKHNhanTienId").Pc("TenNguoiNhanTien").Pc("DienThoai").Pc("DiaChi").Pc("PaymentTypeId").Pc("ChungTuGoc").Pc("GhiChu").Pc("VAT").Pc("DienGiai").Pc("BranchId").Pc("SoTien").Pc("TienTeId").Pc("TiGia").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output_ChiPhi
		public static void gcGobal_STOCK_gcProduct_Output_ChiPhi(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("NCCId").Pc("TypeId").Pc("SoTien").Pc("TienTeId").Pc("TiGia").Pc("TongTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output
		public static void gcGobal_STOCK_gcProduct_Output(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("TypeId").Pc("BranchId").Pc("KhoXuatId").Pc("KhoNhapId").Pc("NhanvienId").Pc("KhachHangId").Pc("StatusId").Pc("MSHDId").Pc("TongTien").Pc("KhuyenMai").Pc("PhuThu").Pc("PhaiTra").Pc("KhachDua").Pc("TienThoi").Pc("NgayIn").Pc("NgayXuatHD").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output_ThanhPham
		public static void gcGobal_STOCK_gcProduct_Output_ThanhPham(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("VatTuId").Pc("NhomId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("GiaMua").Pc("TongTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Output_Detail
		public static void gcGobal_STOCK_gcProduct_Output_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("ThanhPhamId").Pc("VatTuId").Pc("NhomId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("GiaMua").Pc("ThanhTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGobal_STOCK_gcProduct_Input_Detail
		public static void gcGobal_STOCK_gcProduct_Input_Detail(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("VatTuId").Pc("NhomId").Pc("TypeId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcGOBALsysuserGcDescription
		public static void gcGOBALsysuserGcDescription(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("tablename").Pc("objname").Pc("descript")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}
		//for gcDesc
		public static void gcDesc(object obj,out object oo)
		{
		    var x = new X(obj); X.Init(_sc);
		    var r = x.R().A().Pc("name").Pc("length").Pc("crdate").Pc("xprec").Pc("xscale").Pc("colid").Pc("status").Pc("isnullable").Pc("colorder").Pc("typename").Pc("xtype").Pc("tablename").Pc("tableid").Pc("fkeyid").Pc("ftable").Pc("fcolname").Pc("PrimaryKey").Pc("descript").Pc("isIdentify")._CR()._CF().L().S().EX().G();
		    oo = new Rs{ Result = r._e ? "FAIL" : "OK", Records = r._d, TotalRecordCount = r._t };
		}

    }
}
