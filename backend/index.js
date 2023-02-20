const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.route");
require("dotenv").config();
const app = express();
app.use(express.json(), cors());
app.use("/user", userRouter);
app.listen(process.env.PORT, async () => {
  console.log(`Server running at port ${process.env.PORT}.`);
  await connection;
  console.log("Connected to DB");
});
