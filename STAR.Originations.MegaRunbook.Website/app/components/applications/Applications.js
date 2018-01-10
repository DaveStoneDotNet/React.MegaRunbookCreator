import React                  from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button }             from 'react-bootstrap'
import { DropdownButton }     from 'react-bootstrap'
import { MenuItem }           from 'react-bootstrap'

import ApplicationSearch      from './ApplicationSearch'

import './applications.css'

import * as applicationActions from '../../state/actions/applicationActions'
import * as appLinkActions     from '../../state/actions/appLinkActions'

class Applications extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.state = {
                         isSaving:          false, 
                         isLoading:         false, 
                         applicationGroups: props.applicationGroups.map(o => { return {Code: o.Code, Description: o.Description, active: false} }), 
                         applicationTypes:  props.applicationTypes.map(o  => { return {Code: o.Code, Description: o.Description, active: false} }), 
                         selectedAppGroup:  { }, 
                         selectedAppType:   { }
        }

        this.selectAppGroup        = this.selectAppGroup.bind(this)
        this.selectAppType         = this.selectAppType.bind(this)
        this.clearSelections       = this.clearSelections.bind(this)
        this.clearSelectedAppGroup = this.clearSelectedAppGroup.bind(this)
        this.clearSelectedAppType  = this.clearSelectedAppType.bind(this)
    }

    // ------------------------------------------------------------------------------------------------

    componentWillMount () {
        const request = {
                            Paging: { PageNumber: 0, RecordsPerPage: 100, SortInfo: [{ PropertyName: 'Id', SortOrder: 'Descending' }] }
                        }
        this.getApplicationLinks(request)
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

    getApplicationLinks(request) {

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
        this.setState({ applicationGroups: applicationGroups, selectedAppGroup: selectedAppGroup })
    }

    selectAppType(selectedAppType) {

        selectedAppType.active = true
        const applicationTypes = this.state.applicationTypes.map(o => { return { Code: o.Code, Description: o.Description, active: o.Code === selectedAppType.Code } }) 
        this.setState({ applicationTypes: applicationTypes, selectedAppType: selectedAppType })
    }

    clearSelections() {

        const applicationGroups = this.state.applicationGroups.map(o => { return { Code: o.Code, Description: o.Description, active: false } }) 
        const applicationTypes  = this.state.applicationTypes.map(o  => { return { Code: o.Code, Description: o.Description, active: false } })

        this.setState({ applicationGroups: applicationGroups, applicationTypes: applicationTypes, selectedAppGroup: { }, selectedAppType: { }  })
    }

    clearSelectedAppGroup() {

        const applicationGroups = this.state.applicationGroups.map(o => { return { Code: o.Code, Description: o.Description, active: false } }) 

        this.setState({ applicationGroups: applicationGroups, selectedAppGroup: { } })
    }

    clearSelectedAppType() {

        const applicationTypes  = this.state.applicationTypes.map(o  => { return { Code: o.Code, Description: o.Description, active: false } })

        this.setState({ applicationTypes: applicationTypes, selectedAppType: { }  })
    }

    getApplicationHeader() {

        let header = 'Application'

        if (this.props.appLinkList) {
            if (this.props.appLinkList.Items) {
                const count = this.props.appLinkList.Items.length
                header = count === 1 ? '1 Application' : count + ' Applications'
            }
        }

        return header
    }

    // ------------------------------------------------------------------------------------------------

    render() {
        
        const appHeader        = this.getApplicationHeader()
        const appLinkListItems = this.props.appLinkList.Items

        const applicationGroups = this.state.applicationGroups
        const applicationTypes  = this.state.applicationTypes

        const selectedAppGroup = this.state.selectedAppGroup
        const selectedAppType  = this.state.selectedAppType

        const selectedAppGroupStyle = { display: selectedAppGroup.Description ? '' : 'none' }
        const selectedAppTypeStyle  = { display: selectedAppType.Description  ? '' : 'none' }

        const clearDropDownIcon = { display: selectedAppGroup.Description || selectedAppType.Description  ? '' : 'none' }

        return (
            <div className="margin-top-20">
    
              <div className="row">
                  <div className="col-md-12 border-bottom-a-10 margin-bottom-10">
                      <div className="float-right Lato font-1-60 opacity-50">
                          Application Links and Locations
                      </div>
                      <ApplicationSearch applicationGroups = {applicationGroups} 
                                         applicationTypes  = {applicationTypes} 
                                         selectAppGroup    = {this.selectAppGroup} 
                                         selectAppType     = {this.selectAppType} 
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
                              <th style={{width: '80%'}}><mrc-table-sorter PropertyName="Name">Name</mrc-table-sorter></th>
                              <th style={{width: '19%'}}><mrc-table-sorter PropertyName="ApplicationType.Description">Type</mrc-table-sorter></th>
                              <th style={{ width: '1%' }}>-</th>
                          </tr>
                          </thead>
                          <tbody>
                              {
                                  appLinkListItems.map((item, index) => 
                                      <tr key={index}>
                                          <td>{ item.Name }</td>
                                          <td>{ item.ApplicationType.Description }</td>
                                          <td><span className="opacity-50 font-0-75 pad-right-10">edit</span></td>
                                      </tr>
                                  )
                          }
                          </tbody>
                          <tfoot>
                          <tr>
                              <td colSpan="2">
                                  mrcBootstrapPaginator
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