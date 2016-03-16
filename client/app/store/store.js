var Redux = require('redux');
var createStore = Redux.createStore;
var applyMiddleware = Redux.applyMiddleware;
// var ReactRouterRedux = require('react-router-redux');
// var routerReducer = ReactRouterRedux.routerReducer;
var rootReducer = require('../reducers/reducers').rootReducer;
var thunkMiddleware = require('redux-thunk').default;
// var browserHistory = require('react-router').browserHistory;
// var syncHistoryWithStore = require('react-router-redux').syncHistoryWithStore;
// var reduxRouterMiddleware = syncHistoryWithStore(browserHistory);

exports.configureStore = function(browserHistory) {
  var midWare = applyMiddleware(
    thunkMiddleware
    // reduxRouterMiddleware(browserHistory)
  )

  return createStore(rootReducer, midWare);
};


