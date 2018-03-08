import React, { Component } from 'react';
import '../../App.css';


class header extends Component {
  render() {
    return (
      <div>
          -Header-
          <span className = "home" >{this.props.lang}</span>
      </div>
    );
  }
}

export default header;
