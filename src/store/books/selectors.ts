import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '..';

const root = (store: RootState) => store.books;

export const isLoading = createSelector(root, (data) => data.isLoading);

export const error = createSelector(root, (data) => data.error);

export const hasError = createSelector(root, (data) => data.hasError);

export const isSuccess = createSelector(root, (data) => data.isSuccess);

export const booksRoot = createSelector(root, (data) => data.booksInfo);
export const searchText = createSelector(root, (data) => data.searchText);
export const subject = createSelector(root, (data) => data.subject);
export const filter = createSelector(root, (data) => data.filter);
export const page = createSelector(root, (data) => data.page);

export const booksTotal = createSelector(booksRoot, (data) => data?.totalItems);

export const books = createSelector(booksRoot, (data) => data?.items);

export const moreBooksRoot = createSelector(root, (data) => data.moreButtons);
export const moreBooksIsLoading = createSelector(moreBooksRoot, (data) => data.isLoading);

export const detalBookRoot = createSelector(root, (data) => data.detailBookInfo);
export const detailBookInfo = createSelector(detalBookRoot, (data) => data?.volumeInfo);
export const detailBookId = createSelector(detalBookRoot, (data) => data?.id);
