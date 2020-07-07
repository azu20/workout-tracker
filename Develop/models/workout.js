const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: String,
    trim: true,
    required: "Enter workout day, Sunday - Saturday"
  },  
  exercises: [{
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
        // required: "Enter duration"
      },
      distance: {
        type: Number,
        // required: "Enter distance"
      },
      weight: {
        type: Number,
        // required: "Enter weight"
      },
      reps: {
        type: Number,
        // required: "Enter reps"
      },
      set: {
        type: Number,
        // required: "Enter sets"
      }
    }]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
