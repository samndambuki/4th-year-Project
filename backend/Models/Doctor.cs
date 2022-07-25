using System.ComponentModel.DataAnnotations;

namespace doctor.Models{
 public class Doctor{

  [Required]
  [MaxLength(100)]
  [Key]
  public string doctorId { get; set; } = string.Empty;
  public  string DoctorName { get; set; } = string.Empty;
  public string Email { get; set; } = string.Empty;
  public string PhoneNumber { get; set; } = string.Empty;
  public string specialtyId { get; set; } = string.Empty;
  public string  SpecialtyName { get; set; } = string.Empty;
  public DateTime  Availability { get; set; }

 }
}