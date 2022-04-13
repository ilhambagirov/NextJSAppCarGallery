namespace CarCity.Application.Models
{
    public class GetCarDto
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public string Year { get; set; }
        public string KM { get; set; }
        public string Color { get; set; }
        public string ImageUrl { get; set; }
        public GetCarTypeDto CarType { get; set; }
    }
}
