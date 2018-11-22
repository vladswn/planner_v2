using Planner.Data.Context;
using Planner.Data.Repository;
using Planner.RepositoryInterfaces.ObjectInterfaces;
using Planner.RepositoryInterfaces.UoW;
using System;

namespace Planner.Data.UoW
{
    public class UnitOfWork : IUnitOfWork
    {
        private AppDbContext context;

        public IUserRepository UserRepository { get; set; }
        public IRoleRepository RoleRepository { get; set; }
        public INdrRepository NdrRepository { get; set; }

        public UnitOfWork(AppDbContext _context)
        {
            context = _context;

            UserRepository = new UserRepository(_context);
            RoleRepository = new RoleRepository(_context);
            NdrRepository = new NdrRepository(_context);
        }

        public Int32 SaveChanges()
        {
            return context.SaveChanges();
        }

        public void Dispose()
        {
            context.Dispose();
        }
    }
}
