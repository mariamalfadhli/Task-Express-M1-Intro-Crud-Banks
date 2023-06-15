let accounts = require("../../accounts");

exports.getAllAccounts = (req, res) => {
  res.status(200).json(accounts);
};

exports.createNewAccount = (req, res) => {
  const newID = accounts[accounts.length - 1].id + 1;
  const newAccount = {
    id: newID,
    ...req.body,
  };
  accounts.push(newAccount);
  return res.status(201).json({
    body: accounts,
  });
};

exports.deleteAccount = (req, res) => {
  const { id } = req.params;
  accounts = accounts.filter((account) => account.id != id);
  return res.status(204).json({ message: "account deleted" });
};

exports.updateAccount = (req, res) => {
  const { id } = req.params;
  const found = accounts.find((account) => account.id == id);
  if (!found) return res.status(404).json({ message: "account not found" });
  else {
    found.username = req.body.username ? req.body.username : found.username;
    found.funds = req.body.funds ? req.body.funds : found.funds;
    return res.status(200).json(found);
  }
};

exports.getOneAccount = (req, res) => {
  const { username } = req.params;
  const user = accounts.find((account) => account.username === username);
  if (!user) return res.status(404).json({ message: "username not found" });
  else {
    res.status(200).json(user);
  }
};
