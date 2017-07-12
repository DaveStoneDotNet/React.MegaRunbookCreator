using System;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class Release
    {
        [DataMember] public int ID { get; set; }

        [DataMember] public DateTime ReleaseDate { get; set; }

        [DataMember] public string ScheduledReleaseStarTime { get; set; }
        [DataMember] public string ScheduledReleaseStopTime { get; set; }
        [DataMember] public string ActualReleaseStarTime { get; set; }
        [DataMember] public string ActualReleaseStopTime { get; set; }
        [DataMember] public string ReleaseStatus { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("ID: {0}", this.ID);
    }
}
