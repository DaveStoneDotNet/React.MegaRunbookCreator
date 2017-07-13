import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

class ReleaseBlockTable extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        const release = this.props.release;
        console.log('RELEASE TABLE', this.props);

        return (
            <div>
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
                        { release.ReleaseBlocks.map((releaseBlock) => <tr key={ releaseBlock.Id }><td colSpan="8">{ releaseBlock.Id }</td></tr>) }
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