const middlewares = {
  middleware404 (req, res, next) {
    res.render('404');
    next();
  },
  middlewareSession (req, res, next) {
    console.log(req.sessionID);
    next();
  },
};

module.exports = middlewares;
