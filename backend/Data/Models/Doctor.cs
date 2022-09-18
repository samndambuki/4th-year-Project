using System.ComponentModel.DataAnnotations;

namespace doctor.Models{
 public class Doctor{

  [Key]
  public int doctorId { get; set; } 
  public  string DoctorName { get; set; } = string.Empty;
  public string Email { get; set; } = string.Empty;
  public string PhoneNumber { get; set; } = string.Empty;
  public string Gender { get; set; } = string.Empty;
  public string Facility { get; set; } = string.Empty;
  public string FacilityLocation {get;set;} = string.Empty;
 }
}