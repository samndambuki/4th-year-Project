using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using applicationusers.models;

namespace refresh.Models{
    public class RefreshToken{
        [Key]
        public int Id { get; set; }
        public string Token { get; set; }
        public string JwtId { get; set; }
        public bool IsRevoked { get; set; }
        public DateTime DateAdded { get; set; }
        public DateTime DateExpired { get; set; }
        public string UserId { get; set; }
        
        [ForeignKey(nameof(UserId))]
        public ApplicationUser User{ get; set; }
    }
}