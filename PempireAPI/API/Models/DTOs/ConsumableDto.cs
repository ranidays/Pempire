using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.DTOs
{
    public class ConsumableDto
    {
        public Consumable Consumable { get; set; }
        public Element FoeElement { get; set; }
    }
}