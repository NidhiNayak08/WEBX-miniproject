const mongoose = require("mongoose");

// Define the schema for each inventory item
const inventorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Create a model from the schema
const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
