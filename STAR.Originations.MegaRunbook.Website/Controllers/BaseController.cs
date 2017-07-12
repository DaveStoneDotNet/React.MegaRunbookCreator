﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Web.Mvc;

using STAR.Originations.MegaRunbook.Contracts.PagingModels;
using STAR.Originations.MegaRunbook.Website.AppCode;

namespace STAR.Originations.MegaRunbook.Website.Controllers
{
    /// <summary>
    /// Note that Authorize Attributes may be controlled globally in 'App_Start.FilterConfig.RegisterGlobalFilters'.
    /// For example, 
    /// 
    ///     filters.Add(new RedirectAndLogAuthorizeAttribute());
    /// 
    /// However, this appears to prevent the 'AllowAnonymous' attribute, necessary on the 'ErrorController' from working.
    /// 
    /// </summary>
    public class BaseController : Controller
    {
        public BaseController()
        {
            AutoMapperConfiguration.Configure();
        }

        #region OnAuthorization
        protected override void OnAuthorization(AuthorizationContext filterContext)
        {
            this.ViewBag.WelcomeMessage = String.Format("Good {0} {1}", BaseController.DayTime(), "Dave Stone");
            this.ViewBag.TodaysDate = String.Format("Today is {0}", DateTime.Now.ToLongDateString());
            base.OnAuthorization(filterContext);
        }
        #endregion OnAuthorization

        #region OnException
        protected override void OnException(ExceptionContext exceptionContext)
        {
            base.OnException(exceptionContext);
        }
        #endregion OnException

        #region StartStopwatch
        protected Stopwatch StartStopwatch()
        {
            var stopwatch = new Stopwatch();
            stopwatch.Start();
            return stopwatch;
        }
        #endregion StartStopwatch

        #region GetDefaultPaging
        protected static Paging GetDefaultPaging(string propertyNameToSort)
        {
            return new Paging { RecordsPerPage = 1000, PageNumber = 0, SortInfo = new List<SortInfo> { new SortInfo { PropertyName = propertyNameToSort, SortOrder = SortOrder.Ascending } } };
        }
        #endregion GetDefaultPaging

        #region GetDefaultSort
        protected static List<SortInfo> GetDefaultSortInfo(string propertyNameToSort)
        {
            return new List<SortInfo> { new SortInfo { PropertyName = propertyNameToSort, SortOrder = SortOrder.Ascending } };
        }
        #endregion GetDefaultSort

        // ---

        #region JsonDateResult
        /// <summary>
        /// Creates a JsonDateResult object that serializes the specified object to JavaScript Object Notation (JSON) using the 
        /// IsoDateTimeConverter defined in the custom JsonDateResult class.
        /// </summary>
        /// <returns>
        /// The JSON result object that serializes the specified object to JSON format. The result object that is prepared by 
        /// this method is written to the response by the ASP.NET MVC framework when the object is executed.
        /// </returns>
        /// <param name="data">The JavaScript object graph to serialize.</param>
        protected internal JsonDateResult JsonDateResult(object data)
        {
            return new JsonDateResult()
            {
                Data = data,
                ContentType = "application/json",
                JsonRequestBehavior = JsonRequestBehavior.AllowGet
            };
        }
        #endregion JsonDateResult

        #region DayTime
        public static string DayTime()
        {
            var dayTime = String.Empty;
            var hour = DateTime.Now.Hour;
            if (hour < 12)
            {
                dayTime = "morning";
            }
            else
            {
                dayTime = hour < 18 ? "afternoon" : "evening";
            }
            return dayTime;
        }
        #endregion DayTime
    }
}