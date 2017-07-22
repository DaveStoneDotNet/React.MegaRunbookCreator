import React         from 'react';
import { IndexLink } from 'react-router';

class Home extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        return (
                   <div>
                     <div className="pad-20 white">
                         <div className="home-brand-button-block">
                             <IndexLink to="/releases" className="no-underline">
                                 <img src="../app/images/Mega-Runbook-Creator-Button-04.png" className="pointer;" title="Runbooks"/>
                                 <div className="home-date-block">
                                     <div>
                                         <i className="fa fa-cog font-1-20 white opacity-10 margin-top-10 hidden" />
                                     </div>
                                     <img src="../app/images/spiro.svg" className="spriro-03" />
                                 </div>
                             </IndexLink>
                         </div>
                     </div>
                   </div>
               );
    }
}

export default Home;
