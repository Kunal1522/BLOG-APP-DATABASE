const mongoose = require("mongoose");
require("dotenv").config();
const connectWithdb = () => {
  mongoose
    .connect(process.env.DATABASE_URL, { 
    })
    .then(() => {
      console.log("DB CONNECTION SUCCESS");
    })
    .catch((error) => {                                                                          
      console.log("DB  connection failed");
      console.log(error.message);
      process.exit(1);
    }); 
};
module.exports=connectWithdb;
