import React, { Component } from 'react';
import Gif from './Gif';
import Pagination from './Pagination';

class SearchResults extends Component {
  render() {
    const { results, pagination } = this.props;
    if (results.length === 0) return null;
    return (
      <div>
        <ul>
          {results.map(res =>
            <Gif
              key={res.id}
              src={res.images.fixed_height.url}
              title={res.title}
            />
          )}
        </ul>
        <Pagination pagination={pagination} />
      </div>

    )
  }
}

export default SearchResults;