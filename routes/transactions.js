const express = require("express");
const Transaction = require("../models/transaction");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find({
      walletID: req?.query?.walletId,
    })
      .skip(req?.query?.skip)
      .limit(req?.query?.limit);

    res.send(transactions);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
