// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core._E
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

namespace zgcSpaceKernel.Core
{
  public class _E
  {
    public static _E E10001 = new _E()
    {
      T = new string[3]
      {
        "10001",
        "Trip",
        "Action not found"
      }
    };
    public static _E E10002 = new _E()
    {
      T = new string[3]{ "10002", "Trip", "Wrong input" }
    };
    public static _E E10004 = new _E()
    {
      T = new string[3]{ "10004", "Trip", "Format wrong" }
    };
    public static _E E10005 = new _E()
    {
      T = new string[3]
      {
        "10005",
        "Trip",
        "Push Condition field wrong"
      }
    };
    public static _E E10006 = new _E()
    {
      T = new string[3]
      {
        "10006",
        "Trip",
        "Condition field wrong"
      }
    };
    public static _E E10007 = new _E()
    {
      T = new string[3]
      {
        "10007",
        "Trip",
        "Data field wrong"
      }
    };
    public static _E E10008 = new _E()
    {
      T = new string[3]{ "10008", "Trip", "Field wrong" }
    };
    public static _E E10009 = new _E()
    {
      T = new string[3]
      {
        "10009",
        "Trip",
        "Excute sql error"
      }
    };
    public static _E E10010 = new _E()
    {
      T = new string[3]{ "10010", "Trip", "Validate error" }
    };

    public string[] T { get; set; }

    public string G() => this.T[0] + ":" + this.T[1] + ":" + this.T[2];
  }
}
