import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Orders = db.define(
  "orders",
  {
    date: {
      type: DataTypes.DATE,
      //   defaultValue: db.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    name: DataTypes.STRING,
    product: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    total: DataTypes.DOUBLE,
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default Orders;
