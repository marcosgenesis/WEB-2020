const express = require("express");
const router = express.Router();
const classService = require("../services/class.service.mongo");
router.get("/", (req, res) => {
  classService.list(req, res);
});
router.post("/", (req, res) => {
  classService.register(req, res);
});
router.put("/:id", (req, res) => {
  classService.update(req, res);
});
router.delete("/:id", (req, res) => {
  classService.delete(req, res);
});
router.get("/:id", (req, res) => {
  classService.retrieve(req, res);
});
module.exports = router;
