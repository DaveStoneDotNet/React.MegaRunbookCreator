import React         from 'react';
import { IndexLink } from 'react-router';
import Moment        from 'moment';

const HomeComponent = () => {

    const formattedMomentDate = Moment().format('dddd MMMM Do, YYYY');

    return (
      <div>
        <div className='pad-20 white'>
            <div className='home-brand-button-block'>
                <IndexLink to='/templatelist' className='no-underline'>
                    <img src='../app/images/Mega-Runbook-Creator-Button-04.png' className='pointer;' title='Runbooks'/>
                    <div className='home-date-block'>
                        { formattedMomentDate }
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
