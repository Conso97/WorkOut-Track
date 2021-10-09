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
            type: {type: String},
            name: {type: String},
            duration: {type: Number},
            // optional fields
            weight: {type: Number},
            reps: {type: Number},
            sets: {type: Number},
            distance: {type: Number}
        }
    ]
}, {toJSON: {virtuals: true}});

WorkoutSchema.virtual('totalDuration').get(function() {
    return this.exercises.map(exercise => exercise.duration).reduce((result, item) => result + item, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;