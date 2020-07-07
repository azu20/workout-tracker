const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Number,
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
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      }
    }]
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
