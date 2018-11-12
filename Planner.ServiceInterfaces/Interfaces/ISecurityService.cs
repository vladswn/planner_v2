using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface ISecurityService
    {
        String GetSha256Hash(String input);
    }
}
