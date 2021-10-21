// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.P10
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using zgcLibCore;

namespace zgcSpaceKernel.Core
{
   class P10
  {
    public static void ExcSQLAndPROC(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A();
      ArrayList arrayList = x._ip["c"] as ArrayList;
      string[] sql = new string[arrayList.Count];
      for (int index = 0; index < arrayList.Count; ++index)
        sql[index] = string.Concat(arrayList[index]);
      R r = x.EXO(sql, true).G();
      oo = (object) new Rs()
      {
        Status = (r._s == 1 ? "OK" : "FAIL"),
        Records = r._d
      };
    }

    public static void AddOrUpdateInputDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("VatTuId").Pc("NhomId").Pc("TypeId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string id = string.Concat(x._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuNhapKhoId"]) : string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuNhapKhoId"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        P10.SumStockInput(id)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateInputTaiVuon(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GhiChu").Pc("NCCId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string id = string.Concat(x._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuNhapKhoId"]) : string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuNhapKhoId"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        P10.SumStockInput(id)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateInputChiPhi(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuNhapKhoId").Pc("TypeId").Pc("ThanhTien").Pc("NCCId").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string id = string.Concat(x._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuNhapKhoId"]) : string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuNhapKhoId"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        P10.SumStockInput(id)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateOutputDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonViTinhId").Pc("DonGia").Pc("ThanhTien").Pc("GiaMua").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string str = string.Concat(x._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuXuatKhoId"]) : string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuXuatKhoId"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format(";declare @thanhTien float; set @thanhTien = isnull((Select Sum(ThanhTien) from gcGobal_STOCK_gcProduct_Output_Detail where PhieuXuatKhoId = {0} AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))), 0); update gcGobal_STOCK_gcProduct_Output set TongTien = @thanhTien, PhaiTra = @thanhTien - case when isnull(KhuyenMai, 0) > 100 then KhuyenMai else (@thanhTien * isnull(KhuyenMai, 0))/100 end + case when isnull(TienThue, 0) > 100 then TienThue else (@thanhTien * isnull(TienThue, 0))/100 end, NoLai = @thanhTien - case when isnull(KhuyenMai, 0) > 100 then KhuyenMai else (@thanhTien * isnull(KhuyenMai, 0))/100 end + case when isnull(TienThue, 0) > 100 then TienThue else (@thanhTien * isnull(TienThue, 0))/100 end - isnull(DaTra, 0) where id = {0} ", (object) str)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdatePaymentDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuChiTienMatId").Pc("VuViecId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("VAT").Pc("DienGiai").Pc("NoidungChiTien").Pc("Note").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else
        x.U(x._a.T[3], x._d, x._c);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format("update gcGobal_INCOM_Payment set TongTien = (Select Sum(ThanhTien) as ThanhTien from gcGobal_INCOM_Payment_Detail where PhieuChiTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))) where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuChiTienMatId"]))
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateReceiptDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("TraLai").Pc("GiaMua").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("ChietKhauNgMoiGioi").Pc("PrintSLInfo").Pc("AddInfor").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string str = string.Concat(x._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuThuTienMatId"]) : string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuThuTienMatId"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format(";declare @thanhTien float; set @thanhTien = isnull((Select Sum(ThanhTien) from gcGobal_INCOM_Receipt_Detail where PhieuThuTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))), 0); update gcGobal_INCOM_Receipt set TongTien = @thanhTien, ThucThu =  @thanhTien - case when isnull(DiscountCust, 0) > 100 then DiscountCust else (@thanhTien * isnull(DiscountCust, 0))/100 end + case when isnull(PhuThu, 0) > 100 then PhuThu else (@thanhTien * isnull(PhuThu, 0))/100 end, NoLai = @thanhTien - case when isnull(DiscountCust, 0) > 100 then DiscountCust else (@thanhTien * isnull(DiscountCust, 0))/100 end + case when isnull(PhuThu, 0) > 100 then PhuThu else (@thanhTien * isnull(PhuThu, 0))/100 end - isnull(Space01, 0) where id = {0} ", (object) str)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateThanhLyDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("NhapTaiSanId").Pc("TSCDId").Pc("DonViTinhId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else
        x.U(x._a.T[3], x._d, x._c);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format("update gcGobal_TSCD_THANHLY set GiaTriThanhLy = (Select Sum(ThanhTien) as ThanhTien from gcGobal_TSCD_THANHLY_Detail where NhapTaiSanId = {0} AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))) where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["NhapTaiSanId"]))
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateNhapDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("NhapTaiSanId").Pc("TSCDId").Pc("DonViTinhId").Pc("SoLuong").Pc("DonGia").Pc("ThanhTien").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else
        x.U(x._a.T[3], x._d, x._c);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format("update gcGobal_TSCD_NhapTaiSan set GiaTaiSanBanDau = (Select Sum(ThanhTien) as ThanhTien from gcGobal_TSCD_NhapTaiSan_Detail where NhapTaiSanId = {0} AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))) where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["NhapTaiSanId"]))
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateScheduleAdvanceDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("ScheduleAdvanceId").Pc("ScheduleId").Pc("Name").Pc("Note").Pc("Keep1").Pc("Keep2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else
        x.U(x._a.T[3], x._d, x._c);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format("declare @names nvarchar(max); select @names = coalesce(@names + ', ', '') + isnull(Name, '') from GBL_TRAINNING_SCHEDULE_ADVANCE_DETAIL where scheduleAdvanceId = {0}; update GBL_TRAINNING_SCHEDULE_ADVANCE set Name = @names where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["ScheduleAdvanceId"]))
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AMA_XIKE_REPORT_CLASS_FULL(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      R r = x.R().A().Pc("Id").Pc("CourseId").Pc("StatusId").Pc("ScheduleId").Pc("StartDate").Pc("Name").Pc("TotalTime").Pc("StartRegisterDate").Pc("FinishDate").Pc("BranchId").Pc("TypeId").Pc("OldClassId").Pc("LocationId").Pc("PricePerStudent").Pc("MinimumStudent").Pc("CashCollection").Pc("MaximumStudent").Pc("IsPromotion").Pc("Speaking").Pc("Listening").Pc("Reading").Pc("Grammar").Pc("Writing").Pc("Oral").Pc("Comment").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L().S().EX().G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static string GetRandomCode(Random r, int length)
    {
      char[] chArray = new char[length];
      string str = "ASDFGHJKLQWERTYUIOPZXCVBNM1234567890";
      for (int index = 0; index < length; ++index)
        chArray[index] = str[r.Next(str.Length)];
      return new string(chArray);
    }

    public static void CreateCodeDiscount(object obj, out object oo, string ModelDb)
    {
      object[] objArray1 = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray1[0], ModelDb);
      x.R().A().Pc("Id");
      ArrayList arrayList = x._ip["d"] as ArrayList;
      object[] objArray2 = new object[arrayList.Count];
      string[] sql = new string[arrayList.Count];
      DateTime now = DateTime.Now;
      for (int index = 0; index < arrayList.Count; ++index)
      {
        string str = "";
        while (string.IsNullOrEmpty(str))
        {
          str = P10.GetRandomCode(new Random(), 6);
          if (zgcHelper.GetDataSet(string.Format("select Id from GBL_TRAINNING_COUPON where code like '%{0}' and keep01 = {1}", (object) str, (object) now.Year), zgcHelper.getSqlStr()).Tables[0].Rows.Count > 0)
            str = "";
        }
        (arrayList[index] as Dictionary<string, object>).Add("Code", (object) string.Format("{0:0000}{1}", (object) index, (object) str));
        (arrayList[index] as Dictionary<string, object>).Add("Keep01", (object) now.Year);
        int num = 0;
        objArray2[index] = (object) new List<C>();
        foreach (KeyValuePair<string, object> keyValuePair in arrayList[index] as Dictionary<string, object>)
        {
          if (string.IsNullOrEmpty(x.L(x._fs, keyValuePair.Key, 0)))
          {
            oo = (object) new
            {
              Status = 0,
              Records = _E.E10007.G()
            };
            return;
          }
          ((List<C>) objArray2[index]).Add(new C()
          {
            T = new string[3]
            {
              keyValuePair.Key,
              x.L(x._fs, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
            }
          });
          ++num;
        }
        x.I(x._a.T[3], (List<C>) objArray2[index]);
        sql[index] = x._sql;
      }
      R r = x.EXO(sql, false).G();
      oo = (object) new Rs()
      {
        Status = (r._s == 1 ? "OK" : "FAIL"),
        Records = r._d
      };
    }

    public static void AddOrUpdateReceipt(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("MSHDId").Pc("NgayLap").Pc("BranchId").Pc("NhanVienId").Pc("KhachHangId").Pc("DateOfPay").Pc("StudentId").Pc("BankAccountId").Pc("TypePaymentId").Pc("TongTien").Pc("ThucThu").Pc("NoLai").Pc("DienGiai").Pc("VAT").Pc("PhuThu").Pc("NgayHen").Pc("isFinished").Pc("DiscountCust").Pc("StatusId").Pc("isPrinted").Pc("BankReceiptId").Pc("CardPaymentId").Pc("OrderId").Pc("ClassId").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else
        x.U(x._a.T[3], x._d, x._c);
      R r;
      if (zgcHelper.GetDataSet(string.Format("select Id from gcGobal_INCOM_Receipt where id = {0} and (code in select code from gbl_trainning_coupon where fromdate <= '{1}' and todate >= '{1}') ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["Id"]), (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["NgayLap"])), zgcHelper.getSqlStr()).Tables[0].Rows.Count == 0)
        r = x.EXO(new string[2]
        {
          x._sql,
          string.Format("update gbl_trainning_coupon set amount = amount + 1 where code = '{0}' and  fromdate <= '{1}' and todate >= '{1}' ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["Keep01"]), (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["NgayLap"]))
        }, false).G();
      else
        r = x.EXO(new string[1]{ x._sql }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void UpdateMarks(object obj, out object oo, string ModelDb)
    {
      object[] objArray1 = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray1[0], ModelDb);
      x.R().A().Pc("Id");
      ArrayList arrayList1 = x._ip["d"] as ArrayList;
      ArrayList arrayList2 = x._ip["c"] as ArrayList;
      object[] objArray2 = new object[arrayList1.Count];
      object[] objArray3 = new object[arrayList1.Count];
      string[] sql = new string[arrayList1.Count];
      for (int index = 0; index < arrayList1.Count; ++index)
      {
        objArray3[index] = (object) new List<C>();
        foreach (KeyValuePair<string, object> keyValuePair in arrayList2[index] as Dictionary<string, object>)
          ((List<C>) objArray3[index]).Add(new C()
          {
            T = new string[3]
            {
              keyValuePair.Key,
              x.L(x._fs, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
            }
          });
        objArray2[index] = (object) new List<C>();
        foreach (KeyValuePair<string, object> keyValuePair in arrayList1[index] as Dictionary<string, object>)
        {
          if (string.IsNullOrEmpty(x.L(x._fs, keyValuePair.Key, 0)))
          {
            oo = (object) new
            {
              Status = 0,
              Records = _E.E10007.G()
            };
            return;
          }
          ((List<C>) objArray2[index]).Add(new C()
          {
            T = new string[3]
            {
              keyValuePair.Key,
              x.L(x._fs, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
            }
          });
        }
        x.U(x._a.T[3], (List<C>) objArray2[index], (List<C>) objArray3[index]);
        sql[index] = x._sql;
      }
      R r = x.EXO(sql, false).G();
      oo = (object) new Rs()
      {
        Status = (r._s == 1 ? "OK" : "FAIL"),
        Records = r._d
      };
    }

    public static void CreateAbsents(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("ClassId").Pc("Date")._CR()._CF().L();
      List<string> stringList = new List<string>();
      Dictionary<string, object> dictionary = (Dictionary<string, object>) x._ip["c"];
      zgcHelper.ExecuteNonQuery(string.Format("delete from GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT where classId = {0} and Date = convert(datetime, '{1}') and studentid not in (select studentid from GBL_TRAINNING_COURSE_CLASS_STUDENT where classid = {0} and studentid is not null) ", (object) string.Concat(dictionary["ClassId"]), (object) string.Concat(dictionary["Date"])), zgcHelper.getSqlStr());

            DataSet dts = zgcHelper.GetDataSet(string.Format("select Id, StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT where classId = {0} and Date = convert(datetime, '{1}')", 
                (object)string.Concat(dictionary["ClassId"]), (object)string.Concat(dictionary["Date"]))
                + ";" + string.Format("select distinct StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT where classId = {0} and studentid is not null", (object)string.Concat(dictionary["ClassId"]))
                + ";" + string.Format("select Id from GBL_TRAINNING_COURSE_CLASS_ABSENT where classId = {0} and Date = convert(datetime, '{1}')", (object)string.Concat(dictionary["ClassId"]), (object)string.Concat(dictionary["Date"])), 
                zgcHelper.getSqlStr());

            DataTable dataTable1 = dts.Tables[0];
            DataTable dataTable2 = dts.Tables[1];
            DataTable dataTable3 = dts.Tables[2];

            //DataTable dataTable1 = zgcHelper.GetDataSet(string.Format("select Id, StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT where classId = {0} and Date = convert(datetime, '{1}')", (object) string.Concat(dictionary["ClassId"]), (object) string.Concat(dictionary["Date"])), zgcHelper.getSqlStr());
            //DataTable dataTable2 = zgcHelper.GetDataSet(string.Format("select distinct StudentId from GBL_TRAINNING_COURSE_CLASS_STUDENT where classId = {0} and studentid is not null", (object) string.Concat(dictionary["ClassId"])), zgcHelper.getSqlStr());
            //DataTable dataTable3 = zgcHelper.GetDataSet(string.Format("select Id from GBL_TRAINNING_COURSE_CLASS_ABSENT where classId = {0} and Date = convert(datetime, '{1}')", (object) string.Concat(dictionary["ClassId"]), (object) string.Concat(dictionary["Date"])), zgcHelper.getSqlStr());
            if (dataTable3.Rows.Count > 0)
        stringList.Add(string.Format("declare @absentId int; set @absentId = {0};", (object) string.Concat(dataTable3.Rows[0]["Id"])));
      else
        stringList.Add(string.Format("declare @absentId int; insert into GBL_TRAINNING_COURSE_CLASS_ABSENT (ClassId, date) values ({0}, '{1}'); select @absentId = scope_identity(); ", (object) string.Concat(dictionary["ClassId"]), (object) string.Concat(dictionary["Date"])));
      if (dataTable2.Rows.Count == 0)
      {
        oo = (object) new Rs()
        {
          Status = "OK",
          Records = (object) "",
          TotalRecordCount = 0
        };
      }
      else
      {
        for (int index1 = 0; index1 < dataTable2.Rows.Count; ++index1)
        {
          bool flag = true;
          for (int index2 = 0; index2 < dataTable1.Rows.Count; ++index2)
          {
            if ((int) dataTable2.Rows[index1]["StudentId"] == (int) dataTable1.Rows[index2]["StudentId"])
            {
              flag = false;
              break;
            }
          }
          if (flag)
            stringList.Add(string.Format("insert into GBL_TRAINNING_COURSE_CLASS_STUDENT_ABSENT (ClassId, Date, StudentId, AbsentId) values ({0}, '{1}', {2}, @absentId)", (object) string.Concat(dictionary["ClassId"]), (object) string.Concat(dictionary["Date"]), (object) string.Concat(dataTable2.Rows[index1]["StudentId"])));
        }
        R r = x.EXO(stringList.ToArray(), false).G();
        oo = (object) new Rs()
        {
          Status = "OK",
          Records = r._d,
          TotalRecordCount = r._t
        };
      }
    }

    public static void UpdateAbsents(object obj, out object oo, string ModelDb)
    {
      object[] objArray1 = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray1[0], ModelDb);
      x.R().A().Pc("Id");
      ArrayList arrayList1 = x._ip["d"] as ArrayList;
      ArrayList arrayList2 = x._ip["c"] as ArrayList;
      Dictionary<string, object> dictionary = (Dictionary<string, object>) x._ip["d2"];
      object[] objArray2 = new object[arrayList1.Count];
      object[] objArray3 = new object[arrayList1.Count];
      string[] sql = new string[arrayList1.Count + 1];
      for (int index = 0; index < arrayList1.Count; ++index)
      {
        objArray3[index] = (object) new List<C>();
        foreach (KeyValuePair<string, object> keyValuePair in arrayList2[index] as Dictionary<string, object>)
          ((List<C>) objArray3[index]).Add(new C()
          {
            T = new string[3]
            {
              keyValuePair.Key,
              x.L(x._fs, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
            }
          });
        objArray2[index] = (object) new List<C>();
        foreach (KeyValuePair<string, object> keyValuePair in arrayList1[index] as Dictionary<string, object>)
        {
          if (string.IsNullOrEmpty(x.L(x._fs, keyValuePair.Key, 0)))
          {
            oo = (object) new
            {
              Status = 0,
              Records = _E.E10007.G()
            };
            return;
          }
          ((List<C>) objArray2[index]).Add(new C()
          {
            T = new string[3]
            {
              keyValuePair.Key,
              x.L(x._fs, keyValuePair.Key, 0),
              string.Concat(keyValuePair.Value)
            }
          });
        }
        x.U(x._a.T[3], (List<C>) objArray2[index], (List<C>) objArray3[index]);
        sql[index] = x._sql;
      }
      sql[arrayList1.Count] = string.Format("update GBL_TRAINNING_COURSE_CLASS_ABSENT set Name = N'{0}', Comment = N'{1}', Note = N'{2}', AccountCharge = {3}, TeacherForgetsTracking = {4} where id = {5}", (object) string.Concat(dictionary["Name"]), (object) string.Concat(dictionary["Comment"]), (object) string.Concat(dictionary["Note"]), (object) string.Concat(dictionary["AccountCharge"]), (object) string.Concat(dictionary["TeacherForgetsTracking"]), (object) string.Concat(dictionary["Id"]));
      R r = x.EXO(sql, false).G();
      oo = (object) new Rs()
      {
        Status = (r._s == 1 ? "OK" : "FAIL"),
        Records = r._d
      };
    }

    public static void GetProcedure(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A();
      ArrayList arrayList = x._ip["c"] as ArrayList;
      string[] sql = new string[arrayList.Count];
      for (int index = 0; index < arrayList.Count; ++index)
        sql[index] = string.Concat(arrayList[index]);
      R r = x.EXO(sql, true).G();
      oo = (object) new Rs()
      {
        Status = (r._s == 1 ? "OK" : "FAIL"),
        Records = r._d
      };
    }

    public static void AddOrUpdateCancelDate(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("ClassId").Pc("TypeId").Pc("Name").Pc("Reason").Pc("WillCompensate").Pc("Note").Pc("Description").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else
        x.U(x._a.T[3], x._d, x._c);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format("declare @t datetime, @clid int, @hour float, @classid int, @teacherid int, @flag bit, @timefrom nvarchar(5), @timeto nvarchar(5), @startdate datetime, @enddate datetime, @monday bit, @tuesday bit, @wednesday bit, @thursday bit, @friday bit, @saturday bit, @sunday bit, @classidname nvarchar(255), @teacheridname nvarchar(255), @id int, @checkid int, @totalTime float, @checkid2 int, @shid int, @shiftid int, @shiftidname nvarchar(max), @fare float, @e datetime, @lesson nvarchar(max), @teacherComment nvarchar(max), @note nvarchar(max) delete from gbl_trainning_course_class_teacher_temphour select @t = StartDate, @shid = ScheduleId, @totalTime = TotalTime from zgcl_GBL_TRAINNING_COURSE_CLASS00 where id = {0} declare li cursor for select id, timefrom, timeto,  monday, tuesday, wednesday, thursday, friday, saturday, sunday, shiftid, shiftidname from  zgcl_GBL_TRAINNING_SCHEDULE00_FULL where    id in (select scheduleid from zgcl_GBL_TRAINNING_SCHEDULE_ADVANCE_DETAIL01 where (scheduleAdvanceid = @shid)) order by monday desc, tuesday desc, wednesday desc, thursday desc, friday desc, saturday desc, sunday desc open li fetch next from li into @id, @timefrom, @timeto, @monday, @tuesday, @wednesday, @thursday, @friday, @saturday, @sunday, @shiftid, @shiftidname while @@fetch_status = 0 begin  set @hour = 0 set @e = @t  while @hour < @totalTime begin set @flag = 0 set @checkid = 0 set @checkid2 = 0 select @checkid = id from zgcl_GBL_TRAINNING_DAYOFF00 where FromDate <= @e and ToDate >= @e select @checkid2 = id from zgcl_GBL_TRAINNING_COURSE_CLASS_CANCEL00 where classid = {0}  and Name = @e if(((@sunday = 1 and datepart(dw, @e) = 1) or (@monday = 1 and datepart(dw, @e) = 2) or (@tuesday = 1 and datepart(dw, @e) = 3) or (@wednesday = 1 and datepart(dw, @e) = 4) or (@thursday = 1 and datepart(dw, @e) = 5) or (@friday = 1 and datepart(dw, @e) = 6) or (@saturday = 1 and datepart(dw, @e) = 7)) and @checkid = 0 and @checkid2 = 0) set @flag = 1 if(@flag = 1) begin insert gbl_trainning_course_class_teacher_temphour (kieungay, kieuchu, kieuchu1, number, kieuchu2) values(@e, @timefrom, @timeto, @shiftid, @shiftidname) set @hour = @hour + convert(float, datediff(minute, @timefrom, @timeto))/60 end set @e = dateadd(day, 1, @e) end fetch next from li into  @id, @timefrom, @timeto, @monday, @tuesday, @wednesday, @thursday, @friday, @saturday, @sunday, @shiftid, @shiftidname end close li deallocate li update GBL_TRAINNING_COURSE_CLASS set FinishDate = (select top 1 kieungay from gbl_trainning_course_class_teacher_temphour order by kieungay desc ) where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x._ip["d"])["ClassId"]))
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void DeleteReceiptDetail(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuThuTienMatId").Pc("KhoId").Pc("VatTuId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("DonViTinhId").Pc("ThanhTien").Pc("NhanVienBanSPId").Pc("ChietKhauNV").Pc("ChietKhauNVTV").Pc("TraLai").Pc("GiaMua").Pc("KhuyenMaiBSP").Pc("PhuThu").Pc("ChietKhauNgMoiGioi").Pc("PrintSLInfo").Pc("AddInfor").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      x.R(x._a.T[3], x._c);
      R r = x.EXO(new string[2]
      {
        x._sql,
        string.Format("update gcGobal_INCOM_Receipt set TongTien = isnull((Select Sum(ThanhTien) as ThanhTien from gcGobal_INCOM_Receipt_Detail where PhieuThuTienMatId = {0} AND ((isPrgbUserDeleted IS NULL) OR (isPrgbUserDeleted<1))), 0) where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuThuTienMatId"]))
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateProduct(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NhaCCId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("GiaMua").Pc("GiaBan").Pc("MoTa").Pc("KE").Pc("TANG_HANG").Pc("MoTaHangHoa").Pc("BranchId").Pc("MinValue").Pc("DepartmentId").Pc("NgayMua").Pc("GiaCu").Pc("NgayCapNhatGiaCu").Pc("NgayCapNhatGiaMoi").Pc("GroupTypeId").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("ImageInfo").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("Keep01").Pc("Keep02").Pc("Keep03").Pc("Keep04").Pc("Space01").Pc("Space02").Pc("Space03").Pc("SpaceId").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      R r = x.EXO(new string[3]
      {
        "declare @id int; ",
        x._sql.Replace("SELECT SCOPE_IDENTITY()", "SELECT @id = SCOPE_IDENTITY();"),
        string.Format("update gcGobal_STOCK_gcProductList set Code =  convert(nvarchar, right(10000+ NhaCCId, 4)) +  convert(nvarchar, right(100000+ @id, 5)) where id = @id ")
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static string SumStockInput(string id) => string.Format(";declare @hangNhapKho float, @khuyenMai float, @phuThu float; set @hangNhapKho =  isnull((Select Sum(ThanhTien) from gcGobal_STOCK_gcProduct_Input_Detail  where PhieuNhapKhoId = {0} and ((isPrgbUserDeleted IS NULL)  OR (isPrgbUserDeleted<1))), 0); set @khuyenMai =  isnull((Select case when KhuyenMai <= 100 then  round((@hangNhapKho * KhuyenMai)/100, -3) else KhuyenMai end  from gcGobal_STOCK_gcProduct_Input  where Id = {0} and ((isPrgbUserDeleted IS NULL)  OR (isPrgbUserDeleted<1))), 0); set @phuThu =  isnull((Select case when PhuThu <= 100 then  round((@hangNhapKho * PhuThu)/100, -3) else PhuThu end  from gcGobal_STOCK_gcProduct_Input  where Id = {0} and ((isPrgbUserDeleted IS NULL)  OR (isPrgbUserDeleted<1))), 0); update gcGobal_STOCK_gcProduct_Input  set TongTien = @hangNhapKho, PhaiTra = @hangNhapKho -  @khuyenMai + @phuThu where id = {0} ", (object) id);

    public static void AddOrUpdateOutputThanhPham(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x1 = new X(obj);
      x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x1.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("VatTuId").Pc("NhomId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("SoLuong").Pc("SoConSoCai").Pc("DonGia").Pc("GiaMua").Pc("TongTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x1._ip["type"]) == "i")
        x1.I(x1._a.T[3], x1._d);
      else if (string.Concat(x1._ip["type"]) == "u")
        x1.U(x1._a.T[3], x1._d, x1._c);
      else if (string.Concat(x1._ip["type"]) == "D")
        x1.R(x1._a.T[3], x1._c);
      string id = string.Concat(x1._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x1._ip["c"])["PhieuXuatKhoId"]) : string.Concat(((Dictionary<string, object>) x1._ip["d"])["PhieuXuatKhoId"]);
      X x2 = x1;
      string[] sql = new string[4];
      string str;
      if (!(string.Concat(x1._ip["type"]) == "D"))
        str = string.Format(" set @tpId = {0}; set @nhomId = {1}; set @loaiVatTuId = {2}; set @dvtId = {3} ", (object) string.Concat(((Dictionary<string, object>) x1._ip["d"])["VatTuId"]), (object) string.Concat(((Dictionary<string, object>) x1._ip["d"])["NhomId"]), (object) string.Concat(((Dictionary<string, object>) x1._ip["d"])["LoaiVatTuId"]), (object) string.Concat(((Dictionary<string, object>) x1._ip["d"])["DonViTinhId"]));
      else
        str = string.Format("select @tpId = vattuid, @nhomId = NhomId,@loaiVatTuId = LoaiVatTuId, @dvtId = DonViTinhId  from gcGobal_STOCK_gcProduct_Output_ThanhPham where id = {0} ", (object) string.Concat(((Dictionary<string, object>) x1._ip["c"])["Id"]));
      sql[0] = string.Format("declare @tpId int, @nhomId int, @loaiVatTuId int,  @dvtId int; {0}; ", (object) str);
      sql[1] = x1._sql;
      sql[2] = P10.SumStockOutput(id);
      sql[3] = string.Format(" Exec XIKE_DinhLuongTP {0}, @tpId, @dvtId, @nhomId, @loaiVatTuId ", (object) id);
      R r = x2.EXO(sql, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void AddOrUpdateOutput(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("MaCT").Pc("SoCT").Pc("NgayLap").Pc("TypeId").Pc("BranchId").Pc("KhoXuatId").Pc("KhoNhapId").Pc("NhanvienId").Pc("KhachHangId").Pc("StatusId").Pc("MSHDId").Pc("TongTien").Pc("KhuyenMai").Pc("PhuThu").Pc("PhaiTra").Pc("KhachDua").Pc("TienThoi").Pc("NgayIn").Pc("NgayXuatHD").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string id = string.Concat(((Dictionary<string, object>) x._ip["c"])["Id"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        P10.SumStockOutput(id)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static void CheckKho(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("Code").Pc("Name").Pc("NhaCCId").Pc("GroupTypeId").Pc("LoaiVatTuId").Pc("DonViTinhId").Pc("GiaMua").Pc("GiaBan").Pc("Type").Pc("MoTa").Pc("KE").Pc("TANG_HANG").Pc("MoTaHangHoa").Pc("BranchId").Pc("MinValue").Pc("DepartmentId").Pc("NgayMua").Pc("GiaCu").Pc("NgayCapNhatGiaCu").Pc("NgayCapNhatGiaMoi").Pc("ChietKhauChoNguoiMoiGioi").Pc("ChietKhauChoNV").Pc("ChietKhauGiamGia").Pc("ForeignRate").Pc("ImageInfo").Pc("WebTechDescription").Pc("WebLuotTruyCap").Pc("WebSLMuaHang").Pc("WebSLDatHang").Pc("PhanTramTieuHao").Pc("TenNhaSanXuat").Pc("QuocGiaId").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      string str1 = x._ip.ContainsKey("se") ? string.Concat(x._ip["se"]) : " Name desc";
      string str2 = x._ip.ContainsKey("cl") ? string.Concat(x._ip["cl"]) : "*";
      string str3 = x._ip.ContainsKey("f") ? string.Concat(x._ip["f"]) : "";
      int num1 = x._ip.ContainsKey("mr") ? (int) x._ip["mr"] : 25;
      int num2 = x._ip.ContainsKey("si") ? (int) x._ip["si"] : 1;
      DateTime now = DateTime.Now;
      DateTime dateTime = DateTime.Parse(now.ToString("MM-dd-yyyy") + " 17:30");
      if (now < dateTime)
        dateTime = DateTime.Parse(now.ToString("MM-dd-yyyy") + " 05:30");
      if (now < dateTime)
        DateTime.Parse(now.AddDays(-1.0).ToString("MM-dd-yyyy") + " 17:30");
      zgcHelper.GetDataSet(string.Format("select Code from gcGobal_STOCK_List where Id =  (select top 1 KhoXuatId from gcGobal_STOCK_gcProduct_Output where Id = {0} )", (object) string.Concat(((Dictionary<string, object>) x._ip["c"])["Id"])), zgcHelper.getSqlStr());
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = (object) null,
        TotalRecordCount = 0
      };
    }

    public static void AddOrUpdateOutputChiPhi(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      X x = new X(obj);
      x.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      x.R().A().Pc("Id").Pc("PhieuXuatKhoId").Pc("NCCId").Pc("TypeId").Pc("SoTien").Pc("TienTeId").Pc("TiGia").Pc("TongTien").Pc("GhiChu").Pc("KieuChu").Pc("KieuChu1").Pc("KieuChu2").Pc("KieuSo").Pc("KieuSo1").Pc("KieuSo2").Pc("KieuTien").Pc("KieuTien1").Pc("KieuTien2").Pc("KieuNgay").Pc("KieuNgay1").Pc("KieuNgay2").Pc("KieuBit").Pc("KieuBit1").Pc("KieuBit2").Pc("isPrgAccountId").Pc("isPrgInUse").Pc("isPrgCreateDate").Pc("isPrgWaitingConfirmStatus").Pc("isPrgbAdminDeleted").Pc("isPrgbUserDeleted").Pc("isPrgbShow").Pc("isPrgOrdered").Pc("isPrgVNKoDau").Pc("isPrgSmField").Pc("isPrgPartComp").Pc("isPrgEncriptData").Pc("isPrgDescriptData").Pc("isPrgAccountUpdateId")._CR()._CF().L();
      if (string.Concat(x._ip["type"]) == "i")
        x.I(x._a.T[3], x._d);
      else if (string.Concat(x._ip["type"]) == "u")
        x.U(x._a.T[3], x._d, x._c);
      else if (string.Concat(x._ip["type"]) == "D")
        x.R(x._a.T[3], x._c);
      string id = string.Concat(x._ip["type"]) == "D" ? string.Concat(((Dictionary<string, object>) x._ip["c"])["PhieuXuatKhoId"]) : string.Concat(((Dictionary<string, object>) x._ip["d"])["PhieuXuatKhoId"]);
      R r = x.EXO(new string[2]
      {
        x._sql,
        P10.SumStockOutput(id)
      }, false).G();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = r._d,
        TotalRecordCount = r._t
      };
    }

    public static string SumStockOutput(string id) => string.Format(";declare @hangXuatKho float, @khuyenMai float, @phuThu float; set @hangXuatKho =  isnull((Select Sum(TongTien) from gcGobal_STOCK_gcProduct_Output_ThanhPham  where PhieuXuatKhoId = {0} and ((isPrgbUserDeleted IS NULL)  OR (isPrgbUserDeleted<1))), 0); set @khuyenMai =  isnull((Select case when KhuyenMai <= 100 then  round((@hangXuatKho * KhuyenMai)/100, -3) else KhuyenMai end  from gcGobal_STOCK_gcProduct_Output  where Id = {0} and ((isPrgbUserDeleted IS NULL)  OR (isPrgbUserDeleted<1))), 0); set @phuThu =  isnull((Select case when PhuThu <= 100 then  round((@hangXuatKho * PhuThu)/100, -3) else PhuThu end  from gcGobal_STOCK_gcProduct_Output  where Id = {0} and ((isPrgbUserDeleted IS NULL)  OR (isPrgbUserDeleted<1))), 0); update gcGobal_STOCK_gcProduct_Output  set TongTien = @hangXuatKho, PhaiTra = @hangXuatKho -  @khuyenMai + @phuThu, KhachDua = case when TypeId = 5 then @hangXuatKho -  @khuyenMai + @phuThu else 0 end where id = {0} ", (object) id);

    public static void ChangePassword(object obj, out object oo, string ModelDb)
    {
      Rs rs = new Rs()
      {
        Status = "OK",
        Records = (object) "Bạn đổi mật khẩu không thành công"
      };
      Dictionary<string, object> dictionary1 = obj as Dictionary<string, object>;
      Dictionary<string, object> dictionary2 = dictionary1.ContainsKey("d") ? dictionary1["d"] as Dictionary<string, object> : (Dictionary<string, object>) null;
      if (dictionary2 != null && dictionary2.ContainsKey("AccountId") && dictionary2.ContainsKey("PasswordOld") && dictionary2.ContainsKey("PasswordNew"))
      {
        int? nullable = dictionary2["AccountId"] as int?;
        string a = dictionary2["PasswordOld"] as string;
        string str = dictionary2["PasswordNew"] as string;
        DataTable dataTable = zgcHelper.GetDataSet(string.Format("SELECT * FROM gcGobal_ACCOUNT_Account WHERE Id = {0}", (object) nullable), zgcHelper.getSqlStr()).Tables[0];
        if (dataTable.Rows.Count > 0)
        {
          string b = zgcHelper.Decrypt(dataTable.Rows[0]["Password"].ToString());
          if (string.Equals(a, b))
          {
            zgcHelper.ExecuteNonQuery(string.Format("UPDATE gcGobal_ACCOUNT_Account SET Password = N'{0}' WHERE Id = {1}", (object) zgcHelper.Encript(str), (object) nullable), zgcHelper.getSqlStr());
            rs.Records = (object) "Bạn đã thay đổi mật khẩu thành công";
          }
          else
            rs.Records = (object) "Bạn đã nhập sai mật khẩu cũ";
        }
      }
      oo = (object) rs;
    }
  }
}
