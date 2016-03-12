var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;
var Main = require('../components/main');
var AuthContainer = require('../containers/authContainer');
var HomeContainer = require('../containers/homeContainer');
var SurveyContainer = require('../containers/surveyContainer');

var Routes = (
  <Router history={HashHistory}>
    <Route path='/' component={Main}>
      <Route path='signin' component={AuthContainer} />
      <Route path='signup' component={AuthContainer} />
      <Route path='home' component={HomeContainer} />
      <Route path='survey' component={SurveyContainer} />
    </Route>
  </Router>
)

module.exports = Routes;
