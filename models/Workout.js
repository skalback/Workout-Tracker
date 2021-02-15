const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now, 
            required: true
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Provide the exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Provide the exercise name"
                },
                duration: {
                    type: Number,
                    min: [Number.MIN_VALUE, "Duration cannot be zero"],
                    required: "Provide the duration of the exercise in minutes"
                },
                weight: {
                    type: Number,
                    min: [Number.MIN_VALUE, "Weight cannot be zero"]
                    
                },
                reps: {
                    type: Number,
                    min: [Number.MIN_VALUE, "At least 1 rep is required"]
                },
                sets: {
                    type: Number,
                    min: [Number.MIN_VALUE, "At least 1 set is required"]
                },
                distance: {
                    type: Number,
                    min: [Number.MIN_VALUE, "Distance cannoy be zero"]

                }
            }
        ]
    },
  
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;