const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const brandSchema = new Schema({
  id: { type: String, required: true },
  imageURL: { type: String, required: true },
  name: { type: String, required: true },
  contact: { type: Object, required: true },
  email: { type: String, required: true },
  avgMinOrderBefore: { type: String, required: true },
  address: { type: Object, required: true },
  menuCard: { type: Array, required: true }
});

module.exports = mongoose.model("Brand", brandSchema);
