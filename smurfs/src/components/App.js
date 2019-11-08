import React from "react";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import "./App.css";
import GetSmurf from "./GetSmurf";

export const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {

  return (
    <div className="App">
      <h1>Smurfy's Smurf Village</h1>
      <div>
        <GetSmurf />
      </div>
    </div>
  );

}

export default App;
