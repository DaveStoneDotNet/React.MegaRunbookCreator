
import moment          from 'moment';
import countdown       from 'countdown';

import { DateFormats } from '../constants';

import  * as utils     from '../utils';

describe('Pad Zero', () => {
    it('Prepends a ZERO when the provided number is between one and nine unclusive', () => {

        let pad = utils.padZero(0);
            expect(pad).toBe('00');

            pad = utils.padZero(1);
            expect(pad).toBe('01');

            pad = utils.padZero(2);
            expect(pad).toBe('02');

            pad = utils.padZero(3);
            expect(pad).toBe('03');

            pad = utils.padZero(4);
            expect(pad).toBe('04');

            pad = utils.padZero(5);
            expect(pad).toBe('05');

            pad = utils.padZero(6);
            expect(pad).toBe('06');

            pad = utils.padZero(7);
            expect(pad).toBe('07');

            pad = utils.padZero(8);
            expect(pad).toBe('08');

            pad = utils.padZero(9);
            expect(pad).toBe('09');

            pad = utils.padZero(10);
            expect(pad).toBe('10');

            pad = utils.padZero('');
            expect(pad).toBe('00');

            pad = utils.padZero('X');
            expect(pad).toBe('00');
        }
    );
});

describe('Is Numeric', () => {
    it('Determines if provided parameter is Numeric.', () => {

        let b = utils.isNumeric(1);
            expect(b).toBe(true);

            b = utils.isNumeric(1.0);
            expect(b).toBe(true);

            b = utils.isNumeric('1');
            expect(b).toBe(true);

            b = utils.isNumeric('1.0');
            expect(b).toBe(true);

            b = utils.isNumeric('');
            expect(b).toBe(false);

            b = utils.isNumeric('1.X');
            expect(b).toBe(false);
        }
        
    );
});

describe('Countdown', () => {
    it('A year ago', () => {

        const targetDate = moment().subtract(1, 'year').subtract(1, 'month');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('a year ago');
        }
    );

    it('years ago', () => {

        const targetDate = moment().subtract(2, 'year').subtract(2, 'month');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('years ago');
        }
    );

    it('a month ago', () => {

        const targetDate = moment().subtract(1, 'month');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('a month ago');
        }
    );

    it('months ago', () => {

        const targetDate = moment().subtract(2, 'month');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('months ago');
        }
    );

    it('a day ago', () => {

        const targetDate = moment().subtract(1, 'day');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('a day ago');
        }
    );

    it('days ago', () => {

        const targetDate = moment().subtract(2, 'day');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('days ago');
        }
    );

    it('hours ago', () => {

        const targetDate = moment().subtract(2, 'hour');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('hours ago');
        }
    );

    it('about an hour ago', () => {

        const targetDate = moment().subtract(1, 'hour').subtract(1, 'minute');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('about an hour ago');
        }
    );

    it('more than an hour ago', () => {

        const targetDate = moment().subtract(1, 'hour').subtract(11, 'minute');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('more than an hour ago');
        }
    );

    it('almost an hour ago', () => {

        const targetDate = moment().subtract(51, 'minute');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('almost an hour ago');
        }
    );

    it('4 minutes ago', () => {

        const targetDate = moment().subtract(4, 'minute');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('4 minutes ago');
        }
    );

    it('just now', () => {

        const targetDate = moment().subtract(3, 'minute');
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('just now');
        }
    );

    it('EMPTY', () => {

        const targetDate = '';
        const timeText = utils.getTimeText(targetDate);
        expect(timeText).toBe('');
        }
    );
});