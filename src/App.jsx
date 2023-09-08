import { useState } from "react"
import { AddForm } from "./AddForm"
import { List } from "./List"
import { ExerciseList} from "./ExerciseList"
import { AddExercise} from "./AddExercise"
export default function App(){
  const [exercises,setExercises]=useState([{name:"chest fly", id:1, sets:3, reps:10}, {name:"bench press", id:0, sets:4, reps:5}])
  const [todos,setTodos]=useState([])

  function addExercise(exerciseName) {
    setExercises(currentExercise =>{
      return [...currentExercise,{name:exerciseName, id:crypto.randomUUID()}]
    })
  }

  function editExercise(id, newExercise) {
    setExercises(currentExercise =>{
      return(
        currentExercise.map(exercise=>{
          if(exercise.id==id)
            return[...currentExercise,newExercise]
        })
      )
    })
  }


  // function handleAdd(newTitle){
  //   setTodos(currentTodos =>{
  //     return [...currentTodos, {id:crypto.randomUUID(),title:newTitle,completed:false}]
  //   })
  // }
  // function toggleTodo(id,completed){
  //   setTodos(currentTodos=>{
  //     return(
  //       currentTodos.map(todo =>{
  //         if(todo.id==id)
  //           return {...todo,completed}//returns todo object with just the completed changed
  //         return todo
  //       })
  //     )
  //   })
  // }
  // function handleDelete(id){
  //   setTodos(currentTodos=>{
  //     return currentTodos.filter(todo => todo.id !==id)
  //   })
  // }
  return (
    <>
    {/* <AddForm onSubmit={handleAdd}/>
    <h1 className="header">To Do List</h1>
    <List todos={todos} toggleTodo={toggleTodo} handleDelete={handleDelete}/> */}
    <ExerciseList list ={exercises}/>
    <AddExercise add ={addExercise}/>
    </>
  )
}