import React            from 'react';
import moment           from 'moment';
import countdown        from 'countdown';

import { DateFormats }  from '../../constants';
import { TimeSpanMode } from '../../constants';
import { padZero }      from '../../utils';

class TimeSpan extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
                         dateTime:     props.dateTime, 
                         durationText: ''
                     };
    }

    getDurationText (duration) {
        const days    = duration.days    > 0 ? padZero(duration.days)  + ' d ' : '';
        const hours   = duration.hours   > 0 ? padZero(duration.hours) + ' h '  : '';
        const minutes = padZero(duration.minutes) + ' m ';
        const seconds = padZero(duration.seconds) + ' s ';
        return days + hours + minutes + seconds;
    }

    updateComponent() {

        const dateTime     = moment(this.props.dateTime, DateFormats.DefaultDateTime).toDate();
        const duration     = countdown(dateTime);
        const durationText = this.getDurationText(duration);
        this.setState({ 
                          durationText: durationText
                      });
    }

    componentDidMount () {

        this.interval = setInterval(() => {
            this.updateComponent();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
                    <div className='Lato font-1-00 white-a-9'>
                        { this.state.durationText }
                    </div>
               );
    }
}

export default TimeSpan;
