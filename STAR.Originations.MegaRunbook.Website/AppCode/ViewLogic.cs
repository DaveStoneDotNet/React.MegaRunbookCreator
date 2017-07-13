using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

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
    }
}