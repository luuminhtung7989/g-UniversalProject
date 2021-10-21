// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core.D10
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System.Collections.Generic;

namespace zgcSpaceKernel.Core
{
  internal class D10 : BaseD
  {
        public static Dictionary<string, C> _a;
        public static Dictionary<int, C[]> _fd;
        public static Dictionary<int, C[]> _fdx;
        public static Dictionary<string, C> _ax;

        public override Dictionary<string, C> a() => D10._a;

        public override Dictionary<int, C[]> fd() => D10._fd;

        public override Dictionary<string, C> ax() => D10._ax;

        public override Dictionary<int, C[]> fdx() => D10._fdx;


    }
}
