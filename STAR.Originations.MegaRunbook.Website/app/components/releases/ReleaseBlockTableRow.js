﻿import React                   from 'react';
import { bindActionCreators }  from 'redux';
import { connect }             from 'react-redux';

import Icon                    from '../common/Icon';
import ToggleIcon              from '../common/ToggleIcon';
import Radio                   from '../common/Radio';

import { getReleaseBlockBgCss} from '../../constants';

class ReleaseBlockTableRow extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const releaseBlock = this.props.releaseBlock;
        const bgCss = getReleaseBlockBgCss(releaseBlock.BlockStatus);

        console.log('RELEASE TABLE ROW', this.props);

        return (
                   <tr>
                        <td className={ 'pad-10 align-top white-a-5 border-bottom-a-50 border-right-a-10 align-center align-middle ' + bgCss }>
                            <Radio staticStyles={'font-1-60'} isSelected={ false } />
                        </td>
                        <td className={ 'pad-20 align-top white-a-9 border-bottom-a-50 border-right-a-10 align-center ' + bgCss }>
                            <div className="nowrap">
                            { releaseBlock.StepsText }
                            </div>
                        </td>
                        <td className={ 'align-top align-center white-a-9 border-bottom-a-50 border-right-a-10 pad-15 ' + bgCss }>
                            <Icon type={ releaseBlock.BlockType } staticStyles="white-a-7 font-2-00" />
                        </td>
                        <td className={ 'pad-15 align-top white-a-9 border-bottom-a-50 border-right-a-10 ' + bgCss }>
                            <div className="BebasNeue font-1-60">{ releaseBlock.BlockName }</div>
                            <div className="Lato font-1-00">{ releaseBlock.BlockDescription }</div>
                            <div className="pad-top-5 pad-left-20">
                                <div>
                                    <div className="float-left pad-5">
                                        <i className="fa fa-user-o"></i>
                                    </div>
                                    <div className="pad-5">Tharun Mukka</div>
                                </div>
                                <div>
                                    <div className="float-left pad-5">
                                        <i className="fa fa-user-o"></i>
                                    </div>
                                    <div className="pad-5">Sebastian Abraham</div>
                                </div>
                            </div>
                        </td>
                        <td className={ 'pad-15 align-top white-a-9 border-bottom-a-50 border-right-a-10 align-center ' + bgCss }>
                            <div>
                                <span className="BebasNeue font-2-00">46</span><span className="Lato font-0-75"> min</span>
                            </div>
                        </td>
                        <td className={ 'pad-15 align-top align-center white-a-9 border-bottom-a-50 border-right-a-10 BebasNeue font-1-40 ' + bgCss }>
                            <div className="nowrap">
                            { releaseBlock.StartTime }
                            </div>
                        </td>
                        <td className={ 'pad-15 align-top align-center white-a-9 border-bottom-a-50 border-right-a-10 BebasNeue font-1-40 ' + bgCss }>
                            <div className="nowrap">
                            { releaseBlock.StopTime }
                            </div>
                        </td>
                        <td className={ 'pad-10 align-top align-center white-a-9 border-bottom-a-50 border-right-a-10 ' + bgCss  }>
                            <div>
                                <Icon type={ releaseBlock.BlockStatus } staticStyles="white-a-5 font-2-00" />
                            </div>
                        </td>
                        <td className={ 'pad-10 align-top white-a-9 border-bottom-a-50 font-1-40 ' + bgCss }>
                            <div>
                                <span className="BebasNeue font-1-20">{ releaseBlock.BlockStatus }</span>
                            </div>
                            <div className="pad-top-5">
                                <div style={{ width: '125px', height: '10px' }} className="border-a-50">
                                    <div style={{ width: '125px', height: '8px' }} className="white-a-3-bg">
                                        <div style={{ width: '100px', height: '8px' }} className="progress-tick">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pad-top-10">
                                <table>
                                    <tr>
                                        <td>
                                            <div className="pointer border-a-30 margin-right-5 pad-left-10 pad-right-10 pad-top-5 pad-bottom-5 white white-a-1-bg font-0-75 Lato align-center">comment</div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                        <td className={ 'pad-20 border-bottom-a-50 align-top align-right ' + bgCss }>
                            <ToggleIcon staticStyles={'white-a-3 font-2-00'} isUp={ false }/>
                        </td>
                   </tr>
               );
}
}

function mapStateToProps(state, ownProps) {
    return { 
        release: state.release.release
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
                                   
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseBlockTableRow);