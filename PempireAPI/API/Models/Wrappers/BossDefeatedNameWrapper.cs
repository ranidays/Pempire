using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Wrappers
{
    public class BossDefeatedNameWrapper
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = "";
    }
}