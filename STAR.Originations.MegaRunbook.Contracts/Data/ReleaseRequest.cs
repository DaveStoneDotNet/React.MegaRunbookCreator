using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class ReleaseRequest : RequestBase
    {
        [DataMember] public int Id { get; set; }
        [DataMember] public int BlockOrder { get; set; }

        [DataMember] public string StepsText { get; set; }
        [DataMember] public string BlockType { get; set; }
        [DataMember] public string BlockName { get; set; }
        [DataMember] public string BlockDescription { get; set; }
        [DataMember] public string StartTime { get; set; }
        [DataMember] public string StopTime { get; set; }
        [DataMember] public string BlockStatus { get; set; }
        [DataMember] public string OpenQuery { get; set; }

        [DataMember] public List<string> BlockUsers { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("Id: {0}", this.Id);
    }
}
