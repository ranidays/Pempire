using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using API.Models;
using API.Models.DTOs;
using API.Models.Entities;
using API.Models.Enums;
using API.Models.Helpers;
using API.Models.Persistence;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Server.HttpSys;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CombatController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;
        private readonly DataContext _context;

        public CombatController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService,
            DataContext context
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
            _context = context;
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("foe")]
        public IActionResult GetFoe([FromQuery] Actor actor)
        {
            Entity? foe = ActorFactory.GenerateEntity(actor);
            if (foe == null) return BadRequest();
            return Ok(foe);
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("bossdefeated")]
        public async Task<IActionResult> DefeatCurrentBoss()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            if (user.ActiveGameState!.BossesDefeated == null) user.ActiveGameState.BossesDefeated = new List<ActorName>();
            user.ActiveGameState.BossesDefeated.Add(new ActorName {
                Name = (Actor)user.ActiveGameState.SelectedEnemy!
            });
            user.ActiveGameState.SelectedEnemy = (Actor)0;
            await _context.SaveChangesAsync();
            return Ok();
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("battleaction")]
        public IActionResult UseBattleAction([FromBody] BattleMoveDto battleMoveDto)
        {
            BattleAction? battleAction = BattleActionFactory.GenerateBattleAction(battleMoveDto.BattleMove);
            if (battleAction == null) return BadRequest();
            return Ok(ApplyModifiersToMove(battleAction.EntityChanges!, battleAction.Element,
                battleMoveDto.FoeElement));
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("item")]
        public IActionResult UseItem([FromBody] ConsumableDto consumableDto)
        {
            Item? item = ItemFactory.GenerateItem(consumableDto.Consumable);
            if (item == null) return BadRequest();
            return Ok(ApplyModifiersToMove(item.EntityChanges!, item.Element, consumableDto.FoeElement));
        }

        private EntityStateChanges ApplyModifiersToMove(EntityStateChanges esc, Element moveElement, Element foeElement)
        {
            if (ElementHelper.GetElementWeakTo(moveElement) == foeElement) esc.FoeHealthChange *= 2;
            else if (ElementHelper.GetElementResistantTo(moveElement) == foeElement)
                esc.FoeHealthChange = (int)(esc.FoeHealthChange * 0.5);
            return esc;
        }
    }
}