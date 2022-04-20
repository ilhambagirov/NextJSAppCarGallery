using AutoMapper;
using CarCity.Application.Models;
using CarCity.Persistence.Data;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CarCity.Application.Modules.CarModules
{
    public class CarSearchQuery : IRequest<List<GetCarDto>>
    {
        public string Word { get; set; }
    }
    public class CarSearchQueryHandler : IRequestHandler<CarSearchQuery, List<GetCarDto>>
    {
        private readonly AppDbContext db;
        private readonly IMapper mapper;

        public CarSearchQueryHandler(AppDbContext db,
            IMapper mapper)
        {
            this.db = db;
            this.mapper = mapper;
        }
        public async Task<List<GetCarDto>> Handle(CarSearchQuery request, CancellationToken cancellationToken)
        {
            if (String.IsNullOrWhiteSpace(request.Word)) return null;
           
            var response = mapper.Map<List<GetCarDto>>(await db.Cars
                .Where(x => x.DeletedDate == null && x.Brand.StartsWith(request.Word) ||
                x.Model.StartsWith(request.Word) && x.DeletedDate == null).ToListAsync());

            return response;
        }
    }
}
