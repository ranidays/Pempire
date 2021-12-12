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

        [HttpPost("battleaction")]
        public IActionResult UseBattleAction([FromBody] BattleMoveDto battleMoveDto)
        {
            BattleAction? battleAction = BattleActionFactory.GenerateBattleAction(battleMoveDto.BattleMove);
            if (battleAction == null) return BadRequest();
            return Ok(ApplyModifiersToMove(battleAction.EntityChanges!, battleAction.Element,
                battleMoveDto.FoeElement));
        }

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