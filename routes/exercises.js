// routes/exercises.js
const express = require('express');
const router = express.Router();
const Exercise = require('../models/Exercise');
const bodyParser = require('body-parser');

router.use(bodyParser.json()) // MIDDLEWARE DEFINITION

// get all routes
router.get('/', async (req, res)=>{
    try{
        console.log(req.method, req.query)
        const exercises = await Exercise.find();
        res.json(exercises)
    } catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post('/', async (req, res)=>{ //we will need to pass them a good body
    const exercise = new Exercise(req.body);
    console.log("request body is")
    console.log(req.body)
    try{
        const newExercise = await exercise.save();
        res.status(201).json(newExercise)
    } catch(err) {
        res.status(400).json({ message: err.message })
        return;
    }
})

router.delete('/clear-all', async (req, res)=>{
    try{
        await Exercise.deleteMany({});
        res.sendStatus(200);
    } catch(err){
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const id = req.params.id;
        const exercise = await Exercise.findOneAndDelete({ id: id });
        if (!exercise){
            return res.status(400).json({message: 'exercise not found'});
        }
        return res.json({ message: 'Exercise deleted successfully' });
    } catch(err) {
        res.status(500).json({ message: err.message })
        return
    }
});



router.patch('/:id', async (req, res)=>{
    try{
        const id = req.params.id;

        const exercise = await Exercise.findOneAndUpdate({id: id}, req.body, {new: true});
        if (!exercise){
            return res.status(400).json({message: 'exercise not found'});
        }
        return res.json({ message: 'Exercise updated successfully' });
    } catch(err) {
        res.status(500).json({ message: err.message })
        return;
    }
})

module.exports = router;