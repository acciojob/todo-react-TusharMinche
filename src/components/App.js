import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div id="app-container">
      <h3 id="app-title">To-Do List</h3>
      <Todo todoList={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default App;
