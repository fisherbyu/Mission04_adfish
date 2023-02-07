using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_adfish.Controllers
{
    public class mainController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
