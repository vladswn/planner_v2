using AutoMapper;
using Planner.Entities.Domain;
using Planner.RepositoryInterfaces.UoW;
using Planner.ServiceInterfaces.DTO;
using Planner.ServiceInterfaces.Interfaces;
using System;
using System.Collections.Generic;

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

        public IEnumerable<UserListItemDTO> GetAllUsers()
        {
            IEnumerable<ApplicationUser> users = uow.UserRepository.GetUsers();
            return _mapper.Map<IEnumerable<UserListItemDTO>>(users);
        }


        public Boolean AddOrUpdateUser(UserDTO userDTO)
        {
            //ApplicationUser user = uow.UserRepository.GetByUserName(userDTO.Email);

            ApplicationUser user = _mapper.Map<ApplicationUser>(userDTO);
            user.IsActive = true;
            user.PasswordHash = _securityService.GetSha256Hash(userDTO.Password);

            Role role = uow.RoleRepository.GetRoleByName(userDTO.RoleName);
            if (role != null)
            {
                user.Role = role;
            }

            uow.UserRepository.UpdateUser(user);

            return uow.SaveChanges() >= 0;
        }

    }
}
