import React, { useState } from 'react';
import Navbar from './Navbar';

function Todo() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: event.target.elements.todoInput.value,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleEdit = (id) => {
    setEditingTodoId(id);
  };
  
  
  return (
    <div className="todoapp stack-large">
      <Navbar />
      <h1>MY TODOS</h1>
      <form onSubmit={handleSubmit}>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="todoInput"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">{todos.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {todos.map((todo) => (
          <li key={todo.id} className="todo stack-small">
            <div className="c-cb">
              <input id={todo.id} type="checkbox" defaultChecked={todo.completed} />
              <label className="todo-label" htmlFor={todo.id}>
                {todo.text}
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn"
              onClick={() => handleEdit(todo.id)}
              >
                Edit <span className="visually-hidden">{todo.text}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete <span className="visually-hidden">{todo.text}</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
