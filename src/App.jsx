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
// check for marked icon in input field
  // const [check, setCheck] = useState(false);

  // dark mode
  const [themeLight, setThemeLight] = useState(true);
  const themeClass = themeLight ? "light" : "dark";

  // main function
  const [todos, setTodos] = useState([])
  const addTodo = (todo, check) => {
    setTodos([...todos, {
      id: uuidv4(), task: todo, complited: check, isEditing: false
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



  const handleComplete = (id, checked) => {
    const updatedTasks = todos.map((task) => {
      if (task.id === id) {
        return { ...task, complited: checked };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  

  return (

    <div className={`App wrapper ${themeClass}`}>
      <div className="main">
        <div className="nav">

          <Header themeLight={themeLight} setThemeLight={setThemeLight} />
          

        </div>
        
        <InputField addTodo={addTodo} toggleComplite={toggleComplite} />
        
        {todos.map((todo, index) => (
          <TodoList  task={todo} key={index}
          handleComplete={handleComplete}
          toggleComplite={toggleComplite}
          deleteTodo={deleteTodo}/>

          
          ))}
        <Features todos={todos} handleComplete={handleComplete} />

      </div>
    </div>

  )
}

export default App
