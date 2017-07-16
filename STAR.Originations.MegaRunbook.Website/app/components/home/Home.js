import React         from 'react';
import { IndexLink } from 'react-router';
import Moment        from 'moment';

class Home extends React.Component {

    constructor(props, context) {

        super(props, context);
    }

    render() {

        const formattedMomentDate = Moment().format('dddd MMMM Do, YYYY');
        const app = this.props.app;

        return (
                   <div>
                     <div className='pad-20 white'>
                         <div className='home-brand-button-block'>
                             <IndexLink to='/releases' className='no-underline'>
                                 <img src='../app/images/Mega-Runbook-Creator-Button-04.png' className='pointer;' title='Runbooks'/>
                                 <div className='home-date-block'>
                                     { formattedMomentDate }
                                     <div className='opacity-50'>{ app.user.UserDisplayName }</div>
                                     <div>
                                         <i className='fa fa-cog font-1-20 white opacity-10 margin-top-10 hidden'></i>
                                     </div>
                                     <img src='../app/images/spiro.svg' className='spriro-03' />
                                 </div>
                             </IndexLink>
                         </div>
                     </div>
                   </div>
               );
    }
}

export default Home;
