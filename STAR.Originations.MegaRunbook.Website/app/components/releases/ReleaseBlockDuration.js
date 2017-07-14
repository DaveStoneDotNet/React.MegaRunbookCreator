import React  from 'react';

class ReleaseBlockDuration extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount () {
    }

    componentWillUnmount() {
    }

    render() {
        const duration = this.props.duration;
        const hours = duration.Hours > 0 ? <div><span className='BebasNeue font-2-00'>{ duration.Hours }</span><span className='Lato font-0-75'> hr</span></div> : null;
        const minutesCss = duration.Hours > 0 ? 'Lato font-1-00' : 'BebasNeue font-2-00';
        const minutes = <div><span className={ minutesCss }>{ duration.Minutes }</span><span className='Lato font-0-75'> min</span></div>;

        console.log('DURATION', duration);
        console.log('DURATION PROPS', this.props);
        return (
                    <div>
                        { hours }
                        { minutes }
                    </div>
               );
    }
}

export default ReleaseBlockDuration;
