﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Planner.Entities.Domain
{
    public class DayTeachLoad
    {
        public DayTeachLoad()
        {
            DayTeachLoadId = Guid.NewGuid().ToString();
        }

        public String DayTeachLoadId { get; set; }

        public Int32 Semester { get; set; }
        public String Specialty { get; set; }
        public Double Course { get; set; }
        public Double Lecture { get; set; }
        public Double Practice { get; set; }
        public Double Lab { get; set; }
        public Double ConsultInSemester { get; set; }
        public Double ConsultForExam { get; set; }
        public Double WrittenWork { get; set; }
        public Double CalcWorks { get; set; }
        public Double CourseProjects { get; set; }
        public Double Evaluation { get; set; }
        public Double OralExam { get; set; }
        public Double WrittenExam { get; set; }
        public Double VerifyingOfTest { get; set; }
        public Double ManagedDiploma { get; set; }
        public Double Dek { get; set; }
        public Double VerifyingOfWrittenWorks { get; set; }
        public Double Protection { get; set; }
        public Double Total { get; set; }
        public Double Active { get; set; }

        public String SubjectId { get; set; }
        public String DayEntryLoadId { get; set; }
        public String ApplicationUserId { get; set; }

        public virtual Subject Subject { get; set; }
        public virtual DayEntryLoad DayEntryLoad { get; set; }
        // as Teacher
        public virtual ApplicationUser ApplicationUser { get; set; }
    }
}
