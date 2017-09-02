import { ReleaseBlockStatus }        from '../constants';
import { UserRole }                  from '../constants';
import { getReleaseBlockBgCss }      from '../constants';
import { getReleaseBlockButtonText } from '../constants';
import { getIconCss }                from '../constants';

describe('Release Block Background CSS', () => {
    it('NotStarted returns awhite-a-3-bg', () => {

        let css = getReleaseBlockBgCss(ReleaseBlockStatus.NotStarted);
            expect(css).toBe('white-a-3-bg');
        }
    );

    it('Started returns a muted-purple-bg', () => {

        let css = getReleaseBlockBgCss(ReleaseBlockStatus.Started);
            expect(css).toBe('muted-purple-bg');
        }
    );

    it('Late returns a dark-orange-bg', () => {

        let css = getReleaseBlockBgCss(ReleaseBlockStatus.Late);
            expect(css).toBe('dark-orange-bg');
        }
    );

    it('Warning returns a dark-orange-bg', () => {

        let css = getReleaseBlockBgCss(ReleaseBlockStatus.Warning);
            expect(css).toBe('dark-orange-bg');
        }
    );

    it('Critical returns a bright-red-bg', () => {

        let css = getReleaseBlockBgCss(ReleaseBlockStatus.Critical);
            expect(css).toBe('bright-red-bg');
        }
    );

    it('Done returns muted-green-bg', () => {

        let css = getReleaseBlockBgCss(ReleaseBlockStatus.Done);
            expect(css).toBe('muted-green-bg');
        }
    );
});

describe('Release Block Button Text', () => {
    it('NotStarted returns start', () => {

        let css = getReleaseBlockButtonText(ReleaseBlockStatus.NotStarted);
            expect(css).toBe('start');
        }
    );

    it('Started returns finish', () => {

        let css = getReleaseBlockButtonText(ReleaseBlockStatus.Started);
            expect(css).toBe('finish');
        }
    );

    it('Late returns start', () => {

        let css = getReleaseBlockButtonText(ReleaseBlockStatus.Late);
            expect(css).toBe('start');
        }
    );

    it('Warning returns continue', () => {

        let css = getReleaseBlockButtonText(ReleaseBlockStatus.Warning);
            expect(css).toBe('continue');
        }
    );

    it('Critical returns continue', () => {

        let css = getReleaseBlockButtonText(ReleaseBlockStatus.Critical);
            expect(css).toBe('continue');
        }
    );

    it('Done returns comment', () => {

        let css = getReleaseBlockButtonText(ReleaseBlockStatus.Done);
            expect(css).toBe('comment');
        }
    );
});

describe('Icon CSS', () => {
    it('NotStarted returns Font Awesome CSS fa-genderless', () => {

        let css = getIconCss(ReleaseBlockStatus.NotStarted);
            expect(css).toBe('fa fa-genderless');
        }
    );

    it('Done returns Font Awesome CSS fa-check-circle', () => {

        let css = getIconCss(ReleaseBlockStatus.Done);
            expect(css).toBe('fa fa-check-circle');
        }
    );

    it('Started returns Font Awesome CSS fa-cog fa-spin', () => {

        let css = getIconCss(ReleaseBlockStatus.Started);
            expect(css).toBe('fa fa-cog fa-spin');
        }
    );

    it('Warning returns Font Awesome CSS fa-commenting-o', () => {

        let css = getIconCss(ReleaseBlockStatus.Warning);
            expect(css).toBe('fa fa-commenting-o');
        }
    );

    it('Critical returns Font Awesome CSS fa-exclamation-circle', () => {

        let css = getIconCss(ReleaseBlockStatus.Critical);
            expect(css).toBe('fa fa-exclamation-circle');
        }
    );

    it('Late returns Font Awesome CSS fa-clock-o', () => {

        let css = getIconCss(ReleaseBlockStatus.Late);
            expect(css).toBe('fa fa-clock-o');
        }
    );

    it('Leader returns Font Awesome CSS fa-star', () => {

        let css = getIconCss(UserRole.Leader);
            expect(css).toBe('fa fa-star');
        }
    );

    it('Dba returns Font Awesome CSS fa-database', () => {

        let css = getIconCss(UserRole.Dba);
            expect(css).toBe('fa fa-database');
        }
    );

    it('Etl returns Font Awesome CSS fa-random', () => {

        let css = getIconCss(UserRole.Etl);
            expect(css).toBe('fa fa-random');
        }
    );

    it('EncompassAdmin returns Font Awesome CSS fa-sliders', () => {

        let css = getIconCss(UserRole.EncompassAdmin);
            expect(css).toBe('fa fa-sliders');
        }
    );

    it('DevOps returns Font Awesome CSS fa-cogs', () => {

        let css = getIconCss(UserRole.DevOps);
            expect(css).toBe('fa fa-cogs');
        }
    );

    it('Qa returns Font Awesome CSS fa-thermometer', () => {

        let css = getIconCss(UserRole.Qa);
            expect(css).toBe('fa fa-thermometer');
        }
    );

    it('Developer returns Font Awesome CSS fa-terminal', () => {

        let css = getIconCss(UserRole.Developer);
            expect(css).toBe('fa fa-terminal');
        }
    );

    it('DeveloperSr returns Font Awesome CSS fa-user', () => {

        let css = getIconCss(UserRole.DeveloperSr);
            expect(css).toBe('fa fa-user');
        }
    );

    it('EngineerII returns Font Awesome CSS fa-user', () => {

        let css = getIconCss(UserRole.EngineerII);
            expect(css).toBe('fa fa-user');
        }
    );

    it('SoftwareEngineerTrainee returns Font Awesome CSS fa-user', () => {

        let css = getIconCss(UserRole.SoftwareEngineerTrainee);
            expect(css).toBe('fa fa-user');
        }
    );

    it('ITAdministratorII returns Font Awesome CSS fa-user', () => {

        let css = getIconCss(UserRole.ITAdministratorII);
            expect(css).toBe('fa fa-user');
        }
    );

    it('SrITAdministator returns Font Awesome CSS fa-user', () => {

        let css = getIconCss(UserRole.SrITAdministator);
            expect(css).toBe('fa fa-user');
        }
    );

    it('ITAnalystSr returns Font Awesome CSS fa-user', () => {

        let css = getIconCss(UserRole.ITAnalystSr);
            expect(css).toBe('fa fa-user');
        }
    );

    it('SrITAnalyst returns Font Awesome CSS fa-user-circle-o', () => {

        let css = getIconCss(UserRole.SrITAnalyst);
            expect(css).toBe('fa fa-user-circle-o');
        }
    );

    it('VPIT returns Font Awesome CSS fa-user-o', () => {

        let css = getIconCss(UserRole.VPIT);
            expect(css).toBe('fa fa-id-card');
        }
    );

    it('Generic returns Font Awesome CSS fa-user-o', () => {

        let css = getIconCss(UserRole.Generic);
            expect(css).toBe('fa fa-user-o');
        }
    );

    it('Undefined returns Font Awesome CSS fa-user-o', () => {

        let css = getIconCss();
            expect(css).toBe('fa fa-genderless');
        }
    );
});
