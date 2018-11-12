using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class ExternalCollaborator
    {
        public ExternalCollaborator()
        {
            ExternalCollaboratorId = Guid.NewGuid().ToString();
        }

        public String ExternalCollaboratorId { get; set; }
        public String Name { get; set; }
    }
}
