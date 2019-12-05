import React, { Component } from 'react';
import './MicroCouch.css';

class MicroCouch extends Component {
  state ={
    name : "" 
  };

  render() {
    return (
      <div className="MicroCouch">
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default MicroCouch;
