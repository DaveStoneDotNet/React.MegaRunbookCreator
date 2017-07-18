using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using STAR.Originations.MegaRunbook.Website.Models;

namespace STAR.Originations.MegaRunbook.Website
{
    public class ReleaseHub : Hub
    {
        public void Hello()
        {
            var o = this.Clients.All.hello();
            System.Diagnostics.Debug.WriteLine("OK");
        }

        private static int counter = 0;

        public void Send(string message)
        {
            ReleaseHub.counter = ReleaseHub.counter + 1;

            var lineData = new List<LineData>
            {
                new LineData { xname = " ", uv = 4000, pv = 2400, amt = 2400 },
                new LineData { xname = " ", uv = 3000, pv = 1398, amt = 2210 },
                new LineData { xname = " ", uv = 2000, pv = 9800, amt = 2290 },
                new LineData { xname = " ", uv = 2780, pv = 3908, amt = 2000 },
                new LineData { xname = " ", uv = 1890, pv = 4800, amt = 2181 },
                new LineData { xname = " ", uv = 2390, pv = 3800, amt = 2500 },
                new LineData { xname = " ", uv = 3490, pv = 4300, amt = 2100 },
            };

            var pieData = new List<PieData>
            {
                new PieData { key = "A", name = "A", value = 400 },
                new PieData { key = "B", name = "B", value = 200 },
            };

            this.Clients.All.broadcastMessage(new { Message = message, Count = ReleaseHub.counter, LineData = lineData, PieData = pieData });
        }
    }
}