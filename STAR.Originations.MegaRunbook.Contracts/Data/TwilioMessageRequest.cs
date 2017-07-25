using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    public class TwilioMessageRequest
    {
        [DataMember] public int UserId { get; set; }
        [DataMember] public string Message { get; set; }
    }
}
