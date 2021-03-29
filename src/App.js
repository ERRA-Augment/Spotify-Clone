import React, { useEffect, useState } from "react";
import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify'


function App() {

  // Run code based on a given condition 


  const [token, setToken] = useState(null);

  useEffect(() => {

  // Stuff

  const hash = getTokenFromUrl();
  window.location.hash = "";

  const _token = hash.access_token;

  if (_token) {
    setToken(_token)
  }

  console.log("TOKENFACE", token);

  }, []);


  return (
    <div className="app">

      {
        token ? (
          <h1>I am faced in</h1>
        ) : ( 
        <Login />
        )
      }



        
    </div>
  );
}

export default App;
