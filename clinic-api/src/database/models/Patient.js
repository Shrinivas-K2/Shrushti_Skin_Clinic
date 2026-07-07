const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, unique: true, trim: true },
  age: { type: Number, min: 0, max: 130 },
  gender: { type: String, enum: ["male", "female", "others", "prefer-not-to-say"] },
  address: { type: String, trim: true },
  notes: { type: String, trim: true },
  active: { type: Boolean, default: true, index: true },
});

patientSchema.plugin(baseModelPlugin);
patientSchema.index({ phone: 1, active: 1 });

module.exports = mongoose.models.Patient || mongoose.model("Patient", patientSchema);
