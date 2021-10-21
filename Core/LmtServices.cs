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
<<<<<<< HEAD
using System.IO;
using zgcLibCore;
using Newtonsoft.Json;
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea

namespace zgcServives

{
<<<<<<< HEAD

    public class LmtServices
    {
        public string PhysicalApplicationPath;

        //obj là condition
        //checkFieldCondition:[{self:Values, op:"equal/in/beetween/beetweene/notequal/lessequal/greatequal", values:[1,9]},
        //                {self:Values, op:"equal/in/beetween/notequal/lessequal/greatequal", values:[1,9]}]
        // opBetween :[AND,OR,XOR,NOT] nếu ko định nghĩa mặc định là AND còn không phải truyền vào đầy đủ
        //opBetween:["AND", "AND", "OR"]
        public bool checkFieldCondition(Dictionary<string, object> condition, Dictionary<string, object> data)
        {
            var bReturn = false;
            var arrObj = condition.ContainsKey("checkFieldCondition") ? (object[])condition["checkFieldCondition"] : null;
            var opBetween = condition.ContainsKey("opBetween") ? (object[])condition["opBetween"] : null;
            var opItem = (opBetween == null) ? "AND" : "";//default AND// ứng dụng cho SQL nữa là full option

            for (int u = 0; u < arrObj.Length; u++)
            {
                Dictionary<string, object> item = arrObj[u] as Dictionary<string, object>;
                var self = item.ContainsKey("self") ? (string)item["self"] : "";
                var op = item.ContainsKey("op") ? (string)item["op"] : "";
                var values = item.ContainsKey("values") ? (object[])item["values"] : null;
                var bInLoop = false;
                switch (op)
                {
                    case "equal": if (data[self] == values[0]) bInLoop = true; break;
                    case "in": for (int m = 0; m < values.Length; m++) if (data[self] == values[0]) bInLoop = true; break;
                    case "notequal": if (data[self] != values[0]) bInLoop = true; break;
                    case "lessequal": if ((double)data[self] <= (double)values[0]) bInLoop = true; break;
                    case "greatequal": if ((double)data[self] >= (double)values[0]) bInLoop = true; break;
                    case "beetween": if (((double)data[self] > (double)values[0]) && ((double)data[self] < (double)values[1])) bInLoop = true; break;
                    case "beetweene": if (((double)data[self] >= (double)values[0]) && ((double)data[self] <= (double)values[1])) bInLoop = true; break;
                    default: break;
                }
                if (u == 0)
                    bReturn = bInLoop;
                //-------------------------------------------------
                if (u > 0)// kiểm tra nhiều điều kiện
                {
                    switch (opItem)
                    {
                        case "AND": bReturn = bReturn & bInLoop; break;
                        case "OR": bReturn = bReturn | bInLoop; break;
                        case "XOR": bReturn = bReturn ^ bInLoop; break;
                        case "NOT": bReturn = bReturn & (!bInLoop); break;
                        default: break;
                    }
                }

            }
            return bReturn;
        }

