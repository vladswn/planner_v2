using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class NMBD
    {
        public String NMBDId { get; set; }
        public String Name { get; set; }
        public virtual ICollection<PublicationNMBD> PublicationNMBDs { get; set; }
    }
}
