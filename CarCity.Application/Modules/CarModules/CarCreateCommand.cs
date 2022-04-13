using AutoMapper;
using CarCity.Application.Models;
using CarCity.Domain.Entities;
using CarCity.Persistence.Data;
using MediatR;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarModules
{
    public class CreateCarCommand : IRequest<int>
    {
        public CreateCarDto Car { get; set; }
    }

    public class CreateCarCommandHandler : IRequestHandler<CreateCarCommand, int>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CreateCarCommandHandler(AppDbContext db,
            IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }
        public async Task<int> Handle(CreateCarCommand request, CancellationToken cancellationToken)
        {
            var response = db.Cars.Add(mapper.Map<Car>(request.Car));
            await db.SaveChangesAsync();

            return response.Entity.Id;
        }
    }
}
