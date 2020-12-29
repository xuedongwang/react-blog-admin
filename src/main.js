import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import { AppContainer } from 'react-hot-loader';
import rootReducer from './reducers';
import { fetchUserinfoAsync } from './actions'
import App from './App.jsx';
import './assets/scss';
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(rootSaga);

store.dispatch(fetchUserinfoAsync());

const render = App => {
  ReactDOM.render(
    <AppContainer>
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </AppContainer>,
    document.querySelector('#app')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const nextApp = require('./App').default;
    render(nextApp);
  })
}