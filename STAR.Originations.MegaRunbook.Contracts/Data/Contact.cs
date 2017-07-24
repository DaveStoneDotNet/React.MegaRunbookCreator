using System;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class Contact
    {
        [DataMember] public int Id { get; set; }
        [DataMember] public int? UserId { get; set; }
        [DataMember] public string DisplayName { get; set; }
        [DataMember] public string PhoneNumber { get; set; }
        [DataMember] public string Availability { get; set; }
        [DataMember] public string BlockType { get; set; }
        [DataMember] public string UserRole { get; set; }
        [DataMember] public string UserRoleDescription { get; set; }

        [DataMember] public bool IsOnline { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("Id: {0}. UserId: {1}. DisplayName: {2}. ", this.Id, this.UserId, this.DisplayName);
    }
}
