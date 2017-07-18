using System;
using System.Collections.Generic;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

using STAR.Originations.MegaRunbook.Website.Models;


namespace STAR.Originations.MegaRunbook.Website.Controllers
{
    public class SignalRelay
    {
        private static readonly Lazy<SignalRelay> instance = new Lazy<SignalRelay>(() => new SignalRelay(GlobalHost.ConnectionManager.GetHubContext<ReleaseHub>().Clients));
        public static SignalRelay Instance => SignalRelay.instance.Value;

        #region Clients
        private static IHubConnectionContext<dynamic> Clients
        {
            get;
            set;
        }
        #endregion Clients

        #region Constructor

        #region SignalRelay
        public SignalRelay()
        {
        }
        #endregion SignalRelay

        #region SignalRelay
        public SignalRelay(IHubConnectionContext<dynamic> clients)
        {
            SignalRelay.Clients = clients;
        }
        #endregion SignalRelay

        #endregion Constructor

        #region Methods

        #region Send
        public static void Send(string message)
        {
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

            SignalRelay.Clients.All.broadcastMessage(new { Message = message, LineData = lineData, PieData = pieData });
        }
        #endregion Send

        #endregion Methods
    }
}