using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using WebApplication.Services;
using zgcServives;

//using Newtonsoft.Json;
using ServiceStack;
using ServiceStack.Text;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
using zgcSpaceKernel.Core;
using System.IO;
using System.Web;
using Microsoft.AspNetCore.Hosting;
<<<<<<< HEAD
using Newtonsoft.Json;
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea



// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebCore.Core
{

    [EnableCors("MyPolicy")]
    [Route("[controller]")]
    [ApiController]
    public class callback : ControllerBase
    {
        private readonly IWebHostEnvironment _host;
        public callback(IWebHostEnvironment _h)
        {
            _host = _h;
        }
        // GET: api/<callback>
        [HttpGet]
        public IEnumerable<string> GetStudent()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<callback>/5
        [HttpGet("{request}")]
        public object Get(string request)
        {
            // xử lý cho Cross data
            List<object> objectList = CheckCrossData(request);
            if (objectList.Count > 0)
            {
                zgcServives.LmtServices s = new zgcServives.LmtServices();
                return s.Post1(objectList);// Kernel.
            }
            //end xử lý cross data

            //else xử lý bình thường
            return Process(request);
            
        }

        // POST api/<callback>
  
        [HttpPost]
        public object Post()
        {
            if (this.Request.ContentLength != null)
            {
                byte[] buffer = new byte[(int)this.Request.ContentLength];
                this.Request.Body.ReadAsync(buffer, 0, (int)this.Request.ContentLength);
                String request = new String(buffer.FromUtf8Bytes());

<<<<<<< HEAD
                String deepData = "";
                //if contain header => process file text quá khổ
                if(request.Contains("[{header}]"))
                {
                    var index = request.IndexOf("[{header}]");
                    deepData = request.Substring(index+10, request.Length - (index+10));// tru 10 ki tu [{header}]
                    request = request.Substring(0, index);
                }
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
           
                string PhysicalApplicationPath = _host.WebRootPath;
                // xử lý cho Cross data
                List<object> objectList = CheckCrossData(request);
                if (objectList.Count>0)
                {
                    zgcServives.LmtServices s = new zgcServives.LmtServices();
<<<<<<< HEAD
                    s.PhysicalApplicationPath = PhysicalApplicationPath;
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
                    return s.Post1(objectList);// Kernel.
                }
                //end xử lý cross data

                var jsonObj = JSON.parse((request));
                Dictionary<string, object> obj = jsonObj as Dictionary<string, object>;
                if (obj.ContainsKey("BuildClass_JS"))
                {
                    zgcServives.LmtServices s = new zgcServives.LmtServices();
                    return s.BuildCore(obj, PhysicalApplicationPath);// Kernel. 
                }
<<<<<<< HEAD
                else if (obj.ContainsKey("SaveObjectJS"))
                {
                    zgcServives.LmtServices s = new zgcServives.LmtServices();
                    return s.BuildSaveObjectJS(obj, PhysicalApplicationPath);// Kernel. 
                }
                else if (obj.ContainsKey("CreateNewObjectJS"))
                {
                    zgcServives.LmtServices s = new zgcServives.LmtServices();
                    return s.BuildCreateNewObjectJS(obj, deepData, PhysicalApplicationPath);// Kernel. 
                }
=======
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
                return Process(request);
            }
            return (object)new Rs()
            {
                Status = "FAIL",
                Records = ("This request have empty body, with Core.Lib it needs JSON data...!")
            };
        }

        // PUT api/<callback>/5
        [HttpPut("{id}")]
        public void Put( [FromBody] string value)
        {
        }

        // DELETE api/<callback>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        public static List<object> CheckCrossData(string request)
        {
            //bool bReturn = false;
            // xử lý cho Cross data
<<<<<<< HEAD
            var jsonObj = JSON.parse((request));// qua 16k loi json
            //Dictionary<string, object> jsonObj = JsonConvert.DeserializeObject<Dictionary<string, object>>(request);
=======
            var jsonObj = JSON.parse((request));
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
            Dictionary<string, object> obj = jsonObj as Dictionary<string, object>;
            if (obj.ContainsKey("CrossData"))
            {
                List<object> objectList = obj["MultiRequest"] as List<object>;

                bool bAuthor = true;
                Dictionary<string, object> objOne = objectList[0] as Dictionary<string, object>;
                if (obj.ContainsKey("APIkey"))
                {
                    string strAPIkey = string.Concat(objOne["APIkey"]);
                    Dictionary<string, object> dictionary = objOne["AjaxObj"] as Dictionary<string, object>;
                    string ModelDb = dictionary == null || !dictionary.ContainsKey("ModelDb") ? "" : string.Concat(dictionary["ModelDb"]);
                    bAuthor = ApiKey.CheckAuthorication(strAPIkey, ModelDb);
                }
                if (bAuthor)
                {
                    //bReturn = false;
                    //zgcServives.LmtServices s = new zgcServives.LmtServices();
                    return objectList;
                }
            }
            //end xử lý cross data
            return new List<object>();
        }
        public static object Process(string request)
        {
            bool bAuthor = true;
            Random r = new Random();
            string resultStr = "Result: OK - <br> ";
            try
            {
                if (request == null)
                {
                    resultStr = "Result: FAIL - <br> => Param is NULL not transer";
                    request = " Param is NULL not transer ";
                }
                else
                {
                    var jsonObj = JSON.parse((request));

                    Dictionary<string, object> obj = jsonObj as Dictionary<string, object>;
                    if (obj.ContainsKey("APIkey"))
                    {
                        string strAPIkey = string.Concat(obj["APIkey"]);
                        Dictionary<string, object> dictionary = obj["AjaxObj"] as Dictionary<string, object>;
                        string ModelDb = dictionary == null || !dictionary.ContainsKey("ModelDb") ? "" : string.Concat(dictionary["ModelDb"]);
                        bAuthor = ApiKey.CheckAuthorication(strAPIkey, ModelDb);
                    }
                    if (bAuthor)
                    {
                        zgcServives.LmtServices s = new zgcServives.LmtServices();
                        return s.Post0(obj["AjaxObj"]);// Kernel.
                    }
                }
            }
            catch (Exception ex)
            {
                resultStr = "Result: FAIL -  " + ex.ToString();
            }
            return (object)new Rs()
            {
                Status = "OK",
                Records = (resultStr + "<br>  RUN AT: " + r.Next(100, 100000).ToString())
            };
        }

        
    }
}
