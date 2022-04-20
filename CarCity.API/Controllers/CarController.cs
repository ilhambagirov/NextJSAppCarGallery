using CarCity.Application.Models;
using CarCity.Application.Modules.CarModules;
using CarCity.Application.Modules.CarTypeModules;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarCity.API.Controllers
{
    public class CarController : BaseApiController
    {
        [HttpGet("GetAllCars")]
        public async Task<ActionResult<List<GetCarDto>>> GetAll()
        {
            return Ok(await Mediator.Send(new CarListQuery()));
        }
        [HttpGet("GetCar/{id}")]
        public async Task<ActionResult<GetCarDto>> GetAll(int id)
        {
            return Ok(await Mediator.Send(new CarGetIdQuery { Id = id }));
        }
        [HttpPost("createCar")]
        public async Task<ActionResult<int>> Create([FromBody] CreateCarDto car)
        {
            return Ok(await Mediator.Send(new CreateCarCommand { Car = car }));
        }
        [HttpPut("updateCar/{id}")]
        public async Task<ActionResult<int>> Edit(int id, [FromBody] CreateCarDto car)
        {
            return Ok(await Mediator.Send(new CarUpdateCommand { Id = id, Car = car }));
        }
        [HttpDelete("deleteCar/{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            return Ok(await Mediator.Send(new CarDeleteCommand { Id = id }));
        }
        [HttpGet("searchCars/{word}")]
        public async Task<ActionResult> Search(string word)
        {
            return Ok(await Mediator.Send(new CarSearchQuery { Word = word }));
        }
    }
}
