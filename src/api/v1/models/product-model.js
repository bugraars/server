const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  isinAdi: {
    type: String,
    required: [true, "İşin Adı verisi zorunludur"],
  },
  ihaleTuru: String,
  aboneNumarasi: String,
  satNo: String,
  sasNo: String,
  firma: {
    type: String,
    required: [true, "Firma verisi zorunludur"],
  },
  sozlesmeBaslangicTarihi: Date,
  sozlesmeBitisTarihi: Date,
  sozlesmeTutari: Number,
  yil: String,
  ocak: Number,
  subat: Number,
  mart: Number,
  nisan: Number,
  mayis: Number,
  haziran: Number,
  temmuz: Number,
  agustos: Number,
  eylul: Number,
  ekim: Number,
  kasim: Number,
  aralik: Number,
  faturaTutari: Number,
});

module.exports = mongoose.model("Product", ProductSchema);
