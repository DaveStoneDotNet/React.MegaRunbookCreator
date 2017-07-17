using System;

namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class Activity
    {
        public int Id { get; set; }

        public string ActivityType { get; set; }
        public string TimeText { get; set; }
        public string Header { get; set; }
        public string SubHeader { get; set; }
        public string ShortIndicator { get; set; }
        public string ShortSubIndicator { get; set; }

        public DateTime ActivityDate { get; set; }
    }
}