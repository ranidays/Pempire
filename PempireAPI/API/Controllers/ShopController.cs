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
    public class ShopController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly TokenService _tokenService;

        public ShopController(
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
        [HttpGet("getitems")]
        public async Task<IActionResult> GetFullNonNullItems()
        {
            var response = new List<Dictionary<string, string>>();
            var i = 0;
            foreach (var item in ItemFactory.AllItems)
            {
                if (item.Key == Consumable.NullConsumable){
                    continue;
                }

                response.Add(new Dictionary<string, string>());
                response[i].Add("name", item.Value.Name);
                response[i].Add("description", item.Value.Description);
                response[i].Add("itemType", item.Value.ItemType.ToString());
                response[i].Add("element", item.Value.Element.ToString());
                response[i].Add("goldCost", item.Value.GoldCost.ToString());
                response[i].Add("iconUrl", item.Value.IconUrl);

                i++;
            }
        
            return Ok(response);
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("getitemkeys")]
        public async Task<IActionResult> GetItemKeys()
        {
            var keyList = new List<Consumable>(ItemFactory.AllItems.Keys);
            keyList.Remove(Consumable.NullConsumable);

            var response = new List<String>();

            foreach (var key in keyList){
                response.Add(key.ToString());
            }

            return Ok(response);
        }

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpGet("getusergold")]
        public async Task<IActionResult> GetUserGold()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            var heroInfo = user.ActiveGameState.SelectedHero;
            return Ok(heroInfo.Gold);
        }
    

        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [HttpPost("updateinventory")] 
        public async Task<IActionResult> UpdateInventory([FromBody] ShopDto shopDto)
        {
            Consumable consumableToAdd = (Consumable)(shopDto.ItemToAdd + 1);
            ConsumableName itemToAdd = new ConsumableName{
                Name = consumableToAdd
            };
            if (itemToAdd == null) return NoContent();

            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));
            var heroInfo = user.ActiveGameState.SelectedHero;
            heroInfo.Gold = heroInfo.Gold - shopDto.Cost;
            heroInfo.Stash.Add(itemToAdd);
            await _userManager.UpdateAsync(user);
            return Ok();
        }
        
        
    }
}