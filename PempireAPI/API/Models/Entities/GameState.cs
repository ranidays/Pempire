using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    
    public class GameState
    {
        public Guid Id { get; set; }
        public Entity? SelectedHero { get; set; }
        public Entity? SelectedBoss { get; set; }
        public int BossesDefeated { get; set; }
        public int Lives { get; set; }

    }
}