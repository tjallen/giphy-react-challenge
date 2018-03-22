import React, { Component } from 'react';
import Gif from './Gif';

class ResultsList extends Component {
  render() {
    return (
      <ul>
        {this.props.results.map(res =>
          <Gif
            key={res.id}
            src={res.images.fixed_height.url}
            title={res.title} 
          />
        )}
      </ul>
    )
  }
}

export default ResultsList;