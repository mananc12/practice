const express = require("express");
const { home } = require("../controller/app.controller");
const router = express.Router();

router.route("/").get(home);

module.exports = router;
