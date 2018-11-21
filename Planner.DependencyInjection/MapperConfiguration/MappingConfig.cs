using AutoMapper;
using Planner.DependencyInjection.ViewModels.User;
using Planner.Entities.Domain;
using Planner.Entities.Enums;
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
            CreateMap<UserDTO, ApplicationUser>()
                .ForMember(s => s.Email, x => x.MapFrom(z => z.Email))
                .ForMember(s => s.UserName, x => x.MapFrom(z => z.Email))
                .ForMember(s => s.DegreeId , x => x.MapFrom(z => z.Degree))
                .ForMember(s => s.PositionId , x => x.MapFrom(z => z.Position))
                .ForMember(s => s.AcademicTitleId , x => x.MapFrom(z => z.AcademicTitle));
            #endregion

            #region domail to dto
            CreateMap<ApplicationUser, UserDTO>()
                 .ForMember(s => s.AcademicTitle, x => x.MapFrom(z => z.AcademicTitleId))
                 .ForMember(s => s.Degree, x => x.MapFrom(z => z.DegreeId))
                 .ForMember(s => s.Position, x => x.MapFrom(z => z.PositionId))
                 .ForMember(s => s.RoleName, x => x.MapFrom(z => z.Role.Name))
                 .ForMember(s => s.AcademicTitleViewMode, x => x.MapFrom(z => z.AcademicTitleId.HasValue ? z.AcademicTitleId.Value.GetDescription() : null))
                 .ForMember(s => s.DegreeViewMode, x => x.MapFrom(z => z.DegreeId.HasValue ? z.DegreeId.Value.GetDescription() : null))
                 .ForMember(s => s.PositionViewMode, x => x.MapFrom(z => z.PositionId.HasValue ? z.PositionId.Value.GetDescription() : null));

            CreateMap<ApplicationUser, UserListItemDTO>()
                .ForMember(s => s.FullName, x => x.MapFrom(z => $"{z.LastName} {z.FirstName} {z.ThirdName}"));
            #endregion

            #region dto to view model
            CreateMap<UserDTO, UserInfoViewModel>();
            CreateMap<UserListItemDTO, UserListItemViewModel>();

            //.ForMember(s => s.UserName, x => x.MapFrom(z => z.Email));
            #endregion

            #region   view model to dto
            CreateMap<UserInfoViewModel,UserDTO>();

            //.ForMember(s => s.UserName, x => x.MapFrom(z => z.Email));
            #endregion
        }
    }
}
