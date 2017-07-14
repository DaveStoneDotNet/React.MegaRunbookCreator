using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using STAR.Originations.MegaRunbook.Website.Models;

namespace STAR.Originations.MegaRunbook.Website.AppCode
{
    public class ViewLogic
    {
        [Obsolete("Moved to JS", true)]
        public static string GetReleaseBlockCss(string blockStatus)
        {
            var releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.NotStarted;
            switch (blockStatus)
            {
                case SiteConstants.ReleaseBlockStatus.NotStarted:
                    releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.NotStarted;
                    break;
                case SiteConstants.ReleaseBlockStatus.Started:
                    releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.Started;
                    break;
                case SiteConstants.ReleaseBlockStatus.Late:
                    releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.Late;
                    break;
                case SiteConstants.ReleaseBlockStatus.Warning:
                    releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.Warning;
                    break;
                case SiteConstants.ReleaseBlockStatus.Critical:
                    releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.Critical;
                    break;
                case SiteConstants.ReleaseBlockStatus.Done:
                    releaseBlockCss = SiteConstants.Css.ReleaseBlockStatusColors.Done;
                    break;
            }
            return releaseBlockCss;
        }

        public static Duration GetDuration(DateTime startTime, DateTime stopTime)
        {
            if (startTime > stopTime)
            {
                var swap = stopTime;
                stopTime = startTime;
                startTime = swap;
            }
            var d = stopTime - startTime;

            return new Duration
            {
                Days = d.Days,
                Hours = d.Hours,
                Minutes = d.Minutes, 
                Seconds = d.Seconds
            };
        }

        public static Duration GetDuration(string startTimeText, string stopTimeText)
        {
            var startTime = DateTime.Parse(startTimeText);
            var stopTime = DateTime.Parse(stopTimeText);
            if (startTime > stopTime)
            {
                var swap = stopTime;
                stopTime = startTime;
                startTime = swap;
            }
            var d = stopTime - startTime;

            return new Duration
            {
                Days = d.Days,
                Hours = d.Hours,
                Minutes = d.Minutes,
                Seconds = d.Seconds
            };
        }
    }
}