import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button }             from 'react-bootstrap'
import { DropdownButton }     from 'react-bootstrap'
import { MenuItem }           from 'react-bootstrap'

import BootstrapPaginator     from '../common/BootstrapPaginator'
import RecordsPerPageSelector from '../common/RecordsPerPageSelector'
import SortHeader             from '../common/SortHeader'

import ApplicationSearch      from './ApplicationSearch'

import './applications.css'

import * as applicationActions from '../../state/actions/applicationActions'
import * as appLinkActions     from '../../state/actions/appLinkActions'

class Applications extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.state = {
                         isSaving:            false, 
                         isLoading:           false, 
                         applicationGroups:   props.applicationGroups.map(o => { return {Code: o.Code, Description: o.Description, active: false} }), 
                         applicationTypes:    props.applicationTypes.map(o  => { return {Code: o.Code, Description: o.Description, active: false} }), 
                         applicationRequest:  { Paging: { PageNumber: 1, RecordsPerPage: 10, SortInfo: [{ PropertyName: 'Id', SortOrder: 'Ascending' }] } }, 
                         selectedAppGroup:    { }, 
                         selectedAppType:     { }, 
                         applicationName:     '', 
                         appPage:             1, 
                         totalAppPages:       1 
                     }

        this.selectAppGroup         = this.selectAppGroup.bind(this)
        this.selectAppType          = this.selectAppType.bind(this)
        this.clearSelections        = this.clearSelections.bind(this)
        this.clearSelectedAppGroup  = this.clearSelectedAppGroup.bind(this)
        this.clearSelectedAppType   = this.clearSelectedAppType.bind(this)
        this.onAppNameChange        = this.onAppNameChange.bind(this)
        this.onPaginationChange     = this.onPaginationChange.bind(this)
        this.onRecordsPerPageChange = this.onRecordsPerPageChange.bind(this)
        this.onAppSort              = this.onAppSort.bind(this)
        this.onAppSelected          = this.onAppSelected.bind(this)
    }

    // ------------------------------------------------------------------------------------------------

    componentWillMount () {
        this.getApplicationLinks()
    }
    
    componentDidMount () {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

        if (this.appNameRef) {
            this.appNameRef.focus()
        }
    }
    
    // ------------------------------------------------------------------------------------------------

    getApplicationLinks() {

        // request = { 
        //              Name:               "", 
        //              ApplicationGroupId: "7", 
        //              ApplicationType:    {
        //                                    Code:        "WCF", 
        //                                    Description: "WCF Service"
        //                                  }, 
        //              Paging:             {
        //                                    PageNumber:      1, 
        //                                    RecordsPerPage: 10, 
        //                                    SortInfo:       [{
        //                                                        PropertyName: "Id", 
        //                                                        SortOrder:    "Descending"
        //                                                    }]
        //           }

        const selectedAppGroup     = this.state.selectedAppGroup
        const selectedAppType      = this.state.selectedAppType

        const request              = this.state.applicationRequest
        request.Name               = this.state.applicationName
        request.ApplicationGroupId = selectedAppGroup.Code
        request.ApplicationType    = { Code: selectedAppType.Code,  Description: selectedAppType.Description  }

        this.setState({ isLoading: true })

        this.props.actions.appLinkActions.getApplicationLinks(request)
                                         .then((response) => {
                                             console.log('RELEASE RESPONSE', response)
                                         })
                                         .catch(error => {
                                             console.log('ERROR GET RELEASE', error)
                                             toastr.error(error)
                                         })
                                         .then(() => { this.setState({ isLoading: false }) })
    }

    selectAppGroup(selectedAppGroup) {

        selectedAppGroup.active = true
        const applicationGroups = this.state.applicationGroups.map(o => { return { Code: o.Code, Description: o.Description, active: o.Code === selectedAppGroup.Code } }) 
        this.setState({ applicationGroups: applicationGroups, selectedAppGroup: selectedAppGroup }, () => { this.getApplicationLinks() })
    }

    selectAppType(selectedAppType) {

        selectedAppType.active = true
        const applicationTypes = this.state.applicationTypes.map(o => { return { Code: o.Code, Description: o.Description, active: o.Code === selectedAppType.Code } }) 
        this.setState({ applicationTypes: applicationTypes, selectedAppType: selectedAppType }, () => { this.getApplicationLinks() })
    }

    clearSelections() {

        const applicationGroups = this.state.applicationGroups.map(o => { return { Code: o.Code, Description: o.Description, active: false } }) 
        const applicationTypes  = this.state.applicationTypes.map(o  => { return { Code: o.Code, Description: o.Description, active: false } })

        this.setState({ applicationGroups: applicationGroups, applicationTypes: applicationTypes, selectedAppGroup: { }, selectedAppType: { } })

        this.onAppNameChange('')
    }

    clearSelectedAppGroup() {

        const applicationGroups = this.state.applicationGroups.map(o => { return { Code: o.Code, Description: o.Description, active: false } }) 

        this.setState({ applicationGroups: applicationGroups, selectedAppGroup: { } }, () => { this.getApplicationLinks() })
    }

    clearSelectedAppType() {

        const applicationTypes  = this.state.applicationTypes.map(o  => { return { Code: o.Code, Description: o.Description, active: false } })

        this.setState({ applicationTypes: applicationTypes, selectedAppType: { } }, () => { this.getApplicationLinks() })
    }

    getApplicationHeader() {

        let header = '0 Applications'

        if (this.props.appLinkList) {

            const { Items, TotalRecordCount, RecordsPerPage } = this.props.appLinkList

            if (Items) {
                const count = Items.length < RecordsPerPage ? Items.length : RecordsPerPage
                const total = TotalRecordCount
                header = count + ' of ' + total  + ' Total Applications'
            }
        }

        return header
    }

    calculatePageNumber() {

        // Attempting to handle page number issues. 
        // 
        // e.g. - The client-side works with one-based page numbers
        //      - The server-side works with zero-based page numbers
        // 
        // Additionally, when the component mounts, 'totalPageCount' is, via Redux 'connect' on the Redux store. 
        // If the page number is greater than the total number of pages ('totalPageCount') then an error is thrown.
        // 
        //      Error: getPaginationModel(): currentPage shouldn't be greater than totalPages
        // 

        const totalPageCount = this.props.appLinkList.TotalPageCount

        let pageNumber = this.state.applicationRequest.Paging.PageNumber
        pageNumber = pageNumber === 0 ? 1 : pageNumber
        pageNumber = pageNumber > totalPageCount ? totalPageCount : pageNumber

        return pageNumber
    }

    getSortInfo(key) {

        let sortInfo = { PropertyName: key, SortOrder: 'Ascending' }
        const index = this.state.applicationRequest.Paging.SortInfo.findIndex(o => o.PropertyName === key)

        if (index >= 0) {
            sortInfo = { ...this.state.applicationRequest.Paging.SortInfo[index] }
            switch (sortInfo.SortOrder) {
                case 'Ascending':
                    sortInfo.SortOrder = 'Descending'
                    break
                case 'Descending':
                    sortInfo.PropertyName = 'Id'
                    sortInfo.SortOrder     = 'Ascending'
                    break
                case '':
                    sortInfo.SortOrder = 'Ascending'
                    break
                default:
                    break
            }
        }

        return sortInfo
    }

    // ------------------------------------------------------------------------------------------------

    onAppNameChange(applicationName) {
        
        this.setState({ applicationName: applicationName }, () => { this.getApplicationLinks() })
    }

    onPaginationChange(pageNumber) {
        
        const applicationRequest = { ...this.state.applicationRequest }
        applicationRequest.Paging.PageNumber = pageNumber

        this.setState({applicationRequest: applicationRequest}, () => { this.getApplicationLinks() })
    }

    onRecordsPerPageChange(pageCount) {
        
        const applicationRequest = { ...this.state.applicationRequest }
        applicationRequest.Paging.RecordsPerPage = pageCount
        applicationRequest.Paging.PageNumber = 1

        this.setState({applicationRequest: applicationRequest}, () => { this.getApplicationLinks() })
    }

    onAppSort(appKey) {

        const applicationRequest = { ...this.state.applicationRequest }
        const sortInfo           = this.getSortInfo(appKey)

        applicationRequest.Paging.SortInfo = [sortInfo]
        this.setState({applicationRequest: applicationRequest}, () => { this.getApplicationLinks() })
    }

    onAppSelected(appKey) {
        
        console.log('APP SORT CHANGE', appKey)
    }

    // ------------------------------------------------------------------------------------------------

    render() {

        const appHeader        = this.getApplicationHeader()
        const pageNumber       = this.calculatePageNumber()
        const appLinkListItems = this.props.appLinkList.Items
        const totalPageCount   = this.props.appLinkList.TotalPageCount
        const recordsPerPage   = this.props.appLinkList.RecordsPerPage

        const indexer = (pageNumber-1) * recordsPerPage

        const {
                applicationGroups, 
                applicationTypes, 
                applicationName, 
                selectedAppGroup, 
                selectedAppType 
              }  = this.state
        
        const sortInfo = this.state.applicationRequest.Paging.SortInfo[0]

        const selectedAppGroupStyle = { display: selectedAppGroup.Description ? '' : 'none' }
        const selectedAppTypeStyle  = { display: selectedAppType.Description  ? '' : 'none' }

        const clearDropDownIcon     = { display: selectedAppGroup.Description || selectedAppType.Description  ? '' : 'none' }

        return (
            <div className="margin-top-20">
    
              <div className="row">
                  <div className="col-md-12 border-bottom-a-10 margin-bottom-10">
                      <div className="float-right Lato font-1-60 opacity-50">
                          Application Links and Locations
                      </div>
                      <ApplicationSearch applicationGroups = {applicationGroups} 
                                         applicationTypes  = {applicationTypes} 
                                         applicationName   = {applicationName}
                                         selectAppGroup    = {this.selectAppGroup} 
                                         selectAppType     = {this.selectAppType} 
                                         onAppNameChange   = {this.onAppNameChange}
                                         clearSelections   = {this.clearSelections} 
                                         />
                  </div>
              </div>
    
              <div className="row">
                  <div className="col-md-4">
    
                      <div>
                          <div className="float-right align-right">
                              <div className="small-caps opacity-50 margin-top-10">
                                  <span onClick={this.clearSelectedAppGroup} className="selected-app-group-type" style={ selectedAppGroupStyle } title="clear selected group">{ selectedAppGroup.Description }</span> <span onClick={this.clearSelectedAppType} className="selected-app-group-type" style={ selectedAppTypeStyle } title="clear selected type">{ selectedAppType.Description }</span><i className="fa fa-times-circle close-selected-app-group" style={ clearDropDownIcon } onClick={this.clearSelections} title="clear selections" />
                              </div>
                          </div>
                          <div className="fat-header">
                              { appHeader }
                          </div>
                      </div>
    
                      <table className="mrc-data-table">
                          <thead>
                          <tr>
                              <th style={{ width:  '1%' }}>&nbsp;</th>
                              <th style={{ width: '80%' }} onClick={ () => this.onAppSort('Name')                        } className="pointer"><SortHeader title="Name" propertyName="Name"                        selectedSortInfo={ sortInfo }/></th>
                              <th style={{ width: '19%' }} onClick={ () => this.onAppSort('ApplicationType.Description') } className="pointer"><SortHeader title="Type" propertyName="ApplicationType.Description" selectedSortInfo={ sortInfo }/></th>
                              <th style={{ width:  '1%' }}>&nbsp;</th>
                          </tr>
                          </thead>
                          <tbody>
                              {
                                  appLinkListItems.map((item, index) => 
                                      <tr key={index}>
                                          <td className="align-right opacity-50">{ indexer + (index + 1) }</td>
                                          <td>{ item.Name }</td>
                                          <td className="nowrap">{ item.ApplicationType.Description }</td>
                                          <td><span className="opacity-50 font-0-75 pad-right-10">edit</span></td>
                                      </tr>
                                  )
                          }
                          </tbody>
                          <tfoot>
                          <tr>
                              <td colSpan="4">
                                  <BootstrapPaginator currentPage = {pageNumber} 
                                                      totalPages  = {totalPageCount} 
                                                      onChange    = {this.onPaginationChange}
                                                      />
                                  <div className="float-right">
                                        <RecordsPerPageSelector onChange={ this.onRecordsPerPageChange } />
                                  </div>
                              </td>
                          </tr>
                          </tfoot>
                      </table>
    
                  </div>
                  <div className="col-md-4 align-top">
                      <div className="fat-header">
                          Sites / Services
                      </div>
                      <div>
                          <div className="row">
                              <div className="link-table">
                                  <div className="link-tr">
                                      <div className="link-td">
                                          serviceLink.ServiceName
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="fat-header">
                          Environments
                      </div>
                      <div>
                          <div className="link-table">
                              <div className="link-tr">
                                  <div className="link-td align-right border-right-a-20" style={{width: '15%'}}>
                                      environmentLink.Server.Environment.Name
                                  </div>
                                  <div className="link-td">
                                      <a href="environmentLink.Url" title="environmentLink.Url" target="_blank" className="static-link"><i className="fa fa-external-link" /></a> environmentLink.Server.Name
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return { 
               applicationGroups: state.app.lookups.ApplicationGroups, 
               applicationTypes:  state.app.lookups.ApplicationTypes, 
               appLinkList:       state.appLinks.appLinkList
           }
}

const mapDispatchToProps = (dispatch) => { 
    return {
               actions: {
                            applicationActions: bindActionCreators(applicationActions, dispatch), 
                            appLinkActions:     bindActionCreators(appLinkActions, dispatch)
                        }
           }
}

export default connect(mapStateToProps, mapDispatchToProps)(Applications)