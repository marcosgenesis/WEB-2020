const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
var mongoDB_URI = "mongodb://192.168.99.100:27017/subjects";
mongoose.connect(mongoDB_URI, { useNewUrlParser: true });
var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongoose connected");
});
db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
db.on("error", (err) => {
  console.log("Mongoose error" + err);
});
