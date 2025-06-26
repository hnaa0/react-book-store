import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/bookSlice";
import { useDispatch } from "react-redux";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
  },
});

// 변경시 로컬스토리지 저장
store.subscribe(() => {
  const { cart } = store.getState();
  localStorage.setItem("BOOK_CART_ITEM", JSON.stringify(cart.cart));
  localStorage.setItem("BOOK_CART_COUNT", JSON.stringify(cart.totalCount));
});

export const useAppDispatch = () => useDispatch();
