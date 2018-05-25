import React, {Component} from 'react';
import './home.css';


class Home extends Component {
  render () {
    console.log(this.props)

    return (
      <div>
          <h1>Home page</h1>
      </div>
    );
  }
}

export default Home