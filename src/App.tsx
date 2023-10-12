import React, { useRef } from 'react';
import './App.css';
import Router from './Router';
import Header from './components/Header';
import { styled } from 'styled-components';



function App() {
 

  return (
    <>
    <Header />
    <main>
      <Router/>
    </main>
    </>
  );
}

export default App;
