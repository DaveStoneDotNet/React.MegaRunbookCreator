import React         from 'react';
import { IndexLink } from 'react-router';

// Possible issue with Hot-Reloading using Stateless Class.
// If Hot-Reloading, consider using 'Class' syntax, e.g. ...
// 
//      class HomeComponent extends React.Component

const HomeComponent = () => {
    return (
      <div>
        <div className='pad-20 white'>
            <div className='home-brand-button-block'>
                <IndexLink to='/templatelist' className='no-underline'>
                    <img src='../app/images/Mega-Runbook-Creator-Button-04.png' className='pointer;' title='Runbooks'/>
                    <div className='home-date-block'>
                        <div>todays full date</div>
                        <div className='opacity-50'>user display name</div>
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
};

export default HomeComponent;
