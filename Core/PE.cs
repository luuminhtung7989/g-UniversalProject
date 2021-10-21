using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using WebApplication.Core;
using zgc0LibAdmin;

namespace WebApplication.Core
{
    /// <summary>
    /// Summary description for PE
    /// </summary>

    public class PE
    {
        public static string _sc = ConfigurationManager.AppSettings["ConnectionString"];
        
        public static void AddOrUpdateInputDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
		    x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("VatTuId").Pc("NhomId").Pc("TypeId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuNhapKhoId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuNhapKhoId"] + "");
            var r = x.EXO(new[] { x._sql, SumStockInput(p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateInputTaiVuon(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("NCCId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuNhapKhoId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuNhapKhoId"] + "");
            var r = x.EXO(new[] { x._sql, SumStockInput(p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateInputChiPhi(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
		    x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("TypeId").Pc("ThanhTien").Pc("NCCId").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuNhapKhoId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuNhapKhoId"] + "");
            var r = x.EXO(new[] { x._sql, SumStockInput(p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateOutputDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GiaMua").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuXuatKhoId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuXuatKhoId"] + "");
            var r = x.EXO(new[] { x._sql, string.Format(";declare @thanhTien float; set @thanhTien = " +
                                                        "isnull((Select Sum(ThanhTien) from gcGobal_STOCK_gcProduct_Output_Detail " +
                                                         "where PhieuXuatKhoId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))), 0); update gcGobal_STOCK_gcProduct_Output set TongTien = " +
                                                         "@thanhTien, PhaiTra = @thanhTien - case when isnull(KhuyenMai, 0) > 100 then KhuyenMai else (@thanhTien * isnull(KhuyenMai, 0))/100 end + " +
                                                         "case when isnull(TienThue, 0) > 100 then TienThue else (@thanhTien * isnull(TienThue, 0))/100 end, " +
                                                         "NoLai = @thanhTien - case when isnull(KhuyenMai, 0) > 100 then KhuyenMai else (@thanhTien * isnull(KhuyenMai, 0))/100 end + " +
                                                         "case when isnull(TienThue, 0) > 100 then TienThue else (@thanhTien * isnull(TienThue, 0))/100 end - isnull(DaTra, 0) where id = {0} ",
                                                         p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdatePaymentDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieuChiTienMatId").Pc("VuViecId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("VAT").Pc("DienGiai").Pc("NoidungChiTien").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update gcGobal_INCOM_Payment set TongTien = " +
                                                         "(Select Sum(ThanhTien) as ThanhTien from gcGobal_INCOM_Payment_Detail " +
                                                         "where PhieuChiTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["PhieuChiTienMatId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateReceiptDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("TraLai").Pc("GiaMua").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("ChietKhauNgMoiGioi").Pc("PrintSLInfo").Pc("AddInfor").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuThuTienMatId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuThuTienMatId"] + "");
            var r = x.EXO(new[] { x._sql, string.Format(";declare @thanhTien float; set @thanhTien = " +
                                                        "isnull((Select Sum(ThanhTien) from gcGobal_INCOM_Receipt_Detail " +
                                                         "where PhieuThuTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))), 0); update gcGobal_INCOM_Receipt set TongTien = " +
                                                         "@thanhTien, ThucThu =  @thanhTien - case when isnull(DiscountCust, 0) > 100 then DiscountCust else (@thanhTien * isnull(DiscountCust, 0))/100 end + " +
                                                         "case when isnull(PhuThu, 0) > 100 then PhuThu else (@thanhTien * isnull(PhuThu, 0))/100 end, " +
                                                         "NoLai = @thanhTien - case when isnull(DiscountCust, 0) > 100 then DiscountCust else (@thanhTien * isnull(DiscountCust, 0))/100 end + " +
                                                         "case when isnull(PhuThu, 0) > 100 then PhuThu else (@thanhTien * isnull(PhuThu, 0))/100 end - isnull(Space01, 0) where id = {0} ",
                                                         p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateThanhLyDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("NhapTaiSanId").Pc("TSCDId").Pc("DonViTinhId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update gcGobal_TSCD_THANHLY set GiaTriThanhLy = " +
                                                         "(Select Sum(ThanhTien) as ThanhTien from gcGobal_TSCD_THANHLY_Detail " +
                                                         "where NhapTaiSanId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["NhapTaiSanId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateNhapDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("NhapTaiSanId").Pc("TSCDId").Pc("DonViTinhId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update gcGobal_TSCD_NhapTaiSan set GiaTaiSanBanDau = " +
                                                         "(Select Sum(ThanhTien) as ThanhTien from gcGobal_TSCD_NhapTaiSan_Detail " +
                                                         "where NhapTaiSanId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["NhapTaiSanId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateScheduleAdvanceDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("ScheduleAdvanceId").Pc("ScheduleId").Pc("Name").Pc("Note").Pc("Keep1").Pc("Keep2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql, string.Format("declare @names nvarchar(max); " +
                                                        "select @names = coalesce(@names + ', ', '') + isnull(Name, '') " +
                                                        "from GBL_TRAINNING_SCHEDULE_ADVANCE_DETAIL where scheduleAdvanceId = {0}; " +
                                                        "update GBL_TRAINNING_SCHEDULE_ADVANCE set Name = @names where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["ScheduleAdvanceId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AMA_XIKE_REPORT_CLASS_FULL(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            var r = x.R().A().Pc("Id").Pc("CourseId").Pc("StatusId").Pc("ScheduleId").Pc("StartDate").Pc("Name").Pc("TotalTime").Pc("StartRegisterDate").Pc("FinishDate").Pc("BranchId").Pc("TypeId").Pc("OldClassId").Pc("LocationId").Pc("PricePerStudent").Pc("MinimumStudent").Pc("CashCollection").Pc("MaximumStudent").Pc("IsPromotion").Pc("Speaking").Pc("Listening").Pc("Reading").Pc("Grammar").Pc("Writing").Pc("Oral").Pc("Comment").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
            oo = new Rs { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateClassStudent(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("StudentId").Pc("InvoiceId").Pc("Invoice").Pc("Amount").Pc("UnitId").Pc("ExecuteRate").Pc("CourseId").Pc("PersonPay").Pc("StatusId").Pc("Note").Pc("InvoiceDate").Pc("isPT").Pc("EmployeeId").Pc("ScheduleId").Pc("TypePaymentId").Pc("Description").Pc("Cupon").Pc("ClassId").Pc("StartDate").Pc("TotalTime").Pc("TotalMonth").Pc("FinishDate").Pc("ReasonId").Pc("StudentSpecial").Pc("Comment").Pc("AmountLearned").Pc("AmountKeep").Pc("DateExpired").Pc("SpeakingId").Pc("ReadingId").Pc("ListeningId").Pc("WritingId").Pc("GrammerId").Pc("GuaranteedScore").Pc("LevelId").Pc("TypeId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Keep05").Pc("Keep06").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF();
            var d = ((Dictionary<string, object>)x._ip["d"]);
            List<string> sql = new List<string>();
            if ((x._ip["type"] + "") == "i")
            {
                if ((d["Keep01"] + "").Equals("2") && !string.IsNullOrEmpty(d["StudentId"] + "")
                    && !string.IsNullOrEmpty(d["CourseId"] + ""))
                {
                    var st = zgc0HelperSecurity.GetDataTable(string.Format("select Name from GBL_TRAINING_STUDENT where id = N'{0}'",
                        d["StudentId"] + ""), zgc0GlobalStr.getSqlStr());
                    var co = zgc0HelperSecurity.GetDataTable(string.Format("select Name from GBL_TRAINNING_COURSE where id = N'{0}'",
                        d["CourseId"] + ""), zgc0GlobalStr.getSqlStr());
                    var lc = zgc0HelperSecurity.GetDataTable(string.Format("select count(*) as SoLop from GBL_TRAINNING_COURSE_CLASS where Name like N'%{0}{1}%'",
                        co.Rows[0]["Name"] + "", (st.Rows[0]["Name"] + "").Replace(" ", "")), zgc0GlobalStr.getSqlStr());
                    sql.Add(string.Format("update GBL_TRAINING_STUDENT set Statusid = 2 where id = {3};" +
                        "declare @classId int; insert into GBL_TRAINNING_COURSE_CLASS (CourseId, Name, StatusId) " +
                        "values ({0}, N'{1}{2}{4}', 2); select @classId = scope_identity() ",
                        d["CourseId"] + "", co.Rows[0]["Name"] + "", (st.Rows[0]["Name"] + "").Replace(" ", ""), d["StudentId"] + "",
                        (int)lc.Rows[0]["SoLop"] > 0 ? (lc.Rows[0]["SoLop"] + "") : ""));
                    d["ClassId"] = "@classId";
                }
                else if ((d["Keep01"] + "").Equals("1") && !string.IsNullOrEmpty(d["StudentId"] + "")
                  && !string.IsNullOrEmpty(d["CourseId"] + "") && !string.IsNullOrEmpty(d["ClassId"] + ""))
                {
                    var st = zgc0HelperSecurity.GetDataTable(string.Format("select StatusId from GBL_TRAINNING_COURSE_CLASS where id = N'{0}'",
                    d["ClassId"] + ""), zgc0GlobalStr.getSqlStr());
                    if (st.Rows.Count > 0)
                    {
                        if ((st.Rows[0]["StatusId"] + "").Equals("1"))
                            sql.Add(string.Format("update GBL_TRAINING_STUDENT set Statusid = 3 where id = {0};",
                                d["StudentId"] + ""));
                        else if ((st.Rows[0]["StatusId"] + "").Equals("2") || (st.Rows[0]["StatusId"] + "").Equals("3"))
                            sql.Add(string.Format("update GBL_TRAINING_STUDENT set Statusid = 2 where id = {0};",
                                d["StudentId"] + ""));
                    }
                }
                x.L().I(x._a.T[3], x._d);
                sql.Add(x._sql);
            }
            else
            {
                x.L().U(x._a.T[3], x._d, x._c);
                sql.Add(x._sql);
                if (!x._ip.ContainsKey("d2"))
                {
                    if (((Dictionary<string, object>)x._ip["c"]).ContainsKey("Id"))
                    {
                        var tb = zgc0HelperSecurity.GetDataTable(string.Format("select StudentId, ClassId, Amount, StatusId from GBL_TRAINNING_COURSE_CLASS_STUDENT where id = {0}",
                        ((Dictionary<string, object>)x._ip["c"])["Id"] + ""), zgc0GlobalStr.getSqlStr());
                        if (tb.Rows.Count > 0)
                            sql.Add(string.Format(" update GBL_TRAINNING_COURSE_CLASS_STUDENT_MARK set classid = {0} where " +
                                        "studentid = {1} and classid = {2}; update GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT set " +
                                        " classid = {0} where studentid = {1} and classid = {2}; ",
                                        string.IsNullOrEmpty(d["ClassId"] + "") ? "null" : d["ClassId"] + "",
                                        tb.Rows[0]["StudentId"] + "", string.IsNullOrEmpty(tb.Rows[0]["ClassId"] + "") ? "null" : tb.Rows[0]["ClassId"] + ""));
                        if (!string.IsNullOrEmpty(d["StudentId"] + "")
                            && !string.IsNullOrEmpty(d["CourseId"] + "") && !string.IsNullOrEmpty(d["ClassId"] + ""))
                        {
                            var st = zgc0HelperSecurity.GetDataTable(string.Format("select StatusId from GBL_TRAINNING_COURSE_CLASS where id = N'{0}'",
                            d["ClassId"] + ""), zgc0GlobalStr.getSqlStr());
                            if (st.Rows.Count > 0)
                            {
                                if ((st.Rows[0]["StatusId"] + "").Equals("1"))
                                    sql.Add(string.Format("update GBL_TRAINING_STUDENT set Statusid = 3 where id = {0};",
                                        d["StudentId"] + ""));
                                else if ((st.Rows[0]["StatusId"] + "").Equals("2") || (st.Rows[0]["StatusId"] + "").Equals("3"))
                                    sql.Add(string.Format("update GBL_TRAINING_STUDENT set Statusid = 2 where id = {0};",
                                        d["StudentId"] + ""));
                            }
                        }
                    }
                }
                else
                {
                    var d2 = ((Dictionary<string, object>)x._ip["d2"]);
                    var d3 = ((Dictionary<string, object>)x._ip["d3"]);
                    var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Id, StudentId, ClassId, Amount, StatusId, CourseId, Invoice " +
                        "from GBL_TRAINNING_COURSE_CLASS_STUDENT where ClassId = {0} and CourseId = {1} and StudentId = {2} order by InvoiceDate desc ",
                        ((Dictionary<string, object>)x._ip["c"])["ClassId"] + "",
                        ((Dictionary<string, object>)x._ip["c"])["CourseId"] + "",
                        ((Dictionary<string, object>)x._ip["c"])["StudentId"] + ""), zgc0GlobalStr.getSqlStr());
                    var aL = double.Parse(d2["AmountLearned"] + "");
                    var Invoice = "";
                    for (int i = 0; i < tb.Rows.Count; i++)
                    {
                        if ((double)tb.Rows[i]["Amount"] < aL)
                        {
                            sql.Add(string.Format(" update gbl_trainning_course_class_student set Amount = 0 where id = {0}; ",
                                tb.Rows[i]["Id"] + ""));
                            aL = aL - (double)tb.Rows[i]["Amount"];
                            Invoice += tb.Rows[i]["Invoice"] + ", ";
                        }
                        else
                        {
                            sql.Add(string.Format(" update gbl_trainning_course_class_student set Amount = {0} where id = {1}; ",
                                aL, tb.Rows[i]["Id"] + ""));
                            Invoice += tb.Rows[i]["Invoice"] + ", ";
                            break;
                        }
                    }
                    if (Invoice.Length > 0) Invoice = Invoice.Substring(0, Invoice.Length - 2);
                    var da = new List<C>();
                    da.Add(new C { T = new[] { "Invoice", "4", "Transfer from Invoice " + Invoice } });
                    foreach (var it in d3 as Dictionary<string, object>)
                        da.Add(new C { T = new[] { it.Key, x.L(x._fs, it.Key, 0), it.Value + "" } });
                    x.I(x._a.T[3], da);
                    sql.Add(x._sql);
                    if (d["StatusId"] + "" == "4" || d["StatusId"] + "" == "5" || d["StatusId"] + "" == "6")
                    {
                        sql.Add(string.Format(" Update GBL_TRAINING_STUDENT set StatusId = {0} where Id = {1}",
                            d["StatusId"] + "" == "4" ? 6 : (d["StatusId"] + "" == "5" ? 7 : 8),
                            ((Dictionary<string, object>)x._ip["c"])["StudentId"] + ""));
                    }
                }
            }
            var r = x.EXO(sql.ToArray(), false).G();
            oo = new Rs { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void CreateMarks(object obj, out object oo)
        {

            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("ClassId").Pc("TypeId")
                ._CR()._CF().L();
            var c = ((Dictionary<string, object>)x._ip["c"]);
            zgc0HelperSecurity.ExecuteNonQuery(string.Format("delete from GBL_TRAINNING_COURSE_CLASS_STUDENT_MARK where classId = {0} and typeid = {1} and studentid not in (select studentid from GBL_TRAINNING_COURSE_CLASS_STUDENT where classid = {0} and studentid is not null) ",
                    c["ClassId"] + "", c["TypeId"] + ""), zgc0GlobalStr.getSqlStr());
            var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Id, StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT_MARK where classId = {0} and typeid = {1}",
                    c["ClassId"] + "", c["TypeId"] + ""), zgc0GlobalStr.getSqlStr());
            var ls = zgc0HelperSecurity.GetDataTable(string.Format("select distinct StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT where classId = {0} and studentid is not null",
                    c["ClassId"] + ""), zgc0GlobalStr.getSqlStr());
            var flag = true;
            List<string> sql = new List<string>();
            if (ls.Rows.Count == 0)
                oo = new Rs { Result = "OK", Records = "", TotalRecordCount = 0 };
            else
            {
                for (int i = 0; i < ls.Rows.Count; i++)
                {
                    flag = true;
                    for (int j = 0; j < tb.Rows.Count; j++)
                    {
                        if ((int)ls.Rows[i]["StudentId"] == (int)tb.Rows[j]["StudentId"])
                        {
                            flag = false; break;
                        }
                    }
                    if (flag)
                        sql.Add(string.Format("insert into GBL_TRAINNING_COURSE_CLASS_STUDENT_MARK (ClassId, TypeId, StudentId) values ({0}, {1}, {2})",
                            c["ClassId"] + "", c["TypeId"] + "", ls.Rows[i]["StudentId"] + ""));
                }
                var r = x.EXO(sql.ToArray(), false).G();
                oo = new Rs { Result = "OK", Records = r._d, TotalRecordCount = r._t };
            }
        }
        public static void AddOrUpdateThuQuyNhanTienDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieunhantienId").Pc("VuViecNhanTienId").Pc("NgayThu").Pc("MSPT").Pc("StudentId").Pc("SoTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();

            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else x.R(x._a.T[3], x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update GBL_TRAINNING_THUQUY_PHIEUNHANTIEN set TongTien = " +
                                                         "(Select Sum(SoTien) as ThanhTien from GBL_TRAINNING_THUQUY_PHIEUNHANTIEN_DETAILS " +
                                                         "where PhieunhantienId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["PhieunhantienId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateRefundDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonGia").Pc("DonViTinhId").Pc("StudentId").Pc("ClassId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("ChietKhauNgMoiGioi").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();

            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update gcGobal_INCOM_Receipt_Refund set TongTien = " +
                                                         "(Select Sum(ThanhTien) as ThanhTien from gcGobal_INCOM_Receipt_Refund_Detail " +
                                                         "where PhieuThuTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["PhieuThuTienMatId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateQua(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            var d = ((Dictionary<string, object>)x._ip["d"]);
            x.R().A().Pc("Id").Pc("StudentId").Pc("Productid").Pc("KhoId").Pc("NgayTang").Pc("SoLuong").Pc("DonViTinhId").Pc("Description").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();

            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            R r;
            if (string.IsNullOrEmpty(d["KhoId"] + "") || string.IsNullOrEmpty(d["Productid"] + "")
                || string.IsNullOrEmpty(d["DonViTinhId"] + "") || string.IsNullOrEmpty(d["NgayTang"] + "")
                || string.IsNullOrEmpty(d["SoLuong"] + ""))
                r = x.EXO(new[] { x._sql }, false).G();
            else
            {
                var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Code from gcGobal_STOCK_List where id = {0}",
                    d["KhoId"] + ""), zgc0GlobalStr.getSqlStr());
                // production la qua, mproduction la doi diem
                var tbb = zgc0HelperSecurity.GetDataTable(string.Format("select Id from gcGobal_STOCK_gcStock_{0}_Today where Productid = {1} and UnitId = {2}  and mtoday = '{3}'",
                        tb.Rows[0]["Code"] + "", d["Productid"] + "", d["DonViTinhId"] + "", d["NgayTang"] + ""), zgc0GlobalStr.getSqlStr());
                if (tbb.Rows.Count > 0)
                    r = x.EXO(new[] { x._sql, string.Format("update gcGobal_STOCK_gcStock_{0}_Today set Production = " +
                                                             "(Select Sum(soluong) as SoLuong from GBL_TRAINING_STUDENT_QUA " +
                                                             "where Productid = {1} and DonViTinhId = {2} and ngaytang = '{3}' AND ((isPrgbUserDeleted IS NULL) " +
                                                             "OR (isPrgbUserDeleted<1))), ED = (sd - sell - outs - (Select Sum(soluong) as SoLuong from GBL_TRAINING_STUDENT_QUA " +
                                                             "where Productid = {1} and DonViTinhId = {2} and ngaytang = '{3}' AND ((isPrgbUserDeleted IS NULL) " +
                                                             "OR (isPrgbUserDeleted<1))) - mproduction + ins + refund) where Id = {4}",
                                                             tb.Rows[0]["Code"] + "", d["Productid"] + "", d["DonViTinhId"] +"", d["NgayTang"] +"", tbb.Rows[0]["Id"]) }, false).G();
                else
                    r = x.EXO(new[] { x._sql, string.Format("insert into gcGobal_STOCK_gcStock_{0}_Today (productid, unitid, mtoday, production, ed) values " +
                                                             "({1}, {2}, '{3}', {4}, -{4}) ",
                                                             tb.Rows[0]["Code"] + "", d["Productid"] + "", d["DonViTinhId"] +"", d["NgayTang"] +"", d["SoLuong"] +"") }, false).G();
            }
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateStudentAddMark(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("StudentId").Pc("ClassId").Pc("TypeId").Pc("NgayTang").Pc("Mark").Pc("Description").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();

            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update gbl_training_Student set classid = " +
                                                         "(Select Sum(mark) from gbl_training_student_addmark " +
                                                         "where studentid = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["StudentId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateDoiDiem(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            var d = ((Dictionary<string, object>)x._ip["d"]);
            x.R().A().Pc("Id").Pc("StudentId").Pc("Productid").Pc("KhoId").Pc("NgayLap").Pc("SoLuong").Pc("DonViTinhId").Pc("Gia").Pc("TongTien").Pc("GiamGia").Pc("PhuThu").Pc("ThucThu").Pc("Description").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();

            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            R r;
            if (string.IsNullOrEmpty(d["KhoId"] + "") || string.IsNullOrEmpty(d["Productid"] + "")
                || string.IsNullOrEmpty(d["DonViTinhId"] + "") || string.IsNullOrEmpty(d["NgayLap"] + "")
                || string.IsNullOrEmpty(d["SoLuong"] + ""))
                r = x.EXO(new[] { x._sql }, false).G();
            else
            {
                var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Code from gcGobal_STOCK_List where id = {0}",
                    d["KhoId"] + ""), zgc0GlobalStr.getSqlStr());
                // production la qua, mproduction la doi diem
                var tbb = zgc0HelperSecurity.GetDataTable(string.Format("select Id from gcGobal_STOCK_gcStock_{0}_Today where Productid = {1} and UnitId = {2}  and mtoday = '{3}'",
                        tb.Rows[0]["Code"] + "", d["Productid"] + "", d["DonViTinhId"] + "", d["NgayLap"] + ""), zgc0GlobalStr.getSqlStr());
                if (tbb.Rows.Count > 0)
                    r = x.EXO(new[] { x._sql, string.Format("update gbl_training_Student set classid = " +
                                                         "((Select Sum(mark) from gbl_training_student_addmark " +
                                                         "where studentid = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) - (Select Sum(tongtien) from GBL_TRAINING_STUDENT_DOIDIEM " +
                                                         "where studentid = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1)))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["StudentId"] +""),
                                                         string.Format("update gcGobal_STOCK_gcStock_{0}_Today set mProduction = " +
                                                             "(Select Sum(soluong) as SoLuong from GBL_TRAINING_STUDENT_DOIDIEM " +
                                                             "where Productid = {1} and DonViTinhId = {2} and NgayLap = '{3}' AND ((isPrgbUserDeleted IS NULL) " +
                                                             "OR (isPrgbUserDeleted<1))), ED = (sd - sell - outs - (Select Sum(soluong) as SoLuong from GBL_TRAINING_STUDENT_DOIDIEM " +
                                                             "where Productid = {1} and DonViTinhId = {2} and NgayLap = '{3}' AND ((isPrgbUserDeleted IS NULL) " +
                                                             "OR (isPrgbUserDeleted<1))) - production + ins + refund) where Id = {4}",
                                                             tb.Rows[0]["Code"] + "", d["Productid"] + "", d["DonViTinhId"] +"", d["NgayLap"] +"", tbb.Rows[0]["Id"]) }, false).G();
                else
                    r = x.EXO(new[] { x._sql, string.Format("update gbl_training_Student set classid = " +
                                                         "((Select Sum(mark) from gbl_training_student_addmark " +
                                                         "where studentid = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))) - (Select Sum(tongtien) from GBL_TRAINING_STUDENT_DOIDIEM " +
                                                         "where studentid = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1)))) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["StudentId"] +""),
                                                         string.Format("insert into gcGobal_STOCK_gcStock_{0}_Today (productid, unitid, mtoday, mproduction, ed) values " +
                                                             "({1}, {2}, '{3}', {4}, -{4}) ",
                                                             tb.Rows[0]["Code"] + "", d["Productid"] + "", d["DonViTinhId"] +"", d["NgayLap"] +"", d["SoLuong"] +"") }, false).G();
            }
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static string GetRandomCode(Random r, int length)
        {
            char[] key = new char[length];
            string chuoikytu = "ASDFGHJKLQWERTYUIOPZXCVBNM1234567890";
            for (int i = 0; i < length; i++)
            {
                key[i] = chuoikytu[r.Next(chuoikytu.Length)];
            }
            return new String(key);
        }
        public static void CreateCodeDiscount(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id");
            var ld = x._ip["d"] as ArrayList;
            var da = new object[ld.Count];
            var sql = new string[ld.Count];
            string code = "";
            DateTime dn = DateTime.Now;
            for (int i = 0; i < ld.Count; i++)
            {
                code = "";
                while (string.IsNullOrEmpty(code))
                {
                    Random ra = new Random();
                    code = GetRandomCode(ra, 6);
                    var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Id from GBL_TRAINNING_COUPON where code like '%{0}' and keep01 = {1}",
                        code, dn.Year), zgc0GlobalStr.getSqlStr());
                    if (tb.Rows.Count > 0) code = "";
                }
                (ld[i] as Dictionary<string, object>).Add("Code", string.Format("{0:0000}{1}", i, code));
                (ld[i] as Dictionary<string, object>).Add("Keep01", dn.Year);
                var j = 0;
                da[i] = new List<C>();
                foreach (var d in ld[i] as Dictionary<string, object>)
                {
                    if (string.IsNullOrEmpty(x.L(x._fs, d.Key, 0)))
                    {     //Kiem tra neu field _c truyen vao khong dung giong voi tap field _c cua action thi bao loi
                        oo = new { Result = 0, Records = _E.E10007.G() }; return;
                    }
                    ((List<C>)da[i]).Add(new C { T = new[] { d.Key, x.L(x._fs, d.Key, 0), d.Value + "" } });
                    j++;
                }
                x.I(x._a.T[3], (List<C>)da[i]);
                sql[i] = x._sql;
            }
            var r = x.EXO(sql, false).G();
            oo = new Rs { Result = r._s == 1 ? "OK" : "FAIL", Records = r._d };
        }
        public static void AddOrUpdateReceipt(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("MSHDId").Pc("NgayLap").Pc("BranchId").Pc("NhanVienId").Pc("KhachHangId").Pc("DateOfPay").Pc("StudentId").Pc("BankAccountId").Pc("TypePaymentId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("VAT").Pc("PhuThu").Pc("NgayHen").Pc("isFinished").Pc("DiscountCust").Pc("StatusId").Pc("isPrinted").Pc("BankReceiptId").Pc("CardPaymentId").Pc("OrderId").Pc("ClassId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Id from gcGobal_INCOM_Receipt where id = {0} " +
                        "and (code in select code from gbl_trainning_coupon where fromdate <= '{1}' and todate >= '{1}') ",
                        ((Dictionary<string, object>)x._ip["d"])["Id"] + "",
                        ((Dictionary<string, object>)x._ip["d"])["NgayLap"] + ""), zgc0GlobalStr.getSqlStr());
            R r;
            if (tb.Rows.Count == 0)
            {
                r = x.EXO(new[] { x._sql, string.Format("update gbl_trainning_coupon set amount = amount + 1 where code = '{0}' and " +
                                                        " fromdate <= '{1}' and todate >= '{1}' ",
                                                        ((Dictionary<string, object>)x._ip["d"])["Keep01"] +"",
                                                         ((Dictionary<string, object>)x._ip["d"])["NgayLap"] +"") }, false).G();
            }
            else
            {
                r = x.EXO(new[] { x._sql }, false).G();
            }
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void UpdateMarks(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id");
            var ld = x._ip["d"] as ArrayList;
            var lc = x._ip["c"] as ArrayList;
            var da = new object[ld.Count];
            var cd = new object[ld.Count];
            var sql = new string[ld.Count];
            for (int i = 0; i < ld.Count; i++)
            {
                cd[i] = new List<C>();
                foreach (var c in lc[i] as Dictionary<string, object>)
                {
                    ((List<C>)cd[i]).Add(new C { T = new[] { c.Key, x.L(x._fs, c.Key, 0), c.Value + "" } });
                }
                da[i] = new List<C>();
                foreach (var d in ld[i] as Dictionary<string, object>)
                {
                    if (string.IsNullOrEmpty(x.L(x._fs, d.Key, 0)))
                    {     //Kiem tra neu field _c truyen vao khong dung giong voi tap field _c cua action thi bao loi
                        oo = new { Result = 0, Records = _E.E10007.G() }; return;
                    }
                    ((List<C>)da[i]).Add(new C { T = new[] { d.Key, x.L(x._fs, d.Key, 0), d.Value + "" } });
                }
                x.U(x._a.T[3], (List<C>)da[i], (List<C>)cd[i]);
                sql[i] = x._sql;
            }
            var r = x.EXO(sql, false).G();
            oo = new Rs { Result = r._s == 1 ? "OK" : "FAIL", Records = r._d };
        }
        public static void CreateAbsents(object obj, out object oo)
        {

            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("ClassId").Pc("Date")
                ._CR()._CF().L();
            List<string> sql = new List<string>();
            var c = ((Dictionary<string, object>)x._ip["c"]);
            zgc0HelperSecurity.ExecuteNonQuery(string.Format("delete from GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT where classId = {0} and Date = convert(datetime, '{1}') and studentid not in (select studentid from GBL_TRAINNING_COURSE_CLASS_STUDENT where classid = {0} and studentid is not null) ",
                    c["ClassId"] + "", c["Date"] + ""), zgc0GlobalStr.getSqlStr());
            var tb = zgc0HelperSecurity.GetDataTable(string.Format("select Id, StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT where classId = {0} and Date = convert(datetime, '{1}')",
                    c["ClassId"] + "", c["Date"] + ""), zgc0GlobalStr.getSqlStr());
            var ls = zgc0HelperSecurity.GetDataTable(string.Format("select distinct StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT where classId = {0} and studentid is not null",
                    c["ClassId"] + ""), zgc0GlobalStr.getSqlStr());
            var ab = zgc0HelperSecurity.GetDataTable(string.Format("select Id from GBL_TRAINNING_COURSE_CLASS_ABSENT where classId = {0} and Date = convert(datetime, '{1}')",
                    c["ClassId"] + "", c["Date"] + ""), zgc0GlobalStr.getSqlStr());
            if (ab.Rows.Count > 0)
                sql.Add(string.Format("declare @absentId int; set @absentId = {0};", ab.Rows[0]["Id"] + ""));
            else
                sql.Add(string.Format("declare @absentId int; insert into GBL_TRAINNING_COURSE_CLASS_ABSENT (ClassId, date) " +
                    "values ({0}, '{1}'); select @absentId = scope_identity(); ",
                    c["ClassId"] + "", c["Date"] + ""));
            var flag = true;
            if (ls.Rows.Count == 0)
                oo = new Rs { Result = "OK", Records = "", TotalRecordCount = 0 };
            else
            {
                for (int i = 0; i < ls.Rows.Count; i++)
                {
                    flag = true;
                    for (int j = 0; j < tb.Rows.Count; j++)
                    {
                        if ((int)ls.Rows[i]["StudentId"] == (int)tb.Rows[j]["StudentId"])
                        {
                            flag = false; break;
                        }
                    }
                    if (flag)
                        sql.Add(string.Format("insert into GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT (ClassId, Date, StudentId, AbsentId) " +
                            "values ({0}, '{1}', {2}, @absentId)",
                            c["ClassId"] + "", c["Date"] + "", ls.Rows[i]["StudentId"] + ""));
                }
                var r = x.EXO(sql.ToArray(), false).G();
                oo = new Rs { Result = "OK", Records = r._d, TotalRecordCount = r._t };
            }
        }
        public static void UpdateAbsents(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id");
            var ld = x._ip["d"] as ArrayList;
            var lc = x._ip["c"] as ArrayList;
            var d2 = ((Dictionary<string, object>)x._ip["d2"]);
            var da = new object[ld.Count];
            var cd = new object[ld.Count];
            var sql = new string[ld.Count + 1];
            for (int i = 0; i < ld.Count; i++)
            {
                cd[i] = new List<C>();
                foreach (var c in lc[i] as Dictionary<string, object>)
                {
                    ((List<C>)cd[i]).Add(new C { T = new[] { c.Key, x.L(x._fs, c.Key, 0), c.Value + "" } });
                }
                da[i] = new List<C>();
                foreach (var d in ld[i] as Dictionary<string, object>)
                {
                    if (string.IsNullOrEmpty(x.L(x._fs, d.Key, 0)))
                    {     //Kiem tra neu field _c truyen vao khong dung giong voi tap field _c cua action thi bao loi
                        oo = new { Result = 0, Records = _E.E10007.G() }; return;
                    }
                    ((List<C>)da[i]).Add(new C { T = new[] { d.Key, x.L(x._fs, d.Key, 0), d.Value + "" } });
                }
                x.U(x._a.T[3], (List<C>)da[i], (List<C>)cd[i]);
                sql[i] = x._sql;
            }
            sql[ld.Count] = string.Format("update GBL_TRAINNING_COURSE_CLASS_ABSENT set Name = N'{0}', Comment = N'{1}', " +
                "Note = N'{2}', AccountCharge = {3}, TeacherForgetsTracking = {4} where id = {5}",
                d2["Name"] + "", d2["Comment"] + "", d2["Note"] + "", d2["AccountCharge"] + "", d2["TeacherForgetsTracking"] + "", d2["Id"] + "");
            var r = x.EXO(sql, false).G();
            oo = new Rs { Result = r._s == 1 ? "OK" : "FAIL", Records = r._d };
        }
        public static void GetProcedure(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A();
            var ld = x._ip["c"] as ArrayList;
            var sql = new string[ld.Count];
            for (int i = 0; i < ld.Count; i++)
                sql[i] = ld[i] + "";
            var r = x.EXO(sql, true).G();
            oo = new Rs { Result = r._s == 1 ? "OK" : "FAIL", Records = r._d };
        }
        public static void AddOrUpdateCancelDate(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("ClassId").Pc("TypeId").Pc("Name").Pc("Reason").Pc("WillCompensate").Pc("Note").Pc("Description").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else x.U(x._a.T[3], x._d, x._c);
            var r = x.EXO(new[] { x._sql,
                string.Format("declare @t datetime, @clid int, @hour float, @classid int, @teacherid int, @flag bit, " +
                    "@timefrom nvarchar(5), @timeto nvarchar(5), @startdate datetime, @enddate datetime, " +
                    "@monday bit, @tuesday bit, @wednesday bit, @thursday bit, @friday bit, @saturday bit, @sunday bit, " +
                    "@classidname nvarchar(255), @teacheridname nvarchar(255), @id int, @checkid int, @totalTime float, " +
                    "@checkid2 int, @shid int, @shiftid int, @shiftidname nvarchar(max), " +
                    "@fare float, @e datetime, @lesson nvarchar(max), @teacherComment nvarchar(max), @note nvarchar(max) " +
                    "delete from gbl_trainning_course_class_teacher_temphour " +
                    "select @t = StartDate, @shid = ScheduleId, @totalTime = TotalTime from zgcl_GBL_TRAINNING_COURSE_CLASS00 where id = {0} " +
                    "declare li cursor for select id, timefrom, timeto,  " +
                    "monday, tuesday, wednesday, thursday, friday, saturday, sunday, shiftid, shiftidname " +
                    "from  zgcl_GBL_TRAINNING_SCHEDULE00_FULL where   " +
                    " id in (select scheduleid from zgcl_GBL_TRAINNING_SCHEDULE_ADVANCE_DETAIL01 " +
                    "where (scheduleAdvanceid = @shid)) order by monday desc, tuesday desc, wednesday desc, " +
                    "thursday desc, friday desc, saturday desc, sunday desc " +
                    "open li " +
                    "fetch next from li into @id, " +
                    "@timefrom, @timeto, @monday, @tuesday, @wednesday, @thursday, @friday, @saturday, @sunday, @shiftid, @shiftidname " +
                    "while @@fetch_status = 0 " +
                    "begin " +
                    " set @hour = 0 " +
                    "set @e = @t  " +
                    "while @hour < @totalTime " +
                    "begin " +
                    "set @flag = 0 " +
                    "set @checkid = 0 " +
                    "set @checkid2 = 0 " +
                    "select @checkid = id from zgcl_GBL_TRAINNING_DAYOFF00 where FromDate <= @e and ToDate >= @e " +
                    "select @checkid2 = id from zgcl_GBL_TRAINNING_COURSE_CLASS_CANCEL00 where classid = {0} " +
                    " and Name = @e " +
                    "if(((@sunday = 1 and datepart(dw, @e) = 1) " +
                    "or (@monday = 1 and datepart(dw, @e) = 2) " +
                    "or (@tuesday = 1 and datepart(dw, @e) = 3) " +
                    "or (@wednesday = 1 and datepart(dw, @e) = 4) " +
                    "or (@thursday = 1 and datepart(dw, @e) = 5) " +
                    "or (@friday = 1 and datepart(dw, @e) = 6) " +
                    "or (@saturday = 1 and datepart(dw, @e) = 7)) and @checkid = 0 and @checkid2 = 0) " +
                    "set @flag = 1 " +
                    "if(@flag = 1) " +
                    "begin " +
                    "insert gbl_trainning_course_class_teacher_temphour (kieungay, kieuchu, kieuchu1, number, kieuchu2) " +
                    "values(@e, @timefrom, @timeto, @shiftid, @shiftidname) " +
                    "set @hour = @hour + convert(float, datediff(minute, @timefrom, @timeto))/60 " +
                    "end " +
                    "set @e = dateadd(day, 1, @e) " +
                    "end " +
                    "fetch next from li into  @id, " +
                    "@timefrom, @timeto, @monday, @tuesday, @wednesday, @thursday, @friday, @saturday, @sunday, @shiftid, @shiftidname " +
                    "end " +
                    "close li " +
                    "deallocate li " +
                    "update GBL_TRAINNING_COURSE_CLASS set FinishDate = (select top 1 kieungay from " +
                    "gbl_trainning_course_class_teacher_temphour order by kieungay desc ) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["d"])["ClassId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void DeleteReceiptDetail(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("TraLai").Pc("GiaMua").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("ChietKhauNgMoiGioi").Pc("PrintSLInfo").Pc("AddInfor").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            x.R(x._a.T[3], x._c);
            var r = x.EXO(new[] { x._sql, string.Format("update gcGobal_INCOM_Receipt set TongTien = " +
                                                         "isnull((Select Sum(ThanhTien) as ThanhTien from gcGobal_INCOM_Receipt_Detail " +
                                                         "where PhieuThuTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) " +
                                                         "OR (isPrgbUserDeleted<1))), 0) where id = {0} ",
                                                         ((Dictionary<string, object>)x._ip["c"])["PhieuThuTienMatId"] +"") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateProduct(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
            x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NhaCCId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("GiaMua").Pc("GiaBan").Pc("MoTa").Pc("KE").Pc("TANG_HANG").Pc("MoTaHangHoa").Pc("BranchId").Pc("MinValue").Pc("DepartmentId").Pc("NgayMua").Pc("GiaCu").Pc("NgayCapNhatGiaCu").Pc("NgayCapNhatGiaMoi").Pc("GroupTypeId").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("ImageInfo").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            var r = x.EXO(new[] { "declare @id int; ", x._sql.Replace("SELECT SCOPE_IDENTITY()", "SELECT @id = SCOPE_IDENTITY();"),
                                                        string.Format("update gcGobal_STOCK_gcProductList set Code =  convert(nvarchar, right(10000+ NhaCCId, 4)) + " +
                                                                            " convert(nvarchar, right(100000+ @id, 5)) where id = @id ") }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static string SumStockInput(string id)
        {
            var r = string.Format(";declare @hangNhapKho float, @khuyenMai float, @phuThu float; set @hangNhapKho = " +
                                  " isnull((Select Sum(ThanhTien) from gcGobal_STOCK_gcProduct_Input_Detail " +
                                  " where PhieuNhapKhoId = {0} and ((isPrgbUserDeleted IS NULL) " +
                                  " OR (isPrgbUserDeleted<1))), 0); set @khuyenMai = " +
                                  " isnull((Select case when KhuyenMai <= 100 then " +
                                  " round((@hangNhapKho * KhuyenMai)/100, -3) else KhuyenMai end " +
                                  " from gcGobal_STOCK_gcProduct_Input " +
                                  " where Id = {0} and ((isPrgbUserDeleted IS NULL) " +
                                  " OR (isPrgbUserDeleted<1))), 0); set @phuThu = " +
                                  " isnull((Select case when PhuThu <= 100 then " +
                                  " round((@hangNhapKho * PhuThu)/100, -3) else PhuThu end " +
                                  " from gcGobal_STOCK_gcProduct_Input " +
                                  " where Id = {0} and ((isPrgbUserDeleted IS NULL) " +
                                  " OR (isPrgbUserDeleted<1))), 0); update gcGobal_STOCK_gcProduct_Input " +
                                  " set TongTien = @hangNhapKho, PhaiTra = @hangNhapKho - " +
                                  " @khuyenMai + @phuThu where id = {0} ",
                id);
            return r;
        }

        public static void AddOrUpdateOutputThanhPham(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
		    x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("VatTuId").Pc("NhomId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("GiaMua").Pc("TongTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuXuatKhoId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuXuatKhoId"] + "");
            var r = x.EXO(new[] {
                        string.Format("declare @tpId int, @nhomId int, @loaiVatTuId int,  @dvtId int; {0}; ",
                            (x._ip["type"] + "") == "D" ? 
                                string.Format("select @tpId = vattuid, @nhomId = NhomId,@loaiVatTuId = LoaiVatTuId, @dvtId = DonViTinhId  from gcGobal_STOCK_gcProduct_Output_ThanhPham where id = {0} ", (((Dictionary<string, object>)x._ip["c"])["Id"] + ""))
                                    : string.Format(" set @tpId = {0}; set @nhomId = {1}; set @loaiVatTuId = {2}; set @dvtId = {3} ", 
                                    (((Dictionary<string, object>)x._ip["d"])["VatTuId"] + ""),
                                    (((Dictionary<string, object>)x._ip["d"])["NhomId"] + ""),
                                    (((Dictionary<string, object>)x._ip["d"])["LoaiVatTuId"] + ""),
                                    (((Dictionary<string, object>)x._ip["d"])["DonViTinhId"] + ""))), x._sql, SumStockOutput(p),
                        string.Format(" Exec XIKE_DinhLuongTP {0}, @tpId, @dvtId, @nhomId, @loaiVatTuId ", 
                            p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void AddOrUpdateOutput(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
		    x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("TypeId").Pc("BranchId").Pc("KhoXuatId").Pc("KhoNhapId").Pc("NhanvienId").Pc("KhachHangId").Pc("StatusId").Pc("MSHDId").Pc("TongTien").Pc("KhuyenMai").Pc("PhuThu").Pc("PhaiTra").Pc("KhachDua").Pc("TienThoi").Pc("NgayIn").Pc("NgayXuatHD").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (((Dictionary<string, object>)x._ip["c"])["Id"] + "");
            var r = x.EXO(new[]
            {
                x._sql, SumStockOutput(p)
            }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }
        public static void CheckKho(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
		    x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NhaCCId").Pc("GroupTypeId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("GiaMua").Pc("GiaBan").Pc("Type").Pc("MoTa").Pc("KE").Pc("TANG_HANG").Pc("MoTaHangHoa").Pc("BranchId").Pc("MinValue").Pc("DepartmentId").Pc("NgayMua").Pc("GiaCu").Pc("NgayCapNhatGiaCu").Pc("NgayCapNhatGiaMoi").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("ImageInfo").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            var se = x._ip.ContainsKey("se") ? x._ip["se"] + "" : " Name desc";
            var cl = x._ip.ContainsKey("cl") ? x._ip["cl"] + "" : "*";
            var f = x._ip.ContainsKey("f") ? x._ip["f"] + "" : "";
            var mr = x._ip.ContainsKey("mr") ? (int)x._ip["mr"] : 25;
            var si = x._ip.ContainsKey("si") ? (int)x._ip["si"] : 1;
            var dn = DateTime.Now;
            var dc = DateTime.Parse(dn.ToString("MM-dd-yyyy") + " 17:30");
            if(dn < dc)
                dc = DateTime.Parse(dn.ToString("MM-dd-yyyy") + " 05:30");
            if (dn < dc)
                dc = DateTime.Parse(dn.AddDays(-1).ToString("MM-dd-yyyy") + " 17:30");
            var p = (((Dictionary<string, object>)x._ip["c"])["Id"] + "");
            var s = string.Format("select Code from gcGobal_STOCK_List where Id = " +
                                  " (select top 1 KhoXuatId from gcGobal_STOCK_gcProduct_Output where Id = {0} )",
                p);
            var tb = zgc0HelperSecurity.GetDataTable(s, zgc0GlobalStr.getSqlStr());
            var r = x.EXO(new[]
            {
                string.Format(" Exec XIKE_CheckKho '{0}', '{1}', N'{2}', '{3}', {4}, {5}, " +
                    "'gcGobal_STOCK_gcStock_{6}_Today' ",
                    se, cl, f.Replace("'", "''"), dc.ToString("MM-dd-yyyy HH:mm"), mr, si, tb.Rows[0]["Code"])
            }, true).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }

        public static void AddOrUpdateOutputChiPhi(object obj, out object oo)
        {
            var x = new X(obj); X.Init(_sc);
		    x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("NCCId").Pc("TypeId").Pc("SoTien").Pc("TienTeId").Pc("TiGia").Pc("TongTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")
                ._CR()._CF().L();
            if ((x._ip["type"] + "") == "i")
                x.I(x._a.T[3], x._d);
            else if ((x._ip["type"] + "") == "u") x.U(x._a.T[3], x._d, x._c);
            else if ((x._ip["type"] + "") == "D") x.R(x._a.T[3], x._c);
            var p = (x._ip["type"] + "") == "D" ? (((Dictionary<string, object>)x._ip["c"])["PhieuXuatKhoId"] + "") : (((Dictionary<string, object>)x._ip["d"])["PhieuXuatKhoId"] + "");
            var r = x.EXO(new[] { x._sql, SumStockOutput(p) }, false).G();
            oo = new Rs() { Result = "OK", Records = r._d, TotalRecordCount = r._t };
        }

        public static string SumStockOutput(string id)
        {
            var r = string.Format(";declare @hangXuatKho float, @khuyenMai float, @phuThu float; set @hangXuatKho = " +
                                  " isnull((Select Sum(TongTien) from gcGobal_STOCK_gcProduct_Output_ThanhPham " +
                                  " where PhieuXuatKhoId = {0} and ((isPrgbUserDeleted IS NULL) " +
                                  " OR (isPrgbUserDeleted<1))), 0); set @khuyenMai = " +
                                  " isnull((Select case when KhuyenMai <= 100 then " +
                                  " round((@hangXuatKho * KhuyenMai)/100, -3) else KhuyenMai end " +
                                  " from gcGobal_STOCK_gcProduct_Output " +
                                  " where Id = {0} and ((isPrgbUserDeleted IS NULL) " +
                                  " OR (isPrgbUserDeleted<1))), 0); set @phuThu = " +
                                  " isnull((Select case when PhuThu <= 100 then " +
                                  " round((@hangXuatKho * PhuThu)/100, -3) else PhuThu end " +
                                  " from gcGobal_STOCK_gcProduct_Output " +
                                  " where Id = {0} and ((isPrgbUserDeleted IS NULL) " +
                                  " OR (isPrgbUserDeleted<1))), 0); update gcGobal_STOCK_gcProduct_Output " +
                                  " set TongTien = @hangXuatKho, PhaiTra = @hangXuatKho - " +
                                  " @khuyenMai + @phuThu, KhachDua = case when TypeId = 5 then @hangXuatKho - " +
                                  " @khuyenMai + @phuThu else 0 end where id = {0} ",
                id);
            return r;
        }
    }
}