using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public enum EntityType
    {
        NullEntity, Player, Underling, Boss
    }
    public enum HeroType
    {
        NullHero, Fighter, Rogue, Mage
    }
    public enum Element
    {
        NullType, Normal, Water, Fire, Oil, Grass, Rock, Acid, Metal, Electricity
    }

    public class Entity
    {
        //Identifiers and Descriptions
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        //Health, Mana, and Possessions
        public int Health { get; set; }
        public int Mana { get; set; }
        public List<Item>? Stash { get; set; }
        public List<BattleAction>? OwnedBattleActions { get; set; }
        [Range(0, 4)]
        public List<BattleAction>? SelectedBattleActions { get; set; }
        public int Gold { get; set; }

        //Types
        [EnumDataType(typeof(EntityType))]
        public EntityType EntityType { get; set; }
        [EnumDataType(typeof(HeroType))]
        public HeroType HeroType { get; set; }
        [EnumDataType(typeof(Element))]
        public Element Element { get; set; }

        //URLs for images for this entity
        public List<string>? ImageUrls { get; set; }
    }
}