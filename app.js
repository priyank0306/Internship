const express = require("express");
const app = express();
const routes = require("./routes/customer.js");
// const notFound=require("./middleware/not-found")
const connectDb = require("./db/connect");
require("dotenv").config()

//middlewares
// app.use(express.static('./public'));
app.use(express.json());
//routes
app.use("/api/v1/customers", routes);
// app.use(notFound)
const port =process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`backend is running on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
