import React, { useEffect } from 'react';
import axios from 'axios';
import Routes from './router';

import Home from './pages/home'


function App() {

  // useEffect(()=>{
  //   axios.get('/teste').then(result => {
  //       console.log(result)
  //     })
  // },[])

  return (
    <div className="App">
      < Routes />
    </div>
  );
}

export default App;
