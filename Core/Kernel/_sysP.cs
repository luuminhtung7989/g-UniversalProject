// Decompiled with JetBrains decompiler
// Type: zgcSpaceKernel.Core._sysP
// Assembly: Kernel, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: 75F4D97F-2F2C-4ACB-B81F-5436EAA7C8BC
// Assembly location: C:\LuuMinhTung\KernelServices\bin\Kernel.dll

using System;
using System.Collections.Generic;

namespace zgcSpaceKernel.Core
{
  internal class _sysP
  {
        public static void allSYS(object obj, out object oo, string ModelDb)
        {
            Dictionary<string, object> objDict = obj as Dictionary<string, object>;
            //Ở đây bạn dùng hàm truyển vào để gọi từ class khác 
            if (objDict.ContainsKey("subSYS"))
            {
                if ((string)objDict["subSYS"] == "DevSaveObjectClient")
                {
                    //Ở đây bạn gọi chúng
                    // class SYSApi = new SYSApi
                    APISys.DevSaveObjectClient(obj, out oo, ModelDb);
                }
                else if((string)objDict["subSYS"] == "DevLoadObjectClient")
                {
                    //Ở đây bạn gọi chúng
                    // class SYSApi = new SYSApi
                    APISys.DevSaveObjectClient(obj, out oo, ModelDb);
                }
                else if ((string)objDict["subSYS"] == "UserLoadObjectClient")
                {
                    //Ở đây bạn gọi chúng
                    // class SYSApi = new SYSApi
                    APISys.DevSaveObjectClient(obj, out oo, ModelDb);
                }
                else if ((string)objDict["subSYS"] == "UserSaveObjectClient")
                {
                    //Ở đây bạn gọi chúng
                    // class SYSApi = new SYSApi
                    APISys.DevSaveObjectClient(obj, out oo, ModelDb);
                }
                else //Invoke chúng để bạn tự tạo// 4 hàm trên chỉ để demo
                {

                }

            }
            
            oo = (object)new Rs()
            {
                Status = "OK",
                Records = (object)DateTime.Now.ToString() + " - param Id:" + objDict["Id"].ToString() + " - param Name:" + objDict["Name"].ToString()
            };
        }
       
  }
}
