import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../models";


const initialState: ITodo[] = [];

const todoSlice = createSlice({
  name: "addTodo",
  initialState,
  reducers: {
    addTodoItem: (state, action) => {
      state.push({
        id: Date.now(),
        isChecked: false,
        text: action.payload
      });
    },
    deleteTodoItem: (state, action) => {
      const indexElem = state.findIndex(i => i.id === action.payload);
      state.splice(indexElem, 1);
    },
    toggleStatus: (state, action) => {
      const todoItem = state.findIndex(el => el.id === action.payload);
      state[todoItem].isChecked = !state[todoItem].isChecked;
    }
  }
});

export const {
  addTodoItem,
  deleteTodoItem,
  toggleStatus
} = todoSlice.actions;

export default todoSlice.reducer;
