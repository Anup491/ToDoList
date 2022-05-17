using System;

namespace ToDoListAPI.Models
{
    public class Tasks
    {
        public int TaskId { get; set; }
        
        public DateTime DateUpdated { get; set; }

        public string Description { get; set; }

        public bool Status { get; set; }
    }
}
