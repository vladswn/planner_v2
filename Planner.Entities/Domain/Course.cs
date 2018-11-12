using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class Course
    {
        public Course()
        {
            CourseId = Guid.NewGuid().ToString();
        }

        public String CourseId { get; set; }
        public String Literal { get; set; }

        public virtual ICollection<DayEntryLoad> DayEntryLoads { get; set; }
    }
}
