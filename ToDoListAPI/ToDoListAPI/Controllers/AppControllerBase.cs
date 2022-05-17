using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace ToDoListAPI.Controllers {
  public class AppControllerBase : ControllerBase {
    protected IActionResult HandleException(Exception ex, string msg) {
      return StatusCode(StatusCodes.Status500InternalServerError,  new Exception(msg, ex));
    }
  }
}
