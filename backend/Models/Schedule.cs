using System.ComponentModel.DataAnnotations;

namespace schedule.Models{
 public class Schedule{

  [Required]
  [MaxLength(100)]
  [Key]
  public string scheduleId { get; set; } = string.Empty;
  public string DoctorName{ get; set; } = string.Empty;
   public string specialtyId { get; set; } = string.Empty;
  public string SpecialtyName { get; set; } = string.Empty;
  public DateTime Availability { get; set; }
 }
}