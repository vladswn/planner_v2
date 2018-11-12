using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface IServiceFactory
    {
        IUserService UserService { get; }
        ITokenService TokenService { get;}
        ISecurityService SecurityService { get; }
    }
}
