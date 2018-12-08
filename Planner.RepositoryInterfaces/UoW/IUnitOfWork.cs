using Planner.RepositoryInterfaces.ObjectInterfaces;
using System;

namespace Planner.RepositoryInterfaces.UoW
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository UserRepository { get; set; }
        IRoleRepository RoleRepository { get; set; }
        INdrRepository NdrRepository { get; set; }
        INMBDRepository NMBDRepository { get; set; }
        IPublicationRepositpry PublicationRepositpry { get; set; }
        IIndividualPlanRepository IndividualPlanRepository { get; set; }
        Int32 SaveChanges();
    }
}
