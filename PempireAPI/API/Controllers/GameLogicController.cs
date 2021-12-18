using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Models;
using API.Models.Entities;
using API.Models.Enums;
using API.Models.Helpers;
using API.Models.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GameLogicController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;
        public GameLogicController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService
            )
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            _tokenService = tokenService;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("CharacterSelected")] // Post /API/GameLogic/CharacterSelected
        public async Task<IActionResult> CharacterWasSelected([FromBody] ActorName actor)
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            var hero = ActorFactory.GenerateEntity(actor.Name);
            user.ActiveGameState.SelectedHero = hero;
            await _userManager.UpdateAsync(user);
            return Ok(hero);
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("BossSelected")] // Post /API/GameLogic/BossSelected
        public async Task<IActionResult> BossWasSelected([FromBody] ActorName actor)
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            user.ActiveGameState.SelectedEnemy = actor.Name;
            await _userManager.UpdateAsync(user);
            return Ok(actor);
        }
    }
}