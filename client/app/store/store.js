var Redux = require('redux');
var createStore = Redux.createStore;
var applyMiddleware = Redux.applyMiddleware;
var rootReducer = require('../reducers/reducers').rootReducer;
var thunkMiddleware = require('redux-thunk').default;

var configureStore = function(browserHistory) {
  var midWare = applyMiddleware(thunkMiddleware);
  return createStore(rootReducer, midWare);
};

var store = configureStore();

console.log('store from the store ', store);

module.exports = store;
