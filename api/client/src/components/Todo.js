import React, { useState } from 'react';
import Navbar from './Navbar';

function Todo() {
const [todos, setTodos] = useState([]);
const [editingTodoId, setEditingTodoId] = useState(null);

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

const handleEdit = (id) => {
setEditingTodoId(id);
};

const handleEditSubmit = (event, id) => {
event.preventDefault();
const updatedTodos = todos.map((todo) => {
if (todo.id === id) {
return {
...todo,
text: event.target.elements.editTodoInput.value,
};
}
return todo;
});
setTodos(updatedTodos);
setEditingTodoId(null);
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
<h2 id="list-heading">
  {todos.length === 0
    ? 'No Todos'
    : `${todos.length} ${todos.length === 1 ? 'todo' : 'todos'}`}
</h2>

<ul
     role="list"
     className="todo-list stack-large stack-exception"
     aria-labelledby="list-heading"
   >
{todos.map((todo) => (
<li key={todo.id} className="todo stack-small">
<div className="c-cb">
<input
  id={`todo-${todo.id}`}
  type="checkbox"
  defaultChecked={todo.completed}
/>
<label className="todo-label" htmlFor={`todo-${todo.id}`}>

{editingTodoId === todo.id ? (
<form onSubmit={(event) => handleEditSubmit(event, todo.id)}>
<input
  type="text"
  id={`edit-todo-${todo.id}`}
  className="input todo-text"
  name="editTodoInput"
  defaultValue={todo.text}
  autoComplete="off"
/>

<button type="submit" className="btn btn__primary todo-edit">
Save
</button>
</form>
) : (
<span>{todo.text}</span>
)}
</label>
</div>
<div className="btn-group">
<button type="button" className="btn" onClick={() => handleEdit(todo.id)}>
Edit
</button>
<button type="button" className="btn btn__danger" onClick={() => handleDelete(todo.id)}>
Delete
</button>
</div>
</li>
))}
</ul>
</div>
);
}

export default Todo;