using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.DTO
{
    public class UserDTO
    {
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public String ThirdName { get; set; }
        public String ScholarLink { get; set; }
        public String OrcidLink { get; set; }
        public String DegreeViewMode { get; set; }
        public String PositionViewMode { get; set; }
        public String AcademicTitleViewMode { get; set; }
        public Int32? Degree { get; set; }
        public Int32? Position { get; set; }
        public Int32? AcademicTitle { get; set; }
        public String Email { get; set; }
        public String UserName { get; set; }
        public String Role { get; set; }
    }
}
