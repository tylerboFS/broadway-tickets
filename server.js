require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3000;

const authRouter = require("./auth");
const { getUserByUsername } = require("./prisma/client");

app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Parse the headers to see if there is a token
app.use(async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const prefix = "Bearer ";

  if (!authHeader) {
    next();
  } else if (authHeader.startsWith(prefix)) {
    const token = authHeader.slice(prefix.length);
    const { username } = jwt.verify(token, process.env.JWT_SECRET);
    if (!username) {
      next();
    } else {
      const user = await getUserByUsername(username);
      req.user = { id: user.id, username: user.username };
      next();
    }
  } else {
    next();
  }
});

//TODO: server static html file for deployments
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
