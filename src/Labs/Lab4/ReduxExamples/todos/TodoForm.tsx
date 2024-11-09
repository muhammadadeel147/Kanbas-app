import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex align-items-center">
          <input
            className="form-control me-2"
            placeholder="Enter todo title"
            value={todo.title}
            onChange={(e) =>
              setTodo({ ...todo, title: e.target.value })
            }
          />
      <button onClick={() => dispatch(addTodo(todo))} id="wd-add-todo-click"    className="btn btn-success me-2">
        Add
      </button>
      <button onClick={() => dispatch(updateTodo(todo))} id="wd-update-todo-click"   className="btn btn-warning">
        Update
      </button>
    
    </li>
  );
}
