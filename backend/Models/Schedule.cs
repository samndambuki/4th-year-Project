using System.ComponentModel.DataAnnotations;

namespace schedule.Models{
 public class Schedule{
  [Key]
  public int scheduleId { get; set; }
   public int doctorId { get; set; } 
  public string DoctorName{ get; set; } = string.Empty;
   public int specialtyId { get; set; }
  public string SpecialtyName { get; set; } = string.Empty;
  public DateTime Availability { get; set; }
 }
}