using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Transactions;
using System.Web.Http.Cors;
using API.Models;
using API.Models.DTOs;
using API.Models.Entities;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
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
            var game = new GameState();
            user.ActiveGameState = game;

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (result.Succeeded)
                return Ok();

            return BadRequest(result.Errors);
        }
        
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null)
                return Unauthorized("email doesn't exist");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (result.Succeeded)
                return Ok(new UserDto
                {
                    Token = _tokenService.CreateToken(user)
                });

            return Unauthorized("Not a good password");
        }
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("getuserfromtoken")]
        public async Task<IActionResult> GetUserFromToken()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            Console.WriteLine(user.GameStates);
            return Ok(user);
        }

    }
}