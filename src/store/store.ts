import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const store = configureStore({
  reducer: {
    todos: todoSlice
  }
});


export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootSate> = useSelector;
