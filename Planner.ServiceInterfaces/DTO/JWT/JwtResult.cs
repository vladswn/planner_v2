using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.DTO.JWT
{
    public class JwtResult
    {
        public JwtToken JwtToken { get; set; }
        public String Error { get; set; }
    }
}
