import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">TIE_IN</h1>
        <p className="App-intro">
          Try searching for a user name
        </p>
        <SearchBox 
          placeholder="Search for .."
          items={['Eduard', 'god', 'Ward', 'Rahaf', 'Housni']} />
      </div>
    );
  }
}

export default App;
