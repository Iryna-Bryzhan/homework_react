import React from "react";

import Check from "../../img/free-icon-check-mark-5299035.png";
import Delete from "../../img/free-icon-delete-5610967.png";
import Edit from "../../img/free-icon-edit-860814.png";

import "./listItem.css";

const ListItem = ({ todos, setTodos, setEditTodo }) => {
  const hendleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const hendleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const hendleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li
          className={`list-item ${todo.completed ? "complete" : ""}`}
          key={todo.id}
        >
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            readOnly
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complate"
              onClick={() => hendleComplete(todo)}
            >
              <img src={Check} alt="" srcset="" />
            </button>
            <button className="button-edit" onClick={() => hendleEdit(todo)}>
              <img src={Edit} alt="" srcset="" />
            </button>
            <button
              className="button-delete"
              onClick={() => hendleDelete(todo)}
            >
              <img src={Delete} alt="" srcset="" />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};
export default ListItem;
