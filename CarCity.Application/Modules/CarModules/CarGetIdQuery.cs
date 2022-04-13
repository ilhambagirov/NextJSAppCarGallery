using AutoMapper;
using CarCity.Application.Models;
using CarCity.Persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarTypeModules
{
    public class CarGetIdQuery: IRequest<GetCarDto>
    {
        public int Id { get; set; }
    }
    public class CarGetIdQueryHandler : IRequestHandler<CarGetIdQuery, GetCarDto>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CarGetIdQueryHandler(AppDbContext db,
            IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }
        public async Task<GetCarDto> Handle(CarGetIdQuery request, CancellationToken cancellationToken)
        {
            var response = mapper.Map<GetCarDto>(await db.Cars.Include(x => x.CarType).FirstOrDefaultAsync(x => x.DeletedDate == null && x.Id == request.Id)) ;

            return response;
        }
    }
}
