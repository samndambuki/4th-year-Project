using System.ComponentModel.DataAnnotations;

namespace specialty.Models{
 public class Specialty{
  [Key]
  public int specialtyId { get; set; } 
  public int doctorId { get; set; } 
  public string DoctorName { get; set; } = string.Empty;
  public string SpecialtyName { get; set; } = string.Empty;
 }
}