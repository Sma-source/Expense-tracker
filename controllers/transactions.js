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
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add transaction
// @route POST /api/version1/transactions
// @acces Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.value7(error.errors).map((val) => val.messages);
      res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(201).json({
        success: true,
        data: transaction,
      });
    }
  }
};

// @desc Delete transaction
// @route DELETE /api/version1/transactions//:id
// @acces Public
exports.deleteTransaction = (req, res, next) => {
  res.send("Delete Transaction");
};
