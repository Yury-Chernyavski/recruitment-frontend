import React from "react";
import { useAppDispatch } from "../../store/store";
import { deleteTodoItem, toggleStatus } from "../../store/reducers/todoSlice";
import { ITodo } from "../../store/models";
import styles from "./TodoItem.module.scss";

export const TodoItem = ({
  id,
  text,
  isChecked
}: ITodo) => {
  const dispatch = useAppDispatch();

  return (
    <li
      key={id}
      className={styles.item}
    >
      <input
        className={styles.check}
        type="checkbox"
        checked={isChecked}
        onChange={() => dispatch(toggleStatus(id))}
      />
      <span>{text}</span>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(deleteTodoItem(id))}
      >
        Delete
      </button>
    </li>
  );
};
