using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public enum Hero
    {
        Fighter, Rogue, Mage
    }
    public enum Boss
    {
        A, B, C, D, E, F, G, H
    }
    public enum Type
    {
        Normal,
        Water,
        Fire,
        Oil,
        Grass,
        Rock,
        Acid,
        Metal,
        Electricity
    }
    public class Entity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Health { get; set; }
        public int Mana { get; set; }
        [Range(0, 3)]
        public List<Item> ActiveItems { get; set; }
        public List<Item> Inventory { get; set; }
        [EnumDataType(typeof(Type))]
        public Type StrongAgainst { get; set; }
        public Type WeakAgainst { get; set; }
        public bool isEnemy { get; set; } //can't remember if we need this
        public Hero Hero { get; set; }
        public Boss Boss { get; set; }
        public string Image { get; set; }
        public int Gold { get; set; }
    }
}