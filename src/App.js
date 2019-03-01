import React, { Component } from 'react';

import './App.sass';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
