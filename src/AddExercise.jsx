import { useState } from "react";

export function AddExercise({add}){
    const [exerciseName,setExercise]=useState("")

    function handleChange(e){
        e.preventDefault();
        if(exerciseName==="")
            return
        add(exerciseName)
        setExercise("")
    }
    return(
        <tr>
        <form onSubmit={handleChange}>
            <label>
                <input type="text" size={10} value={exerciseName} onChange={e => setExercise(e.target.value)}></input>
            </label>
            <label>
                <input type="text" size={3}/>
            </label>
            <label>
                <input type="text" size={3}/>
            </label>
            <button>Add</button>
        </form>
        </tr>
    )
}