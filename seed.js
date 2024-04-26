const bcrypt = require("bcrypt");
const { createUser } = require("./prisma/client");

const addUsers = async () => {
  console.log("Adding Users");
  const user1 = {
    firstName: "Tyler",
    lastName: "Tyler",
    username: "tylerbo",
    password: bcrypt.hashSync("tyler", 10),
  };
  const user2 = {
    firstName: "Billy",
    lastName: "Bob",
    username: "billyboy",
    password: bcrypt.hashSync("billyboy", 10),
  };
  const user3 = {
    firstName: "Jon",
    lastName: "Doe",
    username: "doeADeer",
    password: bcrypt.hashSync("dr0pOfG0ldenSun", 10),
  };

  await createUser(user1);
  await createUser(user2);
  await createUser(user3);

  console.log("Done adding users");
};

const seed = async () => {
  console.log("Starting Seed");

  //create some users
  await addUsers();

  console.log("Ending Seed");
};

seed();
