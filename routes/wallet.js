const express = require("express");
const Wallet = require("../models/wallet");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.id);
    res.send(wallet);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
