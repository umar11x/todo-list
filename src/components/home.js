import Todoform from "./todo-form/todo-form";
import Todolist from "./todo-list/todo-list";

function Home() {
    return (
      <div className="Home">Home
        <Todoform/>
        <Todolist/>
      </div>
    );
  }
  
  export default Home;
  