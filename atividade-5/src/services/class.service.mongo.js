const ClassesModel = require("../models/classes.model");
class ClassService {
  static register(req, res) {
    ClassesModel.create(req.body).then((createdClass) =>
      res.status(201).json(createdClass)
    );
  }
  static list(req, res) {
    ClassesModel.find().then((classes) => res.status(201).json(classes));
  }
  static update(req, res) {
    ClassesModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).then((updatedClass) => res.status(201).json(updatedClass));
  }
  static delete(req, res) {
    ClassesModel.findByIdAndRemove(req.params.id).then((deletedClass) =>
      res.status(201).json(deletedClass)
    );
  }
  static retrieve(req, res) {
    ClassesModel.findById(req.params.id).then((findUser) =>
      res.status(201).json(findUser)
    );
  }
}
module.exports = ClassService;
