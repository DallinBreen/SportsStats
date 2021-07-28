using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SportsStats.Controllers
{
   
    public class TeamsController : Controller
    {

        private readonly ILogger<TeamsController> _logger;

        public TeamsController(ILogger<TeamsController> logger)
        {
            _logger = logger;
        }

        public string Index()
        {
            return "All Teams";
        }

        
        public string Welcome()
        {
            return "Welcome to NFL";
        }

        public string Team(string teamName)
        {
            return teamName;
        }
    }
}
