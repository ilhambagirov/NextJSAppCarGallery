namespace CarCity.Application.Models
{
    public class CreateCarDto
    {
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public string KM { get; set; }
        public string Color { get; set; }
        public string ImageUrl { get; set; }
        public int CarTypeId { get; set; }
    }
}
