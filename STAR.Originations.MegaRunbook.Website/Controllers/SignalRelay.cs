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
        public static void Send(ReleaseMessage releaseMessage)
        {
            SignalRelay.Clients.All.broadcastMessage(releaseMessage);
        }
        #endregion Send

        #endregion Methods
    }
}