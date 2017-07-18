using System.Collections.Generic;

using Microsoft.AspNet.SignalR;

using STAR.Originations.MegaRunbook.Website.Controllers;
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

            var p = Randomize.GetRandomNumber(1000, 9999);

            var lineData = new List<LineData>
            {
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 3
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 1
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 5
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 2
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 4
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 7
                new LineData { xname = " ", uv = Randomize.GetRandomNumber(1000, 9999), pv = Randomize.GetRandomNumber(1000, 9999), amt = Randomize.GetRandomNumber(1000, 9999) }, // 6
            };

            var pieData = new List<PieData>
            {
                new PieData { key = "A", name = "A", value = Randomize.GetRandomNumber(100, 400) },
                new PieData { key = "B", name = "B", value = Randomize.GetRandomNumber(100, 400) },
            };

            this.Clients.All.broadcastMessage(new { Message = message, Count = ReleaseHub.counter, LineData = lineData, PieData = pieData });
        }
    }
}