using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace STAR.Originations.MegaRunbook.Website.Models
{
    public class LineData
    {
        public string xname { get; set; }
        public int uv       { get; set; }
        public int pv       { get; set; }
        public int amt      { get; set; }
    }
    public class PieData
    {
        public string key  { get; set; }
        public string name { get; set; }
        public int value   { get; set; }
    }
}