import React, { useState } from "react";

const Todo = ({ todoList, setTodoList }) => {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleAddBtn = () => {
    if (textInput.trim() === "") return;
    setTodoList([...todoList, textInput]);
    setTextInput("");
  };

  const handleDeleteBtn = (index) => {
    const temp = [...todoList];
    temp.splice(index, 1);
    setTodoList(temp);
  };

  return (
    <div id="todo-container">
      <div className="todo-input-section">
        <input
          type="text"
          id="todo-input"
          onChange={handleTextChange}
          value={textInput}
          placeholder="Enter a task..."
        />
        <button id="add-btn" onClick={handleAddBtn}>
          Add Todo
        </button>
      </div>

      <div className="todo-list">
        <ul>
          {todoList.map((todo, index) => (
            <li key={index} className="todo-item">
              <p className="todo-text">{todo}</p>
              <button
                className="delete-btn"
                onClick={() => handleDeleteBtn(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
