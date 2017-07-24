import React  from 'react';
import toastr from 'toastr';

import Icon   from '../common/Icon';

class CompactContactListItem extends React.Component {
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

        const contact = this.props.contact;
        const index   = this.props.index;
        const bgCss = index % 2 === 0 ? '' : 'white-a-1-bg';

        const onlineCss = contact.IsOnline ? 'fa-comment white-a-5' : 'fa-comment-o white-a-1';

        const title = contact.IsOnline ? 'online' : 'offline';

        return (
                    <tr>
                        <td className={ 'align-center border-bottom-a-10 pad-left-5 ' + bgCss } title={ title }>
                            <Icon type={contact.UserRole} staticStyles="font-3-00 white-a-1" />
                        </td>
                        <td className={ 'border-bottom-a-10 ' + bgCss }>
                            <div className="pad-10">
                                <div className="BebasNeue font-1-60">
                                    { contact.DisplayName }
                                </div>
                                <div className="font-1-20">
                                    { contact.UserRoleDescription }
                                </div>
                                <div className="Lato font-0-75 pad-top-5">
                                    { contact.PhoneNumber }
                                </div>
                                <div className="Lato font-0-75">
                                    <i className={'fa font-0-75 pad-right-5 ' + onlineCss} title={title } /> { contact.Availability }
                                </div>
                            </div>
                        </td>
                        <td className={ 'border-bottom-a-10 align-center align-top pad-10 ' + bgCss }>
                            <div>
                                <Icon type={contact.BlockType} staticStyles="font-1-20 white-a-3 pad-top-10" />
                            </div>
                            <div className="pad-top-20">
                                <div className="pointer border-a-30 margin-right-5 pad-left-10 pad-right-10 pad-top-5 pad-bottom-5 white white-a-1-bg font-0-75 Lato align-center" style={{ width: '75px' }}>page</div>
                            </div>
                        </td>

                    </tr>
               );
    }
}

export default CompactContactListItem;
