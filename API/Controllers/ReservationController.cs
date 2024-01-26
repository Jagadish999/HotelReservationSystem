using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        public Context Context { get;}
        public EmailService EmailService { get; }
        public JwtService JwtService { get; }

        public ReservationController(Context context, EmailService emailService, JwtService jwtService)
        {
            Context = context;
            EmailService = emailService;
            JwtService = jwtService;
        }

        [HttpPost("Register")]
        public ActionResult Register(User user)
        {
            user.AccountStatus = AccountStatus.UNAPPROVED;
            user.CreatedOn = DateTime.Now;
            
            Context.Users.Add(user);
            Context.SaveChanges();

            const string subject = "Account Created";
            var body = $"""
                   <html>
                    <body>
                        <h1>Hi, {user.FirstName} {user.LastName}</h1>

                        <h2>Your account creation request has been sent to admin</h2>

                        <h2>Thanks</h2>
                    </body>
                   </html>
                """;

            EmailService.SendEmail(user.Email, subject, body);

            return Ok("Account Registered! Check Email for Verification");
        }

        [HttpGet("Login")]
        public ActionResult Login(string email, string password, string accountType)
        {
            
            if(Context.Users.Any(u => u.Email.Equals(email) && u.Password.Equals(password) && u.UserType.Equals(accountType)))
            {
                var user = Context.Users.Single(user => user.Email.Equals(email) && user.Password.Equals(password) && user.UserType.Equals(accountType));
                
                if(user.AccountStatus == AccountStatus.UNAPPROVED)
                {
                    return Ok("UNAPPROVED");
                }

                return Ok(JwtService.GenerateToken(user));
            }

            return Ok("NO ACCOUNT");
        }
    }
}
