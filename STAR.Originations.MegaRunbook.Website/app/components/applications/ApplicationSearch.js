import React             from 'react'
import PropTypes         from 'prop-types';

import _                 from 'lodash';

import MrcDropDownButton from '../common/MrcDropDownButton'
import DebouncedInput    from '../common/DebouncedInput'

class ApplicationSearch extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.state = {
                          applicationName: '' 
                     }

        this.appNameRef = null

        this.handleAppNameRef = this.handleAppNameRef.bind(this)
        this.onAppNameChange  = this.onAppNameChange.bind(this)
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

    debouncer(applicationName) {
        console.log('DEBOUNCER', applicationName)
    }

    onAppNameChange(applicationName) {
        
        console.log('APP NAME CHANGE', applicationName)

        this.setState({ applicationName: applicationName })
        _.debounce(this.debouncer, 500)(applicationName)
    }

    render() {

        const applicationName   = this.state.applicationName

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
                                      <DebouncedInput value={applicationName} minLength={2} debounceTimeout={500} className="width-100" onChange={e => this.onAppNameChange(e.target.value)} autoFocus inputRef={this.handleAppNameRef}/><br/>
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
