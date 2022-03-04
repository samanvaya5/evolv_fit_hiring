var express = require("express");
var router = express.Router();
const test = require("../models/test");
const workout = require("../models/WorkoutPnP/workout");

const exercise = require("../models/WorkoutPnP/exercise");
const exerciseSet = require("../models/WorkoutPnP/exerciseSet");
const session = require("../models/WorkoutPnP/session");

const admin = require("../models/Admin/exerciseInfo");
const trainer = require("../models/Trainer/trainer");
const user = require("../models/User/user");
/* GET users listing. */

router
  .route("/")
  .get((req, res, next) => {
    workout.find({});
    exercise.find({});
    exerciseSet.find({});
    session.find({});
    admin.find({});
    trainer.find({});
    user.find({});
    res.send("respond with a resource");
  })
  .post((req, res, next) => {
    test.insertMany(req.body).then((result) => {
      res.status(201);
      res.send(result);
    });
  });

module.exports = router;
