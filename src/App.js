import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search : "..." 
    }
  }
 
  componentsDidMount = () => {
    axios.get("/hashtags").then(Response => {
      console.log(Response)
    })
  }; 
  
  render() {
    return (
      <div className="App">
        <h1 className="App-title">TIE_IN</h1>
        <p className="App-intro">
          Try searching for a user name
        </p>
    <button> Search {this.setState.search }</button>

        <SearchBox 
          placeholder="Search for .."
          items={['Eduard', 'god', 'Ward', 'Rahaf', 'Housni']} />
      </div>
    );
  }
}

export default App;
