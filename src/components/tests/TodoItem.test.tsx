import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TodoItem } from "../TodoItem/TodoItem";
import { store } from "../../store/store";
import { toggleStatus, deleteTodoItem } from "../../store/reducers/todoSlice";
import { Provider } from "react-redux";

const todoItem = {
  id: 1,
  text: "Test Task",
  isChecked: false,
};

describe("TodoItem Component", () => {
  it("toggles status when checkbox is clicked", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(store, "dispatch").mockImplementation(mockDispatch);

    const { getByRole } = render(
      <Provider store={store}>
        <TodoItem {...todoItem} />
      </Provider>
    );

    const checkbox = getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(mockDispatch).toHaveBeenCalledWith(toggleStatus(todoItem.id));
  });

  it("deletes item when delete button is clicked", () => {
    const mockDispatch = jest.fn();
    jest.spyOn(store, "dispatch").mockImplementation(mockDispatch);

    const { getByText } = render(
      <Provider store={store}>
        <TodoItem {...todoItem} />
      </Provider>
    );

    const deleteButton = getByText("Delete");

    fireEvent.click(deleteButton);

    expect(mockDispatch).toHaveBeenCalledWith(deleteTodoItem(todoItem.id));
  });
});
