﻿import React           from 'react';
import moment          from 'moment';

import DigitalClock    from '../common/DigitalClock';
import { DateFormats } from '../../constants';

class DateHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                         momentFormat: props.momentFormat ? props.momentFormat : DateFormats.LongDateFormat
                     };
    }

    getFormattedDateTime(dateTimeText, dateTimeFormat, defaultText) {
        return dateTimeText ? moment(dateTimeText, DateFormats.DefaultDateTime).format(dateTimeFormat) : defaultText;
    }

    render() {

        const headerText    = this.props.releaseDate ? moment(this.props.releaseDate, DateFormats.DefaultDateTime).format(DateFormats.LongDateFormat) : 'not provided';
        const startTimeText = this.props.startTime   ? moment(this.props.startTime,   DateFormats.DefaultDateTime).format(DateFormats.DefaultTime)    : ' ';
        const stopTimeText  = this.props.stopTime    ? moment(this.props.stopTime,    DateFormats.DefaultDateTime).format(DateFormats.DefaultTime)    : ' ';

        return (
                    <div>
                        <div className="clock-time-id float-right pad-top-10">
                            <DigitalClock momentFormat="hh:mm A" />
                        </div>
                        <div className="release-date-id margin-bottom-5 border-bottom-a-20">
                            <div className="BebasNeue font-3-00 pad-10">
                                { headerText }
                            </div>
                        </div>
                        <div className="BebasNeue font-1-40 pad-left-10 pad-bottom-20">
                            { startTimeText } - { stopTimeText }
                        </div>
                    </div>
               );
    }
}

export default DateHeader;
