import React             from 'react'
import PropTypes         from 'prop-types';

import MrcDropDownButton from '../common/MrcDropDownButton'

class ApplicationSearch extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.appNameRef = null

        this.handleAppNameRef = this.handleAppNameRef.bind(this)
    }

    componentWillMount () {

    }

    componentDidMount () {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

        if (this.appNameRef) {
            this.appNameRef.focus();
        }
    }

    handleAppNameRef(c) {
        this.appNameRef = c;
    }

    render() {

        const applicationGroups = this.props.applicationGroups
        const applicationTypes  = this.props.applicationTypes
        const selectAppGroup    = this.props.selectAppGroup
        const selectAppType     = this.props.selectAppType
        const clearSelections   = this.props.clearSelections

        return (
                    <div className="mrc-forms">
                        <table>
                          <tbody>
                              <tr>
                                  <td className="td">
                                      <input type="text" name="ApplicationName" placeholder="search..." className="width-100" autoFocus ref={this.handleAppNameRef} /><br/>
                                  </td>
                          
                                  <td>
                                      <MrcDropDownButton title="Groups" lookups={applicationGroups} onSelect={selectAppGroup} />
                                  </td>
                          
                                  <td>
                                      <MrcDropDownButton title="Types" lookups={applicationTypes} onSelect={selectAppType} />
                                  </td>
                          
                                  <td>
                                      <div>
                                          <button className="btn btn-sm btn-primary" onClick={clearSelections}>Clear</button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                        </table>
                    </div>
               )
    }
}

ApplicationSearch.propTypes = {
                                  applicationGroups: PropTypes.arrayOf(PropTypes.shape({ Code: PropTypes.string, Description: PropTypes.string, active: PropTypes.bool })).isRequired, 
                                  applicationTypes:  PropTypes.arrayOf(PropTypes.shape({ Code: PropTypes.string, Description: PropTypes.string, active: PropTypes.bool })).isRequired, 
                                  selectAppGroup:    PropTypes.func, 
                                  selectAppType:     PropTypes.func, 
                                  clearSelections:   PropTypes.func
                              }

export default ApplicationSearch
