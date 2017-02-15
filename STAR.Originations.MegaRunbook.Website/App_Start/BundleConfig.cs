
using System.Web.Optimization;

namespace STAR.Originations.MegaRunbook.Website
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include("~/node_modules/jquery/dist/jquery.min.js"));
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include("~/Scripts/modernizr-*"));
            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/node_modules/bootstrap/dist/js/bootstrap.min.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/app/styles").Include(
                      "~/node_modules/font-awesome/css/font-awesome.min.css",
                      "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
                      "~/app/styles/sass.min.css"
                      ));
        }
    }
}
