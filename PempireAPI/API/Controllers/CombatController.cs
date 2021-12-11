using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
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

        public IActionResult UseAttack(string attack)
        {
            BattleMove battleMove = (BattleMove)Enum.Parse(typeof(BattleMove), attack);
            BattleAction? battleAction = BattleActionFactory.GenerateBattleAction(battleMove);
            //DEBUGGING: Replaced
            //return Ok(battleAction);
            //DEBUGGING: With
            return battleAction == null ? Ok("Nothing here :/") : Ok(battleMove);
        }

        public IActionResult UseSpecial(string special)
        {
            //TODO: Placeholder value
            return NoContent();
        }

        public IActionResult UsePotion(string potion)
        {
            //TODO: Placeholder value
            return NoContent();
        }

        public IActionResult UseScroll(string scroll)
        {
            //TODO: Placeholder value
            return NoContent();
        }
    }
}