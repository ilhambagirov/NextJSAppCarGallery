using AutoMapper;
using CarCity.Application.Models;
using CarCity.Persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarTypeModule
{
    public class CarTypeListQuery : IRequest<List<GetCarTypeDto>>
    {
    }
    public class CarListQueryHandler : IRequestHandler<CarTypeListQuery, List<GetCarTypeDto>>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CarListQueryHandler(AppDbContext db,
            IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }
        public async Task<List<GetCarTypeDto>> Handle(CarTypeListQuery request, CancellationToken cancellationToken)
        {
            var response = mapper.Map<List<GetCarTypeDto>>(await db.CarTypes.Where(x => x.DeletedDate == null).ToListAsync());

            return response;
        }
    }
}