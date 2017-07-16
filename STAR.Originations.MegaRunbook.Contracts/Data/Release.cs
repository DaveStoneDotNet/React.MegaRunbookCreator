using System;
using System.Collections.Generic;
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

        [DataMember] public string ReleaseDateText { get; set; }
        [DataMember] public string ReleaseStatus { get; set; }

        [DataMember] public DateTime ScheduledStartTime { get; set; }
        [DataMember] public DateTime ScheduledStopTime { get; set; }
        [DataMember] public DateTime ActualStartTime { get; set; }
        [DataMember] public DateTime ActualStopTime { get; set; }

        [DataMember] public List<ReleaseBlock> ReleaseBlocks { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("ID: {0}", this.ID);
    }
}
