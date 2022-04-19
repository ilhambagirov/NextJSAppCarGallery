using AutoMapper;
using CarCity.Application.Models;
using CarCity.Persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarModules
{
    public class CarUpdateCommand : IRequest<Unit>
    {
        public int Id { get; set; }
        public CreateCarDto Car { get; set; }
    }

    public class CarUpdateCommandHandler : IRequestHandler<CarUpdateCommand, Unit>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CarUpdateCommandHandler(AppDbContext db,
          IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
            this.mapper = mapper;
            this.db = db;
        }
        public async Task<Unit> Handle(CarUpdateCommand request, CancellationToken cancellationToken)
        {
            var car = await db.Cars.FirstOrDefaultAsync(x => x.Id == request.Id);
            var updatedCar = mapper.Map(request.Car, car);
            updatedCar.UpdatedDate = DateTime.Now;
            db.Cars.Update(updatedCar);
            await db.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
