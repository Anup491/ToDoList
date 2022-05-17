using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoListAPI.EntityClasses;
using ToDoListAPI.Manager;
using ToDoListAPI.Models;

namespace ToDoListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityController : ControllerBase
    {
        public SecurityController(LogInDbContext context)
        {
            _LogInDbContext = context;
        }
        private readonly LogInDbContext _LogInDbContext;

        [HttpPost("Login")]
        public IActionResult Login([FromBody] AppUser user)
        {
            IActionResult result = null;
            AppUserAuth auth = new AppUserAuth();
            SecurityManager mgr = new SecurityManager(_LogInDbContext, auth);

            auth = (AppUserAuth)mgr.ValidateUser(user.UserName, user.Password);
            if (auth.IsAuth)
            {
                result = StatusCode(StatusCodes.Status200OK, auth);
            }
            else
            {
                result = StatusCode(StatusCodes.Status404NotFound, "Invalid User Name or Password. Please check.");
            }
            return result;
        }
    }
}