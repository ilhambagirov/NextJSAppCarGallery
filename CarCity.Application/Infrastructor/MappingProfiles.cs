using AutoMapper;
using CarCity.Application.Models;
using CarCity.Domain.Entities;

namespace CarCity.Application.Infrastructor
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<Car, GetCarDto>().ReverseMap();
            CreateMap<CarType, GetCarTypeDto>().ReverseMap();
            CreateMap<Car, CreateCarDto>().ReverseMap();
        }
    }
}
