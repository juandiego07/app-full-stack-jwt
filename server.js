if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors(), express.json());

app.listen(process.env.PORT, () => {
  console.log(
    `Server running ${process.env.BASE_URL}:${process.env.PORT}`
  );
});
