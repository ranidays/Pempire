using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public enum ItemType{
        potion,weapon
    }
    public class Item
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "No Name";
        public string Description { get; set; } = "No Desc";
        public ItemType ItemType { get; set; }
        public int Health { get; set; }
        public int Mana { get; set; }
        public Type Type { get; set; }
    }
}