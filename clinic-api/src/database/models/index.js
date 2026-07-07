const Service = require("./Service");
const Doctor = require("./Doctor");
const Patient = require("./Patient");
const Appointment = require("./Appointment");
const Payment = require("./Payment");
const Enquiry = require("./Enquiry");
const User = require("./User");
const GalleryItem = require("./GalleryItem");

const models = {
  Service,
  Doctor,
  Patient,
  Appointment,
  Payment,
  Enquiry,
  User,
  GalleryItem,
};

module.exports = models;
