import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Redirect} from "react-router-dom";
import { Provider } from 'react-redux';
//fonts
import "typeface-roboto";
// data
import store from './store/reduxStore';

import App from './App';



ReactDOM.render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <Route path='/' render={() => <Redirect from='/' to="/start" />} />
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
