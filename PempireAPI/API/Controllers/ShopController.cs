using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models.Helpers;
using API.Models.Enums;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShopController : ControllerBase
    {
        [HttpGet("test")]
        public async Task<IActionResult> TestShop()
        {        
            return Ok(ItemFactory.AllItems);
        }

        [HttpGet("getitems")]
        public async Task<IActionResult> GetFullNonNullItems()
        {
            var response = ItemFactory.AllItems;
            response.Remove(Consumable.NullUsable);
        
            return Ok(response);
        }
        

        [HttpGet("geticons")]
        public async Task<IActionResult> GetIcons()
        {
            var iconNames = new List<String>();
            foreach (var item in ItemFactory.AllItems)
            {
                if (item.Key == Consumable.NullUsable){
                    continue;
                }

                iconNames.Add(item.Value.IconUrl);
            }

            return Ok(iconNames);
        }
        
    }
}