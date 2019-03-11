require('chai').should();
const RouteSet = require('../src/router/RouteSet');
const { spy } = require('sinon');

describe('Routing', function() {
  require('./router/RouteSet');
  require('./router/bearerAuth');
  require('./router/cookieAuth');
});

describe('Middleware', function() {
  require('./middleware/help-page');
});

describe('Model', function() {
  require('./model/token');
});
