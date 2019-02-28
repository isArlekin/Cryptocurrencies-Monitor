import React, { Component } from 'react';

import './App.sass';
import Header from "./components/header/Header";
import PageContainer from "./containers/PageContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <PageContainer/>
      </div>
    );
  }
}

export default App;
