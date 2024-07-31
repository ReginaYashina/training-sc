import React from 'react';

import './App.css';
import Card from './components/Card';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper color='#ccc'>
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </div>
  );
}

export default App;
