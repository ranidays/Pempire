using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.DTOs
{
    public class ShopDto
    {
        public Consumable ItemToAdd{ get; set; }
        public int Cost { get; set; }
    }
}