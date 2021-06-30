const express = require("express");
const router = express.Router();
const heartRateService = require("./heartRateService")
const userService = require("./userService")

router.use((req, res, next) => {
    console.log("Called: ", req.originalUrl)
    next();
});

router.use(heartRateService)
router.use(userService)
module.exports = router
