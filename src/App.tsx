import React from 'react';
import './App.css';
import MainRouter from './Router';
import Header from './components/header/header'

function App() {
  return (
    <div className="App">
      <Header></Header>
     <MainRouter></MainRouter>
    </div>
  );
}

export default App;
