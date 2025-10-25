const express = require("express");
const mongoose = require("mongoose");
const foodRouter = require("./routes/foodRoutes.js");

require('dotenv').config();

const app = express();
app.use(express.json());

// Enable CORS for React frontend
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

mongoose.connect(
  process.env.MONGODB_URI,
  {
	useNewUrlParser: true,
	useUnifiedTopology: true
  }
)
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ MongoDB connection error:", err));

app.use(foodRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});