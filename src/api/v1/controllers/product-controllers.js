const Product = require("../models/product-model.js");

const productControllers = {
  // getUser: async (req, res) => {
  //   try {
  //       const products = await Product.find();
  //       res.json(products);
  //   } catch (err) {
  //       res.status(500).json({ message: err.message }); 
  //   }
  // },
  getProducts: async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
  },
  addProduct: async (req, res) => {
    const product = new Product({
        isinAdi: req.body.isinAdi,
        ihaleTuru: req.body.ihaleTuru,
        aboneNumarasi: req.body.aboneNumarasi,
        satNo: req.body.satNo,
        sasNo: req.body.sasNo,
        firma: req.body.firma,
        sozlesmeBaslangicTarihi: req.body.sozlesmeBaslangicTarihi,
        sozlesmeBitisTarihi: req.body.sozlesmeBitisTarihi,
        sozlesmeTutari: req.body.sozlesmeTutari,
        yil: req.body.yil,
        ocak: req.body.ocak,
        subat: req.body.subat,
        mart: req.body.mart,
        nisan: req.body.nisan,
        mayis: req.body.mayis,
        haziran: req.body.haziran,
        temmuz: req.body.temmuz,
        agustos: req.body.agustos,
        eylul: req.body.eylul,
        ekim: req.body.ekim,
        kasim: req.body.kasim,
        aralik: req.body.aralik,
        faturaTutari: req.body.faturaTutari
    });
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}
};

module.exports = { productControllers };
