const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  specialization: { type: String, required: true, trim: true },
  qualification: { type: String, trim: true },
  bio: { type: String, trim: true },
  photoUrl: { type: String, trim: true },
  availableDays: [{ type: String, enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] }],
  active: { type: Boolean, default: true, index: true },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
});

doctorSchema.plugin(baseModelPlugin);
doctorSchema.index({ active: 1, specialization: 1 });

module.exports = mongoose.models.Doctor || mongoose.model("Doctor", doctorSchema);
