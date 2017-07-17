import React                    from 'react';
import toastr                   from 'toastr';

import { getReleaseBlockBgCss}  from '../../constants';

import ToggleHeader             from '../common/ToggleHeader';

class ReleaseActivity extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            isUp:         props.isUp         ? props.isUp         : true, 
            staticStyles: props.staticStyles ? props.staticStyles : 'White' 
        };

        this.handleClick = this.handleClick.bind(this);

        toastr.options.positionClass = 'toast-bottom-right';
    }

    handleClick () {
        this.setState((prevState) => ({ isUp: !prevState.isUp }));
        toastr.warning('not implemented yet');
    }

    render() {
        const releaseStatus = this.props.releaseStatus;
        const bgCss = getReleaseBlockBgCss(releaseStatus);

        return (
                    <div>
                        <div className={ bgCss }>
                            <ToggleHeader header="Activity" />
                        </div>
                        <div id="filter-activity" className="border margin-top-2">
                            <div className="float-right pad-top-10 pad-right-10">
                                <i className="fa fa-search white-a-3 font-1-40"></i>
                            </div>
                            <div className="pad-5 width-100 white-a-9">
                                <input type="text" className="white-a-1-bg pad-5 Lato" style={{ width: '90%', border: 'none' }} />
                            </div>
                        </div>
                        <table className="width-100">
                            <tr>
                                <td className="align-center border-bottom-a-10 pad-left-5">
                                    <i className="fa fa-check-circle font-3-00 white-a-1"></i>
                                </td>
                                <td className="border-bottom-a-10">
                                    <div className="pad-10">
                                        <div className="BebasNeue font-1-60">
                                            JUST NOW
                                        </div>
                                        <div className="font-1-20">
                                            Encompass Admin
                                        </div>
                                        <div className="Lato font-1-00">
                                            David Lane
                                        </div>
                                        <div className="Lato font-0-75 pad-top-5">
                                            10:17 PM
                                        </div>
                                    </div>
                                </td>
                                <td className="border-bottom-a-10 align-center align-top pad-10">
                                    <div className="BebasNeue font-1-40">
                                        Done
                                    </div>
                                    <div className="Lato font-0-80 uppercase">
                                        Step 37
                                    </div>
                                    <div>
                                        <i className="fa fa-sliders font-1-20 white-a-3 pad-top-10"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="white-a-1-bg align-center border-bottom-a-10 pad-left-5">
                                    <i className="fa fa-check-circle font-3-00 white-a-1"></i>
                                </td>
                                <td className="white-a-1-bg border-bottom-a-10">
                                    <div className="pad-10">
                                        <div className="BebasNeue font-1-60">
                                            10 minutes ago
                                        </div>
                                        <div className="font-1-20">
                                            Dev Ops
                                        </div>
                                        <div className="Lato font-1-00">
                                            Matt Clark
                                        </div>
                                        <div className="Lato font-0-75 pad-top-5">
                                            10:07 PM
                                        </div>
                                    </div>
                                </td>
                                <td className="white-a-1-bg border-bottom-a-10 align-center align-top pad-10">
                                    <div className="BebasNeue font-1-40">
                                        Done
                                    </div>
                                    <div className="Lato font-0-80 uppercase">
                                        Step 33
                                    </div>
                                    <div>
                                        <i className="fa fa-cogs font-1-20 white-a-3 pad-top-10"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-center border-bottom-a-10 pad-left-5">
                                    <i className="fa fa-cog font-3-00 white-a-1"></i>
                                </td>
                                <td className="border-bottom-a-10">
                                    <div className="pad-10">
                                        <div className="BebasNeue font-1-60">
                                            12 minutes ago
                                        </div>
                                        <div className="font-1-20">
                                            Dev Ops
                                        </div>
                                        <div className="Lato font-1-00">
                                            Matt Clark
                                        </div>
                                        <div className="Lato font-0-75 pad-top-5">
                                            10:02 PM
                                        </div>
                                    </div>
                                </td>
                                <td className="border-bottom-a-10 align-center align-top pad-10">
                                    <div className="BebasNeue font-1-40">
                                        Started
                                    </div>
                                    <div className="Lato font-0-80 uppercase">
                                        Step 33
                                    </div>
                                    <div>
                                        <i className="fa fa-cogs font-1-20 white-a-3 pad-top-10"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="white-a-1-bg align-center border-bottom-a-10 pad-left-5">
                                    <i className="fa fa-check-circle font-3-00 white-a-1"></i>
                                </td>
                                <td className="white-a-1-bg border-bottom-a-10">
                                    <div className="pad-10">
                                        <div className="BebasNeue font-1-60">
                                            33 minutes ago
                                        </div>
                                        <div className="font-1-20">
                                            Dev Ops
                                        </div>
                                        <div className="Lato font-1-00">
                                            Matt Clark
                                        </div>
                                        <div className="Lato font-0-75 pad-top-5">
                                            09:44 PM
                                        </div>
                                    </div>
                                </td>
                                <td className="white-a-1-bg border-bottom-a-10 align-center align-top pad-10">
                                    <div className="BebasNeue font-1-40">
                                        Done
                                    </div>
                                    <div className="Lato font-0-80 uppercase">
                                        Step 32
                                    </div>
                                    <div>
                                        <i className="fa fa-cogs font-1-20 white-a-3 pad-top-10"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="align-center border-bottom-a-10 pad-left-5">
                                    <i className="fa fa-cog font-3-00 white-a-1"></i>
                                </td>
                                <td className="border-bottom-a-10">
                                    <div className="pad-10">
                                        <div className="BebasNeue font-1-60">
                                            45 minutes ago
                                        </div>
                                        <div className="font-1-20">
                                            Dev Ops
                                        </div>
                                        <div className="Lato font-1-00">
                                            Matt Clark
                                        </div>
                                        <div className="Lato font-0-75 pad-top-5">
                                            09:32 PM
                                        </div>
                                    </div>
                                </td>
                                <td className="border-bottom-a-10 align-center align-top pad-10">
                                    <div className="BebasNeue font-1-40">
                                        Started
                                    </div>
                                    <div className="Lato font-0-80 uppercase">
                                        Step 32
                                    </div>
                                    <div>
                                        <i className="fa fa-cogs font-1-20 white-a-3 pad-top-10"></i>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
               );
    }
}

export default ReleaseActivity;
