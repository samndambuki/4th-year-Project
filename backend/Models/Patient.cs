using System.ComponentModel.DataAnnotations;

namespace patient.Models {
 public class Patient{

  [Required]
  [MaxLength(100)]
  [Key]
  public string patientId { get; set; } = string.Empty;
  public string PatientName { get; set; } = string.Empty;
  public string PhoneNumber { get; set; } = string.Empty;
  public string  Password { get; set; } = string.Empty;
  public string Email { get; set; } = string.Empty;
  public string Gender { get; set; } = string.Empty;
  public string Location { get; set; } = string.Empty;
  
 }
}