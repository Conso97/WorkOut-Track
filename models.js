const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises:  [
        {
            // required fields
            type: String,
            name: String,
            duration: Number,
            // optional fields
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
}, {toJSON: {virtuals: true}});

WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.map(exercise => exercise.duration).reduce((result, item) => result + item, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;