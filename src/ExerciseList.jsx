import { ListItems } from "./ListItems";

export function ExerciseList({list}){
    return(
        <>
        <table>
            <tr>
                <th>Exercise</th>
                <th>Sets</th>
                <th>Reps</th>
                <th></th>
                <th></th>
            </tr>
            {list.map(exercise=>
                <ListItems name={exercise.name} sets={exercise.sets} reps={exercise.reps} key={exercise.id}/>
                )}
        </table>
        </>
    )
}