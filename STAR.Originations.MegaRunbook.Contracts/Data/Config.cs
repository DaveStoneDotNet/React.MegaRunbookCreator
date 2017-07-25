using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    public class Config
    {
        [DataMember] public string SlackWebhookUrl { get; set; }
        [DataMember] public string TwilioProdAccountSid { get; set; }
        [DataMember] public string TwilioProdAuthToken { get; set; }
        [DataMember] public string TwilioTestAccountSid { get; set; }
        [DataMember] public string TwilioTestAuthToken { get; set; }
        [DataMember] public string TwilioPhoneNumber { get; set; }
        [DataMember] public string TestNumber { get; set; }
    }
}
