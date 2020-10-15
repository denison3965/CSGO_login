import React, { useEffect } from 'react';
import axios from 'axios';
import Routes from './router';


function App() {

  // useEffect(()=>{
  //   axios.get('/teste').then(result => {
  //       console.log(result)
  //     })
  // },[])

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
