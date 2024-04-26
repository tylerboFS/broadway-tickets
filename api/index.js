const express = require('express');
const prodRouter = require('./productions');

const apiRouter = express.Router();

apiRouter.use("/productions", prodRouter);



module.exports = apiRouter;