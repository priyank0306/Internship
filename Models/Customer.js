const mongoose = require("mongoose");
const CustomerSchema = new mongoose.Schema({
  phone: {
    type: Number,
  },
  name: {
    type: String,
  },
  age:{
    type:Number
  },
  gender: {
    type: String,
  },

});
module.exports = mongoose.model("Customer", CustomerSchema);
