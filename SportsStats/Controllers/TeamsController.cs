using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Encodings.Web;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

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

        public async Task<List<Teams>> Index()
        {
            try
            {
                var response = client.GetAsync("https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4391").Result;
                var json = response.Content.ReadAsStringAsync().Result;
                var jobject = JObject.Parse(json);

                var team = jobject["teams"];

                List<Teams> teamList = new List<Teams>();

                for(int i = 0; i < team.Count(); i++)
                {
                    Teams teams = new Teams();
                    teams.teamName = team[i]["strTeam"].ToString();
                    teams.teamId = team[i]["idTeam"].ToString();

                    teamList.Add(teams);
                }

                return teamList;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);
                return new List<Teams>();
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
