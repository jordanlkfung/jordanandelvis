export function ListItems({name, reps,sets}){
    return(
        <tr>
            <td>{name}</td>
            <td>{sets}</td>
            <td>{reps}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}