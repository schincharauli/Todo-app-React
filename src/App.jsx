import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import InputField from "./components/inputField";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Features from "./components/Features";
uuidv4();

function App() {
  const [features, setFeatures] = useState("all");

  // dark mode
  const [themeLight, setThemeLight] = useState(true);
  const themeClass = themeLight ? "light" : "dark";

  // main function
  const [todos, setTodos] = useState([]);
  const addTodo = (todo, check) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        complited: check,
        isEditing: false,
      },
    ]);
  };

  // to check tasks as complited
  const toggleComplite = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complited: !todo.complited } : todo
      )
    );
  };

  //  delete function
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function deleteComplated() {
    const filtered = todos.filter((todo) => !todo.complited);
    setTodos(filtered);
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

  const showComplited = todos.filter((todo) => todo.complited);

  const showUncompleted = todos.filter((todo) => !todo.complited);

  const array =
    features === "all"
      ? todos
      : features === "active"
      ? showUncompleted
      : showComplited;

  return (
    <div className={`App wrapper ${themeClass}`}>
      <div className="main">
        <div className="nav">
          <Header themeLight={themeLight} setThemeLight={setThemeLight} />
        </div>

        <InputField addTodo={addTodo} toggleComplite={toggleComplite} />

        {array.map((todo, index) => (
          <TodoList
            task={todo}
            key={index}
            handleComplete={handleComplete}
            toggleComplite={toggleComplite}
            deleteTodo={deleteTodo}
            deleteComplated={deleteComplated}
          />
        ))}
        <Features
          todos={todos}
          deleteComplated={deleteComplated}
          handleComplete={handleComplete}
          allFeatures={features}
          setFeatures={setFeatures}
        />
      </div>
    </div>
  );
}

export default App;
