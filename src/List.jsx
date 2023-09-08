import { Item } from "./Item"

export function List({todos,toggleTodo,handleDelete}){
    return(
    <>
        {todos.length==0&&"No todos"}
        {todos.map(todo =>{
        return (
            <Item {...todo} key={todo.id} toogleTodo={toggleTodo} handleDelete={handleDelete}/>
        )
    })}
    </>
    )
}