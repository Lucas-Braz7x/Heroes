import React, { useEffect } from 'react';
import { Home } from './Pages/Home';
//import styles from './App.module.css';

function App() {
  useEffect(() => {
    getContent();
  }, []);

  const getContent = async () => {
    const response = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
    const data = await response.json();
    console.log(data)
  }


  return <Home />
}

export default App;
