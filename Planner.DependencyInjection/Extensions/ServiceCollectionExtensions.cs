using AutoMapper;
using FrameworkApp.BusinessLogic.Service;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Text;
using Planner.Data.Context;
using Planner.RepositoryInterfaces.UoW;
using Planner.RepositoryInterfaces.ObjectInterfaces;
using Planner.Data.UoW;
using Planner.Data.Repository;
using Planner.ServiceInterfaces.Interfaces;
using Planner.BusinessLogic.Service;
using System;

namespace Planner.DependencyInjection.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services, IConfiguration Configuration)
        {
            services.AddDbContext<AppDbContext>(options => options.UseSqlServer(ConfigurationExtensions.GetConnectionString(Configuration, "DefaultConnection"), x => x.MigrationsAssembly("Planner.Data")));
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddSingleton<IUserRepository, UserRepository>();
            services.AddSingleton<INdrRepository, NdrRepository>();
            services.AddSingleton<IRoleRepository, RoleRepository>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<ITokenService, TokenService>();
            services.AddTransient<IServiceFactory, ServiceFactory>();
            services.AddTransient<ISecurityService, SecurityService>();
            services.AddTransient<INdrService, NdrService>();
            


            services.AddAutoMapper(null, AppDomain.CurrentDomain.GetAssemblies());

            return services;
        }
    }
}
