const Transaction = require("../models/Transaction");

// @desc get all transactions
// @route GET /api/version1/transactions
// @acces Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add transaction
// @route POST /api/version1/transactions
// @acces Public
exports.addTransaction = (req, res, next) => {
  res.send("Add Transaction");
};

// @desc Delete transaction
// @route DELETE /api/version1/transactions//:id
// @acces Public
exports.deleteTransaction = (req, res, next) => {
  res.send("Delete Transaction");
};
