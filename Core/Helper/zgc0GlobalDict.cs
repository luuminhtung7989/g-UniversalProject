// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgc0GlobalDict
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;

namespace zgcLibCore
{
  public class zgc0GlobalDict
  {
    public Dictionary<string, object> objDict;
    public Dictionary<string, string> strDict;

    public zgc0GlobalDict()
    {
      this.objDict = new Dictionary<string, object>();
      this.strDict = new Dictionary<string, string>();
      this.setUpGobalString();
    }

    public void setUpGobalString()
    {
      this.strDict["GroupRightTable"] = "gcGobal_ACCOUNT_GroupRight";
      this.strDict["AccountTable"] = "gcGobal_ACCOUNT_Account";
      this.strDict["AccountInfoTable"] = "gcGobal_COMP_EmployeeLife";
      this.strDict["AccountInfoCol"] = "HoTen";
      this.strDict["AccountInfoCol2"] = "ChucvuId";
      this.strDict["AccountInfoCol3"] = "departmentId";
    }
  }
}
