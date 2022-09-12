using System.ComponentModel.DataAnnotations;

namespace login.ViewModels{
    public class LoginVM{
      
        [Required]
        public string EmailAddress{get;set;} = string.Empty;
        
        [Required]
        public string Password { get; set; } = string.Empty;
    }
}