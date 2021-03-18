// @desc get all transactions
// @route GET /api/version1/transactions
// @acces Public
exports.getTransactions = (req, res, next) => {
  res.send("Get Transactions");
};

// @desc Add transaction
// @route POST /api/version1/transactions
// @acces Public
exports.addTransactions = (req, res, next) => {
  res.send("Add Transaction");
};
