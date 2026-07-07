const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");
const { ENQUIRY_STATUS } = require("../../constants/status");

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true, index: true },
  email: { type: String, trim: true, lowercase: true },
  gender: { type: String, enum: ["male", "female", "others", "prefer-not-to-say"] },
  preferredDate: { type: String },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  serviceName: { type: String, trim: true },
  message: { type: String, trim: true },
  status: { type: String, enum: Object.values(ENQUIRY_STATUS), default: ENQUIRY_STATUS.NEW, index: true },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
});

enquirySchema.plugin(baseModelPlugin);
enquirySchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);
