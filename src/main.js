import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas';
import rootReducer from './reducers';
import App from './App.jsx';
import './static/scss';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);