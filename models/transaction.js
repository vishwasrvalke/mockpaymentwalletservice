const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    balance: {
      type: Number,
      required: true,
      default: 0,
    },
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
    walletID: {
      type: mongoose.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
    },
    date: { type: Date, default: Date.now },
    description: { type: String },
    type: { type: String },
  },
  {
    writeConcern: {
      j: true,
      wtimeout: 1000,
    },
    versionKey: false,
  }
);

module.exports = mongoose.model("Transaction", transactionSchema);
