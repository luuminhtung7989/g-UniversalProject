<<<<<<< HEAD
﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
=======
﻿using Microsoft.AspNetCore.Mvc;
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebCoreHttp.Models;

namespace WebCoreHttp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

<<<<<<< HEAD
        [HttpGet]
        public IActionResult Index()
        {
            var username = this.Request.Query["username"];
            var password = this.Request.Query["password"];
            
            if(HttpContext.Session.GetString("LoginPass") == "true")
            {
                
            }
            else
            {
                return RedirectToAction("Index", "Login");
            }
            return View();
        }

        [HttpPost]
        public IActionResult Index1()
        {
=======
        public IActionResult Index()
        {
>>>>>>> 2259ee8d43418ea3d3553f03a79a2d5f0ffcbdea
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
