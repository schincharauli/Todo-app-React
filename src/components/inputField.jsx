import { useState } from "react";

const InputField = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Create a new todo…"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default InputField;
