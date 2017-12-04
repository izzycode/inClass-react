import React from 'react';
import { render } from 'react-dom';
import './css/global.css';
import WeatherForm from './components/WeatherForm';
import WeatherApp from './components/WeatherApp';

render( <WeatherApp />, document.querySelector('#app') );