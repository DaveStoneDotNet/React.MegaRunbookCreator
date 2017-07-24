import React         from 'react';
import { IndexLink } from 'react-router';

import HomeButton    from '../home/HomeButton';

class Home extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const appDimensions = this.props.app.appDimensions;
        console.log('HOME', appDimensions);
        return (
                    <div className="align-center">
                        <HomeButton appDimensions={appDimensions} />
                    </div>
               );
    }
}

export default Home;
