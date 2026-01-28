const express = require("express");
const router = express.Router();

const { getSlider } = require("../controllers/sliderControllers");

router.get("/", getSlider);

module.exports = router;