using System;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class Activity
    {
        [DataMember] public int ID { get; set; }

        [DataMember] public string TimeText { get; set; }
        [DataMember] public string Header { get; set; }
        [DataMember] public string SubHeader { get; set; }
        [DataMember] public string ShortIndicator { get; set; }
        [DataMember] public string ShortSubIndicator { get; set; }
        [DataMember] public string FormattedTime { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("ID: {0}", this.ID);
    }
}
