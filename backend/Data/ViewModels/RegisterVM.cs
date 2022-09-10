using System.ComponentModel.DataAnnotations;

namespace register.ViewModels{
    public class RegisterVM{
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        [Required]
        public string EmailAddress{get;set;} = string.Empty;
        [Required]
        public string UserName { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}