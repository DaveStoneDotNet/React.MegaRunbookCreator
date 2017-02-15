import React, { Component } from 'react';
import { Container }        from 'flux/utils';

import KanbanBoard          from '../../components/demo/KanbanBoard';
import CardActionCreators   from '../../actions/CardActionCreators';
import CardStore            from '../../stores/CardStore';

import * as courseActions   from '../../actions/courseActions';

class KanbanBoardContainer extends Component {

    componentDidMount() {
        //CardActionCreators.fetchCourses();
        //courseActions.getCourses();
  }

  render() {
    let kanbanBoard = this.props.children && React.cloneElement(this.props.children, { cards: this.state.cards });
    return kanbanBoard;
  }

}

KanbanBoardContainer.getStores = () => ([CardStore]);
KanbanBoardContainer.calculateState = (prevState) => ({ cards: CardStore.getState() });

export default Container.create(KanbanBoardContainer);
