using doctor.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using schedule.Models;

namespace Doctors.Controllers{
 [Route("api/[Controller]")]
 [ApiController]
 public class SchedulesController : ControllerBase{
  private readonly ehealthdbcontext _context;
  public SchedulesController(ehealthdbcontext context){
   _context = context;
   _context.Database.EnsureCreated();
  }
  [HttpGet]
  public async Task<ActionResult> GetAllSchedules(){
   return Ok(await _context.SchedulesData.ToArrayAsync());
  }
  [HttpGet("{id}")]
  public async Task<ActionResult> GetSchedule(int id){
   var schedule = await _context.SchedulesData.FindAsync(id);
   if(schedule == null){
    return NotFound();
   }
   return Ok(schedule);
  }
  [HttpPost]
  public async Task<ActionResult<Schedule>> PostSchedele(Schedule schedule){
   _context.SchedulesData.Add(schedule);
   await _context.SaveChangesAsync();
   return CreatedAtAction(
    "GetDoctor",
    new{id=schedule.scheduleId},
    schedule
   );
  }
  [HttpPut("{id}")]
  public async Task<ActionResult> PutSshedule(int id,Schedule schedule){
   if(id!=schedule.scheduleId){
    return BadRequest();
   }
   _context.Entry(schedule).State = EntityState.Modified;
   try{
    await _context.SaveChangesAsync();
   }
   catch(DbUpdateConcurrencyException){
    if(!_context.SchedulesData.Any(s=>s.scheduleId == id)){
     return NotFound();
    }
    else{
     throw;
    }
   }
   return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<ActionResult<Schedule>> DeleteSchedule(int id){
   var schedule = await _context.SchedulesData.FindAsync(id);
   if(schedule == null){
    return NotFound();
   }
   _context.SchedulesData.Remove(schedule);
   await _context.SaveChangesAsync();
   return schedule;
  }

  [HttpPost]
  [Route("Delete")]
  public async Task<ActionResult> DeleteMultiple([FromQuery]int[] ids){
   var schedules = new List<Schedule>();
   foreach(var id in ids){
    var schedule = await _context.SchedulesData.FindAsync(id);
    if(schedule == null){
     return NotFound();
    }
    schedules.Add(schedule);
   }
   _context.SchedulesData.RemoveRange(schedules);
   await _context.SaveChangesAsync();
   return Ok(schedules);
  }
 }
}