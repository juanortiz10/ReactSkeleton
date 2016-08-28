var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

//Views//
var Index = require('./components/views/Index.jsx');
var Base = require('./components/Base.jsx');

var Routes = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
    <Route path="/" component={Base}>
      <Route path="index" component={Index}/>
    </Route>
  </Router>
);

module.exports = Routes;
