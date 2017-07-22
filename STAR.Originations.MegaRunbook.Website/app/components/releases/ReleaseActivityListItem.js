import React           from 'react';
import toastr          from 'toastr';

import Icon            from '../common/Icon';
import { getTimeText } from '../../utils';

class ReleaseActivityListItem extends React.Component {
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

        const activity = this.props.activity;
        const index    = this.props.index;
        const bgCss    = index % 2 === 0 ? '' : 'white-a-1-bg';
        const timeText = getTimeText(activity.ActivityDate);
        return (
                    <tr>

                        <td className={ 'align-center border-bottom-a-10 pad-left-5 ' + bgCss }>
                            <Icon type={ activity.ShortIndicator } staticStyles="white-a-1 font-3-00" />
                        </td>
                        <td className={ 'border-bottom-a-10 ' + bgCss }>
                            <div className="pad-10">
                                <div className="BebasNeue font-1-60">
                                    { timeText }
                                </div>
                                <div className="font-1-20">
                                    { activity.Header }
                                </div>
                                <div className="Lato font-1-00">
                                    { activity.SubHeader }
                                </div>
                                <div className="Lato font-0-75 pad-top-5">
                                    { activity.ActivityDate.toString() }
                                </div>
                            </div>
                        </td>
                        <td className={ 'border-bottom-a-10 align-center align-top pad-10 ' + bgCss }>
                            <div className="BebasNeue font-1-40">
                                { activity.ShortIndicator }
                            </div>
                            <div className="Lato font-0-80 uppercase">
                                { activity.ShortSubIndicator }
                            </div>
                            <div>
                                <Icon type={ activity.ActivityType } staticStyles="font-1-20 white-a-3 pad-top-10" />
                            </div>
                        </td>
                    </tr>
               );
    }
}

export default ReleaseActivityListItem;
