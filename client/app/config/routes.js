var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;
var Main = require('../components/main');
var SurveyContainer = require('../containers/surveyContainer');

var Routes = (
  <Router history={HashHistory}>
    <Route path='/' component={Main}>
      <Route path='survey' component={SurveyContainer} />
    </Route>
  </Router>
)

module.exports = Routes;
