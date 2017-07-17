import React                   from 'react';
import toastr                  from 'toastr';

import ReleaseActivityListItem from './ReleaseActivityListItem';

class ReleaseActivityList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
                     };

        this.handleClick = this.handleClick.bind(this);

        toastr.options.positionClass = 'toast-bottom-right';
    }

    handleClick () {
        this.setState((prevState) => ({ isUp: !prevState.isUp }));
        toastr.warning('not implemented yet');
    }

    render() {

        const activities = this.props.activities;

        return (
                    <div>
                        <table className="width-100">
                            <tbody>
                                { activities.map((activity, index) => <ReleaseActivityListItem key={ activity.Id } activity={ activity } index={ index }/> ) }
                            </tbody>
                        </table>
                    </div>
               );
    }
}

export default ReleaseActivityList;
