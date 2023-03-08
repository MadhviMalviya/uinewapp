import logo from './logo.svg';
import './App.css';
import React from 'react'


function App1() {
  return (
    <>
      <div className="App">
        <h1>Register here</h1>
        <App2 />
        <App3 />
        <App4 />
      </div>
    </>
  );
}


function App2() {
  return (
    <div>
      <input type={"text"} placeholder="mobile"  ></input>
    </div>
  )
}

function App3() {
  return (
    <div>
      <input type={"password"} placeholder="password"  ></input>
    </div>
  )
}

function App4() {
  return (
    <div>
      <button>submit</button>
    </div>
  )
}


export default App1;
