import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Provider is a react component which wraps your app and 'provides' your redux store to the rest of your application
import { Provider } from 'react-redux';
//function which returns store
import configureStore from './store/configureStore';

const store = configureStore()
// console.log('store', store)
// console.log('state', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
