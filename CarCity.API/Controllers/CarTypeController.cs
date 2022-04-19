using CarCity.Application.Models;
using CarCity.Application.Modules.CarTypeModule;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CarCity.API.Controllers
{
    public class CarTypeController : BaseApiController
    {
        [HttpGet("GetAllCarTypes")]
        public async Task<ActionResult<List<GetCarTypeDto>>> GetAll()
        {
            return Ok(await Mediator.Send(new CarTypeListQuery()));
        }
    }
}
