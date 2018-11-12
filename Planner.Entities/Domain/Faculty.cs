using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class Faculty
    {
        public Faculty()
        {
            FacultyId = Guid.NewGuid().ToString();
        }

        public String FacultyId { get; set; }
        public String Name { get; set; }

        // for *.xls
        public String ShortName { get; set; }
        public virtual ICollection<Department> Departments { get; set; }
    }
}
