using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Entities
{
    public class User
    {
        public Guid Id { get; set; }

        public string Name { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public string Password { get; set; }
        public GameState ActiveGameState { get; set; }
        [Range(0,3)]
        public List<GameState> GameStates { get; set; }
    }
}