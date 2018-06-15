using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class LoginController : ApiController
    {
        [HttpPost]
        [Route("api/Login")]
        public IHttpActionResult Login(Login login)
        {
            var isLoggedin = false;
            if (login.UserName == "admin" && login.Password == "admin")
                isLoggedin = true;
            return Ok(isLoggedin);

        }
    }
}
