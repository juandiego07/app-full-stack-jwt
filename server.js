if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");

const app = express();
const routes = require("./routes/route.js");


app.use(cors(), express.json(), routes);

app.listen(process.env.PORT, () => {
  console.log(
    `Server running ${process.env.BASE_URL}:${process.env.PORT}`
  );
});
