using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ToDoListAPI.EntityClasses
{
    [Table("User", Schema = "dbo")]
    public class UserBase
    {
        [Required()]
        [Key()]
        public Guid UserId { get; set; }
        [Required()]
        public string UserName { get; set; }
        [Required()]
        public string Password { get; set; }
    }
}
