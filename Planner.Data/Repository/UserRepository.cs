using Microsoft.EntityFrameworkCore;
using Planner.Data.BaseRepository;
using Planner.Data.Context;
using Planner.Entities.Domain;
using Planner.RepositoryInterfaces.ObjectInterfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Planner.Data.Repository
{
    public class UserRepository : BaseRepository<ApplicationUser>, IUserRepository
    {
        public UserRepository(AppDbContext _context) : base(_context)
        {
        }

        public ApplicationUser GetByUserName(String userName)
        {
            return Query.AsNoTracking().Include(s=> s.Role)
                        .Where(s => s.Email == userName).FirstOrDefault();
        }

        public ApplicationUser GetByUserId(String userId)
        {
            return Query.Include(s => s.Role)
                        .Where(s => s.ApplicationUserId == userId).FirstOrDefault();
        }


        public ApplicationUser GetUser(String userName, String password)
        {
            return Query.Include(s=> s.Role)
                        .Where(s => s.Email == userName && s.PasswordHash == password && s.IsActive).FirstOrDefault();
        }

        public IEnumerable<ApplicationUser> GetUsers()
        {
            return Query.OrderBy(s=> s.LastName).ThenBy(x=> x.FirstName).ToList();
        }

        public void UpdateUser(ApplicationUser user)
        {
            InsertOrUpdateGraph(user);
        }
    }
}
