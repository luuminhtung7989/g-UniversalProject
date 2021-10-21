// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core._sysP
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;

namespace zgcSpaceKernel.Core
{
    internal class APISys
    {
        public static void DevSaveObjectClient(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            //Ở đây bạn dùng hàm truyển vào để gọi từ class khác 
            
            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }

        public static void DevLoadObjectClient(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            //Ở đây bạn dùng hàm truyển vào để gọi từ class khác 

            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }

        //---------------------------------------------------------------
        //Danh cho User
        public static void UserSaveObjectClient(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            //Ở đây bạn dùng hàm truyển vào để gọi từ class khác 

            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }
        public static void UserLoadObjectClient(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            //Ở đây bạn dùng hàm truyển vào để gọi từ class khác 

            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }
    }
}
