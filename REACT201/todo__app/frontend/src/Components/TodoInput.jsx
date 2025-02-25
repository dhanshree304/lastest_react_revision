import { useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos, postTodo } from "../Redux/action";

const TodoInput = () => {
  const [todo, setTodo] = useState({
    title: "",
    status: false,
  });
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(postTodo(todo)).then((r) => dispatch(getTodos()));
    setTodo({title:"",status:false})
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#edeef0",
        borderRadius: "30px",
        paddingLeft: "20px",
        marginTop: "25px",
        marginBottom: "25px",
      }}
    >
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo.title}
        onChange={(e) =>
          setTodo((prev) => ({ ...prev, title: e.target.value }))
        }
      />

      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export { TodoInput };
