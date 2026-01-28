const express = require("express");
const router = express.Router();

const { getDeal } = require("../controllers/dealController");

router.get("/", getDeal);

module.exports = router;