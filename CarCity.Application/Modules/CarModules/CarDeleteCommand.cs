using AutoMapper;
using CarCity.Persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarModules
{
    public class CarDeleteCommand  :IRequest<Unit>
    {
        public int Id { get; set; }
    }
    public class CarGetIdQueryHandler : IRequestHandler<CarDeleteCommand, Unit>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CarGetIdQueryHandler(AppDbContext db,
            IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }
        public async Task<Unit> Handle(CarDeleteCommand request, CancellationToken cancellationToken)
        {
            var car = await db.Cars.FirstOrDefaultAsync(x=>x.Id == request.Id);
            car.DeletedDate = DateTime.Now;
            await db.SaveChangesAsync();
            return Unit.Value;
        }
    }
}
