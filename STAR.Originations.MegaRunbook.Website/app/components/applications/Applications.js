import React    from 'react';

class Applications extends React.Component {

    constructor(props, context) {

        super(props, context);

        this.state = {
                         someRandomValue: null
                     };
    }

    render() {
    return (
        <div>
    
          <div className='row'>
              <div className='col-md-12 border-bottom-a-10 margin-bottom-10'>
                  <div className='float-right Lato font-1-60 opacity-50'>
                      Application Links & Locations
                  </div>
                  <div className='mrc-forms'>
                      <table>
                      <tbody>
                          <tr>
                              <td className='td'>
                                  <input type='text' name='ApplicationName' placeholder='search...' className='width-100' />
                              </td>
    
                              <td>
    
                                  <div className='btn-group' dropdown keyboardNav='true'>
                                      <button id='simple-btn-keyboard-nav' type='button' className='btn btn-sm btn-default' dropdownToggle>
                                          Group <span className='caret'></span>
                                      </button>
                                      <ul className='dropdown-menu' dropdownMenu role='menu'>
                                          <li role='menuitem'><a className='dropdown-item'>lookup.Description</a></li>
                                      </ul>
                                  </div>
    
                              </td>
    
                              <td>
    
                                  <div className='btn-group' dropdown keyboardNav='true'>
                                      <button id='simple-btn-keyboard-nav' type='button' className='btn btn-sm btn-default' dropdownToggle>
                                          Type <span className='caret'></span>
                                      </button>
                                      <ul className='dropdown-menu' dropdownMenu role='menu' aria-labelledby='simple-btn-keyboard-nav'>
                                          <li role='menuitem'><a className='dropdown-item'>lookup.Description</a></li>
                                      </ul>
                                  </div>
    
                              </td>
    
                              <td>
                                  <div>
                                      <button className='btn btn-sm btn-primary' onClick={() => this.setState({someRandomValue: 'MONKEY'})}>Clear</button> { this.state.someRandomValue }
                                  </div>
                              </td>
    
                          </tr>
                      </tbody>
                      </table>
                  </div>
              </div>
          </div>
    
          <div className='row'>
              <div className='col-md-4'>
    
                  <div>
                      <div className='float-right align-right'>
                          pagedApplicationLink.TotalRecordCount plural: 'application' }}
                          <div className='small-caps opacity-50'>
                              <span>selectedApplicationGroup.Description</span> <span>selectedApplicationType.Description</span>
                          </div>
                      </div>
                      <div className='fat-header'>
                          Application
                      </div>
                  </div>
    
                  <table className='mrc-data-table'>
                      <thead>
                      <tr>
                          <th style={{width: '80%'}}><mrc-table-sorter PropertyName='Name'>Name</mrc-table-sorter></th>
                          <th style={{width: '19%'}}><mrc-table-sorter PropertyName='ApplicationType.Description'>Type</mrc-table-sorter></th>
                          <th style={{width: '1%' }}> </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>item.Name</td>
                          <td>item.ApplicationType.Description</td>
                          <td><span className='opacity-50 font-0-75 pad-right-10'>edit</span></td>
                      </tr>
                      </tbody>
                      <tfoot>
                      <tr>
                          <td colspan='2'>
                              mrcBootstrapPaginator
                          </td>
                      </tr>
                      </tfoot>
                  </table>
    
              </div>
              <div className='col-md-4 align-top'>
                  <div className='fat-header'>
                      Sites / Services
                  </div>
                  <div>
                      <div className='row'>
                          <div className='link-table'>
                              <div className='link-tr'>
                                  <div className='link-td'>
                                      serviceLink.ServiceName
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='col-md-4'>
                  <div className='fat-header'>
                      Environments
                  </div>
                  <div>
                      <div className='link-table'>
                          <div className='link-tr'>
                              <div className='link-td align-right border-right-a-20' style={{width: '15%'}}>
                                  environmentLink.Server.Environment.Name
                              </div>
                              <div className='link-td'>
                                  <a href='environmentLink.Url' title='environmentLink.Url' target='_blank' className='static-link'><i className='fa fa-external-link'></i></a> environmentLink.Server.Name
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    
    
    
        </div>
    );
    }
}

export default Applications;
