const mongoose = require("mongoose");
var ClassesSchema = mongoose.Schema({
  name: { type: String, required: true, max: 150 },
  course: { type: String, required: true, max: 150 },
  studentsAmount: { type: Number, required: true },
});
var ClassesModel = mongoose.model("classes", ClassesSchema);
module.exports = ClassesModel;
