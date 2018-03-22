import React, { Component } from 'react';
import './App.css';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import Modal from './Modal';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: {
        data: [],
        meta: null,
        pagination: null,
      },
      showingModal: false,
    };
    this.apiCall = this.apiCall.bind(this);
  }
  apiCall(query, offset = 0, limit = 10) {
    console.log('api call', query, offset, limit)
    if (!query) {
      this.clearResults();
      return;
    }
    const giphyKey = 'uy4jAUKFBMvmVsq0YwWUBdCwGtB6X5kX'; // on environment variable in production
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyKey}&limit=${limit}&offset=${offset}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          results: res,
          query,
        })
      });
  }
  clearResults() {
    this.setState({
      results: {
        data: [],
        meta: null,
        pagination: null,
      }
    });
  }
  handleShowGifModal(id) {
    console.log('show modal for', id)
  }
  render() {
    const { results, query, showingModal } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy search</h1>
          <SearchInput apiCall={this.apiCall} />
        </header>
        <Modal isVisible={showingModal} />
        <SearchResults
          apiCall={this.apiCall}
          results={results.data}
          pagination={results.pagination}
          query={query}
          onGifClick={this.handleShowGifModal}
        />
      </div>
    );
  }
}

export default App;
