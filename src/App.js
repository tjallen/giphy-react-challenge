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
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }
  componentDidMount() {
    this.apiCall('maru')
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
  handleShowModal(id) {
    const modalGif = this.state.results.data.find(res => res.id === id);
    console.log('show modal for', id, modalGif);
    this.setState({
      showingModal: true,
      modalGif,
    });
  }
  handleHideModal() {
    this.setState({
      showingModal: false,
      modalGif: null,
    });
  }
  render() {
    const { results, query, showingModal, modalGif } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy search</h1>
          <SearchInput apiCall={this.apiCall} />
        </header>
        <Modal
          isVisible={showingModal}
          modalGif={modalGif} 
          onModalCloseClick={this.handleHideModal}
        />
        <SearchResults
          apiCall={this.apiCall}
          results={results.data}
          pagination={results.pagination}
          query={query}
          onGifClick={this.handleShowModal}
        />
      </div>
    );
  }
}

export default App;
