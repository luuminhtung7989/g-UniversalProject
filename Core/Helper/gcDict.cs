// Decompiled with JetBrains decompiler
// Type: zgcLibCore.gcDict
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;

namespace zgcLibCore
{
  public class gcDict
  {
    public string name;
    public Dictionary<string, string> strDict;

    public gcDict() => this.strDict = new Dictionary<string, string>();
  }
}
