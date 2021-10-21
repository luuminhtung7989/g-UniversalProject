using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using WebApplication.Services;
using zgcServives;
using zgcSpaceKernel.Core;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class api : ControllerBase
    {
        // GET: api/<api>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "new publish" };
        }

        // GET api/<api>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value" + id.ToString();
        }

        // POST api/<api>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<api>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<api>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [HttpGet("{callback}")]
        public  object GetCall(string callback)
        {
            return (object)new Rs()
            {
                Status = "FAIL" + callback,
                Records = "success"
            };
        }
    }
}
