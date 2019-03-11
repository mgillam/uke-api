const uuid = require('uuid/v4');
const jwt = require('jsonwebtoken');

const secret = 'We do not care, for our particular purposes.';

module.exports = {
  generateToken: function(userid, expiry) {
    return jwt.sign({ userid: userid, tokenid: uuid() }, secret, {
      expiresIn: expiry
    });
  },

  decodeToken: function(token) {
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};
