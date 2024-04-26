const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllProductions = async () => {
  try {
    const productions = await prisma.production.findMany();
    return productions;
  } catch (err) {
    console.log(err);
    return [];
  }
};

const getProductionById = async (id) => {
  try {
    const production = await prisma.production.findUnique({
      where: {
        id: id
      }
    });
    return production;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

const createProduction = async (production) => {
  try{
    const productionDB = await prisma.production.create({
      data: production
    }); 
    return productionDB;
  }
  catch (err){
    console.log(err);
    return undefined;
  }
};

const updateProduction = async () => {};

const deleteProduction = async () => {};

module.exports = {
  getAllProductions,
  getProductionById,
  createProduction,
  updateProduction,
  deleteProduction,
};
