const Trip = require("../models/Trip");

const getAllTrips = (req, res, next) => {
  Trip.getAll((err, results) => {
    req.trips = results;
    next();
  });
};

module.exports = { getAllTrips };
