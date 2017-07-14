import React         from 'react';
import PropTypes     from 'prop-types';

const SimpleUserList = ({ users }) => {
    return (
        <div>
          {
              users.map(user => 
                  
                  <div key={ user.Id }>
                      <div className="float-left pad-5">
                          <i className="fa fa-user-o"></i>
                      </div>
                      <div className="pad-5">
                          { user.DisplayName }
                      </div>
                  </div>
              ) 
          }
      </div>
  );
};

SimpleUserList.propTypes = {
                               users: PropTypes.array.isRequired
                           };

export default SimpleUserList;
