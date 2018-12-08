using System.Collections.Generic;
using AutoMapper;
using Planner.ServiceInterfaces.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Planner.ServiceInterfaces.DTO.IndividualPlan;
using Microsoft.AspNetCore.Hosting;
using Planner.DependencyInjection.ViewModels.IndividualPlan;

namespace Planner.Controllers
{
  [Route("api/IndividualPlan")]
  public class IndividualPlanController : GenericController
  {
    IHostingEnvironment hostingEnvironment;
    public IndividualPlanController(IServiceFactory _serviceFactory, IMapper mapper, IHostingEnvironment _hostingEnvironment) : base(_serviceFactory, mapper)
    {
      hostingEnvironment = _hostingEnvironment;
    }

    [HttpPost]
    [Route("UpdateTrainingJob")]
    public IActionResult UpdateTrainingJob([FromBody] TrainingJobViewModel trainingJobDTO)
    {
      bool result = serviceFactory.IndividualPlanService.UpdateTrainingJob(_mapper.Map<TrainingJobDTO>(trainingJobDTO));
      return Ok(result);
    }

    [HttpGet]
    [Route("GetTrainingJob")]
    public IActionResult GetTrainingJob()
    {
      IEnumerable<TrainingJobDTO> trainingJob = serviceFactory.IndividualPlanService.GetTrainingJob(UserInfo().UserName);
      IEnumerable<TrainingJobViewModel> trainingJobModel = _mapper.Map<IEnumerable<TrainingJobViewModel>>(trainingJob);
      return Ok(trainingJobModel);
    }
  }
}
