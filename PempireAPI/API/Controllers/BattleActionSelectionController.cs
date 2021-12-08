using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Controllers
{
    public class BattleActionSelectionController
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
    }
}