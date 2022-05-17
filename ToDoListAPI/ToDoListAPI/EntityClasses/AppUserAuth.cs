namespace ToDoListAPI.EntityClasses
{
    public class AppUserAuth : UserAuthBase
    {
        public AppUserAuth() : base()
        {
            CanAccessToDoList = false;
            CanEditToDoList = false;
            CanAddToDoList = false;
            CanDeleteToDoList = false;
        }

        public bool CanAccessToDoList { get; set; }
        public bool CanEditToDoList { get; set; }
        public bool CanAddToDoList { get; set; }
        public bool CanDeleteToDoList { get; set; }
    }
}
