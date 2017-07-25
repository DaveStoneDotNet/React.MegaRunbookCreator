import React                  from 'react';
import toastr                 from 'toastr';

import CompactContactListItem from './CompactContactListItem';

class CompactContactList extends React.Component {
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

        const contacts = this.props.contacts;

        return (
                    <div>
                        <div id="contacts-header">
                            <div className="float-right pad-top-15 pad-right-20">
                                <i className="fa fa-angle-down white-a-3 font-2-00" />
                            </div>
                            <div className="align-center muted-purple-bg pad-top-10 pad-right-10 pad-bottom-10 pad-left-40 BebasNeue font-2-00 width-100 white-a-9">
                                Contacts
                            </div>
                        </div>
                        <div id="filter-contacts" className="border margin-top-2">
                            <div className="float-right pad-top-10 pad-right-10">
                                <i className="fa fa-search white-a-3 font-1-40" />
                            </div>
                            <div className="pad-5 width-100 white-a-9">
                                <input type="text" className="white-a-1-bg pad-5 Lato" style={{ width: '90%', border: 'none' }} />
                            </div>
                        </div>
                        <table className="width-100">
                            <tbody>
                                { contacts.map((contact, index) => <CompactContactListItem key={ contact.Id } contact={ contact } index={ index }/> ) }
                            </tbody>
                        </table>
                    </div>
               );
                            }
}

export default CompactContactList;
