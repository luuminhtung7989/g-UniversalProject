// Decompiled with JetBrains decompiler
// Type: zgcServives.LmtServices
// Assembly: zgcServives, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
// MVID: E519A6C2-9558-451A-8580-B565FCB1E7D0
// Assembly location: C:\LuuMinhTung\KernelServices\bin\zgcServives.dll

using System;
using Microsoft.AspNetCore.WebUtilities;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web;
using zgcSpaceKernel.Core;
using WebApplication.Services;




//using Newtonsoft.Json;
using ServiceStack;
using ServiceStack.Text;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
using System.IO;
using zgcLibCore;
using Newtonsoft.Json;

namespace zgcServives

{
    public class LmtServices
    {
        public string PhysicalApplicationPath;
        public Rs Process(Dictionary<string, object> obj)
        {
            Rs rs1 = new Rs();
            Dictionary<string, object> dictionary = obj;
            string ModelDb = dictionary == null || !dictionary.ContainsKey("ModelDb") ? "" : string.Concat(dictionary["ModelDb"]);
            string str1 = dictionary == null || !dictionary.ContainsKey("P") ? "" : string.Concat(dictionary["P"]);
            string str2 = dictionary == null || !dictionary.ContainsKey("_sys") ? "" : string.Concat(dictionary["_sys"]);
            Rs rs2;

            if (dictionary.ContainsKey("BuildClass_JS"))
            {
                rs2 = BuildCore(obj, this.PhysicalApplicationPath);
            }
            else if (dictionary == null || !dictionary.ContainsKey("_sys"))
            {
                string str3 = str1;
                rs2 = (str3 == "U") ? (Rs)Kernel.U((object)dictionary, ModelDb) : (str3 == "Rp" ? (Rs)Kernel.Rp((object)dictionary, ModelDb) : (Rs)Kernel.P((object)dictionary, ModelDb));
            }
            
            else
                rs2 = new Rs()
                {
                    Status = "OK",
                    Records = (object)""
                };
            return rs2;
        }

        public Rs Post0(object obj)
        {
            Rs rs1 = new Rs();
            //JavaScriptSerializer scriptSerializer = new JavaScriptSerializer();
            if (obj != null)
            {
                if (!obj.GetType().Name.Contains("List"))
                {
                    rs1 = this.Process(obj as Dictionary<string, object>);

                    //---------------------------------------
                    //xử lý reload lại Model nếu thêm bảng dữ liệu
                    if(((Dictionary<string, object>)obj).ContainsKey("ReloadModel"))
                    {
                        if (((Dictionary<string, object>)obj)["ReloadModel"].ToString() == "true") 
                            DGobal.Load_fda(((Dictionary<string, object>)obj)["ModelDb"].ToString());
                    }
                    //---------------------------------------
                }
                else
                {
                    List<object> objectList = obj as List<object>;
                    if (objectList.Count > 0)
                    {
                        rs1.TotalListCount = objectList.Count;
                        rs1.ListRecords = new object[objectList.Count];
                        int num = 0;
                        for (int index = 0; index < objectList.Count; ++index)
                        {
                            Dictionary<string, object> dictionary1 = objectList[index] as Dictionary<string, object>;
                            Rs rs2 = this.Process(dictionary1);

                            //---------------------------------------
                            //xử lý reload lại Model nếu thêm bảng dữ liệu

                            //---------------------------------------
                            rs1.ListRecords[index] = (object)rs2;
                            
                            if (rs2.Status == "OK")
                                ++num;
                        }
                        if (num == objectList.Count)
                            rs1.Status = "OK";
                    }
                }
            }
            return rs1;
        }

        public Rs Post1(object obj)
        {
            Rs rs1 = new Rs();
            //JavaScriptSerializer scriptSerializer = new JavaScriptSerializer();
            if (obj != null)
            {
                if (!obj.GetType().Name.Contains("List"))
                {
                    rs1 = this.Process(obj as Dictionary<string, object>);
                }
                else
                {
                    List<object> objectList = obj as List<object>;
                    if (objectList.Count > 0)
                    {
                        rs1.TotalListCount = objectList.Count;
                        rs1.ListRecords = new object[objectList.Count];
                        int num = 0;
                        for (int index = 0; index < objectList.Count; ++index)
                        {
                            Dictionary<string, object> dictionary1 = objectList[index] as Dictionary<string, object>;
                            Rs rs2 = this.Process(dictionary1["AjaxObj"] as Dictionary<string, object>);
                            rs1.ListRecords[index] = (object)rs2;

                            if (rs2.Status == "OK")
                                ++num;
                        }
                        if (num == objectList.Count)
                            rs1.Status = "OK";
                    }
                }
            }
            return rs1;
        }

