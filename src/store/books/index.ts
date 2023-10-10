import { BooksSlice } from './slice';

export * as booksSelectors from './selectors';
export { BooksServices } from './services';
export const booksSlice = BooksSlice.reducer;
export const booksActions = BooksSlice.actions;
