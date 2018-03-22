import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.debouncedSubmit = debounce(this.handleSubmit, 450);
  }
  handleChange(e) {
    const query = e.target.value;
    this.debouncedSubmit(query);
  }
  handleSubmit(query) {
    this.props.apiCall(query);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search GIPHY"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchInput;