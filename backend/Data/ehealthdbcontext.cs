using doctor.Models;
using Microsoft.EntityFrameworkCore;
using patient.Models;
using schedule.Models;
using specialty.Models;

public class ehealthdbcontext:DbContext{
 public DbSet<Doctor>Doctors {get;set;} 
 public DbSet<Patient>Patients {get;set;}
 public DbSet<Schedule>Schedules {get;set;}
 public DbSet<Specialty>Specialties {get;set;}

 protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlServer(
   "Server=(localdb)\\MSSQLLocalDB;Database=clockingdb;Integrated Security=true"
   );

}