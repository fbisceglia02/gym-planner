const mongoose = require('mongoose');

const SetSchema = new mongoose.Schema({
    set_number: Number,
    reps: Number,
    kg: Number,
    rest: Number,
}, { _id: false })


const ExerciseSchema = new mongoose.Schema({
    id: Number,
    name: String,
    reps: Number,
    sets: [SetSchema],
}, {timestamps: true});

const Exercise = mongoose.model('Exercise', ExerciseSchema);

module.exports = Exercise;