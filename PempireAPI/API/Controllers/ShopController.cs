using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models.Helpers;
using API.Models.Enums;
using System.Web.Http.Cors;
using System.Collections.Specialized;
using API.Models.DTOs;

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
        
        

        [HttpGet("geticons")]
        public async Task<IActionResult> GetIcons()
        {
            var iconNames = new List<String>();
            foreach (var item in ItemFactory.AllItems)
            {
                if (item.Key == Consumable.NullConsumable){
                    continue;
                }

                iconNames.Add(item.Value.IconUrl);
            }

            return Ok(iconNames);
        }

        //dummy get gold api
        [HttpGet("getusergold")]
        public async Task<IActionResult> GetUserGold()
        {
            return Ok(40);
        }

        [HttpGet("testenums")]
        public async Task<IActionResult> GetEnums()
        {
            return Ok(Consumable.WaterScroll);
        }      

        [HttpPost("updateinventory")] 
        public async Task<IActionResult> UpdateInventory([FromBody] ShopDto shopDto)
        {
            Item? itemToAdd = ItemFactory.GenerateItem(shopDto.ItemToAdd);
            if (itemToAdd == null) return NoContent();
            //todo: actually remove item from users inventory and subtract their gold.
            System.Diagnostics.Debug.WriteLine($"item to add: {shopDto.ItemToAdd.ToString()}");
            System.Diagnostics.Debug.WriteLine($"item to add: {shopDto.ItemToAdd.ToString()}");
            return Ok();
        }
        
        
    }
}