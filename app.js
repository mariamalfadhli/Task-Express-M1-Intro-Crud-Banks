const express = require("express");
let accounts = require("./accounts");
const PORT = 8000;
const app = express();
const accountsRouter = require("./api/accounts/accounts.routes");

app.use(express.json());
app.use("/api/accounts", accountsRouter);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
