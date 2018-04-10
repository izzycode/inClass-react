import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';
import sample_city from './sample-city';


const defaultState = {
  city: sample_city,
  currentDay: sample_city[0]
}

export const history = createHistory();
const middleware = routerMiddleware(history);

const chromeExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
                          rootReducer,
                          defaultState,
                          compose(
                                  applyMiddleware(middleware),
                                  chromeExtension
                          )
                        );

export default store;
