
namespace STAR.Originations.MegaRunbook.Website.AppCode
{
    public static class SiteConstants
    {
        #region ConfigKeys
        public static class ConfigKeys
        {
        }
        #endregion ConfigKeys

        #region Roles
        public static class Roles
        {
            public const string Administrator = "Administrator";
        }
        #endregion Roles

        #region ReleaseBlockStatus
        public static class ReleaseBlockStatus
        {
            public const string Done       = "Done";
            public const string Started    = "Started";
            public const string Warning    = "Warning";
            public const string Critical   = "Critical";
            public const string Late       = "Late";
            public const string NotStarted = "NotStarted";
        }
        #endregion ReleaseBlockStatus

        #region UserRole
        public static class UserRole
        {
            public const string Dba            = "DBA";
            public const string Etl            = "ETL";
            public const string EncompassAdmin = "EncompassAdmin";
            public const string DevOps         = "DevOps";
            public const string Developer      = "Developer";
            public const string Qa             = "QA";
        }
        #endregion UserRole

        #region Css
        public static class Css
        {
            public static class BackgroundColors
            {
                public const string BrightGreen      = "bright-green-bg";
                public const string MutedGreen       = "muted-green-bg";
                public const string LightMutedGreen  = "light-muted-green-bg";
                public const string SuperLightGreen  = "super-light-green-bg";
                public const string DarkGreen        = "dark-green-bg";
                public const string MutedPurple      = "muted-purple-bg";
                public const string BrightPurple     = "bright-purple-bg";
                public const string LightPurple      = "light-purple-bg";
                public const string SuperLightPurple = "super-light-purple-bg";
                public const string MutedBlue        = "muted-blue-bg";
                public const string DarkBlue         = "dark-blue-bg";
                public const string MutedPrimaryBlue = "muted-primary-blue-bg";
                public const string PrimaryBlue      = "primary-blue-bg";
                public const string MiddleBlue       = "middle-blue-bg";
                public const string LightBlue        = "light-blue-bg";
                public const string InfoBlue         = "info-blue-bg";
                public const string MutedInfoBlue    = "muted-info-blue-bg";
                public const string SuperLightBlue   = "super-light-blue-bg";
                public const string MediumLightBlue  = "medium-light-blue-bg";
                public const string DarkRed          = "dark-red-bg";
                public const string BrightRed        = "bright-red-bg";
                public const string SoftRed          = "soft-red-bg";
                public const string SuperLightRed    = "super-light-red-bg";
                public const string DarkMutedRed     = "dark-muted-red-bg";
                public const string Pink             = "pink-bg";
                public const string DarkOrange       = "dark-orange-bg";
                public const string Orange           = "orange-bg";
                public const string BrightOrange     = "bright-orange-bg";
                public const string MediumOrange     = "medium-orange-bg";
                public const string MutedOrange      = "muted-orange-bg";
                public const string LightOrange      = "light-orange-bg";
                public const string SoftYellow       = "soft-yellow-bg";
                public const string PureWhite        = "pure-white-bg";
                public const string PureBlack        = "pure-black-bg";
                public const string PureRed          = "pure-red-bg";
                public const string PureGreen        = "pure-green-bg";
                public const string PureBlue         = "pure-blue-bg";
                public const string Gray_2           = "gray-2-bg";
                public const string Gray_3           = "gray-3-bg";
                public const string Gray_4           = "gray-4-bg";
                public const string Gray_5           = "gray-5-bg";
                public const string Gray_6           = "gray-6-bg";
                public const string Gray_9           = "gray-9-bg";
                public const string Gray_A           = "gray-a-bg";
                public const string Gray_B           = "gray-b-bg";
                public const string Gray_C           = "gray-c-bg";
                public const string Gray_D           = "gray-d-bg";
                public const string Gray_E           = "gray-e-bg";
                public const string White_A_1        = "white-a-1-bg";
                public const string White_A_2        = "white-a-2-bg";
                public const string White_A_3        = "white-a-3-bg";
                public const string White_A_4        = "white-a-4-bg";
                public const string White_A_5        = "white-a-5-bg";
                public const string White_A_6        = "white-a-6-bg";
                public const string White_A_7        = "white-a-7-bg";
                public const string White_A_8        = "white-a-8-bg";
                public const string White_A_9        = "white-a-9-bg";
            }

            public static class ReleaseBlockStatusColors
            {
                public const string Done       = Css.BackgroundColors.MutedGreen;
                public const string Started    = Css.BackgroundColors.MutedPurple;
                public const string Warning    = Css.BackgroundColors.DarkOrange;
                public const string Critical   = Css.BackgroundColors.BrightRed;
                public const string Late       = Css.BackgroundColors.DarkOrange;
                public const string NotStarted = Css.BackgroundColors.White_A_3;
            }
        }
        #endregion Css
    }
}