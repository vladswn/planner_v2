using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class Rate
    {
        public Rate()
        {
            RateId = Guid.NewGuid().ToString();
        }

        public String RateId { get; set; }
        public Double Value { get; set; }
        public virtual ICollection<DepartmentUser> DepartmentUsers { get; set; }
    }
}
