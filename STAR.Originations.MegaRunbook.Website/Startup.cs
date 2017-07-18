using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(STAR.Originations.MegaRunbook.Website.Startup))]

namespace STAR.Originations.MegaRunbook.Website
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
