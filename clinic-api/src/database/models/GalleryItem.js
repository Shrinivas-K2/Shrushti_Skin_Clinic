const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");

const galleryItemSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  imageUrl: { type: String, required: true, trim: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  sortOrder: { type: Number, default: 0 },
  active: { type: Boolean, default: true, index: true },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
});

galleryItemSchema.plugin(baseModelPlugin);
galleryItemSchema.index({ active: 1, sortOrder: 1 });

module.exports = mongoose.models.GalleryItem || mongoose.model("GalleryItem", galleryItemSchema, "gallery_items");
