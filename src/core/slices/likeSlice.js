import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: { items: JSON.parse(localStorage.getItem("BOOK_LIKES")) ?? {} },
  reducers: {
    addLike(state, action) {
      const bookId = action.payload.isbn;

      state.items[bookId] = {
        isbn: action.payload.isbn,
        title: action.payload.title,
        authors: action.payload.authors,
        thumbnail: action.payload.thumbnail,
      };
    },
    removeLike(state, action) {
      const bookId = action.payload.isbn;

      delete state.items[bookId];
    },
  },
});

export const likeReducer = likeSlice.reducer;
export const { addLike, removeLike } = likeSlice.actions;
