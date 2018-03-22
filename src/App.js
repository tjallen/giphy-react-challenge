import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import ResultsList from './ResultsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {
        data: [],
        meta: null,
        pagination: null,
      }
    };
    this.handleApiCallSuccess = this.handleApiCallSuccess.bind(this);
    this.apiCall = this.apiCall.bind(this);
  }
  apiCall(query) {
    console.log('API', query)
    const giphyKey = 'uy4jAUKFBMvmVsq0YwWUBdCwGtB6X5kX';
    const limit = 10;
    const offset = 0;
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyKey}&limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          results: res,
        })
      });
  }
  handleApiCallSuccess(res) {
    this.setState({
      results: {
        data: res.data,
        meta: res.meta,
        pagination: res.pagination,
      }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy search</h1>
          <SearchInput apiCall={this.apiCall} />
        </header>
        <ResultsList results={this.state.results.data} />
      </div>
    );
  }
}

export default App;
