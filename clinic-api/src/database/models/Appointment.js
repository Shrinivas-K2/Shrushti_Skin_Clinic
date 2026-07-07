const mongoose = require("mongoose");
const baseModelPlugin = require("../plugins/baseModel");
const { APPOINTMENT_STATUS } = require("../../constants/status");

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true, index: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true, index: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true, index: true },
  date: { type: String, required: true, index: true },
  slot: { type: String, required: true },
  status: {
    type: String,
    enum: Object.values(APPOINTMENT_STATUS),
    default: APPOINTMENT_STATUS.PENDING,
    index: true,
  },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  amountPaid: { type: Number, min: 0, default: 0 },
  source: { type: String, enum: ["website", "reception", "admin"], default: "website" },
  tokenNumber: { type: Number },
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} },
});

appointmentSchema.plugin(baseModelPlugin);
appointmentSchema.index(
  { doctorId: 1, date: 1, slot: 1 },
  {
    unique: true,
    partialFilterExpression: {
      status: { $in: [APPOINTMENT_STATUS.PENDING, APPOINTMENT_STATUS.CONFIRMED, APPOINTMENT_STATUS.CHECKED_IN] },
    },
  },
);

module.exports = mongoose.models.Appointment || mongoose.model("Appointment", appointmentSchema);
