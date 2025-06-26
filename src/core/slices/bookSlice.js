import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBooksApi } from "../../services/bookService";

export const searchBooks = createAsyncThunk(
  "books",
  async ({ query, target, page }, { rejectWithValue }) => {
    try {
      const res = await getBooksApi({ query, target, page });
      return res;
    } catch (error) {
      return rejectWithValue(
        error.message || "검색 목록을 가져오는 데 실패했습니다."
      );
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    query: "",
    books: [],
    meta: { total_count: 0, is_end: false },
    error: null,
    loading: false,
    page: 1,
  },
  reducers: {
    resetBooks: (state) => {
      state.books = [];
      state.meta = { total_count: 0, is_end: false };
      state.page = 1;
      state.query = "";
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg.page === 1) {
          state.books = action.payload.documents;
        } else {
          state.books = [...state.books, ...action.payload.documents];
        }
        state.meta = action.payload.meta;
        state.page = action.meta.arg.page;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.message || "검색 목록을 가져오는 데 실패했습니다.";
      });
  },
});

export const booksReducer = booksSlice.reducer;
