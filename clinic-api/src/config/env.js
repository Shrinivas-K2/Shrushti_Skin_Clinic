const dotenv = require("dotenv");

dotenv.config();

const env = {
  port: Number(process.env.PORT || 5000),
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/shrushti_skin_clinic",
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
};

module.exports = env;
