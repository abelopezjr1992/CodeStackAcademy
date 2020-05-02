using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LopezAdventureBackend.Services;
using LopezAdventureBackend.Services.Context;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace LopezAdventureBackend {
    public class Startup {
        public Startup (IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices (IServiceCollection services) {
            services.AddControllers ();

            // services
            //     .AddAuthentication (opt => {
            //         opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //         opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //     })
            //     .AddJwtBearer (options => {
            //         options.TokenValidationParameters = new TokenValidationParameters {
            //         ValidateIssuer = true,
            //         ValidateAudience = true,
            //         ValidateLifetime = true,
            //         ValidateIssuerSigningKey = true,

            //         validIssuer = "http://localhost:5000",
            //         validAudience = "http://localhost:5000",
            //         IssuerSigningKey = new SymmetricSecurityKey (Encoding.UTF8.GetBytes ("superSecretKey@345"))
            //         };
            //     });

            services.AddScoped<DataServiceSql> ();

            services.AddCors (options => {
                options.AddPolicy ("CorsPolicy",
                    builder => builder.WithOrigins ("http://localhost:8100")
                    .AllowAnyHeader ()
                    .AllowAnyMethod ()
                    .AllowCredentials ());
            });

            var connectionString = Configuration.GetConnectionString ("NameOfMyConnectionString"); // from app settings
            services.AddDbContext<dataContext> (options => options.UseSqlServer (connectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure (IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment ()) {
                app.UseDeveloperExceptionPage ();
            }

            //app.UseHttpsRedirection ();
            app.UseCors("CorsPolicy");

            app.UseRouting ();

            app.UseAuthorization ();

            app.UseEndpoints (endpoints => {
                endpoints.MapControllers ();
            });
        }
    }
}