import express from "express";
import Route from "./route/index.js";
// import db from "./config/db.js";
// import Orders from "./models/orderModels.js";
import cors from "cors";

const app = express();

const database = async () => {
  try {
    // await db.authenticate();
    // console.log("database connect");
    // await Orders.sync({ alter: true });
  } catch (error) {
    console.log(error);
  }
};
app.use(cors());
app.use(express.json());
app.use(Route);

app.listen(5000, () => {
  console.log("listen port 5000");
  database();
});
