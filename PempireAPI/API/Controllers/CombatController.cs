using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Models.DTOs;
using API.Models.Entities;
using API.Models.Enums;
using API.Models.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CombatController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;

        public CombatController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

        [HttpPost("attack")]
        public IActionResult UseAttack([FromBody] BattleMoveDto battleMoveDto)
        {
            //TODO: Placeholder value
            return NoContent();
        }

        [HttpPost("special")]
        public IActionResult UseSpecial([FromBody] BattleMoveDto battleMoveDto)
        {
            //TODO: Placeholder value
            return NoContent();
        }

        [HttpPost("potion")]
        public IActionResult UsePotion([FromBody] ConsumableDto consumableDto)
        {
            //TODO: Placeholder value
            return NoContent();
        }

        [HttpPost("scroll")]
        public IActionResult UseScroll([FromBody] ConsumableDto consumableDto)
        {
            //TODO: Placeholder value
            return NoContent();
        }
    }
}