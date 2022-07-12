import express from "express";
import OrderControllers from "../controllers/orderControllers.js";

const Route = express.Router();

Route.get("/", OrderControllers.getOrders);
Route.post("/", OrderControllers.createOrders);

export default Route;
