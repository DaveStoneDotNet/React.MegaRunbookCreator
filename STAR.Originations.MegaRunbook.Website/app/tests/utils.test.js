
import moment          from 'moment';

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