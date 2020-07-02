const express = require("express");
const mongoose = require("mongoose");
const workoutController = require("./controller/workout-controller");
const seeds = require("./seeders/seed")


const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(workoutController);

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

//seeds.run();
// routes
// app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
