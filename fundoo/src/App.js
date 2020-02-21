import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router/Router';
import { Provider } from 'react-redux'
import Store from "./Redux/store";

function App() {
  return (
    //<div className="App">
    <Provider store={Store}>
      <Router />
    </Provider>

    //</div>
  );
}

export default App;
