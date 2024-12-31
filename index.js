const express = require("express"); //this does intaiste sever
const app = express();

require("dotenv").config(); //loads process object so we can
const PORT = process.env.PORT || 3000; // load env oboject using it

app.use(express.json()); //middleware
const blog = require("./routes/blog"); //load all routes in it

app.use("/api/v1", blog);

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

const connectWithdb = require("./config/database");
connectWithdb();
app.get("/", (req, res) => {
  res.send(`<h1>This is homepage <h1>`);
});
