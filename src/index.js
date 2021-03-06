import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './State/StateProvider'
import reducer , { initialState } from './State/reducer'


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} 
    reducer={reducer} >
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

