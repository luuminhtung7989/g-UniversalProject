// Decompiled with JetBrains decompiler
// Type: zgcLibCore.zgcCongigTemplateL
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;

namespace zgcLibCore
{
  public class zgcCongigTemplateL
  {
    public string formName = "";
    public Dictionary<string, gcConfigTemplate> objs = new Dictionary<string, gcConfigTemplate>();

    public void Parser(string desc)
    {
      if (desc == null || desc.Length <= 1)
        return;
      string[] strArray1 = desc.Split('[');
      if ((uint) strArray1.Length > 0U)
        this.formName = strArray1[0];
      for (int index1 = 1; index1 < strArray1.Length; ++index1)
      {
        strArray1[index1] = strArray1[index1].Replace(']', ' ');
        string[] strArray2 = strArray1[index1].Split(':');
        if ((uint) strArray2.Length > 0U)
        {
          switch (strArray2[0])
          {
            case "AC":
              this.objs["AC"] = new gcConfigTemplate();
              this.objs["AC"].msg = "AC";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["AC"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "AS":
              this.objs["AS"] = new gcConfigTemplate();
              this.objs["AS"].msg = "AS";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["AS"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "CM":
              this.objs["CM"] = new gcConfigTemplate();
              this.objs["CM"].msg = "CM";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["CM"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "CMBFIELD":
              this.objs["CMBFIELD"] = new gcConfigTemplate();
              this.objs["CMBFIELD"].msg = "CMBFIELD";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["CMBFIELD"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "CSSFIELD":
              this.objs["CSSFIELD"] = new gcConfigTemplate();
              this.objs["CSSFIELD"].msg = "CSSFIELD";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["CSSFIELD"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "CSSUI":
              this.objs["CSSUI"] = new gcConfigTemplate();
              this.objs["CSSUI"].msg = "CSSUI";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["CSSUI"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "CU":
              this.objs["CU"] = new gcConfigTemplate();
              this.objs["CU"].msg = "CU";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["CU"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "DATEN":
              this.objs["DATEN"] = new gcConfigTemplate();
              this.objs["DATEN"].msg = "DATEN";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["DATEN"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "DEFAULTPAGE":
              this.objs["DEFAULTPAGE"] = new gcConfigTemplate();
              this.objs["DEFAULTPAGE"].msg = "DEFAULTPAGE";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["DEFAULTPAGE"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "DLT":
              this.objs["DLT"] = new gcConfigTemplate();
              this.objs["DLT"].msg = "DLT";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["DLT"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "ECs":
              this.objs["ECs"] = new gcConfigTemplate();
              this.objs["ECs"].msg = "ECs";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["ECs"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "EM":
              this.objs["EM"] = new gcConfigTemplate();
              this.objs["EM"].msg = "EM";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["EM"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "ENDT":
              this.objs["ENDT"] = new gcConfigTemplate();
              this.objs["ENDT"].msg = "ENDT";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["ENDT"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "ERs":
              this.objs["ERs"] = new gcConfigTemplate();
              this.objs["ERs"].msg = "ERs";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["ERs"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "FD":
              this.objs["FD"] = new gcConfigTemplate();
              this.objs["FD"].msg = "FD";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["FD"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "FDDATE":
              this.objs["FDDATE"] = new gcConfigTemplate();
              this.objs["FDDATE"].msg = "FDDATE";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["FDDATE"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "FF":
              this.objs["FF"] = new gcConfigTemplate();
              this.objs["FF"].msg = "FF";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["FF"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "FS":
              this.objs["FS"] = new gcConfigTemplate();
              this.objs["FS"].msg = "FS";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["FS"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "GCTRL":
              this.objs["GCTRL"] = new gcConfigTemplate();
              this.objs["GCTRL"].msg = "GCTRL";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["GCTRL"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "HOLE":
              this.objs["HOLE"] = new gcConfigTemplate();
              this.objs["HOLE"].msg = "HOLE";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["HOLE"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "ICONUI":
              this.objs["ICONUI"] = new gcConfigTemplate();
              this.objs["ICONUI"].msg = "ICONUI";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["ICONUI"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "ID":
              this.objs["ID"] = new gcConfigTemplate();
              this.objs["ID"].msg = "ID";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["ID"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "INFOEXTERN":
              this.objs["INFOEXTERN"] = new gcConfigTemplate();
              this.objs["INFOEXTERN"].msg = "INFOEXTERN";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["INFOEXTERN"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "INFOHEAD":
              this.objs["INFOHEAD"] = new gcConfigTemplate();
              this.objs["INFOHEAD"].msg = "INFOHEAD";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["INFOHEAD"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "ML":
              this.objs["ML"] = new gcConfigTemplate();
              this.objs["ML"].msg = "ML";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["ML"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "NM":
              this.objs["NM"] = new gcConfigTemplate();
              this.objs["NM"].msg = "NM";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["NM"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "NOADD":
              this.objs["NOADD"] = new gcConfigTemplate();
              this.objs["NOADD"].msg = "NOADD";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["NOADD"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "OBJFIELD":
              this.objs["OBJFIELD"] = new gcConfigTemplate();
              this.objs["OBJFIELD"].msg = "OBJFIELD";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["OBJFIELD"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "PROGRAM":
              this.objs["PROGRAM"] = new gcConfigTemplate();
              this.objs["PROGRAM"].msg = "PROGRAM";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["PROGRAM"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "PX":
              this.objs["PX"] = new gcConfigTemplate();
              this.objs["PX"].msg = "PX";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["PX"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "SC":
              this.objs["SC"] = new gcConfigTemplate();
              this.objs["SC"].msg = "SC";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["SC"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "SEARCH":
              this.objs["SEARCH"] = new gcConfigTemplate();
              this.objs["SEARCH"].msg = "SEARCH";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["SEARCH"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "SP":
              this.objs["SP"] = new gcConfigTemplate();
              this.objs["SP"].msg = "SP";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["SP"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "SR":
              this.objs["SR"] = new gcConfigTemplate();
              this.objs["SR"].msg = "SR";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["SR"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "TM":
              this.objs["TM"] = new gcConfigTemplate();
              this.objs["TM"].msg = "TM";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["TM"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "VNUPDATE":
              this.objs["VNUPDATE"] = new gcConfigTemplate();
              this.objs["VNUPDATE"].msg = "VNUPDATE";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["VNUPDATE"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "WM":
              this.objs["WM"] = new gcConfigTemplate();
              this.objs["WM"].msg = "WM";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["WM"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "XUI":
              this.objs["XUI"] = new gcConfigTemplate();
              this.objs["XUI"].msg = "XUI";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["XUI"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
            case "YUI":
              this.objs["YUI"] = new gcConfigTemplate();
              this.objs["YUI"].msg = "YUI";
              for (int index2 = 0; index2 < strArray2.Length - 1; ++index2)
                this.objs["YUI"].strArrValue[index2] = strArray2[index2 + 1].Trim();
              break;
          }
        }
      }
    }
  }
}
