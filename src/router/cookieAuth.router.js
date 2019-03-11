const RouteSet = require('./RouteSet');
const token = require('../model/token');
const routeSet = new RouteSet();

routeSet.post('/auth', (req, res, next) => {
  res.header('Set-Cookie', token.generateToken(1, '1h'));
  res.send('auth');
  return next();
});

routeSet.get('/status', (req, res, next) => {
  res.send(`Token: ${token.generateToken(1, '1h')} `);
  return next();
});

module.exports = routeSet;
