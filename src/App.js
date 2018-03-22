import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import ResultsList from './ResultsList';

class App extends Component {
  apiCall(query) {
    console.log('API', query)
    const giphyKey = 'uy4jAUKFBMvmVsq0YwWUBdCwGtB6X5kX';
    const limit = 10;
    const offset = 0;
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyKey}&limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(res => console.log(res))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy search</h1>
          <SearchInput apiCall={this.apiCall} />
        </header>
        <ResultsList />
      </div>
    );
  }
}

export default App;
