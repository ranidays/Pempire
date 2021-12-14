using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Models.Entities;
using API.Models.Enums;

namespace API.Models.Helpers
{
    public enum ItemType
    {
        NullItem, Potion, Scroll
    }

    public class Item
    {
        public string? Name { get; set; }
        public string? Description { get; set; }

        public ItemType ItemType { get; set; }
        public Element Element { get; set; }
        public EntityStateChanges? EntityChanges { get; set; }

        public int GoldCost { get; set; }
        public string? IconUrl { get; set; }

        public void Use(Entity target)
        {
            //
        }
    }
}