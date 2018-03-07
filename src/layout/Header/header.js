import React, { Component } from 'react';
import '../../App.css';


class header extends Component {
  render() {
    return (
      <div>
          -Header-
          {this.props.siteName.map(el =>

          <a href = {el.link} key={el.link}>{el.name}</a>
          )}


      </div>
    );
  }
}

export default header;
