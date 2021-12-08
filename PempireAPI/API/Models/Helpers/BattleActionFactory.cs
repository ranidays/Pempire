using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;
using API.Models.Helpers;

namespace API.Models.Entities
{
    public static class BattleActionFactory
    {
        private static Dictionary<BattleMove, BattleAction?> _allBattleActions;

        static BattleActionFactory()
        {
            _allBattleActions = new Dictionary<BattleMove, BattleAction?>
            {
                {BattleMove.NullBattleMove, null},
                {BattleMove.Att1, new BattleAction
                {
                    Name = "Violent Charge",
                    Description = "A deadly charge. Deals 50 damage but deals 25 recoil to user.",
                    BattleActionType = BattleActionType.Attack,
                    Element = Element.Normal,
                    EntityChanges = new EntityStateChanges(-25, 5, -50, 0),
                    ManaCost = -5
                }},
                {BattleMove.Att2, new BattleAction
                {
                    Name = "Corrosive Punch",
                    Description = "Does only 20 damage but builds 35 mana. Also lowers the foe's mana by 10.",
                    BattleActionType = BattleActionType.Attack,
                    Element = Element.Acid,
                    EntityChanges = new EntityStateChanges(0, 35, -30, -10),
                    ManaCost = -35
                }},
                {BattleMove.Att3, new BattleAction
                {
                    Name = "Fireball",
                    Description = "Launches a fireball that deals 40 damage. Uses 25 mana.",
                    BattleActionType = BattleActionType.Attack,
                    Element = Element.Fire,
                    EntityChanges = new EntityStateChanges(0, -25, -40, 0),
                    ManaCost = 25
                }},
                {BattleMove.Att4, new BattleAction
                {
                    Name = "Full-Power Blast",
                    Description = "An all-out assault. Deals 80 damage at the cost of 100 mana.",
                    BattleActionType = BattleActionType.Attack,
                    Element = Element.Normal,
                    EntityChanges = new EntityStateChanges(0, -100, -80, 0),
                    ManaCost = 100
                }}
            };
        }

        public static BattleAction GenerateBattleAction(BattleMove battleActionName)
        {
            //Take a string and return the information for the battle action of that name
            //BattleMove in this method is the equivalent to `Consumable` in `ItemFactory.GetItemByName()`
            //TODO: Placeholder value
            return new BattleAction();
        }
    }
}