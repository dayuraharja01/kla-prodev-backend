import { Sequelize } from "sequelize";

const db = new Sequelize("busdev", "dpa", "arsya.123", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
