const { connectDatabase, disconnectDatabase } = require("../src/database/connect");
const models = require("../src/database/models");

async function checkDatabase() {
  const connection = await connectDatabase();
  await Promise.all(Object.values(models).map((model) => model.init()));

  console.log("Database connected:", connection.name);
  console.log("Registered collections:");
  for (const [name, model] of Object.entries(models)) {
    console.log(`- ${name}: ${model.collection.name}`);
  }

  await disconnectDatabase();
}

checkDatabase().catch(async (error) => {
  console.error("Database check failed:", error.message);
  await disconnectDatabase();
  process.exit(1);
});
