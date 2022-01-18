const express = require("express");
const Transaction = require("../models/transaction");
const router = express.Router();
const Wallet = require("../models/wallet");

router.post("/:walletId", async (req, res) => {
  try {
    const wallet = await Wallet.findById(req.params.walletId);
    await Wallet.findByIdAndUpdate(req.params.walletId, {
      balance:
        parseFloat(wallet?.balance.toFixed(4)) +
        parseFloat(req.body.amount.toFixed(4)),
    });
    const final = await Wallet.findById(req.params.walletId);
    const transaction = new Transaction({
      name: final.name,
      balance: parseFloat(final.balance.toFixed(4)),
      amount: parseFloat(req.body.amount.toFixed(4)),
      walletID: final._id,
      date: final.date,
      description: req.body.description,
      type: parseFloat(req.body.amount.toFixed(4)) > 0 ? "CREDIT" : "DEBIT",
    });

    await transaction.save();

    res.send({
      balance: parseFloat(final?.balance.toFixed(4)),
      transactionID: final?.transactionID,
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
