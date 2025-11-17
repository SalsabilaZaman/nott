const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const cors=require('cors');
const connectDB = require('./config/dbConnection');

connectDB();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
app.use("/api/notes",require('./routes/noteRoutes'));
app.use("/api/users",require('./routes/userRoutes'));
app.use(require('./middleware/errorHandler'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});