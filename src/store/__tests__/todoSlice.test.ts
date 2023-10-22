import todoSlice, { addTodoItem, deleteTodoItem, toggleStatus } from "../reducers/todoSlice";
import { ITodo } from "../models";

describe("todoSlice", () => {
  it("should return default state when passion empty action", () => {
    const result = todoSlice(undefined, { type: "" });
    expect(result).toEqual([]);
  });

  it("Should add new todo item with 'addTodo' action", () => {
    const previousState: ITodo[] = [];
    const action = {
      type: addTodoItem.type,
      payload: "Test"
    };

    const result = todoSlice(previousState, action);
    // expect(result).toEqual([
    //   {id: 0, text: "Test", isChecked: false}
    // ])
    expect(result[0].text).toBe("Test");
    expect(result[0].isChecked).toBe(false);

  });

  it("Should toggle todo completed status", () => {
    const previousState = [{
      id: 0,
      text: "Test",
      isChecked: false
    }];

    const action = {
      type: toggleStatus.type,
      payload: 0
    };

    const result = todoSlice(previousState, action);
    expect(result[0].isChecked).toBe(true);
  });

  it("Should remove todo by id", () => {
    const previousState = [{
      id: 0,
      text: "Test",
      isChecked: false
    }];
    const action = {
      type: deleteTodoItem.type,
      payload: 0
    };

    const result = todoSlice(previousState, action);
    expect(result).toEqual([]);
  });
});
