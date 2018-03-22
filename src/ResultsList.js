import React, { Component } from 'react';

class ResultsList extends Component {
  render() {
    return (
      <ul>
        {this.props.results.map(res =>
          <p key={res.id}>{res.title}</p>
        )}
      </ul>
    )
  }
}

export default ResultsList;