import React from 'react'

import './SortHeader.css'

class SortHeader extends React.Component {

    constructor(props, context) {

        super(props, context)

        this.state = {
                         sortIndicator: 'sort-indicator-hidden', 
                         icon:          'fa fa-sort-asc'
                     }
    }

    getSortDirection() {

        let sortDirection = {
                                sortIndicator: 'sort-indicator sort-indicator-hidden', 
                                icon:          'fa fa-minus'
                            }

        if (this.props.propertyName === this.props.selectedSortInfo.PropertyName) {

            console.log('PROPERTY NAME', this.props.propertyName)
            console.log('SELECTED SORT INFO', this.props.selectedSortInfo)

            switch (this.props.selectedSortInfo.SortOrder) {
                case 'Ascending':
                    sortDirection = { sortIndicator: 'sort-indicator sort-indicator-asc', icon: 'fa fa-sort-desc', tip: 'sorted a..z' }
                    break
                case 'Descending':
                    sortDirection = { sortIndicator: 'sort-indicator sort-indicator-desc', icon: 'fa fa-sort-asc', tip: 'sorted z..a' }
                    break
                default:
                    sortDirection = { sortIndicator: 'sort-indicator sort-indicator-hidden', icon: 'fa fa-minus', tip: 'not sorted' }
                    break
            }
        }

        return sortDirection
    }

    render() {

        const sortDirection = this.getSortDirection()

        const title = this.props.title
        
        return (
                    <div style={{ userSelect: 'none' }} title={ sortDirection.tip }>
                        <span>{ title }</span><span className={sortDirection.sortIndicator}><i className={sortDirection.icon}/></span>
                    </div>
               )
    }
}

export default SortHeader
