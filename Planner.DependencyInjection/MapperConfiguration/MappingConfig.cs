using AutoMapper;
using Planner.DependencyInjection.ViewModels.User;
using Planner.Entities.Domain;
using Planner.ServiceInterfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.DependencyInjection.MapperConfiguration
{
    internal class MappingConfig : Profile
    {
        public MappingConfig()
        {
            #region dto to domain
            CreateMap<RegisterUserDTO, ApplicationUser>()
                .ForMember(s => s.Email, x => x.MapFrom(z => z.UserName));
            #endregion

            #region domail to dto
            CreateMap<ApplicationUser, UserDTO>();
            #endregion

            #region dto to view model
            CreateMap<UserDTO, UserInfoViewModel>()
                .ForMember(s => s.UserName, x => x.MapFrom(z => z.Email));
            #endregion
        }
    }
}
