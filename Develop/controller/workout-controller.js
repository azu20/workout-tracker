const router = require("express").Router();
const Workout = require("../models/workout");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

//get your last workout: Displays on main page
router.get('/api/workouts', (req, res) => {
   
    Workout.find({})
        .sort({ date: -1 })
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
});
//get your last workout: uncoment line 14
router.get('/exercise/:id', (req, res) => {
    Workout.find({ _id: req.params.id })
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
router.put("/api/workouts/:id", (req, res) => {
    console.log("please show this", req.body);
    console.log(req.params.id);
    const doNext = r => res.json({ msg: "success", id: r });

    const data =
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
            .then(doNext)
            .catch((error, data) => {
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
    let workout = req.body;
    workout.day = new Date().setDate(new Date().getDate());

    Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;