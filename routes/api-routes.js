const router = require("express").Router();
const db = require('../models')

router.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err){
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });

router.put("/api/workouts/:id", ({ params, body }, res) => {
        db.Workout.update({ _id: params.id}, {$push: {excercises: req.body }},
                 updatedWorkout => {
                 res.json(updatedWorkout);
                                    })
                 .catch(err => {
                 res.json(err)
                         })
                            
    });

router.post('/api/workouts', (req,res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

router.get("/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
    
    
    
module.exports = router;


