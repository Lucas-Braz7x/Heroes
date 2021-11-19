import React from 'react';
import styles from './App.module.css';
import { mapBox } from './tools/apiMapBox';

function App() {
  console.log(mapBox)
  return (
    <div className={styles.pageMap}>
      <h1>Nois</h1>
    </div>
  );
}

export default App;
