const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("User saved");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
