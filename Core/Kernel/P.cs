// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.P
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;

namespace zgcSpaceKernel.Core
{
  internal class P
  {
    public static void gcLookupProcess(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>) objArray[1];
      X x1 = new X(obj);
      x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      X x2 = x1.R().A();
      foreach (C c in x2._a.T[0][0] == 'G' ? dictionary[int.Parse(x2._a.T[2])] : dictionary[int.Parse(x2._a.T[1])])
        x2 = x2.Pc(c.T[7]);
      R r = x2._CR()._CF().L().S().EX().G();
      oo = (object) new Rs()
      {
        Status = (r._e ? "FAIL" : "OK"),
        Records = r._d,
        TotalRecordCount = r._t,
        Infor = (object) x2._sql
      };
    }

    public static void Run(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>) objArray[1];
      X x1 = new X(obj);
      x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      X x2 = x1.R().A();
      foreach (C c in x2._a.T[0][0] == 'G' ? dictionary[int.Parse(x2._a.T[2])] : dictionary[int.Parse(x2._a.T[1])])
        x2 = x2.Pc(c.T[7]);
      R r = x2.L().S().EX().G();
      oo = (object) new Rs()
      {
        Status = (r._e ? "FAIL" : "OK"),
        Records = r._d,
        TotalRecordCount = r._t,
        Infor = (object) x2._sql
      };
    }

    public static void GetSQL(object obj, out object oo, string ModelDb)
    {
      object[] objArray = DGobal.Dict(ModelDb);
      Dictionary<int, C[]> dictionary = (Dictionary<int, C[]>) objArray[1];
      X x1 = new X(obj);
      x1.Init(DGobal.SqlString(ModelDb, true), (Dictionary<string, C>) objArray[0], ModelDb);
      X x2 = x1.R().A();
      foreach (C c in x2._a.T[0][0] == 'G' ? dictionary[int.Parse(x2._a.T[2])] : dictionary[int.Parse(x2._a.T[1])])
        x2 = x2.Pc(c.T[7]);
      X x3 = x2.L().S();
      oo = (object) new Rs()
      {
        Status = "OK",
        Records = (object) x3._sql,
        TotalRecordCount = 0,
        Infor = (object) x3._sql
      };
    }
  }
}
