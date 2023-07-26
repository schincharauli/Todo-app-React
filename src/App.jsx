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
import axios from "axios";

function App() {
  const [features, setFeatures] = useState("all");

  // dark mode
  const [themeLight, setThemeLight] = useState(true);
  const themeClass = themeLight ? "light" : "dark";

  // main function
  const [todos, setTodos] = useState([]);

  // GET REQUEST METHOD
  useEffect(() => {
    const fetchTestTasks = async () => {
      const { data } = await axios.get(
        "https://to-do-app-1ngp.onrender.com/api/list"
      );
      setTodos(data);
    };
    fetchTestTasks();
  }, []);

  // POST REQUEST METHOD
  const addTodo = async (todo, check) => {
    const addTodo = await axios.post(
      "https://to-do-app-1ngp.onrender.com/api/list",
      {
        task: todo,
        completed: check,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    setTodos([...todos, addTodo.data]);
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
  const deleteTask = async (id) => {
    try {
      await axios.delete("https://to-do-app-1ngp.onrender.com/api/list/" + id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const deleteCompletedTask = async (id) => {
    try {
      await axios.delete("https://to-do-app-1ngp.onrender.com/api/list/");

      const filtered = todos.filter((todo) => !todo.complited);
      setTodos(filtered);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

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
            deleteTodo={deleteTask}
            deleteComplated={deleteCompletedTask}
          />
        ))}
        <Features
          todos={todos}
          deleteComplated={deleteCompletedTask}
          handleComplete={handleComplete}
          allFeatures={features}
          setFeatures={setFeatures}
        />
      </div>
    </div>
  );
}

export default App;
