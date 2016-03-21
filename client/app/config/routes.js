var React = require('react');
var ReactRouter = require('react-router');
var Provider = require('react-redux').Provider;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
// var ReactRouterRedux = require('react-router-redux');
// var syncHistoryWithStore = ReactRouterRedux.syncHistoryWithStore;
var Main = require('../components/main');
var AuthContainer = require('../containers/authContainer');
var HomeContainer = require('../containers/homeContainer');
var SurveyContainer = require('../containers/surveyContainer');
var ProfileContainer = require('../containers/profileContainer');
var About = require('../components/about');
// var reducers = require('../reducers/reducers');
// var store = require('../store/store');

// var history = syncHistoryWithStore(browserHistory, store);

var Routes = (
  // <Provider store={this.props.store}>
  //   <Router history={this.props.history}>
      <Route path='/' component={Main}>
        <Route path='signin' component={AuthContainer} />
        <Route path='signup' component={AuthContainer} />
        <Route path='home' component={HomeContainer} />
        <Route path='survey' component={SurveyContainer} />
        <Route path='profile' component={ProfileContainer} />
        <Route path='about' component={About} />
      </Route>
  //   </Router>
  // </Provider>
)
console.log('history from the routing page ', history);
console.log('store from the routing page', Router.props);

module.exports = Routes;