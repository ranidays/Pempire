using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.Entities
{
    public class GameState
    {
        public Guid Id { get; set; }
        public Entity? SelectedHero { get; set; }
        [EnumDataType(typeof(Actor))]
        public Actor? SelectedEnemy { get; set; }
        public virtual List<ActorName>? BossesDefeated { get; set; }
        public int UnderlingsDefeated { get; set; }
    }
}