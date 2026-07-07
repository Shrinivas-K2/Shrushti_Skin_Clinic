const { Router } = require("express");
const mongoose = require("mongoose");
const models = require("../database/models");
const { collectionRegistry } = require("../database/registry");

const router = Router();

router.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

router.get("/schema", (_req, res) => {
  res.json({
    collections: collectionRegistry.map((entry) => ({
      model: entry.modelName,
      collection: entry.collectionName,
      description: entry.description,
      retention: entry.retention,
      paths: Object.keys(entry.model.schema.paths).filter((path) => !path.startsWith("__")),
    })),
  });
});

router.get("/services", async (_req, res, next) => {
  try {
    const services = await models.Service.find({ active: true }).sort({ category: 1, name: 1 });
    res.json({ data: services });
  } catch (error) {
    next(error);
  }
});

router.get("/doctors", async (_req, res, next) => {
  try {
    const doctors = await models.Doctor.find({ active: true }).sort({ name: 1 });
    res.json({ data: doctors });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
