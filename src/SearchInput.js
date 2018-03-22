import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

const Input = styled.input`
  padding: 10px;
`;

const InputField = styled(Input)`
  border-radius: 3px;
  border: none;
`;

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
        <InputField
          type="text"
          placeholder="Search GIPHY"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SearchInput;