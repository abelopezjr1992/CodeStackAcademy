using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using LopezAdventureBackend.Models;
using LopezAdventureBackend.Services;
using LopezAdventureBackend.Services.Context;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace LopezAdventureBackend.Controllers {
    [Route ("auth")]
    [ApiController]
    public class AuthController : ControllerBase {
        private readonly dataContext _context;

        public AuthController (dataContext context) {
            _context = context;
        }

        [HttpPost, Route ("login")]
        public IActionResult Login ([FromBody] loginPlayer user) {
            
            var verifiedUser = _context.loginPlayerSQL.SingleOrDefault (u => u.Username == user.Username && u.Password == user.Password);
            if (verifiedUser != null) {
                var secretKey = new SymmetricSecurityKey (Encoding.UTF8.GetBytes ("superSecretKey@345"));
                var signinCredentials = new SigningCredentials (secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken (
                    issuer: "http://localhost:5000",
                    audience: "http://localhost:5000",
                    claims : new List<Claim> (),
                    expires : DateTime.Now.AddMinutes (10),
                    signingCredentials : signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler ().WriteToken (tokeOptions);
                return Ok (new { Token = tokenString });
            } else {
                return Unauthorized ();
            }
        }
    }
}