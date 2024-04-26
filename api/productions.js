const express = require("express");
const { getAllProductions, getProductionById } = require("../prisma/productions");

const prodRouter = express.Router();

// GET "/api/productions/"
prodRouter.get("/", async (req, res) => {
  try {
    const productions = await getAllProductions();
    res.send(productions);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// GET "/api/productions/:id"
prodRouter.get("/:id", async (req, res) => {
  try {
    const production = await getProductionById(parseInt(req.params.id));
    res.send(production);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = prodRouter;
