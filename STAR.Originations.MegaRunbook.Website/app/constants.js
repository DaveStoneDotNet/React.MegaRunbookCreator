
export const ReleaseBlockStatus =        {
                                             Done:           'Done', 
                                             Started:        'Started',
                                             Warning:        'Warning',
                                             Critical:       'Critical',
                                             Late:           'Late',
                                             NotStarted:     'NotStarted'
                                         };  
                                         
export const ReleaseBlockType =          {
                                             Dba:            'DBA', 
                                             Etl:            'ETL', 
                                             EncompassAdmin: 'EncompassAdmin', 
                                             DevOps:         'DevOps', 
                                             Developer:      'Developer', 
                                             Qa:             'QA'
                                         };
                                         
export const ReleaseBlockStatusBgCss =   {
                                             Done:           'muted-green-bg', 
                                             Started:        'muted-purple-bg',
                                             Warning:        'dark-orange-bg',
                                             Critical:       'bright-red-bg',
                                             Late:           'dark-orange-bg',
                                             NotStarted:     'white-a-3-bg'
                                         };  

export const ReleaseBlockStatusIconCss = {
                                             Done:           'fa fa-check-circle', 
                                             Started:        'fa fa-cog fa-spin',
                                             Warning:        'fa fa-commenting-o',
                                             Critical:       'fa fa-exclamation-circle',
                                             Late:           'fa fa-clock-o',
                                             NotStarted:     'fa fa-genderless'
                                         };

export const ReleaseBlockTypeIconCss =   {
                                             Dba:            'fa fa-database', 
                                             Etl:            'fa fa-random', 
                                             EncompassAdmin: 'fa fa-sliders', 
                                             DevOps:         'fa fa-cogs', 
                                             Developer:      'fa fa-terminal', 
                                             Qa:             'fa fa-thermometer'
                                         };

export const css =                       {
                                            background:     {
                                                                BrightGreen:      'bright-green-bg',
                                                                MutedGreen:       'muted-green-bg',
                                                                LightMutedGreen:  'light-muted-green-bg',
                                                                SuperLightGreen:  'super-light-green-bg',
                                                                DarkGreen:        'dark-green-bg',
                                                                MutedPurple:      'muted-purple-bg',
                                                                BrightPurple:     'bright-purple-bg',
                                                                LightPurple:      'light-purple-bg',
                                                                SuperLightPurple: 'super-light-purple-bg',
                                                                MutedBlue:        'muted-blue-bg',
                                                                DarkBlue:         'dark-blue-bg',
                                                                MutedPrimaryBlue: 'muted-primary-blue-bg',
                                                                PrimaryBlue:      'primary-blue-bg',
                                                                MiddleBlue:       'middle-blue-bg',
                                                                LightBlue:        'light-blue-bg',
                                                                InfoBlue:         'info-blue-bg',
                                                                MutedInfoBlue:    'muted-info-blue-bg',
                                                                SuperLightBlue:   'super-light-blue-bg',
                                                                MediumLightBlue:  'medium-light-blue-bg',
                                                                DarkRed:          'dark-red-bg',
                                                                BrightRed:        'bright-red-bg',
                                                                SoftRed:          'soft-red-bg',
                                                                SuperLightRed:    'super-light-red-bg',
                                                                DarkMutedRed:     'dark-muted-red-bg',
                                                                Pink:             'pink-bg',
                                                                DarkOrange:       'dark-orange-bg',
                                                                Orange:           'orange-bg',
                                                                BrightOrange:     'bright-orange-bg',
                                                                MediumOrange:     'medium-orange-bg',
                                                                MutedOrange:      'muted-orange-bg',
                                                                LightOrange:      'light-orange-bg',
                                                                SoftYellow:       'soft-yellow-bg',
                                                                PureWhite:        'pure-white-bg',
                                                                PureBlack:        'pure-black-bg',
                                                                PureRed:          'pure-red-bg',
                                                                PureGreen:        'pure-green-bg',
                                                                PureBlue:         'pure-blue-bg',
                                                                Gray_2:           'gray-2-bg',
                                                                Gray_3:           'gray-3-bg',
                                                                Gray_4:           'gray-4-bg',
                                                                Gray_5:           'gray-5-bg',
                                                                Gray_6:           'gray-6-bg',
                                                                Gray_9:           'gray-9-bg',
                                                                Gray_A:           'gray-a-bg',
                                                                Gray_B:           'gray-b-bg',
                                                                Gray_C:           'gray-c-bg',
                                                                Gray_D:           'gray-d-bg',
                                                                Gray_E:           'gray-e-bg',
                                                                White_A_1:        'white-a-1-bg',
                                                                White_A_2:        'white-a-2-bg',
                                                                White_A_3:        'white-a-3-bg',
                                                                White_A_4:        'white-a-4-bg',
                                                                White_A_5:        'white-a-5-bg',
                                                                White_A_6:        'white-a-6-bg',
                                                                White_A_7:        'white-a-7-bg',
                                                                White_A_8:        'white-a-8-bg',
                                                                White_A_9:        'white-a-9-bg'
                                                            }
                                         };

export const getReleaseBlockBgCss = (blockStatus) => {
    let css = ReleaseBlockStatusBgCss.NotStarted;
    switch (blockStatus) {
    case ReleaseBlockStatus.NotStarted:
        css = ReleaseBlockStatusBgCss.NotStarted;
        break;
    case ReleaseBlockStatus.Started:
        css = ReleaseBlockStatusBgCss.Started;
        break;
    case ReleaseBlockStatus.Late:
        css = ReleaseBlockStatusBgCss.Late;
        break;
    case ReleaseBlockStatus.Warning:
        css = ReleaseBlockStatusBgCss.Warning;
        break;
    case ReleaseBlockStatus.Critical:
        css = ReleaseBlockStatusBgCss.Critical;
        break;
    case ReleaseBlockStatus.Done:
        css = ReleaseBlockStatusBgCss.Done;
        break;
    }
    return css;
};

export const getIconCss = (type) => {
    let icon = 'fa';
    switch (type) {
        case ReleaseBlockStatus.NotStarted:
            icon = 'fa fa-genderless';
            break;
        case ReleaseBlockStatus.Done:
            icon = 'fa fa-check-circle';
            break;
        case ReleaseBlockStatus.Started:
            icon = 'fa fa-cog fa-spin';
            break;
        case ReleaseBlockStatus.Warning:
            icon = 'fa fa-commenting-o';
            break;
        case ReleaseBlockStatus.Critical:
            icon = 'fa fa-exclamation-circle';
            break;
        case ReleaseBlockStatus.Late:
            icon = 'fa fa-clock-o';
            break;

        case ReleaseBlockType.Dba:
            icon = 'fa fa-database';
            break;
        case ReleaseBlockType.Etl:
            icon = 'fa fa-random';
            break;
        case ReleaseBlockType.EncompassAdmin:
            icon = 'fa fa-sliders';
            break;
        case ReleaseBlockType.DevOps:
            icon = 'fa fa-cogs';
            break;
        case ReleaseBlockType.Developer:
            icon = 'fa fa-terminal';
            break;
        case ReleaseBlockType.Qa:
            icon = 'fa fa-thermometer';
            break;

        default:
            icon = 'fa fa-genderless';
            break;
    }
    return icon;
};

