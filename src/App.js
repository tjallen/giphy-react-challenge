import React, { Component } from 'react';
import './App.css';

class App extends Component {
  query = '123'
  giphyKey = 'uy4jAUKFBMvmVsq0YwWUBdCwGtB6X5kX'
  limit = 10
  offset = 0
  componentDidMount() {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.query}&api_key=${this.giphyKey}&limit=${this.limit}&offset=${this.offset}`)
      .then(res => res.json())
      .then(res => console.log(res))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Giphy search</h1>
        </header>
      </div>
    );
  }
}

export default App;
