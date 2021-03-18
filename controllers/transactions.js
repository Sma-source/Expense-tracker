// @desc get all transactions
// @route GET /api/version1/transactions
// @acces Public
exports.getTransactions = (req, res, next) => {
  res.send("Get Transactions");
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
