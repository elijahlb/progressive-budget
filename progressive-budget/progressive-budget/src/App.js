import React from 'react';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction'

function App() {
  return (
    <div>
      <Header />
      <div class = "container">
      
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
