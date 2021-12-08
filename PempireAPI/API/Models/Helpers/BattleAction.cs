using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.Entities
{
    public enum BattleActionType
    {
        NullBattleAction, Attack, Special
    }

    public class BattleAction
    {
        public Guid Id { get; set; }

        public string? Name { get; set; }
        public string? Description { get; set; }

        public BattleActionType BattleActionType { get; set; }
        public Element Element { get; set; }

        public EntityStateChanges? EntityChanges { get; set; }
        public int ManaCost { get; set; }

        public void Use(Entity target)
        {
            //
        }
    }
}