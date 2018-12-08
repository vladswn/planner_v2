using AutoMapper;
using Planner.Entities.Domain;
using Planner.RepositoryInterfaces.UoW;
using Planner.ServiceInterfaces.DTO.IndividualPlan;
using Planner.ServiceInterfaces.Interfaces;
using System.Collections.Generic;

namespace Planner.BusinessLogic.Service
{
    public class IndividualPlanService : IIndividualPlanService
    {
        private IUnitOfWork _uow;
        private readonly IMapper _mapper;
        private ISecurityService _securityService;

        public IndividualPlanService(IUnitOfWork uow, IMapper mapper, ISecurityService securityService)
        {
            _uow = uow;
            _mapper = mapper;
            _securityService = securityService;
        }

        bool IIndividualPlanService.UpdateTrainingJob(TrainingJobDTO trainingJobDTO)
        {
            PlanTrainingJob trainingJob = _mapper.Map<PlanTrainingJob>(trainingJobDTO);
            _uow.IndividualPlanRepository.UpdateTrainingJob(trainingJob);

            return _uow.SaveChanges() >= 0;
        }

        IEnumerable<TrainingJobDTO> IIndividualPlanService.GetTrainingJob(string userName)
        {
            IEnumerable<PlanTrainingJob> trainingJob = _uow.IndividualPlanRepository.GetTrainingJob(userName);
            return _mapper.Map<IEnumerable<TrainingJobDTO>>(trainingJob);
        }
    }
}
