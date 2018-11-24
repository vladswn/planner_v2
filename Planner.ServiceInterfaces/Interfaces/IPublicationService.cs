using Planner.ServiceInterfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface IPublicationService
    {
        IEnumerable<NmbdDTO> GetAllNmbds();
        //void UodatePublication(Publication);
    }
}
