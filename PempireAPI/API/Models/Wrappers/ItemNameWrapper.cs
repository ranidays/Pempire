using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Wrappers
{
    public class ItemNameWrapper
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
    }
}