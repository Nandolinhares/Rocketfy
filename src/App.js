import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';

{/* <> é o fragment do react. É uma div mas não aparece no html */}

function App() {
  return (
    <>
      <Header/>
      <Board />
      
      <GlobalStyle />
    </>
  );
}

export default App;
