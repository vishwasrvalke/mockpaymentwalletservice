const express = require("express");
const Wallet = require("../models/wallet");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const wallet = await Wallet.findById(req?.params?.id);
    res.send({
      name: wallet?.name,
      balance: wallet?.balance,
      date: wallet?.date,
      walletID: wallet?._id,
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
