using doctor.Models;
using Microsoft.EntityFrameworkCore;
using patient.Models;
using schedule.Models;
using specialty.Models;

public class ehealthdbcontext:DbContext{
public ehealthdbcontext(DbContextOptions<ehealthdbcontext> options ) : base(options) {}
 public DbSet<Doctor>DoctorsData {get;set;} 
 public DbSet<Patient>PatientsData {get;set;}
 public DbSet<Schedule>SchedulesData {get;set;}
 public DbSet<Specialty>SpecialtiesData {get;set;}
}