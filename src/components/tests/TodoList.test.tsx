import React from "react";
import * as Redux from "react-redux";
// import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { TodoList } from "../TodoList/TodoList";
import { store } from "../../store/store";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const todos = [
  { id: 1, isChecked: false, text: "Task 1" },
  { id: 2, isChecked: true, text: "Task 2" },
];

describe("TodoList Component", () => {
  it("matches snapshot before useSelector is called", () => {
    const useSelectorSpy = jest.spyOn(Redux, "useSelector");
    useSelectorSpy.mockReturnValue([]);
    const { asFragment } = render(
      <Redux.Provider store={store}>
        <TodoList />
      </Redux.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot after useSelector is called", () => {
    const useSelectorSpy = jest.spyOn(Redux, "useSelector");
    useSelectorSpy.mockReturnValue(todos);
    const { asFragment } = render(
      <Redux.Provider store={store}>
        <TodoList />
      </Redux.Provider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
