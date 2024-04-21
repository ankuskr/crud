require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const mongoosestring = process.env.DATABASE_URL;
const app = express();

mongoose
  .connect(mongoosestring)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());


const routers = require("./routers/route");
app.use("/api/v1", routers);
const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${port}`);
});

