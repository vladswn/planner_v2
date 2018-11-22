using Planner.ServiceInterfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface IUserService
    {
        UserDTO GetUser(String email);
        UserDTO GetUserById(String userId);
        Boolean AddOrUpdateUser(UserDTO userDTO);
        IEnumerable<UserListItemDTO> GetAllUsers();
    }
}
