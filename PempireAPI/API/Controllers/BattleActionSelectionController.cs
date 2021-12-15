using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Models.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using API.Models.Enums;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BattleActionSelectionController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;

        public BattleActionSelectionController(
            UserManager<User> userManager,
            SignInManager<User> signInManager,
            TokenService tokenService
        )
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenService = tokenService;
        }

         
        [HttpGet("BattleActions/{battleActionName}")]
        public async Task<IActionResult> GenerateBattleActions(BattleMove battleActionName)
        {    
            return Ok(BattleActionFactory.GenerateBattleAction(battleActionName));
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {   
            return Ok(BattleActionFactory.GetAllBattleActions());
        }
    }
}