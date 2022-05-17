using Microsoft.EntityFrameworkCore;
using ToDoListAPI.EntityClasses;

namespace ToDoListAPI.Models
{
    public class LogInDbContext : DbContext
    {
        public LogInDbContext(DbContextOptions<LogInDbContext> options) : base(options) { }

        public DbSet<UserBase> Users { get; set; }
        public DbSet<UserClaim> Claims { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}