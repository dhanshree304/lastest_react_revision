
import {useDispatch} from "react-redux"
import { deleteTodo, getTodos, toggleTodo } from "../Redux/action";

const TodoCard = ({todo}) => {
    const dispatch= useDispatch()


    const toggle=()=>{
      const payload ={status:!todo.status}
dispatch(toggleTodo(payload,todo._id))
.then((r)=>dispatch(getTodos()))
    }

    const deleteItem=()=>{
dispatch(deleteTodo(todo._id)).then((r) => dispatch(getTodos()));
    }
        
    
  return (
    <div
      style={{
        margin: "10px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <h2>{todo.title}</h2>
      <h3>{todo.status ? "True" : "False"}</h3>
      <div style={{ display: "flex", gap: "40px" }}>
        <button onClick={toggle}>Toggle Status</button>
        <button onClick={deleteItem}>Delete Todo</button>
      </div>
    </div>
  );
};

export { TodoCard };