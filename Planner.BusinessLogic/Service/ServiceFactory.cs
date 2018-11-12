using Planner.ServiceInterfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.BusinessLogic.Service
{
    public class ServiceFactory : IServiceFactory
    {
        public IUserService UserService { get; }
        public ITokenService TokenService { get; }
        public ISecurityService SecurityService { get; }

        public ServiceFactory(IUserService _userService, ITokenService _tokenService,
            ISecurityService _securityService)
        {
            UserService = _userService;
            TokenService = _tokenService;
            SecurityService = _securityService;
        }


    }
}
