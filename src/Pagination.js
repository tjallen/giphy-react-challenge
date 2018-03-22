import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor() {
    super();
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handlePrevClick() {
    const { pagination, resultsPerPage, query, apiCall } = this.props;
    const newOffset = pagination.offset - resultsPerPage;
    apiCall(query, newOffset);
  }
  handleNextClick() {
    const { pagination, resultsPerPage, query, apiCall } = this.props;
    const newOffset = pagination.offset + resultsPerPage;
    apiCall(query, newOffset);
  }
  render() {
    const { pagination, resultsPerPage } = this.props;
    const { offset, total_count } = pagination;
    const pageNumber = offset / resultsPerPage;
    return (
      <div>
        <button onClick={this.handlePrevClick}>prev</button>
        <p>{pageNumber}</p>
        <button onClick={this.handleNextClick}>next</button>
      </div>
    )
  }
}