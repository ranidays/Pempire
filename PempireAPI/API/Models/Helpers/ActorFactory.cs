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
            var entity = new Entity();
            switch (actor){
                case Actor.Hapepe:
                    entity = GenerateHapepe();
                    break;
                case Actor.Deprepe:
                entity = GenerateDaprepe();
                break;
                case Actor.Pepedia:
                entity = GeneratePepedia();
                break;
                case Actor.WaterBoss:
                    entity = GenerateWaterBoss();
                    break;
                case Actor.FireBoss:
                    entity = GenerateFireBoss();
                    break;
                case Actor.RockBoss:
                    entity = GenerateRockBoss();
                    break;
                case Actor.GrassBoss:
                    entity = GenerateGrassBoss();
                    break;
                default:
                    entity = GenerateHapepe();
                    break;
            }
            
            return entity;
        }
        private static Entity GenerateHapepe() => new Entity()
        {
            Name = "Hapepe",
            Description = "Hapape the oldest and most confident of the pepe brothers",
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
        private static Entity GeneratePepedia() => new Entity()
        {
            Name = "Pepedia",
            Description = "The youngest, but most intelligent of the Pemperors sons",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Player,
            Actor = Actor.Pepedia,
            Element = Element.Normal,
            Portrait = "SomePicture"
        };
        private static Entity GenerateDaprepe() => new Entity()
        {
            Name = "Daprepe",
            Description = "The most miserable of the pepe siblings",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Player,
            Actor = Actor.Deprepe,
            Element = Element.Normal,
            Portrait = "SomePicture"
        };
        private static Entity GenerateWaterBoss() => new Entity()
        {
            Name = "Water Man",
            Description = "Water Man Description",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Boss,
            Actor = Actor.WaterBoss,
            Element = Element.Water,
            Portrait = "/assets/bosses/waterPepe.png"
        };
        private static Entity GenerateFireBoss() => new Entity()
        {
            Name = "Fireio The Fire Lord",
            Description = "Fireio The Fire Lord Description",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Boss,
            Actor = Actor.FireBoss,
            Element = Element.Fire,
            Portrait = "/assets/bosses/waterPepe.png"
        };
        private static Entity GenerateRockBoss() => new Entity()
        {
            Name = "Rockva The Rock Terror",
            Description = "Rockva The Rock Terror Description",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Boss,
            Actor = Actor.RockBoss,
            Element = Element.Rock,
            Portrait = "/assets/bosses/waterPepe.png"
        };
        private static Entity GenerateGrassBoss() => new Entity()
        {
            Name = "Grassio The Grass Lord",
            Description = "Grassio Description",
            Health = 150,
            Mana = 25,
            Stash = new List<ConsumableName>(),
            BattleActions = new List<BattleMoveName>(),
            Gold = Constants.STARTING_GOLD,
            EntityType = EntityType.Boss,
            Actor = Actor.GrassBoss,
            Element = Element.Grass,
            Portrait = "/assets/bosses/waterPepe.png"
        };
    }
}