const express = require("express");
const dotenv = require("dotenv");
const  connectDB  = require("./config/db");
const router = require("./routes/user");
dotenv.config();


const app = express();
app.use(express.json());
const PORT = process.env.PORT;

app.use("/api", router);

connectDB();


app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
