'use strict';

import React from 'react';

require('styles//ToDoItem.css');

class ToDoItemComponent extends React.Component {
  render() {
    return (
      <div className="todoitem-component">
        {this.props.text}
      </div>
    );
  }
}

ToDoItemComponent.displayName = 'ToDoItemComponent';

// Uncomment properties you need
// ToDoItemComponent.propTypes = {};
// ToDoItemComponent.defaultProps = {};

export default ToDoItemComponent;
