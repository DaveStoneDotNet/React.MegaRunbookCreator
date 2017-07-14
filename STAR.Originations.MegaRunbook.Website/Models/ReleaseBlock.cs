using System;
using System.Collections.Generic;

namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class ReleaseBlock
    {
        public int Id { get; set; }
        public int BlockOrder { get; set; }

        public string StepsText { get; set; }
        public string BlockType { get; set; }
        public string BlockName { get; set; }
        public string BlockDescription { get; set; }
        public string BlockStatus { get; set; }
        public string BlockStatusCss { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime StopTime { get; set; }

        public Duration Duration { get; set; }

        public List<Contact> BlockUsers { get; set; }
    }
}