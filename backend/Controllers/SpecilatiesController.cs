using doctor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using specialty.Models;
using databaseContext.Data;

namespace Doctors.Controllers{
 [Route("api/[Controller]")]
 [ApiController]
 public class SpecialtiesController : ControllerBase{
  private readonly ehealthdbcontext _context;
  public SpecialtiesController(ehealthdbcontext context){
   _context = context;
   _context.Database.EnsureCreated();
  }
  [HttpGet]
  public async Task<ActionResult> GetAllSpecilaties(){
   return Ok(await _context.SpecialtiesData.ToArrayAsync());
  }
  [HttpGet("{id}")]
  public async Task<ActionResult> GetSpecialty(int id){
   var specialty = await _context.SpecialtiesData.FindAsync(id);
   if(specialty == null){
    return NotFound();
   }
   return Ok(specialty);
  }
  [HttpPost]
  public async Task<ActionResult<Specialty>> PostSpecialty(Specialty specialty){
   _context.SpecialtiesData.Add(specialty);
   await _context.SaveChangesAsync();
   return CreatedAtAction(
    "GetDoctor",
    new{id=specialty.specialtyId},
    specialty
   );
  }
  [HttpPut("{id}")]
  public async Task<ActionResult> PutSpecialty(int id,Specialty specialty){
   if(id!=specialty.specialtyId){
    return BadRequest();
   }
   _context.Entry(specialty).State = EntityState.Modified;
   try{
    await _context.SaveChangesAsync();
   }
   catch(DbUpdateConcurrencyException){
    if(!_context.SpecialtiesData.Any(s=>s.specialtyId == id)){
     return NotFound();
    }
    else{
     throw;
    }
   }
   return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult<Specialty>> DeleteSpecialty(int id){
   var specialty = await _context.SpecialtiesData.FindAsync(id);
   if(specialty == null){
    return NotFound();
   }
   _context.SpecialtiesData.Remove(specialty);
   await _context.SaveChangesAsync();
   return specialty;
  }

  [HttpPost]
  [Route("Delete")]
  public async Task<ActionResult> DeleteMultiple([FromQuery]int[] ids){
   var specialties = new List<Specialty>();
   foreach(var id in ids){
    var specialty = await _context.SpecialtiesData.FindAsync(id);
    if(specialty == null){
     return NotFound();
    }
    specialties.Add(specialty);
   }
   _context.SpecialtiesData.RemoveRange(specialties);
   await _context.SaveChangesAsync();
   return Ok(specialties);
  }
 }
}