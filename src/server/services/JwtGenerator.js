const sign = require('jwt-encode');
const config = require('config');
const secret = config.get('SECRET_KEY');

module.exports.generateAuthJwt = function (user) {
    let data = {
        uuid: user.uid,
    };

    const jwt = sign(data, secret);
    
    return jwt;
}