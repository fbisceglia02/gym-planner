import React,  { useState } from "react"; 
import axios from "axios";
import './AddExerciseForm.css'

const AddExerciseForm = () => {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState([]);

    const handleSetChange = (index, event) => {
        const newSets = sets.map((set, i) => {
            if (i === index){
                return { ...set, [event.target.name]: event.target.value }; //oggetto modificato
            }
            return set;
        });
        setSets(newSets)
    }

    const addSet = () => {
        const newSet = {
            set_number: sets.length + 1,
            reps: 0,
            kg: 0,
            rest: 0
        };
        setSets([...sets, newSet]);
    };
    
    
    const removeSet = index => {
        setSets(sets.filter((_, i) => i !== index));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const exerciseData = {
            name: exerciseName,
            sets: sets
        };

        try{
            const response = await axios.post('http://localhost:3000/api/exercises', exerciseData)
            console.log(response.data)
        } catch(error) {
            console.error('There was an error',error)
        }
    
    };
    

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input 
                className="form-input"
                type="text"
                value={exerciseName}
                onChange={e => setExerciseName(e.target.value)}
                placeholder="Exercise Name"
                required
            />

        {sets.map((set, index) => (
            <div className="set-container" key={index}>
                <div className="set-property-div">
                    <label>Repetitions</label>
                    <input
                        className="form-input set-input"
                        type="number"
                        name="reps"
                        value={set.reps}
                        onChange={e => handleSetChange(index, e)}
                        placeholder="Reps"
                        required
                    />
                </div>
                <div className="set-property-div"> 
                    <label>Weight (kg)</label>
                    <input
                        className="form-input set-input"
                        type="number"
                        name="kg"
                        value={set.kg}
                        onChange={e => handleSetChange(index, e)}
                        placeholder="Weight (kg)"
                        required
                    />
                </div>
                <div className="set-property-div">
                    <label>Rest (seconds)</label>
                    <input
                        className="form-input set-input"
                        type="number"
                        name="rest"
                        value={set.rest}
                        onChange={e => handleSetChange(index, e)}
                        placeholder="Rest"
                        required
                    />
                </div>
                <button className="form-button remove-set-btn" type="button" onClick={() => removeSet(index)}>Remove Set</button>
            </div>
        ))}



            <button
                className="form-button"
                type="button"
                onClick={addSet}
            >Add Set</button>
            <button className="form-button" type="submit">Submit Exercise</button>

        </form>
    );
}

export default AddExerciseForm