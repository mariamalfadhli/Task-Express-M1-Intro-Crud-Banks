const express = require("express");
let accounts = require("./accounts");
const PORT = 8000;
const app = express();
app.use(express.json());

app.get("/accounts", (req, res) => {
  res.status(200).json(accounts);
});

app.post("/accounts", (req, res) => {
  const newID = accounts[accounts.length - 1].id + 1;
  const newAccount = {
    id: newID,
    ...req.body,
  };
  accounts.push(newAccount);
  return res.status(201).json({
    accounts: accounts,
  });
});

app.delete("/accounts/:id", (req, res) => {
  const { id } = req.params;
  accounts = accounts.filter((account) => account.id != id);
  return res.status(200).json(accounts);
});

app.put("/accounts/:id", (req, res) => {
  const { id } = req.params;
  const found = accounts.find((account) => account.id == id);
  if (!found) return res.status(404).json({ message: "account not found" });
  else {
    found.username = req.body.username;
    found.funds = req.body.funds;
    return res.status(200).json(found);
  }
});

app.get("/accounts/:username", (req, res) => {
  const { username } = req.params;
  const user = accounts.find((account) => account.username === username);
  if (!user) return res.status(404).json({ message: "username not found" });
  else {
    res.status(200).json(user);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
