const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
    transactionID: {
      type: mongoose.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
    },
    date: { type: Date, default: Date.now },
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000,
    },
    versionKey: false,
  }
);

module.exports = mongoose.model("Wallet", walletSchema);
