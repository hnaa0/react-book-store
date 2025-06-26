import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/bookSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export const useAppDispatch = () => useDispatch();
