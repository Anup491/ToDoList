using System;

namespace ToDoListAPI.EntityClasses
{
    public class UserAuthBase
    {
        public UserAuthBase()
        {
            UserId = Guid.Empty;
            UserName = string.Empty;
            Token = string.Empty;
            IsAuth = false;
        }

        public Guid UserId { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
        public bool IsAuth { get; set; }
    }
}
