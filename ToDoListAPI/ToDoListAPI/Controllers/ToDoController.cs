using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data.SqlClient;
using System.Data;
using ToDoListAPI.Models;

namespace ToDoListAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ToDoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"Select [TaskId], [Description], [Status], [DateUpdated] from dbo.Tasks";
            DataTable dt = new DataTable();
            string sqlSource = _configuration.GetConnectionString("ToDoAppCon");
            SqlDataReader reader;
            using (SqlConnection myConn = new SqlConnection(sqlSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    reader = myCommand.ExecuteReader();
                    dt.Load(reader);
                    reader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult(dt);
        }


        [HttpPost]
        public JsonResult Post(Tasks tasks)
        {
            string query = @"Insert into dbo.Tasks values 
                    (
                    '" + tasks.Description + @"'
                    ,'" + tasks.Status + @"'
                    , GetDate())";
            DataTable dt = new DataTable();
            string sqlSource = _configuration.GetConnectionString("ToDoAppCon");
            SqlDataReader reader;
            using (SqlConnection myCon = new SqlConnection(sqlSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    reader = myCommand.ExecuteReader();
                    dt.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("To Do List Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Tasks dep)
        {
            string query = @"Update dbo.Tasks Set 
                    Description = '" + dep.Description + @"'
                    ,Status = '" + dep.Status + @"'
                    ,DateUpdated = GetDate()
                    Where TaskId = " + dep.TaskId + @"";
            DataTable dt = new DataTable();
            string sqlSource = _configuration.GetConnectionString("ToDoAppCon");
            SqlDataReader reader;
            using (SqlConnection myCon = new SqlConnection(sqlSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    reader = myCommand.ExecuteReader();
                    dt.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("To Do List Updated Successfully");
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"Delete from dbo.Tasks Where TaskId = " + id + @"";
            DataTable dt = new DataTable();
            string sqlSource = _configuration.GetConnectionString("ToDoAppCon");
            SqlDataReader reader;
            using (SqlConnection myCon = new SqlConnection(sqlSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    reader = myCommand.ExecuteReader();
                    dt.Load(reader);
                    reader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Deleted Item Successfully");
        }
    }
}