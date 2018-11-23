﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.DTO
{
    public class UserListItemDTO
    {
        public String ApplicationUserId { get; set; }
        public String Email { get; set; }
        public String FullName { get; set; }
        public Boolean IsActive { get; set; }
    }
}
