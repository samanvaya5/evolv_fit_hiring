import { model } from "mongoose";

let SchemaExerciesInfo = require("./Admin/exerciesInfo");

let SchemaTrainer = require("./Trainer/trainer");

let SchemaUser = require("./User/user");

let SchemaExercise = require("./WorkoutPnP/exercise");
let SchemaExerciseSet = require("./WorkoutPnP/exerciseSet");
let SchemaSession = require("./WorkoutPnP/session");
let SchemaWorkout = require("./WorkoutPnP/workout");

module.exports = {
  ExerciesInfo: model("ExerciesInfo", SchemaExerciesInfo),
  Trainer: model("Trainer", SchemaTrainer),
  User: model("User", SchemaUser),
  Exercise: model("Exercise", SchemaExercise),
  ExerciseSet: model("ExerciseSet", SchemaExerciseSet),
  Session: model("Session", SchemaSession),
  Workout: model("Workout", SchemaWorkout),
};
