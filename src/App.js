import React, { Component } from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <GlobalStyle />
        <h1>App</h1>
      </>
    );
  }
}

export default App;
