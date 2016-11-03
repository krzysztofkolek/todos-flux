require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ToDoListComponent from './ToDoListComponent'


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ToDoListComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
