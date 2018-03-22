import React, { Component } from 'react';
import Gif from './Gif';
import Pagination from './Pagination';

class SearchResults extends Component {
  render() {
    const { results, pagination, apiCall, query } = this.props;
    if (results.length === 0) return null;
    return (
      <div>
        <ul>
          {results.map(res =>
            <Gif
              id={res.id}
              key={res.id}
              onGifClick={this.props.onGifClick}
              src={res.images.fixed_height.url}
              title={res.title}
            />
          )}
        </ul>
        <Pagination
          pagination={pagination}
          resultsPerPage={10}
          apiCall={apiCall}
          query={query}
        />
      </div>

    )
  }
}

export default SearchResults;