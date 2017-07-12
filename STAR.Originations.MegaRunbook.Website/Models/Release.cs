using System;
using System.Collections.Generic;

namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class Release
    {
        public int Id { get; set; }

        public DateTime ReleaseDate { get; set; }

        public string ReleaseDateText { get; set; }
        public string ScheduledStartTime { get; set; }
        public string ScheduledStopTime { get; set; }
        public string ActualStartTime { get; set; }
        public string ActualStopTime { get; set; }
        public string ReleaseStatus { get; set; }

        public List<ReleaseBlock> ReleaseBlocks { get; set; }
    }
}