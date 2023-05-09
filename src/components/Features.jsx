import { useEffect, useState } from "react";

const Features = ({todos}) => {

//   const [leftTodoCount, setLeftTodoCount] = useState(0);


    const unCompletedTodos = todos.filter((todo) => !todo.completed);


  


  return (
    <div className="featured-div">
      <div className="footer-one">

        <p>{unCompletedTodos.length} items left</p>

        <div className="footer-two">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <div className="footer-three">
          <p>Clear Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
