import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("BOOK_CART_ITEM")) ?? {},
    totalCount: JSON.parse(localStorage.getItem("BOOK_CART_COUNT")) ?? 0,
  },
  reducers: {
    addBook: (state, action) => {
      const bookId = action.payload.isbn;

      if (state.cart[bookId]) {
        state.cart[bookId].count += 1;
      } else {
        state.cart[bookId] = {
          isbn: action.payload.isbn,
          title: action.payload.title,
          authors: action.payload.authors,
          thumbnail: action.payload.thumbnail,
          price:
            action.payload.sale_price && action.payload.sale_price !== -1
              ? action.payload.sale_price
              : action.payload.price,
          count: 1,
        };
      }

      state.totalCount += 1;
    },
    removeBook: (state, action) => {
      const bookId = action.payload.isbn;

      if (!state.cart[bookId]) return;

      state.cart[bookId].count -= 1;
      state.totalCount -= 1;

      if (state.cart[bookId].count === 0) {
        delete state.cart[bookId];
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addBook, removeBook } = cartSlice.actions;
