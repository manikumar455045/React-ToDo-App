import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTodo,
  addToBacklog,
  moveToBacklog,
  addToProgress,
  moveToTodo,
  addToDone,
} from '../../store/todoSlice';
import CardComponent from './CardComponent';

const AddTodoView = () => {
  const [value, setValue] = useState('');
  const numOfTodos = useSelector((state) => state.todos.backlogItems);
  const toDoItems = useSelector((state) => state.todos.toDoItems);
  const inProgressItems = useSelector((state) => state.todos.inProgressItems);
  const doneItems = useSelector((state) => state.todos.doneItems);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToBacklog(value));
    setValue('');
  };
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const handleTodo = (item) => {
    dispatch(addTodo(item));
  };
  const moveBacklog = (item) => {
    dispatch(moveToBacklog(item));
  };
  const handleProgress = (item) => {
    dispatch(addToProgress(item));
  };
  const moveTodo = (item) => {
    dispatch(moveToTodo(item));
  };
  const handleDone = (item) => {
    dispatch(addToDone(item));
  };
  console.log(inProgressItems);

  return (
    <div className="container">
      <section className="mt-5 mb-5">
        <h2 className="text-center">Number of Todos</h2>
        <div className="text-center">
          <input
            type="text"
            placeholder="enter a task"
            value={value}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add Todos</button>
        </div>
      </section>
      <hr />
      <section className="mt-5">
        <div className="row">
          <div className="col-md-3">
            <CardComponent
              array={numOfTodos}
              addFunction={handleTodo}
              heading="Backlog Items"
            />
          </div>
          <div className="col-md-3">
            <CardComponent
              array={toDoItems}
              addFunction={handleProgress}
              removeFunction={moveBacklog}
              heading="To Do"
            />
          </div>
          <div className="col-md-3">
            <CardComponent
              array={inProgressItems}
              addFunction={handleDone}
              removeFunction={moveTodo}
              heading="In Progress"
            />
          </div>
          <div className="col-md-3">
            <CardComponent array={doneItems} heading="Done" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTodoView;
