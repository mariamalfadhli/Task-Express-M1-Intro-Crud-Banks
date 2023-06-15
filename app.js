const express = required("express");
const accounts = require("./accounts");
const res = require("express/lib/response");
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
  accounts.push({ newAccount });
  return res.status(201).json({
    accounts: accounts,
  });
});

app.delete("/accounts/:id", (req, res) => {
  const { accountID } = req.params;
  accounts = accounts.filter((account) => account.id != accountID);
  return res.status(200).json(accounts);
});

// app.put("/accounts/:id", (req, res) => {
//   const {foundID} = req.params;
//   foundID = accounts.find((account) => account.id == foundID);
//   if (!foundID ) return res.status(404).json({message: "account not found"});

//   return res.status(200).json(foundID);
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
