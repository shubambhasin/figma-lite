import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [listOfTodo, setListOfTodo] = useState([]);

  // const setInput = (e) => {
  //   setTodo(e.target.value);
  // };
  const addToList = (e) => {
    e.preventDefault();

    if (todo === "") {
      alert("Cant be empty");
    } else {
      setListOfTodo([
        ...listOfTodo,
        {
          task: todo,
          textDecordation: "none",
          completed: false
        }
      ]);
    }
    setTodo("");
  };

  const checkCompleted = (index) => {
    console.log(index);
    let currentTodo = [...listOfTodo];
    if (currentTodo[index].completed === false) {
      currentTodo[index].completed = true;
      setListOfTodo(currentTodo);
      console.log(currentTodo[index].completed, "completed");
    } else if (currentTodo[index].completed === true) {
      currentTodo[index].completed = false;
      console.log(currentTodo[index].completed, "not completed");
      setListOfTodo(currentTodo);
    }
  };

  return (
    <div className="todo">
      <h1 style={{ fontWeight: "lighter" }}> I am Todo</h1>
      <form onSubmit={addToList}>
        <div class="todo-container">
          <input
            value={todo}
            placeholder="Enter todo"
            className="input"
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <button onClick={addToList}>Add Todo</button>
      </form>
      <div className="todo-output">
        <ul style={{ listStyleType: "none" }}>
          {listOfTodo.map((todo, index) => {
            return (
              <li
                value={todo}
                key={index}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
                onClick={() => checkCompleted(index)}
              >
                {todo.task}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
