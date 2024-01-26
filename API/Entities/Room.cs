namespace API.Entities
{
    public class Room
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        public byte[] Image { get; set; } = Array.Empty<byte>();
        public string Description { get; set; } = string.Empty;
        public string RoomType { get; set; } = string.Empty;
    }
}
