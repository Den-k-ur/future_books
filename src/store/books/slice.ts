import { createSlice } from '@reduxjs/toolkit';
import { BooksServices } from './services';
import { BooksState } from './types';

const initialState: BooksState = {
  booksInfo: null,
  error: '',
  hasError: false,
  isLoading: false,
  isSuccess: false,
  searchText: '',
  filter: '',
  subject: '',
};

const { booksInfo } = BooksServices;

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
  },
  extraReducers: (builder) => {
    builder.addCase(booksInfo.pending, (state) => {
      setDefaultValuesPending(state);
      state.isLoading = true;
      state.isSuccess = false;
      state.error = null;
    });
    builder.addCase(booksInfo.fulfilled, (state, action) => {
      setDefaultValuesFilfilled(state);
      state.booksInfo = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(booksInfo.rejected, (state, action) => {
      setDefaultValuesRejected(state);
      state.error = action.error as string;
      state.isLoading = false;
    });
  },
});
