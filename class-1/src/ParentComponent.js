import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  message = 'Buenos días hijo!'

  render() {
    return (
      <div>
        <ChildComponent message={this.message} />
      </div>
    );
  }
}

export default ParentComponent;