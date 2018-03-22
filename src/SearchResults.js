import React, { Component } from 'react';
import Gif from './Gif';
import Pagination from './Pagination';
import styled from 'styled-components';

const ResultsList = styled('ul')`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

class SearchResults extends Component {
  render() {
    const { results, pagination, apiCall, query } = this.props;
    if (results.length === 0) return null;
    return (
      <div>
        <ResultsList>
          {results.map(res =>
            <Gif
              id={res.id}
              key={res.id}
              onGifClick={this.props.onGifClick}
              src={res.images.fixed_height.url}
              title={res.title}
            />
          )}
        </ResultsList>
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