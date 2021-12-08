using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.Entities
{
    public class Entity
    {
        //Identifiers and Descriptions
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }

        //Health, Mana, and Possessions
        public int Health { get; set; }
        public int Mana { get; set; }
        public virtual List<ConsumableName>? Stash { get; set; }
        public virtual List<BattleMoveName>? BattleActions { get; set; }
        public int Gold { get; set; }

        //Types
        [EnumDataType(typeof(EntityType))]
        public EntityType EntityType { get; set; }
        [EnumDataType(typeof(Actor))]
        public Actor Actor { get; set; }
        [EnumDataType(typeof(Element))]
        public Element Element { get; set; }
        public string? Portrait { get; set; }
    }
}