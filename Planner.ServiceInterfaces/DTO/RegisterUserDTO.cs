using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.DTO
{
    public class RegisterUserDTO
    {
        public String Name { get; set; }
        public String LastName { get; set; }
        public String Email { get; set; }

        public String Password { get; set; }
        public Int32 RoleId { get; set; }
    }

}
