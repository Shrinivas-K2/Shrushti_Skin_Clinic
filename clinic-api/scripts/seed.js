const { connectDatabase, disconnectDatabase } = require("../src/database/connect");
const models = require("../src/database/models");
const { services, doctors, galleryItems } = require("./seed-data");

async function upsertBySlug(Model, items) {
  for (const item of items) {
    await Model.updateOne({ slug: item.slug }, { $set: item }, { upsert: true });
  }
}

async function upsertGallery(items) {
  for (const item of items) {
    await models.GalleryItem.updateOne({ title: item.title }, { $set: item }, { upsert: true });
  }
}

async function seed() {
  await connectDatabase();
  await upsertBySlug(models.Service, services);
  await upsertBySlug(models.Doctor, doctors);
  await upsertGallery(galleryItems);
  console.log("Seed completed:", {
    services: services.length,
    doctors: doctors.length,
    galleryItems: galleryItems.length,
  });
  await disconnectDatabase();
}

seed().catch(async (error) => {
  console.error("Seed failed:", error.message);
  await disconnectDatabase();
  process.exit(1);
});
