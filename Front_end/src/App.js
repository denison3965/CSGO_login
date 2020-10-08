import React, { useEffect } from 'react';
import axios from 'axios';
import Login from './components/login'


function App() {

  useEffect(()=>{
    axios.get('/teste').then(result => {
        console.log(result)
      })
  },[])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
