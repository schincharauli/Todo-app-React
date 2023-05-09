import { useState } from "react";
import TodoList from "./TodoList";
import Features from "./Features";

const InputField = ({ addTodo, task, toggleComplite}) => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState("");




  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div className="input">
      <form action="" onSubmit={handleSubmit}>
      <button className="check-btn ">
          <div
            className={`check-icon ${
              check ? "complited && checked-icon" : ""
            }`}
            onClick={() => {
              setCheck(!check)
            }}
          >
            { true? (
              <span>
                <svg
                  className="checksvg"
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="9"
                >
                  <path
                    fill="none"
                    stroke="#fcfcff"
                    strokeWidth="2"
                    d="M1 4.304L3.696 7l6-6"
                  />
                </svg>
              </span>
            ) : null}
          </div>
        </button>

        <input
          type="text"
          className="todo-input"
          value={value}
          placeholder="Create a new todo…"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default InputField;
