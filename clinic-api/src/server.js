const app = require("./app");
const env = require("./config/env");
const { connectDatabase } = require("./database/connect");

async function startServer() {
  await connectDatabase();

  app.listen(env.port, () => {
    console.log(`Shrushti Clinic API running on http://localhost:${env.port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start API:", error.message);
  process.exit(1);
});
