using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Planner.ServiceInterfaces.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Planner.Controllers
{
  [Route("api/Token")]
  public class AccountController : GenericController
  {
    public AccountController(IServiceFactory _serviceFactory, IMapper mapper) : base(_serviceFactory, mapper)
    {
    }
  }
}
