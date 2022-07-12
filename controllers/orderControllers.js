import Orders from "../models/orderModels.js";
import moment from "moment";

class OrderControllers {
  static async getOrders(req, res) {
    try {
      const data = await Orders.findAll();
      res.json(data);
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
  static async createOrders(req, res) {
    const data = {
      date: moment().utcOffset("+07:00"),
      name: req.body.name,
      product: req.body.product,
      quantity: req.body.quantity,
      hargasatuan: req.body.hargasatuan,
      ongkir: req.body.ongkir,
      asuransi: req.body.asuransi,
    };

    const { hargasatuan, quantity, ongkir, asuransi } = data;
    data.totalpembayaran = hargasatuan * quantity + (ongkir + asuransi);
    data.biayalayanan = (data.totalpembayaran - ongkir - asuransi) * 0.025;
    data.total = data.totalpembayaran - ongkir - asuransi - data.biayalayanan;
    console.log(data);
    try {
      await Orders.create(data);
      res.json({ msg: "success create data" });
    } catch (error) {
      res.json({ msg: error.message });
    }
  }
}
export default OrderControllers;
