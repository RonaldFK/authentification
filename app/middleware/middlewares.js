const middlewares = {
  middleware404 (req, res) {
    res.render('404');
  },
};

module.exports = middlewares;
