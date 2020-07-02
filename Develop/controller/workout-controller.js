const router = require("express").Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


router.get('/api/workouts', (req, res) => {
    Workout.find({})
        // .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', async (req, res) => {
    const workoutId = req.params.id;
    const ex = req.body[0];

    await Workout.updateOne({
        _id: workoutId
    }, {
        $push: {
            exercises: ex
        }
    }).exec(
        Workout.find({ _id: workoutId })
            .then(x => {
                console.log(x);
                res.json(x);
            })
            .catch(err => {
                res.status(400).json(err);
            }));



});

module.exports = router; 