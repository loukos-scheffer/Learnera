const sign = require('jwt-encode');
const secret = 'BRUTEFORCESOLUTIONSsasszszzz';

module.exports.generateAuthJwt = function (user) {
    let data = {
        uuid: user.uid,
    };

    const jwt = sign(data, secret);

    return jwt;
}