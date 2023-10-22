import React from "react";
import { getTodoList } from "../../store/selectors/getTodoList";
import { useAppSelector } from "../../store/store";
import { TodoItem } from "../../components";
import styles from "./TodoList.module.scss";

export const TodoList = () => {
  const todoList = useAppSelector(getTodoList);

  return (
    <ul
      className={styles.todosList}
      data-testid="todoList"
    >
      {todoList.map(t => (
        !t.isChecked && <TodoItem
          key={t.id}
          id={t.id}
          isChecked={t.isChecked}
          text={t.text}
        />
      ))}
      {todoList.map(t => (
        t.isChecked && <TodoItem
          key={t.id}
          id={t.id}
          isChecked={t.isChecked}
          text={t.text}
        />
      ))}
    </ul>
  );
};
