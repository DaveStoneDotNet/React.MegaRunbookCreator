using System;
using System.Collections.Generic;

namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class Release
    {
        public int Id { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string ReleaseDateText { get; set; }
        public string ReleaseStatus { get; set; }

        public DateTime ScheduledStartTime { get; set; }
        public DateTime ScheduledStopTime { get; set; }
        public DateTime ActualStartTime { get; set; }
        public DateTime ActualStopTime { get; set; }

        public List<ReleaseBlock> ReleaseBlocks { get; set; }
    }
}