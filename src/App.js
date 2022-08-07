import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Assignment from "./Assignment";
import Form from "./Form";
import AddTodoView from "./components/AddTodo/AddTodoView";
import Demo from "./Demo";
import AgGrid from "./components/AgGridPractice/AgGrid";

export default function App() {
  return (
    <div>
      <section classname="container">
        <h1 className="text-center bg-primary">Hello StackBlitz!</h1>
      </section>
      {/* <AddTodo />
      <Demo />
      <Form />
      <Assignment />
      */}

      <AddTodoView />
      <AgGrid />
    </div>
  );
}
