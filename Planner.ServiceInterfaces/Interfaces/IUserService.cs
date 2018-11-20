using Planner.ServiceInterfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.ServiceInterfaces.Interfaces
{
    public interface IUserService
    {
        UserDTO GetUser(String email);
        Boolean AddOrUpdateUser(UserDTO userDTO);
    }
}
