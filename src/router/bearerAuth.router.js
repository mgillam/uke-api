const RouteSet = require('./RouteSet');
const token = require('../model/token');
const routeSet = new RouteSet();

routeSet.post('/auth', (req, res, next) => {
  res.json({
    status: 'success',
    token: token.generateToken(1, '1h')
  });
  return next();
});

routeSet.get('/status', (req, res, next) => {});

module.exports = routeSet;
