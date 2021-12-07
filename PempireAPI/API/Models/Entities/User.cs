using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace API.Models.Entities
{
    public class User : IdentityUser
    {
        public string? Bio { get; set; }

        [Range(0,3)]
        public List<GameState>? GameStates { get; set; }
        public GameState? Checkpoint { get; set; }
        public GameState? ActiveGameState { get; set; }
    }
}