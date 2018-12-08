using Planner.ServiceInterfaces.DTO.IndividualPlan;
using System.Collections.Generic;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface IIndividualPlanService
    {
        bool UpdateTrainingJob(TrainingJobDTO trainingJobDTO);
        IEnumerable<TrainingJobDTO> GetTrainingJob(string userName);
    }
}
