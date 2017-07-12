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
        public string StartTime { get; set; }
        public string StopTime { get; set; }
        public string BlockStatus { get; set; }
        public string BlockStatusCss { get; set; }

        public List<string> BlockUsers { get; set; }
    }
}