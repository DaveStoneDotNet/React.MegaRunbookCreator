import React         from 'react'
import PropTypes     from 'prop-types'

import './RecordsPerPageSelector.css'

class RecordsPerPageSelector extends React.Component {

    static propTypes    = {
                          }

    static defaultProps = {
                          }

    constructor(props) {

        super(props)

        this.state = {
                         chips: [
                                     { pageCount:  10, isActive: true  }, 
                                     { pageCount:  50, isActive: false }, 
                                     { pageCount: 100, isActive: false }
                                ]
                     }
    }

    componentWillMount() {
    }

    componentWillReceiveProps() {

    }

    componentWillUnmount() {

    }

    onChange(index) {
        const chips = [...this.state.chips]
        chips.forEach((o, i) => i === index ? o.isActive = true : o.isActive = false)
        this.setState({chips})

        const pageCount = chips[index].pageCount
        this.props.onChange(pageCount)
    }
    
    render() {
        const chips = this.state.chips
        return (
                    <ul className="pagination">
                    
                        { chips.map((chip, index) => <li className={ chip.isActive ? 'active' : '' } key={ index } onClick={() => this.onChange(index)}><a href="#">{chip.pageCount}</a></li>) }
                        
                    </ul>
               )
    }
}

export default RecordsPerPageSelector
