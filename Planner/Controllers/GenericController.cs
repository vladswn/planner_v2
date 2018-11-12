using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Planner.ServiceInterfaces.Interfaces;
using AutoMapper;
using Planner.DependencyInjection.ViewModels.User;
using System.Security.Claims;
using System.Net.Http.Headers;
using Microsoft.Net.Http.Headers;

namespace Planner.Controllers
{
  public class GenericController : Controller
  {
    public readonly IServiceFactory serviceFactory;
    public readonly IMapper _mapper;
    public GenericController(IServiceFactory _serviceFactory, IMapper mapper)
    {
      serviceFactory = _serviceFactory;
      _mapper = mapper;
    }


    public UserClaimsViewModel UserInfo()
    {
      return new UserClaimsViewModel
      {
        UserName = GetClaims().Identity.Name,
        UserRole = GetClaims().Claims.Where(c => c.Type == ClaimTypes.Role).FirstOrDefault().Value
      };
    }

    private ClaimsPrincipal GetClaims()
    {
      AuthenticationHeaderValue authenticationHeaderValue = AuthenticationHeaderValue.Parse(Request.Headers[HeaderNames.Authorization]);
      ClaimsPrincipal claims = serviceFactory.TokenService.GetClaims(authenticationHeaderValue.Parameter);
      return claims;
    }
  }
}