        public bool checkCondition(Dictionary<string, object> condition, List<Dictionary<string, object>> data)
        {
            var bReturn = false;
            var result = condition.ContainsKey("result") ? (string)condition["result"] : "";
            if (result == "null")
            {
                if (data.Count == 0)
                    bReturn = true;
            }
            else if (result == "object")
            {
                if (data.Count > 0)
                    bReturn = true;
            }
            return bReturn;

        }
        public void ProcessTransfer(List<object> objectList, Rs rs, Dictionary<string, object> curObjDict)
        {
            var bTransfer = curObjDict.ContainsKey("bTransfer") ? (bool)curObjDict["bTransfer"] : false;
            var typeOp = curObjDict.ContainsKey("typeOp") ? (string)curObjDict["typeOp"] : "";
            var Rules = curObjDict.ContainsKey("Rules") ? (List<object>)curObjDict["Rules"] : null;
            if (Rules == null || rs.Status.ToUpper() == "FAIL")
                return;
            var data = (List<Dictionary<string, object>>)rs.Records;
            //Rules có định dạng [{},{}]
            //{applyFunc:1, bStop:{self:true, condition:{result:"null"}}, d:{field:null, field,null}, c:{field:null,field:null}, checkFieldCondition:{[{self:Values, op:"equal/in/beetween/notequal/lessequal/greatequal", values:[1,9]}]}}
            //{applyFunc:2, bStop:{self:false, condition:{result:"object"}}, d:{field:null, field,null}, c:{field:null,field:null}, checkFieldCondition:{[{self:Values, op:"equal/in/beetween/notequal/lessthan/greaterthan", values:[1,9]}]}}
            if (bTransfer)
            {
                //process here
                if (typeOp == "ifCmd")
                {
                    //Chỉ lấy 1 phần tử duy nhất để kiểm tra// if ko có dữ liệu thì sao?
                    for (int i = 0; i < Rules.Count; i++)
                    {
                        var rule = (Dictionary<string, object>)Rules[i];
                        var bStop = rule.ContainsKey("bStop") ? (Dictionary<string, object>)rule["bStop"] : null;
                        var checkFieldCondition = rule.ContainsKey("checkFieldCondition") ? (Dictionary<string, object>)rule["checkFieldCondition"] : null;
                        var applyFunc = rule.ContainsKey("applyFunc") ? (int)rule["applyFunc"] : -1;
                        var d = rule.ContainsKey("d") ? (Dictionary<string, object>)rule["d"] : null;
                        var c = rule.ContainsKey("c") ? (Dictionary<string, object>)rule["c"] : null;
                        //----------------------
                        var self = bStop.ContainsKey("self") ? (bool)bStop["self"] : true;
                        var condition = rule.ContainsKey("condition") ? (Dictionary<string, object>)rule["condition"] : null;
                        var result = condition.ContainsKey("result") ? (string)condition["result"] : "";

                        var bReturn = (condition == null) ? true : this.checkCondition(condition, data);


                        if (bReturn)
                        {
                            //((Dictionary<string, object>)objectList[applyFunc])["bStop"] = true;
                            //check thêm điều kiện// sure chắc chắn phải có dữ liệu
                            bReturn = (checkFieldCondition == null) ? true : this.checkFieldCondition(checkFieldCondition, (Dictionary<string, object>)data[0]);
                            if (bReturn)
                            {
                                //copy data to target, copy condition to target
                                var datasub = (Dictionary<string, object>)data[0];
                                var dsub = ((Dictionary<string, object>)objectList[applyFunc])["d"];
                                foreach (var (key, value) in d)
                                {
                                    Console.WriteLine($"Item [{key}] = {value}");
                                    ((Dictionary<string, object>)dsub)[key] = datasub[key];
                                }
                                var csub = ((Dictionary<string, object>)objectList[applyFunc])["c"];
                                foreach (var (key, value) in d)
                                {
                                    Console.WriteLine($"Item [{key}] = {value}");
                                    ((Dictionary<string, object>)csub)[key] = datasub[key];
                                }
                                //run lệnh với command mới ở đây có thể đưa command vào luôn để run
                                //((Dictionary<string, object>)objectList[applyFunc])["bStop"] = true;
                            }
                            else
                            {// thực thi điều kiện else, nếu ko có func thì ko làm gì
                                //((Dictionary<string, object>)objectList[applyFunc])["bStop"] = false;
                            }
                            
                        }
                        //else
                        //    ((Dictionary<string, object>)objectList[applyFunc])["bStop"] = false;
                        bStop["self"] = bReturn;
                        ((Dictionary<string, object>)objectList[applyFunc])["bStop"] = bStop;
                    }
                }
                else if (typeOp == "forCmd")
                {
                    // vấn đề này bạn gặp phải là nếu bạn muốn thêm 1 loạt các lệnh là tuple data được truyền vào bằng 1 array và bạn muốn chúng thực thi
                    // lặp lại nhiều lần => mở rộng câu insert và update với tuple: array[] daa truyền vào.
                    //Chỉ lấy 1 phần tử duy nhất để kiểm tra// if ko có dữ liệu thì sao?
                    for (int i = 0; i < Rules.Count; i++)
                    {
                        var rule = (Dictionary<string, object>)Rules[i];
                        var bStop = rule.ContainsKey("bStop") ? (Dictionary<string, object>)rule["bStop"] : null;
                        var checkFieldCondition = rule.ContainsKey("checkFieldCondition") ? (Dictionary<string, object>)rule["checkFieldCondition"] : null;
                        var applyFunc = rule.ContainsKey("applyFunc") ? (int)rule["applyFunc"] : -1;
                        var d = rule.ContainsKey("d") ? (Dictionary<string, object>)rule["d"] : null;
                        var c = rule.ContainsKey("c") ? (Dictionary<string, object>)rule["c"] : null;
                        //----------------------
                        var self = bStop.ContainsKey("self") ? (bool)bStop["self"] : true;
                        var condition = rule.ContainsKey("condition") ? (Dictionary<string, object>)rule["condition"] : null;
                        var result = condition.ContainsKey("result") ? (string)condition["result"] : "";

                        var bReturn = (condition == null) ? true : this.checkCondition(condition, data);


                        if (bReturn)
                        {
                            //((Dictionary<string, object>)objectList[applyFunc])["bStop"] = true;
                            //check thêm điều kiện// sure chắc chắn phải có dữ liệu
                            bReturn = (checkFieldCondition == null) ? true : this.checkFieldCondition(checkFieldCondition, (Dictionary<string, object>)data[0]);
                            if (bReturn)
                            {
                                //copy data to target, copy condition to target
                                object[] tupples = new object[data.Count];
                                for (int t = 0; t < data.Count; t++)
                                {
                                    var datasub = (Dictionary<string, object>)data[t];
                                    var dsub = ((Dictionary<string, object>)objectList[applyFunc])["d"];
                                    foreach (var (key, value) in d)
                                    {
                                        Console.WriteLine($"Item [{key}] = {value}");
                                        ((Dictionary<string, object>)dsub)[key] = datasub[key];
                                    }
                                    var csub = ((Dictionary<string, object>)objectList[applyFunc])["c"];
                                    foreach (var (key, value) in d)
                                    {
                                        Console.WriteLine($"Item [{key}] = {value}");
                                        ((Dictionary<string, object>)csub)[key] = datasub[key];
                                    }
                                    tupples[t] = ((Dictionary<string, object>)objectList[applyFunc])["d"];
                                }
                                //run lệnh với command mới ở đây có thể đưa command vào luôn để run
                                ((Dictionary<string, object>)objectList[applyFunc])["tupples"] = tupples;
                                //((Dictionary<string, object>)objectList[applyFunc])["bStop"] = true;

                            }
                            else
                            {// thực thi điều kiện else, nếu ko có func thì ko làm gì
                                //((Dictionary<string, object>)objectList[applyFunc])["bStop"] = false;
                            }
                        }
                        //else
                        //    ((Dictionary<string, object>)objectList[applyFunc])["bStop"] = false;
                        bStop["self"] = bReturn;
                        ((Dictionary<string, object>)objectList[applyFunc])["bStop"] = bStop;
                    }
                }
                else if (typeOp == "switchCmd")
                {

                }
                else if (typeOp == "hasCmd")// chỉ kiểm tra kết quả trả về là có là thực thi
                {
                    //lấy danh sách các comand bị ảnh hưởng bởi kết quả trả về của câu lệnh
                    //ở điều kiện này ta có cách xử lý như sau: if Status trả về là OK => sẽ update các câu lệnh tiếp theo
                    // nếu là FAIL => update các câu lệnh phía sau:
                    //các tình huống 1 => Tạo lệnh Insert xong => OK => tạo mã key cho Order chẳng hạn theo => sau đó cập nhật mã này vào Record vừa update
                    // Các order có thể tạo Order trước để lấy mã sau đó tạo chi tiết cho chúng. Hoặc order được tạo tự động.
                    //xử lý cho câu insert
                    for (int i = 0; i < Rules.Count; i++)
                    {
                        var rule = (Dictionary<string, object>)Rules[i];
                        var bStop = rule.ContainsKey("bStop") ? (Dictionary<string, object>)rule["bStop"] : null;
                        var checkFieldCondition = rule.ContainsKey("checkFieldCondition") ? (Dictionary<string, object>)rule["checkFieldCondition"] : null;
                        var applyFunc = rule.ContainsKey("applyFunc") ? (int)rule["applyFunc"] : -1;
                        var d = rule.ContainsKey("d") ? (Dictionary<string, object>)rule["d"] : null;
                        var c = rule.ContainsKey("c") ? (Dictionary<string, object>)rule["c"] : null;
                        //----------------------
                        var self = bStop.ContainsKey("self") ? (bool)bStop["self"] : true;
                        var condition = bStop.ContainsKey("condition") ? (Dictionary<string, object>)bStop["condition"] : null;
                        var result = "";
                        if (condition != null)
                            result = condition.ContainsKey("result") ? (string)condition["result"] : "";

                        var bReturn = (condition == null) ? true : this.checkCondition(condition, data);
                        bStop["self"] = bReturn;
                        ((Dictionary<string, object>)objectList[applyFunc])["bStop"] = bStop;
                    }

                }
            }

        }
=======
    public class LmtServices
    {
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
        public Rs Process(Dictionary<string, object> obj)
        {
            Rs rs1 = new Rs();
            Dictionary<string, object> dictionary = obj;
            string ModelDb = dictionary == null || !dictionary.ContainsKey("ModelDb") ? "" : string.Concat(dictionary["ModelDb"]);
            string str1 = dictionary == null || !dictionary.ContainsKey("P") ? "" : string.Concat(dictionary["P"]);
            string str2 = dictionary == null || !dictionary.ContainsKey("_sys") ? "" : string.Concat(dictionary["_sys"]);
<<<<<<< HEAD
            object[] tupples = dictionary == null || !dictionary.ContainsKey("tupple") ? (null) : (object[])dictionary["tupple"];
            Rs rs2 = new Rs();

            if (dictionary.ContainsKey("BuildClass_JS"))
            {
                rs2 = BuildCore(obj, this.PhysicalApplicationPath);
            }
            else if (dictionary == null || !dictionary.ContainsKey("_sys"))
            {
                string str3 = str1;
                if (tupples == null)// simple , only 1 item
                    rs2 = (str3 == "U") ? (Rs)Kernel.U((object)dictionary, ModelDb) : (str3 == "Rp" ?
                            (Rs)Kernel.Rp((object)dictionary, ModelDb) : (Rs)Kernel.P((object)dictionary, ModelDb));
                else
                {
                    //repair data for tupple: only json format
                    for (int u = 0; u < tupples.Length; u++)
                    {
                        var tupple = (Dictionary<string, object>)tupples[u];//data i
                        var d = dictionary.ContainsKey("d") ? (Dictionary<string, object>)dictionary["d"] : null;
                        foreach (var (key, value) in d)
                        {
                            Console.WriteLine($"Item [{key}] = {value}");
                            ((Dictionary<string, object>)dictionary)[key] = tupple[key];
                        }
                        //process 1 tupple
                        rs2 = (str3 == "U") ? (Rs)Kernel.U((object)dictionary, ModelDb) : (str3 == "Rp" ?
                            (Rs)Kernel.Rp((object)dictionary, ModelDb) : (Rs)Kernel.P((object)dictionary, ModelDb));
                    }

                }
            }

=======
            Rs rs2;
            if (dictionary == null || !dictionary.ContainsKey("_sys"))
            {
                string str3 = str1;
                rs2 = str3 == "U" ? (Rs)Kernel.U((object)dictionary, ModelDb) : (str3 == "Rp" ? (Rs)Kernel.Rp((object)dictionary, ModelDb) : (Rs)Kernel.P((object)dictionary, ModelDb));
            }
            else if (str2 == "GetCurTimes")
                rs2 = new Rs()
                {
                    Status = "OK",
                    Records = (object)DateTime.Now.ToString()
                };
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
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
<<<<<<< HEAD

                    //---------------------------------------
                    //xử lý reload lại Model nếu thêm bảng dữ liệu
                    if (((Dictionary<string, object>)obj).ContainsKey("ReloadModel"))
                    {
                        if (((Dictionary<string, object>)obj)["ReloadModel"].ToString() == "true")
                            DGobal.Load_fda(((Dictionary<string, object>)obj)["ModelDb"].ToString());
                    }
                    //---------------------------------------
                }
                else
                {
                    bool bStopLoop = true;
=======
                }
                else
                {
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
                    List<object> objectList = obj as List<object>;
                    if (objectList.Count > 0)
                    {
                        rs1.TotalListCount = objectList.Count;
                        rs1.ListRecords = new object[objectList.Count];
                        int num = 0;
                        for (int index = 0; index < objectList.Count; ++index)
                        {
<<<<<<< HEAD
                            Rs rs2 = new Rs();
                            Dictionary<string, object> dictionary1 = objectList[index] as Dictionary<string, object>;
                            var bStop = dictionary1.ContainsKey("bStop") ? (Dictionary<string, object>)dictionary1["bStop"] : null;
                            bool self = true;
                            if (bStop != null)
                                self = bStop.ContainsKey("self") ? (bool)bStop["self"] : true;

                            if (bStopLoop && self)
                            {
                                rs2 = this.Process(dictionary1);

                                //---------------------------------------
                                //xử lý reload lại Model nếu thêm bảng dữ liệu
                                //Xử lý tính truyền để gọi
                                // thêm 1 thuộc tính bStop : true
                                this.ProcessTransfer(objectList, rs2, dictionary1);
                                //---------------------------------------
                                rs1.ListRecords[index] = (object)rs2;

                                if (rs2.Status == "OK")
                                    ++num;
                                if (rs2.Status.ToUpper() == "FAIL")
                                    bStopLoop = false;
                                rs1.ListRecords[index] = rs2.Records;
                                rs1.Status = rs2.Status;
                            }
                        }
                        //if (num == objectList.Count)
                        //    rs1.Status = "OK";
=======
                            Dictionary<string, object> dictionary1 = objectList[index] as Dictionary<string, object>;
                            Rs rs2 = this.Process(dictionary1);
                            rs1.ListRecords[index] = (object)rs2;
                            
                            if (rs2.Status == "OK")
                                ++num;
                        }
                        if (num == objectList.Count)
                            rs1.Status = "OK";
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
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
<<<<<<< HEAD
                    bool bStopLoop = true;
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
                    List<object> objectList = obj as List<object>;
                    if (objectList.Count > 0)
                    {
                        rs1.TotalListCount = objectList.Count;
                        rs1.ListRecords = new object[objectList.Count];
                        int num = 0;
                        for (int index = 0; index < objectList.Count; ++index)
                        {
<<<<<<< HEAD
                            Rs rs2 = new Rs();
                            Dictionary<string, object> dictionary1 = objectList[index] as Dictionary<string, object>;
                            var bStop = dictionary1.ContainsKey("bStop") ? (Dictionary<string, object>)dictionary1["bStop"] : null;
                            bool self = true;
                            if (bStop != null)
                                self = bStop.ContainsKey("self") ? (bool)bStop["self"] : true;

                            if (bStopLoop && self)
                            {
                                rs2 = this.Process((Dictionary<string, object>)dictionary1["AjaxObj"]);
                                //----------------------------------------
                                this.ProcessTransfer(objectList, rs2, dictionary1);

                                if (rs2.Status == "OK")
                                    ++num;
                                if (rs2.Status.ToUpper() == "FAIL")
                                    bStopLoop = false;
                                rs1.ListRecords[index] = rs2.Records;
                                rs1.Status = rs2.Status;
                            }
                        }
                        //if (num == objectList.Count)
                        //    rs1.Status = "OK";
=======
                            Dictionary<string, object> dictionary1 = objectList[index] as Dictionary<string, object>;
                            Rs rs2 = this.Process(dictionary1["AjaxObj"] as Dictionary<string, object>);
                            rs1.ListRecords[index] = (object)rs2;

                            if (rs2.Status == "OK")
                                ++num;
                        }
                        if (num == objectList.Count)
                            rs1.Status = "OK";
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
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

<<<<<<< HEAD
                    string ModelDb = obj.ContainsKey("ModelDb") ? (string)obj["ModelDb"] :
                            (string)(obj["AjaxObj"] as Dictionary<string, object>)["ModelDb"];
                    string PathDirectory = PhysicalApplicationPath + "/ClassBuilder/";
                    string path = PhysicalApplicationPath + "/ClassBuilder/" + ModelDb + ".c";
                    string pathJs = PhysicalApplicationPath + "/ClassBuilder/" + ModelDb + ".js";
                    Kernel.BuildClassAndJs(PathDirectory, path, pathJs, ModelDb);
                    path = PhysicalApplicationPath + "/ClassBuilder/" + ModelDb + "_part.c";
                    pathJs = PhysicalApplicationPath + "" +
                        "/ClassBuilder/" + ModelDb + "_part.js";
=======
                    Dictionary<string, object> objTmp = obj["AjaxObj"] as Dictionary<string, object>;
                    string ModelDb = (string)objTmp["ModelDb"];
                    string PathDirectory = PhysicalApplicationPath + "\\ClassBuilder\\";
                    string path = PhysicalApplicationPath + "\\ClassBuilder\\" + ModelDb + ".c";
                    string pathJs = PhysicalApplicationPath + "\\ClassBuilder\\" + ModelDb + ".js";
                    Kernel.BuildClassAndJs(PathDirectory, path, pathJs, ModelDb);
                    path = PhysicalApplicationPath + "\\ClassBuilder\\" + ModelDb + "_part.c";
                    pathJs = PhysicalApplicationPath + "" +
                        "\\ClassBuilder\\" + ModelDb + "_part.js";
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
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
<<<<<<< HEAD

        //Save 1 đối tượng js về server
        //fixed 2021
        public async Task<Rs> BuildSaveObjectJS(Dictionary<string, object> obj, string PhysicalApplicationPath)
        {
            Rs rs = new Rs();
            try
            {
                if (obj.ContainsKey("SaveObjectJS"))
                {
                    string PathDirectory = PhysicalApplicationPath + "/js/ClassCore/";

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
                    Dictionary<string, object> json = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsStr);

                    json[ObjectJsName] = obj["ObjecJS"];

                    //it's no format and compactstring
                    string afterStr = "";//JSON.stringify(json);
                    //test format
                    afterStr = JsonConvert.SerializeObject(json, Formatting.Indented);
                    //afterStr = JsonConvert.SerializeObject(json, Formatting.None);

                    TextWriter tw = new StreamWriter(pathJs);
                    tw.Flush();
                    await tw.WriteLineAsync("var _gbDictionary =" + afterStr + ";");
                    tw.Close();

                    //---------------------------------------------------
                    //for Lang
                    tr = new StreamReader(pathLangJs);
                    string jsLangStr = await tr.ReadToEndAsync();
                    tr.Close();

                    jsLangStr = jsLangStr.Replace("var _gbLanguageI18 =", "");
                    jsLangStr = jsLangStr.Substring(0, jsLangStr.LastIndexOf(';'));
                    //Dictionary<string, object> json2 = JSON.parse(jsStr) as Dictionary<string, object>;

                    Dictionary<string, object> json2 = JsonConvert.DeserializeObject<Dictionary<string, object>>(jsLangStr);

                    json2[ObjectJsName] = obj["ObjecLangJS"];

                    //afterStr = JSON.stringify(json2);
                    //test format
                    string afterLangStr = JsonConvert.SerializeObject(json2, Formatting.Indented);
                    //string afterLangStr = JsonConvert.SerializeObject(json2, Formatting.None);

                    tw = new StreamWriter(pathLangJs);
                    tw.Flush();
                    await tw.WriteLineAsync("var _gbLanguageI18 =" + afterLangStr + ";");
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
                    string PathDirectory = PhysicalApplicationPath + "/js/htmlControl";

                    string ParentGroup = (string)obj["ParentGroup"];

                    string selfKey = (string)obj["selfKey"];
                    // 1. Đường dẫn tới thư mục cần tạo New Directory
                    string directoryPath = PathDirectory + "/" + ParentGroup;
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
                    directoryPath = PathDirectory + "/" + ParentGroup + "/" + subGroup;
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

                    string htmlControlPath = PathDirectory + "/" + ParentGroup + "/" + subGroup + "/" + selfKey + "/" + htmlControl;
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
                    string htmlCtrlJsPath = PathDirectory + "/" + ParentGroup + "/" + subGroup + "/" + selfKey + "/" + htmlCtrlJs;
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
                    string filenamePath = htmlCtrlJsPath + "/" + fileJsname;
                    string filenameHtmlPath = htmlControlPath + "/" + fileJsname;
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
=======
    }
       
 } 
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
