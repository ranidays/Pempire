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
        public Entity? ItemOwner { get; set; }

        public string? Name { get; set; }
        public string? Description { get; set; }

        public ItemType ItemType { get; set; }
        public Type Element { get; set; }

        public EntityStateChanges? EntityChanges { get; set; }
        public int ResourceCost { get; set; }

        public void Use(Entity foe)
        {
            //
        }
    }
}