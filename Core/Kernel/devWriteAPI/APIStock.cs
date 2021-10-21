// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core._sysP
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;

namespace zgcSpaceKernel.Core
{
    class APIStock
    {
        public static void CheckStock(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }
       
    }
}
