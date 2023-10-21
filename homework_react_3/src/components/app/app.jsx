import React, { useState, useEffect } from "react";
import Title from "../title/title";
import FormAdd from "../formAdd/formAdd";
import ListItem from "../listItem/listItem";

import "./app.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Title></Title>
        </div>
        <div>
          {isFormVisible ? (
            <FormAdd
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}
              onFormClose={toggleFormVisibility}
            />
          ) : (
            <button className="btn" onClick={toggleFormVisibility}>Додати ➕</button>
          )}
        </div>
        <div>
          <ListItem todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;

