import App from "../App";
import { useEffect, useState } from "react";



const Features = ({todos, handleComplete, toggleComplite}) => {

  
  
  const [unCompletedCount, setUnCompletedCount] = useState(0);

  useEffect(() => {
    const count = todos.filter((todo) => !todo.completed).length;
    setUnCompletedCount(count);
  }, [todos, handleComplete]);

  return (
    <div className="featured-div">
      <div className="footer-one">
        <p>{unCompletedCount} items left</p>

        <div className="footer-three">
          <p>Clear Completed</p>
        </div>
      </div>
      <div className="footer-two">
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
    </div>
  );
};

export default Features;
