const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, required: true, trim: true },
  consultFee: { type: Number, required: true, min: 0 },
  category: { type: String, required: true, trim: true },
  imageUrl: { type: String, trim: true },
  active: { type: Boolean, default: true, index: true },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
});

serviceSchema.plugin(baseModelPlugin);
serviceSchema.index({ active: 1, category: 1 });

module.exports = mongoose.models.Service || mongoose.model("Service", serviceSchema);
