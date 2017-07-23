
using System.Collections.Generic;

namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class ReleaseMessage
    {
        public string Message { get; set; }
        public Release Release { get; set; }
        public List<Activity> Activities { get; set; }
        public List<LineData> LineData { get; set; }
        public List<PieData> PieData { get; set; }
    }
}