﻿namespace API.Entities
{
    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public bool Visibility { get; set; } = false;
        public int UserId { get; set; }
        public byte[] Image { get; set; } = Array.Empty<byte>();
    }
}