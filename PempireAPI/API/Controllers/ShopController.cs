using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models.Helpers;
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
    }
}