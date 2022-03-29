import './App.css';
import Nav from './Views/Nav';
import { useState, useEffect } from 'react'
import Covid from './Views/Covid';

function App() {

  let [name, setName] = useState('John');
  // const [address, setAddress] = useState('')
  
  useEffect(() => {

  },[])

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Hello world with React from {name}</h1>
        {/* <Covid /> */}
      </header>
    </div>
  );
}

export default App;
