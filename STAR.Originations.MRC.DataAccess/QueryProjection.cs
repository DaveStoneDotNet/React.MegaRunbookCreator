using System;
using System.Linq.Expressions;

using entities = STAR.Originations.MRC.DataAccess;
using contracts = STAR.Originations.MegaRunbook.Contracts.Data;

namespace STAR.Originations.MRC.DataAccess
{
    internal static class QueryProjection
    {
        #region CourseDemo
        public static readonly Expression<Func<entities::CourseDemo, contracts::CourseDemo>> CourseDemo = pd => new contracts::CourseDemo
        {
            Id        = pd.Id,
            Key       = pd.Key,
            Title     = pd.Title,
            WatchHref = pd.WatchHref,
            AuthorId  = pd.AuthorId,
            Length    = pd.Length,
            Category  = pd.Category
        };
        #endregion CourseDemo
    }
}
