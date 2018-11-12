using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Planner.DependencyInjection.ViewModels.User;
using Planner.ServiceInterfaces.DTO.JWT;
using Planner.ServiceInterfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Planner.Controllers
{
    [Route("api/Token")]
    public class TokenController : GenericController
    {
    public TokenController(IServiceFactory _serviceFactory, IMapper _mapper) : base(_serviceFactory, _mapper)
    {
    }

    [HttpPost]
    [Route("CreateToken")]
    public IActionResult CreateToken([FromBody] LoginViewModel login)
    {
      JwtResult result = serviceFactory.TokenService.CreatejwtSecurityToken(login.UserName, login.Password);

      return Ok(result);
    }
  }
}
