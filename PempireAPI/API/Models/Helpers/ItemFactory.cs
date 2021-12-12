using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Entities;
using API.Models.Enums;

namespace API.Models.Helpers
{
    public static class ItemFactory
    {
        public static Dictionary<Consumable, Item?> AllItems = new Dictionary<Consumable, Item?>
        {
            {Consumable.NullConsumable, null},

            {Consumable.SmallHP, new Item{
                Name = "Small Health Potion",
                Description = "Heals for 15 HP",
                ItemType = ItemType.Potion,
                Element = Element.NullType,
                EntityChanges = new EntityStateChanges(15, 0, 0, 0),
                GoldCost = 10,
                IconUrl = "health_small.png"
            }},

            {Consumable.MediumHP, new Item{
                Name = "Medium Health Potion",
                Description = "Heals for 30 HP",
                ItemType = ItemType.Potion,
                Element = Element.NullType,
                EntityChanges = new EntityStateChanges(30, 0, 0, 0),
                GoldCost = 18,
                IconUrl = "health_medium.png"
            }},

            {Consumable.GreaterHP, new Item{
                Name = "Greater Health Potion",
                Description = "Heals for 60 HP",
                ItemType = ItemType.Potion,
                Element = Element.NullType,
                EntityChanges = new EntityStateChanges(60, 0, 0, 0),
                GoldCost = 30,
                IconUrl = "health_large.png"
            }},

            {Consumable.SmallMP, new Item{
                Name = "Small Mana Potion",
                Description = "Restores 15 MP",
                ItemType = ItemType.Potion,
                Element = Element.NullType,
                EntityChanges = new EntityStateChanges(0, 15, 0, 0),
                GoldCost = 10,
                IconUrl = "mana_small.png"
            }},

            {Consumable.MediumMP, new Item{
                Name = "Medium Mana Potion",
                Description = "Restores 30 MP",
                ItemType = ItemType.Potion,
                Element = Element.NullType,
                EntityChanges = new EntityStateChanges(0, 30, 0, 0),
                GoldCost = 18,
                IconUrl = "mana_medium.png"
            }},

            {Consumable.GreaterMP, new Item{
                Name = "Greater Mana Potion",
                Description = "Restores 60 MP",
                ItemType = ItemType.Potion,
                Element = Element.NullType,
                EntityChanges = new EntityStateChanges(0, 60, 0, 0),
                GoldCost = 30,
                IconUrl = "mana_large.png"
            }},

            {Consumable.WaterScroll, new Item{
                Name = "Water Scroll",
                Description = "Performs a water-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Water,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_water.png"
            }},

            {Consumable.FireScroll, new Item{
                Name = "Fire Scroll",
                Description = "Performs a fire-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Fire,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_fire.png"
            }},

            {Consumable.OilScroll, new Item{
                Name = "Oil Scroll",
                Description = "Performs an oil-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Oil,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_oil.png"
            }},

            {Consumable.GrassScroll, new Item{
                Name = "Grass Scroll",
                Description = "Performs a grass-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Grass,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_grass.png"
            }},

            {Consumable.RockScroll, new Item{
                Name = "Rock Scroll",
                Description = "Performs a rock-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Rock,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_rock.png"
            }},

            {Consumable.AcidScroll, new Item{
                Name = "Acid Scroll",
                Description = "Performs an acid-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Acid,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_acid.png"
            }},

            {Consumable.MetalScroll, new Item{
                Name = "Metal Scroll",
                Description = "Performs a metal-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Metal,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_metal.png"
            }},

            {Consumable.ElectricityScroll, new Item{
                Name = "Electricity Scroll",
                Description = "Performs an electricity-based attack at no mana cost",
                ItemType = ItemType.Scroll,
                Element = Element.Electricity,
                EntityChanges = new EntityStateChanges(0, 0, -20, 0),
                GoldCost = 50,
                IconUrl = "scroll_electricity.png"
            }},
        };
     
        public static Item? GenerateItem(Consumable itemType)
        {
            return AllItems[itemType];
        }

    }
}