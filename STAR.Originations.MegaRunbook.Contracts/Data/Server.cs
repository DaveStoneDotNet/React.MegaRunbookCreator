﻿using System;
using System.Diagnostics;
using System.Runtime.Serialization;

namespace STAR.Originations.MegaRunbook.Contracts.Data
{
    [DataContract(Namespace = "http://services.nationstarmtg.net/originations/mrc/2016/01")]
    [DebuggerDisplay("{DebuggerDisplay}")]
    public class Server
    {
        [DataMember] public int Id { get; set; }
        [DataMember] public int EnvironmentId { get; set; }

        [DataMember] public string Name { get; set; }

        [DataMember] public Environment Environment { get; set; }

        [DebuggerBrowsable(DebuggerBrowsableState.Never)]
        private string DebuggerDisplay => String.Format("Name: {0}", this.Name);
    }
}
