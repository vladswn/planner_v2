using AutoMapper;
using Planner.Entities.Domain;
using Planner.RepositoryInterfaces.UoW;
using Planner.ServiceInterfaces.DTO;
using Planner.ServiceInterfaces.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.BusinessLogic.Service
{
    public class UserService : IUserService
    {
        private IUnitOfWork uow;
        private readonly IMapper _mapper;
        private ISecurityService _securityService;

        public UserService(IUnitOfWork _uow, IMapper mapper, ISecurityService securityService)
        {
            uow = _uow;
            _mapper = mapper;
            _securityService = securityService;
        }

        public UserDTO GetUser(String email)
        {
            ApplicationUser user = uow.UserRepository.GetByUserName(email);
            return _mapper.Map<UserDTO>(user);
        }

        public Boolean RegisterUser(RegisterUserDTO userDTO)
        {
            ApplicationUser user = _mapper.Map<ApplicationUser>(userDTO);
            user.IsActive = true;
            user.PasswordHash = _securityService.GetSha256Hash(userDTO.PasswordHash);

            uow.UserRepository.UpdateUser(user);

            return uow.SaveChanges() >= 0;
        }

    }
}
