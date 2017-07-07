using System;
using System.Diagnostics;
using System.Runtime.Serialization;

using STAR.Originations.MegaRunbook.Contracts.PagingModels;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class CourseDemoCriteria
    {
        [DataMember] public int Id { get; set; }
        [DataMember] public string Key { get; set; }
        [DataMember] public string Title { get; set; }
        [DataMember] public string WatchHref { get; set; }
        [DataMember] public string AuthorId { get; set; }
        [DataMember] public string Length { get; set; }
        [DataMember] public string Category { get; set; }

        [DataMember] public UserProfile UserProfile { get; set; }
        [DataMember] public Paging Paging { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("Key: {0}", this.Key);
    }
}
