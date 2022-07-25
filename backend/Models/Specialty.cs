using System.ComponentModel.DataAnnotations;

namespace specialty.Models{
 public class Specialty{

  [Required]
  [MaxLength(100)]
  [Key]
  public string specialtyId { get; set; } = string.Empty;
  public string DoctorName { get; set; } = string.Empty;
  public string SpecialtyName { get; set; } = string.Empty;
 }
}