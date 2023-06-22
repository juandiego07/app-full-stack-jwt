function auth(req, res, next) {
    console.log("Middelware...");
    return next();
}

module.exports = auth;