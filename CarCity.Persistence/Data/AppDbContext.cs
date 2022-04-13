using CarCity.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CarCity.Persistence.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Car> Cars { get; set; }
        public DbSet<CarType> CarTypes { get; set; }
    }
}
