import React  from 'react';
import moment from 'moment';

class DigitalClock extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                        momentDate: moment(), 
                        momentFormat: props.momentFormat ? props.momentFormat : 'hh:mm:ss A'
                     };
    }

    componentDidMount () {
        this.interval = setInterval(() => {
            this.setState({ 
                momentDate: this.state.momentDate.add(1, 'seconds')
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
                    <div className="BebasNeue font-3-00 white-a-9">
                        { this.state.momentDate.format(this.state.momentFormat) }
                    </div>
               );
    }
}

export default DigitalClock;
