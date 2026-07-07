const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");
const { PAYMENT_STATUS } = require("../../constants/status");

const paymentSchema = new mongoose.Schema({
  appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", index: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", index: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
  provider: { type: String, enum: ["razorpay"], default: "razorpay" },
  razorpayOrderId: { type: String, unique: true, sparse: true },
  razorpayPaymentId: { type: String, unique: true, sparse: true },
  amount: { type: Number, required: true, min: 0 },
  currency: { type: String, default: "INR" },
  status: { type: String, enum: Object.values(PAYMENT_STATUS), default: PAYMENT_STATUS.CREATED, index: true },
  rawProviderPayload: { type: mongoose.Schema.Types.Mixed },
});

paymentSchema.plugin(baseModelPlugin);
paymentSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
