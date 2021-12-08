using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.Entities
{
    public class BattleMoveName
    {
        public Guid Id { get; set; }
        [EnumDataType(typeof(BattleMove))]
        public BattleMove? Name { get; set; }
    }
}