const express = require("express");
const mongoose = require("mongoose");
const workoutController = require("./Develop/controller/workout-controller");
const seeds = require("./Develop/seeders/seed")


const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static("Develop/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(workoutController);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

seeds.run();

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
