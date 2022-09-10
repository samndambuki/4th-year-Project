using Microsoft.AspNetCore.Identity;

namespace applicationusers.models{
    public class ApplicationUser:IdentityUser{
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Custom { get; set; } = string.Empty;

    }
}