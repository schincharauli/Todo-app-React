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
          <p
          onClick={() => {
            alert("all")
          }}> All</p>

          <p
          onClick={() => {
            alert("dolly")
          }}>Active</p>

          <p onClick={() => {
            alert("done")
          }}>Completed</p>
        </div>
    </div>
  );
};

export default Features;
