import { useState } from "react";
import Features from "./Features";

const InputField = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  };

  return (
<div>
<form action="" onSubmit={handleSubmit}>
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
