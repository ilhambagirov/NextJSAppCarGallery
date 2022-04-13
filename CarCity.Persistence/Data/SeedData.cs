using CarCity.Domain.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarCity.Persistence.Data
{
    public static class SeedData
    {
        public async static Task<IApplicationBuilder> Seed(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();

                if (!db.Cars.Any() && !db.CarTypes.Any())
                {
                    List<Car> cars = new();

                    cars.Add(new Car { Brand = "Mercedes", Model = "W210", Year = "2010", KM = "200000", Color = "Yellow", CarTypeId = 1 });
                    cars.Add(new Car { Brand = "BMW", Model = "740", Year = "2018", KM = "55000", Color = "Blue", CarTypeId = 1 });
                    cars.Add(new Car { Brand = "Ferrari", Model = "La Ferrari", Year = "2012", KM = "20000", Color = "Red", CarTypeId = 2 });

                    List<CarType> carTypes = new();

                    carTypes.Add(new CarType { Type = "Sedan"});
                    carTypes.Add(new CarType { Type = "Super"});
                    carTypes.Add(new CarType { Type = "Suv"});

                    await db.CarTypes.AddRangeAsync(carTypes);
                    await db.SaveChangesAsync();
                    await db.Cars.AddRangeAsync(cars);
                    await db.SaveChangesAsync();
                }
                return app;
            }
        }
    }
}
