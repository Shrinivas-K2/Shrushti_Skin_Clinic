const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");
const { USER_ROLES } = require("../../constants/status");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: Object.values(USER_ROLES), required: true, index: true },
  active: { type: Boolean, default: true, index: true },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
});

userSchema.plugin(baseModelPlugin);
userSchema.index({ role: 1, active: 1 });

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
