import { createSlice } from '@reduxjs/toolkit';
import { BooksServices } from './services';
import { BooksState } from './types';

const initialState: BooksState = {
  booksInfo: { items: [], totalItems: 0 },
  error: '',
  hasError: false,
  isLoading: false,
  isSuccess: false,
  searchText: '',
  filter: 'relevance',
  subject: '',
  maxResults: 30,
  page: 0,
  moreButtons: {
    error: null,
    hasError: false,
    isLoading: false,
    isSuccess: false,
  },
};

const { getBooksInfo, getMoreBooks } = BooksServices;

const setDefaultValuesPending = (state: BooksState) => {
  state.isLoading = true;
  state.hasError = false;
  state.error = '';
  state.isSuccess = false;
};

const setDefaultValuesFilfilled = (state: BooksState) => {
  state.isLoading = false;
  state.hasError = false;
  state.error = '';
  state.isSuccess = true;
};

const setDefaultValuesRejected = (state: BooksState, error = '') => {
  state.isLoading = false;
  state.hasError = true;
  state.error = error;
  state.isSuccess = false;
};

export const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setSearchText(state, payload) {
      state.searchText = payload.payload;
    },
    setFilter(state, payload) {
      state.filter = payload.payload;
    },
    setSubject(state, payload) {
      state.subject = payload.payload;
    },
    setPage(state, payload) {
      state.page = payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooksInfo.pending, (state) => {
      setDefaultValuesPending(state);
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    });
    builder.addCase(getBooksInfo.fulfilled, (state, action) => {
      setDefaultValuesFilfilled(state);
      state.booksInfo = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getBooksInfo.rejected, (state, action) => {
      setDefaultValuesRejected(state);
      state.error = action.error as string;
      state.isLoading = false;
    });
    builder.addCase(getMoreBooks.pending, (state) => {
      state.moreButtons.isLoading = true;
      state.moreButtons.isSuccess = false;
      state.moreButtons.error = null;
    });
    builder.addCase(getMoreBooks.fulfilled, (state, action) => {
      state.booksInfo.items = state.booksInfo.items && [
        ...state.booksInfo.items,
        ...action.payload.items,
      ];
      state.moreButtons.isLoading = false;
      state.moreButtons.isSuccess = true;
    });
    builder.addCase(getMoreBooks.rejected, (state, action) => {
      state.moreButtons.error = action.error as string;
      state.moreButtons.isLoading = false;
    });
  },
});
