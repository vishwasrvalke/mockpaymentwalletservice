const express = require("express");

const router = express.Router();
const Wallet = require("../models/wallet");

router.post("/", async (req, res) => {
  try {
    const wallet = new Wallet({
      name: req.body.name,
      balance: req.body.balance,
    });
    await wallet.save();
    res.send(wallet);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
