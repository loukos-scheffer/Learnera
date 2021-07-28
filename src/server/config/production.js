module.exports = {
    CORS_ORIGIN: 'http://asdy.joshuacarrasco.com',
    COOKIE_OPTIONS: {
        httpOnly: true,
        sameSite: 'none'
    },
    CORS_MIDDLEWARE: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', this.CORS_ORIGIN);
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    }
}