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

        const contact  = this.props.contact;
        const index    = this.props.index;
        const bgCss   = index % 2 === 0 ? '' : 'white-a-1-bg';
        return (
                    <tr>
                        <td className="align-center border-bottom-a-10 pad-left-5">
                            <i className="fa fa-user font-3-00 white-a-1" />
                        </td>
                        <td className="border-bottom-a-10">
                            <div className="pad-10">
                                <div className="BebasNeue font-1-60">
                                    { contact.DisplayName }
                                </div>
                                <div className="font-1-20">
                                    { contact.UserRole }
                                </div>
                                <div className="Lato font-0-75 pad-top-5">
                                    { contact.PhoneNumber }
                                </div>
                                <div className="Lato font-0-75">
                                    { contact.Availability }
                                </div>
                            </div>
                        </td>
                        <td className="border-bottom-a-10 align-center align-top pad-10">
                            <div>
                                <i className="fa fa-sliders font-1-20 white-a-3 pad-top-10" />
                            </div>
                        </td>

                    </tr>
               );
    }
}

export default CompactContactListItem;
