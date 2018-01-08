import React              from 'react'
import PropTypes          from 'prop-types';
import { DropdownButton } from 'react-bootstrap'
import { MenuItem }       from 'react-bootstrap'

class MrcDropDownButton extends React.Component {

    constructor(props, context) {

        super(props, context)
    }

    render() {

        const title    = this.props.title
        const lookups  = this.props.lookups
        const onSelect = this.props.onSelect

        return (
                    <div>
                        <DropdownButton bsStyle='default' bsSize='sm' title={ title } onSelect={ onSelect } id={title + '_dropdown'}>
                            { lookups.map((lookup, index) => <MenuItem key={ title + index }
                                                                       tabIndex={ index } 
                                                                       eventKey={ lookup } 
                                                                       className={ lookup.active ? 'active' : 'not' } >
                                                                   { lookup.Description }
                                                             </MenuItem>) }
                        </DropdownButton>
                    </div>
               )
    }
}

MrcDropDownButton.propTypes = {
                                  title:    PropTypes.string.isRequired, 
                                  lookups:  PropTypes.arrayOf(PropTypes.shape({ Code: PropTypes.string, Description: PropTypes.string, active: PropTypes.bool })).isRequired, 
                                  onSelect: PropTypes.func
                              }

export default MrcDropDownButton