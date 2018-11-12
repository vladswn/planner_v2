﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class Specialize
    {
        public Specialize()
        {
            SpecializeId = Guid.NewGuid().ToString();
        }

        public String SpecializeId { get; set; }
        public String Cipher { get; set; }

        public virtual ICollection<DayEntryLoad> DayEntryLoads { get; set; }
    }
}
