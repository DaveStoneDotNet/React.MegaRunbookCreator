// OBSOLETE

import React, {Component} from 'react';
import {Container}        from 'flux/utils';

import DraftStore         from '../../stores/DraftStore';
import CardActionCreators from '../../actions/CardActionCreators';

import CardForm           from './CardForm';

class NewCard extends Component{

  handleChange(field, value){
    CardActionCreators.updateDraft(field, value);
  }

  handleSubmit(e){
    e.preventDefault();
    CardActionCreators.addCard(this.state.draft);
    this.props.history.pushState(null,'/');
  }

  handleClose(e){
    this.props.history.pushState(null,'/');
  }

  componentDidMount() {
      setTimeout(() => CardActionCreators.createDraft(), 0);
  }

  render(){
    return (
      <CardForm buttonLabel  = "Create Card"
                draftCard    = { this.state.draft             }
                handleChange = { this.handleChange.bind(this) }
                handleSubmit = { this.handleSubmit.bind(this) }
                handleClose  = { this.handleClose.bind(this)  } />
    );
  }
}

NewCard.getStores = () => ([DraftStore]);
NewCard.calculateState = (prevState) => ({
  draft: DraftStore.getState()
});

export default Container.create(NewCard);
