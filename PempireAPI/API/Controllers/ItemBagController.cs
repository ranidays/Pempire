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
    public class ItemBagController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;

        public ItemBagController(
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
        [HttpGet]
        public async Task<IActionResult> Test()
        {
            return Ok();
        }
        

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("getStash")]
        public async Task<IActionResult> GetUsersStash()
        {
            var response = new List<Dictionary<string, string>>();
            
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            var userStash = user.ActiveGameState.SelectedHero.Stash;

            if (userStash == null){
                return NoContent();
            }

            var i = 0;
            foreach (var item in userStash)
            {

                var consumableName = item.Name ?? Consumable.NullConsumable; 

                if (item.Name == Consumable.NullConsumable || item.Name == null){
                    continue;
                }

                var consumableItem = ItemFactory.AllItems[consumableName];

                response.Add(new Dictionary<string, string>());
                response[i].Add("name", consumableItem.Name);
                response[i].Add("description", consumableItem.Description);
                response[i].Add("itemType", consumableItem.ItemType.ToString());
                response[i].Add("element", consumableItem.Element.ToString());
                response[i].Add("iconUrl", consumableItem.IconUrl);

                i++;
            }
        
            return Ok(response);
        }
                
    }
}