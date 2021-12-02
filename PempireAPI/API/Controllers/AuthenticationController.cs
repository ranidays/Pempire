using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Models.DTOs;
using API.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;
        public AuthenticationController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService
            )
        {
            this._userManager = userManager;
            this._signInManager = signInManager;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            var user = new User
            {
                Email = registerDto.Email,
                UserName = registerDto.UserName
            };
            var game = new GameState()
            {
                BossesDefeated = 5,
                Lives = 3
            };
            user.GameStates = new List<GameState>();
            user.GameStates!.Add(game);

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded)
                return Ok();

            return BadRequest(result.Errors);
        }
    }
}