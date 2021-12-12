using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models.Enums;

namespace API.Models.Helpers
{
    public class EntityStateChanges
    {
        public int UserHealthChange { get; set; }
        public int UserManaChange { get; set; }
        public int FoeHealthChange { get; set; }
        public int FoeManaChange { get; set; }
        public StatusCondition UserStatusConditionAdd { get; set; }
        public StatusCondition UserStatusConditionRemove { get; set; }
        public StatusCondition FoeStatusConditionAdd { get; set; }
        public StatusCondition FoeStatusConditionRemove { get; set; }

        public EntityStateChanges(
            int uhc = 0,
            int umc = 0,
            int fhc = 0,
            int fmc = 0,
            StatusCondition usa = StatusCondition.NullStatusCondition,
            StatusCondition usr = StatusCondition.NullStatusCondition,
            StatusCondition fsa = StatusCondition.NullStatusCondition,
            StatusCondition fsr = StatusCondition.NullStatusCondition)
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