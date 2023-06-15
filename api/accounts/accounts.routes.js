const express = require("express");
const router = express.Router();
const {
  getAllAccounts,
  createNewAccount,
  deleteAccount,
  updateAccount,
  getOneAccount,
} = require("./accounts.controllers");

router.get("/", getAllAccounts);

router.post("/", createNewAccount);

router.delete("/:id", deleteAccount);

router.put("/:id", updateAccount);

router.get("/:username", getOneAccount);

module.exports = router;
