import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
class Home extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <div>
        <Helmet>
          <title>{ this.props.title }</title>
        </Helmet>
        { this.props.children }
      </div>
    )
  }
}

export default Home;