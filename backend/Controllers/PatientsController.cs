using doctor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using patient.Models;

namespace Doctors.Controllers{
 [Route("api/[Controller]")]
 [ApiController]
 public class PatientsController : ControllerBase{
  private readonly ehealthdbcontext _context;
  public PatientsController(ehealthdbcontext context){
   _context = context;
   _context.Database.EnsureCreated();
  }
  [HttpGet]
  public async Task<ActionResult> GetAllPatinets(){
   return Ok(await _context.PatientsData.ToArrayAsync());
  }
  [HttpGet("{id}")]
  public async Task<ActionResult> GetPatient(int id){
   var patient = await _context.PatientsData.FindAsync(id);
   if(patient == null){
    return NotFound();
   }
   return Ok(patient);
  }
  [HttpPost]
  public async Task<ActionResult<Patient>> PostPatinet(Patient patient){
   _context.PatientsData.Add(patient);
   await _context.SaveChangesAsync();
   return CreatedAtAction(
    "GetPatient",
    new{id=patient.patientId},
    patient
   );
  }
  [HttpPut("{id}")]
  public async Task<ActionResult> PutPatient(int id,Patient patient){
   if(id!=patient.patientId){
    return BadRequest();
   }
   _context.Entry(patient).State = EntityState.Modified;
   try{
    await _context.SaveChangesAsync();
   }
   catch(DbUpdateConcurrencyException){
    if(!_context.PatientsData.Any(p=>p.patientId == id)){
     return NotFound();
    }
    else{
     throw;
    }
   }
   return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult<Patient>> DeletePatient(int id){
   var patient = await _context.PatientsData.FindAsync(id);
   if(patient == null){
    return NotFound();
   }
   _context.PatientsData.Remove(patient);
   await _context.SaveChangesAsync();
   return patient;
  }

  [HttpPost]
  [Route("Delete")]
  public async Task<ActionResult> DeleteMultiple([FromQuery]int[] ids){
   var patients = new List<Patient>();
   foreach(var id in ids){
    var patient = await _context.PatientsData.FindAsync(id);
    if(patient == null){
     return NotFound();
    }
    patients.Add(patient);
   }
   _context.PatientsData.RemoveRange(patients);
   await _context.SaveChangesAsync();
   return Ok(patients);
  }
 }

}