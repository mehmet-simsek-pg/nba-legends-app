const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: String,
  img: String,
  statistics: Array,
});

module.exports = mongoose.model("Player", PlayerSchema);
