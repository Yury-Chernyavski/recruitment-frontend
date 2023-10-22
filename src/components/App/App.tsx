import React from "react";
import "./App.scss";
import { TodoForm, TodoList } from "../index";
import { Provider } from "react-redux";
import { store } from "../../store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todo list</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
