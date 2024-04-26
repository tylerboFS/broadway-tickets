const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/////FUNCTIONS THAT TALK TO DB
const createUser = async (user) => {
  try {
    const userDB = await prisma.user.create({
      data: user,
    });

    return userDB;
  } catch (err) {
    console.log("Error creating user", err);
    return undefined;
  }
};

module.exports = {
  createUser
}
