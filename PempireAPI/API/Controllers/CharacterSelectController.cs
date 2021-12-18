using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Models.Entities;
using API.Models.Enums;
using API.Models.Helpers;
using System.Web.Http.Cors;
using System.Collections.Specialized;
using API.Models.DTOs;
using API.Models.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;


namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CharacterSelectController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;

        public CharacterSelectController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }


        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("getHeroes")]
        public async Task<IActionResult> GetHeroes()
        {
            var response = new List<Dictionary<string, string>>();

            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            var i = 0;
            foreach (var hero in ActorFactory.AllHeroes)
            {
                response.Add(new Dictionary<string, string>());
                response[i].Add("name", hero.Value.Name);
                response[i].Add("description", hero.Value.Description);
                response[i].Add("portrait", hero.Value.Portrait);
                i++;
            }

            return Ok(response);
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("selecthero")] 
        public async Task<IActionResult> selecthero([FromBody] int selected)
        {
            Actor selectedActor = (Actor) (selected+1);
            Entity hero = ActorFactory.AllHeroes[selectedActor];

            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            user.ActiveGameState.SelectedHero = hero;
            await _userManager.UpdateAsync(user);
            return Ok();
        }
    }
}