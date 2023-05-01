import Features from "./Features";


const TodoList = ({ task, toggleComplite, deleteTodo }) => {
  return (
    <div className="li">
    <div className="lists">
      <div
        className={`left-box ${task.complited ? "complited" : ""}`}
        onClick={() => toggleComplite(task.id)}
      >
        <button className="check-btn ">
          <div
            className={`check-icon ${
              task.complited ? "complited && checked-icon" : ""
            }`}
            onClick={() => toggleComplite(task.id)}
          >
            {task.complited ? (
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
        <li className={"list"}>{task.task}</li>
      </div>
      <div className="remove-icon">
        <span onClick={() => deleteTodo(task.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill="#494C6B"
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </span>
      </div>
    </div>
    </div>
  );
};

export default TodoList;
