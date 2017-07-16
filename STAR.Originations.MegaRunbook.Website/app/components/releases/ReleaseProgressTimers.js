import React            from 'react';
import moment           from 'moment';

import { DateFormats }  from '../../constants';
import { TimeSpanMode } from '../../constants';

import TimeSpan         from '../common/TimeSpan';

class ReleaseProgressTimers extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount () {
    }

    componentWillUnmount() {
    }

    render() {

        const release = this.props.release;

        const startTimeText = moment(release.ScheduledStartTime).format(DateFormats.DefaultTime);
        const stopTimeText  = moment(release.ScheduledStopTime).format(DateFormats.DefaultTime);

        return (
                    <div className="width-100 white-a-6 font-1-20 Lato">
                        <div className="float-right pad-5 align-right">
                            <div id="countdown-time">
                                <TimeSpan timeSpanMode={ TimeSpanMode.Remaining } dateTime={ release.ScheduledStopTime } />
                            </div>
                            <div className="font-0-75 align-right white-a-2">
                                remaining until { stopTimeText }
                            </div>
                        </div>
                        <div className="pad-5">
                            <div id="elapsed-time">
                                <TimeSpan timeSpanMode={ TimeSpanMode.Elapsed } dateTime={ release.ScheduledStartTime } />
                            </div>
                            <div className="font-0-75 white-a-2">
                                elapsed since { startTimeText }
                            </div>
                        </div>
                    </div>
               );
    }
}

export default ReleaseProgressTimers;
