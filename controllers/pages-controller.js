const showHomepage = (req, res, next) => {
  res.render("home", { trips: req.trips });
};

module.exports = { showHomepage };
