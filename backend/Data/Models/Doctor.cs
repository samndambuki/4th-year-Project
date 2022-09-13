using System.ComponentModel.DataAnnotations;

namespace doctor.Models{
 public class Doctor{

  [Key]
  public int doctorId { get; set; } 
  public  string DoctorName { get; set; } = string.Empty;
  public string Email { get; set; } = string.Empty;
  public string PhoneNumber { get; set; } = string.Empty;
  public int specialtyId { get; set; } 
  public string  SpecialtyName { get; set; } = string.Empty;
  public string facility { get; set; } = string.Empty;
 }
}