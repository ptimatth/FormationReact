import React, {Component} from 'react';
import './params.css'

class Params extends Component {
  render () {
    console.log(this.props)

    return (
      <div>
          <h1>ceci est mon params </h1>
          <p>Paramètre : {this.props.match.params.custom}</p>
      </div>
    );
  }
}

export default Params