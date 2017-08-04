import 'babel-polyfill';

import moment          from 'moment';
import countdown       from 'countdown';

import { DateFormats } from './constants';

export const throttle = (func, wait) => {
    let context, args, prevArgs, argsChanged, result;
    let previous = 0;
    return function() {
        let now, remaining;
        if (wait) {
            now = Date.now();
            remaining = wait - (now - previous);
        }
        context = this;
        args = arguments;
        argsChanged = JSON.stringify(args) != JSON.stringify(prevArgs);
        prevArgs = Object.assign({}, args);
        if (argsChanged || wait && (remaining <= 0 || remaining > wait)) {
            if (wait) {
                previous = now;
            }
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
};

export const isNumeric = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

export const padZero = (num) => {
    if (isNumeric(num)) {
        if (num <= 9 && num >= 0) {
            num = '0' + num;
        }
    } else {
        return '00';
    }
    return num + '';
};

export const getTimeText = (targetDate) => {
    
    const durationDate = moment(targetDate, DateFormats.DefaultDateTime).toDate();
    const duration = countdown(durationDate);

    if (duration.years === 1) {
        return 'a year ago';
    }
    if (duration.years > 1) {
        return 'years ago';
    }
    if (duration.months === 1) {
        return 'a month ago';
    }
    if (duration.months > 1) {
        return 'months ago';
    }
    if (duration.days === 1) {
        return 'a day ago';
    }
    if (duration.days > 1) {
        return 'days ago';
    }

    if (duration.hours > 1) {
        return 'hours ago';
    }
    if (duration.hours === 1 && duration.minutes <= 10) {
        return 'about an hour ago';
    }
    if (duration.hours === 1 && duration.minutes > 10) {
        return 'more than an hour ago';
    }

    if (duration.minutes > 50) {
        return 'almost an hour ago';
    }
    if (duration.minutes >= 4) {
        return duration.minutes + ' minutes ago';
    }
    if (duration.minutes < 4) {
        return 'just now';
    }

    return '';
};