        public Rs BuildCore(Dictionary<string, object> obj, string PhysicalApplicationPath)
        {
            Rs rs = new Rs();
            try
            {
                if (obj.ContainsKey("BuildClass_JS"))
                {
                    
                    string ModelDb = obj.ContainsKey("ModelDb") ? (string)obj["ModelDb"] :
                            (string)(obj["AjaxObj"] as Dictionary<string, object>)["ModelDb"];
                    string PathDirectory = PhysicalApplicationPath + "\\ClassBuilder\\";
                    string path = PhysicalApplicationPath + "\\ClassBuilder\\" + ModelDb + ".c";
                    string pathJs = PhysicalApplicationPath + "\\ClassBuilder\\" + ModelDb + ".js";
                    Kernel.BuildClassAndJs(PathDirectory, path, pathJs, ModelDb);
                    path = PhysicalApplicationPath + "\\ClassBuilder\\" + ModelDb + "_part.c";
                    pathJs = PhysicalApplicationPath + "" +
                        "\\ClassBuilder\\" + ModelDb + "_part.js";
                    Kernel.BuildClassAndJs(PathDirectory, path, pathJs, ModelDb, "part");
                    rs.Status = "OK";
                    rs.Records = "Build code is successfull";
                }

                return rs;
            }
            catch (Exception ex)
            {
                return new Rs()
                {
                    Status = "FAIL",
                    Records = "" + ex.ToString(),
                };
            }
        }

        //Save 1 đối tượng js về server
        //fixed 2021
        public async Task<Rs> BuildSaveObjectJS(Dictionary<string, object> obj, string PhysicalApplicationPath)
        {
            Rs rs = new Rs();
            try
            {
                if (obj.ContainsKey("SaveObjectJS"))
                {
                    string PathDirectory = PhysicalApplicationPath + "\\js\\ClassCore\\";

                    string ModelDb = obj.ContainsKey("ModelDb") ? (string)obj["ModelDb"] :
                            (string)(obj["AjaxObj"] as Dictionary<string, object>)["ModelDb"];

                    //lấy ObjectJsName
                    string ObjectJsName = obj.ContainsKey("ObjectJsName") ? (string)obj["ObjectJsName"] :
                            (string)(obj["AjaxObj"] as Dictionary<string, object>)["ObjectJsName"];
                    //read instanst Ds.js
                    //Loại bỏ khai báo var..., sau đó parser chúng thành JSON
                    //Gán ObjectJsName bằng value truyền từ Client
                    //=>Chuyển chúng thành lại text vào lưu chúng vào instanst Ds.js
                    //===> Tương tự cho Lang.js

                    
                    string path = PathDirectory + ModelDb + ".js";
                    string pathJs = PathDirectory + "" + ModelDb + ".js";
                    string pathLangJs = PathDirectory + "" + ModelDb + "_langFull.js";
                    
                    TextReader tr = new StreamReader(pathJs);
                    string jsStr = await tr.ReadToEndAsync();
                    tr.Close();

                    jsStr = jsStr.Replace("var _gbDictionary =", "");
                    jsStr = jsStr.Substring(0, jsStr.LastIndexOf(';'));

                    //JSON Error chúng không hiểu các ký tự // và ghi chú phải loai bo chúng như bạn chuyền từ Post
                    //Dictionary<string, object> json = JSON.parse(jsStr) as Dictionary<string, object>;
                    //test with 
                     Dictionary<string, object>  json = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsStr) ;
                    
                    json[ObjectJsName] = obj["ObjecJS"];

                    //it's no format and compactstring
                    string afterStr = "";//JSON.stringify(json);
                    //test format
                    afterStr = JsonConvert.SerializeObject(json, Formatting.Indented);
                    //afterStr = JsonConvert.SerializeObject(json, Formatting.None);

                    TextWriter tw = new StreamWriter(pathJs);
                    tw.Flush();
                    await tw.WriteLineAsync("var _gbDictionary ="+ afterStr+";");
                    tw.Close();

                    //---------------------------------------------------
                    //for Lang
                    tr = new StreamReader(pathLangJs);
                    string jsLangStr = await tr.ReadToEndAsync();
                    tr.Close();

                    jsLangStr = jsLangStr.Replace("var _gbLanguageI18 =", "");
                    jsLangStr = jsLangStr.Substring(0, jsLangStr.LastIndexOf(';'));
                    //Dictionary<string, object> json2 = JSON.parse(jsStr) as Dictionary<string, object>;

                    Dictionary<string, object> json2 = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsLangStr) ;

                    json2[ObjectJsName] = obj["ObjecLangJS"];

                    //afterStr = JSON.stringify(json2);
                    //test format
                    string afterLangStr = JsonConvert.SerializeObject(json2, Formatting.Indented);
                    //string afterLangStr = JsonConvert.SerializeObject(json2, Formatting.None);

                    tw = new StreamWriter(pathLangJs);
                    tw.Flush();
                    await tw.WriteLineAsync("var _gbLanguageI18 ="+ afterLangStr + ";");
                    tw.Close();


                    rs.Status = "OK";
                    rs.Records = "Build code is successfull";
                }

