using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.DTOs
{
    public class BattleMoveDto
    {
        public BattleMove BattleMove { get; set; }
        public Element FoeElement { get; set; }

        public override string ToString() => $"BattleMove = {BattleMove}, FoeElement = {FoeElement}";
    }
}