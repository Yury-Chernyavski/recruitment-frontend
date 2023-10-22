import { getTodoList } from "../selectors/getTodoList";

describe("redux selectors", () => {
  it("should select todos from state", () => {
    const todos = [{
      id: 1,
      text: "Test",
      isChecked: false
    }];
    const result = getTodoList({ todos: todos });

    expect(result).toEqual(todos);
  });
});
