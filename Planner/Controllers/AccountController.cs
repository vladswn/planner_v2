using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Planner.ServiceInterfaces.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Planner.ServiceInterfaces.DTO;
using Planner.DependencyInjection.ViewModels.User;

namespace Planner.Controllers
{
  [Route("api/Account")]
  public class AccountController : GenericController
  {
    public AccountController(IServiceFactory _serviceFactory, IMapper mapper) : base(_serviceFactory, mapper)
    {
    }

        [HttpGet]
        [Route("GetUserInfo")]
        public IActionResult GetUserInfo()
        {
          UserDTO user = serviceFactory.UserService.GetUser(UserInfo().UserName);
          UserInfoViewModel userInfo = _mapper.Map<UserInfoViewModel>(user);
          return Ok(userInfo);
        }

        [HttpPost]
        [Route("RegisterUser")]
        public IActionResult RegisterUser([FromBody] RegisterUserDTO registerUserDTO)
        {
          Boolean result = serviceFactory.UserService.RegisterUser(registerUserDTO);
          return Ok(result);
        }
  }
}
