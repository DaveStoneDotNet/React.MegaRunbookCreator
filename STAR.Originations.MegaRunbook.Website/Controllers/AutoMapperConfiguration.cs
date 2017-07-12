
using AutoMapper;

using contracts = STAR.Originations.MegaRunbook.Contracts.Data;
using models = STAR.Originations.MegaRunbook.Website.Models;

namespace STAR.Originations.MegaRunbook.Website.Controllers
{
    internal static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<contracts::ReleaseBlock, models::ReleaseBlock>();
                cfg.CreateMap<contracts::Release,      models::Release>();
            });
        }
    }
}
