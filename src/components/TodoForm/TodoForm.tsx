import React, { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { addTodoItem } from "../../store/reducers/todoSlice";
import styles from "../../components/TodoForm/TodoForm.module.scss";

export const TodoForm = () => {
  const dispatch = useAppDispatch();
  const [textTodo, setTextTodo] = useState("");


  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTextTodo(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (textTodo !== "") {
      dispatch(addTodoItem(textTodo));
      setTextTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.field}
          type="text"
          value={textTodo}
          onChange={handleInput}
          placeholder="Add task"
        />
        <button className={styles.addButton}>Add</button>
    </form>
  );
};