                return rs;
            }
            catch (Exception ex)
            {
                return new Rs()
                {
                    Status = "FAIL",
                    Records = "" + ex.ToString(),
                };
            }
        }


        //Create 1 đối tượng JS 
        public async Task<Rs> BuildCreateNewObjectJS(Dictionary<string, object> obj, string deepData, string PhysicalApplicationPath)
        {
            Rs rs = new Rs();
            try
            {
                if (obj.ContainsKey("CreateNewObjectJS"))
                {

                    string ModelDb = obj.ContainsKey("ModelDb") ? (string)obj["ModelDb"] :
                            (string)(obj["AjaxObj"] as Dictionary<string, object>)["ModelDb"];
                    string PathDirectory = PhysicalApplicationPath + "\\js\\htmlControl";

                    string ParentGroup = (string)obj["ParentGroup"];

                    string selfKey = (string)obj["selfKey"];
                    // 1. Đường dẫn tới thư mục cần tạo New Directory
                    string directoryPath = PathDirectory + "\\"+ParentGroup;
                    // 2.Khai báo một thể hiện của lớp DirectoryInfo
                    DirectoryInfo directory = new DirectoryInfo(directoryPath);
                    // 3.Sử dụng phương thức Create để tạo thư mục.
                    // Kiểm tra thư mục chưa tồn tại mới sử dụng phương thức tạo
                    if (!directory.Exists)
                    {
                        // 3.Sử dụng phương thức Create để tạo thư mục.
                        directory.Create();
                    }

                    string subGroup = (string)obj["subGroup"];
                    directoryPath = PathDirectory + "\\"+ParentGroup + "\\"+subGroup;
                    // 2.Khai báo một thể hiện của lớp DirectoryInfo
                    directory = new DirectoryInfo(directoryPath);
                    // 3.Sử dụng phương thức Create để tạo thư mục.
                    // Kiểm tra thư mục chưa tồn tại mới sử dụng phương thức tạo
                    if (!directory.Exists)
                    {
                        // 3.Sử dụng phương thức Create để tạo thư mục.
                        directory.Create();
                    }

                    string htmlControl = (string)obj["htmlControl"];

                    string htmlControlPath = PathDirectory +"\\"+ ParentGroup +"\\"+ subGroup +"\\"+ selfKey +"\\"+htmlControl;
                    // 2.Khai báo một thể hiện của lớp DirectoryInfo
                    directory = new DirectoryInfo(htmlControlPath);
                    // 3.Sử dụng phương thức Create để tạo thư mục.
                    // Kiểm tra thư mục chưa tồn tại mới sử dụng phương thức tạo
                    if (!directory.Exists)
                    {
                        // 3.Sử dụng phương thức Create để tạo thư mục.
                        directory.Create();
                    }

                    string htmlCtrlJs = (string)obj["htmlCtrlJs"];
                    string htmlCtrlJsPath = PathDirectory +"\\"+ ParentGroup +"\\"+ subGroup +"\\"+ selfKey+"\\"+htmlCtrlJs;
                    // 2.Khai báo một thể hiện của lớp DirectoryInfo
                    directory = new DirectoryInfo(htmlCtrlJsPath);
                    // 3.Sử dụng phương thức Create để tạo thư mục.
                    // Kiểm tra thư mục chưa tồn tại mới sử dụng phương thức tạo
                    if (!directory.Exists)
                    {
                        // 3.Sử dụng phương thức Create để tạo thư mục.
                        directory.Create();
                    }

                    //--------------------------------------------------------------
                    //save file to disk
                    string fileJsname = (string)obj["fileJSName"];
                    string fileJSContent = deepData;// (string)obj["fileJSContent"];
                    string filenamePath = htmlCtrlJsPath + "\\"+fileJsname ;
                    string filenameHtmlPath = htmlControlPath + "\\" + fileJsname;
                    TextWriter tw = new StreamWriter(filenamePath);
                    tw.Flush();
                    await tw.WriteLineAsync(fileJSContent);
                    tw.Close();

                    tw = new StreamWriter(filenameHtmlPath);
                    tw.Flush();
                    await tw.WriteLineAsync(fileJSContent);
                    tw.Close();

                    rs.Status = "OK";
                    rs.Records = "Build code is successfull";
                }

                return rs;
            }
            catch (Exception ex)
            {
                return new Rs()
                {
                    Status = "FAIL",
                    Records = "" + ex.ToString(),
                };
            }
        }
    }
       
 } 
