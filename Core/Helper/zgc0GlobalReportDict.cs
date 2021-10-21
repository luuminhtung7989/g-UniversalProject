// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgc0GlobalReportDict
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;

namespace zgcLibCore
{
  public class zgc0GlobalReportDict
  {
    public const string zgcLogo = "zgcLogo";
    public const string zgcCompanyName = "zgcCompanyName";
    public const string zgcCompanyPhone = "zgcCompanyPhone";
    public const string zgcCompanyMobile = "zgcCompanyMobile";
    public const string zgcCompanyFax = "zgcCompanyFax";
    public const string zgcCompanyAddress = "zgcCompanyAddress";
    public const string zgcCompanyMail = "zgcCompanyMail";
    public const string zgcBranchName = "zgcBranchName";
    public const string zgcBranchPhone = "zgcBranchPhone";
    public const string zgcBranchMobile = "zgcBranchMobile";
    public const string zgcBranchFax = "zgcBranchFax";
    public const string zgcBranchAddress = "zgcBranchAddress";
    public const string zgcBillNo = "zgcBillNo";
    public const string zgcBillCode = "zgcBillCode";
    public const string zgcBillDate = "zgcBillDate";
    public const string zgcHeadAccountingName = "zgcHeadAccountingName";
    public const string zgcAccountingName = "zgcAccountingName";
    public const string zgcManagerF1Name = "zgcManagerF1Name";
    public const string zgcManagerName = "zgcManagerName";
    public const string zgcKeeperName = "zgcKeeperName";
    public const string zgcHeadAccountingForm = "zgcHeadAccountingForm";
    public const string zgcAccountingForm = "zgcAccountingForm";
    public const string zgcManagerForm = "zgcManagerForm";
    public const string zgcKeeperForm = "zgcKeeperForm";
    public const string zgcReportName = "zgcReportName";
    public const string zgcCreatePersonForm = "zgcCreatePersonForm";
    public const string zgcChargePersonForm = "zgcChargePersonForm";
    public Dictionary<string, object> objDict;
    public Dictionary<string, string> strDict;

    public zgc0GlobalReportDict()
    {
      this.objDict = new Dictionary<string, object>();
      this.strDict = new Dictionary<string, string>();
      this.setUpGobalString();
    }

    public void LoadFromDBString()
    {
    }

    public void setUpGobalString()
    {
      this.strDict["zgcReportName"] = "Báo cáo";
      this.strDict["zgcLogo"] = "logo.jpeg";
      this.strDict["zgcCompanyName"] = "Công ty TNHH Mailisa";
      this.strDict["zgcCompanyPhone"] = "0839266442";
      this.strDict["zgcCompanyMobile"] = "0932229339";
      this.strDict["zgcCompanyFax"] = "0839244687";
      this.strDict["zgcCompanyAddress"] = "120C Trần Bình Trọng, F2, Q5";
      this.strDict["zgcCompanyMail"] = "anhxuan@anhxuan.com.vn";
      this.strDict["zgcBranchName"] = "Trần Bình Trong";
      this.strDict["zgcBranchPhone"] = "0839244687";
      this.strDict["zgcBranchMobile"] = "0949803449";
      this.strDict["zgcBranchFax"] = "0839266440";
      this.strDict["zgcBranchAddress"] = "120C Trần Bình Trọng, F2, Q5";
      this.strDict["zgcBillNo"] = "00192";
      this.strDict["zgcBillCode"] = "PT01122010";
      this.strDict["zgcBillDate"] = "12/12/2010";
      this.strDict["zgcHeadAccountingName"] = "Nguyễn Văn A";
      this.strDict["zgcAccountingName"] = "Nguyễn Văn B";
      this.strDict["zgcManagerF1Name"] = "Nguyễn Văn C";
      this.strDict["zgcManagerName"] = "Pov Dany";
      this.strDict["zgcKeeperName"] = "Nguyễn Văn E";
      this.strDict["zgcHeadAccountingForm"] = "Kế toán trưởng";
      this.strDict["zgcAccountingForm"] = "Kế toán";
      this.strDict["zgcManagerForm"] = "Giám đốc";
      this.strDict["zgcKeeperForm"] = "Thủ quỷ";
      this.strDict["zgcCreatePersonForm"] = "Người lập phiếu";
      this.strDict["zgcChargePersonForm"] = "Người nộp tiền";
    }
  }
}
