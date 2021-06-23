
// Sends cookie with jwt as 'session_id'
module.exports.sendCookie = function (res, jwt) {
    res.cookie('session_id', jwt, {
        httpOnly: true,
        secure: true
    });
}