const router = require("express").Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

//get your last workout: uncoment line 14
router.get('/api/workouts', (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//get all your workouts shown in stats page on front end
router.get('/api/workouts/range', (req, res) => {

    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//add an excercise
// router.put('/api/workouts/:id', async (req, res) => {
//     const workoutId = req.params.id;
//     const ex = req.body[0];

//     await Workout.updateOne({
//         _id: workoutId
//     }, {
//         $push: {
//             exercises: ex
//         }
//     }).exec(
//         Workout.find({ _id: workoutId })
//             .then(x => {
//                 console.log(x);
//                 res.json(x);
//             })
//             .catch(err => {
//                 res.status(400).json(err);
//             }));
// });
//add an excercise
router.put("/api/workouts/:id", (req, res) => {
    console.log("please show this");
    const newExcercise = new Workout(req.body);
    // console.log(ex);
    Workout.insertMany(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            exercises: newExcercise 
            // {
            //     $set: {
            //         type: req.body.type,
            //         name: req.body.name,
            //         duration: req.body.duration,
            //         weight: req.body.weight,
            //         reps: req.body.reps,
            //         sets: req.body.sets,
            //         distance: req.body.distance
            //         // modified: Date.now()
            //     }

            // },

            // },
            // { upsert: true }

        },
        // },
        (error, data) => {
            if (error) {
                console.log(error);
                res.send(error);
            }

            console.log(data);

            res.send(data);
        });

  });
///Create a workout
router.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;