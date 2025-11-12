const express = require('express');
const dotenv = require('dotenv').config();
const app = express();


const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use("/",require('./routes/noteRoutes'));
app.use(require('./middleware/errorHandler'));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});