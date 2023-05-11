import App from "../App";



const Features = ({todos, allFeatures, setFeatures, props, deleteComplated}) => {


    const count = todos.filter((todo) => !todo.complited).length;
    
    // console.log(props.features)


  return (
    <div className="featured-div">
      <div className="footer-one">
        <p>{count} items left</p>

        <div className="footer-three">
          <p
          onClick={() => deleteComplated()}
          >Clear Completed</p>
        </div>
      </div>
      <div className="footer-two">
          <p
         onClick={() => setFeatures("all")}
          > All</p>
          <p
           onClick={() => setFeatures("active")}
          >Active</p>

          <p onClick={() => setFeatures("completed")}
          >Completed</p>
        </div>
    </div>
  );
};

export default Features;
