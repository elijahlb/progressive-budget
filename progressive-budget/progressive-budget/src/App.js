import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';

function App() {
  return (
    <div>
      <Header />
      <div class = "container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
