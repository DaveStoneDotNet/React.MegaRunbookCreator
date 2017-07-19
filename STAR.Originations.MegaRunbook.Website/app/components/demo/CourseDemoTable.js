import React                  from 'react';
import ReactTable             from 'react-table';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { ProgressBar }        from 'react-bootstrap';

import toastr                 from 'toastr';

import * as demoActions       from '../../state/actions/demoActions';

class CourseDemoTable extends React.Component {

    constructor() {

        super();

        this.state = {
                         loading: false
                     };

        this.fetchData = this.fetchData.bind(this);
    }

    // The 'fetchData' method gets called whenever the table model changes, or the user sorts or changes pages.
    // You can set the 'loading' prop of the table to true to use the built-in one or show you're own loading bar if you want.

    fetchData(state, instance) {

        this.setState({ loading: true });

        const sortInfo = () =>
        {
            if (state.sorted) {
                if (state.sorted.length > 0) {
                    return {
                                PropertyName: state.sorted[0].id, 
                                SortOrder:    state.sorted[0].desc ? 'Descending' : 'Ascending'
                            }
                }
            }
            return {
                       PropertyName: 'Id', 
                       SortOrder:    'Ascending' 
                   }
        }

        const request = {
                            Paging: {
                                        PageNumber:     state.page,
                                        RecordsPerPage: state.pageSize, 
                                        SortInfo:       [sortInfo()]
                                    }
                        };

        this.props.actions.demoActions.getCourseDemos(request)
            .then((response) => {

            })
            .catch((error) => { 
                toastr.error('ERROR');
                console.log(error);
            })
            .then(() => {
                this.setState({ loading: false });
            });
    }

    render() {

        const loadingState = this.state.loading;
        
        const tableColumns = [
                                { 
                                    id:              'Id', 
                                    Header:          'ID', 
                                    accessor:        'Id', 
                                    resizable:       false, 
                                    width:           50, 
                                    className:       'align-left',
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'Key',  
                                    accessor:        'Key', 
                                    width:           100, 
                                    className:       'align-left',
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'Author Id',  
                                    accessor:        'AuthorId', 
                                    width:           100, 
                                    className:       'align-left',
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'Title', 
                                    accessor:        'Title', 
                                    width:           100, 
                                    className:       'align-left',
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'Category', 
                                    accessor:        'Category',
                                    width:           100, 
                                    className:       'align-left',
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          'Length', 
                                    accessor:        'Length',
                                    width:           100, 
                                    className:       'align-left',
                                    headerClassName: 'align-left' 
                                }, 
                                { 
                                    Header:          ' '
                                }
        ];

        return (
            <div>
                <div className="table-wrap">
                    <ReactTable className="-striped -highlight"
                            columns={tableColumns}
                            defaultPageSize={10}
                            manual 
                            data={this.props.courseDemos.Items}             // Set the rows to be displayed
                            pages={this.props.courseDemos.TotalPageCount}   // Display the total number of pages
                            onFetchData={this.fetchData}                    // Request new data when things change
                            loading={loadingState}
                            getTdProps={(state, rowInfo, column, instance) => { return { onClick: e => { console.log('SELECTED: '+ rowInfo.original.Id + ' ' + rowInfo.original.Key + ' ' + rowInfo.original.Title ) } } }}
                    />
                    <div>
                        <ProgressBar active now={100} active={loadingState} className={loadingState ? 'opacity-90' : 'invisible'} style={{height: '5px'}} />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
               courseDemos: state.demo.courseDemos
           };
}

function mapDispatchToProps(dispatch) {
    return {
               actions: {
                            demoActions: bindActionCreators(demoActions, dispatch)
                        }
           };
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseDemoTable);