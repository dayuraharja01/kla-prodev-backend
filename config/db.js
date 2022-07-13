import { Sequelize } from "sequelize";

const db = new Sequelize("busdev", "dpa", "S!d4ilyW0rker93", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
