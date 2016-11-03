'use strict';

import React from 'react';
import ToDoItemComponent from './ToDoItemComponent'
import ToDoStore from '../stores/ToDoStore'

require('styles//ToDoList.css');

class ToDoListComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ToDoStore.getAll()
    };
  }

  componentWillMount() {
    ToDoStore.on("change", () => {
      this.setState({
        todos: ToDoStore.getAll()
      });
    });
  }
  
  renderView(todos) {
    return todos.map(function(todo){
      return <ToDoItemComponent text={todo.task} key={todo.id} />
    })
  }

  render() {
    var self = this;
    return (
      <div className="todolist-component">
        {self.renderView(self.state.todos)}
      </div>
    );
  }
}

ToDoListComponent.displayName = 'ToDoListComponent';

// Uncomment properties you need
// ToDoListComponent.propTypes = {};
// ToDoListComponent.defaultProps = {};

export default ToDoListComponent;
