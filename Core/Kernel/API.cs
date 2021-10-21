// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core._sysP
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;

namespace zgcSpaceKernel.Core
{
    internal class API
    {
        public static void allAPI(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            //Ở đây bạn dùng hàm truyển vào để gọi từ class khác 
            if (objDict.ContainsKey("subAPI"))
            {
                if ((string)objDict["subAPI"] == "CheckStock")
                {
                    //Ở đây bạn gọi chúng
                    // class APIStock = new APIStock
                    APIStock.CheckStock(obj, out oo, ModelDb);
                }
            }
            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }
<<<<<<< HEAD
       
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
        public static void ProcessStockList(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }
        public static void SmField(object obj, out object oo, string ModelDb) => oo = (object)new Rs()
        {
            Status = "OK",
            Records = (object)DateTime.Now.ToString()
        };

        public static void ConverVNKD(object obj, out object oo, string ModelDb) => oo = (object)new Rs()
        {
            Status = "OK",
            Records = (object)DateTime.Now.ToString()
        };

        public static void EncriptData(object obj, out object oo, string ModelDb) => oo = (object)new Rs()
        {
            Status = "OK",
            Records = (object)DateTime.Now.ToString()
        };

        public static void DecriptData(object obj, out object oo, string ModelDb) => oo = (object)new Rs()
        {
            Status = "OK",
            Records = (object)DateTime.Now.ToString()
        };

        public static void CreateExtraData(object obj, out object oo, string ModelDb) => oo = (object)new Rs()
        {
            Status = "OK",
            Records = (object)DateTime.Now.ToString()
        };
    }
}
