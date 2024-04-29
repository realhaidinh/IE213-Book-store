const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.ObjectId;
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: [{
    public_id: {
      type: String
    },
    data: {
      type: String
    }
  }]
});

module.exports = mongoose.model("Category", categorySchema);
