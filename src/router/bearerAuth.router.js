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

routeSet.get('/status', extractAuth, (req, res, next) => {
  res.json({
    status: 'Success',
    token: req.context.authToken
  });
  return next();
});

function extractAuth(req, res, next) {
  let header = req.header('Authorization');
  if (header) {
    header = header.split(' ');
    if (header[0] === 'Bearer') {
      if (header[1]) {
        req.context = Object.assign(req.context || {}, {
          authToken: header[1]
        });
        return next();
      } else {
        //Invalid - no token value
      }
    } else {
      //Invalid - only Bearer is supported
    }
  } else {
    //Invalid - no auth header supplied
  }
  return res.json(401, {
    status: 'Error',
    message: 'No valid auth supplied'
  });
}

module.exports = routeSet;
