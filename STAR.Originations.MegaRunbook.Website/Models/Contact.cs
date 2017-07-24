
namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class Contact
    {
        public int Id { get; set; }
        public int? UserId { get; set; }

        public string DisplayName { get; set; }
        public string PhoneNumber { get; set; }
        public string Availability { get; set; }
        public string BlockType { get; set; }
        public string UserRole { get; set; }
        public string UserRoleDescription { get; set; }

        public bool IsOnline { get; set; }
    }
}