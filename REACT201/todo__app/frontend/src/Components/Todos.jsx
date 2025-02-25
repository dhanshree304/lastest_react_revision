

import { useSelector, useDispatch } from "react-redux";
import { TodoCard } from "./TodoCard";
import { TodoInput } from "./TodoInput";
import { useEffect } from "react";
import { getTodos } from "../Redux/action";

const Todos = () => {
const todos=useSelector((store)=>store.todos)
const dispatch=useDispatch()

useEffect(()=>{
dispatch(getTodos())
},[])


  return (
    <div className="container">
      <div className="todoApp">
        <TodoInput />
        {todos.length > 0 &&
          todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      </div>
      
    </div>
  );
};

export { Todos };