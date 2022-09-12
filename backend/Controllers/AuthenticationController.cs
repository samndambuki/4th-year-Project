using applicationusers.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using register.ViewModels;
using databaseContext.Data;
using login.ViewModels;
using auth.ViewModels;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using refresh.Models;
using token.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace authenticate.Controllers{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthenticationController:ControllerBase{
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ehealthdbcontext _context;
        private readonly IConfiguration _configuration;
        private readonly TokenValidationParameters _tokenValidationParameters;

        public AuthenticationController(UserManager<ApplicationUser> userManager,
        RoleManager<IdentityRole> roleManager,
        ehealthdbcontext context,
        IConfiguration configuration,
        TokenValidationParameters tokenValidationParameters
    )
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _context = context;
        _configuration = configuration;
        _tokenValidationParameters = tokenValidationParameters;
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
    

    [HttpPost("login-user")]
    public async Task<IActionResult> Login([FromBody]LoginVM loginVM)
    {
        if(!ModelState.IsValid){
            return BadRequest("Please, provide all required fields");
        }

        var userExists = await _userManager.FindByEmailAsync(loginVM.EmailAddress);
        if(userExists != null && await _userManager.CheckPasswordAsync(userExists,loginVM.Password))
        {
            var tokenValue = await GenerateJWTTokenAsync(userExists,null);
            return Ok(tokenValue);
        }
        return Unauthorized();
    }

    [HttpPost("refresh-token")]
    public async Task<IActionResult> RefreshToken([FromBody]TokenRequestVM tokenRequestVM)
    {
        if(!ModelState.IsValid){
            return BadRequest("Please, provide all required fields");
        }

        var result = await VerifyAndGenerateTokenAsync(tokenRequestVM);
        return  Ok(result);
    }

        private async Task<AuthResultVM> VerifyAndGenerateTokenAsync(TokenRequestVM tokenRequestVM)
        {
           var jwtTokenHandler = new JwtSecurityTokenHandler();
           var storedToken = await _context.RefreshTokens.FirstOrDefaultAsync(x => x.Token == tokenRequestVM.RefreshToken);
           var dbUser = await _userManager.FindByIdAsync(storedToken.UserId);

        try
        {
            var tokenCheckResult = jwtTokenHandler.ValidateToken(tokenRequestVM.Token,_tokenValidationParameters,
            out var validatedToken);

            return await GenerateJWTTokenAsync(dbUser,storedToken);
        }
        catch (SecurityTokenExpiredException)
        {
            if(storedToken.DateExpired >= DateTime.UtcNow){
                return await GenerateJWTTokenAsync(dbUser,storedToken);
            }
            else{
                return await GenerateJWTTokenAsync(dbUser,null);
            }
        }
        }

        private async Task<AuthResultVM> GenerateJWTTokenAsync(ApplicationUser user,RefreshToken rToken)
        {
            var authClaims = new List<Claim>(){
                new Claim(ClaimTypes.Name,user.UserName),
                new Claim(ClaimTypes.NameIdentifier,user.Id),
                new Claim(JwtRegisteredClaimNames.Email,user.Email),
                new Claim(JwtRegisteredClaimNames.Sub,user.Email),
                new Claim(JwtRegisteredClaimNames.Jti,Guid.NewGuid().ToString())
            };
            
            var authSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_configuration["JWT:Secret"]));
            var token = new JwtSecurityToken(
                issuer:_configuration["JWT:Issuer"],
                audience:_configuration["JWT:Audience"],
                expires: DateTime.UtcNow.AddMinutes(1),
                claims:authClaims,
                signingCredentials: new SigningCredentials(authSigningKey,SecurityAlgorithms.HmacSha256)
                );

                var jwtToken = new JwtSecurityTokenHandler().WriteToken(token);

                if(rToken != null){
                     var rTokenResonse = new AuthResultVM(){
                    Token = jwtToken,
                    RefreshToken = rToken.Token,
                    ExpiresAt = token.ValidTo,
                };
                return rTokenResonse;
                }

                var refreshToken = new RefreshToken()
                {
                    JwtId = token.Id,
                    IsRevoked = false,
                    UserId = user.Id,
                    DateAdded = DateTime.UtcNow,
                    DateExpired = DateTime.UtcNow.AddMonths(6),
                    Token = Guid.NewGuid().ToString()+"-"+Guid.NewGuid().ToString()
                };

                await _context.RefreshTokens.AddAsync(refreshToken);
                await _context.SaveChangesAsync();

                var response = new AuthResultVM(){
                    Token = jwtToken,
                    RefreshToken = refreshToken.Token,
                    ExpiresAt = token.ValidTo,
                };
                return response;
        }
    }
}