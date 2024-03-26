const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Inventory = require("./models/inventory.js"); // Import the Inventory model
const app = express();

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://nidhi:nidhi@test.ljjytmp.mongodb.net/?retryWrites=true&w=majority&appName=inventory",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request body

// Define routes

// POST route to create a new inventory item
app.post("/inventory", async (req, res) => {
  try {
    const { name, quantity } = req.body;

    // Create a new inventory item using the Inventory model
    const inventoryItem = new Inventory({
      name,
      quantity,
    });

    // Save the inventory item to the database
    await inventoryItem.save();

    // Send a response with the created inventory item
    res.status(201).json(inventoryItem);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "Failed to create inventory item" });
  }
});

// Default route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
