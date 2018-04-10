import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './css/global.css';
import WeatherForm from './components/WeatherForm';
import WeatherApp from './components/WeatherApp';

import { Provider } from 'react-redux';
import store, { history } from './store';


const Root = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route exact path="/" component={ WeatherForm } />
          <Route path="/weather/:weatherId" component={ WeatherApp } />
        </div>
      </Router>
    </Provider>
  )
}

render( <Root />, document.querySelector('#app') );
