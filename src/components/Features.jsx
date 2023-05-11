import App from "../App";



const Features = ({todos}) => {


    const count = todos.filter((todo) => !todo.complited).length;


  return (
    <div className="featured-div">
      <div className="footer-one">
        <p>{count} items left</p>

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
