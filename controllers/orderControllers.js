import Orders from "../models/orderModels.js";
import moment from "moment";
import db from "../config/db.js";
import sequelize from "sequelize";

class OrderControllers {
  static async getOrders(req, res) {
    try {
      const data = await Orders.findAll({
        attributes: [
          "id",
          [
            sequelize.fn(
              "DATE_FORMAT",
              sequelize.col("date"),
              "%d-%m-%Y %H:%i:%s"
            ),
            "date",
          ],
          "name",
          "product",
          "quantity",
          "total",
        ],
      });
      res.json(data);
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
  static async createOrders(req, res) {
    const data = {
      // date: moment().tz("Asia/Jakarta").format("LLLL"),
      date: req.body.date,
      name: req.body.name,
      product: req.body.product,
      quantity: req.body.quantity,
      hargasatuan: req.body.hargasatuan,
      ongkir: req.body.ongkir,
      asuransi: req.body.asuransi,
    };

    const { hargasatuan, quantity, ongkir, asuransi } = data;
    data.totalpembayaran = hargasatuan * quantity + (ongkir + asuransi);
    data.biayalayanan = (data.totalpembayaran - ongkir - asuransi) * 0.0125;
    data.total = data.totalpembayaran - ongkir - asuransi - data.biayalayanan;
    console.log(data);
    try {
      await Orders.create(data);
      res.json({ msg: "success create data" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
  static async deleteOrder(req, res) {
    try {
      await Orders.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ msg: "delete success" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
}
export default OrderControllers;
