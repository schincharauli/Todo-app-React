import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/inputField'
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(), task: todo, complited: false, isEditing: false
    }])

    console.log(todos)

  }

  const toggleComplite = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, complited : !todo.complited} : todo))
  }
  return (
    <div className="App">
      <div className="main">
        <div className="nav">
          <h1 className='header'>TODO</h1>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
          </span>
        </div>
        <InputField addTodo={addTodo}/>
        {todos.map((todo, index) => (
          <TodoList  task={todo} key={index}
          toggleComplite={toggleComplite}/>
          
          ))}
      </div>

      
    </div>
  )
}

export default App
