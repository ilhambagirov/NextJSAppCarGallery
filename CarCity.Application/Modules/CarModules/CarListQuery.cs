using AutoMapper;
using CarCity.Application.Models;
using CarCity.Domain.Entities;
using CarCity.Persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarTypeModules
{
    public class CarListQuery : IRequest<List<GetCarDto>>
    {
    }
    public class CarListQueryHandler : IRequestHandler<CarListQuery, List<GetCarDto>>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CarListQueryHandler(AppDbContext db,
            IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }
        public async Task<List<GetCarDto>> Handle(CarListQuery request, CancellationToken cancellationToken)
        {
            var response = mapper.Map<List<GetCarDto>>(await db.Cars.Include(x=>x.CarType).Where(x => x.DeletedDate == null).ToListAsync());

            return response;
        }
    }

}
