
using System.Collections.Generic;

namespace STAR.Originations.MegaRunbook.Website.Models
{

    public class CourseData
    {
        public string id { get; set; }
        public string title { get; set; }
        public string watchHref { get; set; }
        public string authorId { get; set; }
        public string length { get; set; }
        public string category { get; set; }

        private CourseData()
        {
        }

        public static List<CourseData> SeedData()
        {
            return new List<CourseData>
            {
                new CourseData
                {
                    id = "react-flux-building-applications",
                    title =     "Building Applications in React and Flux",
                    watchHref = "http://www.pluralsight.com/courses/react-flux-building-applications",
                    authorId =  "cory-house",
                    length =    "5:08",
                    category =  "JavaScript"
                },
                new CourseData
                {
                    id = "clean-code",
                    title =     "Clean Code = Writing Code for Humans",
                    watchHref = "http://www.pluralsight.com/courses/writing-clean-code-humans",
                    authorId =  "cory-house",
                    length =    "3:10",
                    category =  "Software Practices"
                },
                new CourseData
                {
                    id = "architecture",
                    title =     "Architecting Applications for the Real World",
                    watchHref = "http://www.pluralsight.com/courses/architecting-applications-dotnet",
                    authorId =  "cory-house",
                    length =    "2:52",
                    category =  "Software Architecture"
                },
                new CourseData
                {
                    id = "career-reboot-for-developer-mind",
                    title =     "Becoming an Outlier = Reprogramming the Developer Mind",
                    watchHref = "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
                    authorId =  "cory-house",
                    length =    "2:30",
                    category =  "Career"
                },
                new CourseData
                {
                    id = "web-components-shadow-dom",
                    title =     "Web Component Fundamentals",
                    watchHref = "http://www.pluralsight.com/courses/web-components-shadow-dom",
                    authorId =  "cory-house",
                    length =    "5:10",
                    category =  "HTML5"
                }
            };
        }
    }
}