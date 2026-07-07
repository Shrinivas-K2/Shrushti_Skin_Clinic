const models = require("./models");

const collectionRegistry = [
  {
    modelName: "Service",
    collectionName: models.Service.collection.name,
    description: "Clinic services and consult fees.",
    retention: "Use active=false instead of deleting so appointment history remains readable.",
    model: models.Service,
  },
  {
    modelName: "Doctor",
    collectionName: models.Doctor.collection.name,
    description: "Doctors, specializations and available days.",
    retention: "Use active=false when a doctor is unavailable or leaves the clinic.",
    model: models.Doctor,
  },
  {
    modelName: "Patient",
    collectionName: models.Patient.collection.name,
    description: "Patient identity records shared by all future modules.",
    retention: "Do not delete if appointments or payments reference the patient.",
    model: models.Patient,
  },
  {
    modelName: "Appointment",
    collectionName: models.Appointment.collection.name,
    description: "Booked slots, status flow and future queue linkage.",
    retention: "Audit collection; cancel through status instead of deleting.",
    model: models.Appointment,
  },
  {
    modelName: "Payment",
    collectionName: models.Payment.collection.name,
    description: "Razorpay order/payment records and amount audit trail.",
    retention: "Audit collection; never delete paid records.",
    model: models.Payment,
  },
  {
    modelName: "Enquiry",
    collectionName: models.Enquiry.collection.name,
    description: "Contact form and appointment request leads.",
    retention: "Can be archived or closed by status.",
    model: models.Enquiry,
  },
  {
    modelName: "User",
    collectionName: models.User.collection.name,
    description: "Future admin, reception and doctor login accounts.",
    retention: "Use active=false instead of deleting staff records.",
    model: models.User,
  },
  {
    modelName: "GalleryItem",
    collectionName: models.GalleryItem.collection.name,
    description: "Gallery/service media metadata.",
    retention: "Can be hidden with active=false.",
    model: models.GalleryItem,
  },
];

module.exports = {
  collectionRegistry,
};
