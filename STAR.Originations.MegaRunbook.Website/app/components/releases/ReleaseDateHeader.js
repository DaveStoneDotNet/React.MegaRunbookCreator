import React  from 'react';
import moment from 'moment';

import DigitalClock from '../common/DigitalClock';

class DateHeader extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                         momentHeaderDate: props.momentHeaderDate ? props.momentHeaderDate : moment(), 
                         momentFormat:     props.momentFormat     ? props.momentFormat : 'dddd MMMM DD, YYYY'
                     };
    }

    componentDidMount () {
    }

    componentWillUnmount() {
    }

    render() {
        return (
                    <div>
                        <div className="clock-time-id float-right pad-top-10">
                            <DigitalClock momentFormat="hh:mm A" />
                        </div>
                        <div className="release-date-id margin-bottom-5 border-bottom-a-20">
                            <div className="BebasNeue font-3-00 pad-10">
                                { this.state.momentHeaderDate.format(this.state.momentFormat) }
                            </div>
                        </div>
                        <div className="BebasNeue font-1-40 pad-left-10 pad-bottom-20">
                            { this.props.startTime } - { this.props.stopTime }
                        </div>
                    </div>
               );
    }
}

export default DateHeader;
