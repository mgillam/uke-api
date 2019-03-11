require('chai').should();
const RouteSet = require('../src/router/RouteSet');
const { spy } = require('sinon');

describe('Routing', function() {
  require('./router/RouteSet');
  require('./router/bearerAuth');
});

describe('Middleware', function() {
  require('./middleware/help-page');
});
