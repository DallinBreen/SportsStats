using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SportsStats.Controllers
{
   
    public class TeamsController : Controller
    {
        static readonly HttpClient client = new HttpClient();

        private readonly ILogger<TeamsController> _logger;

        public TeamsController(ILogger<TeamsController> logger)
        {
            _logger = logger;
        }

        public async Task<string> Index()
        {
            try
            {
                String response = await client.GetStringAsync("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391");
                // Above three lines can be replaced with new helper method below
                // string responseBody = await client.GetStringAsync(uri);

                Console.WriteLine(response);
                return response;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
                return e.Message;
            }
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
