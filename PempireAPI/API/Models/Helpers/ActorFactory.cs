using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Entities;
using API.Models.Enums;

namespace API.Models.Helpers
{
    public static class ActorFactory
    {
        public static Entity GenerateEntity(Actor actor){
            var entity = GenerateHapepe();
            
            return entity;
        }
        private static Entity GenerateHapepe() => new Entity()
        {
            Name = "Hapepe",
            Description = "Some Description",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Player,
            Actor = Actor.Hapepe,
            Element = Element.Normal,
            Portrait = "SomePicture"
        };
    }
}