import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import ReleaseBlockTableRow   from './ReleaseBlockTableRow';

class ReleaseBlockTable extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const release = this.props.release;
        console.log('RELEASE TABLE', this.props);

        return (
            <div>
                <div className="width-100 border pad-5 margin-bottom-1">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-sm btn-primary">All</button>
                        <button type="button" className="btn btn-sm btn-primary">Mine</button>
                        <button type="button" className="btn btn-sm btn-primary">Selected</button>
                        <button type="button" className="btn btn-sm btn-info">In Progress</button>
                        <button type="button" className="btn btn-sm btn-info">Not Started</button>
                        <button type="button" className="btn btn-sm btn-info">Warning</button>
                        <button type="button" className="btn btn-sm btn-info">Critical</button>
                    </div>
                    <div className="float-right">
                        <div className="border">
                            <input type="text" className="white-a-1-bg pad-5" style={{ border: 'none' }} /> <i className="fa fa-search pad-left-5 pad-right-5"></i>
                        </div>
                    </div>
                </div>
                <table className="font-0-90 width-100">
                    <thead>
                        <tr>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                Select
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                Steps
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10" colSpan="2">
                                Release Tasks
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                Duration
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 align-center">
                                Start
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg gray-b border-bottom-a-10 border-right-a-10 align-center">
                                End
                            </th>
                            <th className="BebasNeue normal font-1-60 pad-10 white-a-1-bg border-bottom-a-10" colSpan="2">
                                Status
                            </th>
                            <th className="pad-10 white-a-1-bg gray-b border-bottom-a-10">
                                &nbsp;
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { release.ReleaseBlocks.map((releaseBlock) => <ReleaseBlockTableRow key={ releaseBlock.Id } releaseBlock={ releaseBlock } /> ) }
                    </tbody>
                </table>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseBlockTable);