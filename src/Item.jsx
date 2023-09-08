export function Item({id,title,completed,toggleTodo,handleDelete}){
    return(
    <li>
        <label>
          <input type="checkbox" checked={completed} onChange={e=>toggleTodo(id,e.target.checked)}/>
            {title}
        </label>
        <button onClick={()=>handleDelete(id)}>Delete</button>
      </li>
    )
}