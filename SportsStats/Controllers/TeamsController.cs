﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SportsStats.Controllers
{
   
    public class TeamsController : ControllerBase
    {        
        [HttpGet]
        public string Get()
        {

            return "All Teams";
        }
    }
}
