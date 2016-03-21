var Redux = require('redux');
var createStore = Redux.createStore;
var applyMiddleware = Redux.applyMiddleware;
// var ReactRouterRedux = require('react-router-redux');
// var routerReducer = ReactRouterRedux.routerReducer;
var rootReducer = require('../reducers/reducers').rootReducer;
var thunkMiddleware = require('redux-thunk').default;
// var browserHistory = require('react-router').browserHistory;
// var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
// var routerMiddleware = require('react-router-redux').routerMiddleware;

var configureStore = function(browserHistory) {
  var midWare = applyMiddleware(
    thunkMiddleware
  );
  return createStore(rootReducer, midWare);
};

var store = configureStore();

console.log('store from the store ', store);

module.exports = store;
