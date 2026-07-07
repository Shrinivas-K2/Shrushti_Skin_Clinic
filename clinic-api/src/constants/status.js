const APPOINTMENT_STATUS = Object.freeze({
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CHECKED_IN: "checked-in",
  COMPLETED: "completed",
  NO_SHOW: "no-show",
  CANCELLED: "cancelled",
});

const PAYMENT_STATUS = Object.freeze({
  CREATED: "created",
  PAID: "paid",
  FAILED: "failed",
  REFUNDED: "refunded",
});

const ENQUIRY_STATUS = Object.freeze({
  NEW: "new",
  CONTACTED: "contacted",
  CONVERTED: "converted",
  CLOSED: "closed",
});

const USER_ROLES = Object.freeze({
  ADMIN: "admin",
  RECEPTION: "reception",
  DOCTOR: "doctor",
});

module.exports = {
  APPOINTMENT_STATUS,
  PAYMENT_STATUS,
  ENQUIRY_STATUS,
  USER_ROLES,
};
