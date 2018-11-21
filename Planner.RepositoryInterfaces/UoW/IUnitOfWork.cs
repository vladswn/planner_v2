using Planner.RepositoryInterfaces.ObjectInterfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.RepositoryInterfaces.UoW
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository UserRepository { get; set; }
        IRoleRepository RoleRepository { get; set; }
        Int32 SaveChanges();
    }
}
