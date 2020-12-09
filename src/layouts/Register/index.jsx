import React, { Component } from 'react';

class Home extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Home;