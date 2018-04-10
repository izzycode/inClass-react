import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import city from './city';
import currentDay from './currentDay';


const rootReducer = combineReducers({city, currentDay, routing: routerReducer });


export default rootReducer;
