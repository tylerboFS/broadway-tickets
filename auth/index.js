const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { getUserByUsername } = require("../prisma/users");
const { requireUser } = require("../utils/utils");

const authRouter = express.Router();

//  "/auth/"
authRouter.get("/", (req, res) => {
  res.send("This is the Auth Route");
});

//"Logs" a user in by sending them a JWT token
authRouter.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  //check if the user exists
  const user = await getUserByUsername(username);

  
  if (!user) {
    res.sendStatus(404);
  } else {
    //check the password
    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      res.sendStatus(401);
    } else {
      // send back token
      const token = jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET);

      res.send({ message: "Succesfully Logged in", token: token });
    }
  }
});

authRouter.post("/register", (req, res) => {});

//Return the logged in user
authRouter.get("/me", requireUser, async (req, res) => {
  const user = await getUserByUsername(req.user.username);
  res.send(user);
});

module.exports = authRouter;
