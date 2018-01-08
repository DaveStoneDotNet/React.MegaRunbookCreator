import React       from 'react'
import PropTypes   from 'prop-types'
import Select      from 'react-select'

import '../../styles/react-select.css'

class ApplicationGroupDropDown extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.state = {
                         selectValue:       '6',
                         selectDescription: '',
                         disabled:          false,
                         clearable:         false,
                         searchable:        this.props.searchable
        }
        
        this.updateValue = this.updateValue.bind(this)
    }

    updateValue(newValue) {
        const selectedItem = this.props.applicationGroups.find(o => o.Code === newValue)
        this.setState({ selectValue: newValue, selectDescription: selectedItem.Description })
    }

    render() {

        const applicationGroups = this.props.applicationGroups
        const options           = applicationGroups.map(o => { return { value: o.Code, label: o.Description } })

        return (
            <div>
                <Select id="app_group_select"
					    name="app_group_select"
					    ref="app_group_select"
					    autoFocus
					    simpleValue
					    options={options}
					    clearable={this.state.clearable}
					    disabled={this.state.disabled}
					    value={this.state.selectValue}
					    searchable={this.state.searchable}
					    onChange={this.updateValue}
					    openOnClick={false}
				    />
            </div>
           )
    }
}

ApplicationGroupDropDown.propTypes = {
                                         applicationGroups: PropTypes.array.isRequired
                                     }

export default ApplicationGroupDropDown
