using System.Collections.Generic;
using System;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
using Twilio.Clients;
using System.Threading.Tasks;

namespace STAR.Originations.MegaRunbook.Website.AppCode
{
    public class MrcTwilioSmsClient
    {
        private readonly TwilioConfig twilioConfig;
        private readonly ITwilioRestClient twilloRestClient;

        public MrcTwilioSmsClient(TwilioConfig twilioConfig)
        {
            this.twilioConfig = twilioConfig;
            this.twilloRestClient = new TwilioRestClient(twilioConfig.TwilioAccountSid, twilioConfig.TwilioAuthToken);
        }

        public async Task<MessageResource> SendMessage(TwilioMessage twilioMessage)
        {
            var fromPhoneNumber = new PhoneNumber(twilioConfig.TwilioPhoneNumber);
            var toPhoneNumber = new PhoneNumber(twilioMessage.ToPhoneNumber);
            var mediaUrl = twilioMessage.MediaUrl != null ? new List <Uri> { new Uri(twilioMessage.MediaUrl) } : null;
            return await MessageResource.CreateAsync(toPhoneNumber, from: fromPhoneNumber, body: twilioMessage.Message, mediaUrl: mediaUrl, client: this.twilloRestClient);
        }
    }

    public class TwilioConfig
    {
        public string TwilioAccountSid { get; set; }
        public string TwilioAuthToken { get; set; }
        public string TwilioPhoneNumber { get; set; }
    }

    public class TwilioMessage
    {
        public string FromPhoneNumber { get; set; }
        public string ToPhoneNumber { get; set; }
        public string Message { get; set; }
        public string MediaUrl { get; set; }
    }
}
