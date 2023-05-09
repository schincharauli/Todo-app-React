import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import InputField from './components/inputField'
import TodoList from './components/TodoList'
import { v4 as uuidv4 } from 'uuid'
import Features from './components/Features'
uuidv4();



function App() {

  // dark mode
  const [themeLight, setThemeLight] = useState(true);
  const themeClass = themeLight ? "light" : "dark";

  // main function
  const [todos, setTodos] = useState([])
  const addTodo = todo => {
    setTodos([...todos, {
      id: uuidv4(), task: todo, complited: false, isEditing: false
    }])
  }

  // to check tasks as complited 
  const toggleComplite = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, complited : !todo.complited} : todo))
  }


  
//  delete function
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (

    <div className={`App wrapper ${themeClass}`}>
      <div className="main">
        <div className="nav">

          <Header themeLight={themeLight} setThemeLight={setThemeLight} />
          

        </div>
        
        <InputField addTodo={addTodo}/>
        {todos.map((todo, index) => (
          <TodoList  task={todo} key={index}
          toggleComplite={toggleComplite}
          deleteTodo={deleteTodo}/>

          
          ))}
        <Features todos={todos}/>

      </div>
    </div>

  )
}

export default App
