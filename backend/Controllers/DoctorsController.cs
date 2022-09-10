using doctor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using databaseContext.Data;

namespace Doctors.Controllers{
 [Route("api/[Controller]")]
 [ApiController]
 public class DoctorsController : ControllerBase{
  private readonly ehealthdbcontext _context;
  public DoctorsController(ehealthdbcontext context){
   _context = context;
   _context.Database.EnsureCreated();
  }
  [HttpGet]
  public async Task<ActionResult> GetAllDoctors(){
   return Ok(await _context.DoctorsData.ToArrayAsync());
  }
  [HttpGet("{id}")]
  public async Task<ActionResult> GetDoctor(int id){
   var doctor = await _context.DoctorsData.FindAsync(id);
   if(doctor == null){
    return NotFound();
   }
   return Ok(doctor);
  }
  [HttpPost]
  public async Task<ActionResult<Doctor>> PostDoctor(Doctor doctor){
   _context.DoctorsData.Add(doctor);
   await _context.SaveChangesAsync();
   return CreatedAtAction(
    "GetDoctor",
    new{id=doctor.doctorId},
    doctor
   );
  }
  [HttpPut("{id}")]
  public async Task<ActionResult> PutDoctor(int id,Doctor doctor){
   if(id!=doctor.doctorId){
    return BadRequest();
   }
   _context.Entry(doctor).State = EntityState.Modified;
   try{
    await _context.SaveChangesAsync();
   }
   catch(DbUpdateConcurrencyException){
    if(!_context.DoctorsData.Any(d=>d.doctorId == id)){
     return NotFound();
    }
    else{
     throw;
    }
   }
   return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult<Doctor>> DeleteDoctor(int id){
   var doctor = await _context.DoctorsData.FindAsync(id);
   if(doctor == null){
    return NotFound();
   }
   _context.DoctorsData.Remove(doctor);
   await _context.SaveChangesAsync();
   return doctor;
  }

  [HttpPost]
  [Route("Delete")]
  public async Task<ActionResult> DeleteMultiple([FromQuery]int[] ids){
   var doctors = new List<Doctor>();
   foreach(var id in ids){
    var doctor = await _context.DoctorsData.FindAsync(id);
    if(doctor == null){
     return NotFound();
    }
    doctors.Add(doctor);
   }
   _context.DoctorsData.RemoveRange(doctors);
   await _context.SaveChangesAsync();
   return Ok(doctors);
  }
 }

}