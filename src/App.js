import React from 'react';

// components
import Header from './components/Header';
// styles
import { GlobalStyle } from './GlobalStyle'

function App() {
  return (
    <div className="App">
      <Header/>
      I am up. 
      <GlobalStyle />
    </div>
  );
}

export default App;
