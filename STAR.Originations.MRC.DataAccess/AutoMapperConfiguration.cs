
using AutoMapper;

using entities = STAR.Originations.MRC.DataAccess;
using contracts = STAR.Originations.MegaRunbook.Contracts.Data;

namespace STAR.Originations.MRC.DataAccess
{
    internal static class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<entities::ApplicationGroup,  contracts::ApplicationGroup>();
                cfg.CreateMap<entities::ApplicationGroup,  contracts::ApplicationGroup>();
                cfg.CreateMap<entities::ApplicationLink,   contracts::ApplicationLink>();
                cfg.CreateMap<entities::ApplicationType,   contracts::ApplicationType>();
                cfg.CreateMap<entities::Contact,           contracts::Contact>();
                cfg.CreateMap<entities::Environment,       contracts::Environment>();
                cfg.CreateMap<entities::EnvironmentLink,   contracts::EnvironmentLink>();
                cfg.CreateMap<entities::RunbookStep,       contracts::RunbookStep>();
                cfg.CreateMap<entities::RunbookStepPbi,    contracts::RunbookStepPbi>();
                cfg.CreateMap<entities::RunbookStepType,   contracts::RunbookStepType>();
                cfg.CreateMap<entities::RunbookTemplate,   contracts::RunbookTemplate>();
                cfg.CreateMap<entities::Server,            contracts::Server>();
                cfg.CreateMap<entities::ServiceLink,       contracts::ServiceLink>();
                cfg.CreateMap<entities::Team,              contracts::Team>();
                cfg.CreateMap<entities::ApplicationType,   contracts::Lookup>();
                cfg.CreateMap<entities::RunbookStepStatus, contracts::Lookup>();
                cfg.CreateMap<entities::RunbookStepType,   contracts::Lookup>();
                cfg.CreateMap<entities::Rfc,               contracts::Rfc>();

                cfg.CreateMap<contracts::Rfc,              entities::Rfc>();
                cfg.CreateMap<contracts::Contact,          entities::Contact>();
                cfg.CreateMap<contracts::RunbookStep,      entities::RunbookStep>();
                cfg.CreateMap<contracts::RunbookTemplate,  entities::RunbookTemplate>();
                cfg.CreateMap<contracts::RunbookStepPbi,   entities::RunbookStepPbi>();
                cfg.CreateMap<contracts::Team,             entities::Team>();

                cfg.CreateMap<entities::ApplicationGroup, contracts::Lookup>()
                    .ForMember(dest => dest.Code, opt => opt.MapFrom(src => src.Id))
                    .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Name));

            });
        }
    }
}
