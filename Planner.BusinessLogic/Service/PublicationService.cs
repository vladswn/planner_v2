using AutoMapper;
using Planner.RepositoryInterfaces.UoW;
using Planner.ServiceInterfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Planner.ServiceInterfaces.DTO;

namespace Planner.BusinessLogic.Service
{
    public class PublicationService: IPublicationService
    {
        private IUnitOfWork uow;
        private readonly IMapper _mapper;

        public PublicationService(IUnitOfWork _uow, IMapper mapper)
        {
            uow = _uow;
            _mapper = mapper;
        }

        public IEnumerable<NmbdDTO> GetAllNmbds()
        {
            IEnumerable<NmbdDTO> nmbds = _mapper.Map<IEnumerable<NmbdDTO>>( uow.NMBDRepository.GetAllNMBD());
            return nmbds;
        }
    }
}
