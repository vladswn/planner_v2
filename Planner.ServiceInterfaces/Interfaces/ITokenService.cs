﻿using Planner.ServiceInterfaces.DTO.JWT;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface ITokenService
    {
        JwtResult CreatejwtSecurityToken(String userName, String password);
        ClaimsPrincipal GetClaims(String token);
    }
}
