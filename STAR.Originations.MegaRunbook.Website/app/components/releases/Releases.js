import React        from 'react';
import moment       from 'moment';

import ReleaseDateHeader from './ReleaseDateHeader';

const Releases = () => {
    return (
      <div>
        <div className="pad-20">
            <ReleaseDateHeader momentHeaderDate={ moment('2017-07-09', 'YYYY-MM-DD') } startTime="08:00 PM" stopTime="01:30 AM" />
        </div>
        
      </div>
  );
};

export default Releases;
