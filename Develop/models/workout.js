const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter workout type"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter workout name"
  },
  duration: {
    type: Number,
    required: "Enter duration"
  },
  distance: {
    type: Number,
    required: "Enter distance"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  reps: {
    type: Number,
    required: "Enter reps"
  },
  set: {
    type: Number,
    required: "Enter sets"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
