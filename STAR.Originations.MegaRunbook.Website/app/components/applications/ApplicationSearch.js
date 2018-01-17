import React             from 'react'
import PropTypes         from 'prop-types';

import _                 from 'lodash';

import MrcDropDownButton from '../common/MrcDropDownButton'
import DebouncedInput    from '../common/DebouncedInput'

class ApplicationSearch extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.appNameRef = null

        this.initializeAppNameRef = this.initializeAppNameRef.bind(this)
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

    initializeAppNameRef(c) {
        this.appNameRef = c;
    }

    render() {

        const {
                applicationName,
                applicationGroups,
                applicationTypes,
                selectAppGroup,
                selectAppType,
                clearSelections,
                onAppNameChange
             } = this.props

        return (
                    <div className="mrc-forms">
                        <table>
                          <tbody>
                              <tr>
                                  <td className="td">
                                      <DebouncedInput value={applicationName} 
                                                      minLength={2} 
                                                      debounceTimeout={500} 
                                                      className="width-100" 
                                                      onChange={e => onAppNameChange(e.target.value)} 
                                                      inputRef={this.initializeAppNameRef} 
                                                      autoFocus /><br/>
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
