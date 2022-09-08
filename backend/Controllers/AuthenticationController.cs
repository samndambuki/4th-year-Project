using applicationusers.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using register.ViewModels;

namespace authenticate.Controllers{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthenticationController:ControllerBase{
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ehealthdbcontext _context;
        private readonly IConfiguration _configuration;

        public AuthenticationController(UserManager<ApplicationUser> userManager,
        RoleManager<IdentityRole> roleManager,
        ehealthdbcontext context,
        IConfiguration configuration
    )
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _context = context;
        _configuration = configuration;
    }

    [HttpPost("register-user")]
    public async Task<IActionResult> Register([FromBody]RegisterVM registerVM){
        if(!ModelState.IsValid){
            return BadRequest("Please,provide all required fields");
        }
        var userExists = await _userManager.FindByEmailAsync(registerVM.EmailAddress);
        if(userExists!=null){
            return BadRequest($"User{registerVM.EmailAddress} already exists");
        }

        ApplicationUser newUser = new ApplicationUser(){
            FirstName = registerVM.FirstName,
            LastName = registerVM.LastName,
            Email = registerVM.EmailAddress,
            UserName = registerVM.UserName,
            SecurityStamp = Guid.NewGuid().ToString()
        };

        var result = await _userManager.CreateAsync(newUser,registerVM.Password);

        if(result.Succeeded) return Ok("User Created");
        return BadRequest("User could not be created");
    }
    }
}