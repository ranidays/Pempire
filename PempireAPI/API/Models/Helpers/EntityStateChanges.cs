using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Helpers
{
    public class EntityStateChanges
    {
        public int UserHealthChange { get; set; }
        public int UserManaChange { get; set; }
        public int FoeHealthChange { get; set; }
        public int FoeManaChange { get; set; }
        public string? UserStatusConditionAdd { get; set; }
        public string? UserStatusConditionRemove { get; set; }
        public string? FoeStatusConditionAdd { get; set; }
        public string? FoeStatusConditionRemove { get; set; }

        public EntityStateChanges(
            int uhc = 0,
            int umc = 0,
            int fhc = 0,
            int fmc = 0,
            string? usa = null,
            string? usr = null,
            string? fsa = null,
            string? fsr = null)
        {
            UserHealthChange = uhc;
            UserManaChange = umc;
            FoeHealthChange = fhc;
            FoeManaChange = fmc;
            UserStatusConditionAdd = usa;
            UserStatusConditionRemove = usr;
            FoeStatusConditionAdd = fsa;
            FoeStatusConditionRemove = fsr;
        }
    }
}