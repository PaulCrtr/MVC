const express = require("express");

const { showHomepage } = require("../controllers/pages-controller");
const { getAllTrips } = require("../controllers/trips-controller");

const router = express.Router();
router.get("/", getAllTrips, showHomepage);

module.exports = router;
