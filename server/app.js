const cors = require("cors");
const express = require("express");
const router = require("./src/routes/routes");
const db = require("./src/models");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

app.use(cors());
app.use(express.json());

app.use(router);
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
